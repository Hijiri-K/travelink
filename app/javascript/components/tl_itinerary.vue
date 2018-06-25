<template>
  <div class="itinerary-wrapper-wrapper">
    <div class="time-line-wrapper top inline-block">
      <div class="time-line__line-wrapper top inline-block">
        <div class="time-line__line bar-top">
        </div>
          <span class="time-line__line__bot bar-top__dot"></span>
      </div><!--
   --><div class="time-line__time top inline-block">
        <p>2:00</p>
      </div>
    </div>

      <transition-group tag="div" name="itinerary-transition">
        <div class="itinerary-wrapper itinerary-transition-item" v-for="place in planningPlaces" v-bind:key="place.id">
          <div class="time-line-wrapper inline-block">
            <div class="time-line__line-wrapper inline-block">
              <div class="time-line__line">
                  <span class="time-line__line__bot"></span>
              </div>
            </div><!--
         --><div class="time-line__time inline-block">
              <p>22:00</p>
            </div>
          </div><!--
       --><div class="itinerary-item-wrapper  inline-block">
            <el-card :body-style="{ padding: '0px' }" class="itinerary-item"><!--
               --><div class="itinerary-item__image inline-block">
                    <img src="https://cdn.4travel.jp/img/tcs/t/album/src/10/40/47/src_10404771.jpg?1259494610">
                  </div><!--
               --><div class="itinerary-item__contents inline-block">
                    <section class="itinerary-item__contents__section">
                      <h3>{{place.title}}</h3>
                      <div class="itinerary-item__contents__section__category">
                        <p>種類：{{place.group}}　滞在時間：{{place.staying}} min</p>
                      </div>
                      <div class="itinerary-item__contents__section__stay">
                      </div>
                      <div class="itinerary-item__contents__section__discription">
                        <p>{{place.discription}}</p>
                      </div>
                      <div class="itinerary-item__contents__section__price">
                        <p>{{place.currency}}{{place.price}}</p>
                      </div>
                    </section>
                  </div>
            </el-card>
          </div>
        </div>
      </transition-group>

  </div>
</template>

<script>
export default {
  props: ['planningPlaces'],
  data() {
    return {
      // places: ''
    };
  },
}

</script>

<style scoped>


.itinerary-item-wrapper{
  padding-bottom:8px;
  width:calc(100%-50px);
}
 .el-card{
   /* margin:10px; */
   padding:0;
   height:100px;
  box-sizing: border-box;
 }

 .el-card__body{
   padding:0px;
   /* height:150px; */
 }
 .itinerary-item__image{
   /* display: inline-block; */
   height:100px;
   width:100px;
 }
 img{
   height:100px;
   width:100px;
   vertical-align: text-bottom;
 }

 h3{
   padding-top:5px;
   margin: 0;
   font-size: 16px;
 }

 p{
   margin:0;
   word-wrap: break-all;
   font-size: 12px
 }

 .itinerary-item__contents__section__category p, .itinerary-item__contents__section__stay p{
   font-size: 10px;
   color:#666666;
 }

 .itinerary-item{
 }

 .itinerary-item__contents{
   vertical-align:top;
   height:100px;
   width:calc(100%-100px);
 }

 .itinerary-item__contents__section{
   padding:0 15px 15px 15px;
 }

 .inline-block{
   display: inline-block;
   vertical-align: top;
 }

 .time-line__line{
   /* border: solid 2px #8895B3; */
   height:110px;
   width:4px;
   background-color: #8895B3;
   margin-right: 3px;
   margin-left: 3px;
 }

 .time-line-wrapper{
   height:110px;
   width:50px;
   position:relative;
 }

 .time-line__time{
   height:110px;
   width:40px;
 }

 .time-line__time p{
   font-size:12px;
   padding: 0 0 4px 2px;
 }

 .time-line__time p{
   position: absolute;
   bottom:-3px;
   /* width:50px; */
 }

 .time-line__line__bot{
   width:8px;
   height:8px;
   border-radius: 50%;
   background-color: #6D6875;
   position: absolute;
   bottom:7px;
   left:0px;
   margin-right: 1px;
   margin-left: 1px;
 }

 .time-line__line-wrapper{
   height:110px;
   width:10px;
 }

 .time-line__time p{
   /* font-size: 14px; */
 }

 .top{
   height:20px;
 }

 .top p{
   bottom:-10px;
 }

 .bar-top{
   height:10px;
   /* width:100%; */
   position: absolute;
   bottom: -7px;
 }

 .bar-top__dot{
   bottom: 0px;
 }



</style>
