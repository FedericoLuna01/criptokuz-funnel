/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/auditoria",
				destination: "/auditoria/index.html",
			},
		];
	},
};

module.exports = nextConfig;
