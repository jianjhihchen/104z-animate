import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import WOW from 'wow.js'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 

import App from './App.vue'
import router from './router'

// new WOW({
//   boxClass: 'wow',
//   animateClass: 'animate__animated',
//   offset: 200,
//   mobile: true,
//   live: true
// }).init()
AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animate__animated'
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')