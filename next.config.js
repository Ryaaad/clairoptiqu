/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
 module.exports = {
  // Export the path map for your application
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/Produits': { page: '/Produits/index' },
      '/Produits/[id]': { page: '/Produits/[id]' },
      '/checkout': { page: '/checkout' },
      // Add more routes as needed
    };
  },
};
