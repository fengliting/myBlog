webpackJsonp([71],{"2z49":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),u=a("//Fk"),i=a.n(u),l=a("3r8y"),s=a("OT9B"),o=a("6D10"),c=a("Gtft"),f={name:"ClueFailure",extends:l.a,data:function(){return{params:this.$route.params,form:[{type:"select",title:"失效类型",text:"",tag:"failureType",placeholder:"请选择失效类型",selData:{source:Object(o.h)(this.$store.state.menu.clueFailureType)},rules:{required:!0},required:!0,indent:!0},{type:"select",title:"失效理由",text:"",selData:{source:Object(o.h)(this.$store.state.menu.clueFailureReason)},tag:"failureReasonDefeat",key:"failureReason",placeholder:"请选择失效理由",rules:{required:!0},required:!0,indent:!0},{type:"textarea",title:"失效备注",text:"",placeholder:"请输入失效备注",tag:"failureRemark",rules:{required:!0,min:5,max:100},required:!0,indent:!0}]}},activated:function(){c.a.setRight()},computed:{failureTypeValue:function(){return this.form[this.form.findIndex(function(e){return"failureType"===e.tag})].value}},watch:{failureTypeValue:function(e){console.log(e);var t=this.form[this.form.findIndex(function(e){return"failureReason"===e.key})];switch(parseInt(e)){case 1:t.selData={source:Object(o.h)(this.menu.clueFailureReason)},t.text="",t.tag="failureReasonDefeat",t.value="";break;case 2:t.selData={source:Object(o.h)(this.menu.clueFailureReasonInvalid)},t.text="",t.tag="failureReasonInvalid",t.value=""}}},methods:{onBtnClick:function(){var e=this,t=this.$refs.va.map(function(e){return e.changeV()});i.a.all(t).then(function(t){t.every(function(e){return e})&&Object(s.m)(r()({clueId:e.params.id},Object(o.g)(e.form))).then(function(){e.params.onSuccess&&e.params.onSuccess(),e.$router.go(-1)})})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"follow-up app-init"},[a("div",{staticClass:"input-box"},[a("cube-scroll",[e._l(e.form,function(t,n){return[a("yi-input",e._b({key:n,ref:t.rules?"va":null,refInFor:!0,attrs:{value:t.value,selData:t.selData||null,indent:!0},on:{"update:value":function(a){e.$set(t,"value",a)}},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item.text"}},"yi-input",t,!1))]})],2)],1),e._v(" "),a("yi-btn-box",{attrs:{name:"确认提交"},on:{onBtnClick:e.onBtnClick}})],1)},staticRenderFns:[]};var p=a("VU/8")(f,d,!1,function(e){a("tNb5")},"data-v-2304d342",null);t.default=p.exports},tNb5:function(e,t){}});