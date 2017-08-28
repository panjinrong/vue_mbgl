<template>
  <div id="ranking">
    <v-routers></v-routers>
  	<div class="ranks">
	  <div class="rank_routes">
	  	<div><router-link to="/ranking/week">周榜</router-link></div>
	    <div><router-link to="/ranking/month">月榜</router-link></div>
	    <div><router-link to="/ranking/count">总榜</router-link></div>
	  </div>
	</div>
   	  <router-view></router-view>
  </div>
</template>

<script>
import routers from '../routers'
export default {
  name: 'ranking',
  components:{'v-routers':routers}
}
</script>

<style>
#ranking{
	height:100%;
}
.ranks{
	position: fixed;
	width: 100%;
	background-color: #41a7fc;
	z-index: 999;
}
.rank_routes{
	height:2.75em;
	position: relative;
/*	border-bottom: 1px solid #afffff;
*/}
.rank_routes::after{
	content: "";
	display: block;
	position: absolute;
	height:1px;
	width: 200%;
	border-bottom: 1px solid #54b0fc;
	bottom:0em;
	transform-origin: 0 0;
    transform: scale(0.5, 0.5);
    box-sizing: border-box;
}
.rank_routes > div{
	height:2.75em;
	line-height: 2.75em;
	width:calc(33.33% - 1em);
	margin:0em .5em;
	float: left;
	text-align: center;
}
.rank_routes > div:first-child{
	width:calc(33.33% - 2em);
	margin-left: 1.5em;
}
.rank_routes > div:last-child{
	width:calc(33.33% - 2em);
	margin-right: 1.5em;
}
.rank_routes a{
	display: inline-block;
	position: relative;
	height: 2.75em;
	line-height: 2.75em;
	text-decoration: none;
	color:#0272a2;
}
.rank_routes a.router-link-active::after{
	content: "";
	display: inline-block;
	position: absolute;
	background: #ffffff;
	width:1.375em;
	height:.125em;
	bottom:.2em;
	left:50%;
	margin-left: 1px;
	border-radius: .4em;
	transform: translate(-50%,0);
	z-index: 999;
}
.rank_routes a.router-link-active{
	color:#ffffff!important;
}
</style>
