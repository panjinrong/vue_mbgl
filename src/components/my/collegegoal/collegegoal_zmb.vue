<template>
  <div class="college-zmb-wrapper" >
 		<ul>
 			<li @click="zmbXqShow(1)">某个校园目标</li>
 			<li @click="zmbXqShow(2)">某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 			<li>某个校园目标</li>
 		</ul>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods:{
		zmbXqShow:function(index){
			this.$router.push('./collegegoal_zmb_xq');
		}
	}
}
</script>

<style>
.college-zmb-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
	width: 100%;
	position: absolute;
}
.college-zmb-wrapper ul li{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
	background: white;
	line-height: 3.5em;
	margin: .8em .8em 0;
	border-bottom:1px solid #eeeeee;
	padding: 0 .7em;
	border-radius: 8px;
}
</style>