(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d962f578"],{"5e5d":function(t,e,s){"use strict";var o=s("ef0b"),n=s.n(o);n.a},"9aa7":function(t,e,s){"use strict";s.d(e,"g",(function(){return n})),s.d(e,"f",(function(){return r})),s.d(e,"c",(function(){return i})),s.d(e,"e",(function(){return a})),s.d(e,"a",(function(){return d})),s.d(e,"d",(function(){return c})),s.d(e,"b",(function(){return u}));var o=s("db04"),n=function(t,e){return o["a"].post("cmw/pbqss.do",t,e)},r=function(t,e){return o["a"].post("cmw/pbqsb.do",t,e)},i=function(t,e){return o["a"].post("cmw/pbqml.do",t,e)},a=function(t,e){return o["a"].post("cmw/pbqrm.do",t,e)},d=function(t,e){return o["a"].post("cmw/pbqan.do",t,e)},c=function(t,e){return o["a"].post("cmw/pbqrc.do",t,e)},u=function(t,e){return o["a"].post("cmw/pbqci.do",t,e)}},"9ca1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"node-admission"},[s("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px",color:"#373737"}},[s("div",{staticClass:"nodeback",staticStyle:{cursor:"pointer","margin-bottom":"10px"},on:{click:t.back}},[s("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-arrow-back"}}),t._v("退出")],1),t._m(0),s("div",{staticClass:"clear chain-baseinfo"},[s("Row",{staticClass:"chain-header-content"},[s("Col",{attrs:{span:"8"}},[s("div",[t._v("链实例唯一标识："+t._s(t.abridge))])]),s("Col",{attrs:{span:"10"}},[s("div",[t._v("链实例创建时间："+t._s(t.formatCreatetime))])])],1),t.storage_session?s("Row",[s("Col",{attrs:{span:8}},[s("div",[t._v("数据存管域名称："+t._s(t.storage_session.storage_name||"--"))])]),s("Col",{attrs:{span:8}},[s("div",[t._v("数据存管域唯一标识："+t._s(t.storage_session.storage_id_format))])]),s("Col",{attrs:{span:8}},[s("div",[t._v("创建时间："+t._s(t.storage_session.join_time_format))])])],1):t._e()],1),s("div",{staticClass:"split-line"}),s("div",{staticClass:"set-from"},[s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("节点服务器名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的节点服务器名称"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("节点服务器身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入要申请链实例准入的节点身份标识"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item"},[s("p",{staticClass:"condition-label",attrs:{"label-position":"top"}},[t._v("隶属企业名称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nameAddr,expression:"form.nameAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业名称"},domProps:{value:t.form.nameAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"nameAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"condition-item",attrs:{"label-position":"top"}},[s("p",{staticClass:"condition-label"},[t._v("隶属企业身份标识：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.addressAddr,expression:"form.addressAddr"}],staticClass:"condition-int",attrs:{type:"text",placeholder:"请输入节点隶属的企业身份标识"},domProps:{value:t.form.addressAddr},on:{input:function(e){e.target.composing||t.$set(t.form,"addressAddr",e.target.value)}}})])])],1),s("Row",[s("Col",[s("div",{staticClass:"set-from-item",staticStyle:{"text-align":"center"}},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("申请")])],1)])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[s("div",{attrs:{id:"qrcode"}}),s("div",{staticClass:"over"})])],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"set-body",staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[s("input",{attrs:{type:"hidden",id:"signResult"}}),s("h3",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("节点服务器数据存管域准入申请")])])}],r=(s("b0c0"),s("96cf"),s("1da1")),i=s("f96b"),a=s("9aa7"),d={data:function(){return{storage_session:null,storage:{},form:{address:"",name:"",addressAddr:"",nameAddr:""},id:"",createtime:"",popup:0}},mounted:function(){this.init()},watch:{},computed:{formatCreatetime:function(){return this.createtime?this.$moment.unix(this.createtime/1e3).format("YYYY-MM-DD HH:mm:ss"):"--"},abridge:function(){if(!this.id)return"--";var t=this.id.length,e=this.id.substring(0,6),s=this.id.substring(t-6,t);return e+"....."+s}},methods:{init:function(){var t=this;this.storage_session=JSON.parse(sessionStorage.getItem("fbs_storage"));var e=sessionStorage.getItem("pbqci_address"),s=sessionStorage.getItem("pbqci_joinTime");if(e&&s)return this.id=e,void(this.createtime=s);a["b"]().then((function(e){sessionStorage.setItem("pbqci_address",e.address),sessionStorage.setItem("pbqci_joinTime",e.joinTime),t.id=e.address,t.createtime=e.joinTime})).catch((function(t){console.log(t)}))},submit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={from:sessionStorage.getItem("fbs_address"),domainId:sessionStorage.getItem("fbs_storage_id"),nodeAddress:t.form.addressAddr,nodeInfo:{nodeName:t.form.name,orgName:t.form.nameAddr,orgAddress:t.form.address,dSName:sessionStorage.getItem("fbs_storage_id")},url:"",amount:"1",op:1},e.next=3,i["a"]({method:"DSDomainDSNodeApplyContractTxReq",jsBody:JSON.stringify(s)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(e){return t.$Message.error(e.retMsg),!1}));case 3:o=e.sent,o&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:o,setIntervalFunc:function(){return i["b"]({txId:o.txId})},func:"send_trans"},(function(e){return e.then((function(e){return 4===e.status||5===e.status||6===e.status?(t.$Message.error(e.remark),!0):3===e.status&&(t.$router.go(-1),t.$Message.success("保存成功！"),t.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return e.stop()}}),e)})))()},back:function(){window.history.go(-1)}}},c=d,u=(s("5e5d"),s("2877")),m=Object(u["a"])(c,o,n,!1,null,"bf8837c4",null);e["default"]=m.exports},ef0b:function(t,e,s){},f96b:function(t,e,s){"use strict";s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));var o=s("db04"),n=function(t,e){return o["a"].post("cmw/pbrus.do",t,e)},r=function(t,e){return o["a"].post("bs/pbgen.do",t,e)},i=function(t,e){return o["a"].post("bs/pbgts.do",t,e)}}}]);
//# sourceMappingURL=chunk-d962f578.a9f29a37.js.map