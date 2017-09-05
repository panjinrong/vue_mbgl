<template>
  <div class="xymb-xq-wrapper">
      <v-header></v-header>
      <v-cjry></v-cjry>
      <div class="xymb-xq-dt">
          <v-notice></v-notice>
      </div>
      <div class="xymb-xq-button" @click="diagleShow()">
          <button>加入目标</button>
      </div>
      <div class="xymb-xq-diagle" v-show="diagle">
          <div class="xymb-xq-nr">
              <p>需要加入目标才能评论哦！</p>
              <button name="cancel" @click="diagleHide()">取消</button>
              <button name="jion" @click="diagleHide()">立即加入</button>
          </div>
      </div>
  </div>
</template>

<script>
import header from './../my/collegegoal/collegegoal_header'
import notice from './../notice/notice_not'
import cjry from './find_mbgc_cjry'
export default {
  components:{
    'v-header':header,
    'v-cjry':cjry,
    'v-notice':notice
  },
  data() {
    return {
      diagle:false
    }
  },
  methods:{
    diagleShow() {
      this.diagle=true;
    },
    diagleHide() {
      this.diagle=false;
    }
  }
}
</script>

<style>
.xymb-xq-wrapper{
  text-align: left;
	background: #f7f7f7;
	min-height: 100%;
}
.xymb-xq-dt{
  background: white;
}
.xymb-xq-wrapper .xymb-xq-button{
  text-align: center;
}
.xymb-xq-wrapper .xymb-xq-button button{
  width: 90%;
  background: #55b2f5;
  font-family: AdobeHeitiStd-Regular;
  font-size: 18px;
  color: #fefefe;
  padding: .5em 0;
  margin-bottom: .5em;
  border-radius: 5px;
  border:none;
}
.xymb-xq-diagle{
  position:fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  font-family: PingFang-SC-Medium;
}
.xymb-xq-diagle .xymb-xq-nr{
  background: white;
  width: 60%;
  margin: 8em auto;
  text-align: center;
  border-top-right-radius:8px;
  border-top-left-radius:8px;
}
.xymb-xq-diagle .xymb-xq-nr p{
  font-size: 14px;
  color: #333333;
  padding: 2.5em 0;
}
.xymb-xq-diagle .xymb-xq-nr button{
  width: 50%;
  font-size: 14px;
  box-sizing: border-box;
  border:none;
  padding: .5em 0;
  background: white;
  border-top:1px solid #eeeeee;
}
.xymb-xq-diagle .xymb-xq-nr button:nth-child(2){
  float: left;
  color: #999999;
  border-bottom-left-radius:8px;
  border-right: 1px solid #eeeeee;
}
.xymb-xq-diagle .xymb-xq-nr button:nth-child(3){
  float: right;
  border-bottom-right-radius:8px;
}
</style>

