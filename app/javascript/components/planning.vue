<!-- ここのファイルでコンポーネントをまとめると、変数の受け渡しに不便が生じるので、コンポーネントをplanning.jsで読み込む形式に変更 -->

<template>
  <el-container>
    <el-header>
      <tl-header>
      </tl-header>
    </el-header>

      <el-row type="flex" class="map-video-wrapper">
        <el-col :span=16>
          <tl-map></tl-map>
        </el-col>
        <el-col :span=8>
          <tl-video-chat></tl-video-chat>
        </el-col>
      </el-row>

  <el-main>
      <el-row class="hidden-sm-and-up">
        <el-col :span=24>
          <el-tabs  v-model="activeName">
            <el-tab-pane label="Itinerary" name="itinerary">
              <tl-itinerary v-bind:planningPlaces="planningPlaces"></tl-itinerary>
            </el-tab-pane>
            <el-tab-pane label="Edit"  name="edit">
              <tl-schedule v-bind:percentage="percentage" class="schedule-wrapper"></tl-schedule>
              <tl-itinerary-edit v-bind:places="places" @childs-event="parentsMethod" class="itinerary-edit-wrapper"></tl-itinerary-edit>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <div id="switch-buttons">
          <div class="switch-button" v-on:click="activeName='itinerary', styleObject.transform='translateX(0)'">itinerary</div><!--
       --><div class="switch-button" v-on:click="activeName='edit', styleObject.transform='translateX(100%)'">edit</div>
          <span id="active-bar" v-bind:style="styleObject"></span>
        </div>
      </el-row>

      <el-row :gutter="20" class="hidden-xs-only">
        <el-col :span=12 id="itinerary-box">
            <tl-itinerary v-bind:planningPlaces="planningPlaces"></tl-itinerary>
        </el-col>
        <el-col :span=12 id="itinerary-edit-box">
          <tl-schedule v-bind:percentage="percentage"></tl-schedule>
          <tl-itinerary-edit v-bind:places="places" @childs-event="parentsMethod" class="itinerary-edit-wrapper"></tl-itinerary-edit>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<style>
/* 全体のレイアウト */
body{
  margin:0;
}

.el-header{
  background-color: #63A375;
  height:40px !important;
  position: fixed;
  width:100%;
  z-index: 20;
}

.el-main{
  padding:5px !important;
  margin-top: 280px;
  padding-top:0;
}

.map-video-wrapper{
  width: 100%;
  position: fixed;
  margin-top: 40px;
  z-index: 10;
}

.schedule-wrapper{
  position: fixed;
  top:190px;
  left:0;
  width:100%;
  padding:5px;
  background-color: white;
  box-sizing: border-box;
  z-index: 15;
}

.itinerary-wrapper-wrapper{
  margin-bottom: 50px;
}

#itinerary-box{
  position: fixed;
  overflow-y: auto;
  /* top:150px; */
  height: calc(100%-250px);
}

#itinerary-edit-box{
  position: fixed;
  height: calc(100%-250px);
  overflow-y: auto;
  /* top:150px; */
  left:50%;
}

/* タブ切り替えボタン */
#switch-buttons{
  width:100%;
  position: fixed;
  bottom:0;
  left:0;
  height:50px;
  z-index: 20;
}

.switch-button{
  width:50%;
  height:50px;
  background-color: #f9f9f9;
  border: solid 0.5px #dcdfe6;
  box-sizing: border-box;
  margin: 0;
  display: inline-block;
  text-align: center;
  line-height: 50px;
}

#active-bar{
  position: fixed;
  bottom: 0px;
  left:0;
  width:50%;
  height:2px;
  background-color: #409EFF;
  transition: transform 0.5s;
}

/* Elementのコンポーネントのレイアウト調整 */
.el-checkbox__label{
  display: none !important;
}

.el-checkbox-group{
  font-size: initial !important;
}

.progress-bar{
  height:20px !important;
  line-height: 20px !important;
}

.el-progress-bar__inner{
  transition: width 1s ease-out;
}

.el-tabs__header{
  display:none !important;
}

.el-date-range-picker {
    width: 360px !important;
}

.el-picker-panel__body {
    min-width: 360px !important;
}

.el-date-range-picker__header div {
    margin: 0 !important;
}

.el-date-table th{
  font-size:0;
  line-height: 20px;
}

.el-date-table th:first-letter{
    font-size:10px !important;
}

/* トランジション関係 */
.itinerary-transition-item {
  transition: all 0.5s;
  /* display: inline-block; */
  /* margin-right: 10px; */
}

.itinerary-transition-enter, .itinerary-transition-leave-to{
  opacity: 0;
  transform: translateY(0);
}
.itinerary-transition-leave-active {
  position: absolute;
}

</style>
<script>
// import HelloTemp from '../components/hello_temp.vue'
// import HelloVue from '../components/hello_vue.vue'
import TlHeader from '../components/tl_header.vue'
import TlSchedule from '../components/tl_schedule.vue'
import TlVideoChat from '../components/tl_video_chat.vue'
import TlMap from '../components/tl_map.vue'
import TlItinerary from '../components/tl_itinerary.vue'
import TlItineraryEdit from '../components/tl_itinerary_edit.vue'



var places = [
               { id:1,title: '湯布院', group: '食べ歩き', staying:180, discription: '豊後富士と呼ばれる美しい由布岳の山麓に広がり、全国2位の湯量を誇る人気温泉地。', price: 60, currency:"$", location:"33.262623,131.357272"},
               { id:2, title: 'うみたまご', group: '水族館', staying:60, discription: '海の生き物とふれあえるテーマパークです。', price: 30, currency:"$", location:"33.258607,131.535934"},
               { id:3,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:4,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:5,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:6,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:7,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:8,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:9,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"},
               { id:10,title: '杉乃井ホテル', group: '温泉', staying:120, discription: '別府温泉郷・観海寺温泉の高台に位置する、３世代で楽しめる温泉リゾートホテルです。', price: 120, currency:"$", location:"33.283696,131.475077"}
            ]

var planningPlaces = []

export default {
  components: {
    TlHeader,
    TlSchedule,
    TlVideoChat,
    TlMap,
    TlItinerary,
    TlItineraryEdit
  },
    data() {
        return {
            percentage: 0,
            places:places,
            planningPlaces:planningPlaces,
            places:places,
            activeName:'itinerary',
            styleObject: {
              transform: 'translateX(0)'
            }
        }
    },
    methods: {
      parentsMethod: function(selectedPlaces) {
        // places = selectedPlaces
        // alert(places)
        planningPlaces.length = 0
        planningPlaces.push(...selectedPlaces)

        this.percentage=0;
        var totalTime = 0;
        for(var place of planningPlaces){
         var staying = place['staying']
          totalTime += staying
          this.percentage = totalTime/480*100
          // console.log(totalTime)
        }
         console.log(this.percentage)
      }
    }
}



</script>
