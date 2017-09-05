<template>
  <div id="notice_xq_head" v-bind:class="[{notice_xq_head_small:headimg =='small'}]">
    <div class="notice_xq_head">
        <a class="notice_not_head_img"><img src="../../assets/tx.png"></a>
        <a class="notice_not_head_message">
          <div><span class="ft-bold">{{data.name}}</span></div>
          <div><span class="ft-12 ft-color-gray">{{data.time}}</span></div>
        </a>
        <a v-show="showsz" class="notice_not_btn"><span></span><span></span><span></span></a>
        <div class="clearbt"></div>
    </div>
    <div class="notice_describe">{{data.describe}}</div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data(){
  	return{

  	}
  },
  props:['showsz','headimg','data']
}
</script>

<style>
.notice_xq_head_small{
  font-size: .875em;
}
.notice_not_head_img{
  height:3em;
  width: 3em;
  float: left;
}
.notice_not_head_img_small{
  height:2em;
  width: 2em;
  float: left;
}
.notice_not_head_img img,.notice_not_head_img_small img{
  width:100%;
  border-radius: .2em;

}
.notice_xq_head{
  padding-top: 1.125em!important;
  margin:0em .75em;
  height: 3em;
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
  box-sizing: border-box;
}
.notice_describe{
  margin-top: .75em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
