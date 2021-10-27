<template>
  <div class="card text-white card-has-bg click-col" v-if="this.UVIndex != null">
    <div class="card-img-overlay d-flex flex-column">
      <div class="card-body">
        <h4 class="mt-0">
          <div class="pollutionHeadline">UV Index</div>
        </h4>
        <div class="pollutionDescription" :class="UVIndexClass">
          {{ UVIndexDescription }}
        </div>
        <div class="pollutionValue">
          {{ UVIndex }}
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
  computed: {
    ...mapState({
      UVIndex: (state) => state.UVIndex,
    }),
    UVIndexDescription() {
      if (this.UVIndex < 3) return "Very Low Risk";
      if (this.UVIndex >= 3 && this.UVIndex < 6) return "Low Risk";
      if (this.UVIndex >= 6 && this.UVIndex < 8) return "Moderate Risk";
      if (this.UVIndex >= 8) return "High Risk";
    },
    UVIndexClass() {
      if (this.UVIndex < 3) return "Good";
      if (this.UVIndex >= 3 && this.UVIndex < 6) return "Fair";
      if (this.UVIndex >= 6 && this.UVIndex < 8) return "Moderate";
      if (this.UVIndex >= 8) return "Bad";
    },
  },
};
</script>

<style scoped>
.card {
  background-image: url("../assets/uv-light.jpg");
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
}
.pollutionValue {
  margin-top: 20%;
  font-size: 20px;
  text-align: center;
}
.Good {
  color: rgb(125, 243, 125);
}
.Fair {
  color: rgb(111, 241, 111);
}
.Moderate {
  color: rgb(85, 81, 81);
}
.Bad {
  color: rgb(219, 7, 7);
}
</style>