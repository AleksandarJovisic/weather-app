<template>
  <div>
    <div class="row">
      <average-ten-days-temperature></average-ten-days-temperature>
      <search></search>
    </div>
    <div class="row">
<current-weather></current-weather>
    </div>
    <div class="row">
      <div class="col-12">
        <seven-days-forecast></seven-days-forecast>
      </div>
    </div>
    <div class="bottom-div">
        <div class="pollutionDiv">
      <pollution></pollution>
    </div>
    <div class="uv-index-div">
      <UVIndex></UVIndex>
    </div>
    </div>

  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import SevenDaysForecast from "../components/SevenDaysForecast.vue";
import Search from "../components/Search.vue";
import Pollution from "../components/Pollution.vue";
import UVIndex from "../components/UVIndex.vue";
import AverageTenDaysTemperature from '../components/AverageTenDaysTemperature.vue';
import CurrentWeather from '../components/CurrentWeather.vue';
export default {
  data: function () {
    return {
      weather: {},
    };
  },
  components: {
    SevenDaysForecast,
    Pollution,
    Search,
    UVIndex,
    AverageTenDaysTemperature,
    CurrentWeather
  },
  filters: {
    datePartOne: function (date) {
      return moment(date).format("MMM DD");
    },
    datePartTwo: function (date) {
      return moment(date).format("MMM DD YYYY");
    },
  },
  computed: {
    ...mapState({
      tenDaysForecast: (state) => state.tenDaysForecast,
      tenDaysForecastCity: (state) => state.tenDaysForecastCity,
      averageTemperature: (state) => state.averageTemperature,
      sevenDaysForecast: (state) => state.sevenDaysForecast,
    }),
    tenDaysForecastPrepared() {
      let days = [];
      this.tenDaysForecast.forEach((item) => {
        if (days.length <= 9) days.push(item);
      });
      return days;
    },
    sevenDaysForecastAverageTemp() {
      let averageTemp = 0;
      let sum = 0;
      this.sevenDaysForecast.forEach((item) => {
        sum = item.temp.day + sum;
      });
      averageTemp = sum / this.sevenDaysForecast.length;
      return averageTemp;
    },
  },
};
</script>

<style scoped>

.row {
  margin: 0;
}
.pollutionDiv {
  position: absolute;
  top: 30px;
  right: 150px;
  width: 200px !important;
}
.uv-index-div {
  position: absolute;
  top: 30px;
  left: 50px;
  width: 200px !important;
}
@media (max-width: 1200px){
.pollutionDiv {
  position: absolute;
  top: 380px;
  right: 150px;
  width: 200px !important;
}
.uv-index-div {
  position: absolute;
  top: 380px;
  left: 50px;
  width: 200px !important;
}
}
@media (max-width: 980px){
.pollutionDiv {
  position: absolute;
  top: 380px;
  right: 200px;
  width: 150px !important;
}
.uv-index-div {
  position: absolute;
  top: 380px;
  left: 50px;
  width: 150px !important;
}
}
@media (max-width: 940px){
.pollutionDiv {
  position: absolute;
  top: 380px;
  right: 100px;
  width: 150px !important;
}
.uv-index-div {
  position: absolute;
  top: 380px;
  left: 50px;
  width: 150px !important;
}
}
@media (max-width: 740px){
.pollutionDiv {
  position: absolute;
  top: 80px;
  right: 70px;
  width: 150px !important;
}
.uv-index-div {
  position: absolute;
  top: 80px;
  left: 20px;
  width: 150px !important;
}
}
@media (max-width: 620px){
.pollutionDiv {
  display: inline-block;
  position: relative;
  top: 0px;
  right: 0px;
  left: 10%;
  width: 40% !important;
}
.uv-index-div {
  display: inline-block;
  position: relative;
  top: 0px;
  left: 40%;
  width: 40% !important;
}
.bottom-div{
  display: inline-block;
  padding-bottom: 0;
  margin-bottom: 0;
}
}
@media (max-width: 540px){
.pollutionDiv {
  position: relative;
  margin-top: 20px;
  right: 0px;
  left: 0%;
  width: 100% !important;
  margin-bottom: 24px;
}
.uv-index-div {

  position: relative;
  top: 0px;
  left: 0%;
  width: 100% !important;
}
.bottom-div{
  display: block;
}
}
</style>