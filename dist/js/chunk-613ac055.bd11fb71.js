(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613ac055"],{"26c1":function(t,e,a){"use strict";var i=a("3603"),n=a.n(i);n.a},3603:function(t,e,a){},"4d6e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-storage"},[a("chain-header",{attrs:{title:"数据存管域管理"}}),a("div",{staticClass:"bg-white padding"},[a("div",{staticClass:"section-title clear"},[a("span",[t._v("数据存管域列表")]),a("div",{staticClass:"fr float-right",staticStyle:{"margin-top":"-5px"}},[a("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("连接现有域")])],1)]),a("div",[a("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)]),a("Modal",{attrs:{title:"连接数据存管域"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("div",{staticClass:"add-modal-body"},[a("div",[a("p",{staticStyle:{"margin-bottom":"15px"}},[t._v("数据存管域唯一标识：")]),a("Input",{attrs:{placeholder:"请输入委员名称"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("连接")]),a("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},n=[],s=(a("fb6a"),a("b0c0"),a("5530")),o=a("9aa7"),r={data:function(){var t=this,e=[{title:"数据存管域名称",key:"storage_name",width:140},{title:"数据存管域唯一标识",key:"storage_id"},{title:"创建时间",key:"join_time"},{title:"最大许可存储容量",key:"capacity_license"},{title:"操作",render:function(e,a){var i=a.row||{},n=i.type,o=e("a",{on:{click:function(){}}},"断开连接"),r=e("a",{on:{click:function(){var e=t.$route.query.showBusinessSubmenu;sessionStorage.setItem("fbs_storage_id",i.storage_id);var a=Object(s["a"])(Object(s["a"])({},i),{},{storage_id_format:t.formatId(i.storage_id),create_org_address_format:t.formatId(i.create_org_address),join_time_format:i.join_time?t.$moment.unix(i.join_time/1e3).format("YYYY-MM-DD HH:mm:ss"):"--"});sessionStorage.setItem("fbs_storage",JSON.stringify(a)),t.$router.push({path:"data-detail",query:{showDataSubmenu:"1",showBusinessSubmenu:e,mainActive:"data",activeIndex:"1",subActive:"data-detail"}})}}},"详情"),c=e("a",{on:{click:function(){}}},"删除"),d=[o,r];switch(n){case"1":d.push(r);break;case"2":d.push(r),d.push(c);break;default:break}return e("div",{class:"opt-btns"},d)}}];return{listLoading:!1,columns:e,oldList:[],list:[],page:{total:1,current:1,size:10},addLoading:!1,addModal:!1,name:"",address:""}},mounted:function(){this.init()},methods:{formatId:function(t){if(!t)return"--";var e=t.length,a=t.substring(0,6),i=t.substring(e-6,e);return a+"....."+i},init:function(){var t=this;this.listLoading=!0,o["g"]({address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},destoryed:function(){this.closeTimer()},closeTimer:function(){this.timer&&clearInterval(this.timer)},confirmAdd:function(){},ok:function(){},cancel:function(){this.name="",this.address="",this.addModal=!1,this.addLoading=!1},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},c=r,d=(a("26c1"),a("2877")),u=Object(d["a"])(c,i,n,!1,null,"3b602595",null);e["default"]=u.exports},"9aa7":function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"f",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"b",(function(){return u}));var i=a("db04"),n=function(t,e){return i["a"].post("cmw/pbqss.do",t,e)},s=function(t,e){return i["a"].post("cmw/pbqsb.do",t,e)},o=function(t,e){return i["a"].post("cmw/pbqml.do",t,e)},r=function(t,e){return i["a"].post("cmw/pbqrm.do",t,e)},c=function(t,e){return i["a"].post("cmw/pbqan.do",t,e)},d=function(t,e){return i["a"].post("cmw/pbqrc.do",t,e)},u=function(t,e){return i["a"].post("cmw/pbqci.do",t,e)}},fb6a:function(t,e,a){"use strict";var i=a("23e7"),n=a("861d"),s=a("e8b5"),o=a("23cb"),r=a("50c4"),c=a("fc6a"),d=a("8418"),u=a("b622"),l=a("1dde"),f=a("ae40"),g=l("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),m=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!g||!p},{slice:function(t,e){var a,i,u,l=c(this),f=r(l.length),g=o(t,f),p=o(void 0===e?f:e,f);if(s(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(l,g,p);for(i=new(void 0===a?Array:a)(b(p-g,0)),u=0;g<p;g++,u++)g in l&&d(i,u,l[g]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-613ac055.bd11fb71.js.map