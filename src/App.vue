<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face{
  font-family: PingFang-SC-Medium;
  src: url('./assets/icomoon/PingFang Medium.ttf');
}
#app {
  font-family:PingFang-SC-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ft-color-white{
  color:white!important;
}
.ft-family-scBlod{
  font-family: 'PingFang-SC-Bold';
}
.ft-family-impact{
  font-family: 'impact';
}
.ft-17{
  font-size: 1.0625em;
}
.ft-wt{
  font-weight: bold;
}
.ft-12{
  font-size:.75em!important;
}
.ft-bold{
  font-weight: bold;
}
.ft-color-gray{
  color:#9b9b9b;
}
.ft-color-blue{
  color:#52acfa;
}

</style>
