webpackJsonp([43],{"Lv/Y":function(e,t){},tLTx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("//Fk"),o=a.n(n),r=a("FWz8"),l=a("1CjK"),i=a("6D10"),c=a("3r8y"),s=a("Gtft"),u={name:"order-cancel",extends:c.a,created:function(){var e=this;this.$nextTick(function(){e.params=e.$route.params;var t=e.params;t&&t.id?(e.id=t.id,e.form.type="edit"):e.form.type="add","add"===e.form.type?e.getPage({}):Object(r.i)(e.id).then(function(t){e.edit=t,console.log(t,"--------------------0203"),e.getPage(t)}).catch(function(e){console.log(e)})})},activated:function(){s.a.setRight()},computed:{btnName:function(){return this.id?"编辑订单":"创建订单"}},data:function(){return{params:null,clueId:"",id:"",form:{type:"add",info:[{attr:"name",type:"text",title:"客户名称",text:null,placeholder:"请选择客户名称1",rules:{required:!0},required:!1,indent:!1,disable:!0},{attr:"mobile",type:"text",title:"联系电话",text:null,placeholder:"客户联系电话",rules:{required:!0},required:!1,indent:!1,disable:!0},{attr:"gender",type:"text",title:"性别",text:null,placeholder:"请选择性别",rules:{required:!0},required:!1,indent:!1,disable:!0}],data:[]},edit:null}},methods:{onBtnClick:function(){var e=this,t=[];this.$refs.va.forEach(function(e){e.rules&&e.rules.required&&t.push(e.changeV())}),console.log(t,"--------"),o.a.all(t).then(function(t){console.log("新建线索2",e.$refs.va);var a=t.every(function(e){return e});console.log(a),a&&console.log(e.form,"校验成功并提交数据")})},onGetName:function(e){this.$refs.va.forEach(function(t){console.log(t),"name"===t.$attrs.attr&&t.setText(e)})},onCarModel:function(e){var t=this;console.log(e,"data");var a=e.data.innerColors,n=e.data.outerColors;this.form.data.forEach(function(e,o){"appearance"===e.attr&&(t.form.data[o].selData=a?{colorList:Object(i.m)(a)}:{selKey:1,colorList:[{name:"无",colors:{size:1,color:["",""]}}]}),"interior"===e.attr&&(t.form.data[o].selData=n?{colorList:Object(i.m)(n)}:{selKey:1,colorList:[{name:"无",colors:{size:1,color:["",""]}}]})})},getPage:function(e){var t=this;console.log(e);var a=this.menu;console.log(a,"---------\x3e");var n=a.clueAdditionalConfiguration,o=a.clueIntentionType,i=a.clueShoppingWay,c=a.gender,s=a.customerOrigin,u=a.customerType,d=a.clueFailureType,f=a.clueFailureReason;Object(r.g)().then(function(e){console.log(e,"=========================>success2");var a=[];e.forEach(function(e){console.log(e),"cancelOrder"===e.code&&(a=e.fields)}),a.sort(function(e,t){return e.sort-t.sort}),t.allData=a,console.log(a,"=========================>data2");var r=[];r="add"===t.form.type?a.filter(function(e){return"step5"===e.description}):a,console.log(r,"=========================>data2");var p=[];r.forEach(function(e){var t={attr:e.attr,type:l.a[e.configsObj.type],title:e.name,text:null,value:null,placeholder:e.configsObj.placeholder,indent:!0,columnWidth:e.columnWidth,selData:{source:[{key:"选项一",value:1},{key:"选项二",value:2}],selectedKey:"下单客户1"}},a=e.rulesObj[0]&&e.rulesObj[0].value,r={};e.rulesObj.length>0&&e.rulesObj.forEach(function(e){"required"===e.type?r[e.type]=e.value:"pattern"===e.type&&(r[e.value]=!0)});var m=r;switch(a&&(t.required=a),m&&(t.rules=m),e.attr){case"vehicleModelId":t.selData.source=n.map(function(e){return{key:e.name,value:e.code}});break;case"intentionType":case"intentionGrade":t.selData.source=o.map(function(e){return{key:e.name,value:e.code}});break;case"shoppingWay":t.selData.source=i.map(function(e){return{key:e.name,value:e.code}});break;case"appearance":case"interior":t.selData=null;break;case"gender":t.selData.source=c.map(function(e){return{key:e.name,value:e.code}});break;case"origin":t.selData.source=s.map(function(e){return{key:e.name,value:e.code}});break;case"type":t.selData.source=u.map(function(e){return{key:e.name,value:e.code}});break;case"cancelType":t.selData.source=d.map(function(e){return{key:e.name,value:e.code}});break;case"reason":t.selData.source=f.map(function(e){return{key:e.name,value:e.code}})}p.push(t)}),t.form.data=p,console.log(t.form.data,"----------\x3e>>>>>>>>>")}).catch(function(e){console.log(e,"==============================>err")})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"input-box2"},[a("cube-scroll",[a("div",{staticClass:"content"},[e._l(e.form.data,function(t,n){return["customerId"===t.attr?a("div",{key:"index"+n,staticClass:"id-box"},e._l(e.form.info,function(t,n){return a("div",{key:"index2"+n,staticClass:"in-box",class:{self:50===t.columnWidth}},[a("yi-input",e._b({ref:"info",refInFor:!0,attrs:{value:t.value,indent:!1,selData:t.selData||null,clearMR:50===t.columnWidth,disable:!0},on:{"update:value":function(a){e.$set(t,"value",a)}},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item1.text"}},"yi-input",t,!1))],1)})):"groupHeader"===t.type?a("div",{key:"index"+n,staticClass:"section-title section-margin-top"},[e._v("\n            "+e._s(t.title)+"\n          ")]):a("div",{key:"index"+n,staticClass:"in-box",class:{self:50===t.columnWidth}},[a("yi-input",e._b({ref:"va",refInFor:!0,attrs:{value:t.value,indent:!1,selData:t.selData||null,clearMR:50===t.columnWidth},on:{"update:value":function(a){e.$set(t,"value",a)},onCarModel:e.onCarModel,onGetName:e.onGetName},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item.text"}},"yi-input",t,!1))],1)]}),e._v(" "),a("div",{staticClass:"space-box"})],2)])],1),e._v(" "),a("yi-btn-box",{attrs:{name:"确认提交"},on:{onBtnClick:e.onBtnClick}})],1)},staticRenderFns:[]};var f=a("VU/8")(u,d,!1,function(e){a("Lv/Y")},"data-v-7bc6ad6e",null);t.default=f.exports}});