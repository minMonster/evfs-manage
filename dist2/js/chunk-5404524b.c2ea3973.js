(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5404524b"],{1127:function(t,a,e){"use strict";var n=e("dc01"),i=e.n(n);i.a},"466d":function(t,a,e){"use strict";var n=e("d784"),i=e("825a"),r=e("50c4"),o=e("1d80"),s=e("8aa5"),c=e("14c3");n("match",1,(function(t,a,e){return[function(a){var e=o(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,e):new RegExp(a)[t](String(e))},function(t){var n=e(a,t,this);if(n.done)return n.value;var o=i(t),d=String(this);if(!o.global)return c(o,d);var l=o.unicode;o.lastIndex=0;var u,f=[],h=0;while(null!==(u=c(o,d))){var m=String(u[0]);f[h]=m,""===m&&(o.lastIndex=s(d,r(o.lastIndex),l)),h++}return 0===h?null:f}]}))},"498a":function(t,a,e){"use strict";var n=e("23e7"),i=e("58a8").trim,r=e("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},"4d6e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-storage"},[e("chain-header",{attrs:{title:"数据存管域管理"}}),e("div",{staticClass:"bg-white padding"},[e("div",{staticClass:"section-title clear"},[e("span",[t._v("数据存管域列表")]),e("div",{staticClass:"fr float-right",staticStyle:{"margin-top":"-5px"}},[e("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"primary"},on:{click:function(a){t.addModal=!0}}},[t._v("连接现有域")])],1)]),e("div",[e("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)]),e("Modal",{attrs:{title:"连接数据存管域"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(a){t.addModal=a},expression:"addModal"}},[e("div",{staticClass:"add-modal-body"},[e("div",[e("p",{staticStyle:{"margin-bottom":"15px"}},[t._v("数据存管域唯一标识：")]),e("Input",{attrs:{placeholder:"请输入委员名称"},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}})],1)]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("连接")]),e("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},i=[],r=(e("b0c0"),e("ac1f"),e("466d"),e("498a"),{data:function(){var t=this,a=[{title:"数据存管域名称",key:"name",width:140},{title:"数据存管域唯一标识",key:"id"},{title:"创建时间",key:"time"},{title:"最大许可存储容量",key:"maxstorage"},{title:"状态",key:"status",width:120},{title:"操作",render:function(a,e){var n=e.row||{},i=n.type,r=a("a",{on:{click:function(){}}},"断开连接"),o=a("a",{on:{click:function(){var a=t.$route.query.showBusinessSubmenu;t.$router.push({path:"data/detail",query:{showDataSubmenu:"1",showBusinessSubmenu:a,mainActive:"data",activeIndex:"1",subActive:"data-detail"}})}}},"详情"),s=a("a",{on:{click:function(){}}},"删除"),c=[r];switch(i){case"1":c.push(o);break;case"2":c.push(o),c.push(s);break;default:break}return a("div",{class:"opt-btns"},c)}}],e=[{name:"泛融存管域",id:"00740f...bdca2",time:"2020-1-5 15:34:57",maxstorage:"5.0TB",status:"删除审核中",type:"0"},{name:"从法存管域",id:"00740f...facb7",time:"2020-1-5 10:21:32",maxstorage:"5.0TB",status:"运行",type:"1"},{name:"金融共享域",id:"00740f...ccbb3",time:"2020-1-5 12:34:04",maxstorage:"5.0TB",status:"停运",type:"2"}];return{columns1:a,data1:e,total:103,addLoading:!1,addModal:!1,name:"",address:""}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},destoryed:function(){this.closeTimer()},closeTimer:function(){this.timer&&clearInterval(this.timer)},confirmAdd:function(){},ok:function(){var t=this;this.timer=setInterval((function(){var a=document.getElementById("signResult"),e=a.value;e&&!e.match(/^(doing)|(fail)|(refuse)$/)&&(t.closeTimer(),console.log(e),t._add()),"fail"===e&&(console.log("签名失败"),t.closeTimer()),"refuse"===e&&(console.log("拒绝签名"),t.closeTimer())}),100);var a=this.name.trim();this.addLoading=!0;var e={name:a};this.$http.post("",e).then((function(t){t=t.data})).catch((function(){})).then((function(a){t.cancel()}))},cancel:function(){this.name="",this.address="",this.addModal=!1,this.addLoading=!1},pageChange:function(t){}}}),o=r,s=(e("1127"),e("2877")),c=Object(s["a"])(o,n,i,!1,null,"974a92d4",null);a["default"]=c.exports},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,e){var n=e("1d80"),i=e("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(a){var e=String(n(a));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},6547:function(t,a,e){var n=e("a691"),i=e("1d80"),r=function(t){return function(a,e){var r,o,s=String(i(a)),c=n(e),d=s.length;return c<0||c>=d?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===d||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):r:t?s.slice(c,c+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(t,a,e){"use strict";var n=e("6547").charAt;t.exports=function(t,a,e){return a+(e?n(t,a).length:1)}},c8d2:function(t,a,e){var n=e("d039"),i=e("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||r[t]()!=r||i[t].name!==t}))}},dc01:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5404524b.c2ea3973.js.map