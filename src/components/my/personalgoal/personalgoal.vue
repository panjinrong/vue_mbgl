<template>
  <div id="personal-wrapper">
 		<div class="personal-list">
 			<ul>
 				<li>
 					<div class="desc">&nbsp;</div>
 					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-personal"> 
						<h3>某个学校目标</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
						</p>
						
 					</div>
 				</li>
 				<li>
 					<div class="desc">&nbsp;</div>
 					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-personal"> 
						<h3>某个学校目标</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
						</p>
 					</div>
 				</li>
 				<li>
 					<div class="desc">&nbsp;</div>
 					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-personal"> 
						<h3>某个学校目标</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
						</p>
 					</div>
 				</li>
 			</ul>
 		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#personal-wrapper{
	text-align: left;
	background: #f7f7f7;
    height: 100%;
}
.personal-list ul li{
	margin:.69em .75em 0;
	border-bottom: 1px solid #eeeeee;
	border-radius: 6px;
	background: white;
	overflow: hidden;
}
.personal-list .desc{
	background: #ff6f7d;
	width: .425em;
	height: 4em;
	margin:0;
	top: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	vertical-align: top
}
.personal-list ul li>div{
	display: inline-block;
	margin:.69em .625em;
}
.personal-list .img-personal{
	width:1.1em;
	height: 1.1em;
	vertical-align: top;
	margin-right: -.2em;
}
.personal-list .img-personal img{
	width: 100%;
	height: 100%;
}
.personal-list .msg-personal h3{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
}
.personal-list .msg-personal p{
	display: inline-block;
	font-family: PingFang-sc-Regular;
	font-size: 11px;
	color: #999999;
}
.personal-list .msg-personal p span{
	display: inline-block;
	width: 1.1em;
	height: 1.1em;
	vertical-align: middle;
	margin-left: .67em;
}
.personal-list .msg-personal p font{
	font-family: PingFang-sc-Regular;
	font-size: 12px;
	color: #9e9e9e;
	vertical-align: middle;
	margin-left: .8em;
}
.personal-list .msg-personal p span img{
	width: 100%;
	height: 100%;
}
</style>