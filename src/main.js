/* eslint-disable @typescript-eslint/no-unused-vars */

import { createApp } from "vue"
import App from "./App.vue"
import { createRouter, createWebHistory} from "vue-router"
import Home from "./router/Home.vue"

// HighlightJS
import hljs from "highlight.js/lib/core"
import arduino from "highlight.js/lib/languages/arduino"
import bash from "highlight.js/lib/languages/bash"
import javascript from "highlight.js/lib/languages/javascript"
import php from "highlight.js/lib/languages/php"
import typescript from "highlight.js/lib/languages/typescript"

hljs.registerLanguage("arduino", arduino)
hljs.registerLanguage("bash", bash)
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("php", php)
hljs.registerLanguage("typescript", typescript)

const router = createRouter({
    history: createWebHistory(),
    
    routes: [
        {
            path: '/',
            component: Home,
        }
    ],
})


createApp(App)
    .use(router)
    .mount("#app")
