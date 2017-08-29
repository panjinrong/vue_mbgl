<template>
  <div id="my">
  <v-routers></v-routers>
  <wd-detail></wd-detail>
  </div>
</template>

<script>
import routers from '../routers'
import wd_detail from './wd-detail'
export default {
  name: 'my',
  components:{
  	'wd-detail':wd_detail,'v-routers':routers
  }
}
</script>

<style>

*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
#my{
	background: #f2f2f2;
}
</style>
