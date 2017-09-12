<template>
  <div class="find-xymb-wrapper">
      <v-search></v-search>
  	   <div class="xymb-list">
            <ul>
                <li @click="xymbxqShow(1)">
                    <h3>30天英语学习</h3>
                    <span>
                        <img src="./../../assets/image/ljion.png">
                    </span>
                    <p>语言是交流的工具，英语还是无疑是世界上中重要的交流工具之一。学习是进步的阶梯，也是你开起世界大门的第一步，这里，我们将一起奋斗，一起努力，还是还是无疑是世界上最重要的工具之一</p>
                    <a>
                        <img src="./../../assets/image/cjrs.png">
                        <span>参加人数</span>
                        <span>198</span>
                    </a>
                </li>
                <li>
                    <h3>web应用</h3>
                    <span>
                        <img src="./../../assets/image/ljion.png">
                    </span>
                    <p>语言是交流的工具，英语还是无疑是世界上中重要的交流工具之一。学习是进步的阶梯，也是你开起世界大门的第一步，这里，我们将一起奋斗，一起努力，还是还是无疑是世界上最重要的工具之一</p>
                    <a>
                        <img src="./../../assets/image/cjrs.png">
                        <span>参加人数</span>
                        <span>198</span>
                    </a>
                </li>
                <li>
                    <h3>web应用</h3>
                    <span>
                        <img src="./../../assets/image/ljion.png">
                    </span>
                    <p>语言是交流的工具，英语还是无疑是世界上中重要的交流工具之一。学习是进步的阶梯，也是你开起世界大门的第一步，这里，我们将一起奋斗，一起努力，还是还是无疑是世界上最重要的工具之一</p>
                    <a>
                        <img src="./../../assets/image/cjrs.png">
                        <span>参加人数</span>
                        <span>198</span>
                    </a>
                </li>
            </ul> 
       </div>
     
  </div>
</template>

<script>
import mbgc_search from './mbgc_search'
export default {
  data() {
    return {}
  },
  methods:{
    xymbxqShow:function(index){
      this.$router.push('./find_xymb_xq');
    }
  },
  components:{
    'v-search':mbgc_search
  }
}
</script>

<style>
.find-xymb-wrapper{
  text-align: left;
	background: #f7f7f7;
	height: 100%;
  overflow: hidden;
}
.find-xymb-wrapper .xymb-list ul li{
  background: white;
  margin: .875em .75em;
  border-radius: 5px;
  padding: .875em .625em
}
.find-xymb-wrapper .xymb-list ul li h3{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  margin-bottom: .425em;
}
.find-xymb-wrapper .xymb-list ul li >span{
  display: inline-block;
  float: right;
}
.find-xymb-wrapper .xymb-list ul li span img{
  width: 3.6em;
  height: 1.4em;
}
.find-xymb-wrapper .xymb-list ul li a>img{
  width: .8em;
  vertical-align: top;
  margin-top: .25em;
}
.find-xymb-wrapper .xymb-list ul li a>span{
  display: inline-block;
  font-size: 11px;
  color: #999999;
}
.find-xymb-wrapper .xymb-list ul li p{
  font-size: 14px;
  color: #555555;
  line-height: 1.5em;
  text-indent: 2em;
}
</style>

