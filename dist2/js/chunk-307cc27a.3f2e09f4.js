(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307cc27a"],{"3de1":function(t,e,s){"use strict";var o=s("d6b9"),a=s.n(o);a.a},"3fdc":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"node-admission"},[s("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px",color:"#373737"}},[s("div",{staticClass:"nodeback",staticStyle:{cursor:"pointer","margin-bottom":"10px"},on:{click:t.back}},[s("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-arrow-back"}}),t._v(" 退出")],1),t._m(0),s("div",{staticClass:"clear chain-baseinfo"},[t._m(1),s("Row",[s("Col",{attrs:{span:"8"}},[s("div",[t._v("链实例唯一标识：klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd")])]),s("Col",[s("div",[t._v("链实例创建时间：2020-1-5 12:00:00")])])],1)],1),s("div",{staticClass:"split-line"}),s("div",{staticClass:"set-from"},[s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("p",{staticClass:"condition-label"},[t._v("前置节点服务器名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的前置节点服务器名称"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("span",{staticClass:"condition-label"},[t._v("前置节点服务器身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的前置节点身份标识"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("p",{staticClass:"condition-label"},[t._v("隶属企业名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nameAddr,expression:"form.nameAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业名称"},domProps:{value:t.form.nameAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"nameAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("p",{staticClass:"condition-label"},[t._v("隶属企业身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.addressAddr,expression:"form.addressAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业身份标识"},domProps:{value:t.form.addressAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"addressAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"set-from-item",staticStyle:{"text-align":"center"}},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.serachBtn}},[t._v("申请")])],1)])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[s("div",{attrs:{id:"qrcode"}}),s("div",{staticClass:"over"})])],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"set-body",staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[s("h3",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("前置节点服务器准入申请")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"5px"}},[s("span",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("链实例基本信息")])])}],i=(s("b0c0"),s("d044")),n=s.n(i),r={data:function(){return{form:{address:"",name:"",addressAddr:"",nameAddr:""},popup:0}},mounted:function(){this.init(),this.creatQrCode()},watch:{},computed:{},methods:{init:function(){},serachBtn:function(){var t=this;this.popup=1;var e={name:this.form.name,address:this.form.address,nameAddr:this.form.nameAddr,addressAddr:this.form.addressAddr};this.$http.post("",e).then((function(e){console.log(e),e=e.data,"1"===e.retCode&&t.$router.push("/chain-frontnodelicence")})).catch((function(){}))},back:function(){window.history.go(-1)},creatQrCode:function(){var t={},e=new n.a("qrcode",{text:JSON.stringify(t),width:260,height:260,colorDark:"#000000",colorLight:"#ffffff",correctLevel:3});console.log(e)}}},d=r,c=(s("3de1"),s("2877")),l=Object(c["a"])(d,o,a,!1,null,"e0deb46a",null);e["default"]=l.exports},d6b9:function(t,e,s){}}]);
//# sourceMappingURL=chunk-307cc27a.3f2e09f4.js.map