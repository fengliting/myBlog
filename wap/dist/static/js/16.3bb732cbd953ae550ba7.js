webpackJsonp([16],{"+pH5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r=a("Xxa5"),i=a.n(r),l=a("exGp"),o=a.n(l),c={name:"FollowUpPlanCell",mixins:[a("1J8U").a],computed:{labels:function(){var t=[];return t.push(this.item.status),t},showLevel:function(){return"customer"!==this.$route.params.type},showCarName:function(){return"clue"===this.$route.params.type}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-touch",{staticClass:"cell-contain touch-highlight box-shadow",class:{"box-shadow":t.hasShadow},on:{click:t.handleClick}},[t.showLevel?a("img",{staticClass:"level-icon",attrs:{src:t.getLevelIcon(t.item.targetLevel?t.item.targetLevel.name:"")}}):t._e(),t._v(" "),a("div",{staticClass:"cell-item first"},[a("span",{staticClass:"cell-name"},[t._v(t._s(t.item.targetName||"无"))]),t._v(" "),t.showLevel?t._e():a("yi-star",{attrs:{disabled:!0,value:t.item.targetLevel.code}})],1),t._v(" "),a("div",{staticClass:"cell-item second"},[a("span",[t._v("负责人:"+t._s(t.item.userName||"无"))]),t._v(" "),a("span",[t._v(t._s("clue"===t.type?"线索编号":"客户编号")+":"+t._s(t.item.targetNo))])]),t._v(" "),t.showCarName?a("div",{staticClass:"cell-item second ellipsis",staticStyle:{"text-align":"left"}},[a("span",[t._v("车型信息:"+t._s(t.item.carName||"无"))])]):t._e(),t._v(" "),a("div",{staticClass:"mix-column tag-margin-left"},[t._l(t.labels,function(e,n){return a("div",{key:n,staticClass:"cell-label",class:{"cell-label-support":e.support}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),t._v(" "),a("span",[t._v("计划跟进时间:"+t._s(t.item.plannedTime.split(" ")[0]||"无"))])],2),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"cell-label-contain"},[a("span",{staticClass:"third"},[t._v("跟进目的:"+t._s(t.item.purpose||"无"))])])])},staticRenderFns:[]};var p=a("VU/8")(c,u,!1,function(t){a("hVR2")},"data-v-590ab4d6",null).exports,h=a("zo6m"),f=a("yelY"),m={name:"CalendarList",components:{FilterList:h.a,FollowUpPlanCell:p},created:function(){var t=this;this.$nextTick(function(){var e=t.params.date.split("/"),a=e[0]||"2018",n=e[1]||"7",s=e[2]||"10";Object(f.h)({id:t.params.id,type:t.params.type,year:a,month:n,day:s}).then(function(e){e.planForMonthList&&(t.planDate=e.planForMonthList.filter(function(t){return t.count>0}).map(function(t){return t.date.replace(/-/g,"/")}))}).catch(function(t){return console.log(t,"=>err")})})},props:["fetchData","filterArray"],data:function(){return{params:this.$route.params,type:this.$route.params.type,planDate:[]}},methods:{onSelDate:function(t){console.log("当前选中日期："+t),this.params.date=t,this.$refs.list.refreshData()},mFetchData:function(t){var e=this;return o()(i.a.mark(function a(){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.params.date.split("/"),t.condition=s()({year:[n[0]],month:[n[1]],day:[n[2]]},t.condition),a.next=5,e.fetchData(t);case 5:return r=a.sent,a.abrupt("return",r);case 9:return a.prev=9,a.t0=a.catch(0),a.abrupt("return",[]);case 12:case"end":return a.stop()}},a,e,[[0,9]])}))()},onMonth:function(t){var e=this;console.log(t,"123"),Object(f.i)({month:t,userId:this.params.id,type:this.params.type}).then(function(t){console.log(t,"666"),e.planDate=t.filter(function(t){return t.count>0}).map(function(t){return t.date.replace(/-/g,"/")})}).catch(function(t){return console.log(t)})},refreshData:function(){this.$refs.list.refreshData()},selToDay:function(){this.$refs.calendar.handleSelToday()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FilterList",{ref:"list",attrs:{filterArray:t.filterArray,"fetch-data":t.mFetchData},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return e.index,a("FollowUpPlanCell",{attrs:{item:n},on:{onItemClick:function(e){return t.$emit("onItemClick",e)}}})}}])},[a("div",{attrs:{slot:"header"},slot:"header"},[a("yi-calendar",{ref:"calendar",attrs:{special:t.planDate,defaultDate:t.params.date},on:{onSelDate:t.onSelDate,onMonth:t.onMonth}}),t._v(" "),a("p",{staticClass:"space-line"})],1)])},staticRenderFns:[]};var v=a("VU/8")(m,d,!1,function(t){a("bx9Z")},"data-v-3843a2f9",null).exports,y=a("Gtft"),_=a("laDb"),g=function(t,e){return D[t]&&D[t][e]||D[e]},D={rightTitleParams:function(t){var e=[{id:"1",text:"今天",url:"http://images.itsmycar.cn/button_today.png"}];return("clue"===t.params.type&&t.$store.state.user.userAuths["wap-crm-clue-plan-auth"]||"agent"===t.params.type&&t.$store.state.user.userAuths["wap-agents-add-auth"])&&e.push({id:"2",text:"新建"}),{items:e,onSuccess:function(e){"1"===e.id?t.selToDay():"2"===e.id&&_.a.commonPlanAdd({BACK_ACTION:{path:t.ROUTE_PATH},type:t.type,module:t.module,onSuccess:function(){t.refreshData()}})}}},customer:{filterArray:["customerLevel","followUpPlanStatus",["responsible"]]},agent:{filterArray:["agentLevel","followUpPlanStatus",["responsible"]]},clue:{filterArray:["clueIntentionGrade","followUpPlanStatus",["responsible"]]}},C={name:"CommonPlanList",extends:a("OPJW").a,components:{FollowUpList:v},data:function(){return{type:this.$route.params.type,module:this.$route.params.module,id:this.$route.params.id}},computed:{filterArray:function(){return g(this.type,"filterArray")}},methods:{onItemClick:function(t){this.$RouteUtil.commonDetail({type:this.type,module:this.module,id:t.id})},fetchData:function(t){return Object(f.l)(s()({userId:this.id,type:this.type},t)).then(function(t){return t.page})},selToDay:function(){this.$refs.list.selToDay()}},activated:function(){y.a.setMenu(g(this.type,"rightTitleParams")(this))},refreshData:function(){this.$refs.list.refreshData()}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("FollowUpList",{ref:"list",attrs:{fetchData:this.fetchData,filterArray:this.filterArray},on:{onItemClick:this.onItemClick}})},staticRenderFns:[]};var w=a("VU/8")(C,b,!1,function(t){a("u0a9")},"data-v-50e1656d",null);e.default=w.exports},bx9Z:function(t,e){},hVR2:function(t,e){},u0a9:function(t,e){}});