<template>
  <div
    class="main"
    v-if="averageTemperature != null && tenDaysForecast.length > 0"
  >
    <div class="cityName">
      {{ sevenDaysForecastCity }}
    </div>
        <div class="temperature-current">
      {{ Math.round(weather.main.temp) }}<sup class="degree">&#8451;</sup>
    </div>
    <div class="headline">
      {{ new Date(tenDaysForecast[0].datetime) | moment }} -
      {{ new Date(tenDaysForecast[9].datetime) | moment }}
    </div>
    <div class="temperature">
      <p>
        {{ Math.round(averageTemperature) }}<sup class="degree-small">&#8451;</sup>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tenDaysForecast: (state) => state.tenDaysForecast,
      averageTemperature: (state) => state.averageTemperature,
      sevenDaysForecastCity: (state) => state.sevenDaysForecastCity,
      weather: (state) => state.weather,
    }),
  },
  filters: {
    moment: function (date) {
      return moment(date).format("MMM DD");
    },
  },
};
</script>
<style scoped>
.cityName{
  margin-bottom: 6px;
}
.degree {
  font-size: large;
  vertical-align: super;
}
.degree-small {
  font-size: small;
  vertical-align: super;
}
.main {
  margin-top: 50px;
  text-align: center;
  position: absolute;
  padding: 0;
}
.headline {
  color: #3f4446;
  font-size: 16px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0px;
}
.temperature-current{
  color: white;
  font-size: 50px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  padding: 0;
  margin-bottom: 8px;
}
.temperature {
  color: white;
  font-size: 30px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  padding: 0;
}
.cityName {
  color: white;
  font-size: 40px;
  font-weight: 400;
  font-family: "Popins", sans-serif !important;
}
@media (max-width: 740px){
.main {
  margin-top: 10px;
}
.cityName {
  font-size: 40px;
}
}
@media (max-width: 620px){
.main {
  top: 30px !important;
}
.cityName {
  font-size: 30px;
}
.temperature{
  margin-bottom: 0;
}
}
</style>