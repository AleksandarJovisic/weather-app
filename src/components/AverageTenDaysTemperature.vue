<template>
  <div
    class="main"
    v-if="averageTemperature != null && tenDaysForecast.length > 0"
  >
    <div class="cityName">
      {{ sevenDaysForecastCity }}
    </div>
    <div class="headline">
      {{ new Date(tenDaysForecast[0].datetime) | moment }} -
      {{ new Date(tenDaysForecast[9].datetime) | moment }}
    </div>
    <div class="temperature">
      <p>
        {{ Math.round(averageTemperature) }}<sup class="degree">&#8451;</sup>
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
  margin-bottom: 24px;
}
.degree {
  font-size: large;
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
  font-size: 18px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
}
.temperature {
  color: white;
  font-size: 50px;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  padding: 0;
}
.cityName {
  color: white;
  font-size: 50px;
  font-weight: 500;
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
</style>