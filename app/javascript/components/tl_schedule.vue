<template>
  <div class="calendar-wrapper">
    <div class="block schedule-select">
      <el-row type="flex">
        <el-col :span="3">
          <label for="">schedule</label>
        </el-col>
        <el-col :span="21">
          <el-date-picker
            v-model="shedule"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>

    <div class="progress-bar">
      <el-row type="flex">
        <el-col :span="3">
          <label for="progress-bar">activity</label>
        </el-col>
        <el-col :span="21">
          <el-progress :text-inside="true" :stroke-width="24" v-bind:percentage="percentage" id="progress-bar"></el-progress>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        shedule: '',
        percentage: 60
      };
    }
  };

</script>

<style scoped>
.calendar-wrapper{
  padding:10px;
}

.schedule-select, .progress-bar{
  padding: 10px;
}

.el-progress{
  width: 95%;
  display: inline-block;
}


</style>
