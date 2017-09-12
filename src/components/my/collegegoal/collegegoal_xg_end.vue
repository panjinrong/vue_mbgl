<template>
    <div class="collegegoal-endtime-wrapper">
       <div class="endtime-btx"><p>不提醒</p></div>
       <div class="endtime-tx">
          <img src="./../../../assets/image/photo1.jpg">
          <p>8月1日11:24</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="endtime-tx">
          <img src="./../../../assets/image/photo1.jpg">
          <p>8月1日11:24</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="addtx">
          <img src="./../../../assets/image/Invitation.png">
          <p>添加提醒</p>
       </div>
    </div>
</template>

<script>
export default {
 /* props:{
    complete:{
      type:Boolean
    }
  },*/
  data() {
    return{
      mbyxjShow:false
    }
  },
  methods:{
   
  },
 /* created() {
    console.log(this.mbyxjShow);
  },*/
  
}

</script>

<style>
.collegegoal-endtime-wrapper{
	text-align: left;
	background: #f7f7f7;
  position: fixed;
  width: 100%;
  min-height: 100%;
}
.endtime-btx{
  font-size: 15px;
  color: #333333;
  padding: .65em .8em;
  background: white;
  margin-top: .8em;
  border-bottom: 1px solid #eeeeee;
}
.endtime-tx{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em .8em;
  margin-top: .38em;
}
.endtime-tx > img{
  width: 2em;
  height: 2em;
  border-radius: 50%;
  vertical-align: top;
}
.endtime-tx > p{
  display: inline-block;
  font-size: 13px;
  color: #999999;
  margin-top: .5em;
}
.endtime-tx span{
  float: right;
}
.endtime-tx span img{
  width: 1em;
  margin-top: .6em;
}
.addtx{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em .8em;
  margin-top: .38em;
}
.addtx img{
  width: 1.5em;
  vertical-align: top;
}
.addtx p{
  display: inline-block;
  font-size: 15px;
  color: #333333;
  margin-top: .1em;
}
</style>