<template>
  <div class="find-wrapper">
   		<div class="find-list" @click="zycpShow()">
   			<div class="find-text">
   				<h3>职业测评</h3>
   				<p>根据你的性格规划职业</p>
   			</div>
   			<div class="find-img">
   				<img src="./../../assets/image/testing.png">
   			</div>
   		</div>
   		<div class="find-list" @click="xymbShow()">
   			<div class="find-text">
   				<h3>学院目标</h3>
   				<p>以目标的方式培育人才</p>
   			</div>
   			<div class="find-img">
   				<img src="./../../assets/image/xueyuan.png">
   			</div>
   		</div>
   		<div class="find-list" @click="mbgcShow()">
   			<div class="find-text">
   				<h3>目标广场</h3>
   				<p>由学生自建的目标广场</p>
   			</div>
   			<div class="find-img">
   				<img src="./../../assets/image/piazza.png">
   			</div>
   		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods:{
		mbgcShow:function(){
			this.$router.push('./find_mbgc');
		},
		xymbShow:function(){
			this.$router.push('./find_xymb');
		},
		zycpShow:function(){
			this.$router.push('./find_zycp');
		}
	}
}
</script>

<style>
.find-wrapper .find-list{
	background: #ffffff;
	box-sizing: border-box;
	margin: 1.15em 1em 0;
	height: 5.17em;
	border-radius: 8px;
}
.find-wrapper .find-list>div{
	display: inline-block;
	text-align: left;	
	box-sizing: border-box;
	vertical-align: top;
	height: 100%;
}
.find-wrapper .find-list>div h3{
	font-family: PingFang-SC-Bold;
	font-size: 18px;
	color: #333333;
	line-height: 2.5em;
	margin:.2em 0 0 1em;
}
.find-wrapper .find-list>div p{
	font-family: PingFang-SC-Regular;
	font-size: 13px;
	color: #9b9b9b;
	margin-left: 1em;
}
.find-wrapper .find-list>div img{
	width: 9.1em;
	height: 100%;
}
.find-wrapper .find-list>div:nth-child(1){
	float: left;
}
.find-wrapper .find-list>div:nth-child(2){
	float: right;
	margin-top: -.5em;
}
</style>
