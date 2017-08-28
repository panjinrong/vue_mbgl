<template>
  <div id="notice">
    <v-routers></v-routers>
    <v-notice-not></v-notice-not>
    <v-notice-not></v-notice-not>
    <v-notice-not></v-notice-not>
  </div>
</template>

<script>
import notice_not from './notice_not'
import routers from '../routers'
export default {
  name: 'notice',
  data(){
  	return{

  	}
  },
  components:{'v-notice-not':notice_not,'v-routers':routers}
}
</script>

<style>
#notice{
	margin-bottom: 3.0625em;
}
</style>
