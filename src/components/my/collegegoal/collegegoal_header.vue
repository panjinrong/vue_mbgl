<template>
  <div id="collegedetail-header-wrapper">
 		<div class="collegedetail-title">
 			<img src="./../../../assets/image/Marquee-N.png">
 			<h3>30天英语大师</h3>
 		</div>
 		<div class="collegedetail-input">
 			<div class="collegedetail-input-img">
 				<img src="./../../../assets/image/Remarks.png">
 			</div>
 			<div class="collegedetail-input-nr">
 				<p>语言是交流的工具，英语还是无疑是世界上中重要的交流工具之一。学习是进步的阶梯，也是你开起世界大门的第一步，这里，我们将一起奋斗，一起努力，还是还是无疑是世界上最重要的工具之一</p>
 			</div>
 		</div>
 		<div class="collegedetail-mbgs">
			<div class="collegedetail-mbgs-img">
				<img src="./../../../assets/image/Target.png">
			</div>
			<div class="collegedetail-mbgs-wc">
				<p>30个子目标，0个完成</p>
			</div>
			<div class="next">
				<img src="./../../../assets/image/next.png">
			</div>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#collegedetail-header-wrapper{
	text-align: left;
	background: #f7f7f7;
}
.collegedetail-title,.collegedetail-input,.collegedetail-mbgs{
	padding:.7em 0;
	background: white;
	border-bottom: 1px solid #eeeeee;
}
.collegedetail-title img{
	width: 1.1em;
	height: 1.1em;
	margin: 0 .67em;
	vertical-align: top;
    margin-top: .1em;
}
.collegedetail-title h3{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 18px;
	color: #333333;
}
.collegedetail-input>div,.collegedetail-mbgs>div{
	display: inline-block;
}
.collegedetail-input .collegedetail-input-img{
	vertical-align: top;
	margin-top: .3em;
}
.collegedetail-input .collegedetail-input-img img,.collegedetail-mbgs .collegedetail-mbgs-img img{
	width: 1.1em;
	height: 1.1em;
	margin: 0 .67em;
	float: left;
}
.collegedetail-input .collegedetail-input-nr{
	width: 80%;
}
.collegedetail-mbgs .collegedetail-mbgs-img img{
	height: .9em;
}
.collegedetail-mbgs .collegedetail-mbgs-wc p{
	background: #3da8f5;
	color: #ffffff;
	font-size: 13px;
	border-radius: 6px;
	padding: .1em .2em;
}
.collegedetail-mbgs .next{
	float: right;
}
.collegedetail-mbgs .next img{
	width: .5em;
	height: .8em;
	margin-right: .67em;
}
</style>