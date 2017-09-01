<template>
  <div id="jy-wrapper">
	 <div class="jy-list">
	 	<ul>
	 		<li>
	 			<div class="photo"><img src="./../../../assets/image/photo1.jpg"></div>
	 			<div class="msg-list">
	 				<h3>张小兰</h3>
	 				<span> 上午&nbsp;8:32</span>
	 				<p>为你的<font>{{msg}}</font>加油</p>
	 			</div>

	 		</li>
	 		<li>
	 			<div class="photo"><img src="./../../../assets/image/photo1.jpg"></div>
	 			<div class="msg-list">
	 				<h3>张小兰</h3>
	 				<span> 上午&nbsp;8:32</span>
	 				<p>为你的<font>{{msg}}</font>加油</p>
	 			</div>

	 		</li>
	 		<li>
	 			<div class="photo"><img src="./../../../assets/image/photo1.jpg"></div>
	 			<div class="msg-list">
	 				<h3>张小兰</h3>
	 				<span> 上午&nbsp;8:32</span>
	 				<p>为你的<font>{{msg}}</font>加油</p>
	 			</div>

	 		</li>
	 	</ul>
	 </div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			msg:'社会公益活动'
		}
	}
}
</script>

<style>
#jy-wrapper{
	text-align: left;
}
.jy-list ul li{
	padding: .824em .824em 0;
}
.jy-list ul li>div{
	display: inline-block;
}
.jy-list .photo{
	width: 3.6em;
	height: 3.6em;
}
.jy-list .photo img{
	height: 100%;
	width: 100%;
	border-radius: 5px;
}
.jy-list .msg-list{
	border-bottom: 1px solid #eeeeee;
	width: 80%;
	vertical-align: top;
}
.jy-list .msg-list h3{
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
	display: inline-block;
	line-height: 1.8em;
}
.jy-list .msg-list span{
	float: right;   
	line-height: 2.4em;
}
.jy-list .msg-list p{
	font-size: 14px;
	color: #333333;
	line-height: 2em;
	padding-bottom: .825em;
}
.jy-list .msg-list p>font{
	color: #3da8f5;
}
.jy-list .msg-list span{
	font-size: 12px;
	color: #b2b2b2;
}
</style>