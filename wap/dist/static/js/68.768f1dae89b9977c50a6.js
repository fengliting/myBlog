webpackJsonp([68],{Ausf:function(o,t){},t0Ia:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gtft"),s={name:"upload-cell",mounted:function(){r.a.setTitle({title:"合同资料"})},activated:function(){console.log(this.form,"2222")},data:function(){return{form:{form1:{title:"委托订购合同图片",url:"//jsonplaceholder.typicode.com/photos/",count:1,data:[]},form2:{title:"身份证/企业营业执照",url:"//jsonplaceholder.typicode.com/photos/",count:1,data:[]},form3:{title:"定金定金凭证",url:"//jsonplaceholder.typicode.com/photos/",count:1,data:[]}},onSuccess:null}},methods:{onBtnClick:function(){console.log(this.form,"1112332"),this.$route.params.onSuccess&&this.$route.params.onSuccess({type:"load",data:this.form}),this.$router.go(-1)},onImgs1:function(o){var t={};for(var n in o[0])t[n]=o[0][n];this.form.form1.data.push(t)},onImgs2:function(o){var t={};for(var n in o[0])t[n]=o[0][n];this.form.form2.data.push(t)},onImgs3:function(o){var t={};for(var n in o[0])t[n]=o[0][n];this.form.form3.data.push(t)}}},a={render:function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"input-box2"},[n("cube-scroll",[n("yi-upload-img",{attrs:{form:o.form.form1},on:{onImgs:o.onImgs1}}),o._v(" "),n("yi-upload-img",{attrs:{form:o.form.form2},on:{onImgs:o.onImgs2}}),o._v(" "),n("yi-upload-img",{attrs:{form:o.form.form3},on:{onImgs:o.onImgs3}})],1)],1),o._v(" "),n("yi-btn-box",{attrs:{name:"确认提交"},on:{onBtnClick:o.onBtnClick}})],1)},staticRenderFns:[]};var e=n("VU/8")(s,a,!1,function(o){n("Ausf")},"data-v-2664fc71",null);t.default=e.exports}});