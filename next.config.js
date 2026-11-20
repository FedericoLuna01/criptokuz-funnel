/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/thank-you",
				destination: "/thankyou",
			},
			{
				source: "/auditoria",
				destination: "/auditoria/index.html",
			},
		];
	},
};

module.exports = nextConfig;
