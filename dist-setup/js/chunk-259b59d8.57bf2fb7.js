(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259b59d8"],{"11ac":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return r}));var n=a("db04"),i=function(t,e){return n["a"].post("cmw/pbqbl.do",t,e)},s=function(t,e){return n["a"].post("cmw/pbqbd.do",t,e)},o=function(t,e){return n["a"].post("cmw/pbqbi.do",t,e)},c=function(t,e){return n["a"].post("cmw/pbqbc.do",t,e)},r=function(t,e){return n["a"].post("cmw/pbqml.do",t,e)}},4547:function(t,e,a){},"4ea2":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"business-detail"},[a("business-header",{attrs:{title:"业务域内合约治理",btn:!0}}),a("div",{staticClass:"bg-white padding"},[a("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[t._m(0),a("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("添加合约")])],1),a("Row",[a("Col",{attrs:{span:"5"}},[a("div",{staticClass:"condition-item"},[a("span",{staticClass:"condition-label"},[t._v("合约名称：")]),a("Input",{attrs:{type:"text",placeholder:"合约名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),a("Col",{attrs:{span:"7"}},[a("div",{staticClass:"condition-item"},[a("span",{staticClass:"condition-label"},[t._v("合约链上唯一标识：")]),a("Input",{attrs:{type:"text",placeholder:"合约链上唯一标识："},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"condition-item"},[a("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),a("div",[a("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}]},[a("div",{attrs:{id:"qrcode"}}),a("div",{staticClass:"over"})]),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)]),a("Modal",{attrs:{title:"合约发布"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("div",{staticClass:"add-modal-body"},[a("span",[t._v("选择编译好的合约文件，申请上链发布！")]),a("div",[a("span",{attrs:{Style:"margin-bottom:10px;"}},[t._v("合约名称：")]),a("Input",{attrs:{placeholder:"请输入合约名称"},model:{value:t.conName,callback:function(e){t.conName=e},expression:"conName"}})],1),a("div",[a("span",{attrs:{Style:"margin-bottom:10px;"}},[t._v("备注：")]),t._v(" "),a("i-input",{attrs:{type:"textarea",placeholder:"请输入..."},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1),a("div",[a("span",{attrs:{Style:"margin-bottom:10px;"}},[t._v("合约内容")]),a("i-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入..."},model:{value:t.conCent,callback:function(e){t.conCent=e},expression:"conCent"}})],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("申请发布")]),a("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("b",[t._v("合约列表")])])}],o=(a("fb6a"),a("ade3")),c=a("d044"),r=a.n(c),l=a("11ac"),d={data:function(){var t=[{title:"合约名称",key:"contract_name"},{title:"合约链上唯一标识",key:"contract_id"},{title:"加入时间",key:"join_time"},{title:"所属业务域id",key:"main_biz_biz_id"},{title:"状态",key:"status"},{title:"操作",render:function(t,e){var a=e.row||{},n="--",i=a.status;return"1"===i&&(n="冻结"),"2"===i&&(n="解冻"),i>2&&(n="撤销"),t("a",{on:{click:function(){}}},n)}}];return{switch1:"0",switch2:"0",switch3:"0",listLoading:!1,columns:t,oldList:[],list:[],page:{total:1,current:1,size:10},addModal:!1,conName:"",remarks:"",conCent:"",addLoading:!1,form:{name:"",address:""},popup:0}},watch:{},computed:{},mounted:function(){this.init(),this.creatQrCode()},methods:(n={init:function(){var t=this;this.listLoading=!0,l["a"]({address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()},ok:function(){this.popup=1,this.add()},add:function(){this.cancel()},search:function(){},cancel:function(){this.conName="",this.remarks="",this.conCent="",this.addModal=!1,this.addLoading=!1}},Object(o["a"])(n,"pageChange",(function(t){})),Object(o["a"])(n,"creatQrCode",(function(){var t={},e=new r.a("qrcode",{text:JSON.stringify(t),width:260,height:260,colorDark:"#000000",colorLight:"#ffffff",correctLevel:3});console.log(e)})),n)},u=d,p=(a("fdc7"),a("2877")),f=Object(p["a"])(u,i,s,!1,null,"e9832cf6",null);e["default"]=f.exports},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),s=a("e8b5"),o=a("23cb"),c=a("50c4"),r=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),p=a("ae40"),f=u("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),g=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!f||!h},{slice:function(t,e){var a,n,d,u=r(this),p=c(u.length),f=o(t,p),h=o(void 0===e?p:e,p);if(s(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?i(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(u,f,h);for(n=new(void 0===a?Array:a)(v(h-f,0)),d=0;f<h;f++,d++)f in u&&l(n,d,u[f]);return n.length=d,n}})},fdc7:function(t,e,a){"use strict";var n=a("4547"),i=a.n(n);i.a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9jb250cmFjdC52dWU/M2YxMiIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2NvbnRyYWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvY29udHJhY3QudnVlP2FhMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2NvbnRyYWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9jb250cmFjdC52dWU/ZDkxZSJdLCJuYW1lcyI6WyJwYnFibCIsInBhcmFtcyIsIm9wdHMiLCJyZXF1ZXN0IiwicG9zdCIsInBicWJkIiwicGJxYmkiLCJwYnFiYyIsInBicW1sIiwicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsInN0YXRpY1N0eWxlIiwiX20iLCJvbiIsIiRldmVudCIsImFkZE1vZGFsIiwiX3YiLCJtb2RlbCIsInZhbHVlIiwiZm9ybSIsImNhbGxiYWNrIiwiJCR2IiwiJHNldCIsImV4cHJlc3Npb24iLCJzZWFyY2giLCJjb2x1bW5zIiwibGlzdExvYWRpbmciLCJsaXN0IiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwicGFnZSIsInRvdGFsIiwiY3VycmVudCIsInBhZ2VDaGFuZ2UiLCJzaXplQ2hhbmdlIiwib2siLCJjYW5jZWwiLCJjb25OYW1lIiwicmVtYXJrcyIsImNvbkNlbnQiLCJzbG90IiwiYWRkTG9hZGluZyIsInN0YXRpY1JlbmRlckZucyIsImRhdGEiLCJzd2l0Y2gxIiwic3dpdGNoMiIsInN3aXRjaDMiLCJvbGRMaXN0Iiwic2l6ZSIsImFkZHJlc3MiLCJwb3B1cCIsIndhdGNoIiwiY29tcHV0ZWQiLCJtb3VudGVkIiwiaW5pdCIsImNyZWF0UXJDb2RlIiwibWV0aG9kcyIsImFwaSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImdldExpc3QiLCJzbGljZSIsImFkZCIsImNvbXBvbmVudCIsIiQiLCJpc09iamVjdCIsImlzQXJyYXkiLCJ0b0Fic29sdXRlSW5kZXgiLCJ0b0xlbmd0aCIsInRvSW5kZXhlZE9iamVjdCIsImNyZWF0ZVByb3BlcnR5Iiwid2VsbEtub3duU3ltYm9sIiwiYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwiSEFTX1NQRUNJRVNfU1VQUE9SVCIsIlVTRVNfVE9fTEVOR1RIIiwiQUNDRVNTT1JTIiwiMCIsIjEiLCJTUEVDSUVTIiwibmF0aXZlU2xpY2UiLCJtYXgiLCJNYXRoIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJzdGFydCIsImVuZCIsIkNvbnN0cnVjdG9yIiwicmVzdWx0IiwibiIsIk8iLCJsZW5ndGgiLCJrIiwiZmluIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiXSwibWFwcGluZ3MiOiJrSEFBQSwwTEFFYUEsRUFBUSxTQUFDQyxFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvREcsRUFBUSxTQUFDSixFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvREksRUFBUSxTQUFDTCxFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvREssRUFBUSxTQUFDTixFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvRE0sRUFBUSxTQUFDUCxFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdC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Y2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdAL2h0dHAnXG4vLyDkuJrliqHln5/nrqHnkIZcbmV4cG9ydCBjb25zdCBwYnFibCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWJsLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5pWw5o2u5a2Y566h5Z+fLeS4muWKoeWfn+ivpuaDhVxuZXhwb3J0IGNvbnN0IHBicWJkID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxYmQuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDkuJrliqHln58t5pWw5o2u5pON5L2c6KeE5YiZXG5leHBvcnQgY29uc3QgcGJxYmkgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFiaS5kbycsIHBhcmFtcywgb3B0cylcbi8vIOS4muWKoeWfny3lkIjnuqbmsrvnkIZcbmV4cG9ydCBjb25zdCBwYnFiYyA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWJjLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g6ZO+LeiBlOebn+WnlOWRmOS8mi3ogZTnm5/lp5TlkZjlhrPorq7lrqHmibnop4TliJkq6IGU55uf5aeU5ZGY5Lya5oiQ5ZGYKipcbmV4cG9ydCBjb25zdCBwYnFtbCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicW1sLmRvJywgcGFyYW1zLCBvcHRzKVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYnVzaW5lc3MtZGV0YWlsXCJ9LFtfYygnYnVzaW5lc3MtaGVhZGVyJyx7YXR0cnM6e1widGl0bGVcIjpcIuS4muWKoeWfn+WGheWQiOe6puayu+eQhlwiLFwiYnRuXCI6dHJ1ZX19KSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJiZy13aGl0ZSBwYWRkaW5nXCJ9LFtfYygnZGl2Jyx7c3RhdGljU3R5bGU6e1wibWFyZ2luLWJvdHRvbVwiOlwiMTBweFwiLFwiY29sb3JcIjpcIiMyNzNENTJcIn19LFtfdm0uX20oMCksX2MoJ0J1dHRvbicse3N0YXRpY1N0eWxlOntcImZsb2F0XCI6XCJyaWdodFwifSxhdHRyczp7XCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uYWRkTW9kYWwgPSB0cnVlfX19LFtfdm0uX3YoXCLmt7vliqDlkIjnuqZcIildKV0sMSksX2MoJ1JvdycsW19jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6XCI1XCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29uZGl0aW9uLWl0ZW1cIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjb25kaXRpb24tbGFiZWxcIn0sW192bS5fdihcIuWQiOe6puWQjeensO+8mlwiKV0pLF9jKCdJbnB1dCcse2F0dHJzOntcInR5cGVcIjpcInRleHRcIixcInBsYWNlaG9sZGVyXCI6XCLlkIjnuqblkI3np7BcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZm9ybS5uYW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpfSxleHByZXNzaW9uOlwiZm9ybS5uYW1lXCJ9fSldLDEpXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjpcIjdcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb25kaXRpb24taXRlbVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1sYWJlbFwifSxbX3ZtLl92KFwi5ZCI57qm6ZO+5LiK5ZSv5LiA5qCH6K+G77yaXCIpXSksX2MoJ0lucHV0Jyx7YXR0cnM6e1widHlwZVwiOlwidGV4dFwiLFwicGxhY2Vob2xkZXJcIjpcIuWQiOe6pumTvuS4iuWUr+S4gOagh+ivhu+8mlwifSxtb2RlbDp7dmFsdWU6KF92bS5mb3JtLmFkZHJlc3MpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uZm9ybSwgXCJhZGRyZXNzXCIsICQkdil9LGV4cHJlc3Npb246XCJmb3JtLmFkZHJlc3NcIn19KV0sMSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOlwiNlwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1pdGVtXCJ9LFtfYygnQnV0dG9uJyx7c3RhdGljU3R5bGU6e1wid2lkdGhcIjpcIjgwcHhcIn0sYXR0cnM6e1widHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOl92bS5zZWFyY2h9fSxbX3ZtLl92KFwi5p+l6K+iXCIpXSldLDEpXSldLDEpLF9jKCdkaXYnLFtfYygnVGFibGUnLHthdHRyczp7XCJjb2x1bW5zXCI6X3ZtLmNvbHVtbnMsXCJsb2FkaW5nXCI6X3ZtLmxpc3RMb2FkaW5nLFwiZGF0YVwiOl92bS5saXN0fX0pXSwxKSxfYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOihfdm0ucG9wdXApLGV4cHJlc3Npb246XCJwb3B1cFwifV19LFtfYygnZGl2Jyx7YXR0cnM6e1wiaWRcIjpcInFyY29kZVwifX0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm92ZXJcIn0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicGFnZVwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicGFnZS1pbm5lclwifSxbX2MoJ1BhZ2UnLHthdHRyczp7XCJzaG93LXNpemVyXCI6XCJcIixcInRvdGFsXCI6X3ZtLnBhZ2UudG90YWwsXCJjdXJyZW50XCI6X3ZtLnBhZ2UuY3VycmVudH0sb246e1wib24tY2hhbmdlXCI6X3ZtLnBhZ2VDaGFuZ2UsXCJvbi1wYWdlLXNpemUtY2hhbmdlXCI6X3ZtLnNpemVDaGFuZ2V9fSldLDEpXSksX2MoJ01vZGFsJyx7YXR0cnM6e1widGl0bGVcIjpcIuWQiOe6puWPkeW4g1wifSxvbjp7XCJvbi1va1wiOl92bS5vayxcIm9uLWNhbmNlbFwiOl92bS5jYW5jZWx9LG1vZGVsOnt2YWx1ZTooX3ZtLmFkZE1vZGFsKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFkZE1vZGFsPSQkdn0sZXhwcmVzc2lvbjpcImFkZE1vZGFsXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWRkLW1vZGFsLWJvZHlcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi6YCJ5oup57yW6K+R5aW955qE5ZCI57qm5paH5Lu277yM55Sz6K+35LiK6ZO+5Y+R5biD77yBXCIpXSksX2MoJ2RpdicsW19jKCdzcGFuJyx7YXR0cnM6e1wiU3R5bGVcIjpcIm1hcmdpbi1ib3R0b206MTBweDtcIn19LFtfdm0uX3YoXCLlkIjnuqblkI3np7DvvJpcIildKSxfYygnSW5wdXQnLHthdHRyczp7XCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5ZCI57qm5ZCN56ewXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmNvbk5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uY29uTmFtZT0kJHZ9LGV4cHJlc3Npb246XCJjb25OYW1lXCJ9fSldLDEpLF9jKCdkaXYnLFtfYygnc3Bhbicse2F0dHJzOntcIlN0eWxlXCI6XCJtYXJnaW4tYm90dG9tOjEwcHg7XCJ9fSxbX3ZtLl92KFwi5aSH5rOo77yaXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnaS1pbnB1dCcse2F0dHJzOntcInR5cGVcIjpcInRleHRhcmVhXCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWlLi4uXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnJlbWFya3MpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ucmVtYXJrcz0kJHZ9LGV4cHJlc3Npb246XCJyZW1hcmtzXCJ9fSldLDEpLF9jKCdkaXYnLFtfYygnc3Bhbicse2F0dHJzOntcIlN0eWxlXCI6XCJtYXJnaW4tYm90dG9tOjEwcHg7XCJ9fSxbX3ZtLl92KFwi5ZCI57qm5YaF5a65XCIpXSksX2MoJ2ktaW5wdXQnLHthdHRyczp7XCJ0eXBlXCI6XCJ0ZXh0YXJlYVwiLFwicm93c1wiOjQsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWlLi4uXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmNvbkNlbnQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uY29uQ2VudD0kJHZ9LGV4cHJlc3Npb246XCJjb25DZW50XCJ9fSldLDEpXSksX2MoJ2Rpdicse2F0dHJzOntcInNsb3RcIjpcImZvb3RlclwifSxzbG90OlwiZm9vdGVyXCJ9LFtfYygnQnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbGVhckJ0blwiLGF0dHJzOntcImxvYWRpbmdcIjpfdm0uYWRkTG9hZGluZyxcInR5cGVcIjpcInByaW1hcnlcIn0sb246e1wiY2xpY2tcIjpfdm0ub2t9fSxbX3ZtLl92KFwi55Sz6K+35Y+R5biDXCIpXSksX2MoJ0J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xlYXJCdG5cIixzdGF0aWNTdHlsZTp7XCJ3aWR0aFwiOlwiODBweFwifSxvbjp7XCJjbGlja1wiOl92bS5jYW5jZWx9fSxbX3ZtLl92KFwi5Y+W5raIXCIpXSldLDEpXSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc3BhbicsW19jKCdiJyxbX3ZtLl92KFwi5ZCI57qm5YiX6KGoXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1kZXRhaWxcIj5cbiAgICA8YnVzaW5lc3MtaGVhZGVyIHRpdGxlPVwi5Lia5Yqh5Z+f5YaF5ZCI57qm5rK755CGXCIgOmJ0bj1cInRydWVcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSBwYWRkaW5nXCI+XG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtjb2xvcjogIzI3M0Q1MjtcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGI+5ZCI57qm5YiX6KGoPC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwhLS0gPFRvb2x0aXBcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgIG1heC13aWR0aD1cIjYwMFwiXG4gICAgICAgICAgdHJhbnNmZXJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJpb3MtaGVscC1jaXJjbGUtb3V0bGluZVwiIC8+XG4gICAgICAgIDwvVG9vbHRpcD4gLS0+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiAgQGNsaWNrPVwiYWRkTW9kYWwgPSB0cnVlXCIgIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPua3u+WKoOWQiOe6pjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49XCI1XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24taXRlbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uZGl0aW9uLWxhYmVsXCI+5ZCI57qm5ZCN56ew77yaPC9zcGFuPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiBwbGFjZWhvbGRlcj1cIuWQiOe6puWQjeensFwiPjwvSW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPVwiN1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWl0ZW1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmRpdGlvbi1sYWJlbFwiPuWQiOe6pumTvuS4iuWUr+S4gOagh+ivhu+8mjwvc3Bhbj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5hZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCLlkIjnuqbpk77kuIrllK/kuIDmoIfor4bvvJpcIj48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDwhLS0gPENvbCBzcGFuPVwiNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24taXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb24tbGFiZWxcIj7nirbmgIHvvJo8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0IHZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuWFqOmDqDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMVwiPuWGu+e7kzwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPuato+W4uDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPuWGu+e7k+WuoeaguOS4rTwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPuino+WGu+WuoeaguOS4rTwvT3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPiAtLT5cbiAgICAgICAgPENvbCBzcGFuPVwiNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWl0ZW1cIj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPVwid2lkdGg6IDgwcHg7XCIgQGNsaWNrPVwic2VhcmNoXCIgdHlwZT1cInByaW1hcnlcIj7mn6Xor6I8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VGFibGUgOmNvbHVtbnM9XCJjb2x1bW5zXCIgOmxvYWRpbmc9XCJsaXN0TG9hZGluZ1wiIDpkYXRhPVwibGlzdFwiPjwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgIHYtc2hvdz1cInBvcHVwXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJxcmNvZGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaW5uZXJcIj5cbiAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgc2hvdy1zaXplclxuICAgICAgICAgICAgOnRvdGFsPVwicGFnZS50b3RhbFwiXG4gICAgICAgICAgICA6Y3VycmVudD1cInBhZ2UuY3VycmVudFwiXG4gICAgICAgICAgICBAb24tY2hhbmdlPVwicGFnZUNoYW5nZVwiXG4gICAgICAgICAgICBAb24tcGFnZS1zaXplLWNoYW5nZT1cInNpemVDaGFuZ2VcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdi1tb2RlbD1cImFkZE1vZGFsXCJcbiAgICAgICAgdGl0bGU9XCLlkIjnuqblj5HluINcIlxuICAgICAgICBAb24tb2s9XCJva1wiXG4gICAgICAgIEBvbi1jYW5jZWw9XCJjYW5jZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1tb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPHNwYW4+6YCJ5oup57yW6K+R5aW955qE5ZCI57qm5paH5Lu277yM55Sz6K+35LiK6ZO+5Y+R5biD77yBPC9zcGFuPlxuICAgICAgICAgIDxkaXY+PHNwYW4gU3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+5ZCI57qm5ZCN56ew77yaPC9zcGFuPjxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWQiOe6puWQjeensFwiIHYtbW9kZWw9XCJjb25OYW1lXCIgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxzcGFuIFN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiPuWkh+azqO+8mjwvc3Bhbj4gIDxpLWlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIHYtbW9kZWw9XCJyZW1hcmtzXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaUuLi5cIj48L2ktaW5wdXQ+PC9kaXY+XG4gICAgICAgICAgPGRpdj48c3BhbiBTdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweDtcIj7lkIjnuqblhoXlrrk8L3NwYW4+PGktaW5wdXQgdHlwZT1cInRleHRhcmVhXCIgdi1tb2RlbD1cImNvbkNlbnRcIiA6cm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpS4uLlwiPjwvaS1pbnB1dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc2xvdCA9XCJmb290ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIDpsb2FkaW5nPVwiYWRkTG9hZGluZ1wiIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9J2NsZWFyQnRuJyBAY2xpY2s9XCJva1wiID7nlLPor7flj5HluIM8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uICBzdHlsZT1cIndpZHRoOjgwcHg7XCIgY2xhc3M9J2NsZWFyQnRuJyBAY2xpY2s9XCJjYW5jZWxcIiA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGVqczInXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknXG4vLyBpbXBvcnQgKiBhcyBjQXBpIGZyb20gJ0AvaHR0cC9hcGknXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIC8vIHtcbiAgICAvLyAgIFwiY29udHJhY3RfaWRcIjogXCIxXCIsICAvL+WQiOe6pmlk77yI5ZCI57qm5ZSv5LiA5qCH6K+G77yJXG4gICAgLy8gICBcImNvbnRyYWN0X25hbWVcIjogXCLlkIjnuqblkI3np7BcIiwgLy/lkIjnuqblkI3np7BcbiAgICAvLyAgIFwiam9pbl90aW1lXCI6IDE1OTk3MDQxNTQwMDAsIC8v5Yqg5YWl5pe26Ze0XG4gICAgLy8gICBcInN0YXR1c1wiOiBcIjFcIiwgLy/nirbmgIFcbiAgICAvLyAgIFwibWFpbl9iaXpfYml6X2lkXCI6IFwiMVwiIC8v5omA5bGe5Lia5Yqh5Z+faWRcbiAgICAvLyB9LFxuICAgIGxldCBjb2x1bW5zID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WQiOe6puWQjeensCcsXG4gICAgICAgIGtleTogJ2NvbnRyYWN0X25hbWUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WQiOe6pumTvuS4iuWUr+S4gOagh+ivhicsXG4gICAgICAgIGtleTogJ2NvbnRyYWN0X2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXml7bpl7QnLFxuICAgICAgICBrZXk6ICdqb2luX3RpbWUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aJgOWxnuS4muWKoeWfn2lkJyxcbiAgICAgICAga2V5OiAnbWFpbl9iaXpfYml6X2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfnirbmgIEnLFxuICAgICAgICBrZXk6ICdzdGF0dXMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgICAgIHJlbmRlciAoaCwgcCkge1xuICAgICAgICAgIGxldCByb3cgPSBwLnJvdyB8fCB7fVxuICAgICAgICAgIGxldCBsYWJlbCA9ICctLSdcbiAgICAgICAgICBsZXQgc3RhdHVzID0gcm93LnN0YXR1c1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICcxJykge1xuICAgICAgICAgICAgbGFiZWwgPSAn5Ya757uTJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnMicpIHtcbiAgICAgICAgICAgIGxhYmVsID0gJ+ino+WGuydcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXR1cyA+IDIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gJ+aSpOmUgCdcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJzInKSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBsYWJlbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgc3dpdGNoMTogJzAnLFxuICAgICAgc3dpdGNoMjogJzAnLFxuICAgICAgc3dpdGNoMzogJzAnLFxuICAgICAgbGlzdExvYWRpbmc6IGZhbHNlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIG9sZExpc3Q6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICdtZW1iZXJfaWQnOiAxLFxuICAgICAgICAvLyAgICdtZW1iZXJfYWRkcmVzcyc6ICcxJyxcbiAgICAgICAgLy8gICAnbWFpbl9jb21taXR0ZWVncm91cF9ncm91cF9pZCc6ICcxJyxcbiAgICAgICAgLy8gICAnam9pbl90aW1lJzogMTU5ODM0NTkyMzAwMCxcbiAgICAgICAgLy8gICAnbWVtYmVyX25hbWUnOiAn5ZCN56ewJ1xuICAgICAgICAvLyB9XG4gICAgICBdLFxuICAgICAgbGlzdDogW10sXG4gICAgICBwYWdlOiB7XG4gICAgICAgIHRvdGFsOiAxLFxuICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICBzaXplOiAxMFxuICAgICAgfSxcbiAgICAgIGFkZE1vZGFsOiBmYWxzZSxcbiAgICAgIGNvbk5hbWU6ICcnLFxuICAgICAgcmVtYXJrczogJycsXG4gICAgICBjb25DZW50OiAnJyxcbiAgICAgIGFkZExvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYWRkcmVzczogJydcbiAgICAgIH0sXG4gICAgICBwb3B1cDogMFxuXG4gICAgfVxuICB9LFxuICB3YXRjaDoge30sXG4gIGNvbXB1dGVkOiB7fSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmNyZWF0UXJDb2RlKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQgKCkge1xuICAgICAgdGhpcy5saXN0TG9hZGluZyA9IHRydWVcbiAgICAgIGFwaS5wYnFiYyh7XG4gICAgICAgIGFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Zic19hZGRyZXNzJylcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5saXN0TG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub2xkTGlzdCA9IHJlcy5yb3dzXG4gICAgICAgIHRoaXMucGFnZS50b3RhbCA9IHRoaXMub2xkTGlzdC5sZW5ndGhcbiAgICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMubGlzdExvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVyci5yZXRNc2cpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TGlzdCAoKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLm9sZExpc3Quc2xpY2UoKHRoaXMucGFnZS5jdXJyZW50IC0gMSkgKiB0aGlzLnBhZ2Uuc2l6ZSwgdGhpcy5wYWdlLnNpemUgKiB0aGlzLnBhZ2UuY3VycmVudClcbiAgICB9LFxuICAgIHNpemVDaGFuZ2UgKHNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5jdXJyZW50ID0gMVxuICAgICAgdGhpcy5wYWdlLnNpemUgPSBzaXplXG4gICAgICB0aGlzLmdldExpc3QoKVxuICAgIH0sXG4gICAgLy8g5YiG6aG1XG4gICAgcGFnZUNoYW5nZSAocGFnZSkge1xuICAgICAgdGhpcy5wYWdlLmN1cnJlbnQgPSBwYWdlXG4gICAgICB0aGlzLmdldExpc3QoKVxuICAgIH0sXG4gICAgb2sgKCkge1xuICAgICAgdGhpcy5wb3B1cCA9IDFcbiAgICAgIHRoaXMuYWRkKClcbiAgICB9LFxuICAgIGFkZCAoKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpXG4gICAgfSxcbiAgICBzZWFyY2ggKCkge30sXG4gICAgY2FuY2VsICgpIHtcbiAgICAgIHRoaXMuY29uTmFtZSA9ICcnXG4gICAgICB0aGlzLnJlbWFya3MgPSAnJ1xuICAgICAgdGhpcy5jb25DZW50ID0gJydcbiAgICAgIHRoaXMuYWRkTW9kYWwgPSBmYWxzZVxuICAgICAgdGhpcy5hZGRMb2FkaW5nID0gZmFsc2VcbiAgICB9LFxuICAgIHBhZ2VDaGFuZ2UgKHZhbCkge1xuXG4gICAgfSxcbiAgICAvLyDnlJ/miJDkuoznu7TnoIFcbiAgICBjcmVhdFFyQ29kZSAoKSB7XG4gICAgICBsZXQgbGlua0RhdGEgPSB7XG4gICAgICAgIC8vIHVybDpcImh0dHA6Ly80Ny4xMTYuMTcuMjQ3OjkwMDAvYXBpL2NsdC9wYmxpbi5kb1wiLFxuICAgICAgICAvLyBmdW5jOlwiTG9naW5cIixcbiAgICAgICAgLy8gZGF0YTp7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIGxldCBxcmNvZGUgPSBuZXcgUVJDb2RlKCdxcmNvZGUnLCB7XG4gICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KGxpbmtEYXRhKSwgLy8g6ZyA6KaB6L2s5o2i5Li65LqM57u056CB55qE5YaF5a65XG4gICAgICAgIHdpZHRoOiAyNjAsXG4gICAgICAgIGhlaWdodDogMjYwLFxuICAgICAgICBjb2xvckRhcms6ICcjMDAwMDAwJyxcbiAgICAgICAgY29sb3JMaWdodDogJyNmZmZmZmYnLFxuICAgICAgICBjb3JyZWN0TGV2ZWw6IDMvLyDlrrnplJnnjofvvIxML00vSFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHFyY29kZSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4jcXJjb2RlIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvcmRlcjoxMHB4IHNvbGlkICB3aGl0ZTtcbiAgIG1hcmdpbjoxMnB4O1xuICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgIGxlZnQ6IDUwJTtcbiAgIHRvcDogNTAlO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICB6LWluZGV4OiAxMDAwO1xuIH1cbiAgLm92ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMC4zOy8v6YCP5piO5bqm5Li6NzAlXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcbiAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udHJhY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRyYWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29udHJhY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5ODMyY2Y2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRyYWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udHJhY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRyYWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU5ODMyY2Y2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTk4MzJjZjZcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRyYWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU5ODMyY2Y2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRyYWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU5ODMyY2Y2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=