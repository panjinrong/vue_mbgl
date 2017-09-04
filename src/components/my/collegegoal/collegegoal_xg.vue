<template>
    <div id="collegedetail-xg-wrapper">
  	    <div class="collegedetail-mbsz">
  	  	 	  <div class="setTitle">
    	  	 		  <img src="./../../../assets/image/photo1.jpg">
    	 			    <h4>张晓彤</h4>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setTime">
        	 			<img src="./../../../assets/image/Set.png">
        	 			<p>5月26日  14:24</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setJj"  @click="mbyxj()">
      	  	 		<img src="./../../../assets/image/Priority1.png">
      	 			  <p>非常紧急</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setMonth">
      	  	 		<img src="./../../../assets/image/Update.png">
      	 			  <p>每月</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setEndtime">
      	  	 		<img src="./../../../assets/image/Remind.png">
      	 			  <p>任务截止时提醒</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="addother">
      	  	 		<img src="./../../../assets/image/touxiang.png">
      	  	 		<p>
        	  	 			<img src="./../../../assets/image/photo1.jpg">
        	  	 			<img src="./../../../assets/image/photo1.jpg">
        	  	 			<img src="./../../../assets/image/photo1.jpg">
      	  	 		</p>
      	  	 		<p>
      	  	 			  <img src="./../../../assets/image/XQ-Plus.png">
      	  	 		</p>
      	  	 		<span>
      	  	 			  <img src="./../../../assets/image/next.png">
      	  	 		</span>
    	  	 	</div>
  	    </div>
  	    <div class="collegedetail-mbrj">
    	    	<h3>目标日记</h3>
    	    	<div class="collegedetail-mbrj-msg">
      	    		<p>昨天</p>
      	    		<div class="msg-xq">
        	    			<p>09:50</p>
        	    			<span>
        	    				<img src="./../../../assets/image/XQ-dot.png">
        	    			</span>
        	    			<p>王丽君更新目标为“非常紧急”</p>
          	    </div>
          	    <div class="msg-xq">
          	    		<p>09:50</p>
          	    		<span>
          	    				<img src="./../../../assets/image/XQ-dot.png">
          	    		</span>
        	    		  <p>王丽君更新目标为“非常紧急”</p>
      	        </div>
      	    		<div class="msg-xq-ls">
        	    			<p>09:50</p>
        	    			<span>
        	    				  <img src="./../../../assets/image/XQ-dot1.png">
        	    			</span>
        	    			<p>2条操作</p>
    	    		</div>
  	    	</div>
  	    </div>
       <!--  <v-mbyxj :mbyxjShow="mbyxjShow"></v-mbyxj>  -->
        <!-- 优先级 -->
        <div id="mbyxj-wrapper" v-show="mbyxjShow">
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
    </div>
</template>

<script>
import mbyxj from './mbyxj'
export default {
 /* props:{
    complete:{
      type:Boolean
    }
  },*/
  data() {
    return{
      mbyxjShow:false
    }
  },
  methods:{
    mbyxj() {
      //this.mbyxjShow = !this.mbyxjShow;
      this.mbyxjShow=true;
    },
    cancelHide() {
      this.mbyxjShow=false;
    },
    completeHide() {
      this.mbyxjShow=false;
    }
  },
 /* created() {
    console.log(this.mbyxjShow);
  },*/
  
}

</script>

<style>
#collegedetail-xg-wrapper{
	text-align: left;
	background: #f7f7f7;
	margin-top: .4em;
}
.collegedetail-mbsz>div{
	padding: .7em 0;
	background: white;
	border-bottom: 1px solid #eeeeee;
}
.collegedetail-mbsz>div>img{
	width: 1.2em;
	height: 1.2em;
	margin: 0 .67em;
	vertical-align: middle;
}
.collegedetail-mbsz>div h4{
	display: inline-block;
	font-size: 16px;
	color: #555555;
}
.collegedetail-mbsz>div p{
	display: inline-block;
	font-size: 13px;
	color: #999999;
}
.collegedetail-mbsz .setTitle>img,.collegedetail-mbsz .addother p>img{
	width: 2em;
	height: 2em;
	border-radius: 50%;
	vertical-align: middle;
}
.collegedetail-mbsz>div>span{
	display: inline-block;
	float: right;
	width: .5em;
	height: .8em;
	margin-right: .67em;
}
.collegedetail-mbsz>div>span>img{
	width: 100%;
	height: 100%;
}
.collegedetail-mbsz .setTitle>img{
	width: 1.7em;
	height: 1.7em;
	vertical-align: sub;
	margin: 0 .47em;
}
.collegedetail-mbrj{
	background: white;
	margin-top: .4em;
	padding-left: .5em;
} 
.collegedetail-mbrj h3{
	font-size: 17px;
	color: #555555;
	border-bottom: 1px solid #eeeeee;
	line-height: 2.5em;
}
.collegedetail-mbrj-msg>div{
	line-height: 2.5em;
}
.collegedetail-mbrj-msg>div span,.collegedetail-mbrj-msg>div p{
	display: inline-block;
}
.collegedetail-mbrj-msg>p{
  font-size: 14px;
  color: #555555;
  padding: .785em  0 .8em 0;
}
.collegedetail-mbrj-msg .msg-xq span>img{
	width: .7em;
	padding: 0 .1em;
}
.collegedetail-mbrj-msg .msg-xq-ls span>img{
	width: 1em;
}

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