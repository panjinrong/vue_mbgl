<template>
  <div id="ywc-wrapper">
	<div class="ywc-list">
		<ul>
			<li>补考必过<span><img src="./../../../assets/image/photo1.jpg"></span></li>
			<li>参加LOGO设计大赛<span><img src="./../../../assets/image/photo1.jpg"></span></li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.ywc-list{
	margin-top: .625em; 
}
.ywc-list ul li{
	font-size: 16px;
	color: #333333;
	text-align: left;
	height: 4.25em;
	line-height: 4.25em;
	margin: .625em .94em 0;
	background: #ffffff;
	padding: 0 .94em;
	border-bottom:1px solid #eeeeee;
	border-radius: 5px;
}
.ywc-list ul li span{
	display: inline-block;
	float: right;
	width: 1.8em;
	height: 1.8em;
}
.ywc-list ul li span img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	vertical-align: middle;
}
</style>