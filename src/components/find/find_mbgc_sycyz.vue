<template>
  <div class="mbgc-sycyz-wrapper">
  	 <ul>
        <li>
            <img src="./../../assets/image/photo1.jpg">
            <p>阿杰</p>
            <span>8:20</span>
        </li> 
        <li>
            <img src="./../../assets/image/photo1.jpg">
            <p>阿宝</p>
            <span>8:20</span>
        </li> 
        <li>
            <img src="./../../assets/image/photo1.jpg">
            <p>包子</p>
            <span>8:20</span>
        </li> 
     </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.mbgc-sycyz-wrapper{
  text-align: left;
	background: #f7f7f7;
	min-height: 100%;
  font-family: PingFang-SC-Medium;
}
.mbgc-sycyz-wrapper ul li{
  background: white;
  border-bottom: 1px solid #eeeeee;
  line-height: 3.5em;
  padding: 0 .75em;
}
.mbgc-sycyz-wrapper ul li img{
  width: 2.5em;
  height: 2.5em;
  vertical-align: top;
  margin-top: .5em;
  border-radius: 5px;
}
.mbgc-sycyz-wrapper ul li p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
}
.mbgc-sycyz-wrapper ul li span{
  display: inline-block;
  float: right;
  font-size: 11px;
  color: #999999;
  margin-right: .16em;
}
</style>

