(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-004a9ad4"],{"1dde":function(t,a,e){var n=e("d039"),o=e("b622"),s=e("2d00"),i=o("species");t.exports=function(t){return s>=51||!n((function(){var a=[],e=a.constructor={};return e[i]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"4d95":function(t,a,e){"use strict";var n=e("ce4f"),o=e.n(n);o.a},"65f0":function(t,a,e){var n=e("861d"),o=e("e8b5"),s=e("b622"),i=s("species");t.exports=function(t,a){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?n(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},"705c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alliance"},[e("chain-header",{attrs:{title:"链管理员管理",btn:!0}}),e("div",[e("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-bottom":"15px",color:"#273D52","font-weight":"600"}},[e("span",[t._v("链管理员决议审批规则：")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"选项说明:所有需要链管理委员审批的事务，通过决议的签批规则。* “任意一个联盟委员签批”：联盟委员会成员列表中的任何一个成员签批同意，相应的决议即可通过。* “1/3联盟委员同时签批”：只有联盟委员会成员列表中的任意1/3个成员签批同意，相应的决议方可通过。* “2/3联盟委员同时签批”：只有联盟委员会成员列表中的任意2/3个成员签批同意，相应的决议方可通过。* “所有联盟委员同时签批”： 只有联盟委员会成员列表中的所有成员签批同意，相应的决议方可通过。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),e("Button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("修改")])],1),e("RadioGroup",{staticClass:"approval",model:{value:t.acceptLimit,callback:function(a){t.acceptLimit=a},expression:"acceptLimit"}},[e("Row",[e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"0"}},[t._v("任意一个联盟委员签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"1/3"}},[t._v("1/3联盟委员同时签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"2/3"}},[t._v("2/3联盟委员同时签批")])],1),e("Col",{attrs:{span:"6"}},[e("Radio",{attrs:{label:"3/3"}},[t._v("所有联盟委员同时签批")])],1)],1)],1)],1),e("div",{staticClass:"bg-white padding"},[e("div",{staticClass:"league-mem"},[e("span",[t._v("链管理员列表")]),e("button",{staticClass:"fr",on:{click:function(a){t.addModal=!0}}},[e("Icon",{attrs:{type:"md-add-circle"}}),t._v("添加")],1)]),e("div",[e("Row",[e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("管理员名称：")]),e("Input",{attrs:{type:"text",placeholder:"管理员名称"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("管理员身份标识：")]),e("Input",{attrs:{type:"text",placeholder:"管理员身份标识"},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("状态：")]),e("Select",{model:{value:t.form.status,callback:function(a){t.$set(t.form,"status",a)},expression:"form.status"}},[e("Option",{attrs:{value:"0"}},[t._v("全部")]),e("Option",{attrs:{value:"1"}},[t._v("已添加")]),e("Option",{attrs:{value:"2"}},[t._v("已删除")]),e("Option",{attrs:{value:"3"}},[t._v("添加审核中")]),e("Option",{attrs:{value:"4"}},[t._v("删除审核中")])],1)],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[t._v("查询")])],1)])],1)],1),e("Table",{attrs:{columns:t.columns1,data:t.data1}}),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1),e("Modal",{attrs:{title:"添加管理"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(a){t.addModal=a},expression:"addModal"}},[e("div",{staticClass:"add-modal-body"},[e("div",[e("Input",{attrs:{placeholder:"请输入管理员名称"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("div",[e("Input",{attrs:{placeholder:"请输入管理员身份标志地址"},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}})],1)])])],1)],1)},o=[],s=(e("a434"),{data:function(){var t=this,a=[{title:"管理员名称",key:"name"},{title:"管理员身份标志地址",key:"address"},{title:"添加时间",key:"time"},{title:"状态",key:"status"},{title:"操作",width:100,render:function(a,e){var n=e.row;console.log(n);var o="2"==n.type?"删除":"撤销";return a("a",{on:{click:function(){var a=e.index;t.data1.splice(a,1)}}},o)}}],e=[{name:"张建国",address:"008b0f...effbc",time:"2020-1-5 09:41:11",status:"添加审核中",type:"1"},{name:"李志伟",address:"008b0f...abbc3",time:"2020-1-5 10:33:02",status:"删除审核中",type:"1"},{name:"张力",address:"008b0f...acfe5",time:"2020-1-5 19:41:11",status:"已添加",type:"2"}];return{acceptLimit:"1/3",name:"",address:"",addModal:!1,columns1:a,data1:e,total:100,form:{name:"",address:""}}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},ok:function(){},cancel:function(){},pageChange:function(t){console.log(t)}}}),i=s,r=(e("4d95"),e("2877")),c=Object(r["a"])(i,n,o,!1,null,"23b65e3c",null);a["default"]=c.exports},8418:function(t,a,e){"use strict";var n=e("c04e"),o=e("9bf2"),s=e("5c6c");t.exports=function(t,a,e){var i=n(a);i in t?o.f(t,i,s(0,e)):t[i]=e}},a434:function(t,a,e){"use strict";var n=e("23e7"),o=e("23cb"),s=e("a691"),i=e("50c4"),r=e("7b0b"),c=e("65f0"),l=e("8418"),d=e("1dde"),u=e("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,a){var e,n,d,u,p,f,C=r(this),y=i(C.length),g=o(t,y),x=arguments.length;if(0===x?e=n=0:1===x?(e=0,n=y-g):(e=x-2,n=m(v(s(a),0),y-g)),y+e-n>b)throw TypeError(h);for(d=c(C,n),u=0;u<n;u++)p=g+u,p in C&&l(d,u,C[p]);if(d.length=n,e<n){for(u=g;u<y-n;u++)p=u+n,f=u+e,p in C?C[f]=C[p]:delete C[f];for(u=y;u>y-n+e;u--)delete C[u-1]}else if(e>n)for(u=y-n;u>g;u--)p=u+n-1,f=u+e-1,p in C?C[f]=C[p]:delete C[f];for(u=0;u<e;u++)C[u+g]=arguments[u+2];return C.length=y-n+e,d}})},ae40:function(t,a,e){var n=e("83ab"),o=e("d039"),s=e("5135"),i=Object.defineProperty,r=function(t){throw t};t.exports=function(t,a){a||(a={});var e=[][t],c=!!s(a,"ACCESSORS")&&a.ACCESSORS,l=s(a,0)?a[0]:r,d=s(a,1)?a[1]:void 0;return!!e&&!o((function(){if(c&&!n)return!0;var t={length:-1},a=function(a){c?i(t,a,{enumerable:!0,get:r}):t[a]=1};a(1),a(2147483646),a(4294967294),e.call(t,l,d)}))}},ce4f:function(t,a,e){},e8b5:function(t,a,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-004a9ad4.1c9931e2.js.map