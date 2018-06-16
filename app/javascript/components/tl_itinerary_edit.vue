<template>
<div class="">
  <div id="itinerary-all-wrapper">

<el-checkbox-group   v-model="selectedPlaces">
    <div class="itinerary-wrapper" v-for="place in places">
      <div class="itinerary-item-wrapper  inline-block">
        <el-card :body-style="{ padding: '0px' }" class="itinerary-item">
          <div class="check-box-wrapper inline-block">
              <div class="tl-checkbox"><el-checkbox v-bind:label="place" name="" @change='$emit("childs-event", selectedPlaces)'></el-checkbox></div>
          </div><!--
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
  </el-checkbox-group>
    <!-- <button type="button" name="button"  @click='$emit("childs-event", selectedPlaces)'>add places</button> -->
      <!-- <span>selectedPlaces: {{ selectedPlaces }}</span> -->
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
  margin:68px 28px 68px 28px;
  line-height: 14px;
}

</style>


<script>
  export default {
    props:['places'],
    data: function() {
      return {
          selectedPlaces: []
        // checked: true
      };
    }
  };

</script>
