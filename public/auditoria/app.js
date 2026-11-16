(() => {
  "use strict";

  const config = {
    submissionEndpoint: "",
    calendarUrl: "",
    baseOfferUrl: "",
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

  const applicationQuestions = [
    {
      id: "invested",
      kicker: "Tu recorrido",
      title: "¿Cuánto llevás invertido en tu formación y operativa como trader?",
      description: "Incluí cursos, mentorías, señales, herramientas y cuentas fondeadas.",
      options: [
        ["invested_none", "Todavía no invertí"],
        ["invested_under_500", "Menos de USD 500"],
        ["invested_500_1500", "Entre USD 500 y USD 1.500"],
        ["invested_1500_3000", "Entre USD 1.500 y USD 3.000"],
        ["invested_over_3000", "Más de USD 3.000"],
      ],
    },
    {
      id: "capacity",
      kicker: "Tu situación actual",
      title: "Si vemos que podemos ayudarte, ¿qué nivel de inversión podrías asumir actualmente en tu formación?",
      options: [
        ["capacity_none", "Hoy no estoy en condiciones de invertir"],
        ["capacity_base", "Hasta USD 600"],
        ["capacity_mid", "Entre USD 1.000 y USD 2.000"],
        ["capacity_1to1", "Más de USD 2.000"],
      ],
    },
    {
      id: "timing",
      kicker: "Tu momento",
      title: "¿Cuándo querés comenzar a corregir tu operativa?",
      options: [
        ["timing_now", "Ahora"],
        ["timing_30_days", "Durante los próximos 30 días"],
        ["timing_3_months", "En los próximos 3 meses"],
        ["timing_researching", "Solo estoy investigando por el momento"],
      ],
    },
  ];

  const resultContent = {
    result_foundation: {
      badge: "ETAPA 01 · FUNDAMENTOS",
      title: (name) => `${name}, hoy necesitás convertir tu operativa en un sistema medible.`,
      diagnosis:
        "Tus respuestas muestran que una parte importante de tus decisiones todavía depende de la interpretación del momento. Sin reglas exactas de entrada, invalidación y salida, no podés distinguir una pérdida normal del sistema de un error de ejecución.",
      plan: [
        "Elegí un solo mercado y una sola franja horaria.",
        "Definí un único setup HEW: contexto, entrada, stop e invalidación.",
        "Registrá una muestra inicial de 30 operaciones históricas.",
        "Separá una operación válida que perdió de una operación fuera del plan.",
        "No cambies de estrategia durante la medición.",
      ],
      metrics: [
        "Adherencia a reglas",
        "Winrate del setup",
        "RR promedio",
        "Expectativa por operación",
        "Drawdown de la muestra",
      ],
    },
    result_validation: {
      badge: "ETAPA 02 · VALIDACIÓN",
      title: (name) => `${name}, ya tenés una idea de cómo operar, pero todavía te falta evidencia.`,
      diagnosis:
        "El siguiente paso no es buscar otra estrategia. Es transformar lo que ya hacés en reglas medibles y comprobar qué ocurre en una muestra suficiente. Mientras tus números sean aproximados, cada racha negativa va a hacerte dudar y cambiar de método.",
      plan: [
        "Congelá las reglas actuales durante el período de prueba.",
        "Definí qué convierte una oportunidad en setup A, B o descartable.",
        "Completá o iniciá una muestra de 50–100 operaciones.",
        "Segmentá los resultados por setup, sesión y contexto.",
        "Revisá los números únicamente al terminar el bloque de medición.",
      ],
      metrics: [
        "Winrate por setup",
        "RR promedio real",
        "Expectativa por setup",
        "Frecuencia semanal",
        "Backtest vs. ejecución real",
      ],
    },
    result_execution: {
      badge: "ETAPA 03 · EJECUCIÓN",
      title: (name) => `${name}, el sistema existe; la fuga parece estar en la ejecución.`,
      diagnosis:
        "Tener reglas no alcanza si anticipás entradas, movés stops, aumentás riesgo o tomás operaciones que no cumplen las condiciones. Antes de escalar capital necesitás medir la distancia entre tu plan y lo que realmente ejecutás.",
      plan: [
        "Definí un checklist obligatorio antes de cada entrada.",
        "Capturá pantalla antes y después de cada operación.",
        "Separá resultado financiero de calidad de ejecución.",
        "Establecé un límite diario de operaciones y riesgo.",
        "Calculá el porcentaje semanal de cumplimiento del plan.",
      ],
      metrics: [
        "Adherencia a reglas",
        "Entradas anticipadas",
        "Operaciones impulsivas",
        "Riesgo planeado vs. ejecutado",
        "Válidas vs. fuera del plan",
      ],
    },
    result_scale: {
      badge: "ETAPA 04 · OPTIMIZACIÓN",
      title: (name) => `${name}, ya tenés una base medible. Ahora necesitás concentrar tu ventaja.`,
      diagnosis:
        "Tus respuestas indican que contás con reglas y datos. Para avanzar necesitás segmentar la muestra, eliminar operaciones de baja calidad y escalar únicamente aquello que conserva una expectativa positiva.",
      plan: [
        "Separá resultados por setup, sesión, mercado y contexto.",
        "Identificá qué condiciones producen la mayor expectativa.",
        "Eliminá o reducí los setups de bajo rendimiento.",
        "Definí límites de drawdown antes de aumentar riesgo.",
        "Validá cualquier ajuste en una muestra nueva antes de escalar.",
      ],
      metrics: [
        "Expectativa por setup",
        "Drawdown por etapa",
        "Estabilidad entre muestras",
        "Rendimiento por sesión",
        "Ejecución al aumentar tamaño",
      ],
    },
  };

  const capitalNotes = {
    capital_none:
      "Tu prioridad no debería ser buscar un ingreso mensual todavía. Primero necesitás validar el sistema en backtest y demo, sin comprometer dinero destinado a gastos personales.",
    capital_under_500:
      "Con este capital, el foco debe estar en preservar la cuenta y validar la ejecución. No es responsable proyectar un ingreso fijo mensual a partir de una cuenta pequeña.",
    capital_500_2000:
      "Antes de plantear un objetivo mensual necesitás conocer la expectativa, el drawdown y el riesgo que tu sistema puede soportar. El capital no reemplaza una ventaja validada.",
    capital_2000_5000:
      "Tenés una base que permite medir la operativa real, pero cualquier escalado debe depender de una muestra validada y límites de riesgo definidos de antemano.",
    capital_over_5000:
      "La prioridad es proteger el capital. No aumentes el riesgo para forzar un objetivo mensual; escalá únicamente después de confirmar que la expectativa se mantiene.",
    capital_prop:
      "Tu plan debe contemplar pérdida diaria, drawdown máximo, consistencia y restricciones de la firma. No repitas challenges sin medir primero si tu sistema encaja con esas reglas.",
  };

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
  const privacyLink = document.getElementById("privacyLink");
  const termsLink = document.getElementById("termsLink");

  const state = {
    view: "quiz",
    step: 0,
    applicationStep: 0,
    answers: {},
    application: {},
    lead: null,
    resultId: null,
    attribution: readAttribution(),
  };

  privacyLink.href = config.privacyUrl || "#";
  termsLink.href = config.termsUrl || "#";

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

    if (state.view === "application") {
      progressTrack.hidden = false;
      progressCopy.hidden = false;
      backButton.hidden = false;
      progressCopy.textContent = `Evaluación ${state.applicationStep + 1} de ${applicationQuestions.length}`;
      progressFill.style.width = `${((state.applicationStep + 1) / applicationQuestions.length) * 100}%`;
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
        <div class="step__kicker">Tu diagnóstico está listo</div>
        <h2>¿A dónde te enviamos tu Plan HEW personalizado?</h2>
        <p class="step__description">Completá tus datos para ver el resultado ahora y recibir una copia.</p>

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
              Ver mi Plan HEW personalizado <span aria-hidden="true">→</span>
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
    submitButton.textContent = "Preparando tu diagnóstico…";
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

    const payload = buildPayload("lead");
    try {
      await submitPayload(payload);
      track("Lead");
      renderResult();
      scrollToFunnel();
    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Ver mi Plan HEW personalizado <span aria-hidden="true">→</span>';
      errorBox.innerHTML = `
        <div class="submission-error" role="alert">
          No pudimos guardar tus datos. Revisá tu conexión e intentá nuevamente.
        </div>
      `;
    }
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

  function renderResult() {
    state.view = "result";
    updateChrome();
    const content = resultContent[state.resultId];
    const name = state.lead.first_name;
    const capitalNote = capitalNotes[state.answers.capital] || capitalNotes.capital_none;

    app.innerHTML = `
      <div class="step result">
        <div class="result__badge">${escapeHtml(content.badge)}</div>
        <h2>${escapeHtml(content.title(name))}</h2>
        <div class="result__diagnosis">${escapeHtml(content.diagnosis)}</div>

        <div class="result-grid">
          <section class="result-card">
            <h3>Tu plan inicial de 7 días</h3>
            <ol>${content.plan.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
          </section>
          <section class="result-card">
            <h3>Métricas prioritarias</h3>
            <ul>${content.metrics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>

        <div class="capital-note">
          <strong>Sobre tu capital:</strong> ${escapeHtml(capitalNote)}
        </div>

        <div class="result-cta">
          <h3>¿Querés saber si HEW puede ayudarte a corregir este punto?</h3>
          <p>Respondé tres preguntas adicionales. Si tu situación encaja con uno de nuestros programas, te mostraremos el siguiente paso adecuado.</p>
          <button class="primary-button" id="applicationStart" type="button">
            Quiero saber si HEW es para mí <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    `;

    track("ViewResult", { result_id: state.resultId });
    document.getElementById("applicationStart").addEventListener("click", () => {
      track("ApplicationStart");
      state.applicationStep = 0;
      renderApplicationQuestion();
    });
  }

  function renderApplicationQuestion() {
    state.view = "application";
    updateChrome();
    const question = applicationQuestions[state.applicationStep];
    app.innerHTML = `
      <div class="step">
        <div class="step__kicker">${escapeHtml(question.kicker)}</div>
        <h2>${escapeHtml(question.title)}</h2>
        ${question.description ? `<p class="step__description">${escapeHtml(question.description)}</p>` : ""}
        ${renderOptions(question, state.application[question.id])}
      </div>
    `;
    bindOptionButtons((value) => selectApplicationAnswer(question.id, value));
  }

  function selectApplicationAnswer(id, value) {
    state.application[id] = value;
    window.setTimeout(async () => {
      if (state.applicationStep < applicationQuestions.length - 1) {
        state.applicationStep += 1;
        renderApplicationQuestion();
        return;
      }

      try {
        await submitPayload(buildPayload("application"));
      } catch (error) {
        // El lead ya fue guardado. La ruta se muestra igualmente y el envío se puede reintentar desde el CRM.
      }
      track("CompleteRegistration");
      renderRoute();
    }, 230);
  }

  function determineRoute() {
    const { capacity, timing } = state.application;
    if (capacity === "capacity_1to1" && ["timing_now", "timing_30_days"].includes(timing)) {
      return "one_to_one";
    }
    if (capacity === "capacity_base" && timing !== "timing_researching") {
      return "base";
    }
    if (capacity === "capacity_mid") {
      return "review";
    }
    return "nurture";
  }

  function renderRoute() {
    state.view = "route";
    updateChrome();
    const route = determineRoute();
    const screens = {
      one_to_one: {
        icon: "↗",
        title: "Tu situación encaja para evaluar un acompañamiento personalizado.",
        text: "El siguiente paso es reservar una entrevista para revisar tu operativa, tus métricas y si HEW tiene sentido para tu caso.",
        button: "Reservar mi entrevista",
        url: config.calendarUrl,
      },
      base: {
        icon: "✓",
        title: "El programa BASE puede ser el siguiente paso adecuado.",
        text: "Está pensado para construir los fundamentos y trabajar el contenido formativo sin acompañamiento individual.",
        button: "Conocer el programa BASE",
        url: config.baseOfferUrl,
      },
      review: {
        icon: "✓",
        title: "Recibimos tu evaluación.",
        text: "Tu situación requiere una revisión manual para indicarte el siguiente paso más coherente. El equipo podrá contactarte con los datos que dejaste.",
      },
      nurture: {
        icon: "✓",
        title: "Tu Plan HEW ya está listo.",
        text: "Empezá por implementar el plan de 7 días. Cuando tengas una muestra y estés en condiciones de avanzar, vas a poder solicitar una evaluación.",
      },
    };
    const screen = screens[route];
    const hasUrl = Boolean(screen.url && screen.url !== "#");

    app.innerHTML = `
      <div class="step route-screen">
        <div class="route-screen__icon" aria-hidden="true">${escapeHtml(screen.icon)}</div>
        <h2>${escapeHtml(screen.title)}</h2>
        <p>${escapeHtml(screen.text)}</p>
        ${
          screen.button && hasUrl
            ? `<a class="link-button" href="${escapeHtml(screen.url)}" target="_blank" rel="noopener">${escapeHtml(screen.button)} →</a>`
            : ""
        }
        ${screen.button && !hasUrl ? `<div class="demo-notice">Destino pendiente de configurar en <code>config.js</code>.</div>` : ""}
      </div>
    `;
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
      answers: { ...state.answers },
      application: type === "application" ? { ...state.application } : {},
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
    if (state.view === "application") {
      if (state.applicationStep > 0) {
        state.applicationStep -= 1;
        renderApplicationQuestion();
      } else {
        renderResult();
      }
    }
  });

  renderQuestion();
})();
