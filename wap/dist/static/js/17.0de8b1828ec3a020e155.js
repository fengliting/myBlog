webpackJsonp([17],{"3ug7":function(t,e){},"V3K+":function(t,e){},Y22b:function(t,e){},mHOU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("XA9O"),s=a.n(n),i=a("Gtft"),r=a("Dd8w"),c=a.n(r),o=a("W8/A"),l={data:function(){return{data:[],isLoading:!0,isError:!1,errorMesage:"",params:this.$route.params}},methods:{selectItem:function(t){console.log(t),this.$RouteUtil.carSeriesChoose(c()({},t,{onSuccess:this.params.onSuccess}))},fetchData:function(){var t=this;Object(o.c)().then(function(e){t.isLoading=!1,t.isError=!1;var a=[];for(var n in e)a.push({name:n,items:e[n]});setTimeout(function(){return t.data=a},200)}).catch(function(e){t.isLoading=!1,t.isError=!0,t.errorMesage=e.message})}},mounted:function(){this.fetchData()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-container",{attrs:{"show-loading":t.isLoading,"show-error":t.isError,"error-message":t.errorMesage}},[a("cube-index-list",{staticClass:"scroll-content",attrs:{data:t.data},scopedSlots:t._u([{key:"nav-item",fn:function(e){return a("span",{staticClass:"nav-text"},[t._v(t._s(e.item))])}}])},t._l(t.data,function(e,n){return a("cube-index-list-group",{key:n,staticClass:"list-group",attrs:{group:e}},[a("div",{staticClass:"section-header"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.items,function(e,n){return a("cube-index-list-item",{key:n,attrs:{item:e},on:{select:t.selectItem}},[a("div",[a("div",{staticClass:"custom-item",on:{click:function(a){a.stopPropagation(),t.selectItem(e)}}},[a("img",{staticClass:"item-icon",attrs:{src:e.avatar},nativeOn:{click:function(a){t.selectItem(e)}}}),t._v(" "),a("div",{staticClass:"item-name",on:{click:function(a){a.stopPropagation(),t.selectItem(e)}}},[t._v(t._s(e.name))])])])])})],2)}))],1)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("Y22b")},"data-v-f348e186",null).exports,f=a("//Fk"),h=a.n(f),m={name:"ObscureTab",data:function(){return{countryList:this.$store.state.menu.clueNationality.map(function(t){return c()({text:t.name,isSelected:!1},t)}),otherConfig:this.$store.state.menu.clueAdditionalConfiguration.map(function(t){return c()({text:t.name,isSelected:!1},t)}),form:[{title:"价格区间",data:[{type:"range",tag:"priceRange",value:[0,100],rules:{required:!1},selData:{source:[]},indent:!1,clearMR:!1}]},{title:"外观配置",data:[{tag:"carStructure",type:"select",title:"车身类别",text:"",value:null,placeholder:"选择车身类别",rules:{required:!1},selData:{source:this.transformData("clueCarStructure")},indent:!1,clearMR:!0,columnWidth:50},{tag:"carDoorNumber",type:"select",title:"车门数",text:"",value:null,placeholder:"选择车门数",rules:{required:!1},selData:{source:this.transformData("clueCarDoorNumber")},indent:!1,columnWidth:50}]},{data:[{tag:"carDoorNumber",type:"select",title:"座位数",text:"",value:null,placeholder:"选择座位数",rules:{required:!1},selData:{source:this.transformData("clueSeating")},indent:!1,clearMR:!0,columnWidth:50},{type:"space"}]},{title:"动力配置",data:[{tag:"speedChangingBox",type:"select",title:"变速箱类别",text:"",value:null,placeholder:"选择变速箱类别",rules:{required:!1},selData:{source:this.transformData("clueSpeedChangingBox")},indent:!1,clearMR:!0,columnWidth:50},{tag:"displacement",type:"select",title:"排量范围",text:"",value:null,placeholder:"选择排量范围",rules:{required:!1},selData:{source:this.transformData("clueDisplacement")},indent:!1,columnWidth:50}]},{data:[{tag:"driveMode",type:"select",title:"驱动方式",text:"",value:null,placeholder:"选择驱动方式",rules:{required:!1},selData:{source:this.transformData("clueDriveMode")},indent:!1,clearMR:!0,columnWidth:50},{tag:"fuel",type:"select",title:"燃料类别",text:"",value:null,placeholder:"选择燃料类别",rules:{required:!1},selData:{source:this.transformData("clueFuel")},indent:!1,columnWidth:50}]}]}},methods:{transformData:function(t){return this.$store.state.menu[t].map(function(t){return{key:t.name,value:t.code}})},onBtnClick:function(){var t=this,e=this.$refs.va.map(function(t){return t.changeV()});h.a.all(e).then(function(e){if(e.every(function(t){return t})){var a=t.countryList.filter(function(t){return t.isSelected}),n=t.otherConfig.filter(function(t){return t.isSelected}),s={};t.form.forEach(function(t){t.data.forEach(function(t){t.tag&&(Array.isArray(t.value)?s[t.tag]=t.value.join(","):s[t.tag]=t.value)})}),t.clear();var i=c()({},s,{additionalConfiguration:n.map(function(t){return t.code}).join(","),nationality:a.map(function(t){return t.code}).join(",")});t.$emit("onSelectedValueSuccess",i)}})},clear:function(){this.$refs.va.forEach(function(t){t.setText(null),t.setVal(null)}),this.otherConfig.forEach(function(t){return t.isSelected=!1}),this.countryList.forEach(function(t){return t.isSelected=!1})},cancelHandle:function(){}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-container",[a("cube-scroll",[a("div",{staticClass:"section-header"}),t._v(" "),t._l(t.form,function(e,n){return[a("div",{key:n},[e.title?a("div",{staticClass:"section-title",class:n>0?"section-margin-top":null},[t._v("\n          "+t._s(e.title)+"\n        ")]):t._e(),t._v(" "),a("div",{staticClass:"div-box"},[t._l(e.data,function(n,s){return e.data?["space"===n.type?a("div",{key:"space"+s,staticClass:"space-view"}):50===n.columnWidth?a("div",{key:"index"+s,staticClass:"self"},[a("yi-input",t._b({key:"index"+s,ref:"va",refInFor:!0,attrs:{value:n.value,selData:n.selData||null},on:{"update:value":function(e){t.$set(n,"value",e)}},model:{value:n.text,callback:function(e){t.$set(n,"text",e)},expression:"item.text"}},"yi-input",n,!1))],1):a("yi-input",t._b({key:"index"+s,ref:"va",refInFor:!0,attrs:{value:n.value,selData:n.selData||null},on:{"update:value":function(e){t.$set(n,"value",e)}},model:{value:n.text,callback:function(e){t.$set(n,"text",e)},expression:"item.text"}},"yi-input",n,!1))]:t._e()})],2)])]}),t._v(" "),a("div",{staticClass:"section-title section-margin-top"},[t._v("额外配置")]),t._v(" "),a("div",{staticClass:"check-box-group"},t._l(t.otherConfig,function(e,n){return a("yi-touch",{key:n,staticClass:"check-box",class:{selected:e.isSelected},on:{click:function(t){e.isSelected=!e.isSelected}}},[t._v("\n        "+t._s(e.text)+"\n      ")])})),t._v(" "),a("div",{staticClass:"section-title section-margin-top"},[t._v("国别")]),t._v(" "),a("div",{staticClass:"check-box-group"},t._l(t.countryList,function(e,n){return a("yi-touch",{key:n,staticClass:"check-box",class:{selected:e.isSelected},on:{click:function(t){e.isSelected=!e.isSelected}}},[t._v("\n        "+t._s(e.text)+"\n      ")])})),t._v(" "),a("div",{staticClass:"space-box"})],2),t._v(" "),a("yi-btn-box",{attrs:{name:"确认提交"},on:{onBtnClick:t.onBtnClick}})],1)},staticRenderFns:[]};var p=a("VU/8")(m,v,!1,function(t){a("V3K+")},"data-v-da0982ba",null).exports,g=a("laDb"),b={name:"Model",extends:a("OPJW").a,components:{Tabs:s.a,ModelList:d,ObscureTab:p},data:function(){return{titles:["明确意向","模糊意向"]}},computed:{singleChoose:function(){return this.params.singleChoose}},methods:{onTabChange:function(t){this.$refs.tab.selectTab(t),this.setRight(t)},onDimChooseSuccess:function(t){this.params.onSuccess&&this.params.onSuccess({type:"dim",data:t}),this.$router.back()},setRight:function(t){var e=this;0===t?i.a.setRight({text:"搜索",onSuccess:function(){g.a.carModelSearch({onSuccess:e.params.onSuccess})}}):i.a.setRight({text:"清空",onSuccess:function(){e.$refs.obscureTab.clear()}})}},activated:function(){this.setRight(0)}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-container",[t.singleChoose?t._e():a("yi-tab-bar",{attrs:{titles:t.titles},on:{onTabChange:t.onTabChange}}),t._v(" "),a("tabs",{ref:"tab",staticClass:"tab",attrs:{titles:t.titles}},[a("ModelList"),t._v(" "),t.singleChoose?t._e():a("ObscureTab",{ref:"obscureTab",on:{onSelectedValueSuccess:t.onDimChooseSuccess}})],1)],1)},staticRenderFns:[]};var y=a("VU/8")(b,_,!1,function(t){a("3ug7")},"data-v-3598dda6",null);e.default=y.exports}});