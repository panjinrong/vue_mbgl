<template>
  <div class="mbgc-cptm-wrapper">
      <div class="mbgc-cptm-list" v-show="sum<2">
          <div class="mbgc-cptm-title">
              <p>测评.<span>{{sum}}</span>/<span>18</span>题</p>
          </div>
          <div class="mbgc-cptm-tm">
              <h3>1、我更倾向于从以下何处得到力量：</h3>
              <p @click="selecedIf(1)">
                  <span v-if="selecedif">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedif">
                      <img src="./../../assets/image/wxz.png">
                  </span>
                  朋友和家人
              </p>
              <p @click="selecedElse(1)">
                  <span v-if="selecedelse">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedelse">
                      <img src="./../../assets/image/wxz.png">
                  </span>
              个人的内心想法</p>
          </div>
      </div>
       <div class="mbgc-cptm-list" v-show="sum>1&&sum<3">
          <div class="mbgc-cptm-title">
              <p>测评.<span>{{sum}}</span>/<span>18</span>题</p>
          </div>
          <div class="mbgc-cptm-tm">
              <h3>1、我更倾向于从以下何处得到力量：</h3>
              <p @click="selecedIf(2)">
                  <span v-if="selecedif">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedif">
                      <img src="./../../assets/image/wxz.png">
                  </span>
                  朋友和家人
              </p>
              <p @click="selecedElse(2)">
                  <span v-if="selecedelse">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedelse">
                      <img src="./../../assets/image/wxz.png">
                  </span>
              个人的内心想法</p>
          </div>
      </div>
       <div class="mbgc-cptm-list" v-show="sum>2">
          <div class="mbgc-cptm-title">
              <p>测评.<span>{{sum}}</span>/<span>18</span>题</p>
          </div>
          <div class="mbgc-cptm-tm">
              <h3>1、我更倾向于从以下何处得到力量：</h3>
              <p @click="selecedIf(3)">
                  <span v-if="selecedif">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedif">
                      <img src="./../../assets/image/wxz.png">
                  </span>
                  朋友和家人
              </p>
              <p @click="selecedElse(3)">
                  <span v-if="selecedelse">
                      <img src="./../../assets/image/yxz.png">
                  </span>
                  <span v-else="selecedelse">
                      <img src="./../../assets/image/wxz.png">
                  </span>
              个人的内心想法</p>
          </div>
      </div>
      <div class="mbgc-cptm-button" @click="nextShow()" v-show="sum<2">
          <button>确认</button>
      </div>
      <div class="mbgc-cptm-buttons" v-show="sum>1">
          <button @click="preShow()">返回上一题</button>
          <button @click="nextShow()">确认</button>
      </div>
      <div class="mbgc-cptm-diagle" v-show="sum>17">
          <div class="mbgc-cptm-main">
              <img src="./../../assets/image/wccp.png">
              <p>测评完成，即将显示测评结果！</p>
              <button @click="resultShow();">确定</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum:1,
      selecedif:false,
      selecedelse:false
    }
  },
  methods:{
    nextShow() {
      this.sum++;
    },
    preShow() {
      this.sum--;
    },
    selecedIf:function(index){
      this.index=this.sum;
      this.selecedif = !this.selecedif;
      this.selecedelse = false;
    },
    selecedElse:function(index) {
      this.index=this.sum;
      this.selecedif = false;
      this.selecedelse = !this.selecedelse;
    },
    resultShow:function(){
      this.$router.push('./mbgc_result');
    }
  },
  created(){
    console.log(this.sum);
  }
}
</script>

<style>
.mbgc-cptm-wrapper{
  background: #f7f7f7;
  height: 100%;
}
.mbgc-cptm-list{
  background: white;
}
.mbgc-cptm-list .mbgc-cptm-title p{
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  padding: .83em 0;
}
.mbgc-cptm-list .mbgc-cptm-title p span{
  color:#55b2f5;
}
.mbgc-cptm-list .mbgc-cptm-tm{
  text-align: left;
  padding-bottom: 6.15em;
}
.mbgc-cptm-list .mbgc-cptm-tm h3{
  font-size: 17px;
  color: #555555; 
  margin:.8em 0 .5em .7em;
}
.mbgc-cptm-list .mbgc-cptm-tm p{
  font-size: 15px;
  color: #999999; 
  margin-left: 2.5em;
  line-height: 2.2em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span{
  display: inline-block;
  margin-right: .5em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span img{
  width: 1em;
}
.mbgc-cptm-wrapper .mbgc-cptm-button,.mbgc-cptm-wrapper .mbgc-cptm-buttons{
  margin-top: .88em;
  font-size: 0;
}
.mbgc-cptm-wrapper .mbgc-cptm-button button{
  width: 90%;
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #55b2f5;
  border:none;
  border-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button{
  width: calc(90%/2);
  padding: .5em 0;
  font-size: 18px;
  border:none;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(1){
  background: #E5E5E5;
  color: #999999;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(2){
  background: #55b2f5;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-diagle{
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.mbgc-cptm-diagle .mbgc-cptm-main{
  width: 80%;
  background: white;
  margin: 10em auto;
  border-radius: 5px;
}
.mbgc-cptm-diagle .mbgc-cptm-main img{
  height: 4em;
  margin: 2em 0 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main p{
  font-size: 14px;
  color: #333333;
  margin:1.35em 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main button{
  width: 100%;
  color: white;
  padding: 1em 0;
  background: #55b2f5;
  margin-top: .1em;
  border:none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>

