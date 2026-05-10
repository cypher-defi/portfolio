const nextConfig = {
  trailingSlash: true,
  compiler: {
    // Target modern browsers only - drops legacy polyfills
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for modern browsers
  experimental: {
    // Use modern JS features without transpiling
    browsersListForSwc: true,
  },
}
module.exports = nextConfig
