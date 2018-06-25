<template>
<div>
  <el-checkbox-group class="itinerary-wrapper-wrapper"  v-model="selectedPlaces">
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
</div>
</template>

<style scoped>
.itinerary-item-wrapper{
  padding:0 0 8px 0;
  width:calc(100%);
}
 .el-card{
   /* margin:10px; */
   padding:0;
   height:100px;
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
   vertical-align: middle;
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
   width:calc(100%-150px);
 }

 .itinerary-item__contents__section{
   padding:0 15px 15px 15px;
 }

 .inline-block{
   display: inline-block;
   vertical-align: top;
 }

 .check-box-wrapper{
   height:100px;
   width:50px;
   position:relative;
 }

.tl-checkbox{
  margin:43px 18px 43px 18px;
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
