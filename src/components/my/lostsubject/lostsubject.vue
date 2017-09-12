<template>
	<div class="ygkm-wrapper">
		<div class="ygkm">
			<ul>
				<li :class="{'active-xq':dyxq}" @click="dyxq = !dyxq">
					<div>第一学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">1</span>
					</div>
				</li>
				<div v-show="dyxq" class="ygkm-list">
					<ul>
						<li @click="lostXqShow()"><a>语文<span><img src="./../../../assets/image/next.png"></span></a></li>
						<li @click="lostXqShow()"><a>高数<span><img src="./../../../assets/image/next.png"></span></a></li>
					</ul>
				</div>
				<li>
					<div to="">第二学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">3</span>
					</div>
				</li>
				<li>
					<div to="">第三学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">1</span>
					</div>
				</li>
				<li>
					<div to="">第四学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">0</span>
					</div>
				</li>
				<li>
					<div to="">第五学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">0</span>
					</div>
				</li>
				<li>
					<div to="">第六学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">6</span>
					</div>
				</li>
				<li>
					<div to="">第七学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">{{km}}</span>
					</div>
				</li>
				<li>
					<div to="">第八学期
						<span v-if="dyxq"><img src="./../../../assets/image/xxjt.png"></span>
						<span v-else="dyxq"><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">{{km}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			km:{
				type:Number,
				default:1
			}
		},
		data(){
			return{
				dyxq:false
			}
		},
		methods:{
			lostXqShow:function(){
				this.$router.push('./lost_xq');
			}
		}
	}
</script>
<style>
	.active-ks{color: red;}
	.active-xq{
		color: #f8f8f8 !important;
		background: #65BFFF !important;
		font-size: 17px !important;
		font-weight: bold;
	}
	.ygkm-wrapper{
		background: #f7f7f7;
	}
	.ygkm{
		text-align: left;
		background: white;
	}
	.ygkm ul li{
		line-height: 2.3em;
		border-bottom: 1px solid #eeeeee;
		padding:.38em .8em .38em .87em;
		font-size: 15px;
		color: #444444;
		font-family: PingFang-SC-Bold;
	}
	.ygkm ul li{
		font-size: 15px;
		color: #444444;
	}
	.ygkm ul li span{
		font-size: 14px;
		color: #f1f1f1;
	}
	.ygkm ul li span{
		display: inline-block;
		width: .5em;
		float: right;
		margin-left: .5em;
	}
	.ygkm ul li span img{
		width: 100%;
		vertical-align: middle;
	}
	.ygkm-list{
	}
	.ygkm-list ul li{
		font-size: 15px;
		color: #333333;
		background: #eeeded;
		border-bottom: 1px solid #dddddd;
	}
	.ygkm-list ul li a{
		display: block;
	}
	.ygkm-list .router-link-active{
		 color:#333333 !important;
	}
</style>