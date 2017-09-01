<template>
  <div class="find-mbgc-wrapper">
  	 <div clas="find-mbgc-list">
          <router-link to="">最热</router-link> 
          <router-link to="">最新</router-link> 
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
	background: #f7f7f7;
	height: 100%;
	overflow: hidden;
}
</style>

