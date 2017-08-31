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
import studyplan from '@/components/my/studyplan/studyplan'
import mygrades from '@/components/my/mygrades/mygrades'
import lostsubject from '@/components/my/lostsubject/lostsubject'
import completed from '@/components/my/completed/completed'
import college from '@/components/my/completed/college'
import personal from '@/components/my/completed/personal'
import incompleted from '@/components/my/incompleted/incompleted'
import incollege from '@/components/my/incompleted/incollege'
import inpersonal from '@/components/my/incompleted/inpersonal'
import fight from '@/components/my/fight/fight'
/*import collegegoal from '@/components/my/collegegoal/collegegoaldetail'*/
import collegegoaldetail from '@/components/my/collegegoaldetail/collegegoaldetail'
import collegegoaldetail_dt from '@/components/my/collegegoal/collegegoaldetail-dt'
import collegegoaldetail_xq from '@/components/my/collegegoal/collegegoaldetail-xq'
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
	},
  {path: '/studyplan',component: studyplan,meta:{title:"学习计划"}},
  {path: '/mygrades',component: mygrades,meta:{title:"我的成绩"}},
  {path: '/lostsubject',component: lostsubject,meta:{title:"已挂科目"}},
  {path: '/collegegoaldetail/collegegoaldetail',component: collegegoaldetail,redirect: '/collegegoal/collegegoaldetail-xq',meta:{title:"目标详情"},
    children:[{path: '/collegegoal/collegegoaldetail-xq',name: 'collegegoaldetail_xq',component: collegegoaldetail_xq},
             {path: '/collegegoal/collegegoaldetail-dt',name: 'collegegoaldetail_dt',component:collegegoaldetail_dt}]
  },
  {path: '/completed',component: completed,redirect: '/completed/college',meta:{title:"已完成"},
    children:[{path: '/completed/college',name: 'college',component: college},
             {path: '/completed/personal',name: 'personal',component: personal}]
  },
  {path: '/incompleted',component: incompleted,redirect: '/incompleted/incollege',meta:{title:"未完成"},
    children:[{path: '/incompleted/incollege',name: 'incollege',component: incollege},
             {path: '/incompleted/inpersonal',name: 'inpersonal',component: personal}]
  },
  {path: '/fight',component: fight,meta:{title:"谁赞过我"}}
  ]
})
const router = new Router();
router.push('/my');