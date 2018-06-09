<template>
  <div class="itinerary-wrapper">
    <el-card :body-style="{ padding: '0px' }" class="itinerary-item">
          <div class="itinerary-item__image inline-block">
            <img src="https://cdn.4travel.jp/img/tcs/t/album/src/10/40/47/src_10404771.jpg?1259494610">
          </div>

          <div class="itinerary-item__contents inline-block">
            <section class="itinerary-item__contents__section">
              <h3>湯布院</h3>
              <div class="itinerary-item__contents__section__discription">
                <p>豊後富士と呼ばれる美しい由布岳の山麓に広がり、全国2位の湯量を誇る人気温泉地。</p>
              </div>
            </section>
          </div>
    </el-card>
  </div>
</template>

<style scoped>
 .el-card{
   margin:10px;
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
 }

 p{
   margin:0;
   word-wrap: break-all;
 }

 .itinerary-item__contents{
   vertical-align:top;
   height:150px;
   width:calc(100% - 160px);
 }

 .itinerary-item__contents__section{
   padding:0 15px 15px 15px;
 }

 .inline-block{
   display: inline-block;
 }
</style>
