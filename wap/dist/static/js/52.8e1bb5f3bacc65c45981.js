webpackJsonp([52],{JxiE:function(t,e){},dAJi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),o=a("Xxa5"),c=a.n(o),r=a("//Fk"),s=a.n(r),u=a("exGp"),l=a.n(u),d=a("AYFL"),m=a("Zqov"),f=a("OPJW"),p={components:{ListBox:d.a},extends:f.a,name:"InShopDetail",props:["allData"],data:function(){return{id:this.$route.params.id,isLoading:!0,data:{}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return l()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a(function(t){setTimeout(function(){return t({totalIncome:"1211",carPriceSpread:"3200",carPurchasingPrice:"2018-212-211",carPrice:"20000",insuranceIncome:"1211",financialIncome:"1211",financialDetail:"1211",freightIncome:"1211",licensePlateIncome:"1211",boutiqueIncome:"1211",otherIncome:"1211",images:["http://img4.imgtn.bdimg.com/it/u=1502109304,835943868&fm=15&gp=0.jpg","http://img4.imgtn.bdimg.com/it/u=1502109304,835943868&fm=15&gp=0.jpg"]})},1e3)});case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}},e,t)}))()},getValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"price";return Object(m.b)({data:this.defaultData,key:t,type:e})}},computed:{defaultData:function(){return Object(m.a)(this.data)},info:function(){var t=this;return{type:"section",data:[{title:"车辆详情",data:[{title:"入库时间",key:"freightIncome"},{title:"入库仓库",key:"licensePlateIncome"},{title:"入库图片",key:"images",type:"images"}].map(function(e){return i()({},e,{value:Object(m.b)(i()({},e,{data:t.defaultData}))})})},{title:"车辆手续",data:[{title:"入库时间",key:"freightIncome"},{title:"手续详情",key:"licensePlateIncome"},{title:"手续图片",key:"images",type:"images"}].map(function(e){return i()({},e,{value:Object(m.b)(i()({},e,{data:t.defaultData}))})})}]}}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-container",{staticClass:"more-box",attrs:{"show-loading":t.isLoading}},[a("cube-scroll",["section"===t.info.type?t._l(t.info.data,function(e,n){return a("div",{key:n},[a("p",{directives:[{name:"show",rawName:"v-show",value:0!==e.data.length,expression:"item.data.length !== 0"}],staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("list-box",{attrs:{form:e.data}})],1)}):a("list-box",{attrs:{form:t.info}})],2)],1)},staticRenderFns:[]};var h=a("VU/8")(p,g,!1,function(t){a("JxiE")},"data-v-65c87440",null);e.default=h.exports}});