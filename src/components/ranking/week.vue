<template>
  <div id="week">
  	<v-rank></v-rank>
  </div>

</template>

<script>
import rank from './ranking.vue'
export default {
  name: 'week',
  components:{'v-rank':rank}
}
</script>

<style>
</style>
