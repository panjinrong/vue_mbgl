<template>
    <div class="collegegoal_addcyz-wrapper">
		<v-search></v-search>
		<div class="addname-list">
	 		<ul>
	 			<li @click="addhyShow()">
	 				<img src="./../../../assets/image/HY.png">
	 				<p>我的好友</p>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/BJS.png">
	 				<p>我的班级</p>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/ST.png">
	 				<p>我的社团</p>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/SM.png">
	 				<p>二维码扫描</p>
	 			</li>
	 		</ul>
		</div>
    </div>
</template>	

<script>
import mbgc_search from './../../find/mbgc_search'
export default {
	data(){
  	return{

  	}
  },
  methods:{
    addhyShow:function(){
    	this.$router.push('./collegegoal_addcyz_xq');
    }
  },
   components:{
    'v-search':mbgc_search
  }
}
</script>

<style>
.collegegoal_addcyz-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.addname-list{
	margin-top: 1em;
}
.addname-list ul li{
	padding: .3em 1.05em;
	border-bottom: 1px solid #eeeeee;
	background: white;
}
.addname-list ul li img{
	width: 2.3em;
	height: 2.3em;
	vertical-align: top;
	border-radius: 5px;
}
.addname-list ul li p{
	display: inline-block;
	font-size: 16px;
	color: #333333;
	margin-top:.5em;
}
.addname-list ul li:nth-child(4){
	margin-top: .75em;
}
</style>