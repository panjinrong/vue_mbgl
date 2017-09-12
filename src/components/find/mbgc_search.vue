<template>
  <div class="mbgc-search-wrapper">
      <div class="mbgc-search" v-show="search">
          <input type="text" name="search" placeholder="搜索" @click="searchShow()">
      </div>
      <div class="mbgc-searchs" v-show="!search">
          <input type="text" name="search" placeholder="搜索目标">
          <button>确认</button>
      </div>
      <div class="searchs-xq" v-show="!search">
          <ul>
              <li>
                  <img src="./../../assets/image/photo1.jpg">
                  <p>阿杰</p>
                  <v-button></v-button>
              </li>
              <li>
                  <img src="./../../assets/image/photo1.jpg">
                  <p>阿杰</p>
                  <v-button></v-button>
              </li>
              <li>
                  <img src="./../../assets/image/photo1.jpg">
                  <p>阿杰</p>
                  <v-button></v-button>
              </li>
              <li>
                  <img src="./../../assets/image/photo1.jpg">
                  <p>阿杰</p>
                  <v-button></v-button>
              </li>
          </ul>
      </div>
  </div>

</template>

<script>
import button from './../my/collegegoal/button_yq'
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
  },
  components:{
    'v-button':button
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
.searchs-xq>p{
  padding: 0 1.05em
}
.searchs-xq ul li{
  padding: .3em 1.05em;
  border-bottom: 1px solid #eeeeee;
  background: white;
}
.searchs-xq ul li>img{
  width: 2em;
  height: 2em;
  vertical-align: top;
  border-radius: 6px;
}
.searchs-xq ul li p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin-top:.5em;
}
</style>

