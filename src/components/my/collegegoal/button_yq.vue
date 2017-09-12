<template>
    <div class="button-wrapper" >
    	<span v-if="imgShow" @click="djImg()">
			<img src="./../../../assets/image/Invitation-Y.png">
		</span>
		<span v-else="imgShow" @click="djImg()">
			<img src="./../../../assets/image/Invitation-N.png">
		</span>
    </div> 
</template>

<script>

export default {
  data(){
  	return{
  		imgShow:false
  	}
  },
  methods:{
  	djImg(){
  		this.imgShow=!this.imgShow;
  		
  	}
  },
}
</script>

<style>
.button-wrapper{
	display: inline-block;
	float: right;
}
.button-wrapper span{
	float: right;
}
.button-wrapper span > img{
	width: 3.6em;
	height: 1.5em;
	vertical-align: top;
	margin-top: .25em
}
</style>