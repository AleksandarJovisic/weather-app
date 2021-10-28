<template>
  <div>
    <div
      class="infoCard"
      v-for="(item, index) in pollutionData.list[0].components"
      :key="index"
    >
      <span
        class="headline"
        v-html="$options.filters.formula(index.toUpperCase())"
      >
      </span>
      <br />
      <span class="headline"> {{ index | name }}</span>
      <br />
      <span class="headline"> {{ item }} μg/m3 </span>
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
      pollutionData: (state) => state.pollutionData,
    }),
  },
  filters: {
    name: function (index) {
      if (index == "co") return "Carbon monoxide";
      else if (index == "no") return "Nitrogen monoxide";
      else if (index == "nh3") return "Ammonia";
      else if (index == "no2") return "Nitrogen dioxide";
      else if (index == "o3") return "Ozone";
      else if (index == "pm10") return "Coarse particulate matter";
      else if (index == "pm2_5") return "Fine particles matter";
      else if (index == "so2") return "Sulphur dioxide";
    },
    formula: function (index) {
      return index.replace(/\d+/g, "<sub>$&</sub>");
    },
  },
  created() {
    if (this.pollutionData == "") this.$router.push({ name: "Home" });
  },
};
</script>

<style scoped>
.infoCard {
  text-align: center;
  display: inline-block;
  width: 250px;
  height: 180px;
  margin: 50px;
  background: rgba(56, 54, 54, 0.25);
  border-radius: 4px;
  border: none;
  box-shadow: 3px 6px rgb(0, 0, 0, 0.25);
  color: rgb(94, 87, 87);
  font-size: 36px;
}
.headline {
  color: white;
  font-size: 20px;
}
</style>