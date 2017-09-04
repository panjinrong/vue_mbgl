<template>
  <div id="notice_xq">
    <div>
      <v-header :showsz="true"></v-header>
      <div class="notice_photos">
        <div v-if="pics.length>=3">
          <a v-bind:class="[{photo3:pics.length>=3}]" v-for="item in pics">
            <img v-if="item" v-bind:src="item.url">
          </a>
        </div>
        <div v-else-if="pics.length==2">
         <a v-bind:class="[{photo2:pics.length=2}]" v-for="item in pics"><img v-bind:src="item.url" v-if="item"></a>
        </div>
        <div v-else="pics.size==1">
          <a v-bind:class="[{photo1:pics.length=1}]" v-for="item in pics">
            <img v-bind:src="item.url" v-if="item">
          </a> 
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="notice_dz">
        <div><a><img src="../../assets/notice/Fabulous-N.png"><span>16</span></a></div>
        <div><a><img src="../../assets/notice/Comment.png"><span>16</span></a></div>
    </div>
    <div class="notice_pl_list">
      <div class="notice_pl_list_header"><a>4条评论</a></div>
      <v-noticenr></v-noticenr>
    </div>
  </div>
</template>

<script>
import noticenr from './notice_pl_nr'
import header from './notice_header'
export default {
  name: 'notice_xq',
  data(){
  	return{
      pics:[{url:'https://f10.baidu.com/it/u=2206791789,3170783372&fm=72'},{url:'https://f12.baidu.com/it/u=2339672317,4249810666&fm=72'},{url:'https://f12.baidu.com/it/u=2339672317,4249810666&fm=72'}]
  	}
  },
  mounted:function(){

  },
  components:{
    'v-noticenr':noticenr,'v-header':header
  }
}
</script>

<style>
#notice_xq > div{
	margin:0em .75em;
}
.notice_xq_head{
  margin-top: 1.25em!important;
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
.notice_describe{
  margin-top: .75em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice_photos{
  margin:.5em 0em;
  text-align: left;
}
.notice_photos a.photo2{
  display: block;
  width:calc(50% - .1em);
  height: 0;
  padding-bottom: calc(50% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos a.photo1{
  display: block;
  width:calc(50% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos a.photo3{
  display: block;
  width:calc(33.33% - .1em);
  height:0;
  padding-bottom: calc(33.33% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos img{
  width: 100%;
}
.notice_dz{
  display: flex;
  height:2.375em;
  margin:0em!important;
  align-items: center;
  -webkit-box-align: center;
   -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  justify-content: center;
  border-top: 1px solid #DAE0E3;
  box-shadow: 0 1.5px 0 #DAE0E3;
}
.notice_dz>div{
  flex: 1;
}
.notice_dz>div:first-child{
  border-right:1px solid #DAE0E3;
}
.notice_dz>div>a{
  display: inline-block;
  margin:auto;
}
.notice_dz>div>a>img{
  display: inline-block;
  width:1em;
  height: 100%;
  margin-bottom: .15em;
  vertical-align: middle;
}
.notice_dz>div>a>span{
  font-size: .875em;
  margin-left: .3em;
}
.notice_pl_list{
  margin: 0em!important;
}
.notice_pl_list_header{
  height:1.875em;
  text-align: left;
  border-bottom: 1px solid #DAE0E3;
}
.notice_pl_list_header >a {
  display: block;
  height: 1.875em;
  line-height:1.875em;
  margin-left: .857em;
  font-size: .875em;
}

</style>
