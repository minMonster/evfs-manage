(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67e40029"],{"11ac":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"g",(function(){return d}));var n=a("db04"),s=function(t,e){return n["a"].post("cmw/pbqbl.do",t,e)},i=function(t,e){return n["a"].post("cmw/pbqbd.do",t,e)},r=function(t,e){return n["a"].post("cmw/pbqbi.do",t,e)},o=function(t,e){return n["a"].post("cmw/pbqbc.do",t,e)},c=function(t,e){return n["a"].post("cmw/pbqml.do",t,e)},d=function(t,e){return n["a"].post("cmw/pbqrc.do",t,e)}},1328:function(t,e,a){"use strict";var n=a("f5f3"),s=a.n(n);s.a},"3bb7":function(t,e,a){},c265:function(t,e,a){"use strict";var n=a("ede2"),s=a.n(n);s.a},d236:function(t,e,a){"use strict";var n=a("3bb7"),s=a.n(n);s.a},ede2:function(t,e,a){},effa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit"},[a("div",{staticClass:"audit-inner"},[a("h2",{staticClass:"audit-title clear"},[t._v(" 待审核事项 ")]),a("div",{staticClass:"tab-wrapper",staticStyle:{width:"70%"}},t._l(t.tabs,(function(e,n){return a("div",{key:n,staticClass:"tab-item",class:{active:t.active===n},on:{click:function(e){return t.changeTab(n)}}},[a("Badge",{attrs:{dot:e.num>0}},[a("button",[t._v(t._s(e.name))])])],1)})),0),a("div",{staticClass:"audit-content"},[t.active?a(t.tabs[t.active].nodeName,{tag:"component",attrs:{"review-type":t.tabs[t.active].review_type}}):t._e()],1)])])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"node-admission"},[t._m(0),a("div",{staticClass:"bg-white padding mb20"},[t._m(1),a("div",[a("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-title"},[a("span",[t._v("业务系统访问许可管理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"25px",color:"#273D52"}},[a("span",[a("b",[t._v("业务域调用访问")]),a("b",[t._v("【黑名单】")]),t._v("： ")])])}],o=(a("b0c0"),{data:function(){var t=this,e=[{title:"业务系统名称",key:"name"},{title:"业务域身份标识",key:"address"},{title:"添加时间",key:"time",render:function(e,a){var n=a.row;return n.join_time?e("span",t.$moment.unix(n.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):e("span","--")}},{title:"状态",key:"statuslabel"},{width:120,title:"申请人",key:"applicant"},{width:130,title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.adds(n)}}},"查看")}},{title:"操作",render:function(t,e){var a=t("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){}}},"同意"),n=t("a",{domProps:{href:"javascript:;"},on:{click:function(){}}},"拒绝");return t("div",{class:"opt-btns"},[a,n])}}],a=[{name:"上海公证系统",address:"00740f...aaba8",applicant:"张力",time:"2020-1-5 10:45:25",statuslabel:"删除审核中",status:"2"},{name:"四川公证系统",address:"00da0c...cfbe5",applicant:"张力",time:"--",statuslabel:"添加审核中",status:"1"},{name:"四川公证系统",address:"00da0c...cfbe5",applicant:"张力",time:"--",statuslabel:"添加审核中",status:"1"}];return{acceptLimit:"1/3",name:"",address:"",addModal:!1,columns1:e,data1:a,total:100,form:{name:"",address:""},switch1:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},adds:function(t){this.$Modal.confirm({title:"已审核人列表",content:"name："+t.name+"<br> address："+t.address+" <br>time："+t.time,oktext:"关闭"})},ok:function(){},cancel:function(){},pageChange:function(t){console.log(t)}}}),c=o,d=(a("c265"),a("2877")),u=Object(d["a"])(c,i,r,!1,null,"c3b686f2",null),l=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"business-detail"},[t._m(0),a("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"30px",color:"#373737"}},[a("span",[t._v("信息监管：")]),a("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}},[a("Radio",{staticStyle:{"margin-right":"40px"},attrs:{label:"1"}},[t._v("允许")]),a("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),a("div",{staticClass:"audit-item"},[a("div",{staticClass:"audit-item-content"},[a("P",[t._v("变更前：")]),a("div",[t._v("允许信息监管：允许")]),t._m(1)],1),t._m(2)])],1),a("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px",color:"#373737"}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",[t._v("文件权限控制：")]),a("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}},[a("Radio",{staticStyle:{"margin-right":"40px"},attrs:{label:"1"}},[t._v("允许")]),a("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),a("div",{staticClass:"audit-item"},[a("div",{staticClass:"audit-item-content"},[a("P",[t._v("变更前：")]),a("div",[t._v("允许文件删除：允许")]),t._m(3)],1),t._m(4)])],1)]),a("div",{staticClass:"padding bg-white mb20"},[a("div",[a("span",[t._v("允许任何人域内保存文件：")]),a("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}},[a("Radio",{staticStyle:{"margin-right":"40px"},attrs:{label:"1"}},[t._v("允许")]),a("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),a("div",{staticClass:"audit-item"},[a("div",{staticClass:"audit-item-content"},[a("P",[t._v("变更前：")]),a("div",[t._v("允许任何人域内保存文件：允许")]),t._m(5)],1),t._m(6)])],1)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-title"},[a("span",[t._v("业务域内文件操作规则设置")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("申请人： 张丽"),a("span",[t._v("审核通过人： "),a("a",{attrs:{href:"javascript:;"}},[t._v("查看")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit-item-btns"},[a("div",{staticClass:"btn-inner"},[a("button",{staticClass:"refuse-btn"},[t._v("拒绝")]),a("button",{staticClass:"agree-btn"},[t._v("同意")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("申请人： 张丽"),a("span",[t._v("审核通过人： "),a("a",{attrs:{href:"javascript:;"}},[t._v("查看")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit-item-btns"},[a("div",{staticClass:"btn-inner"},[a("button",{staticClass:"refuse-btn"},[t._v("拒绝")]),a("button",{staticClass:"agree-btn"},[t._v("同意")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("申请人： 张丽"),a("span",[t._v("审核通过人： "),a("a",{attrs:{href:"javascript:;"}},[t._v("查看")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit-item-btns"},[a("div",{staticClass:"btn-inner"},[a("button",{staticClass:"refuse-btn"},[t._v("拒绝")]),a("button",{staticClass:"agree-btn"},[t._v("同意")])])])}],p={data:function(){return{switch1:"0",switch2:"0",switch3:"0",total:90}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){},pageChange:function(t){}}},v=p,g=Object(d["a"])(v,f,m,!1,null,null,null),h=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"business-detail"},[t._m(0),a("div",{staticClass:"bg-white padding mb20"},[t._m(1),a("div",[a("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])]),a("div",{staticClass:"bg-white padding mb20",staticStyle:{"margin-bottom":"20px"}},[t._m(2),a("div",[a("Table",{attrs:{columns:t.columns2,data:t.data2}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])]),a("div",{staticClass:"bg-white padding mb20"},[t._m(3),a("div",{staticStyle:{overflow:"auto"}},[a("Table",{staticStyle:{"min-width":"1300px"},attrs:{columns:t.columns3,data:t.data3}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-title"},[a("span",[t._v("域内数据治理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[a("span",[a("b",[t._v("文件监管")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[a("span",[a("b",[t._v("数据结构监管")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[a("span",[a("b",[t._v("文件拥有者转移待审列表")])])])}],w={data:function(){var t=this,e=[{title:"文件名称",key:"name"},{title:"文件链上唯一标识",key:"address"},{title:"状态",key:"statuslabel"},{width:120,title:"申请人",key:"applicant"},{width:130,title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.adds(n)}}},"查看")}},{title:"操作",render:function(t,e){var a=t("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){}}},"同意"),n=t("a",{domProps:{href:"javascript:;"},on:{click:function(){}}},"拒绝");return t("div",{class:"opt-btns"},[a,n])}}],a=[{name:"测试.doc",address:"00fb0a...ef34a",applicant:"张力",statuslabel:"解冻审核中",status:"1"},{name:"照片.jpg",address:"00fb0a...eda4e",applicant:"张力",statuslabel:"冻结审核中",status:"2"},{name:"视频.MP4",address:"00fb0a...eac4f",applicant:"张力",statuslabel:"解冻审核中",status:"4"},{name:"音频.MP3",address:"00fb0a...a43fe",applicant:"张力",statuslabel:"冻结审核中",status:"3"}],n=[{title:"数据链上唯一标识",key:"address"},{title:"状态",key:"statuslabel"},{width:120,title:"申请人",key:"applicant"},{width:130,title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.addlook(n)}}},"查看")}},{title:"操作",render:function(t,e){var a=t("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){}}},"同意"),n=t("a",{domProps:{href:"javascript:;"},on:{click:function(){}}},"拒绝");return t("div",{class:"opt-btns"},[a,n])}},{title:"审核结果",render:function(t,e){var a=t("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){}}},"同意"),n=t("a",{domProps:{href:"javascript:;"},on:{click:function(){}}},"拒绝");return t("div",{class:"opt-btns"},[a,n])}}],s=[{address:"00fb0a...ef34a",applicant:"张力",statuslabel:"解冻审核中",status:"1"},{address:"00fb0a...eda4e",applicant:"张力",statuslabel:"冻结审核中",status:"2"},{address:"00fb0a...eac4f",applicant:"张力",statuslabel:"解冻审核中",status:"4"},{address:"00fb0a...a43fe",applicant:"张力",statuslabel:"冻结审核中",status:"3"}],i=[{title:"文件名称",key:"name"},{title:"文件链上唯一标识",key:"address"},{title:"原始拥有者姓名",key:"oldname"},{title:"原始拥有者身份标识",key:"oldid"},{title:"新拥有者姓名",key:"newname"},{title:"新拥有者身份标识",key:"newid"},{width:130,title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.addLook(n)}}},"查看")}},{title:"操作",render:function(t,e){var a=t("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){}}},"同意"),n=t("a",{domProps:{href:"javascript:;"},on:{click:function(){}}},"拒绝");return t("div",{class:"opt-btns"},[a,n])}}],r=[{name:"测试122.doc",address:"00fb0a...ef34a",oldname:"张力",oldid:"00cc0b...ae7ca",newname:"赵宇",newid:"00cc0b...af2c4"}];return{switch1:"0",switch2:"0",switch3:"0",total:90,columns1:e,data1:a,columns2:n,data2:s,columns3:i,data3:r}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){},adds:function(t){this.$Modal.confirm({title:"已审核人列表",content:"name："+t.name+"<br> address："+t.address,oktext:"关闭"})},addLook:function(t){this.$Modal.confirm({title:"已审核人列表",content:"name："+t.name+"<br> address："+t.address,oktext:"关闭"})},addlook:function(t){this.$Modal.confirm({title:"已审核人列表",content:"name："+t.applicant+"<br> address："+t.address,oktext:"关闭"})},pageChange:function(t){}}},x=w,C=Object(d["a"])(x,b,_,!1,null,null,null),y=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"business-detail"},[t._m(0),a("div",{staticClass:"bg-white padding"},[t._m(1),a("div",[a("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-title"},[a("span",[t._v("业务域内合约治理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("span",[a("b",[t._v("合约列表")])])])}],I=(a("fb6a"),a("96cf"),a("1da1")),M=a("11ac"),R=a("f96b"),j={data:function(){var t=this,e=[{title:"合约名称",key:"name"},{title:"合约链上唯一标识",key:"address"},{title:"发布时间",key:"join_time",render:function(e,a){var n=a.row;return n.join_time?e("span",t.$moment.unix(n.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):e("span","--")}},{title:"状态",key:"status"},{width:120,title:"申请人",key:"applicant_name"},{width:130,title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.adds(n)}}},"查看")}},{title:"操作",width:120,render:function(e,a){var n=a.row,s=e("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){t.agree(n)}}},"同意"),i=e("a",{domProps:{href:"javascript:;"},on:{click:function(){t.refuse(n)}}},"拒绝");return e("div",{class:"opt-btns"},[s,i])}}];return{listLoading:!1,columns:e,oldList:[],list:[],page:{total:1,current:1,size:10}}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;this.listLoading=!0,M["g"]({menu:"biz",reviewType:"biz_contract",address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},agree:function(t){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={from:sessionStorage.getItem("fbs_address"),reqId:t.review_id,domainId:sessionStorage.getItem("fbs_biz_id")},a.next=3,R["a"]({method:"BizDomainCreateContractAgreeContractTxReq",jsBody:JSON.stringify(n)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(t){return e.$Message.error(t.retMsg),!1}));case 3:s=a.sent,s&&e.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:s,setIntervalFunc:function(){return R["b"]({txId:s.txId})},func:"send_trans"},(function(t){return t.then((function(t){return 4===t.status||5===t.status||6===t.status?(e.$Message.error(t.remark),!0):3===t.status&&(e.$Message.success("修改成功"),e.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return a.stop()}}),a)})))()},refuse:function(t){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={from:sessionStorage.getItem("fbs_address"),reqId:t.review_id,domainId:sessionStorage.getItem("fbs_biz_id")},a.next=3,R["a"]({method:"BizDomainDisagreeContractTxReq",jsBody:JSON.stringify(n)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(t){return e.$Message.error(t.retMsg),!1}));case 3:s=a.sent,s&&e.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:s,setIntervalFunc:function(){return R["b"]({txId:s.txId})},func:"send_trans"},(function(t){return t.then((function(t){return 4===t.status||5===t.status||6===t.status?(e.$Message.error(t.remark),!0):3===t.status&&(e.$Message.success("修改成功"),e.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return a.stop()}}),a)})))()},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},S=j,z=Object(d["a"])(S,k,$,!1,null,null,null),L=z.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alliance"},[a("h2",{staticClass:"content-title clear"},[t._v(" 业务域管理员管理 ")]),a("div",[t.rule?a("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px"}},[t._m(0),a("RadioGroup",{staticClass:"approval",model:{value:t.rule,callback:function(e){t.rule=e},expression:"rule"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("Radio",{attrs:{label:"0"}},[t._v("任意一个联盟委员签批")])],1),a("Col",{attrs:{span:"6"}},[a("Radio",{attrs:{label:"100"}},[t._v("1/3联盟委员同时签批")])],1),a("Col",{attrs:{span:"6"}},[a("Radio",{attrs:{label:"200"}},[t._v("2/3联盟委员同时签批")])],1),a("Col",{attrs:{span:"6"}},[a("Radio",{attrs:{label:"300"}},[t._v("所有联盟委员同时签批")])],1)],1)],1),a("div",{staticClass:"audit-item"},[a("div",{staticClass:"audit-item-content"},[a("P",[t._v("变更前：")]),a("div",[t._v("联盟委员决议审批规则："+t._s(t.ruleJson[t.old_rule]))]),a("div",[t._v("申请人： "+t._s(t.applicant_name)),t._m(1)])],1),t._m(2)])],1):t._e(),a("div",{staticClass:"bg-white padding"},[t._m(3),a("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}}),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)])],1),a("Modal",{attrs:{title:"添加管理"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("div",{staticClass:"add-modal-body"},[a("div",[a("Input",{attrs:{placeholder:"请输入管理员名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("div",[a("Input",{attrs:{placeholder:"请输入管理员身份标志地址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)])])],1)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"15px",color:"#273D52","font-weight":"600"}},[a("span",[t._v("业务域管理员决议审批规则：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("审核通过人： "),a("a",{attrs:{href:"javascript:;"}},[t._v("查看")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit-item-btns"},[a("div",{staticClass:"btn-inner"},[a("button",{staticClass:"refuse-btn"},[t._v("拒绝")]),a("button",{staticClass:"agree-btn"},[t._v("同意")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"league-mem"},[a("span",[t._v("链管理员列表")])])}],P={data:function(){var t=this,e=[{title:"管理员名称",key:"name"},{title:"管理员身份标志地址",key:"address"},{title:"添加时间",key:"time",render:function(e,a){var n=a.row;return n.join_time?e("span",t.$moment.unix(n.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):e("span","--")}},{title:"状态",key:"status"},{title:"申请人",width:120,key:"apply"},{title:"审核通过人",render:function(e,a){var n=a.row;return e("a",{on:{click:function(){t.adds(n)}}},"查看")}},{title:"操作",width:120,render:function(e,a){var n=a.row,s=e("a",{style:{marginRight:"8px"},domProps:{href:"javascript:;"},on:{click:function(){t.agree(n)}}},"同意"),i=e("a",{domProps:{href:"javascript:;"},on:{click:function(){t.refuse(n)}}},"拒绝");return e("div",{class:"opt-btns"},[s,i])}}],a={0:"任意一个联盟委员签批",100:"1/3联盟委员同时签批",200:"2/3联盟委员同时签批",300:"所有联盟委员同时签批"};return{addModal:!1,ruleJson:a,rule:"",old_rule:"",applicant_name:"",listLoading:!1,columns:e,oldList:[],review_rule:"",list:[],page:{total:1,current:1,size:10},form:{name:"",address:""}}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;M["g"]({reviewType:"biz_manage_rule",menu:"biz",address:sessionStorage.getItem("fbs_address")}).then((function(e){if(e.rows){var a=e.rows[0];t.rule=a.role||"",t.old_rule=a.old_rule||"",t.review_rule=a.review_id}else t.rule=!1})),this.listLoading=!0,M["g"]({menu:"biz",reviewType:"biz_manage",address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},adds:function(t){this.$Modal.confirm({title:"已审核人列表",content:"name："+t.name+"<br> address："+t.address+" <br>time："+t.time,oktext:"关闭"})},agree:function(t){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={from:sessionStorage.getItem("fbs_address"),reqId:t.review_id,domainId:sessionStorage.getItem("fbs_biz_id")},a.next=3,R["a"]({method:"BizDomainMemberAgreeContractTxReq",jsBody:JSON.stringify(n)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(t){return e.$Message.error(t.retMsg),!1}));case 3:s=a.sent,s&&e.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:s,setIntervalFunc:function(){return R["b"]({txId:s.txId})},func:"send_trans"},(function(t){return t.then((function(t){return 4===t.status||5===t.status||6===t.status?(e.$Message.error(t.remark),!0):3===t.status&&(e.$Message.success("修改成功"),e.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return a.stop()}}),a)})))()},refuse:function(t){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={from:sessionStorage.getItem("fbs_address"),reqId:t.review_id,domainId:sessionStorage.getItem("fbs_biz_id")},a.next=3,R["a"]({method:"BizDomainRuleAgreeContractTxReq",jsBody:JSON.stringify(n)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(t){return e.$Message.error(t.retMsg),!1}));case 3:s=a.sent,s&&e.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:s,setIntervalFunc:function(){return R["b"]({txId:s.txId})},func:"send_trans"},(function(t){return t.then((function(t){return 4===t.status||5===t.status||6===t.status?(e.$Message.error(t.remark),!0):3===t.status&&(e.$Message.success("修改成功"),e.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return a.stop()}}),a)})))()},agreeRule:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={from:sessionStorage.getItem("fbs_address"),reqId:t.review_rule,domainId:sessionStorage.getItem("fbs_biz_id")},e.next=3,R["a"]({method:"BizDomainRuleAgreeContractTxReq",jsBody:JSON.stringify(a)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(e){return t.$Message.error(e.retMsg),!1}));case 3:n=e.sent,n&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:n,setIntervalFunc:function(){return R["b"]({txId:n.txId})},func:"send_trans"},(function(e){return e.then((function(e){return 4===e.status||5===e.status||6===e.status?(t.$Message.error(e.remark),!0):3===e.status&&(t.$Message.success("修改成功"),t.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return e.stop()}}),e)})))()},refuseRule:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={from:sessionStorage.getItem("fbs_address"),reqId:t.review_rule,domainId:sessionStorage.getItem("fbs_biz_id")},e.next=3,R["a"]({method:"BizDomainRuleAgreeContractTxReq",jsBody:JSON.stringify(a)}).then((function(t){return{hexTxBody:t.hexTxBody,txId:t.txId}})).catch((function(e){return t.$Message.error(e.retMsg),!1}));case 3:n=e.sent,n&&t.$qrCodeAuthDialog.show({url:"bs/pbdtx.do",data:n,setIntervalFunc:function(){return R["b"]({txId:n.txId})},func:"send_trans"},(function(e){return e.then((function(e){return 4===e.status||5===e.status||6===e.status?(t.$Message.error(e.remark),!0):3===e.status&&(t.$Message.success("修改成功"),t.addModal=!1,!0)})).catch((function(){return!1}))}));case 5:case"end":return e.stop()}}),e)})))()},ok:function(){},cancel:function(){},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},B=P,q=(a("1328"),Object(d["a"])(B,T,E,!1,null,"850f9efe",null)),D=q.exports,O={components:{permission:l,rule:h,file:y,contract:L,manager:D},data:function(){return{tabs:{"business-permission":{name:"文件操作规则",num:0,nodeName:"rule",review_type:"biz_file"},"business-contract":{name:"域内合约治理",num:0,nodeName:"contract",review_type:"biz_contract"},"business-manager":{name:"域管理员",num:0,nodeName:"manager",review_type:"biz_manage"}},active:"business-manager"}},watch:{},mounted:function(){},methods:{changeTab:function(t){console.log(t),this.active=t}}},A=O,Y=(a("d236"),Object(d["a"])(A,n,s,!1,null,"53e58e3c",null));e["default"]=Y.exports},f5f3:function(t,e,a){},f96b:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));var n=a("db04"),s=function(t,e){return n["a"].post("cmw/pbrus.do",t,e)},i=function(t,e){return n["a"].post("bs/pbgen.do",t,e)},r=function(t,e){return n["a"].post("bs/pbgts.do",t,e)}},fb6a:function(t,e,a){"use strict";var n=a("23e7"),s=a("861d"),i=a("e8b5"),r=a("23cb"),o=a("50c4"),c=a("fc6a"),d=a("8418"),u=a("b622"),l=a("1dde"),f=a("ae40"),m=l("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var a,n,u,l=c(this),f=o(l.length),m=r(t,f),p=r(void 0===e?f:e,f);if(i(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?s(a)&&(a=a[v],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(l,m,p);for(n=new(void 0===a?Array:a)(h(p-m,0)),u=0;m<p;m++,u++)m in l&&d(n,u,l[m]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-67e40029.3409aa43.js.map