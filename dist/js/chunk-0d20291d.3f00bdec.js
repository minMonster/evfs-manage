(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d20291d"],{"024d":function(t,n,e){},"15b8":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"node-admission"},[e("chain-header",{attrs:{title:"数据存管域授权管理",btn:!0}}),e("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[e("span",{staticStyle:{color:"#273D52","font-weight":"600"}},[t._v("数据存管域列表")]),e("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.addSee}},[t._v("添加")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),e("Row",[e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("数据存管域名称：")]),e("Input",{attrs:{type:"text",placeholder:"数据存管域名称"},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("数据存管域唯一标识：")]),e("Input",{attrs:{type:"text",placeholder:"数据存管域唯一标识"},model:{value:t.form.address,callback:function(n){t.$set(t.form,"address",n)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)])],1)],1)},o=[],r=(e("fb6a"),e("5530")),a=e("5138"),s={data:function(){var t=this,n=[{title:"数据存管域名称",key:"storage_name"},{title:"数据存管域唯一标识",key:"storage_id"},{title:"创建时间",key:"join_time",render:function(n,e){var i=e.row;return i.join_time?n("span",t.$moment.unix(i.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):n("span","--")}},{title:"操作",render:function(n,e){var i=e.row||{},o=n("a",{on:{click:function(){var n=Object(r["a"])(Object(r["a"])({},i),{},{storage_id_format:t.formatId(i.storage_id),create_org_address_format:t.formatId(i.create_org_address),join_time_format:i.join_time?t.$moment.unix(i.join_time/1e3).format("YYYY-MM-DD HH:mm:ss"):"--"});sessionStorage.setItem("fbs_storage",JSON.stringify(n)),sessionStorage.setItem("fbs_storage_id",i.storage_id),t.$router.push({name:"data-detail",query:{storage_id:i.storage_id}})}}},"详情"),a=[o];return n("div",{},a)}}];return{form:{name:"",address:"",status:""},listLoading:!1,columns:n,oldList:[],list:[],page:{total:1,current:1,size:10}}},mounted:function(){this.init()},watch:{},computed:{},methods:{formatId:function(t){if(!t)return"--";var n=t.length,e=t.substring(0,6),i=t.substring(n-6,n);return e+"....."+i},init:function(){var t=this;a["m"]().then((function(n){t.listLoading=!1,t.oldList=n.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(n){t.listLoading=!1,t.$Message.error(n.retMsg)}))},ok:function(){},cancel:function(){},search:function(){},addSee:function(){this.$router.push("/chain-chdetial")},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},c=s,u=(e("40bd"),e("2877")),d=Object(u["a"])(c,i,o,!1,null,"8cea0c50",null);n["default"]=d.exports},"40bd":function(t,n,e){"use strict";var i=e("024d"),o=e.n(i);o.a},5138:function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"f",(function(){return r})),e.d(n,"h",(function(){return a})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return c})),e.d(n,"e",(function(){return u})),e.d(n,"g",(function(){return d})),e.d(n,"i",(function(){return l})),e.d(n,"m",(function(){return f})),e.d(n,"l",(function(){return p})),e.d(n,"k",(function(){return m})),e.d(n,"j",(function(){return g})),e.d(n,"b",(function(){return h}));var i=e("db04"),o=function(t,n){return i["a"].post("cmw/pbqct.do",t,n)},r=function(t,n){return i["a"].post("cmw/pbqgi.do",t,n)},a=function(t,n){return i["a"].post("cmw/pbqml.do",t,n)},s=function(t,n){return i["a"].post("cmw/pbqan.do",t,n)},c=function(t,n){return i["a"].post("cmw/pbqcn.do",t,n)},u=function(t,n){return i["a"].post("cmw/pbqfc.do",t,n)},d=function(t,n){return i["a"].post("cmw/pbqll.do",t,n)},l=function(t,n){return i["a"].post("cmw/pbqmn.do",t,n)},f=function(t,n){return i["a"].post("cmw/pbqsl.do",t,n)},p=function(t,n){return i["a"].post("cmw/pbqsd.do",t,n)},m=function(t,n){return i["a"].post("cmw/pbqrm.do",t,n)},g=function(t,n){return i["a"].post("cmw/pbqrc.do",t,n)},h=function(t,n){return i["a"].post("cmw/pbqci.do",t,n)}},fb6a:function(t,n,e){"use strict";var i=e("23e7"),o=e("861d"),r=e("e8b5"),a=e("23cb"),s=e("50c4"),c=e("fc6a"),u=e("8418"),d=e("b622"),l=e("1dde"),f=e("ae40"),p=l("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),h=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,n){var e,i,d,l=c(this),f=s(l.length),p=a(t,f),m=a(void 0===n?f:n,f);if(r(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?o(e)&&(e=e[g],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return h.call(l,p,m);for(i=new(void 0===e?Array:e)(b(m-p,0)),d=0;p<m;p++,d++)p in l&&u(i,d,l[p]);return i.length=d,i}})}}]);
//# sourceMappingURL=chunk-0d20291d.3f00bdec.js.map