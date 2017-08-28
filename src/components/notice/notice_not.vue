<template>
   <div class="notice_not">
    <div class="notice_not_head">
      <a class="notice_not_head_img"><img src="../../assets/tx.png"></a>
      <a class="notice_not_head_message">
        <div><span class="ft-bold">万晓</span></div>
        <div><span class="ft-12 ft-color-gray">今天 8:30</span></div>
      </a>
      <a class="notice_not_btn"><span></span><span></span><span></span></a>
      <div class="clearbt"></div>
    </div>
    <div class="notice_not_content">
      <div>看看咱们宿舍这位大神已经连敲一个月的代码了！</div>
      <div class="notice_not_content_xq" v-on:click="toXq(1)">
        <img src="../../assets/tupian.png">
        <a><span class="ft-color-blue">张黎明：</span>很喜欢代码 表示已经敲了。。。</a>
      </div>
      <div class="notice_not_content_xq1">
        <a><span class="ft-color-blue">张黎明:</span>可以呀，我也正在寻找志同道合的人</a></br>
        <a><span class="ft-color-blue">张黎明</span>回复<span class="ft-color-blue">周佳涵:</span>可以呀，我也正在寻找志同道合的人</a></br>
        <a><span>......</span></a></br>
        <a>查看更多回复</a>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'notice_not',
  data(){
  	return{

  	}
  },
  methods:{
    toXq:function(id){
      this.$router.push('/notice_xq');
    }
  }
}
</script>
<style>
/*tool*/
.clearbt{
  clear: both;
}

.notice_not{
  padding: 1em .75em;
  border-top: 1px solid #ececec;
  text-align: left;
}
.notice_not_head{
  height: 3em;
}
.notice_not_head_img{
  height:3em;
  width: 3em;
  float: left;
}
.notice_not_head_img img{
  width:100%;
  border-radius: .2em;
}
.notice_not_head_message{
  float: left;
  height:2.5em;
  margin-left: .5em;
  padding:.3em 0em .2em 0em;
  text-align: left;
}
.notice_not_btn{
  display: inline-block;
  height:2.5em;
  padding:.3em 0em .2em 0em;
  vertical-align: top;
  float: right;
}
.notice_not_btn > span{
  display: inline-block;
  border:1px solid #c1c1c1;
  background: #c1c1c1;
  border-radius: 50%;
  width:.2em;
  height: .2em;
  margin-right: .2em;
  vertical-align:text-top;
}
.notice_not_content{
  margin-left:3.5em;
  margin-top: 1em;
}
.notice_not_content_xq{
  height:2.25em;
  color:#333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.notice_not_content_xq > img{
  height:100%;
  vertical-align: middle;
}
.notice_not_content_xq,.notice_not_content_xq1{
   margin-top:.75em;
   background: #f5f5f5;
}
.notice_not_content_xq > a,.notice_not_content_xq1 > a{
  font-size: .8125em;
}
.notice_not_content_xq1{
  padding-left:.5em;
  padding-bottom:.5em;
}
</style>
