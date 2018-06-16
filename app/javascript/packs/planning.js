// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm'
// import Router from 'vue-router'
// Vue.use(Router)


import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale })

// import HelloTemp from '../components/hello_temp.vue'
// import HelloVue from '../components/hello_vue.vue'
import TlHeader from '../components/tl_header.vue'
import TlSchedule from '../components/tl_schedule.vue'
import TlVideoChat from '../components/tl_video_chat.vue'
import TlMap from '../components/tl_map.vue'
import TlItinerary from '../components/tl_itinerary.vue'
import TlItineraryEdit from '../components/tl_itinerary_edit.vue'


//TODO: planning.vueの使用をやめる予定の為、要削除
// new Vue({
//     el: 'tl-planning',
//     components: { TlPlanning },
//     data:{
//     }
//  })

 var places = [
                { id:1,title: '湯布院', group: '食べ歩き', staying:180, discription: '豊後富士と呼ばれる美しい由布岳の山麓に広がり、全国2位の湯量を誇る人気温泉地。', price: 60, currency:"$", location:"33.262623,131.357272"},
                { id:2, title: 'うみたまご', group: '水族館', staying:60, discription: '海の生き物とふれあえるテーマパークです。', price: 30, currency:"$", location:"33.258607,131.535934"},
                { id:3,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"}
             ]

 var planningPlaces = []

 // var percentage = 0;

 new Vue({
     el: 'tl-header',
     components: { TlHeader },
     data:{

     }
  })

  var tl_schedule = new Vue({
      el: 'tl-schedule',
      components: { TlSchedule },
      data:{
        percentage: 0
      }
   })

   new Vue({
       el: 'tl-video-chat',
       components: { TlVideoChat },
       data:{
       }
    })

    new Vue({
        el: 'tl-map',
        components: { TlMap },
        data:{
        }
     })


  new Vue({
        el: 'tl-itinerary',
        components: { TlItinerary },
        data: {
          places:planningPlaces
      }
     })

    //
  new Vue({
         el: 'tl-itinerary-edit',
         components: { TlItineraryEdit },
         data:{
           places:places
         },
         methods: {
           parentsMethod: function(selectedPlaces) {
             // places = selectedPlaces
             // alert(places)
             planningPlaces.length = 0
             planningPlaces.push(...selectedPlaces)

             tl_schedule.percentage=0;
             var totalTime = 0;
             for(var place of planningPlaces){
              var staying = place['staying']
               totalTime += staying
               tl_schedule.percentage = totalTime/480*100
               // console.log(totalTime)
             }
              console.log(tl_schedule.percentage)
           }
         }
      })
