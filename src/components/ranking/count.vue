<template>
  <div id="count">
	<v-rank></v-rank>
  </div>
</template>

<script>
import rank from './ranking.vue'
export default {
  name: 'count',
  components:{'v-rank':rank}
}
</script>

<style>
</style>
