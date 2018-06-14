<template>
<div class="">
  <div class="itinerary-all-wrapper">
    <div class="itinerary-wrapper">
      <div class="itinerary-item-wrapper  inline-block">
        <el-card :body-style="{ padding: '0px' }" class="itinerary-item">
          <div class="check-box-wrapper inline-block">
              <div class="tl-checkbox"><el-checkbox v-model="checked"></el-checkbox></div>
          </div><!--
           --><div class="itinerary-item__image inline-block">
                <img src="https://cdn.4travel.jp/img/tcs/t/album/src/10/40/47/src_10404771.jpg?1259494610">
              </div><!--
           --><div class="itinerary-item__contents inline-block">
                <section class="itinerary-item__contents__section">
                  <h3>湯布院</h3>
                  <div class="itinerary-item__contents__section__category">
                    <p>種類：観光地　滞在時間：180 min</p>
                  </div>
                  <div class="itinerary-item__contents__section__stay">
                  </div>
                  <div class="itinerary-item__contents__section__discription">
                    <p>豊後富士と呼ばれる美しい由布岳の山麓に広がり、全国2位の湯量を誇る人気温泉地。</p>
                  </div>
                  <div class="itinerary-item__contents__section__price">
                    <p>￥0</p>
                  </div>
                </section>
              </div>
        </el-card>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>

.itinerary-item-wrapper{
  padding:0 10px 15px 0;
  width:calc(100%-0px);
}
 .el-card{
   /* margin:10px; */
   padding:0;
   height:150px;
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
   vertical-align: middle;
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
   width:calc(100%-240px);
 }

 .itinerary-item__contents__section{
   padding:0 15px 15px 15px;
 }

 .inline-block{
   display: inline-block;
   vertical-align: top;
 }

 .check-box-wrapper{
   height:150px;
   width:70px;
   position:relative;
 }

 .itinerary-item__contents__section__category p, .itinerary-item__contents__section__stay p{
   font-size: 12px;
   color:#666666;
 }
.tl-checkbox{
  margin:0 30px 0 30px;
  line-height: 150px;
}
</style>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
