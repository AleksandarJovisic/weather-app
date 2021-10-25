<template>
  <div class="home">
<current-wheater-component />
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
