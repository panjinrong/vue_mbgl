<template>
	<div class="ygkm-wrapper">
		<v-bt></v-bt>
		<div class="tjmb_title">
			<img src="./../../../assets/image/juxing.png">
			<h4>推荐目标</h4>
		</div>
		<div class="tjmb_list">
			<v-tjmn></v-tjmn>
		</div>
	</div>
</template>
<script>
import bt from './lost_xq_bt'
import tjmn from './../../find/mbgc_tjmb'
export default {
	props: {
		km:{
			type:Number,
			default:1
		}
	},
	data(){
		return{
		}
	},
	methods:{
	
	},
	components:{
		'v-bt':bt,
		'v-tjmn':tjmn
	}
}
</script>
<style>	
.ygkm-wrapper{
	text-align: left;
	background: #f7f7f7;
	width: 100%;
}
.tjmb_title{
	margin-top: .59em;
	background:white;
	padding: .4em 0;
}
.tjmb_title img{
	display: inline-block;
	height: 1em;
}
.tjmb_title h4{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
}
.tjmb_list{
	background: white;
}
</style>