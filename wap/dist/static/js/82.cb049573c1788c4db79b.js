webpackJsonp([82],{WJ4h:function(e,t){},oz2e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("Gu7T"),a=i.n(r),n=i("Xxa5"),l=i.n(n),c=i("//Fk"),s=i.n(c),o=i("exGp"),u=i.n(o),p=i("mvHQ"),y=i.n(p),d=i("Dd8w"),v=i.n(d),f=i("3r8y"),m=i("Gtft"),k=i("ylad"),h=i("Zqov"),b=i("kIQj"),x={name:"finishDelivery",extends:f.a,components:{ListInfo:k.a},data:function(){return{initData:null,data:{},inComeData:{},costData:{},form:[{title:"车辆详情",form:[{attr:"deliveryTime",type:"date",title:"线下交车时间",text:"",placeholder:"请选择车辆入库时间",rules:{required:!0},required:!0,indent:!1},{attr:"plateNumber",type:"text",title:"车牌号",rules:{required:!1,carNumber:!0},required:!1,text:null,value:null,placeholder:"请输入车牌号",indent:!1,hint:"若未提供报牌服务，则车牌号可不填写。"}]},{title:"附件信息",form:[{attr:"deliveryProcedure",type:"fileUpload",title:"交车车辆手续",value:null,line:!1,placeholder:"请选择交车车辆手续",rules:{required:!0},required:!0,indent:!1},{attr:"deliveryImg",type:"fileUpload",title:"交车图片",value:null,line:!1,placeholder:"请选择交车图片",rules:{required:!0},required:!0,indent:!1},{attr:"receiptConfirmation",type:"fileUpload",title:"客户收款确认书",value:null,line:!1,placeholder:"请选择客户收款确认书",rules:{required:!0},required:!0,indent:!1}]}]}},computed:{showForm:function(){return[{title:"收入小计",list:[{title:"总计收入",type:"price",key:"totalIncome"},{title:"车身售价",key:"carPrice",type:"price",values:[{title:"车身进价",type:"price",key:"carPurchasingPrice"},{title:"车身差价",type:"price",key:"carPriceSpread"}]},{title:"保险收入",type:"price",key:"insuranceIncome",values:[{title:"交强险",type:"price",key:"clivta"},{title:"车船税",type:"price",key:"travelTax"},{title:"商业险",type:"price",key:"vehicleInsurance"},{title:"其他险",type:"price",key:"otherInsurance"},{title:"保险返点",type:"price",key:"insuranceRebate"}]},{title:"金融收入",key:"financialIncome",type:"price",values:[{title:"金融返点",type:"price",key:"financialRebate"},{title:"金融服务费",type:"price",key:"financialServiceFee"}]},{title:"运费收入",type:"price",key:"freightIncome"},{title:"报牌费收入",type:"price",key:"licensePlateIncome"},{title:"精品收入",type:"price",key:"boutiqueIncome"},{title:"其他收入",type:"price",key:"otherIncome",values:[{title:"其他收入备注",key:"otherIncomeRemark"}]}],data:this.inComeData},{title:"成本小计",list:[{title:"总计成本",type:"price",key:"totalCost"},{title:"资金成本",type:"price",key:"capitalCost"},{title:"实际保费",key:"actualPremium",type:"price",values:[{title:"交强险",type:"price",key:"clivta"},{title:"车船税",type:"price",key:"travelTax"},{title:"商业险",type:"price",key:"vehicleInsurance"},{title:"其他险",type:"price",key:"otherInsurance"}]},{title:"金融支出",type:"price",key:"financialExpenditure"},{title:"运费合计",key:"totalFreight",type:"price",values:[{title:"大板运费",type:"price",key:"bigBoard"},{title:"小板运费",type:"price",key:"smallBoard"},{title:"空板运费",type:"price",key:"emptyBoard"},{title:"调拨运费",type:"price",key:"transfer"}]},{title:"上牌费",type:"price",key:"licensePlateExpense"},{title:"精品成本",type:"price",key:"boutiqueCost"},{title:"POS机手续费",type:"price",key:"posServiceCharge"},{title:"其他成本",type:"price",key:"otherCost",values:[{title:"其他成本备注",key:"otherCostRemake"}]}],data:this.costData}].map(function(e){return{title:e.title,showMore:!0,data:e.list.map(function(t){return v()({},t,{value:Object(h.b)(v()({},t,{data:e.data})),values:t.values?t.values.map(function(t){return v()({},t,{value:Object(h.b)(v()({},t,{data:e.data}))})}):void 0})})}})}},mounted:function(){this.fetchData()},methods:{isEdit:function(){return this.initData!==y()(this.form)},fetchData:function(){var e=this;return u()(l.a.mark(function t(){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.all([Object(b.e)(e.params),Object(b.d)(e.params)]);case 2:i=t.sent,e.inComeData=i[0],e.costData=i[1];case 5:case"end":return t.stop()}},t,e)}))()},onBtnClick:function(){var e,t=this,i=this.$refs.va.map(function(e){return e.changeV()});s.a.all(i).then((e=u()(l.a.mark(function e(i){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.every(function(e){return e})){e.next=8;break}return r=[],t.form.forEach(function(e){return r.push.apply(r,a()(e.form))}),e.next=6,Object(b.i)(Object(h.c)(r,{deliveryId:t.params.id}));case 6:t.params.onSuccess&&t.params.onSuccess(),t.$router.go(-1);case 8:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))}},activated:function(){m.a.setRight()}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"input-box2"},[i("cube-scroll",[i("div",{staticClass:"margin-top"},e._l(e.showForm,function(e,t){return i("list-info",{key:t,staticClass:"table",attrs:{form:e}})})),e._v(" "),e._l(e.form,function(t,r){return i("div",{key:r,staticClass:"content"},[i("div",{staticClass:"section-title section-margin-top"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),e._l(t.form,function(t,r){return i("div",{key:"index2"+r,staticClass:"in-box",class:{self:50===t.columnWidth}},[i("yi-input",e._b({ref:"va",refInFor:!0,attrs:{value:t.value,indent:!0,selData:t.selData||null},on:{"update:value":function(i){e.$set(t,"value",i)}},model:{value:t.text,callback:function(i){e.$set(t,"text",i)},expression:"item1.text"}},"yi-input",t,!1))],1)})],2)}),e._v(" "),i("div",{staticClass:"space-box"})],2)],1),e._v(" "),i("yi-btn-box",{attrs:{name:"完成交车",icon:e.$images.delivery.ic_delivery},on:{onBtnClick:e.onBtnClick}})],1)},staticRenderFns:[]};var I=i("VU/8")(x,C,!1,function(e){i("WJ4h")},"data-v-025bde4c",null);t.default=I.exports}});