import Vue from 'vue'
import TlPlanning from '../components/planning.vue'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

  new Vue({
    el: 'tl-planning',
    components: { TlPlanning }
 })
