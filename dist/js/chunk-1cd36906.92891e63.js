(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd36906"],{"36ad":function(t,a,e){"use strict";var s=e("dc46"),n=e.n(s);n.a},"7cd8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"node-admission"},[e("business-header",{attrs:{title:"业务系统访问许可管理",btn:!0}}),e("div",{staticClass:"bg-white padding"},[e("div",{staticStyle:{"margin-bottom":"25px",color:"#273D52"}},[t._m(0),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),e("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.confirmAdd}},[t._v("添加")])],1),e("Row",[e("Col",{attrs:{span:"5"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务系统名称：")]),e("Input",{attrs:{type:"text",placeholder:"业务系统名称"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务系统身份标识：")]),e("Input",{attrs:{type:"text",placeholder:"业务系统身份标识"},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("状态：")]),e("Select",{attrs:{value:"0"},model:{value:t.form.status,callback:function(a){t.$set(t.form,"status",a)},expression:"form.status"}},[e("Option",{attrs:{value:"0"}},[t._v("全部")]),e("Option",{attrs:{value:"1"}},[t._v("已添加")]),e("Option",{attrs:{value:"2"}},[t._v("已删除")]),e("Option",{attrs:{value:"3"}},[t._v("添加审核中")]),e("Option",{attrs:{value:"4"}},[t._v("删除审核中")])],1)],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("b",[t._v("业务域调用访问")]),e("b",[t._v("【白名单】")]),t._v("： ")])}],i=(e("a434"),{data:function(){var t=this,a=[{title:"业务系统名称",key:"name"},{title:"业务系统身份标识",key:"address"},{title:"添加时间",key:"time",render:function(a,e){var s=e.row;return s.join_time?a("span",t.$moment.unix(s.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):a("span","--")}},{title:"状态",key:"statuslabel"},{title:"操作",render:function(a,e){var s=e.row||{},n="--",i=s.status;return"2"==i&&(n="删除"),"3"==i&&(n="撤销"),a("a",{on:{click:function(){var a=e.index;t.data1.splice(a,1)}}},n)}}],e=[{name:"上海公证系统",address:"00740f...aaba8",time:"2020-1-5 10:45:25",statuslabel:"已添加",status:"2"},{name:"四川公证系统",address:"00da0c...cfbe5",time:"--",statuslabel:"删除审核中",status:"1"},{name:"四川公证系统",address:"00da0c...cfbe5",time:"--",statuslabel:"添加审核中",status:"1"},{name:"北京公证系统",address:"00740f...dadaf",time:"2020-1-1 12:00:00",statuslabel:"已授权",status:"3"}];return{acceptLimit:"1/3",name:"",address:"",addModal:!1,columns1:a,data1:e,total:100,form:{name:"",address:"",status:""},switch1:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},confirmAdd:function(){this.$router.push("/business-addpermission")},ok:function(){},search:function(){},cancel:function(){},pageChange:function(t){console.log(t)}}}),o=i,r=(e("36ad"),e("2877")),l=Object(r["a"])(o,s,n,!1,null,"3bff9ff8",null);a["default"]=l.exports},a434:function(t,a,e){"use strict";var s=e("23e7"),n=e("23cb"),i=e("a691"),o=e("50c4"),r=e("7b0b"),l=e("65f0"),c=e("8418"),d=e("1dde"),u=e("ae40"),m=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,a){var e,s,d,u,m,f,_=r(this),g=o(_.length),C=n(t,g),w=arguments.length;if(0===w?e=s=0:1===w?(e=0,s=g-C):(e=w-2,s=v(p(i(a),0),g-C)),g+e-s>h)throw TypeError(b);for(d=l(_,s),u=0;u<s;u++)m=C+u,m in _&&c(d,u,_[m]);if(d.length=s,e<s){for(u=C;u<g-s;u++)m=u+s,f=u+e,m in _?_[f]=_[m]:delete _[f];for(u=g;u>g-s+e;u--)delete _[u-1]}else if(e>s)for(u=g-s;u>C;u--)m=u+s-1,f=u+e-1,m in _?_[f]=_[m]:delete _[f];for(u=0;u<e;u++)_[u+C]=arguments[u+2];return _.length=g-s+e,d}})},dc46:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1cd36906.92891e63.js.map