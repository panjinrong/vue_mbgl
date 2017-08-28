<template>
  <div id="my">
  <wd-detail></wd-detail>
  </div>
</template>

<script>
import wd_detail from './wd-detail'
export default {
  name: 'my',
  components:{
  	'wd-detail':wd_detail
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
#my{
	background: #f2f2f2;
}
</style>
