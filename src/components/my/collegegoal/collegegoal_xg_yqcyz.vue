<template>
    <div class="collegegoal-cyz-wrapper">
  	   <v-search></v-search>
       <div class="title"><p>所有成员</p></div>
       <div class="person-list">
          <img src="./../../../assets/image/photo1.jpg">
          <p>王利军</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="person-list">
          <img src="./../../../assets/image/photo1.jpg">
          <p>王利军</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="person-list">
          <img src="./../../../assets/image/photo1.jpg">
          <p>王利军</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="addcyz" @click="addcyzShow()">
          <img src="./../../../assets/image/Invitation.png">
          <p>邀请参与者</p>
       </div>
    </div>
</template>

<script>
import mbgc_search from './../../find/mbgc_search'
export default {
  data() {
    return{
    }
  },
  methods:{
    addcyzShow:function(){
      this.$router.push('./collegegoal_addcyz');
    }
  },
   
 /* created() {
    console.log(this.mbyxjShow);
  },*/
  components:{
    'v-search':mbgc_search
  }
  
}

</script>

<style>
.collegegoal-cyz-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.title p{
  font-size: 11px;
  color: #999999;
  margin-top: .68em;
  margin-left: 1.35em;
}
.person-list {
  background: white;
  padding: .3em 1em;
  border-bottom: 1px solid #eeeeee;
}
.person-list > img{
  width: 2.3em;
  height: 2.3em;
  border-radius: 6px;
  vertical-align: top;
}
.person-list p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin-top: .5em;
}
.person-list span{
  float: right; 
}
.person-list span img{
  width: 1em;
  margin-top: .6em;
}
.addcyz{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em 1.35em;
}
.addcyz img{
  width: 1.6em;
  vertical-align: top;
}
.addcyz p{
  display: inline-block;
  font-size: 15px;
  color: #333333;
  margin-top: .1em;
}
</style>