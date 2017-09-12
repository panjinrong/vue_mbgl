<template>
  <div class="zycp-result-wrapper">
    	<div class="zycp-result-title">
         <h3>您的霍兰德类型是：<span>RIS</span></h3> 
         <!-- <img src="./../../assets/image/zxt.png">  -->
      </div>
      <v-hlldt></v-hlldt>
      <div class="zycp-result-jg">
          <h3>解读结果</h3>
          <p>霍兰德认为，个人职业兴趣特征与职业之间应有一种内在的对应关系。根据兴趣的不同，人格可分为研究性（I）、艺术性（A）、社会性（S）、企业型（E）、传统型（C）、现实型（R）六个维度，每个人的性格都是这六个维度的不同程度组合。</p>
      </div>
      <div class="zycp-result-button" @click="tjmbShow()">
          <button>推荐职业目标</button>
      </div>
  </div>
</template>

<script>
import hlldt from './find_zycp_ldt'
export default {
  data() {
    return {}
  },
  methods:{
    tjmbShow:function() {
      this.$router.push('./mbgc_tjmb');
    }
  },
  components:{
    'v-hlldt':hlldt
  }
}
</script>
<style>
.zycp-result-wrapper{
	background: #f7f7f7;
	height: 100%;
}
.zycp-result-title{
  background: white;
}
.zycp-result-title h3{
  text-align: left;
  padding: 1.1em .86em .5em;
}
.zycp-result-title h3>span{
  color: #55b2f5;
}
.zycp-result-title img{
  height: 12em;
}
.zycp-result-wrapper .zycp-result-jg{
  text-align: left;
  margin: 1em 0;
  background: white;
  padding: 0 .86em
}
.zycp-result-wrapper .zycp-result-jg h3{
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 3em;
}
.zycp-result-wrapper .zycp-result-jg p{
  font-size: 14px;
  color: #555555;
  text-indent: 2em;
  padding: 1em 0 2em;
}
.zycp-result-button button{
  width: 90%;
  font-size: 18px;
  color: white;
  background: #55b2f5;
  padding: .5em 0;
  border:none;
  border-radius: 5px;
}
</style>

