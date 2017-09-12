<template>
    <div class="collegegoal_addcyz_xq_wrapper">
		<v-search></v-search>
		<div class="addname-xq-list">
			<p>A</p>
	 		<ul>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 		</ul>
		</div>
		<div class="addname-xq-list">
			<p>B</p>
	 		<ul>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 			<li>
	 				<img src="./../../../assets/image/photo1.jpg">
	 				<p>阿杰</p>
	 				<v-button></v-button>
	 			</li>
	 		</ul>
		</div>
    </div>
</template>	

<script>
import mbgc_search from './../../find/mbgc_search'
import button from './button_yq'
let sum=0;
export default {
	data(){
  	return{
  		imgShow:false
  	}
  },
  methods:{
  	djImg(index){
  		this.sum=index;
  		this.imgShow=true;
  		
  	}
  },
  created() {
  	console.log(this.sum);
  },
   components:{
    'v-search':mbgc_search,
    'v-button':button
  }
}
</script>

<style>
.collegegoal_addcyz_xq_wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.addname-xq-list>p{
	padding: 0 1.05em
}
.addname-xq-list ul li{
	padding: .3em 1.05em;
	border-bottom: 1px solid #eeeeee;
	background: white;
}
.addname-xq-list ul li>img{
	width: 2em;
	height: 2em;
	vertical-align: top;
	border-radius: 6px;
}
.addname-xq-list ul li p{
	display: inline-block;
	font-size: 16px;
	color: #333333;
	margin-top:.5em;
}
/* .button-wrapper{
	
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
.addname-xq-list ul li span{
	float: right;
}
.addname-xq-list ul li span > img{
	width: 3.6em;
	height: 1.5em;
	vertical-align: top;
	margin-top: .25em
} */
</style>