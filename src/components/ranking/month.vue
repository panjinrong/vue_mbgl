<template>
  <div id="month">
  	<v-rank></v-rank>
  </div>
</template>

<script>
import rank from './ranking.vue'
export default {
  name: 'month',
  components:{'v-rank':rank}
}
</script>

<style>
</style>
