(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-405f3b10"],{"500a":function(t,n,a){},5138:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"d",(function(){return s})),a.d(n,"a",(function(){return c}));var e=a("db04"),i=function(t,n){return e["a"].post("cmw/pbqct.do",t,n)},o=function(t,n){return e["a"].post("cmw/pbqgi.do",t,n)},s=function(t,n){return e["a"].post("cmw/pbqml.do",t,n)},c=function(t,n){return e["a"].post("cmw/pbbqan.do",t,n)}},ab2a:function(t,n,a){"use strict";var e=a("500a"),i=a.n(e);i.a},f5e5:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"node-admission"},[a("chain-header",{attrs:{title:"节点准入许可管理",btn:!0}}),a("div",{staticClass:"padding bg-white"},[a("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[a("span",{staticStyle:{color:"#273D52","font-weight":"600"}},[t._v("准入节点服务器列表")]),a("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.confirmAdd}},[t._v("添加")]),a("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“节点网络准入审批”选择“开启”时，准入节点服务器列表中的节点服务器才可以加入链的节点网络。"}},[a("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),a("Row",[a("Col",{attrs:{span:"5"}},[a("div",{staticClass:"condition-item"},[a("span",{staticClass:"condition-label"},[t._v("隶属企业名称：")]),a("Input",{attrs:{type:"text",placeholder:"隶属企业名称"},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1)]),a("Col",{attrs:{span:"7"}},[a("div",{staticClass:"condition-item"},[a("span",{staticClass:"condition-label"},[t._v("服务器身份标识：")]),a("Input",{attrs:{type:"text",placeholder:"节点服务器身份标识"},model:{value:t.form.address,callback:function(n){t.$set(t.form,"address",n)},expression:"form.address"}})],1)]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"condition-item"},[a("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),a("div",[a("Table",{attrs:{columns:t.columns,data:t.list}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},i=[],o=a("5138"),s={data:function(){var t=this,n=[{title:"隶属企业名称",key:"main_company_company_name"},{title:"服务器身份标识",key:"node_server_id"},{title:"节点类型",key:"node_type"},{title:"数据存管域名称",key:"databasename"},{title:"添加时间",key:"join_time"},{title:"状态",key:"online_status"},{title:"操作",render:function(n,a){var e=a.row||{};return n("a",{on:{click:function(){t.del(e)}}},"删除")}}];return{name:"",address:"",addModal:!1,columns:n,oldList:[],list:[],page:{total:0,current:1,size:10},form:{name:"",address:""}}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;o["a"]({storage_id:sessionStorage.getItem("fbs_storageId")}).then((function(n){console.log(n),t.list=n.rows}))},del:function(){},confirmAdd:function(){this.$router.push("/chain-nodeManage")},ok:function(){},cancel:function(){},search:function(){},pageChange:function(t){}}},c=s,r=(a("ab2a"),a("2877")),l=Object(r["a"])(c,e,i,!1,null,"afca5650",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-405f3b10.838eed5d.js.map