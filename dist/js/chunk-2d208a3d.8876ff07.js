(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208a3d"],{a63e:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"business-detail"},[s("business-header",{attrs:{title:"业务域内文件治理",btn:!0}}),s("div",{staticClass:"bg-white padding"},[s("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._m(0),s("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:""}},[s("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),s("Row",[s("Col",{attrs:{span:"5"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("文件名称：")]),s("Input",{attrs:{type:"text",placeholder:"文件名称"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)]),s("Col",{attrs:{span:"7"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("文件链上唯一标识：")]),s("Input",{attrs:{type:"text",placeholder:"文件链上唯一标识："},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1)]),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"condition-item"},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),s("div",[s("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1),s("div",{staticClass:"bg-white padding clear",staticStyle:{"margin-top":"20px"}},[s("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._m(1),s("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:""}},[s("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),s("Row",[s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("数据链上唯一标识：")]),s("Input",{attrs:{type:"text",placeholder:"数据链上唯一标识："}})],1)]),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"condition-item"},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"}},[t._v("查询")])],1)])],1),s("div",[s("Table",{attrs:{columns:t.columns2,data:t.data2}})],1),s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("b",[t._v("文件监管")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("b",[t._v("结构数据监管")])])}],n={data:function(){var t=[{title:"文件名称",key:"name"},{title:"文件链上唯一标识",key:"id"},{title:"状态",key:"statuslabel"},{title:"操作",render:function(t,a){var s=a.row||{},e="--",i=s.status;return"1"===i&&(e="冻结"),"2"===i&&(e="解冻"),i>2&&(e="撤销"),t("a",{on:{click:function(){}}},e)}}],a=[{name:"测试.doc",id:"00fb0a...ef34a",statuslabel:"正常",status:"1"},{name:"照片.jpg",id:"00fb0a...eda4e",statuslabel:"冻结",status:"2"},{name:"视频.MP4",id:"00fb0a...eac4f",statuslabel:"解冻审核中",status:"4"},{name:"音频.MP3",id:"00fb0a...a43fe",statuslabel:"冻结审核中",status:"3"}],s=[{title:"数据链上唯一标识",key:"id"},{title:"状态",key:"statuslabel"},{title:"操作",render:function(t,a){var s=a.row||{},e="--",i=s.status;return"1"===i&&(e="冻结"),"2"===i&&(e="解冻"),i>2&&(e="撤销"),t("a",{on:{click:function(){}}},e)}}],e=[{id:"00fb0a...ef34a",statuslabel:"正常",status:"1"},{id:"00fb0a...eda4e",statuslabel:"冻结",status:"2"},{id:"00fb0a...eac4f",statuslabel:"解冻审核中",status:"4"},{id:"00fb0a...a43fe",statuslabel:"冻结审核中",status:"3"}];return{switch1:"0",switch2:"0",switch3:"0",total:90,columns1:t,data1:a,columns2:s,data2:e,form:{name:"",address:""}}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){},search:function(){},pageChange:function(t){}}},l=n,o=s("2877"),c=Object(o["a"])(l,e,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d208a3d.8876ff07.js.map