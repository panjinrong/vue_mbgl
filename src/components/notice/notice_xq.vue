<template>
  <div id="notice_xq">
    <div >
      <div class="pl_nr">
        <v-header :showsz="true" :data="data"></v-header>
        <div class="notice_photos">
          <div v-if="pics.length>=3">
           <!--  <div >
            　<figure>
                <a href="img/m3.jpg" data-size="670x712">
                  <img src="img/th1.jpg">
                </a>
              </figure>
            </div> -->
            
              <div class="my-gallery" data-pswp-uid="1">
                <figure>
                  <a v-bind:href="item.url" v-bind:class="[{photo3:pics.length>=3}]" v-for="item in pics" >
                    <img v-if="item" v-bind:src="item.url">
                  </a>
                </figure>
              </div>
            
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
        <div class="notice_dz">
          <div><a><img src="../../assets/notice/Fabulous-N.png"><span>16</span></a></div>
          <div><a><img src="../../assets/notice/Comment.png"><span>16</span></a></div>
        </div>
      </div>

      <div class="notice_pl_list">
          <div class="notice_pl_list_header">4条评论</div>
          <v-noticenr></v-noticenr>
      </div>
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
      pics:[{url:'https://f10.baidu.com/it/u=2206791789,3170783372&fm=72'},{url:'https://f12.baidu.com/it/u=2339672317,4249810666&fm=72'},{url:'https://f12.baidu.com/it/u=2339672317,4249810666&fm=72'}],
      data:{name:'张黎明',time:'今天 10:52',describe:'很喜欢代码，已经敲了一上午代码了，嘻嘻嘻嘻嘻嘻'}
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
#notice_xq{
  background: #f7f7f7;
}
#notice_xq div.pl_nr,#notice_xq div.notice_pl_list{
  background: white;
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

.notice_describe{
  margin:.75em .75em 0em .75em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice_photos{
  margin:.5em .75em;
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
  height:2em;
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
  height:100%;
  flex: 1;
}
.notice_dz>div:first-child{
  border-right:1px solid #DAE0E3;
}
.notice_dz>div>a{
  display: block;
  position: relative;
  width: 2em;
  height:100%;
  margin:auto;
}
.notice_dz>div>a>img{
  display: inline-block;
  position: absolute;
  width:.9em;
  top: 50%;
  left:0;
  transform: translate(0,-50%);
  /*margin-bottom: .15em;*/
  /*vertical-align: middle;*/
}
.notice_dz>div>a>span{
  display: inline-block;
  position: absolute;
  top: 50%;
  right:0;
  font-size: .75em;
  transform: translate(0,-50%);
  
  margin-left: .3em;
}
.notice_pl_list{
  text-align: left;
  margin: .625em 0em 0em 0em!important;
}
.notice_pl_list_header{
  display: inline-block;
  width: 100%;
  height:1.875em;
  line-height: 1.875em;
  padding-left: .75em;
  color:#42acfa;
  border-bottom: 1px solid #DAE0E3;
}
</style>
