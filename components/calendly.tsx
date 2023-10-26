import Script from "next/script"

const Calendly = () => {
  return (
    <>
      <section
        className="container my-10"
        id='calendly'
      >
        <div
          className="calendly-inline-widget h-[1200px] sm:h-[1400px] md:h-[1130px] lg:h-[800px] xl:h-[700px] max-w-[1000px] rounded-md"
          // data-url="https://calendly.com/criptokuz/sesion-criptokuz?hide_gdpr_banner=1"
          data-url="https://calendly.com/criptokuz/sesion-criptokuz?background_color=000000&text_color=fbfbfb&primary_color=00f4ff"
          // style={{
          //   minWidth: '320px',
          //   height: '1130px',
          // }}
        />
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </>
  )
}

export default Calendly