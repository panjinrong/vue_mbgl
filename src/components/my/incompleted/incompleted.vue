<template>
  <div id="wwc-wrapper">
	<div class="mbfl-item">
	 	<ul>
	 		<li><router-link to="/incompleted/incollege">学校目标</router-link></li>
	 		<li><router-link to="/incompleted/inpersonal">个人目标</router-link></li>
	 	</ul>	 	
	</div>
	<router-view></router-view>
  </div>
</template>

<script>
export default {
	name:'wwc-wrapper',
	
}
</script>

<style>
#wwc-wrapper{
	background: #f7f7f7;
	height: 100%;
}
.mbfl-item{
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
}
.mbfl-item ul li{
	display: inline-block;
	width: calc(100%/2 - .2em);
	padding: .23em 0 .125em;
	border-bottom: 1px solid #ffffff;
}
.mbfl-item ul li a{
	font-size: 16px;
	color: #333333;
    display: inline-block;
    padding: .7em 0;
}
.mbfl-item .router-link-active{
    color:#333333 !important;
	border-bottom: 1px solid #333333 !important;
}
</style>