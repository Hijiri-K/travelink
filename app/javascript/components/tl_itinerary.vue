<template>
  <div class="">
    <div class="itinerary-all-wrapper">
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

      <div class="itinerary-wrapper" v-for="place in places">
        <div class="time-line-wrapper inline-block">
          <div class="time-line__line-wrapper inline-block">
            <div class="time-line__line">
                <span class="time-line__line__bot"></span>
            </div>
          </div><!--
       --><div class="time-line__time inline-block">
            <p>2:00</p>
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

    </div>
  </div>
</template>

<script>
export default {
  props: ['places'],
  data() {
    return {
      // places: ''
    };
  },
}

</script>

<style scoped>

.itinerary-item-wrapper{
  padding-bottom:15px;
  width:calc(100%-70px);
}
 .el-card{
   /* margin:10px; */
   padding:0;
   height:150px;
  box-sizing: border-box;
 }

 .el-card__body{
   padding:0px;
   /* height:150px; */
 }
 .itinerary-item__image{
   /* display: inline-block; */
   height:150px;
   width:150px;
 }
 img{
   height:150px;
   width:150px;
   vertical-align: text-bottom;
 }

 p{
   margin:0;
   word-wrap: break-all;
 }

 h3{
   padding-top:15px;
   padding-bottom: 5px;
   margin: 0;
 }
 .itinerary-item{
 }

 .itinerary-item__contents{
   vertical-align:top;
   height:150px;
   width:calc(100%-160px);
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
   height:167px;
   width:4px;
   background-color: #8895B3;
   margin-right: 8px;
   margin-left: 8px;
 }

 .time-line-wrapper{
   height:167px;
   width:70px;
   position:relative;
 }

 .time-line__time{
   height:167px;
   width:50px;
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
   margin-right: 6px;
   margin-left: 6px;
 }

 .time-line__line-wrapper{
   height:167px;
   width:20px;
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

 .itinerary-item__contents__section__category p, .itinerary-item__contents__section__stay p{
   font-size: 12px;
   color:#666666;
 }
</style>
