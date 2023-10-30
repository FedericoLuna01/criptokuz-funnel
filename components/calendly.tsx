import Script from "next/script"

const Calendly = () => {
  return (
    <>
      <section
        className='py-20 bg-white'
        style={{

        }}
      >
        <div
          className="container h-full "
          id='calendly'
        >
          <div
            className="calendly-inline-widget h-[1050px] sm:h-[1150px] md:h-[1130px] lg:h-[800px] xl:h-[700px] max-w-[1000px] 2xlh-[700px] rounded-md mx-auto "
            // className="calendly-inline-widget"
            // data-url="https://calendly.com/criptokuz/sesion-criptokuz?hide_gdpr_banner=1&background_color=090101&text_color=f3f2f2&primary_color=00deff"
            data-url="https://calendly.com/criptokuz/sesion-criptokuz?hide_gdpr_banner=1"
          />
        </div>
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </>
  )
}

export default Calendly