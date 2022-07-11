/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/src/.next",
  sassOptions: {
    additionalData: `@import "./styles/_variables.scss"; @import "./styles/_mixins.scss";`,
  },
};

module.exports = nextConfig;
