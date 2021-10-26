<template>
  <div class="pollutionInfo" :class="pollutionDescription" v-if="this.pollutionData.list != undefined">
     <i class="fal fa-head-side-mask maskIcon"></i><br/>
      <div class="pollutionHeadline">
Air Quality
      </div>
      <!-- {{sevenDaysForecastCity}}<br /> --> 
      <div class="pollutionDescription">
{{pollutionDescription}}
      </div>
      <div class="linkDiv">
<router-link class="link" :to="{name: 'PollutionDetails'}">
  More Details
</router-link>
      </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
data(){
  return{

  }
},
computed:{
  ...mapState({
    sevenDaysForecastCity: (state) => state.sevenDaysForecastCity,
    pollutionData: (state) => state.pollutionData
  }),
  pollutionDescription(){
      if(this.pollutionData.list[0].main.aqi == 1) return 'Good'
      if(this.pollutionData.list[0].main.aqi == 2) return 'Fair'
      if(this.pollutionData.list[0].main.aqi == 3) return 'Moderate'
      if(this.pollutionData.list[0].main.aqi == 4) return 'Poor'
      if(this.pollutionData.list[0].main.aqi == 5) return 'Bad'
      
  }  
}
}
</script>

<style scoped>
.linkDiv{
  margin-top: 10%;
}
.link{
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
}
.maskIcon{
float: left;
margin-left: 6px;
margin-top: 6px;
}
.Good{
border: 5px solid green;
background: rgb(31, 201, 31);
color: green;
}
.Fair{
border: 5px solid rgb(29, 243, 29);
background: rgb(139, 236, 139);
color: rgb(13, 182, 13);
}
.Moderate{
  border: 5px solid rgb(112, 108, 108);
background: rgb(192, 236, 172);
color: rgb(85, 81, 81);    
}
.Poor{
border: 5px solid rgb(214, 91, 91);
background: rgb(240, 137, 137);
color: rgb(218, 40, 40);    
}
.Bad{
  border: 5px solid rgb(126, 3, 3);
background: rgb(241, 86, 86);
color: rgb(126, 3, 3);   
}
.pollutionDescription{
  margin-top: 16%;
  font-size: 30px;
}
.pollutionInfo{
    text-align: center;
    height: 200px;
    width: 100%;
    margin-left: 35%;
    border-radius: 16px;
    font-size: 20px;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
}
.pollutionHeadline{
  text-align: center;
}
</style>