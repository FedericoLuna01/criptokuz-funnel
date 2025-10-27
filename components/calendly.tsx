"use client";

import Script from "next/script";
import { useEffect } from "react";
import Heading from "./ui/heading";

const Calendly = () => {
	useEffect(() => {
		const handleCalendlyEvent = (e: MessageEvent) => {
			if (e.data.event && e.data.event === "calendly.event_scheduled") {
				if (typeof window !== "undefined") {
					import("react-facebook-pixel")
						.then((ReactPixel) => {
							const pixelId = "1262635791863284";
							ReactPixel.default.init(pixelId);
							ReactPixel.default.fbq("track", "Lead");
						})
						.catch((error) => {
							console.error(
								"Error loading Facebook Pixel for Lead tracking:",
								error,
							);
						});
				}
			}
		};

		window.addEventListener("message", handleCalendlyEvent);

		return () => {
			window.removeEventListener("message", handleCalendlyEvent);
		};
	}, []);

	return (
		<>
			<section className="flex items-center mx-auto flex-col mt-10 px-2">
				<div>
					<Heading
						title={`Agendá tu llamada`}
						highlightWords={["llamada", "2 de 2"]}
					/>
				</div>
				<div className="container h-full rounded-lg" id="calendly">
					<div
						className="calendly-inline-widget mt-6 lg:mt-0 h-[650px] sm:h-[700px] md:h-[750px] xl:h-[740px] max-w-[1000px] rounded-md mx-auto"
						data-url="https://calendly.com/criptokuz/criptokuz-mentorship-1-a-1-mauro-clon-1?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2f979f&text_color=000000&background_color=ffffff"
						// 00fbff
						style={{
							colorScheme: "white",
						}}
					></div>
				</div>
			</section>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			></Script>
		</>
	);
};

export default Calendly;
