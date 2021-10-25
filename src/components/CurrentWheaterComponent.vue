<template>
  <div class="main">
      <button @click="getSevenDaysForecast()"><i class="far fa-search"></i>Search</button>
      <input class="locationInput" v-model="city">
      <vue-country-code
      class="countryCode" @onSelect="onSelect"
                  >
   </vue-country-code>
   <div v-if="this.weather != ''">{{weather.name}}</div>
   <div v-if="this.weather.main != undefined">{{weather.main.temp}}</div>
   <seven-days-forecast></seven-days-forecast>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import SevenDaysForecast from '../components/SevenDaysForecast.vue';
export default {
  data: function () {
    return {
      api_key: '8f288937c61ed29da70bef79d04dc768',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      city: 'Novi Sad',
      countryCode: '',
      weather: {},
      connection: null
    };
  },
  components:{
SevenDaysForecast
  },
  computed:{
  ...mapState({
    tenDaysForecast: (state) => state.tenDaysForecast,
    tenDaysForecastCity: (state) => state.tenDaysForecastCity,
    averageTemperature: (state) => state.averageTemperature
  }),
  tenDaysForecastPrepared(){
    let days = [];
    this.tenDaysForecast.forEach(item => {
      if(days.length <= 9) days.push(item)
    });
    return days
  },
  query(){
    return this.city +', '+ this.countryCode
  }
  },
      methods: {
    getSevenDaysForecast(){
      this.$store.dispatch('getSevenDaysForecast', this.query)
    },
    // fetchWeather () {
    //     fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
    //       .then(res => {
    //         return res.json();
    //       }).then(this.setResults);
    // },
        fetchWeather () {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.query}&key=4450f8446f9f4b4f851ee48aab1cb43d`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
    },
    setResults (results) {
      this.$store.commit('setTenDaysForecast', results.data)
      this.$store.commit('setTenDaysForecastCity', results.city_name)
      this.$store.commit('setAverageTemperatureForBackground')

    },
    onSelect({name, iso2, dialCode}) {
      this.countryCode = iso2
     },
    },
created(){
     this.fetchWeather();
  }

};
</script>

<style scoped>
.main{
  background: linear-gradient(135deg,#123887, #f8f0eb 60%);
}
.locationInput{
border-radius: 4px;
height: 28px;
border: 1px solid gray;
}
</style>>
