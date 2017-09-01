<template>
  <div id="find">
  	<v-find></v-find>
   <v-routers></v-routers>
  </div>
</template>

<script>
import routers from '../routers'
import find from './index_find'
export default {
  name: 'find',
  components:{
  	'v-routers':routers,
  	'v-find':find
  }
}
</script>

<style>
#find{
	background: #f7f7f7;
	height: 100%;
	overflow: hidden;
}
</style>
