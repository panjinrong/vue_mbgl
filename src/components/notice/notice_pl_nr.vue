<template>
  <div id="notice_pl_nr">
   <div class="notice_pl_nr">
      <v-header :showsz="false" headimg="small" :data="data[0]"></v-header>
   </div>
   <div class="notice_pl_nr">
      <v-header :showsz="false" headimg="small" :data="data[1]"></v-header>
      <div  class="notice_pl_nr_list">
        <div v-for="item in data[1].reply">
          <a class="name">{{item.name}}</a><span>回复</span><a class="name">{{item.replypeoed}}</a>:
          <a>{{item.describe}}</a></br>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import header from './notice_header'
export default {
  name: 'notice_pl_nr',
  data(){
  	return{
      data:[{name:'张玲',time:'今天 8:50',describe:'厉害的张黎明同学，希望可以和你一起学习。'},
        {name:'周佳涵',time:'今天 8:55',describe:'加油很看好你这份精神哦。有机会一起探讨。。'
        ,reply:[
        {name:'张黎明',replypeoed:'周佳涵',time:'今天 9:10',describe:'可以啊，我也正在寻找志同道合的人。。'},
        {name:'周佳涵',replypeoed:'张黎明',time:'今天 9:10',describe:'那就这样说好了，图书管见，电话联系'}]}
        ]
  	}
  },
  components:{'v-header':header}
}
</script>
<style>
/*tool*/
.clearbt{
  clear: both;
}
.notice_pl_nr{
  text-align: left;
  border-bottom: 1px solid #ececec;
  padding-bottom: .5625em;
}
.notice_pl_nr_list{
  margin:.75em .75em 0em .75em;
  padding-left:.5em;
  background: #f7f7f7;
}
.notice_pl_nr_list a.name{
  color:#42acfa;
}
.notice_pl_nr_list  span,.notice_pl_nr_list  a{
  font-size: .75em;
}
</style>
