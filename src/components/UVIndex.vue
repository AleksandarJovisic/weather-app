<template>
  <div class="pollutionInfo" :class="pollutionClass">
    <i class="fas fa-radiation-alt uv-icon"></i><br />
    <div class="pollutionHeadline">UV Index</div>
    <!-- {{sevenDaysForecastCity}}<br /> -->
    <div class="pollutionValue">
      {{ UVIndex }}
    </div>
    <div class="pollutionDescription">
      {{ pollutionDescription }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      UVIndex: (state) => state.UVIndex,
    }),
    pollutionDescription() {
      if (this.UVIndex < 3) return "Very Low Risk";
      if (this.UVIndex >= 3 && this.UVIndex < 6) return "Low Risk";
      if (this.UVIndex >= 6 && this.UVIndex < 8) return "Moderate Risk";
      if (this.UVIndex >= 8) return "High Risk";
    },
    pollutionClass() {
      if (this.UVIndex < 3) return "Good";
      if (this.UVIndex >= 3 && this.UVIndex < 6) return "Fair";
      if (this.UVIndex >= 6 && this.UVIndex < 8) return "Moderate";
      if (this.UVIndex >= 8) return "Bad";
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
.uv-icon {
  float: left;
  margin-left: 6px;
  margin-top: 6px;
}
.Good {
  border: 5px solid green;
  background: rgb(31, 201, 31);
  color: green;
}
.Fair {
  border: 5px solid rgb(29, 243, 29);
  background: rgb(139, 236, 139);
  color: rgb(13, 182, 13);
}
.Moderate {
  border: 5px solid rgb(112, 108, 108);
  background: rgb(192, 236, 172);
  color: rgb(85, 81, 81);
}
.Bad {
  border: 5px solid rgb(219, 7, 7);
  background: rgb(241, 86, 86);
  color: rgb(219, 7, 7);
}
.pollutionDescription {
  margin-top: 16%;
  font-size: 30px;
}
.pollutionInfo {
  text-align: center;
  height: 200px;
  width: 100%;
  margin-left: 35%;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
}
.pollutionValue{
  margin-top: 12%;
  font-size: 20px; 
  font-family: 'Open Sans', sans-serif;
}
.pollutionHeadline {
  text-align: center;
}
</style>