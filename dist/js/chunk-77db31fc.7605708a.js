(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77db31fc"],{"18be":function(t,a,e){},"1dde":function(t,a,e){var n=e("d039"),i=e("b622"),s=e("2d00"),o=i("species");t.exports=function(t){return s>=51||!n((function(){var a=[],e=a.constructor={};return e[o]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"65f0":function(t,a,e){var n=e("861d"),i=e("e8b5"),s=e("b622"),o=s("species");t.exports=function(t,a){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},8418:function(t,a,e){"use strict";var n=e("c04e"),i=e("9bf2"),s=e("5c6c");t.exports=function(t,a,e){var o=n(a);o in t?i.f(t,o,s(0,e)):t[o]=e}},a434:function(t,a,e){"use strict";var n=e("23e7"),i=e("23cb"),s=e("a691"),o=e("50c4"),r=e("7b0b"),c=e("65f0"),l=e("8418"),d=e("1dde"),u=e("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,a){var e,n,d,u,p,f,y=r(this),g=o(y.length),C=i(t,g),w=arguments.length;if(0===w?e=n=0:1===w?(e=0,n=g-C):(e=w-2,n=m(v(s(a),0),g-C)),g+e-n>b)throw TypeError(h);for(d=c(y,n),u=0;u<n;u++)p=C+u,p in y&&l(d,u,y[p]);if(d.length=n,e<n){for(u=C;u<g-n;u++)p=u+n,f=u+e,p in y?y[f]=y[p]:delete y[f];for(u=g;u>g-n+e;u--)delete y[u-1]}else if(e>n)for(u=g-n;u>C;u--)p=u+n-1,f=u+e-1,p in y?y[f]=y[p]:delete y[f];for(u=0;u<e;u++)y[u+C]=arguments[u+2];return y.length=g-n+e,d}})},a6b5:function(t,a,e){"use strict";var n=e("18be"),i=e.n(n);i.a},ae40:function(t,a,e){var n=e("83ab"),i=e("d039"),s=e("5135"),o=Object.defineProperty,r=function(t){throw t};t.exports=function(t,a){a||(a={});var e=[][t],c=!!s(a,"ACCESSORS")&&a.ACCESSORS,l=s(a,0)?a[0]:r,d=s(a,1)?a[1]:void 0;return!!e&&!i((function(){if(c&&!n)return!0;var t={length:-1},a=function(a){c?o(t,a,{enumerable:!0,get:r}):t[a]=1};a(1),a(2147483646),a(4294967294),e.call(t,l,d)}))}},b029:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"node-admission"},[e("chain-header",{attrs:{title:"前置节点访问许可管理",btn:!0}}),e("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"30px",color:"#373737"}},[e("span",[t._v("前置节点匿名调用访问：")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"选项说明：* 如果允许匿名调用访问，则任何前置节点无需任何授权，均可与链建立访问通道，向链上提交或访问链上数据，除了黑名单中的前置节点；* 如果禁止匿名调用访问，则只有白名单中的前置节点才可与链建立访问通道，向链上提交或访问链上数据。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),e("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.switch1,callback:function(a){t.switch1=a},expression:"switch1"}},[e("Radio",{attrs:{label:"1"}},[t._v("允许")]),e("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),e("Button",{staticStyle:{float:"right","margin-top":"-5px"},attrs:{type:"primary"}},[t._v("修改")])],1),e("div",{staticClass:"bg-white padding"},[e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._m(0),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),e("Row",[e("Col",{attrs:{span:"5"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("隶属企业名称：")]),e("Input",{attrs:{type:"text",placeholder:"隶属企业名称"}})],1)]),e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("前置节点身份标识：")]),e("Input",{attrs:{type:"text",placeholder:"前置节点身份标识"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("状态：")]),e("Select",{attrs:{value:"0"}},[e("Option",{attrs:{value:"0"}},[t._v("全部")]),e("Option",{attrs:{value:"1"}},[t._v("已添加")]),e("Option",{attrs:{value:"2"}},[t._v("已删除")]),e("Option",{attrs:{value:"3"}},[t._v("添加审核中")]),e("Option",{attrs:{value:"4"}},[t._v("删除审核中")])],1)],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("b",[t._v("前置节点调用访问")]),e("b",[t._v("【白名单】")]),t._v("： ")])}],s=(e("a434"),{data:function(){var t=this,a=[{title:"隶属企业名称",key:"name"},{title:"服务器身份标识",key:"address"},{title:"节点类型",key:"nodetype"},{title:"添加时间",key:"time"},{title:"状态",key:"statuslabel"},{title:"操作",render:function(a,e){var n=e.row||{},i="2"==n.status?"删除":"撤销";return a("a",{on:{click:function(){var a=e.index;t.data1.splice(a,1)}}},i)}}],e=[{name:"从法科技",address:"00740f...aaba8",nodetype:"主节点",databasename:"——",time:"2020-1-1 12:00:00",statuslabel:"授权审核中",status:"1"},{name:"从法科技",address:"00da0c...cfbe5",nodetype:"资源节点",databasename:"从法存管域",time:"2020-1-1 12:00:00",statuslabel:"删除审核中",status:"1"},{name:"从法科技",address:"00740f...dadaf",nodetype:"主节点",databasename:"从法存管域",time:"2020-1-1 12:00:00",statuslabel:"已授权",status:"2"}];return{acceptLimit:"1/3",name:"",address:"",addModal:!1,columns1:a,data1:e,total:100,form:{name:"",address:""},switch1:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},ok:function(){},cancel:function(){},pageChange:function(t){console.log(t)}}}),o=s,r=(e("a6b5"),e("2877")),c=Object(r["a"])(o,n,i,!1,null,"4726c951",null);a["default"]=c.exports},e8b5:function(t,a,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-77db31fc.7605708a.js.map