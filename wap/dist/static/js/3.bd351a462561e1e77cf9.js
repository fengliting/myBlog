webpackJsonp([3],{jzkO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),n=a.n(o),r=a("woOf"),i=a.n(r),l=a("pFYg"),s=a.n(l),c=a("//Fk"),d=a.n(c),u=a("mvHQ"),f=a.n(u),m=a("OT9B"),h=a("rMyF"),p=a("FWz8"),v=a("1CjK"),g=a("W8/A"),b=a("3r8y"),y=a("Gtft"),x=a("N6PA"),I=a("6D10"),O={name:"clue-add",extends:b.a,created:function(){var e=this;this.params=this.$route.params;var t=this.params;console.log(t),t&&t.id?(this.id=t.id,this.form.type="edit"):this.form.type="add",t.obj&&t.obj.userId&&(this.userId=t.obj.userId,this.form.info[0].text=t.obj.name,this.form.info[0].value=t.obj.name,this.form.info[1].text=t.obj.mobile,this.form.info[1].value=t.obj.mobile,this.form.info[2].text=1===t.obj.gender?"女":"男",this.form.info[2].value=t.obj.gender),t.customerId?(this.userId=t.customerId,this.selClueFrom=!0):this.selClueFrom=!1,"add"===this.form.type?(t.customerId&&Object(h.h)(t.customerId).then(function(t){e.form.info[0].text=t.name,e.form.info[0].value=t.name,e.form.info[1].text=t.mobile,e.form.info[1].value=t.mobile,e.form.info[2].text=t.gender.name,e.form.info[2].value=t.gender.code}).catch(function(e){console.log(e)}),this.getPage({})):Object(m.i)(this.id).then(function(t){e.userId=t.customerId,console.log(t,"111222333"),e.whetherOrder=t.whetherOrder,e.whetherOrder?(e.form.info[0].disable=!0,e.form.info[1].disable=!0,e.form.info[2].disable=!0):(e.form.info[0].disable=!1,e.form.info[1].disable=!1,e.form.info[2].disable=!1),e.getPage(t),e.edit=t,e.intentionType=t.intentionType.code}).catch(function(e){console.log(e)})},computed:{btnName:function(){return this.id?"保   存":"确认提交"}},activated:function(){y.a.setRight()},data:function(){return{params:this.$route.params,initData:null,id:"",userId:"",selClueFrom:!1,intentionType:0,carInfo:null,whetherOrder:!1,form:{type:"add",info:[{attr:"name",type:"text",title:"客户名称",text:"",value:null,placeholder:"请选择客户名称",rules:{required:!0},required:!0,indent:!1,disable:!0},{attr:"mobile",type:"text",title:"联系电话",text:null,value:null,placeholder:"客户联系电话",rules:{required:!0,mobile:!0},required:!0,indent:!1,disable:!0},{attr:"gender",type:"select",title:"性别",text:null,value:null,placeholder:"请选择性别",rules:{required:!0},selData:{source:[]},required:!0,indent:!1,disable:!0}],data:[]},edit:null}},methods:{isEdit:function(){return this.initData!==f()(this.form)},onBtnClick:function(){var e=this;console.log("新建线索1"),console.log(this.$refs.va);var t=[];this.$refs.va.forEach(function(e){e.rules&&!Object(I.j)(e)&&t.push(e.changeV())}),this.whetherOrder||this.$refs.info.forEach(function(e){e.rules&&!Object(I.j)(e)&&t.push(e.changeV())}),d.a.all(t).then(function(t){console.log("新建线索2",t);var a=t.every(function(e){return e});if(console.log(a),a){console.log(e.form,"校验成功并提交数据");var o={};e.form.data.forEach(function(e){if("group"!==e.attr){var t="";if(t=e.value||"switch"===e.type?e.value:0===e.value?0:e.text,console.log(t,"item"),"appearance"===e.attr||"interior"===e.attr)try{t&&t.id&&delete t.id,t.colors&&t.colors[0]&&t.colors[0].id&&delete t.colors[0].id,t.colors&&t.colors[1]&&t.colors[1].id&&delete t.colors[1].id,t="object"===(void 0===t?"undefined":s()(t))?t&&f()(t)||"":t}catch(e){console.log(e)}"belongStoreId"===e.attr&&("object"===s()(e.value)?t=e.value&&e.value.id:"string"==typeof e.value&&(t=e.value&&JSON.parse(e.value)&&JSON.parse(e.value).id)),e.hide||(o[e.attr]=t),"vehicleModelId"===e.attr&&(o.carName=e.text,o.vehicleModelId=e.value),"intentionGrade"===e.attr&&"string"==typeof e.value&&(e.intentionGrade=parseInt(e.value))}}),o.responsibleId=o.responsibleId||"","number"==typeof o.belongPlaceId&&(o.belongPlaceId=o.belongPlaceId.toString()),o.customerId=e.userId,o.intentionType=e.intentionType,2===o.intentionType&&(delete o.vehicleModelId,delete o.carName),console.log(o,"校验成功并提交数据--01"),e.carInfo&&(o=i()({},o,e.carInfo)),o.intentionGrade||delete o.intentionGrade,"add"===e.form.type?e.selClueFrom?Object(m.a)(o).then(function(){e.params.onSuccess&&e.params.onSuccess(),e.$router.go(-1)}).catch(function(e){console.log(e,"--------02---------")}):Object(m.a)(o).then(function(t){console.log(t),e.$RouteUtil.clueAddSuccess(n()({},e.params,{name:"新建线索",id:t.id,clueNo:t.clueNo})),e.params.onSuccess&&e.params.onSuccess(),console.log(t,"--------01---------")}).catch(function(e){console.log(e,"--------02---------")}):"edit"===e.form.type&&(e.whetherOrder||Object(m.f)({id:e.userId,name:e.form.info[0].text,mobile:e.form.info[1].text,gender:e.form.info[2].value,isOverride:!0}).then(function(e){}).catch(function(e){return console.log(e)}),o.id=e.id,o.customerId=e.edit.customerId,console.log(o,"==>edit items"),Object(m.e)(o).then(function(){e.params.onSuccess&&e.params.onSuccess(o),e.$router.go(-1)}).catch(function(e){return console.log(e)}))}})},onGetMan:function(e,t){var a=this;console.log(e),e&&Object(p.q)(e).then(function(e){console.log(e,"ddddd");var o=!1;a.form.data.forEach(function(t,r){if("belongStoreId"===t.attr){a.form.data[r].selData.source=e.stores.map(function(t,a){return{key:t.name,value:n()({id:t.id},e.areas[a])}});try{0===a.form.data[r].selData.source.length?(a.form.data[r].hide=!0,o=!0):(a.form.data[r].hide=!1,o=!1)}catch(e){console.log("异常==>",e)}}}),o?a.form.data.forEach(function(e,t){"belongPlaceId"===e.attr&&(a.form.data[t].disable=!1)}):a.form.data.forEach(function(e,t){"belongPlaceId"===e.attr&&(a.form.data[t].disable=!0)}),t||a.form.data.forEach(function(e,t){"belongStoreId"!==e.attr&&"belongPlaceId"!==e.attr||(a.form.data[t].text="",a.form.data[t].value="")}),t&&(a.initData=f()(a.form))}).catch(function(e){return console.log(e)})},onStore:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&(console.log(void 0===e?"undefined":s()(e),"==>000"),"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof e&&(e=JSON.parse(e)),console.log(void 0===e?"undefined":s()(e),"==>000==>000"),this.form.data.forEach(function(o,n){"belongPlaceId"===o.attr&&(a||(console.log(e,"==>666"),console.log(t.form.data[n],"==>111"),console.log(t.form.data[n].attr,"==>222"),console.log(e.address,"==>333"),console.log(e.codes,"==>444"),console.log(e.codes[e.codes.length-1],"==>555"),t.form.data[n].text=e.address,t.form.data[n].value=e.codes&&""+e.codes[e.codes.length-1]))}))},onCarModel:function(e,t){var a=this;console.log(e,"==>colors");var o=e.data.innerColors,n=e.data.outerColors;this.form.data.forEach(function(r,i){"appearance"===r.attr&&(a.form.data[i].carId=e.data.id,t||(a.form.data[i].text="",a.form.data[i].value=""),a.form.data[i].selData=n,a.form.data[i].disable=!1),"interior"===r.attr&&(a.form.data[i].carId=e.data.id,t||(a.form.data[i].text="",a.form.data[i].value=""),a.form.data[i].selData=o,a.form.data[i].disable=!1)}),e.id||e.data.id?this.intentionType=1:(this.intentionType=2,this.carInfo=e.data),t&&(this.initData=f()(this.form))},getPage:function(e){var t=this;console.log("--------------------"),console.log(e);var a,o=this.menu,n=o.followUpTarget,r=[],i=o.clueAdditionalConfiguration,l=o.clueIntentionType,s=o.clueIntentionGrade,c=o.clueShoppingWay,d=o.gender,u=o.customerOrigin,h=o.customerType,p=o.shoppingTime,b=(o.to4s,o.quotation,o.qualifications,o.compareNum);1===(a=(this.$store.state.user.users||[]).map(function(e){return{name:e.name,code:e.dingUserId}})).length&&this.onGetMan(a[0].code),this.form.info[2].selData.source=d.map(function(e){return{key:e.name,value:e.code}}),e.name&&(this.form.info[0].text=e.name),e.mobile&&(this.form.info[1].text=e.mobile),e.gender&&(this.form.info[2].text=e.gender.name,this.form.info[2].value=e.gender.code),Object(m.g)().then(function(a){console.log(a,"=========================>success");var o=[];a.forEach(function(e){"create-clue"===e.code&&(o=e.fields),"edit-clue"===e.code&&(o=e.fields)}),o.sort(function(e,t){return e.sort-t.sort}),console.log(o,"=========================>data");var m=[];o.forEach(function(a){var o={attr:a.attr,type:v.a[a.configsObj.type],title:a.name,text:null,value:null,placeholder:a.configsObj.placeholder,indent:!0,columnWidth:a.columnWidth,selData:{source:[],selectedKey:""}};if("vehicleModelId"===o.attr&&t.selClueFrom&&("add"===t.params.type?o.singleChoose=!1:o.singleChoose=!0),"appearance"!==o.attr&&"interior"!==o.attr||(o.isOther=!0),"belongPlaceId"===o.attr&&(o.disable=!0),e[o.attr]){if(o.value=e[o.attr],o.text=e[o.attr],"intentionType"===o.attr&&(o.text=e[o.attr].name,o.value=e[o.attr].code),"intentionGrade"===o.attr&&(o.text=e[o.attr].name,o.value=e[o.attr].code),"shoppingWay"===o.attr&&(o.text=e[o.attr].name,o.value=e[o.attr].code),"appearance"===o.attr)try{o.text=JSON.parse(e[o.attr]).name,o.value=JSON.parse(e[o.attr])}catch(e){o.text=null}if("interior"===o.attr)try{var f=JSON.parse(e[o.attr]).colors[0].name;JSON.parse(e[o.attr]).colors[1]&&(f+="/"+JSON.parse(e[o.attr]).colors[1].name),o.text=f}catch(e){o.text=null}"area"===o.attr&&(o.text=e[o.attr].name,o.value=e[o.attr].code),"belongStoreId"===o.attr&&(o.text=e.storeSimpleDTO&&e.storeSimpleDTO.storeName,o.value=e.storeSimpleDTO&&{id:e.storeSimpleDTO.id}),"remark"===o.attr&&(o.text=Object(I.d)(e[o.attr]),o.value=Object(I.d)(e[o.attr])),["compareNum","shoppingTime"].includes(o.attr)&&(o.text=e[o.attr].name,o.value=e[o.attr].code)}var g=!1;a.rulesObj&&a.rulesObj.forEach(function(e){"required"===e.type&&(g=!0)});var y=Object(x.a)(a);switch(g&&(o.required=g),y&&(o.rules=y),a.attr){case"target":o.selData.source=n.map(function(e){return{key:e.name,value:e.code}});break;case"purpose":o.selData.source=r;break;case"vehicleModelId":o.selData.source=i.map(function(e){return{key:e.name,value:e.code}});break;case"shoppingTime":o.selData.source=p.map(function(e){return{key:e.name,value:e.code}});break;case"compareNum":o.selData.source=b.map(function(e){return{key:e.name,value:e.code}});break;case"intentionType":o.selData.source=l.map(function(e){return{key:e.name,value:e.code}});break;case"intentionGrade":o.selData.source=s.map(function(e){return{key:e.name,value:e.code}}).filter(function(e){return 0!==e.value});break;case"shoppingWay":o.selData.source=c.map(function(e){return{key:e.name,value:e.code}});break;case"appearance":case"interior":o.selData=null;break;case"gender":o.selData.source=d.map(function(e){return{key:e.name,value:e.code}});break;case"origin":o.selData.source=u.map(function(e){return{key:e.name,value:e.code}});break;case"type":o.selData.source=h.map(function(e){return{key:e.name,value:e.code}});break;case"to4s":case"quotation":case"qualifications":o.selData.source=[{key:"是",value:!0},{key:"否",value:!1}]}m.push(o)}),t.form.data=m,console.log(t.form.data,"----------\x3e>>>>>>>>>"),"edit"===t.form.type&&t.form.data.forEach(function(a,o){"vehicleModelId"===a.attr&&(t.form.data[o].text=e.carName,t.form.data[o].value=e.vehicleModelId,e.vehicleModelId&&e.vehicleModelId&&"模糊意向"!==e.carName&&Object(g.f)(e.vehicleModelId).then(function(e){return t.onCarModel({data:e},!0)}).catch(function(e){return console.log(e)})),"responsibleId"===a.attr&&(t.form.data[o].text=e.responsibleName,t.form.data[o].value=e.responsibleId,e.responsibleId&&t.onGetMan(e.responsibleId,!0)),"belongPlaceId"===a.attr&&(t.form.data[o].text=e.belongPlaceName,t.form.data[o].value=e.belongPlaceId)}),t.initData=f()(t.form)}).catch(function(e){console.log(e,"==============================>err")})}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"input-box2"},[a("cube-scroll",[a("div",{staticClass:"content"},[e._l(e.form.data,function(t,o){return["customerId"===t.attr?a("div",{key:"index"+o,staticClass:"id-box"},e._l(e.form.info,function(t,o){return a("div",{key:"index2"+o,staticClass:"in-box",class:{self:50===t.columnWidth}},[a("yi-input",e._b({ref:"info",refInFor:!0,attrs:{value:t.value,indent:!0,selData:t.selData||null,clearMR:50===t.columnWidth},on:{"update:value":function(a){e.$set(t,"value",a)}},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item1.text"}},"yi-input",t,!1))],1)})):"groupHeader"===t.type?a("div",{key:"index"+o,staticClass:"section-title section-margin-top"},[e._v("\n            "+e._s(t.title)+"\n          ")]):a("div",{key:"index"+o,staticClass:"in-box",class:{self:50===t.columnWidth}},[a("yi-input",e._b({ref:"va",refInFor:!0,attrs:{value:t.value,indent:!0,selData:t.selData||null,clearMR:50===t.columnWidth&&"interior"!==t.attr},on:{"update:value":function(a){e.$set(t,"value",a)},onCarModel:e.onCarModel,onGetMan:e.onGetMan,onStore:e.onStore},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item.text"}},"yi-input",t,!1))],1)]}),e._v(" "),a("div",{staticClass:"space-box"})],2)])],1),e._v(" "),a("yi-btn-box",{attrs:{name:e.btnName},on:{onBtnClick:e.onBtnClick}})],1)},staticRenderFns:[]};var D=a("VU/8")(O,k,!1,function(e){a("lFi2")},"data-v-e262671a",null);t.default=D.exports},lFi2:function(e,t){}});