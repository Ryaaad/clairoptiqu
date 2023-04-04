/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
 module.exports = {
  // Export the path map for your application
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/produits': { page: '/produits' },
      '/produits/[id]': { page: '/produits/[id]' },
      '/checkout': { page: '/checkout' },
      // Add more routes as needed
    };
  },
};
