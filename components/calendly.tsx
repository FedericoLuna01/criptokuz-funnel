import Script from "next/script"

const Calendly = () => {
  return (
    <>
      <section
        className="container my-10"
        id='calendly'
      >
        <div
          className="calendly-inline-widget h-[800px] w-full"
          data-url="https://calendly.com/criptokuz/sesion-criptokuz?hide_gdpr_banner=1"
          style={{
            backgroundColor: '#f5f5f5',
          }}
        />
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </>
  )
}

export default Calendly