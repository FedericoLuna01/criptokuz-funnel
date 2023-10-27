import Script from "next/script"

const Calendly = () => {
  // $(document).ready(
  //   $('#ifr').load(function(){
  //       $(this).contents().find('body').html('Hey, i`ve changed content of <body>!    Yay!!!');
  //   });
  //   $('#ifr').attr("src", "ifr.htm");
  // })

  return (
    <>
      <section
        className="bg-gradient-to-br from-primary/80 to-30% to-white py-20"
        style={{

        }}
      >
        <div
          className="container h-full "
          id='calendly'
        >
          <div
            className="calendly-inline-widget h-[1200px] sm:h-[1400px] md:h-[1130px] lg:h-[800px] xl:h-[700px] max-w-[1000px] 2xlh-[700px] rounded-md mx-auto "
            // className="calendly-inline-widget"
            // data-url="https://calendly.com/d/x2c-c3b-yk3/criptokuz/sesion-criptokuz?hide_gdpr_banner=1&background_color=000000&text_color=fbfafa&primary_color=09ecf6"
            data-url="https://calendly.com/criptokuz/sesion-criptokuz?hide_gdpr_banner=1&background_color=000000&text_color=f3f2f2&primary_color=00deff"
          />
        </div>
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </>
  )
}

export default Calendly