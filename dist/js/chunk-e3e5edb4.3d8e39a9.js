(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3e5edb4"],{ca2c:function(t,e,s){},da63:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"node-admission"},[s("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px",color:"#373737"}},[s("div",{staticClass:"nodeback",staticStyle:{cursor:"pointer","margin-bottom":"10px"},on:{click:t.back}},[s("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-arrow-back"}}),t._v("退出")],1),t._m(0),s("div",{staticClass:"clear chain-baseinfo"},[t._m(1),s("Row",[s("Col",{attrs:{span:"8"}},[s("div",[t._v("链实例唯一标识："+t._s(t.id))])]),s("Col",[s("div",[t._v("链实例创建时间："+t._s(t.createtime))])])],1)],1),s("div",{staticClass:"split-line"}),s("div",{staticClass:"set-from"},[s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("节点服务器名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的节点服务器名称"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("节点服务器身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的节点身份标识"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("隶属企业名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nameAddr,expression:"form.nameAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业名称"},domProps:{value:t.form.nameAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"nameAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("p",{staticClass:"condition-label"},[t._v("隶属企业身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.addressAddr,expression:"form.addressAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业身份标识"},domProps:{value:t.form.addressAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"addressAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"set-from-item",staticStyle:{"text-align":"center"}},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("申请")])],1)])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[s("div",{attrs:{id:"qrcode"}}),s("div",{staticClass:"over"})])],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"set-body",staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[s("h3",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("主节点服务器授权申请")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"5px"}},[s("input",{attrs:{type:"hidden",id:"signResult"}}),s("span",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("链实例基本信息")])])}],n=(s("b0c0"),s("96cf"),s("1da1")),r=s("f96b"),i={data:function(){return{form:{address:"",name:"",addressAddr:"",nameAddr:""},id:"klsjdfljsljfkklsdjfsdklsjdfljsljfkklsdjfsd",createtime:"2020-1-5 12:00:00",popup:0}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.address&&""!==t.form.nameAddr&&""!==t.form.addressAddr&&""!==t.form.name){e.next=3;break}return t.$Message.warning("请完成表单！"),e.abrupt("return");case 3:return s={from:sessionStorage.getItem("fbs_address"),orgAddress:t.form.address,orgName:t.form.nameAddr,nodeAddr:t.form.addressAddr,nodeInfo:{name:"",cpu:"",memory:"",disk:"",bandwidth:""},amount:"1",nodeType:1,op:1},e.next=6,r["a"]({method:"ChainNodeApplyContractTxReq",jsBody:JSON.stringify(s)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(e){return t.$Message.error(e.retMsg),!1}));case 6:a=e.sent,a&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:a,setIntervalFunc:function(){return r["b"]({txId:a.txId})},func:"send_trans"},(function(e){return e.then((function(e){return 4===e.status||5===e.status||6===e.status?(t.$Message.error(e.remark),!0):3===e.status&&(t.$router.go(-1),t.$Message.success("保存成功！"),t.addModal=!1,!0)})).catch((function(){return!1}))}));case 8:case"end":return e.stop()}}),e)})))()},back:function(){window.history.go(-1)}}},d=i,c=(s("f58a"),s("2877")),l=Object(c["a"])(d,a,o,!1,null,"241f1a0c",null);e["default"]=l.exports},f58a:function(t,e,s){"use strict";var a=s("ca2c"),o=s.n(a);o.a}}]);
//# sourceMappingURL=chunk-e3e5edb4.3d8e39a9.js.map