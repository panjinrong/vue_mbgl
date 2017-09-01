<template>
  <div id="collegedetail-wrapper">
  		<div class="bannder">
	  		<router-link to="./../collegegoal/collegegoaldetail-xq">详情</router-link>
	  		<router-link to="/collegegoal/collegegoaldetail-dt">动态</router-link>
	  		<router-view></router-view>
  		</div>
	</div> 
</template>

<script>
export default {
}
</script>

<style>
#collegedetail-wrapper{
    width: 100%;
}
#collegedetail-wrapper .bannder{
    margin: .5em 0 0; 

}
#collegedetail-wrapper div a{
	text-align: center;
	width: calc(100%/2 - .2em);
	font-size: 17px;
	color: #999999;
	margin: 0 1em;
}
#collegedetail-wrapper .router-link-active {
	color: #555555 !important;
	border-bottom: 1px solid #555555;
}
</style>