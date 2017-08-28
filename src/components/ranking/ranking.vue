<template>
  <div id="vue-ranking">
  	<div>
	  	<div class="vue-rank rank2">
	  		<a>
		  		<img src="../../assets/rankimg/Cown2.png">
		  		<span class="rank_touxiang2"><img src="../../assets/rankimg/touxiang2.png"></span>
		  	</a>
	  		<div class="ft-color-white">王杰</div>
	  		<div class="ft-color-white ft-family-impact">30</div>
	  	</div>
	  	<div class="vue-rank rank1">
	  		<a>
	  			<img src="../../assets/rankimg/Cown1.png">
	  			<span class="rank_touxiang1"><img src="../../assets/rankimg/touxiang1.png"></span>
	  		</a>
	  		<div class="ft-color-white ft-17">杜利亚</div>
	  		<div class="ft-color-white ft-17 ft-family-impact">31</div>
	  	</div>
	  	<div class="vue-rank rank3">
	  		<a>
	  			<img src="../../assets/rankimg/Cown3.png">
	  			<span class="rank_touxiang3"><img src="../../assets/rankimg/touxiang3.png"></span>
	  		</a>
	  		<div class="ft-color-white">张忠</div>
	  		<div class="ft-color-white ft-family-impact">29</div>
	  	</div>
	  	<div class="clearbt"></div>
  	</div>
  	<div class="rank-table">
  		<ul>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  			<li>
  				<div><a class="ranking-num"><span>4</span></a></div>
  				<div>
  					<a class="ranking-msg">
		  				<img src="../../assets/rankimg/touxiang1.png">
		  				<span>张晓霞</span>
		  			</a>
		  			<a class="ranking-totle">26<span class="ft-color-gray ft-12">个目标</span></a>
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>

</template>

<script>
export default {
  name: 'vue-ranking'
}
</script>

<style>
#vue-ranking{
	padding-top:2.75em;
	background: #41a7fc;
	padding-bottom: .2em;
}
.clearbt{
	clear: both;
}
.ft-color-gray{
	color:#888888;
}
.vue-rank{
	width:calc(33.33% - 1em);
	margin:0em .5em;
	float: left;
}
.vue-rank:first-child{
	width:calc(33.33% - 1.8em);
	margin-left: 1.3em;
}
.vue-rank:nth-last-child(2){
	width:calc(33.33% - 1.8em);
	margin-right: 1.3em;
}
.rank2 a{
	display: block;
	position: relative;
	width: 4.2em;
	margin: 2.15625em auto auto auto;
}
.rank1 a{
	display: block;
	position: relative;
	width: 4.8em;
	margin: .6em auto auto auto;
}
.rank3 a{
	display: block;
	position: relative;
	width: 4.2em;
	margin: 2.15625em auto auto auto;
}
.rank2 a > img,.rank1 a > img,.rank3 a > img{
	width:100%;
}
.rank2 a:after{
	content: "";
	display: block;
	position: absolute;
	background: url("../../assets/rankimg/Second.png");
	background-size: contain;
	width: 1.5em;
	height:1.5em;
	top:.5em;right:-.5em;
	border-radius: 50%;
}
.rank3 a:after{
	content: "";
	display: block;
	position: absolute;
	background: url("../../assets/rankimg/Third.png");
	background-size: contain;
	width: 1.5em;
	height:1.5em;
	top:.5em;left:-.5em;
	border-radius: 50%;
}
.rank_touxiang1{
	display: block;
	position: absolute;
	bottom:.18em;
	left:.22em;
	width: 4.3em;
}
.rank_touxiang2{
	display: block;
	position: absolute;
	bottom:.25em;
	left:.55em;
	width: 3.4em;
}
.rank_touxiang3{
	display: block;
	position: absolute;
	bottom:.18em;
	right:.45em;
	width: 3.5em;
}
.rank_touxiang2 img,.rank_touxiang3 img,.rank_touxiang1 img{
	width: 100%;
}
.rank-table{
	background: white;
	margin:1.4375em .75em 3.0625em .75em;
	padding: .2em 0em;
	border-radius: .5em;
}
.rank-table ul{
	list-style: none;
	margin:auto;
	padding:0;
}
.rank-table ul li{
	height:3.0625em;
	display: flex;
	text-align: left;
}
.rank-table ul li > div:first-child{
	width:3.125em;
}
.rank-table ul li > div:last-child{
	flex:1;
	margin: 0em .8125em 0em 0em;
	padding:0em .2em 0em 0em;
	border-bottom: 1px solid #ededed;
}
.rank-table ul li div{
	height:3.0625em;
	line-height: 3.0625em;
}

a.ranking-num{
	display: inline-block;
	margin:0 0 0 .8125em;
	width:1.5em;
	height: 1.5em;
	line-height:1.5em;
	color: white;
	font-family: "impact";
	background: url("../../assets/rankimg/Ranking.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	text-align:center;
	vertical-align: middle;
}
a.ranking{
}

a.ranking-num span,a.ranking-msg span,a.ranking-totle span{
	font-size: .875em;
	margin-right: .1em;
}
a.ranking-msg img{
	width: 2.0625em;
	vertical-align: middle;
	margin-right: 1.125em;
}
a.ranking-totle{
	color:#ff7f6d;
	float:right;
}
</style>
