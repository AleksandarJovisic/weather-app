<template>
  <div class="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-12 offset-0">
    <div class="search-div">
      <img class="image" src="../assets/sun.png" />
      <vue-country-code
        class="countryCode"
        @onSelect="onSelect"
        defaultCountry="RS"
      ></vue-country-code>
      <input
        class="locationInput"
        v-model="city"
        v-on:keyup.enter="getData();getTenDaysForecast()"
        v-bind:class="{ inputError: this.searchError != ''}"
      />
      <button @click="getData();getTenDaysForecast()" class="searchButton">
        <i class="icon fas fa-search" type="button"></i>
      </button>
    </div>
    <div class="error" v-if="this.searchError != ''">
      {{ this.searchError }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      city: "",
      countryCode: "",
    };
  },
  computed: {
    ...mapState({
      searchError: (state) => state.searchError,
      sevenDaysForecast: (state) => state.sevenDaysForecast,
      averageTemperature: (state) => state.averageTemperature
    }),
    query() {
      return this.city + ", " + this.countryCode;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("getData", this.query);
    },
    getTenDaysForecast(){
      this.$store.dispatch("getTenDayForecast", this.query);
    },
    onSelect({ iso2 }) {
      this.countryCode = iso2;
    },
    checkConditions(){
      if (this.city != "" && this.countryCode != "" && this.searchError == "" && this.sevenDaysForecast.length > 0) return true
    }
  },
  created() {
    setInterval(() => {
      if (this.checkConditions() == true) this.getData(this.query)
    }, 900000);
        setInterval(() => {
      if (this.checkConditions() == true) this.getTenDaysForecast(this.query)
    }, 1800000);
  },
};
</script>

<style scoped>
.error {
  margin-top: 12px;
  color: rgb(224, 3, 3);
  text-align: center;
}
.image {
  width: 7%;
  height: 7%;
  margin-right: 12px;
  margin-left: 12px;
  float: left;
}
.search-div {
  background: white;
  height: auto;
  margin-top: 280px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 3px 6px rgb(0, 0, 0, 0.25);
}
.searchButton {
  height: 34px;
  border: none;
  outline: none;
  background: white;
  cursor: pointer;
  margin-bottom: 2px;
  margin-left: -40px;
}
.icon {
  border: none;
}
.countryCode {
  background: white;
  margin-right: 12px;
  padding-top: 0.5px;
  padding-bottom: 2.5px;
  border-radius: 4px;
}
input:focus {
  outline: none;
}
.locationInput {
  border-radius: 4px;
  height: 41px;
  border: 1px solid rgb(182, 178, 178);
  width: 72%;
  padding-left: 12px;
  padding-right: 50px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(58, 56, 56);
  font-family: "Poppins", sans-serif;
}
.searchPart {
  height: 60px;
}
.inputError{
  border: 3px solid rgb(218, 53, 53);
}
@media (max-width: 1420px){
 .search-div{
   width: 140%;
   margin-left: -20%;
 } 
}
@media (max-width: 1300px){
 .search-div{
   width: 120%;
   margin-left: -10%;
 } 
}
@media (max-width: 1200px){
 .search-div{
   width: 100%;
   margin-left: 0%;
 } 
}
@media (max-width: 470px){
 .image{
display: none;
 } 
 .locationInput{
   width: 80%;
 }
}
</style>