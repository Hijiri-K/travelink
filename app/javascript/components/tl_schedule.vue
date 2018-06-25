<template>
  <div class="schedule-wrapper">
    <div class="block schedule-select">
      <!-- <el-row type="flex">
        <el-col :span="3"> -->
          <!-- <label class="schedule-label inline-block" for="">schedule</label> -->
        <!-- </el-col>
        <el-col :span="21"> -->
          <el-date-picker
            v-model="shedule"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date" class="inine-block">
          </el-date-picker>
        <!-- </el-col>
      </el-row> -->
    </div>

    <div class="progress-bar">
      <!-- <el-row type="flex">
        <el-col :span="3"> -->
          <!-- <label class="schedule-label inline-block"  for="progress-bar">activity</label> -->
        <!-- </el-col>
        <el-col :span="21"> -->
          <el-progress :text-inside="true" :stroke-width="20" :percentage=percentage class="inline-block"></el-progress>
        <!-- </el-col>
      </el-row> -->
    </div>

  </div>
</template>

<script>

  export default {
    props: ['percentage'],
    data() {
      return {
        shedule: ''
      };
    },
}
</script>

<style scoped>
.schedule-wrapper{
  padding-top:10px;
}

.schedule-select, .progress-bar{
  padding-bottom: 10px;
  height: 40px;
  line-height: 40px;
}

.el-progress{
  /* width: calc(100%-120px); */
    width: 100%;
  display: inline-block;
}

.inline-block{
  display: inline-block;
}

.schedule-label{
  height:40px;
  width:100px;
}

.el-input__inner{
  width:250px !important;
}



</style>
