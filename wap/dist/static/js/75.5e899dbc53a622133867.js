webpackJsonp([75],{"gi+Q":function(t,e){},tgEz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),i=a.n(n),r=a("Xxa5"),s=a.n(r),o=a("exGp"),c=a.n(o),l=a("ylad"),u=a("Dd8w"),d=a.n(u),f=a("I9E5"),v={name:"form",components:{ListInfo:l.a},props:["index"],data:function(){return{form:{title:"付款指令-"+(this.index+1),showMore:!0,defaultShow:!0,rightBtnText:"删除",tag:"付款中",data:[{attr:"paymentRequestTime",type:"date",title:"付款申请日期",placeholder:"请选择付款申请日期"},{attr:"fundType",type:"select",title:"款项类型",selData:{source:[{value:0,key:"上牌费"},{value:1,key:"精品费"},{value:2,key:"交强险"},{value:3,key:"车船税"},{value:4,key:"商业险"},{value:5,key:"其他险种"},{value:6,key:"购置税"},{value:7,key:"其他费用"}]},placeholder:"请选择款项类型"},{attr:"paymentType",type:"select",title:"付款类型",selData:{source:[{value:1,key:"公对公"},{value:2,key:"公对私"},{value:3,key:"私对私"},{value:4,key:"私对公"}]},placeholder:"请选择款项类型"},{attr:"account",title:"账户",placeholder:"请输入账户"},{attr:"accountName",title:"户名",placeholder:"请输入户名"},{attr:"bankOfDeposit",title:"开户行",placeholder:"请输入开户行"},{attr:"amount",type:"money",title:"支付金额",placeholder:"请输入支付金额"},{attr:"postscript",title:"付款附言",placeholder:"请输入付款附言"}].map(this.getItemValue)}}},watch:{typeItemValue:function(t){var e=this;console.log("哈哈",t),["上牌费","交强险","车船税","商业险","其他险种","精品费"].includes(t)&&(this.delItem("其他费用备注"),-1===this.form.data.findIndex(function(t){return"月结"===t.title})?(this.form.data.splice(2,0,this.getItemValue({attr:"serviceProviderId",type:"click",title:"服务商",placeholder:"请选择服务商",onClick:function(){e.$RouteUtil.push({name:"serviceProviderList",params:{onSuccess:function(t){e.form.data.forEach(function(e){"serviceProviderId"===e.attr?(e.text=t.serviceProviderId,e.value=t.serviceProviderId):"account"===e.attr?(e.value=t.account,e.text=t.account,e.disable=!0):"accountName"===e.attr?(e.value=t.accountName,e.text=t.accountName,e.disable=!0):"bankOfDeposit"===e.attr&&(e.value=t.bankOfDeposit,e.text=t.bankOfDeposit,e.disable=!0)})}}})}})),this.form.data.push(this.getItemValue({attr:"isMonthly",type:"switch",text:"有值",title:"月结",rules:{},line:!1}))):this.resetItems()),["其他费用"].includes(t)&&(this.delItem("服务商"),this.delItem("月结"),-1===this.form.data.findIndex(function(t){return"其他费用备注"===t.title})&&this.form.data.splice(2,0,this.getItemValue({attr:"remark",title:"其他费用备注",placeholder:"请输入其他费用备注"})),this.resetItems())},index:function(){this.form.title="付款指令-"+(this.index+1)}},methods:{getItemValue:function(t){return d()({text:"",value:null,indent:!0,type:"text",required:!0,placeholder:"",rules:{required:!0}},t)},validate:function(){var t=this,e=this.$refs.va.map(function(t){return t.changeV()});return i.a.all(e).then(function(e){var a=e.every(function(t){return t});return!a&&f.a.showToast({txt:t.form.title+"表单校验不成功"}),a})},getFormParams:function(){var t={};return this.form.data.forEach(function(e){return t[e.attr]=e.value}),t},resetItems:function(){this.form.data.forEach(function(t){["serviceProviderId","account","accountName","bankOfDeposit"].includes(t.attr)&&t.disable&&(t.text="",t.value=null,t.disable=!1)})},delItem:function(t){var e=this.form.data.findIndex(function(e){return e.title===t});-1!==e&&this.form.data.splice(e,1)}},computed:{typeItemValue:function(){var t=this.form.data.findIndex(function(t){return"fundType"===t.attr});return-1!==t?this.form.data[t].value:null}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("list-info",{attrs:{form:t.form},on:{rightClick:function(e){t.$emit("del")}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.list,i=e.moreIndex;return[t._l(n,function(e,n){return[a("yi-input",t._b({directives:[{name:"show",rawName:"v-show",value:n<i,expression:"i < moreIndex"}],key:e.attr,ref:"va",refInFor:!0,attrs:{value:e.value},on:{"update:value":function(a){t.$set(e,"value",a)}},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"t.value"}},"yi-input",e,!1))]})]}}])})},staticRenderFns:[]},h=a("VU/8")(v,m,!1,null,null,null).exports,p=a("Zqov"),y=a("6D10"),k=a("3r8y"),x=a("kIQj"),I={components:{ListInfo:l.a,SingleForm:h},name:"extraApplyForm",extends:k.a,data:function(){return{id:this.$route.params.id,isLoading:!1,data:[],formList:[Object(y.c)()]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return c()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoading=!1;case 1:case"end":return e.stop()}},e,t)}))()},onBtnClick:function(){var t,e=this,a=this.$refs.form.map(function(t){return t.validate()});i.a.all(a).then((t=c()(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.every(function(t){return t})){t.next=10;break}return n=[],e.$refs.form.forEach(function(t){return n.push(t.getFormParams())}),t.next=6,Object(x.h)({deliveryId:e.params.id,addSpecList:n});case 6:e.params.onSuccess&&e.params.onSuccess(),e.$router.go(-1),t.next=11;break;case 10:console.log("校验失败数据");case 11:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))},add:function(){this.formList.push(Object(y.c)())},handleDel:function(t){1!==this.formList.length&&this.formList.splice(t,1)}},computed:{defaultData:function(){return this.data.map(p.a)}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yi-container",{staticClass:"contain",attrs:{"show-loading":t.isLoading}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header-contain"},[a("div",{staticClass:"item"},[a("div",{staticClass:"header-title"},[t._v("已向客户收款")]),t._v(" "),a("div",{staticClass:"header-content",staticStyle:{color:"#31363B"}},[t._v(t._s(12321321))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"header-title"},[t._v("此次申请金额")]),t._v(" "),a("div",{staticClass:"header-content"},[t._v(t._s(12321321))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"header-title"},[t._v("可支配金额")]),t._v(" "),a("div",{staticClass:"header-content",staticStyle:{color:"#FDA926"}},[t._v(t._s(12321321))])])]),t._v(" "),a("cube-scroll",[a("div",{staticClass:"margin-top"},t._l(t.formList,function(e,n){return a("single-form",{key:e,ref:"form",refInFor:!0,staticClass:"table",attrs:{index:n},on:{del:function(e){t.handleDel(n)}}})})),t._v(" "),a("yi-touch",{staticClass:"add-btn",on:{click:t.add}},[a("img",{attrs:{src:t.$images.delivery.ic_theme_add}}),t._v(" "),a("span",[t._v("添加付款指令")])])],1)],1),t._v(" "),a("yi-btn-box",{staticClass:"btn",attrs:{name:"确认申请",icon:t.$images.delivery.ic_car},on:{onBtnClick:t.onBtnClick}})],1)},staticRenderFns:[]};var g=a("VU/8")(I,_,!1,function(t){a("gi+Q")},"data-v-1c91f5a6",null);e.default=g.exports}});