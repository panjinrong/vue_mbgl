<template>
	<div class="wdcj-wrapper">
		<div class="header-wrapper">
			<div class="header-wdcj">
				<ul>
					<li>
						<h3>2016-2017第一学期期末考试成绩</h3>
						<div class="bjpm">
							<p>班级排名：</p><span>20</span>
						</div>
						<div class="挂科科目">
							<p>班级排名：</p><span>2</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="move">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="xkfs">
			<div class="chinese" :class="{'active' :selectsubject}" @click="selectSubject(0)">
				<span>98</span>
				<p>语文</p>
			</div>
			<div class="eglish" :class="{'active' :selectsubject}" @click="selectSubject(1)">
				<span>98</span>
				<p>大学英语1</p>
			</div>
			<div class="physic" :class="{'active' :selectsubject}" @click="selectSubject(2)">
				<span>98</span>
				<p>物理</p>
			</div>
			<div class="computer" :class="{'active' :selectsubject}" @click="selectSubject()">
				<span>98</span>
				<p>计算机</p>
			</div>
			<div class="chinese" :class="{'active' :selectsubject}" @click="selectSubject()">
				<span>98</span>
				<p>语文</p>
			</div>
			<div class="eglish" :class="{'active' :selectsubject}" @click="selectSubject()">
				<span>98</span>
				<p>大学英语2</p>
			</div>
			<div class="physic" :class="gradeClass()" @click="selectSubject()">
				<span>{{grade}}</span>
				<p >物理2</p>
			</div>
			<div class="computer" @click.stop="selectSubject()">
				<span><img src="./../../../assets/image/more.png"></span>
				<p>更多</p>
			</div> 
		</div>
		<div class="tjmb_title">
			<img src="./../../../assets/image/juxing.png">
			<h4>成绩分析</h4>
		</div>
		<v-bt></v-bt>
	</div>
</template>
<script>
import bt from './../lostsubject/lost_xq_bt'
	export default {
		props:{
			grade:{
				type:Number,
				default:56
			}
		},
		data() {
			return {
				selectsubject:false
			}
		},
		methods:{
			selectSubject(index) {
					this.selectsubject = !this.selectsubject;
			},
			gradeClass() {
				if(this.grade>60){
					if(this.selectsubject === true){
						return 'active'
					}else{
						return ' '
					}
				}else{
					return 'actives'
				}
			}
		},
		components:{
			'v-bt':bt
		}
	}
</script>
<style>
html,body{
	height: 100%;
}
.xkfs .active{
	background: #65BFFF !important;
}
.xkfs .active p,.xkfs .active span{

	color: white !important;
}
.xkfs .actives p,.xkfs .actives span{
	color: red !important;
}
.wdcj-wrapper{
	background: #f7f7f7; 
	overflow: hidden;
	height: 100%;
}
.header-wrapper{
	padding: 2em 0 .5em;
	background: white;
	margin-bottom: .5em;
}
.header-wdcj{
	margin-top: .16em;
}
.header-wdcj ul li h3{
	font-size: 16px;
	color:#333333;
	margin: 0 0 1em;
}
.header-wdcj ul li>div{
	display: inline-block;
}
.header-wdcj ul li>div p,.header-wdcj ul li>div span{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 13px;
}
.move{
	margin-top: .5em;
}
.move span{
	display: inline-block;
	width: 1em;
	height: .2em;
	background: #ebebeb;
	/* background: #65BFFF; */
}
.xkfs{
	width: 100%;
	text-align: left;
	margin-top: 1em;
	background: white;
	font-size: 0;
}
.xkfs>div{
	font-size: 25px;
	display: inline-block;
	width: calc(100%/4 - 0em);
	height:3.8em; 
	text-align: center;
	vertical-align: middle;
	padding-top: .9em;
	border-right:1px solid #eeeeee;
	border-bottom:1px solid #eeeeee;
	box-sizing: border-box;
}
.xkfs>div span{
	font-family: PingFang-SC-Bold;
	font-size: 25px;
	color: #333333;
}
.xkfs>div span img{
	width: 1em;
}
.xkfs>div p{
	font-family: PingFang-SC-Medium;
	font-size: 12px;
	color: #5d5d5d;
}
.tjmb_title{
	margin-top: .59em;
	background:white;
	padding: .4em 0;
	text-align: left;
}
.tjmb_title img{
	display: inline-block;
	height: 1em;
}
.tjmb_title h4{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
}
</style>