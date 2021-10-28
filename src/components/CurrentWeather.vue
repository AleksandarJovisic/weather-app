<template>
      <div class="col-xl-2 offset-xl-5 current-weather-column">
        <div
          class="currentWeatherCity"
          v-if="sevenDaysForecast[0] != undefined"
        >
          {{ new Date(sevenDaysForecast[0].dt * 1000) | datePartOne }} -
          {{ new Date(sevenDaysForecast[6].dt * 1000) | datePartTwo }}
        </div>
        <div class="currentWeather" v-if="this.sevenDaysForecast != ''">
          {{ Math.round(sevenDaysForecastAverageTemp) }}<sup class="degree">&#8451;</sup>
        </div>
      </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      weather: {},
    };
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
.degree {
  font-size: large;
  vertical-align: super;
}
.current-weather-column {
  margin-top: 50px;
}
.currentWeather {
  color: white;
  font-size: 60px;
  font-weight: 900;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}
.currentWeatherCity {
  margin-top: 24px;
  color: #3d4f53;
  font-size: 18px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}
</style>