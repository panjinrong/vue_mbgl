<template>
    <div id="mbyxj-wrapper" v-show="mbyxjShow" >
    	<div class="mbyxj-content">
	    	<div class="mbyxj-title">
	    		<button class="cancel"  @click="cancelHide()">取消</button>
	    		<span>优先级</span>
	    		<button class="complete" @click="completeHide()">完成</button>
	    	</div>
	    	<div class="mbyxj-jb">
	    		<ul>
	    			<li><img src="./../../../assets/image/Priority1.png"><span>非常紧急</span></li>
	    			<li><img src="./../../../assets/image/Priority2.png"><span>紧急</span></li>
	    			<li><img src="./../../../assets/image/Priority.png"><span>普通</span></li>
	    		</ul>
	    	</div>
    	</div>
    </div> 
</template>

<script>

export default {
	props:{
		mbyxjShow:{
			type:Boolean
		}
	},
	/*data() {
		return {
			complete:false
		}
	},*/
	methods:{
		cancelHide() {
			//this.complete=false;
			this.mbyxjShow=false;
		},
		completeHide() {
			//this.complete=false;
			this.mbyxjShow=false;
		}
	},
	created() {
		//console.log(this.mbyxjShow);
	}
}
</script>

<style>
#mbyxj-wrapper{
	width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
	text-align: left;
    border-top: 1px solid #eeeeee;
    position: fixed;
    top: 0;
}
.mbyxj-content{
	width: 100%;
	background: #ffffff;  
	position: absolute;
    bottom: 0;
	padding: 0 .87em;
	box-sizing: border-box;
}
.mbyxj-content .mbyxj-title{
	text-align: center;
	font-family: PingFang-SC-Bold;
	height: 3.5em;
	line-height: 3.5em
}
.mbyxj-content .mbyxj-title span{
	font-size: 18px;
	color: #333333;
}
.mbyxj-content .mbyxj-title button{
	background: white;
	border:none;
	font-size: 14px;
	line-height: 3.5em;
}
.mbyxj-content .mbyxj-title button.cancel{
	color: #888888;
	float: left;
}
.mbyxj-content .mbyxj-title button.complete{
	color: #3da8f5;
	float: right;
}
.mbyxj-content .mbyxj-jb ul li{
	height: 2.5em;
	line-height: 2.5em;
	border-bottom: 1px solid #eeeeee;
}
.mbyxj-content .mbyxj-jb ul li span{
	font-size: 18px;
}
.mbyxj-content .mbyxj-jb ul li img{
 	width: 1.3em;
 	margin-right: .87em;
 	margin-top: .29em;
    vertical-align: top;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(1) span{
	color: #ff7f6d;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(2) span{
	color: #ffc107;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(3) span{
	color: #c5d2e1;
}
</style>