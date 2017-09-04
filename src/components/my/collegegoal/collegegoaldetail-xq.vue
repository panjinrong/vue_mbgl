<template>
  <div id="collegedetail-xq-wrapper">
		<v-collegegoal-header></v-collegegoal-header> 
		<v-collegegoal></v-collegegoal> 
	</div> 
</template>

<script>
import collegegoal_xg from './collegegoal_xg'
import collegegoal_header from './collegegoal_header'
export default {
	components:{
		'v-collegegoal':collegegoal_xg,
		'v-collegegoal-header':collegegoal_header
	}
}
</script>

<style>
#collegedetail-xq-wrapper{
	text-align: left;
	background: #f7f7f7;
    border-top: 1px solid #eeeeee;
}
</style>