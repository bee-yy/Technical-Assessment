export default defineNuxtConfig({
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