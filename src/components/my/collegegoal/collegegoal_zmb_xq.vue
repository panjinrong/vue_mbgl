<template>
  <div class="zmb-xq-wrapper" >
 		<div class="xq-ly">
 			<p>属于目标：<span>30天英语大师</span></p>
 		</div>
 		<div class="xq-main">
 			<h3>12.六级语法-宾语前置练习</h3>
 			<div class="xq-nr">
	 			<div class="xq-img">
	 				<img src="./../../../assets/image/Remarks.png">
	 			</div>
	 			<div class="xq-nr-text">
	 				<p>语言是交流的工具，英语还是无疑是世界上中重要的交流工具之一。学习是进步的阶梯，也是你开起世界大门的第一步，这里，我们将一起奋斗，一起努力，还是还是无疑是世界上最重要的工具之一.</p>
	 				<span>学习资料1：www.baidu.com</span>
	 				<span>学习资料2：www.baidu.com</span>
 				</div>
 			</div>
 		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods:{
		
	}
}
</script>

<style>
.zmb-xq-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
	/* width: 100%;
	position: absolute; */
}
.zmb-xq-wrapper .xq-ly{
	background: white;
	padding: 1em 1em .8em;
}
.zmb-xq-wrapper .xq-ly p{
	display: inline-block;
	font-size: 12px;
	color: #999999;
	background: #f2f2f2;
	border-radius: 6px;
	padding: .3em;
}
.xq-main{
	background: white;
	padding: 0 1em;
}
.xq-img{
	float: left;
	margin-right: .8em;
}
.xq-main h3{
	font-size: 17px;
	color: #333333;
	margin-bottom: .5em
}
.xq-main .xq-nr>div{
	display: inline-block;
}
.xq-main .xq-nr>div img{
	width: 1.1em;
	height: 1.1em;
}
.xq-main .xq-nr>div p{
	display: inline-block;
	font-size: 14px;
	color: #555555;
	text-indent: 1em;
}
.xq-main .xq-nr>div span{
	display:block;
	font-size: 14px;
	color: #555555;
}
.xq-main .xq-nr .xq-nr-text{
	width: 88%;
}
</style>