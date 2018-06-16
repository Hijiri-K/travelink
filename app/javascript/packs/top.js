import Vue from 'vue'

import TlTop from '../components/top.vue';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

  new Vue({
    el: 'tl-top',
    components: { TlTop }
 })
