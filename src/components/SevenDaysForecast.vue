<template>
  <div>
    <div class="row">
      <div class="col-xl-10 offset-xl-1 week-column">
    <div class='card' v-for="(day, index) in sevenDaysForecast" 
    :key="index" :class="{bottomRow: index == 5, bottomRowSmaller: index == 4}">   
    {{new Date(day.dt * 1000) | moment}}     
     <br />
     <span class="temp">
  {{Math.round(day.temp.day)}}<sup class="degree">&#8451;</sup>
     </span>
   </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment';
import {mapState} from 'vuex';
export default {
data(){
  return{
  }
},
computed:{
  ...mapState({
    sevenDaysForecast: (state) => state.sevenDaysForecast
  }),
},
filters:{
  moment: function(date){
    return moment(date).format('dddd')
  }
}
}
</script>

<style scoped>

.week-column {
 /* padding-left: 10%; */

}
.degree {
  font-size: large;
  vertical-align: super;
}
.temp{
  color: white;
  font-size: 40px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
.card{
  text-align: center;
  padding: 25px;
  display: inline-block;
  margin-top: 60px;
  margin-right: 1%;
  border-radius: 16px;
  background: transparent;
  border: none;
  color: #3f4446;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
 width: 13%;
}
@media (max-width: 1450px){
.card{
  padding: 16px;
   width: 13%;
}
}
@media (max-width: 1280px){
.card{
  padding: 10px;
   width: 13%;
}
}
@media (max-width: 1200px){
.card{
  padding: 16px;
   width: 13%;
}
}
@media (max-width: 1200px){
.card{
  padding: 10px;
   width: 13%;
}
}
@media (max-width: 980px){
.card{
  padding: 8px;
}
}
@media (max-width: 950px){
.card{
 padding: 6px;
 font-size: 16px;
}
}
@media (max-width: 830px){
.card{
width: 20%;
margin-right: 0%;
}
}
@media (max-width: 830px){
.card{
width: 20%;
}
.bottomRow{
  width: 30%;
  margin-left: 22.5%;
}
}
@media (max-width: 550px){
  .card{
padding: 2px;
}
}
@media (max-width: 500px){
  .card{
width: 25%;
font-size: 14px;
}
.bottomRow{
  width: 27%;
  margin-left: 2%;
}
.bottomRowSmaller{
  margin-left: 10%;
}
}
</style>