webpackJsonp([51],{DdLx:function(t,e){},"a/KJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),c=a("Xxa5"),r=a.n(c),o=a("//Fk"),l=a.n(o),u=a("exGp"),f=a.n(u),s=a("ylad"),d=a("Zqov"),p=a("OPJW"),m={components:{ListInfo:s.a},extends:p.a,name:"financialFund",props:["allData"],data:function(){return{id:this.$route.params.id,isLoading:!0,data:{}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return f()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new l.a(function(t){setTimeout(function(){return t({financialChannel:"1211",financialCompany:"3200",financialProduct:"2018-212-211",grantAmount:"20000",dateOfArrival:"1211",financialIncome:"1211",financialRebate:"1211",financialExpenditure:"1211",licensePlateIncome:"1211",financialServiceFee:"1211",financialTotalIncome:"1211",otherIncomeRemark:"我是备注"})},1e3)});case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}},e,t)}))()},getValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"price";return Object(d.b)({data:this.defaultData,key:t,type:e})}},computed:{defaultData:function(){return Object(d.a)(this.data)},info:function(){var t=this;return{title:"款项详情",data:[{title:"金融渠道",key:"financialChannel"},{title:"金融公司",key:"financialCompany"},{title:"金融产品",key:"financialProduct"},{title:"批贷金额",key:"grantAmount",type:"price"},{title:"到账日期",key:"dateOfArrival"},{title:"金融返点",key:"financialRebate",type:"price"},{title:"金融支出",key:"financialExpenditure",type:"price"},{title:"金融服务费",key:"financialServiceFee",type:"price"},{title:"金融总收入",key:"financialTotalIncome",type:"price"}].map(function(e){return i()({},e,{value:Object(d.b)(i()({},e,{data:t.defaultData})),values:e.values?e.values.map(function(e){return i()({},e,{value:Object(d.b)(i()({},e,{data:t.defaultData}))})}):void 0})})}}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("yi-container",{staticClass:"contain",attrs:{"show-loading":this.isLoading}},[e("div",{staticClass:"content"},[e("list-info",{attrs:{form:this.info}})],1)])},staticRenderFns:[]};var y=a("VU/8")(m,v,!1,function(t){a("DdLx")},"data-v-6cdf348d",null);e.default=y.exports}});