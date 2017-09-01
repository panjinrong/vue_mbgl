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
    	  	 	<div class="setJj">
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
    </div>
</template>

<script>
export default {

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
</style>