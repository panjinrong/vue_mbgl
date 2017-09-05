<template>
  <div class="mbgc-cjry-wrapper" @click="sycyzShow()">
  	 <h4>参加人员</h4>
     <div class="mbgc-cjry-img">
       <img src="./../../assets/image/photo1.jpg">
       <img src="./../../assets/image/photo1.jpg">
       <img src="./../../assets/image/photo1.jpg">
       <img src="./../../assets/image/photo1.jpg">
       <img src="./../../assets/image/photo1.jpg">
       <a>
          <span>共计178人</span>
          <span>
              <img src="./../../assets/image/next.png">
          </span>
       </a>
     </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods:{
    sycyzShow:function(){
      this.$router.push('./find_mbgc_sycyz');
    }
  }
}
</script>

<style>
.mbgc-cjry-wrapper{
  text-align: left;
  background: white;
  padding:0 .7em .5em .7em;
  margin: .71em 0;
}
.mbgc-cjry-wrapper h4{
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 2.5em;
}
.mbgc-cjry-wrapper .mbgc-cjry-img{
  padding:.4em 0 0;
}
.mbgc-cjry-wrapper .mbgc-cjry-img>img{
  width: 1.5em;
  height: 1.5em;
  border-radius:50%;
}
.mbgc-cjry-wrapper .mbgc-cjry-img a{
  float: right;
}
.mbgc-cjry-wrapper .mbgc-cjry-img a span{
  font-size: 12px;
  color: #555555;
}
.mbgc-cjry-wrapper .mbgc-cjry-img a span>img{
  width: .65em;
  height: 1.1em;
  margin-left: .3em;
  margin-top: .5em;
  vertical-align: top;
}
</style>

