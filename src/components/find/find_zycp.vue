<template>
    <div class="find-zycp-wrapper">
      	<div class="find-zycp-list">
            <div class="zycp-title"> 
                <p>准备好了吗？~</p>
            </div>
            <div class="zycp-list-img">
                <div class="zycp-img">
                    <img src="./../../assets/image/sz.png">
                    <p>用时5分钟</p>
                </div>
                <div class="zycp-img">
                    <img src="./../../assets/image/ls.png">
                    <p>安静的环境更准确的判断</p>
                </div>
                <div class="zycp-img">
                    <img src="./../../assets/image/new.png">
                    <p>基于近况而非未来的判断</p>
                </div>
                <div class="zycp-img">
                    <img src="./../../assets/image/bj.png">
                    <p>给予专业的建议推荐</p>
                </div>
               
            </div> 
            <div class="zycp-button" @click="cptmShow()">
                <button>开始测试</button>
            </div>
        </div>
       <router-view></router-view>
    </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods:{
    cptmShow:function(){
      this.$router.push('./find_mbgc_cptm');
    }
  }
}
</script>

<style>
.find-zycp-wrapper{
	background: #f7f7f7;
	height: 100%;
}
.find-zycp-list .zycp-title p{
  font-family: PingFang-SC-Bold;
  font-size: 15px;
  color: #333333;
  padding: 1.67em 0;
}
.find-zycp-list .zycp-list-img{
  padding: 0 1em;
  border-bottom: 1px solid #eeeeee;
}
.find-zycp-list .zycp-list-img>div{
  display: inline-block;
  width:calc(100%/2 - .5em);
  padding: 2em 0;
}
.find-zycp-list .zycp-list-img div:nth-child(1) img{
  width: 2.6em;
  height: 3.17em;
}
.find-zycp-list .zycp-list-img div:nth-child(2) img{
  width: 2.6em;
  height: 2.93em;
}
.find-zycp-list .zycp-list-img div:nth-child(3) img{
  width: 3.46em;
  height: 2.27em;
} 
.find-zycp-list .zycp-list-img div:nth-child(4) img{
  width: 2.33em;
  height: 2.33em;
} 
.find-zycp-list .zycp-list-img>div p{
  font-size: 13px;
  color: #333333;
}
.find-zycp-list .zycp-button{
  margin-top: .83em;
}
.find-zycp-list .zycp-button button{
  width: 90%;
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #55b2f5;
  border:none;
  border-radius: 5px;
}
</style>

