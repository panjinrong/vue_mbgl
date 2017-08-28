<template>
	<div class="mbfl-wrapper">
		<div class="xujh">
			<ul>
				<li>
					<router-link to="">第一学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第二学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第三学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第四学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第五学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第六学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第七学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
				<li>
					<router-link to="">第八学期
						<span><img src="./../../../assets/image/next.png"></span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {}
</script>
<style>
	.mbfl-wrapper{
		background: #f2f2f2;
	}
	.xujh{
		text-align: left;
		background: white;
	}
	.xujh ul li{
		line-height: 2.3em;
		border-bottom: 1px solid #eeeeee;
		padding-left: .87em;
		padding-right: .8em;
	}
	.xujh ul li a{
		font-size: 15px;
		color: #444444;
	}
	.xujh ul li a span{
		display: inline-block;
		width: .5em;
		float: right;
	}
	.xujh ul li a span img{
		width: 100%;
	}
</style>