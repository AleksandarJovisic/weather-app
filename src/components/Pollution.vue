<template>
    <div class="card text-white card-has-bg click-col" v-if="this.pollutionData.list != undefined">
    <div class="card-img-overlay d-flex flex-column">
      <div class="card-body">
        <h4 class="mt-0">
          <div class="pollutionHeadline">Air Quality</div>
        </h4>
        <div class="pollutionDescription" :class="pollutionDescription">
          {{ pollutionDescription }}
        </div>
        <div class="pollutionValue" @click="goToDetails()">
          More Details
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods:{
goToDetails(){
  this.$router.push({name: 'PollutionDetails'})
}
  },
  computed: {
    ...mapState({
      sevenDaysForecastCity: (state) => state.sevenDaysForecastCity,
      pollutionData: (state) => state.pollutionData,
    }),
    pollutionDescription() {
      if (this.pollutionData.list[0].main.aqi == 1) return "Good";
      if (this.pollutionData.list[0].main.aqi == 2) return "Fair";
      if (this.pollutionData.list[0].main.aqi == 3) return "Moderate";
      if (this.pollutionData.list[0].main.aqi == 4) return "Poor";
      if (this.pollutionData.list[0].main.aqi == 5) return "Bad";
    },
  },
};
</script>

<style scoped>
.linkDiv {
  margin-top: 10%;
}
.link {
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
}
.card {
  background-image: url("../assets/air-pollution.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 10px 30px 0px rgb(0, 0, 0, 0.2);
  width: 300px !important;
}

.card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: rgb(35, 79, 109);
  background: linear-gradient(
    0deg,
    rgba(35, 79, 109, 0.3785889355742297) 0%,
    rgba(69, 95, 113, 1) 100%
  );
}
.pollutionHeadline {
  text-align: center;
}
.pollutionDescription {
  margin-top: 60%;
  font-size: 30px;
  text-align: center;
  /* font-weight: 800;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px; */
}
.pollutionValue {
  margin-top: 60%;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}
.Good {
  color: green;
}
.Fair {
  color: rgb(111, 241, 111);
}
.Moderate {
  color: rgb(221, 215, 215);
}
.Poor {
  color: rgb(197, 4, 4);
}
.Bad {
  color: rgb(126, 3, 3);
}
</style>