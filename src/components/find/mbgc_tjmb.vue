<template>
  <div class="mbgc-tjmb-wrapper">
      <div class="mbgc-tjmb-list">
          <ul>
              <li>
                  <h3>30天英语学习</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>健身运动</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>社会公益</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>软件工程师</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>高数100天</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import tjmb_button from './mbgc_tjmb_button'
export default {
  components:{
    'v-button':tjmb_button
  },
  props:{},
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
.mbgc-tjmb-wrapper{
  text-align: left;
	background: #f7f7f7;
	height: 100%;
}
.mbgc-tjmb-wrapper .mbgc-tjmb-list ul li{
  padding: .5em .75em .4em;
  border-bottom: 1px solid #eeeeee;
}
.mbgc-tjmb-wrapper .mbgc-tjmb-list ul li h3{
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  line-height: 1.5em;
}
.mbgc-tjmb-wrapper .mbgc-tjmb-list ul li p{
  font-size: 11px;
  color: #999999;
}
.mbgc-tjmb-wrapper .mbgc-tjmb-list ul li span{
  display: inline-block;
  float: right;
  margin: -.84em .35em
}
.mbgc-tjmb-wrapper .mbgc-tjmb-list ul li span img{
  width: 4.1em;
}
</style>

