(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c04c6f8a"],{"0df9":function(t,e,n){},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,s=n("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return a(this)}})},5138:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"m",(function(){return p})),n.d(e,"l",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return g})),n.d(e,"b",(function(){return h}));var r=n("db04"),a=function(t,e){return r["a"].post("cmw/pbqct.do",t,e)},s=function(t,e){return r["a"].post("cmw/pbqgi.do",t,e)},o=function(t,e){return r["a"].post("cmw/pbqml.do",t,e)},i=function(t,e){return r["a"].post("cmw/pbqan.do",t,e)},c=function(t,e){return r["a"].post("cmw/pbqcn.do",t,e)},u=function(t,e){return r["a"].post("cmw/pbqfc.do",t,e)},d=function(t,e){return r["a"].post("cmw/pbqll.do",t,e)},l=function(t,e){return r["a"].post("cmw/pbqmn.do",t,e)},p=function(t,e){return r["a"].post("cmw/pbqsl.do",t,e)},f=function(t,e){return r["a"].post("cmw/pbqsd.do",t,e)},m=function(t,e){return r["a"].post("cmw/pbqrm.do",t,e)},g=function(t,e){return r["a"].post("cmw/pbqrc.do",t,e)},h=function(t,e){return r["a"].post("cmw/pbqci.do",t,e)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),s="["+a+"]",o=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"705c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alliance"},[n("chain-header",{attrs:{title:"链管理员管理",btn:!0}}),n("div",[n("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px"}},[n("div",{staticStyle:{"margin-bottom":"15px",color:"#273D52","font-weight":"600"}},[n("span",[t._v("链管理员决议审批规则：")]),n("input",{attrs:{type:"hidden",id:"signResult"}}),n("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。"}},[n("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),n("Button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("修改")])],1),n("RadioGroup",{staticClass:"approval",model:{value:t.rule,callback:function(e){t.rule=e},expression:"rule"}},[n("Row",[n("Col",{attrs:{span:"6"}},[n("Radio",{attrs:{label:"0"}},[t._v("任意一个联盟委员签批")])],1),n("Col",{attrs:{span:"6"}},[n("Radio",{attrs:{label:"100"}},[t._v("1/3联盟委员同时签批")])],1),n("Col",{attrs:{span:"6"}},[n("Radio",{attrs:{label:"200"}},[t._v("2/3联盟委员同时签批")])],1),n("Col",{attrs:{span:"6"}},[n("Radio",{attrs:{label:"300"}},[t._v("所有联盟委员同时签批")])],1)],1)],1)],1),n("div",{staticClass:"bg-white padding"},[n("div",{staticClass:"league-mem"},[n("span",[t._v("链管理员列表")]),n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("添加")])],1),n("div",[n("Row",[n("Col",{attrs:{span:"6"}},[n("div",{staticClass:"condition-item"},[n("span",{staticClass:"condition-label"},[t._v("管理员名称：")]),n("Input",{attrs:{type:"text",placeholder:"管理员名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),n("Col",{attrs:{span:"6"}},[n("div",{staticClass:"condition-item"},[n("span",{staticClass:"condition-label"},[t._v("管理员身份标识：")]),n("Input",{attrs:{type:"text",placeholder:"管理员身份标识"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),n("Col",{attrs:{span:"6"}},[n("div",{staticClass:"condition-item"},[n("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"}},[t._v("查询")])],1)])],1)],1),n("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}}),n("div",{staticClass:"page"},[n("div",{staticClass:"page-inner"},[n("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[n("div",{attrs:{id:"qrcode"}}),n("div",{staticClass:"over"})]),n("Modal",{attrs:{title:"添加管理"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[n("div",{staticClass:"add-modal-body"},[n("div",[n("Input",{attrs:{placeholder:"请输入管理员名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("div",[n("Input",{attrs:{placeholder:"请输入管理员身份标志地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("添加")]),n("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},a=[],s=(n("fb6a"),n("b0c0"),n("498a"),n("96cf"),n("1da1")),o=n("5138"),i=n("f96b"),c={data:function(){var t=this,e=[{title:"管理员名称",key:"member_name"},{title:"管理员身份标志地址",key:"member_address"},{title:"添加时间",key:"join_time",render:function(e,n){var r=n.row;return r.join_time?e("span",t.$moment.unix(r.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):e("span","--")}},{title:"操作",width:100,render:function(e,n){var r=n.row,a="删除";return e("a",{on:{click:function(){t.del(r)}}},a)}}];return{acceptLimit:"1/3",addModal:!1,columns:e,listLoading:!1,addLoading:!1,rule:100,oldList:[],list:[],page:{total:1,current:1,size:10},form:{name:"",address:"",status:""},popup:0}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,o["f"]({rule:"chaingroup"}).then((function(t){return t.dataId})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}));case 3:n=e.sent,o["h"]({groupId:"2",address:sessionStorage.getItem("fbs_address"),dataId:n}).then((function(e){t.listLoading=!1,e.rows&&(t.oldList=e.rows,t.page.total=t.oldList.length),t.getList(),t.rule&&(t.rule=e.rule)})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}));case 5:case"end":return e.stop()}}),e)})))()},ok:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.form.name.trim(),r=t.form.address.trim(),n){e.next=5;break}return t.$Message.error("请输入管理员名称"),e.abrupt("return");case 5:return r||t.$Message.error("请输入管理员身份标识密钥"),a={from:sessionStorage.getItem("fbs_address"),member:r.trim(),op:1,opType:2},e.next=9,i["a"]({method:"CommitteeMemberApplyContractTxReq",jsBody:JSON.stringify(a)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(e){return t.$Message.error(e.retMsg),!1}));case 9:s=e.sent,s&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:s,setIntervalFunc:function(){return i["b"]({txId:s.txId})},func:"send_trans"},(function(e){return e.then((function(e){return 4===e.status||5===e.status||6===e.status?(t.$Message.error(e.remark),!0):3===e.status&&(t.$Message.success("修改成功"),t.addModal=!1,t.init(),!0)})).catch((function(){return!1}))}));case 11:case"end":return e.stop()}}),e)})))()},add:function(){},cancel:function(){},del:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={from:sessionStorage.getItem("fbs_address"),member:t.member_address,op:2,opType:2},n.next=3,i["a"]({method:"CommitteeMemberApplyContractTxReq",jsBody:JSON.stringify(r)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(t){return e.$Message.error(t.retMsg),!1}));case 3:a=n.sent,a&&e.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:a,setIntervalFunc:function(){return i["b"]({txId:a.txId})},func:"send_trans"},(function(t){return t.then((function(t){return 4===t.status||5===t.status||6===t.status?(e.$Message.error(t.remark),!0):3===t.status&&(e.$Message.success("修改成功"),e.addModal=!1,e.init(),!0)})).catch((function(){return!1}))}));case 5:case"end":return n.stop()}}),n)})))()},search:function(){},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},u=c,d=(n("a548"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"7aecf2aa",null);e["default"]=l.exports},a548:function(t,e,n){"use strict";var r=n("0df9"),a=n.n(r);a.a},c8d2:function(t,e,n){var r=n("d039"),a=n("5899"),s="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||s[t]()!=s||a[t].name!==t}))}},f96b:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n("db04"),a=function(t,e){return r["a"].post("cmw/pbrus.do",t,e)},s=function(t,e){return r["a"].post("bs/pbgen.do",t,e)},o=function(t,e){return r["a"].post("bs/pbgts.do",t,e)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),s=n("e8b5"),o=n("23cb"),i=n("50c4"),c=n("fc6a"),u=n("8418"),d=n("b622"),l=n("1dde"),p=n("ae40"),f=l("slice"),m=p("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),h=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!m},{slice:function(t,e){var n,r,d,l=c(this),p=i(l.length),f=o(t,p),m=o(void 0===e?p:e,p);if(s(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(l,f,m);for(r=new(void 0===n?Array:n)(v(m-f,0)),d=0;f<m;f++,d++)f in l&&u(r,d,l[f]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-c04c6f8a.9622ea54.js.map