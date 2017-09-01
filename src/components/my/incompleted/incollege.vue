<template>
  <div id="wwc-wrapper">
	 <div class="wwc-list">
		<ul>
			<li>本学期不挂科<span><img src="./../../../assets/image/photo1.jpg"></span></li>
		</ul>
	</div> 
  </div>
</template>

<script>
export default {
	
}
</script>

<style>
.wwc-list{
	margin-top: .625em; 
}
.wwc-list ul li{
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
.wwc-list ul li span{
	display: inline-block;
	float: right;
	width: 1.8em;
	height: 1.8em;
}
.wwc-list ul li span img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	vertical-align: middle;
}
</style>