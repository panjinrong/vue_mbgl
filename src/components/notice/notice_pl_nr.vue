<template>
   <div class="notice_pl_nr">
    <div class="notice_pl_nr_header" >
      <v-header :showsz="false" headimg="small"></v-header>
    </div>
   </div>
</template>

<script>
import header from './notice_header'
export default {
  name: 'notice_pl_nr',
  data(){
  	return{

  	}
  },
  components:{'v-header':header}
}
</script>
<style>
/*tool*/
.clearbt{
  clear: both;
}
.notice_pl_nr{
  text-align: left;
}
.notice_pl_nr_header{
  padding:0em .875em;
}
</style>
