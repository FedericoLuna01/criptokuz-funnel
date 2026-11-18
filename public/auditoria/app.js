(() => {
  "use strict";

  const config = {
    submissionEndpoint: "",
    whatsappSetters: [],
    whatsappMessage:
      "Hola, soy {name}. Completé el formulario del Plan HEW y quiero recibir mi plan personalizado.",
    privacyUrl: "#",
    termsUrl: "#",
    landingVersion: "hew-v1",
    ...(window.HEW_CONFIG || {}),
  };

  const questions = [
    {
      id: "stage",
      kicker: "Tu punto de partida",
      title: "¿En qué punto estás hoy con el trading?",
      options: [
        ["starting", "Estoy comenzando y todavía no opero"],
        ["demo", "Estoy aprendiendo y operando en demo"],
        ["real_inconsistent", "Opero con capital propio, pero sin consistencia"],
        ["prop_challenge", "Estoy intentando conseguir una cuenta fondeada"],
        ["prop_funded", "Ya opero una cuenta fondeada"],
        ["profitable_under_1k", "Soy rentable, pero todavía no llego a USD 1.000 mensuales"],
      ],
    },
    {
      id: "capital",
      kicker: "Tu estructura",
      title: "¿Con qué capital o tipo de cuenta pensás operar?",
      description:
        "Considerá únicamente capital destinado al trading, sin incluir dinero necesario para tus gastos personales.",
      options: [
        ["capital_none", "Todavía no tengo capital operativo definido"],
        ["capital_under_500", "Menos de USD 500 de capital propio"],
        ["capital_500_2000", "Entre USD 500 y USD 2.000"],
        ["capital_2000_5000", "Entre USD 2.000 y USD 5.000"],
        ["capital_over_5000", "Más de USD 5.000"],
        ["capital_prop", "Quiero operar mediante una prop firm"],
      ],
    },
    {
      id: "clarity",
      kicker: "Tu sistema",
      title: "¿Qué tan claras tenés tus reglas de entrada y salida?",
      options: [
        ["clarity_low", "1–3: siento que estoy adivinando"],
        ["clarity_medium", "4–6: tengo una idea, pero cambio las reglas"],
        ["clarity_high_inconsistent", "7–8: tengo reglas, aunque no siempre las ejecuto"],
        ["clarity_validated", "9–10: tengo reglas claras, medidas y las sigo"],
      ],
    },
    {
      id: "metrics",
      kicker: "Tu evidencia",
      title: "¿Qué métricas reales conocés actualmente de tu operativa?",
      options: [
        ["metrics_none", "No registro mis operaciones"],
        ["metrics_logged_no_numbers", "Registro operaciones, pero no conozco mis números"],
        ["metrics_estimated", "Conozco aproximadamente mi winrate y mi RR"],
        ["metrics_journal_inconsistent", "Tengo journal y backtest, pero todavía no soy consistente"],
        ["metrics_validated", "Tengo una muestra validada y sé qué setups me funcionan"],
      ],
    },
    {
      id: "bottleneck",
      kicker: "Tu prioridad",
      title: "¿Cuál sentís que es tu principal obstáculo hoy?",
      options: [
        ["bottleneck_system", "No tengo un sistema claro"],
        ["bottleneck_strategy_hopping", "Salto de estrategia en estrategia"],
        ["bottleneck_edge", "No sé si realmente tengo una ventaja estadística"],
        ["bottleneck_execution", "Sé qué hacer, pero la ansiedad me hace romper las reglas"],
        ["bottleneck_risk", "No manejo correctamente el riesgo"],
        ["bottleneck_scale", "Mi sistema funciona, pero no sé cómo escalarlo"],
      ],
    },
  ];

  const countryCodes = [
    ["AR", "+54", "Argentina"],
    ["MX", "+52", "México"],
    ["CL", "+56", "Chile"],
    ["CO", "+57", "Colombia"],
    ["PE", "+51", "Perú"],
    ["UY", "+598", "Uruguay"],
    ["BO", "+591", "Bolivia"],
    ["EC", "+593", "Ecuador"],
    ["PY", "+595", "Paraguay"],
    ["VE", "+58", "Venezuela"],
    ["PA", "+507", "Panamá"],
    ["CR", "+506", "Costa Rica"],
    ["DO", "+1", "Rep. Dominicana"],
    ["ES", "+34", "España"],
    ["US", "+1", "Estados Unidos"],
    ["OTHER", "+", "Otro país"],
  ];

  const app = document.getElementById("funnelApp");
  const backButton = document.getElementById("backButton");
  const progressCopy = document.getElementById("progressCopy");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const footerYear = document.getElementById("footerYear");

  const state = {
    view: "quiz",
    step: 0,
    answers: {},
    lead: null,
    setter: null,
    resultId: null,
    attribution: readAttribution(),
  };

  footerYear.textContent = new Date().getFullYear();

  function readAttribution() {
    const params = new URLSearchParams(window.location.search);
    const fields = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid",
    ];
    return Object.fromEntries(fields.map((key) => [key, params.get(key) || ""]));
  }

  function track(event, extra = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...extra });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function scrollToFunnel() {
    const section = document.querySelector(".funnel-section");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function renderOptions(question, selected, handler) {
    return `
      <div class="options">
        ${question.options
          .map(
            ([value, label]) => `
              <button
                class="option-button ${selected === value ? "is-selected" : ""}"
                type="button"
                data-value="${escapeHtml(value)}"
              >
                <span class="option-button__label">${escapeHtml(label)}</span>
                <span class="option-button__arrow" aria-hidden="true">→</span>
              </button>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function bindOptionButtons(handler) {
    app.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        app.querySelectorAll(".option-button").forEach((item) => item.classList.remove("is-selected"));
        button.classList.add("is-selected");
        handler(button.dataset.value);
      });
    });
  }

  function renderQuestion() {
    state.view = "quiz";
    const question = questions[state.step];
    updateChrome();
    app.innerHTML = `
      <div class="step">
        <div class="step__kicker">${escapeHtml(question.kicker)}</div>
        <h2>${escapeHtml(question.title)}</h2>
        ${question.description ? `<p class="step__description">${escapeHtml(question.description)}</p>` : ""}
        ${renderOptions(question, state.answers[question.id])}
      </div>
    `;
    bindOptionButtons((value) => selectQuizAnswer(question.id, value));
  }

  function selectQuizAnswer(id, value) {
    state.answers[id] = value;
    if (state.step === 0) track("QuizStart");
    window.setTimeout(() => {
      if (state.step < questions.length - 1) {
        state.step += 1;
        renderQuestion();
      } else {
        renderLeadForm();
      }
    }, 230);
  }

  function updateChrome() {
    if (state.view === "quiz") {
      progressTrack.hidden = false;
      progressCopy.hidden = false;
      backButton.hidden = state.step === 0;
      progressCopy.textContent = `Pregunta ${state.step + 1} de ${questions.length}`;
      progressFill.style.width = `${((state.step + 1) / questions.length) * 100}%`;
      return;
    }

    if (state.view === "contact") {
      progressTrack.hidden = false;
      progressCopy.hidden = false;
      backButton.hidden = false;
      progressCopy.textContent = "Tus datos";
      progressFill.style.width = "100%";
      return;
    }

    progressTrack.hidden = true;
    progressCopy.hidden = true;
    backButton.hidden = true;
  }

  function renderLeadForm() {
    state.view = "contact";
    updateChrome();
    const countryOptions = countryCodes
      .map(([iso, code, name]) => `<option value="${iso}|${code}">${name} ${code}</option>`)
      .join("");

    app.innerHTML = `
      <div class="step">
        <div class="step__kicker">Último paso</div>
        <h2>¿A dónde te enviamos tu Plan HEW personalizado?</h2>
        <p class="step__description">Completá tus datos y te llevamos directo a WhatsApp para continuar.</p>

        <form class="lead-form" id="leadForm" novalidate>
          <div class="field">
            <label for="firstName">Primer nombre</label>
            <input id="firstName" name="first_name" autocomplete="given-name" placeholder="Tu nombre" />
            <p class="field__error" id="firstNameError"></p>
          </div>

          <div class="field">
            <label for="email">Correo electrónico</label>
            <input id="email" name="email" type="email" autocomplete="email" placeholder="tu@email.com" />
            <p class="field__error" id="emailError"></p>
          </div>

          <div class="field field--full">
            <label for="phone">Número de WhatsApp</label>
            <div class="phone-grid">
              <select id="phoneCountry" name="phone_country" aria-label="País del número de WhatsApp">
                ${countryOptions}
              </select>
              <input id="phone" name="phone" inputmode="tel" autocomplete="tel-national" placeholder="11 2345 6789" />
            </div>
            <p class="field__error" id="phoneError"></p>
          </div>

          <div class="field field--full">
            <button class="primary-button" id="leadSubmit" type="submit">
              Recibir mi Plan HEW por WhatsApp <span aria-hidden="true">→</span>
            </button>
            <div id="submissionError"></div>
            <p class="form-consent">
              Al dejar tus datos aceptás que KUZ se ponga en contacto con vos por WhatsApp,
              teléfono o email. No vendemos ni compartimos tu información. Al continuar
              aceptás nuestra <a href="${escapeHtml(config.privacyUrl || "#")}">Política de Privacidad</a>
              y nuestros <a href="${escapeHtml(config.termsUrl || "#")}">Términos</a>.
            </p>
          </div>
        </form>
      </div>
    `;

    document.getElementById("leadForm").addEventListener("submit", handleLeadSubmit);
    document.getElementById("firstName").focus();
  }

  function validateLead(formData) {
    const errors = {};
    const name = String(formData.get("first_name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").replace(/\D/g, "");

    if (name.length < 2) errors.firstName = "Ingresá tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Ingresá un correo válido.";
    if (phone.length < 7 || phone.length > 15) errors.phone = "Ingresá un WhatsApp válido.";

    return errors;
  }

  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    error.textContent = message || "";
  }

  async function handleLeadSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validateLead(formData);

    setFieldError("firstName", "firstNameError", errors.firstName);
    setFieldError("email", "emailError", errors.email);
    setFieldError("phone", "phoneError", errors.phone);

    if (Object.keys(errors).length) return;

    const submitButton = document.getElementById("leadSubmit");
    const errorBox = document.getElementById("submissionError");
    submitButton.disabled = true;
    submitButton.textContent = "Abriendo WhatsApp…";
    errorBox.innerHTML = "";

    const [countryIso, countryCode] = String(formData.get("phone_country") || "AR|+54").split("|");
    const nationalPhone = String(formData.get("phone") || "").replace(/\D/g, "");

    state.lead = {
      first_name: String(formData.get("first_name") || "").trim(),
      email: String(formData.get("email") || "").trim().toLowerCase(),
      phone: `${countryCode}${nationalPhone}`,
      phone_country: countryIso,
      phone_country_code: countryCode,
    };
    state.resultId = calculateResult();
    state.setter = chooseSetter(state.lead);

    if (!state.setter) {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Recibir mi Plan HEW por WhatsApp <span aria-hidden="true">→</span>';
      errorBox.innerHTML = `
        <div class="submission-error" role="alert">
          El contacto por WhatsApp no está disponible en este momento. Intentá nuevamente más tarde.
        </div>
      `;
      return;
    }

    const payload = buildPayload("lead");
    try {
      await submitPayload(payload);
      track("Lead");
      redirectToWhatsApp();
    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Recibir mi Plan HEW por WhatsApp <span aria-hidden="true">→</span>';
      errorBox.innerHTML = `
        <div class="submission-error" role="alert">
          No pudimos guardar tus datos. Revisá tu conexión e intentá nuevamente.
        </div>
      `;
    }
  }

  function chooseSetter(lead) {
    const setters = Array.isArray(config.whatsappSetters)
      ? config.whatsappSetters.filter((setter) => setter?.name && setter?.number)
      : [];
    if (!setters.length) return null;

    const randomValues = new Uint32Array(1);
    if (window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(randomValues);
      return setters[randomValues[0] % setters.length];
    }
    return setters[Math.floor(Math.random() * setters.length)];
  }

  function normalizeWhatsAppNumber(value) {
    let digits = String(value || "").replace(/\D/g, "");
    // WhatsApp exige el 9 para celulares argentinos en formato internacional.
    if (/^54\d{10}$/.test(digits) && !digits.startsWith("549")) {
      digits = `549${digits.slice(2)}`;
    }
    return digits;
  }

  function redirectToWhatsApp() {
    const phone = normalizeWhatsAppNumber(state.setter.number);
    const message = String(config.whatsappMessage || "")
      .replaceAll("{name}", state.lead.first_name)
      .replaceAll("{setter}", state.setter.name);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    track("WhatsAppRedirect", { setter_name: state.setter.name });
    window.location.assign(url);
  }

  function calculateResult() {
    const { clarity, metrics, bottleneck } = state.answers;
    if (
      clarity === "clarity_validated" &&
      metrics === "metrics_validated" &&
      bottleneck === "bottleneck_scale"
    ) {
      return "result_scale";
    }

    if (
      (clarity === "clarity_high_inconsistent" &&
        ["bottleneck_execution", "bottleneck_risk"].includes(bottleneck)) ||
      (["metrics_journal_inconsistent", "metrics_validated"].includes(metrics) &&
        ["bottleneck_execution", "bottleneck_risk"].includes(bottleneck))
    ) {
      return "result_execution";
    }

    if (
      clarity === "clarity_low" ||
      metrics === "metrics_none" ||
      ["bottleneck_system", "bottleneck_strategy_hopping"].includes(bottleneck)
    ) {
      return "result_foundation";
    }

    return "result_validation";
  }

  function buildPayload(type) {
    return {
      submission_type: type,
      landing_version: config.landingVersion,
      submitted_at: new Date().toISOString(),
      page_url: window.location.href.split("#")[0],
      result_id: state.resultId || "",
      ...state.attribution,
      ...(state.lead || {}),
      setter_name: state.setter?.name || "",
      setter_phone: normalizeWhatsAppNumber(state.setter?.number || ""),
      answers: { ...state.answers },
      application: {},
    };
  }

  async function submitPayload(payload) {
    if (!config.submissionEndpoint) {
      const previous = JSON.parse(localStorage.getItem("hewDemoSubmissions") || "[]");
      previous.push(payload);
      localStorage.setItem("hewDemoSubmissions", JSON.stringify(previous.slice(-20)));
      return;
    }

    await fetch(config.submissionEndpoint, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  }

  backButton.addEventListener("click", () => {
    if (state.view === "quiz" && state.step > 0) {
      state.step -= 1;
      renderQuestion();
      return;
    }
    if (state.view === "contact") {
      state.step = questions.length - 1;
      renderQuestion();
      return;
    }
  });

  renderQuestion();
})();
