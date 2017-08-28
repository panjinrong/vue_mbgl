import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import find from '@/components/find/index'
import my from '@/components/my/index'
import notice from '@/components/notice/index'
import notice_xq from '@/components/notice/notice_xq'
import ranking from '@/components/ranking/index'
import week from '@/components/ranking/week'
import month from '@/components/ranking/month'
import count from '@/components/ranking/count'

Vue.use(Router)
export default new Router({
  routes: [
  	{path: '/my',name: 'my',component: my,meta:{title:"目标"}},
    {path: '/find',name: 'find',component: find,meta:{title:"发现"}},
    {path: '/notice_xq',name: 'notice_xq',component: notice_xq,meta:{title:"评论详情"}},
    {path: '/notice',name: 'notice',component: notice,meta:{title:"消息"}},
    {path: '/ranking',name: 'ranking',component: ranking,redirect: '/ranking/week',meta:{title:"目标排行榜"},
    	children:[{path: '/ranking/week',name: 'week',component: week},
			       {path: '/ranking/month',name: 'month',component: month},
			       {path: '/ranking/count',name: 'count',component: count}]
	}
  ]
})
