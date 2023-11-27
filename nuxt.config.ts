// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt', "@nuxt/image"],
  vue:{
    compilerOptions:{
      isCustomElement: (name)=>(['swiper-container', 'swiper-slide'].includes(name))
    }
  },
  content:{
    markdown:{
      anchorLinks: false
    }
  }
})
