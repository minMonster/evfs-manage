(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ba59f7a"],{5138:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return c}));var a=e("db04"),i=function(t,n){return a["a"].post("cmw/pbqct.do",t,n)},o=function(t,n){return a["a"].post("cmw/pbqgi.do",t,n)},s=function(t,n){return a["a"].post("cmw/pbqml.do",t,n)},c=function(t,n){return a["a"].post("cmw/pbqan.do",t,n)}},af26:function(t,n,e){"use strict";var a=e("dfe2"),i=e.n(a);i.a},dfe2:function(t,n,e){},f5e5:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"node-admission"},[e("chain-header",{attrs:{title:"节点准入许可管理",btn:!0}}),e("div",{staticClass:"padding bg-white"},[e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[e("span",{staticStyle:{color:"#273D52","font-weight":"600"}},[t._v("准入节点服务器列表")]),e("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.confirmAdd}},[t._v("添加")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),e("Row",[e("Col",{attrs:{span:"5"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("隶属企业名称：")]),e("Input",{attrs:{type:"text",placeholder:"隶属企业名称"},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("服务器身份标识：")]),e("Input",{attrs:{type:"text",placeholder:"节点服务器身份标识"},model:{value:t.form.address,callback:function(n){t.$set(t.form,"address",n)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns,data:t.list}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},i=[],o=e("5138"),s={data:function(){var t=this,n=[{title:"隶属企业名称",key:"main_company_company_name"},{title:"服务器身份标识",key:"node_server_id"},{title:"节点类型",key:"node_type"},{title:"数据存管域名称",key:"databasename"},{title:"添加时间",key:"join_time"},{title:"状态",key:"online_status"},{title:"操作",render:function(n,e){var a=e.row||{};return n("a",{on:{click:function(){t.del(a)}}},"删除")}}];return{name:"",address:"",addModal:!1,columns:n,oldList:[],list:[],page:{total:0,current:1,size:10},form:{name:"",address:""}}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;o["a"]({storage_id:sessionStorage.getItem("fbs_storageId")}).then((function(n){console.log(n),t.list=n.rows}))},del:function(){},confirmAdd:function(){this.$router.push("/chain-nodeManage")},ok:function(){},cancel:function(){},search:function(){},pageChange:function(t){}}},c=s,r=(e("af26"),e("2877")),l=Object(r["a"])(c,a,i,!1,null,"71d49526",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2ba59f7a.317c806f.js.map