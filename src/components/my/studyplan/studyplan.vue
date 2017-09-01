<template>
	<div class="mbfl-wrapper">
		<div class="xujh">
			<ul>
				<li :class="{'actives' :selectimg1===true}" @click="selectimg1 = !selectimg1">第一学期
					<span v-if="selectimg1"><img src="./../../../assets/image/xxjt.png"></span>
					<span v-else="selectimg1"><img src="./../../../assets/image/next.png"></span>
				</li>
				<div v-show="selectimg1" class="item">
					<ul>
						<li :class="{'active' :selectimg11===true}" @click="selectimg11 = !selectimg11">马哲
							<span v-if="selectimg11"><img src="./../../../assets/image/xxjt.png"></span>
							<span v-else="selectimg11"><img src="./../../../assets/image/next.png"></span>
						</li>
						<div v-show="selectimg11" class="item-list">
							<ul>
								<li>类别<span>必修</span></li>
								<li>课时<span>60</span></li>
								<li>学分<span>8素养积分</span></li>
								<li>合格需要积分<span>5素养积分</span></li>
								<li>分数<span>100</span></li>
								<li>合格需要分数<span>60</span></li>
							</ul>
						</div>
						<li>大学英语<span><img src="./../../../assets/image/next.png"></span></li>
						<li>高数<span><img src="./../../../assets/image/next.png"></span></li>
						<li>计算机基础<span><img src="./../../../assets/image/next.png"></span></li>
						<li>数据库<span><img src="./../../../assets/image/next.png"></span></li>
					</ul>
				</div>
				<li :class="{'actives' :selectimg2===true}" @click="selectimg2 = !selectimg2">第二学期<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<div v-show="selectimg2" class="item">
					<ul>
						<li>马哲<span><img src="./../../../assets/image/next.png"></span></li>
						<li>大学英语<span><img src="./../../../assets/image/next.png"></span></li>
						<li>高数<span><img src="./../../../assets/image/next.png"></span></li>
						<li>计算机基础<span><img src="./../../../assets/image/next.png"></span></li>
						<li>数据库<span><img src="./../../../assets/image/next.png"></span></li>
					</ul>
				</div>
				<li :class="{'actives' :selectimg3===true}" @click="selectimg3 = !selectimg3">第三学期<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<div v-show="selectimg3" class="item">
					<ul>
						<li>马哲<span><img src="./../../../assets/image/next.png"></span></li>
						<li>大学英语<span><img src="./../../../assets/image/next.png"></span></li>
						<li>高数<span><img src="./../../../assets/image/next.png"></span></li>
						<li>计算机基础<span><img src="./../../../assets/image/next.png"></span></li>
						<li>数据库<span><img src="./../../../assets/image/next.png"></span></li>
					</ul>
				</div>
				<li :class="{'actives' :selectimg4===true}" @click="selectimg4 = !selectimg4">第四学期<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<div v-show="selectimg4" class="item">
					<ul>
						<li>马哲<span><img src="./../../../assets/image/next.png"></span></li>
						<li>大学英语<span><img src="./../../../assets/image/next.png"></span></li>
						<li>高数<span><img src="./../../../assets/image/next.png"></span></li>
						<li>计算机基础<span><img src="./../../../assets/image/next.png"></span></li>
						<li>数据库<span><img src="./../../../assets/image/next.png"></span></li>
					</ul>
				</div>
				<li>第五学期
						<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<li>第六学期
						<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<li>第七学期
						<span><img src="./../../../assets/image/next.png"></span>
				</li>
				<li>第八学期
						<span><img src="./../../../assets/image/next.png"></span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
const num=0;
	export default {
		data() {
			return {
				selectimg1:false,
				selectimg11:false,
				selectimg2:false,
				selectimg21:false,
				selectimg3:false,
				selectimg4:false,
				selectimg5:false,
				selectimg6:false,
				selectimg7:false,
				selectimg8:false
			}
		},
		methods:{
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
	}
	ul li{
	  list-style: none;
	}
	.actives{
		color: #f8f8f8 !important;
		background: #65BFFF !important;
		font-size: 17px !important;
		font-weight: bold;
	}
	.active{
		color: #f8f8f8 !important;
		background: #65BFFF !important;
		font-weight: bold;
	}
	.mbfl-wrapper{
		background: #f7f7f7;
	}
	.xujh{
		text-align: left;
		background: white;
	}
	.xujh ul li{
		line-height: 2.3em;
		border-bottom: 1px solid #eeeeee;
		padding:.38em .8em .38em .87em;
		font-size: 15px;
		color: #444444;
		font-family: PingFang-SC-Bold;
	}
	.xujh ul li span{
		display: inline-block;
		width: .5em;
		float: right;
	}
	.xujh ul li span img{
		width: 100%;
		vertical-align: middle;
	}
	.xujh .item{
		background: #f7f7f7;
	}
	.item ul li{
		border-bottom: 1px solid #dddddd;
		font-size: 15px;
		color: #555555;
		font-family: PingFang-SC-Medium;
	}
	.xujh .item .item-list{
		background: #f0f0f0;
	}
	.item-list ul li{
		font-size: 14px;
		color: #555555;		
	}
	.item-list ul li span{
		width: 5em;
		text-align: right;
		font-size: 14px;
		color: #555555;
	}
</style>