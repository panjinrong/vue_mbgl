<template>
  <div class="tjmb-button-wrapper">
      <span v-if="jion" @click="jionShow()">
          <img src="./../../assets/image/yjion.png">
      </span>
      <span v-else="jion" @click="jionShow()">
          <img src="./../../assets/image/jion.png">
      </span>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jion:false
    }
  },
  methods:{
    jionShow:function(){
      this.jion=!this.jion;
    }
  }
}
</script>

<style>
.tjmb-button-wrapper{
 /*  text-align: left;
   background: #f7f7f7;
   height: 100%; */
}
.tjmb-button-wrapper span{
  display: inline-block;
  float: right;
  margin: -.84em .35em
}
.tjmb-button-wrapper span img{
  width: 4.1em;
}
</style>

