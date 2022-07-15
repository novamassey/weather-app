import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig:{
        WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET
    },
    privateRuntimeConfig:{
        HELLO:"world in the server, not in client"
    },
css:[
    "~/assets/css/tailwind.css"
],
build:{
    postcss:{
        postcssOptions: {
            plugins:{
                tailwindcss:{},
                autoprefixer:{},
            },
        },
    },
},
})
