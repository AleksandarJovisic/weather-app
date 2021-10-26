<template>
  <div class="home row">
    <div class="col-12">
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
</style>
