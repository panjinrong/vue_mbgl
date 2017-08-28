<template>
	<div class="ygkm-wrapper">
		<div class="ygkm">
			<ul>
				<li>
					<router-link to="">第一学期
						<span :class="'active km>0'">1</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第二学期
						<span :class="'active km>0'">3</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第三学期
						<span :class="'active km>0'">1</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第四学期
						<span :class="'active km>0'">0</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第五学期
						<span :class="'active km>0'">0</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第六学期
						<span :class="'active km>0'">6</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第七学期
						<span :class="'active km>0'">1</span>
					</router-link>
				</li>
				<li>
					<router-link to="">第八学期
						<span :class="'active km>0'">{{km}}</span>
					</router-link>
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
				default:2
			}
		},
		data(){
			
		},
	}
</script>
<style>
.active{color: red}
	.ygkm-wrapper{
		background: #f2f2f2;
	}
	.ygkm{
		text-align: left;
		background: white;
	}
	.ygkm ul li{
		line-height: 2.3em;
		border-bottom: 1px solid #eeeeee;
		padding-left: .87em;
		padding-right: .8em;
	}
	.ygkm ul li a{
		font-size: 15px;
		color: #444444;
	}
	.ygkm ul li a span{
		display: inline-block;
		width: .5em;
		float: right;
	}
	.ygkm ul li a span img{
		width: 100%;
	}
</style>