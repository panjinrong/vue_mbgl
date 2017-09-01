<template>
  <div id="notice_xq_head" v-bind:class="[{notice_xq_head_small:headimg!=smal}]">
    <div class="notice_xq_head">
        <a class="notice_not_head_img"><img src="../../assets/tx.png"></a>
        <a class="notice_not_head_message">
          <div><span class="ft-bold">万晓</span></div>
          <div><span class="ft-12 ft-color-gray">今天 8:30</span></div>
        </a>
        <a v-show="showsz" class="notice_not_btn"><span></span><span></span><span></span></a>
        <div class="clearbt"></div>
    </div>
    <div class="notice_describe">很喜欢敲代码，表示已经敲了一上午代码了xxzzxxx</div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data(){
  	return{

  	}
  },
  props:['showsz','headimg']
}
</script>

<style>

.notice_xq_head{
  margin-top: 1.25em!important;
  height: 3em;
}
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
.notice_not_head_message{
  float: left;
  height:2.5em;
  margin-left: .5em;
  padding:.3em 0em .2em 0em;
  text-align: left;
}
.notice_describe{
  margin-top: .75em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
