<template>
  <div id="notice_xq">
	  <div class="notice_not_head">
      <a class="notice_not_head_img"><img src="../../assets/tx.png"></a>
      <a class="notice_not_head_message">
        <div><span class="ft-bold">万晓</span></div>
        <div><span class="ft-12 ft-color-gray">今天 8:30</span></div>
      </a>
      <a class="notice_not_btn"><span></span><span></span><span></span></a>
      <div class="clearbt"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice_xq',
  data(){
  	return{

  	}
  },
}
</script>

<style>
#notice_xq > div{
	margin:0em .75em;
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
</style>
