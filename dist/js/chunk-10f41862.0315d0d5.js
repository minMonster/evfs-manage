(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f41862"],{4890:function(t,i,s){},5138:function(t,i,s){"use strict";s.d(i,"d",(function(){return n})),s.d(i,"f",(function(){return e})),s.d(i,"h",(function(){return o})),s.d(i,"a",(function(){return c})),s.d(i,"c",(function(){return r})),s.d(i,"e",(function(){return l})),s.d(i,"g",(function(){return d})),s.d(i,"i",(function(){return p})),s.d(i,"m",(function(){return u})),s.d(i,"l",(function(){return g})),s.d(i,"k",(function(){return v})),s.d(i,"j",(function(){return h})),s.d(i,"b",(function(){return f}));var a=s("db04"),n=function(t,i){return a["a"].post("cmw/pbqct.do",t,i)},e=function(t,i){return a["a"].post("cmw/pbqgi.do",t,i)},o=function(t,i){return a["a"].post("cmw/pbqml.do",t,i)},c=function(t,i){return a["a"].post("cmw/pbqan.do",t,i)},r=function(t,i){return a["a"].post("cmw/pbqcn.do",t,i)},l=function(t,i){return a["a"].post("cmw/pbqfc.do",t,i)},d=function(t,i){return a["a"].post("cmw/pbqll.do",t,i)},p=function(t,i){return a["a"].post("cmw/pbqmn.do",t,i)},u=function(t,i){return a["a"].post("cmw/pbqsl.do",t,i)},g=function(t,i){return a["a"].post("cmw/pbqsd.do",t,i)},v=function(t,i){return a["a"].post("cmw/pbqrm.do",t,i)},h=function(t,i){return a["a"].post("cmw/pbqrc.do",t,i)},f=function(t,i){return a["a"].post("cmw/pbqci.do",t,i)}},a325:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"node-admission"},[s("chain-header",{attrs:{title:"链运行许可证管理",btn:!0}}),s("div",{staticClass:"bg-white",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"chain-content"},[s("div",{staticClass:"sub-content-title"},[t._v("链内存储容量许可信息")]),s("div",{staticClass:"chain-content-item"},[s("Row",[s("Col",{attrs:{span:"8"}},[s("p",[t._v("100")]),s("div",[t._v("存储许可总容量")])]),s("Col",{attrs:{span:"8"}},[s("p",[t._v("50")]),s("div",[t._v("已发放存储许可容量")])]),s("Col",{attrs:{span:"8"}},[s("p",[t._v("50")]),s("div",[t._v("未发存储许可数量")])])],1)],1)])]),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"clear",staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._v(" 链内存储容量许可证分布信息： ")]),s("div",[s("Row",[s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("数据存管域名称：")]),s("Input",{attrs:{type:"text",placeholder:"数据存管域名称"},model:{value:t.form.name,callback:function(i){t.$set(t.form,"name",i)},expression:"form.name"}})],1)]),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("数据存管域唯一标识：")]),s("Input",{attrs:{type:"text",placeholder:"数据存管域唯一标识"},model:{value:t.form.address,callback:function(i){t.$set(t.form,"address",i)},expression:"form.address"}})],1)]),s("Col",{attrs:{span:"4"}},[s("div",{staticClass:"condition-item"},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1)],1),s("div",[s("Table",{attrs:{columns:t.columns1,loading:t.listLoading1,data:t.list1}})],1),s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("Page",{attrs:{"show-sizer":"",total:t.page1.total,current:t.page1.current},on:{"on-change":t.pageChange1,"on-page-size-change":t.sizeChange1}})],1)])]),s("div",{staticClass:"bg-white",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"chain-content"},[s("div",{staticClass:"sub-content-title"},[t._v("链内节点运行许可信息")]),s("div",{staticClass:"chain-content-item"},[s("Row",[s("Col",{attrs:{span:"8"}},[s("p",[t._v("100")]),s("div",[t._v("节点运行许可总容量")])]),s("Col",{attrs:{span:"8"}},[s("p",[t._v("50")]),s("div",[t._v("已发放节点许可数量")])]),s("Col",{attrs:{span:"8"}},[s("p",[t._v("50")]),s("div",[t._v("未发放节点存储许可数量")])])],1)],1)])]),s("div",{staticClass:"padding bg-white clear",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"clear",staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._v(" 链内运行许可证分布信息: ")]),s("div",[s("Row",[s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("数据存管域名称：")]),s("Input",{attrs:{type:"text",placeholder:"数据存管域名称"}})],1)]),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("span",{staticClass:"condition-label"},[t._v("数据存管域唯一标识：")]),s("Input",{attrs:{type:"text",placeholder:"数据存管域唯一标识"}})],1)]),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"condition-item"},[s("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"}},[t._v("查询")])],1)])],1),s("div",[s("Table",{attrs:{columns:t.columns2,loading:t.listLoading2,data:t.list2}})],1),s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("Page",{attrs:{"show-sizer":"",total:t.page2.total,current:t.page2.current},on:{"on-change":t.pageChange2,"on-page-size-change":t.sizeChange2}})],1)])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[s("div",{attrs:{id:"qrcode"}}),s("div",{staticClass:"over"})]),s("div",{staticClass:"padding bg-white"},[s("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52","font-weight":"600"}},[t._v(" 新增节点运行许可授权证： ")]),s("div",{staticClass:"opt-input"},[s("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入从泛融科技获得的链实例运行许可证"}}),s("div",{staticClass:"tip"},[t._v("*获得泛融公司颁发的商业许可证，此许可决定链实例的节点网络中能够运行节点服务器的最大数量。")])],1),s("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52","font-weight":"600"}},[t._v(" 新增存储容量许可授权证： ")]),s("div",{staticClass:"opt-input"},[s("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入从泛融科技获得的链实例整体最大能够存储文件的总容量的许可证"}}),s("div",{staticClass:"tip"},[t._v("*获得泛融公司颁发的商业许可证，此许可决定链实例可存储文件最大容量。")])],1),s("div",{staticClass:"clear"},[s("div",{staticClass:"fr float-right"},[s("Button",{attrs:{type:"primary"},on:{click:t.expansionBind}},[t._v("扩容绑定")])],1)])])],1)},n=[],e=(s("fb6a"),s("5138")),o={data:function(){var t=[{title:"数据存管域名称",key:"storage_name",width:140},{title:"数据存管域唯一标识",key:"storage_id"},{title:"现有许可存储容量",key:"capacity_license"},{title:"申请新增存储容量",key:"applay_capacity_license"}],i=[{title:"数据存管域名称",key:"storage_name"},{title:"数据存管域唯一标识",key:"storage_id"},{title:"节点许可证",key:"node_operating_licenses"}];return{addModal:!1,listLoading1:!1,listLoading2:!1,columns1:t,columns2:i,oldList1:[],oldList2:[],list1:[],list2:[],page1:{total:1,current:1,size:10},page2:{total:1,current:1,size:10},popups:0,form:{name:"",address:""},switch1:"0",popup:0}},mounted:function(){this.init1(),this.init2()},watch:{},computed:{},methods:{init1:function(){var t=this;e["e"]().then((function(i){t.listLoading1=!1,t.oldList1=i.rows,t.page1.total=t.oldList1.length,t.getList1()})).catch((function(i){t.listLoading=!1,t.$Message.error(i.retMsg)}))},init2:function(){var t=this;e["g"]().then((function(i){t.listLoading2=!1,t.oldList2=i.rows,t.page2.total=t.oldList2.length,t.getList2()})).catch((function(i){t.listLoading=!1,t.$Message.error(i.retMsg)}))},ok:function(){},cancel:function(){},search:function(){},expansionBind:function(){this.$Message.warning("待确认需求"),console.log(111),this.popup=1},getList1:function(){this.list1=this.oldList1.slice((this.page1.current-1)*this.page1.size,this.page1.size*this.page1.current)},sizeChange1:function(t){this.page1.current=1,this.page1.size=t,this.getList1()},pageChange1:function(t){this.page1.current=t,this.getList1()},getList2:function(){this.list2=this.oldList2.slice((this.page2.current-2)*this.page2.size,this.page2.size*this.page2.current)},sizeChange2:function(t){this.page2.current=2,this.page2.size=t,this.getList2()},pageChange2:function(t){this.page2.current=t,this.getList2()}}},c=o,r=(s("fa54"),s("2877")),l=Object(r["a"])(c,a,n,!1,null,"0b5edbca",null);i["default"]=l.exports},fa54:function(t,i,s){"use strict";var a=s("4890"),n=s.n(a);n.a},fb6a:function(t,i,s){"use strict";var a=s("23e7"),n=s("861d"),e=s("e8b5"),o=s("23cb"),c=s("50c4"),r=s("fc6a"),l=s("8418"),d=s("b622"),p=s("1dde"),u=s("ae40"),g=p("slice"),v=u("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),f=[].slice,m=Math.max;a({target:"Array",proto:!0,forced:!g||!v},{slice:function(t,i){var s,a,d,p=r(this),u=c(p.length),g=o(t,u),v=o(void 0===i?u:i,u);if(e(p)&&(s=p.constructor,"function"!=typeof s||s!==Array&&!e(s.prototype)?n(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return f.call(p,g,v);for(a=new(void 0===s?Array:s)(m(v-g,0)),d=0;g<v;g++,d++)g in p&&l(a,d,p[g]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-10f41862.0315d0d5.js.map