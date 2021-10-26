<template>
        <div class="col-6 offset-3">
<vue-country-code class="countryCode" @onSelect="onSelect" defaultCountry='RS'></vue-country-code>
      <input class="locationInput" v-model="city" v-on:keyup.enter="getSevenDaysForecast();fetchWeather()">
      <button @click="getSevenDaysForecast();fetchWeather()" class="searchButton"><i class="icon fas fa-search" type='button' ></i></button>
      </div>
</template>

<script>
export default {
data(){
    return{
      api_key: '8f288937c61ed29da70bef79d04dc768',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      city: 'Novi Sad',
      countryCode: 'RS',
    }
},
computed:{
   query(){
    return this.city +', '+ this.countryCode
  }
},
methods:{
       getSevenDaysForecast(){
      this.$store.dispatch('getSevenDaysForecast', this.query)
    },
    fetchWeather () {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
    },
        setResults (results) {
      this.weather = results;
    },
    onSelect({name, iso2, dialCode}) {
      this.countryCode = iso2
     }
},
created(){
     this.getSevenDaysForecast();
     this.fetchWeather();
  }
}
</script>

<style scoped>
.searchButton{
height: 41px;
border-radius: 0px 4px 4px 0 ;
border: none;
background: white;
cursor: pointer;
margin-bottom: 2px;
}
.icon{
  border: none;
}
.countryCode{
  background: white;
  margin-right: 12px;
  padding-top: 1px;
  padding-bottom: 2px;
  border-radius: 4px;
}
input:focus{
    outline: none;
}
.locationInput{
  margin-top: 200px;
border-radius: 4px 0 0 4px;
height: 41px;
width: 250px !important;
border: none;
padding-left: 12px;
font-size: 16px;
font-weight: 600;
color: rgb(58, 56, 56);
font-family: 'Poppins', sans-serif;
}
.searchPart{
  height: 60px;
}
</style>