<template>
	<div class="bt-wrapper">
		<div id="myChart-bt" :style="{width: '100%', height: '200px'}"></div>
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
	mounted(){
		this.drawLine();
	},
	data(){
		return{
			dyxq:false
		}
	},
	methods:{
		drawLine() {
			let myChart = this.$echarts.init(document.getElementById('myChart-bt'));
        myChart.setOption({
        	tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'circle',
			        x : '55%',
			        y :'25%',
			        itemWidth:8,
			        itemHeight:8,
			        padding:[5,0,5,0],
			        data:['优秀','中等','良好','及格','未及格']
			    },
			    color:['#56be93','#5395fe','#ffae3a','#2367b0','#f16a54'],
			    toolbox: {
			        show : true,
			        feature : {
			            magicType : {
			                show: true, 
			                type: ['pie', 'funnel'],
			                option: {
			                    funnel: {
			                        x: '25%',
			                        width: '50%',
			                        funnelAlign: 'right',
			                        max: 1548
			                    }
			                }
			            },
			        }
			    },
			    calculable : true,
			    series : [
			        {
			            name:'成绩情况',
			            type:'pie',
			            radius : ['45%', '65%'],
			            center:['30%','50%'],
			            itemStyle : {
			                normal : {
			                    label : {
			                        show : false
			                    },
			                    labelLine : {
			                        show : false
			                    }
			                },
			                emphasis : {
			                    label : {
			                        show : true,
			                        position : 'center',
			                        textStyle : {
			                            fontSize : '14',
			                            fontWeight : 'bold'
			                        }
			                    }
			                }
			            },
			            data:[
			                {value:10, name:'优秀'},
			                {value:15, name:'中等'},
			                {value:15, name:'良好'},
			                {value:30, name:'及格'},
			                {value:15, name:'未及格'}
			            ]
			        }
			    ]
           });
		}
	}
	}
</script>
<style>	
.bt-wrapper{
	background: white;
}
	
</style>