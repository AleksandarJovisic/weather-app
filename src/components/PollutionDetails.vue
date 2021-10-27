<template>
  <div>
    <div class="infoCard" v-for="(item, index) in pollutionData.list[0].components" :key="index">
      <span class="headline">
        {{index.toUpperCase()}}
      </span>
      <br/>
      <span>
{{item}}
      </span>
       
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
    pollutionData: (state) => state.pollutionData
  }), 
},
methods:{

}
}
</script>

<style scoped>
.infoCard{
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 50px;
background: rgb(255, 255, 255, 0.25);
border-radius: 4px;
border: none;
box-shadow: 3px 6px rgb(0, 0, 0, 0.25);
  color: rgb(94, 87, 87);
  font-size: 36px;
}
.headline{
  color: white;
  font-size: 36px;
}
</style>