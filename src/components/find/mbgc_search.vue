<template>
  <div class="mbgc-search-wrapper">
      <div class="mbgc-search" v-show="search">
      <input type="text" name="search" placeholder="搜索" @click="searchShow()">
      </div>
      <div class="mbgc-searchs" v-show="!search">
      <input type="text" name="search" placeholder="搜索目标">
      <button @click="searchShow()">确认</button>
  </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      search:true
    }
  },
  methods:{
      searchShow() {
        this.search = !this.search;
      }
  }
}
</script>

<style>
.mbgc-search-wrapper{
  margin:0 1em;
}
.mbgc-search-wrapper .mbgc-search input{
  width: 100%;
  padding: .5em 0 .2em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  text-align: center;
  background: url(./../../assets/image/icons.png) no-repeat 43% center;
  background-size: 1em 1em;
  background-color: white;
}
.mbgc-search-wrapper .mbgc-searchs{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: white;
}
.mbgc-search-wrapper .mbgc-searchs input{
  width: 65%;
  padding: .5em 2em .2em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  background: url(./../../assets/image/icons.png) no-repeat .6em center;
  background-size: 1em 1em;
  background-color: white;
  margin-left: 1em;
}
.mbgc-search-wrapper .mbgc-searchs button{
  font-size: 17px;
  color: #555555;
  background:rgba(0,0,0,0);
  border:none;
  vertical-align: middle;
}
</style>

