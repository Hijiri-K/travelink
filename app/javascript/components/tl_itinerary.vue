<template>
  <div class="itinerary-all-wrapper">

    <div class="time-line-wrapper top inline-block">
      <div class="time-line__line-wrapper top inline-block">
        <div class="time-line__line bar-top">

        </div>
          <span class="time-line__line__bot bar-top__dot"></span>
      </div>
      <div class="time-line__time top inline-block">
        <p>22:00</p>
      </div>
    </div>

    <div class="itinerary-wrapper">
      <div class="time-line-wrapper inline-block">
        <div class="time-line__line-wrapper inline-block">
          <div class="time-line__line">
              <span class="time-line__line__bot"></span>
          </div>
        </div>
        <div class="time-line__time inline-block">
          <p>22:00</p>
        </div>
      </div>
      <div class="itinerary-item-wrapper  inline-block">
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
    </div>

    <div class="itinerary-wrapper">
      <div class="time-line-wrapper inline-block">
        <div class="time-line__line-wrapper inline-block">
          <div class="time-line__line">
              <span class="time-line__line__bot"></span>
          </div>
        </div>
        <div class="time-line__time inline-block">
          <p>9:00</p>
        </div>
      </div>
      <div class="itinerary-item-wrapper  inline-block">
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
    </div>

    <div class="itinerary-wrapper">
      <div class="time-line-wrapper inline-block">
        <div class="time-line__line-wrapper inline-block">
          <div class="time-line__line">
              <span class="time-line__line__bot"></span>
          </div>
        </div>
        <div class="time-line__time inline-block">
          <p>9:00</p>
        </div>
      </div>
      <div class="itinerary-item-wrapper  inline-block">
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
    </div>

    <div class="itinerary-wrapper">
      <div class="time-line-wrapper inline-block">
        <div class="time-line__line-wrapper inline-block">
          <div class="time-line__line">
              <span class="time-line__line__bot"></span>
          </div>
        </div>
        <div class="time-line__time inline-block">
          <p>9:00</p>
        </div>
      </div>
      <div class="itinerary-item-wrapper  inline-block">
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
    </div>
  </div>
</template>



<style scoped>

.itinerary-item-wrapper{
  padding:0 10px 15px 0;
  width:calc(100%-110px);
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
 }

 p{
   margin:0;
   word-wrap: break-all;
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
   width:80px;
   position:relative;
 }

 .time-line__time{
   height:167px;
   width:50px;
 }

 .time-line__time p{
   position: absolute;
   bottom:-3px;
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

 .top{
   height:20px;
 }

 .top p{
   bottom:-10px;
 }

 .bar-top{
   height:10px;
   position: absolute;
   bottom: -7px;
 }

 .bar-top__dot{
   bottom: 0px;
 }
</style>
