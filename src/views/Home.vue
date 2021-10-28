<template>
  <div class="home row">
    <div class="col-12 home-column">
<current-wheater-component />
    </div>

  </div>
</template>

<script>
import CurrentWheaterComponent from '../components/CurrentWheaterComponent.vue'
export default {
  name: 'Home',
  components: {
   CurrentWheaterComponent
  }
}
</script>
<style scoped>
.row{
  margin: 0;
}
.home-column{
  padding: 0;
}
</style>
