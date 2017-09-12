<template>
  <div id="college-wrapper">
 		<div class="college-list">
 			<ul>
 				<li @click="collegegoalDetail(1)">
 					<div class="desc">&nbsp;</div>
 					<div class="img-college"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-college"> 
						<h3>30天英语大师</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
							<span><img src="./../../../assets/image/month.png"></span>
						</p>
						
 					</div>
 				</li>
 				<li>
 					<div class="desc">&nbsp;</div>
 					<div class="img-college"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-college"> 
						<h3>30天英语大师</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
							<span><img src="./../../../assets/image/month.png"></span>
						</p>
 					</div>
 				</li>
 				<li>
 					<div class="desc">&nbsp;</div>
 					<div class="img-college"><img src="./../../../assets/image/xk.png"></div>
 					<div class="msg-college"> 
						<h3>30天英语大师</h3>
						<p>05-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/3</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
							<span><img src="./../../../assets/image/month.png"></span>
						</p>
 					</div>
 				</li>
 			</ul>
 		</div>
  </div>
</template>

<script>
export default {
	data(){
  	return{

  	}
  },
  methods:{
    collegegoalDetail:function(id){
      this.$router.push('./collegegoaldetail/collegegoaldetail');
    }
  }
}
</script>

<style>
#college-wrapper{
	text-align: left;
	background: #f7f7f7;
    height: 100%;
}
.college-list ul li{
	/*position: relative;*/
	margin:.69em .75em 0;
	border-bottom: 1px solid #eeeeee;
	border-radius: 6px;
	background: white;
	overflow: hidden;
}
.college-list .desc{
	background: #ff6f7d;
	width: .425em;
	height: 4em;
	margin:0;
	top: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	vertical-align: top
}
.college-list ul li>div{
	display: inline-block;
	margin:.69em .625em;
}
.college-list .img-college{
	width:1.1em;
	height: 1.1em;
	vertical-align: top;
	margin-right: -.2em;
}
.college-list .img-college img{
	width: 100%;
	height: 100%;
}
.college-list .msg-college h3{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
}
.college-list .msg-college p{
	display: inline-block;
	font-family: PingFang-sc-Regular;
	font-size: 11px;
	color: #999999;
}
.college-list .msg-college p span{
	display: inline-block;
	width: 1.1em;
	height: 1.1em;
	vertical-align: middle;
	margin-left: .67em;
}
.college-list .msg-college p font{
	font-family: PingFang-sc-Regular;
	font-size: 12px;
	color: #9e9e9e;
	vertical-align: middle;
	margin-left: .8em;
}
.college-list .msg-college p span img{
	width: 100%;
	height: 100%;
}
</style>