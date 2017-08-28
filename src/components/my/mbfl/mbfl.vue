<template>
	<div class="xujh">
		<div class="mbfl">
	   		<ul>
	   			<li> <span :class="">学院目标</span></li>
	   			<li> <span>个人目标</span></li>
	   		</ul>
	   	</div>

	</div>
</template>
<script>
	export default {}
		
</script>
<style>
.mbfl ul{
	border-bottom: 1px solid #eeeeee;
	height: 2em;
	line-height: 2em;
	background: #ffffff;
}
.mbfl ul li{
	list-style: none;
	float: left;
	width: 4.5em;
	margin-left: .6em;
}
.mbfl ul li span{
	color: #999999;
	font-size: 14px;
}
.mbfl .router-link-active{
  color:#3da8f5!important;
  border-bottom: 1px solid #3da8f5;
}
</style>