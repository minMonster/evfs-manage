(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f97d3ea"],{"405c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"node-admission"},[e("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px",color:"#373737"}},[e("div",{staticClass:"nodeback",staticStyle:{cursor:"pointer","margin-bottom":"10px"},on:{click:t.back}},[t._v("< 退出")]),t._m(0),e("div",{staticClass:"split-line"}),t._m(1),e("div",{staticClass:"split-line"}),e("Row",[e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务域名称：")]),e("Input",{attrs:{type:"text",placeholder:"请输入全链唯一的业务域名称"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1)])],1)],1),e("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-bottom":"15px",color:"#273D52","font-weight":"600"}},[e("span",[t._v("数据存管域管理员决议审批规则")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),e("RadioGroup",{staticClass:"approval",model:{value:t.rule,callback:function(a){t.rule=a},expression:"rule"}},[e("Row",[e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"0"}},[t._v("任意一个成员签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"100"}},[t._v("1/3成员同时签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"200"}},[t._v("2/3成员同时签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"300"}},[t._v("所有成员同时签批")])],1)],1)],1)],1),e("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"league-mem"},[e("span",[t._v("数据存管域管理")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),e("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")])],1),e("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),e("Modal",{attrs:{title:"添加业务域管理员",loading:t.submitLoading},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(a){t.addModal=a},expression:"addModal"}},[e("div",{staticClass:"add-modal-body"},[e("div",[e("Input",{attrs:{placeholder:"请输入管理员姓名"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),e("div",[e("Input",{attrs:{placeholder:"请输入管理员身份标志地址"},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1)])]),e("div",{staticStyle:{"text-align":"center"}},[e("Button",{staticClass:"fcenter",attrs:{type:"primary"},on:{click:t.establish}},[t._v("创建")])],1)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[e("span",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"18px"}},[t._v("业务域基础信息设置")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[e("span",{staticStyle:{color:"#273D52","font-weight":"600","font-size":"15px"}},[t._v("基本信息")])])}],s=(e("d81d"),e("a434"),e("b0c0"),e("96cf"),e("1da1")),i=e("5530"),r=(e("9aa7"),e("f96b")),c={data:function(){var t=this,a=[{title:"管理员名称",key:"name"},{title:"管理员身份标志地址",key:"address"},{title:"操作",width:100,render:function(a,e){var n="删除";return a("a",{on:{click:function(){var a=e.index;t.data1.splice(a,1)}}},n)}}];return{form:{name:"",address:""},rule:"0",BusinessDomain:"",data1:[],name:"",submitLoading:!1,columns1:a,total:100,addModal:!1,switch1:"0",switch2:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},seraachBtn:function(){},add:function(){this.addModal=!0},cancel:function(){},ok:function(){var t=this;setTimeout((function(){t.submitLoading=!1,t.$nextTick((function(){t.submitLoading=!0}))}),100),""===this.form.name||""===this.form.address?this.$Message.warning("请先完成表单！"):(this.data1.push(Object(i["a"])({},this.form)),this.form.name="",this.form.address="",this.addModal=!1)},establish:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={from:sessionStorage.getItem("fbs_address"),orgAddress:"00",orgName:"00",domainId:sessionStorage.getItem("fbs_storage_id"),bizDomainInfo:{name:t.name},members:t.data1.map((function(t){return t.address})),op:1,rule:t.rule},a.next=3,r["a"]({method:"DSDomainBizDomainApplyContractTxReq",jsBody:JSON.stringify(e)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(a){return t.$Message.error(a.retMsg),!1}));case 3:n=a.sent,n&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:n,setIntervalFunc:function(){return r["b"]({txId:n.txId})},func:"send_trans"},(function(a){return a.then((function(a){return 4===a.status||5===a.status||6===a.status?(t.$Message.error(a.remark),!0):3===a.status&&(t.$Message.success("修改成功"),t.addModal=!1,window.history.go(-1),!0)})).catch((function(){return!1}))}));case 5:case"end":return a.stop()}}),a)})))()},back:function(){window.history.go(-1)}}},d=c,l=(e("64a1"),e("2877")),u=Object(l["a"])(d,n,o,!1,null,"66aca290",null);a["default"]=u.exports},"64a1":function(t,a,e){"use strict";var n=e("c043"),o=e.n(n);o.a},"9aa7":function(t,a,e){"use strict";e.d(a,"g",(function(){return o})),e.d(a,"f",(function(){return s})),e.d(a,"c",(function(){return i})),e.d(a,"e",(function(){return r})),e.d(a,"a",(function(){return c})),e.d(a,"d",(function(){return d})),e.d(a,"b",(function(){return l}));var n=e("db04"),o=function(t,a){return n["a"].post("cmw/pbqss.do",t,a)},s=function(t,a){return n["a"].post("cmw/pbqsb.do",t,a)},i=function(t,a){return n["a"].post("cmw/pbqml.do",t,a)},r=function(t,a){return n["a"].post("cmw/pbqrm.do",t,a)},c=function(t,a){return n["a"].post("cmw/pbqan.do",t,a)},d=function(t,a){return n["a"].post("cmw/pbqrc.do",t,a)},l=function(t,a){return n["a"].post("cmw/pbqci.do",t,a)}},a434:function(t,a,e){"use strict";var n=e("23e7"),o=e("23cb"),s=e("a691"),i=e("50c4"),r=e("7b0b"),c=e("65f0"),d=e("8418"),l=e("1dde"),u=e("ae40"),m=l("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,a){var e,n,l,u,m,f,g=r(this),w=i(g.length),x=o(t,w),y=arguments.length;if(0===y?e=n=0:1===y?(e=0,n=w-x):(e=y-2,n=h(p(s(a),0),w-x)),w+e-n>b)throw TypeError(v);for(l=c(g,n),u=0;u<n;u++)m=x+u,m in g&&d(l,u,g[m]);if(l.length=n,e<n){for(u=x;u<w-n;u++)m=u+n,f=u+e,m in g?g[f]=g[m]:delete g[f];for(u=w;u>w-n+e;u--)delete g[u-1]}else if(e>n)for(u=w-n;u>x;u--)m=u+n-1,f=u+e-1,m in g?g[f]=g[m]:delete g[f];for(u=0;u<e;u++)g[u+x]=arguments[u+2];return g.length=w-n+e,l}})},c043:function(t,a,e){},d81d:function(t,a,e){"use strict";var n=e("23e7"),o=e("b727").map,s=e("1dde"),i=e("ae40"),r=s("map"),c=i("map");n({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4f97d3ea.94f095d4.js.map