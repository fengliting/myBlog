webpackJsonp([12],{HiJh:function(t,e){},LDD6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),s=n("//Fk"),r=n.n(s),c=n("exGp"),o=n.n(c),l=n("Dd8w"),u=n.n(l),d=n("XA9O"),f=n.n(d),h=n("aRB2"),m=n("W8/A"),p=n("Gtft"),v={name:"SeriesChoose",extends:n("OPJW").a,components:{Tabs:f.a,CarList:h.a},computed:{titles:function(){return this.data.map(function(t){return t.name})}},data:function(){return{data:[],isLoading:!0}},methods:{onTabChange:function(t){this.$refs.tab.selectTab(t)},itemClick:function(t,e){this.$RouteUtil.carModelChoose(u()({},this.data[t].data[e],{onSuccess:this.params.onSuccess}))},fetchData:function(){var t=this;return o()(i.a.mark(function e(){var n,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params.id,e.next=3,Object(m.e)(n);case 3:return a=e.sent,t.isLoading=!1,e.next=7,r.a.all(a.map(function(t){return Object(m.i)(t.id)}));case 7:s=e.sent,a.forEach(function(t,e){return t.data=s[e]}),setTimeout(function(){return t.data=a},200);case 10:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.fetchData()},activated:function(){this.title=this.params.name||this.title,p.a.setTitle({title:this.title}),p.a.setRight()}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yi-container",{attrs:{"show-loading":t.isLoading}},[n("yi-tab-bar",{attrs:{titles:t.titles},on:{onTabChange:t.onTabChange}}),t._v(" "),n("tabs",{ref:"tab",staticClass:"tab",attrs:{titles:t.titles}},t._l(t.data,function(e,a){return n("CarList",{key:a,attrs:{type:"series",data:e.data,hasRightIcon:!0},on:{itemClick:function(e){return t.itemClick(a,e)}}})}))],1)},staticRenderFns:[]};var C=n("VU/8")(v,b,!1,function(t){n("HiJh")},"data-v-bf4b3fd2",null);e.default=C.exports},S9IE:function(t,e){},aRB2:function(t,e,n){"use strict";var a={name:"index",components:{CarModelCell:n("mvUx").a},props:{data:Array,hasRightIcon:Boolean,type:String},methods:{handleClick:function(t){this.$emit("itemClick",t)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yi-container",[n("yi-list",{attrs:{data:t.data,"enabled-pull-up":!1,"enabled-pull-down":!1},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item,i=e.index;return["series"===t.type?n("yi-touch",{staticClass:"item-contain touch-highlight height67",on:{click:function(e){t.handleClick(i)}}},[n("yi-image",{staticClass:"item-icon",attrs:{src:a.avatar}}),t._v(" "),n("div",{staticStyle:{flex:"1",display:"flex","flex-direction":"column","justify-content":"space-around"}},[n("div",{staticClass:"item-name"},[t._v("\n            "+t._s(a.name)+"\n          ")])])],1):t._e(),t._v(" "),"model"===t.type?n("car-model-cell",{attrs:{item:a},on:{click:function(e){t.handleClick(i)}}}):t._e()]}}])})],1)},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(t){n("S9IE")},"data-v-b4392e84",null);e.a=s.exports}});