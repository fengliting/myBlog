webpackJsonp([53],{OCaE:function(e,t){},tVNo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("3r8y"),a=n("W8/A"),o={name:"colorStep2",extends:s.a,computed:{list:function(){return this.selectList}},mounted:function(){var e=this;this.$nextTick(function(){Object(a.d)({pageNum:e.pageNum,pageSize:e.pageSize}).then(function(t){t.content&&(console.log("===>>>",t),e.selectList=t.content.map(function(e){return{name:e.name,hex:e.hex||"",id:e.id}}))}).catch(function(e){console.log(e)})})},watch:{searchText:function(e){var t=this;try{Object(a.d)({name:e,pageNum:1,pageSize:100}).then(function(e){e.content&&(console.log("===>>>",e),t.selectList=e.content.map(function(e){return{name:e.name,hex:e.hex||"",id:e.id}}))}).catch(function(e){console.log(e)})}catch(e){console.log(e)}}},data:function(){return{searchText:"",selectList:[],pageNum:1,pageSize:20,loading:!1}},methods:{selectItem:function(e){this.params.singleChoose?(e&&e.id&&delete e.id,this.params.onSuccess&&this.params.onSuccess({key:-1,value:e}),this.$router.go(-1)):(this.params.onSuccess&&this.params.onSuccess({key:this.params.index,value:e}),this.$router.go(-1))},addItem:function(){var e=this;this.$AlertUtil.show("chooseCustomize",{type:"insurer",title:"添加颜色",value:"",btnCancel:"取消",btnSure:"确认",placeholder:"请输入颜色名称",onSuccess:function(t){Object(a.a)({name:t.value}).then(function(t){if(console.log("===<<<",t),t){var n={name:t.name,hex:t.hex||"",id:t.id};e.params.singleChoose&&(n&&n.id&&delete n.id,Object(a.b)({carId:e.params.carId,type:0,colors:[t.id]}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})),e.params.onSuccess&&e.params.onSuccess({key:e.params.index,value:n}),e.$router.go(-1)}})}})},scrollEnd:function(){var e=this;console.log("dddddd==>end"),this.loading||(this.loading=!0,Object(a.d)({name:this.searchText,pageNum:this.pageNum+1,pageSize:this.pageSize}).then(function(t){if(t.content){console.log("===>>>",t);var n=t.content.map(function(e){return{name:e.name,hex:e.hex||"",id:e.id}});e.selectList=e.selectList.concat(n),e.pageNum++;setTimeout(function(){e.loading=!1,clearTimeout(null)},500)}}).catch(function(t){console.log(t),e.loading=!1}))}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"search-box"},[n("div",{staticClass:"search-bar"},[n("img",{staticClass:"search-icon",attrs:{src:e.$images.all.small_search}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],ref:"input",staticClass:"search-input",attrs:{type:"text",placeholder:"请输入颜色名称"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"list-box"},[n("cube-scroll",{attrs:{"scroll-events":["scroll","scroll-end"]},on:{"scroll-end":e.scrollEnd}},e._l(e.list,function(t,s){return n("div",{key:s,ref:"list",refInFor:!0,staticClass:"color-list",attrs:{index:"1"}},[n("yi-touch",{staticClass:"item-box",on:{click:function(n){e.selectItem(t)}}},[t.hex?n("yi-out-color",{attrs:{colors:t}}):e._e(),e._v(" "),n("p",{staticClass:"name"},[e._v(e._s(t.name))])],1)],1)})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[n("cube-loading")],1)],1),e._v(" "),n("div",{staticClass:"btn-content"},[n("yi-btn-box",{staticClass:"btnBox",attrs:{add:!0,backgroundColor:"white",color:"#348EED",name:"添加颜色"},on:{onBtnClick:e.addItem}})],1)])},staticRenderFns:[]};var i=n("VU/8")(o,c,!1,function(e){n("OCaE")},"data-v-64347615",null);t.default=i.exports}});