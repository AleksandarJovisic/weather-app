<template>
      <div class="col-4 offset-4">
        <div class="search-div">
        <img class="image" src="../assets/sun.png">
        <vue-country-code class="countryCode" @onSelect="onSelect" defaultCountry='RS'></vue-country-code>
        <input class="locationInput" v-model="city" v-on:keyup.enter="getSevenDaysForecast();fetchWeather()">
        <button @click="getSevenDaysForecast();fetchWeather()" class="searchButton"><i class="icon fas fa-search" type='button' ></i></button>
        </div>
        
      </div>
</template>

<script>
export default {
data(){
    return{
      api_key: '8f288937c61ed29da70bef79d04dc768',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      city: '',
      countryCode: '',
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
// created(){
//      this.getSevenDaysForecast();
//      this.fetchWeather();
//   }
}
</script>

<style scoped>
.image{
  width: 7%;
  height: 7%;
  margin-right: 12px;
  margin-left: 12px;
  float: left;
}
.search-div{
  background: white;
  height: auto;
  margin-top: 200px;
  border-radius: 16px;
  padding: 20px;
}
.searchButton{
height: 38px;
border: none;
outline: none;
background: white;
cursor: pointer;
margin-bottom: 2px;
margin-left: -40px;
}
.icon{
  border: none;
}
.countryCode{
  background: white;
  margin-right: 12px;
  padding-top: 0.5px;
  padding-bottom: 2.5px;
  border-radius: 4px;
}
input:focus{
    outline: none;
}
.locationInput{
border-radius: 4px;
height: 41px;
border: 1px solid rgb(182, 178, 178);
width: 72%;
padding-left: 12px;
padding-right: 50px;
font-size: 16px;
font-weight: 600;
color: rgb(58, 56, 56);
font-family: 'Poppins', sans-serif;
}
.searchPart{
  height: 60px;
}
</style>