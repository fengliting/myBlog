webpackJsonp([62],{"6CHf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:{name:{type:String},label:{type:String},disabled:{type:Boolean,default:!1},value:String,type:{type:String,default:"text",validate:function(e){return-1!==["text","url","email","password","search"].indexOf(e)}}},methods:{updateValue:function(e){this.$emit("input",e.target.value)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form__input"},[e.label?a("label",{staticClass:"form__label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),a("input",{staticClass:"input",attrs:{type:e.type,disabled:e.disabled},domProps:{value:e.value},on:{input:e.updateValue,change:e.updateValue}})])},staticRenderFns:[]},r={components:{TextInput:a("VU/8")(i,l,!1,null,null,null).exports},data:function(){return{email:""}},methods:{validateBeforeSubmit:function(){this.$validator.validateAll().then(function(e){e?alert("Form Submitted!"):alert("Correct them errors!")})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"name",type:"text"}}),e._v(" "),a("span",[e._v(e._s(e.errors.first("name")))]),e._v(" "),a("br"),a("br"),e._v(" "),a("text-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"email",label:"Email Address",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("span",[e._v(e._s(e.errors.first("email")))]),e._v(" "),a("p",{staticClass:"btn",on:{click:e.validateBeforeSubmit}},[e._v("确认提交")])],1)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(e){a("sLLs")},"data-v-38b6bb5b",null);t.default=s.exports},sLLs:function(e,t){}});