<template>
<div class="wd_detail">
   <div class="header">
   		<div class="img">
   			<img src="./../../assets/image/photo1.jpg">
   		</div>
   		<div class="msg">
   			<h4>张晓彤</h4>
   			<div class="wcqk">
	   			<div class="ywc">
	   				<span>6</span>
	   				<router-link to="/xymb">已完成</router-link>
	   			</div>
	   			<div class="wwc">
	   				<span>6</span>
	   				<router-link to="/xymb">未完成</router-link>
	   			</div>
	   			<div class="jy">
	   				<span>6</span>
	   				<router-link to="/xymb">加油</router-link>
	   			</div>
   			</div>
   		</div>
    </div>
    <div class="bymb">
   	<div class="bymb-nr">
   		<span></span><h5>毕业目标</h5>
   	</div>
	<div class="bp">
		<img src="./../../assets/image/bp.png">
		<span>276</span>
		<p>我的学分</p>
	</div>
	<div class="xf">
		<div class="xxjh">
			<img src="./../../assets/image/set.png">
			<router-link to="/studyplan">学习计划</router-link>
		</div>
		<div class="wdcj">
			<img src="./../../assets/image/set.png">
			<router-link to="/mygrades">我的成绩</router-link>
		</div>
		<div class="ygkm">
			<img src="./../../assets/image/set.png">
			<router-link to="/lostsubject">已挂科目</router-link>
		</div>
	</div>
    <div class="wdmb">
	   	<div class="bymb-nr">
	   		<span></span><h5>我的目标</h5>
	   	</div>
	</div>
    <div class="mbfl">
   		<ul>
   			<li> <span @click="hideXymbList">学院目标</span></li>
   			<li> <span @click="showGrmbList">个人目标</span></li>
   		</ul>
   	</div>
   	<div v-show="xymbListShow" class="xymb-list">
   		学院目标学院目标学院目标
   	</div>
   	<div v-show="grmbListShow" class="grmb-list">
   		个人目标个人目标个人目标
   	</div>
   </div>
</div>
</template>
<script>
const mun=0;
export default {
 	name: 'wd_detail',
 	data(){
	  	return{
	  		xymbListShow:true,
	  		grmbListShow:false,
	  	}
	 },
	methods: {
		hideXymbList() {
			this.xymbListShow=true;
			this.grmbListShow=false;
		},
		showGrmbList() {
			this.xymbListShow=false;
			this.grmbListShow=true;
		}
	}

}
</script>

<style>
.header{
	height:5.85em;
	background: #90CAF3;
	overflow: hidden;
}
.img{
	width: 3em;
	height:3em;
	line-height: 5.83em;
	margin-left: .83em;
	margin-right: .78em;
	float:left;
}
.img img{
	width:100%;
	height:100%;
	border-radius: 50%;
	vertical-align: middle;
}
.msg{
	float:left;
}
.msg h4{
	font-size: 18px;
	color: #f6f6f6;
	line-height: 1.5em;
	margin-top: 1.3em;
	text-align:left;
}
.msg .wcqk>div{
	display: inline-block;
	margin-right:2.5em;
	text-align: center; 

}
.msg .wcqk span{
	font-size: 14px;
	color:#ffdb96;
	display: block;
}
.msg .wcqk a{
	font-size: 11px;
	color:#ffffff;
}
.bymb{
	margin: .4em 0;
	background: #ffffff;
}
.bymb-nr{
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
	text-align: left;
}
.bymb-nr span{
	display: inline-block;	
	width: .22em;
	height: .8em;
	background: #30A1F1;
	margin-right: .5em;
	border-radius: 1px;
}
.bymb-nr h5{
	font-size: 14px;
	color: #333333;
	line-height: 2.2em;
	display: inline-block;
}
.bp{
	width: 14em;
	margin: 1em auto 0;
	position: relative;
}
.bp span{
	position: absolute;
	left: 4em;
	top: 3.5em;
	font-size: 24px;
	font-weight: bold;
}
.bp p{
	position: absolute;
	display: inline-block;
	left: 7.5em;
	bottom: 1.7em;
	font-size: 12px;
	color: #666666;
}
.bp img{
	width:100%;
}
.xf>div{
	display: inline-block;
	width: calc(100%/3 - .4em);
	text-align: center;
	padding: .1em 0;
}
.xf>div img{
	width: .7em;
	vertical-align: middle;
}
.xf>div a{
	font-size: 12px;
	color:#666666;
}
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