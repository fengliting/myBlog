webpackJsonp([84],{oCIu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),i=n("FOjm"),l=n("OT9B"),u=n("OPJW"),c=n("Gtft"),o=n("laDb"),r={name:"ClueList",extends:u.a,components:{ClueCell:i.a},methods:{fetchData:function(){return Object(l.k)(a()({},this.params))},itemClick:function(t){this.params.onSuccess?(this.params.onSuccess(t),this.$router.go(-1)):this.$RouteUtil.commonDetail({id:t.id,module:"clues",type:"all"})}},activated:function(){var t=this,e={};"agents"!==this.params.module&&(e={text:"新建",onSuccess:function(){o.a.clueAdd({customerId:t.params.id,type:"add",onSuccess:function(){t.$refs.list.onPullingDown()}})}}),c.a.setRight(e)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yi-auto-list",{ref:"list",attrs:{"fetch-data":t.fetchData,"enabled-pull-up":!1},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item;return e.index,n("ClueCell",{attrs:{item:s},on:{onItemClick:t.itemClick}})}}])})},staticRenderFns:[]},m=n("VU/8")(r,d,!1,null,null,null);e.default=m.exports}});