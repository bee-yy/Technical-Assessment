export default defineNuxtConfig({
  compatibilityDate: '2026-01-17',
  modules: ['@nuxtjs/tailwindcss'],
  devtools:{enabled:false},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: true,
  },

   app: {
    head: {
      link: [
        { 
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: '/favicon.svg' 
        }
      ]
    }
  }
})