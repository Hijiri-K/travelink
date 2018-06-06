import Vue from 'vue'
import Calendar from '../calendar.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })


document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('calendar'))
  const app = new Vue({
    el,
    render: h => h(Calendar)
  })

  console.log(app)
})
