<template>
  <div id="routers">
   <div class="home-routers">
      <router-link to="/my">
        <div><span class="icon-my icon-font"></span></div>
        <div><span>目标</span></div>
      </router-link>
      <router-link to="/find">
        <div><span class="icon-find icon-font"></span></div>
        <div><span>发现</span></div>
      </router-link>
      <router-link to="/notice">
        <div><span class="icon-notice icon-font"></span></div>
        <div><span>通知</span></div>
      </router-link>
      <router-link to="/ranking">
        <div><span class="icon-ranking icon-font"></span></div>
        <div><span>排行</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'routers'
}
</script>

<style>
.home-routers{
  position: fixed;
  font-size: .875em;
  bottom: 0;
  width:100%;
  height:3.5em;
  line-height: 3.5em;
  background: white;
  box-shadow: 0 0 2px #c9c9c9;
}
.home-routers > a{
  display: block;
  width: calc(25% - 1em);
  height:3.5em;
  line-height: 3.5em;
  margin-left: .5em;
  margin-right:.5em;
  float: left;
  color:#9c9c9c;
}
.home-routers > a > div:last-child{
  height:1.5em;
  line-height: 1.5em;
}
.home-routers > a > div:first-child{
   height:2em;
   line-height:2em;
}
.home-routers > a > div > span {
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}
.icon-font{
  font-size: 1.5em;
}
.router-link-active{
  color:#3da8f5!important;
}
</style>
