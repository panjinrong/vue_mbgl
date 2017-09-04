<template>
  <div class="find-mbgc-wrapper">
  	 <div class="find-mbgc-list">
          <router-link to="/find/find_mbgc_zrxq">最热</router-link> 
          <router-link to="/find/find_mbgc_zxxq">最新</router-link> 
     </div>
     <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.find-mbgc-wrapper{
  text-align: left;
	background: #f7f7f7;
	height: 100%;
}
.find-mbgc-wrapper .find-mbgc-list{
  background: #ffffff;
  padding: .53em .8em;
}
.find-mbgc-wrapper .find-mbgc-list>a{
  font-size: 15px;
  color: #999999;
  padding: .3em 0 0;
  margin-right: 3em;
}
.find-mbgc-wrapper .find-mbgc-list .router-link-active{
  color: #333333 !important;
  border-bottom: 1px solid #333333;
}
</style>

