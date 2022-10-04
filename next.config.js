/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: `/${encodeURI("ورود-به-اکانت")}`,
                destination: "/login",
            },
            {
                source: `/${encodeURI("قوانین-سایت")}`,
                destination: "/terms",
            },
        ];
    },
};

module.exports = nextConfig;
