(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf7d370"],{"1cc6":function(t,e,a){},"4d6e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-storage"},[a("chain-header",{attrs:{title:"数据存管域管理"}}),a("div",{staticClass:"bg-white padding"},[a("div",{staticClass:"section-title clear"},[a("span",[t._v("数据存管域列表")]),a("div",{staticClass:"fr float-right",staticStyle:{"margin-top":"-5px"}},[a("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("连接现有域")])],1)]),a("div",[a("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)]),a("Modal",{attrs:{title:"连接数据存管域"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("div",{staticClass:"add-modal-body"},[a("div",[a("p",{staticStyle:{"margin-bottom":"15px"}},[t._v("数据存管域唯一标识：")]),a("Input",{attrs:{placeholder:"请输入委员名称"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("连接")]),a("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},n=[],s=(a("fb6a"),a("b0c0"),a("9aa7")),o={data:function(){var t=this,e=[{title:"数据存管域名称",key:"storage_name",width:140},{title:"数据存管域唯一标识",key:"storage_id"},{title:"创建时间",key:"join_time"},{title:"最大许可存储容量",key:"capacity_license"},{title:"操作",render:function(e,a){var i=a.row||{},n=i.type,s=e("a",{on:{click:function(){}}},"断开连接"),o=e("a",{on:{click:function(){var e=t.$route.query.showBusinessSubmenu;sessionStorage.setItem("fbs_storage_id",i.storage_id),t.$router.push({path:"data-detail",query:{showDataSubmenu:"1",showBusinessSubmenu:e,mainActive:"data",activeIndex:"1",subActive:"data-detail"}})}}},"详情"),c=e("a",{on:{click:function(){}}},"删除"),r=[s,o];switch(n){case"1":r.push(o);break;case"2":r.push(o),r.push(c);break;default:break}return e("div",{class:"opt-btns"},r)}}];return{listLoading:!1,columns:e,oldList:[],list:[],page:{total:1,current:1,size:10},addLoading:!1,addModal:!1,name:"",address:""}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.listLoading=!0,s["e"]({address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},destoryed:function(){this.closeTimer()},closeTimer:function(){this.timer&&clearInterval(this.timer)},confirmAdd:function(){},ok:function(){},cancel:function(){this.name="",this.address="",this.addModal=!1,this.addLoading=!1},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},c=o,r=(a("75ff"),a("2877")),d=Object(r["a"])(c,i,n,!1,null,"3e1ebba2",null);e["default"]=d.exports},"75ff":function(t,e,a){"use strict";var i=a("1cc6"),n=a.n(i);n.a},"9aa7":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return r}));var i=a("db04"),n=function(t,e){return i["a"].post("cmw/pbqss.do",t,e)},s=function(t,e){return i["a"].post("cmw/pbqsb.do",t,e)},o=function(t,e){return i["a"].post("cmw/pbqml.do",t,e)},c=function(t,e){return i["a"].post("cmw/pbqrm.do",t,e)},r=function(t,e){return i["a"].post("cmw/pbqan.do",t,e)}},fb6a:function(t,e,a){"use strict";var i=a("23e7"),n=a("861d"),s=a("e8b5"),o=a("23cb"),c=a("50c4"),r=a("fc6a"),d=a("8418"),l=a("b622"),u=a("1dde"),f=a("ae40"),p=u("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),m=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var a,i,l,u=r(this),f=c(u.length),p=o(t,f),g=o(void 0===e?f:e,f);if(s(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(u,p,g);for(i=new(void 0===a?Array:a)(v(g-p,0)),l=0;p<g;p++,l++)p in u&&d(i,l,u[p]);return i.length=l,i}})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9pbmRleC52dWU/N2Y2OSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2RhdGEvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2luZGV4LnZ1ZT82OGJlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9pbmRleC52dWU/NmU3NSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiX3YiLCJzdGF0aWNTdHlsZSIsIm9uIiwiJGV2ZW50IiwiYWRkTW9kYWwiLCJjb2x1bW5zIiwibGlzdExvYWRpbmciLCJsaXN0IiwicGFnZSIsInRvdGFsIiwiY3VycmVudCIsInBhZ2VDaGFuZ2UiLCJzaXplQ2hhbmdlIiwib2siLCJjYW5jZWwiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiYWRkcmVzcyIsInNsb3QiLCJhZGRMb2FkaW5nIiwic3RhdGljUmVuZGVyRm5zIiwiZGF0YSIsIm9wdHMiLCJwdXNoIiwib3B0MiIsIm9wdDMiLCJvbGRMaXN0Iiwic2l6ZSIsIm5hbWUiLCJtb3VudGVkIiwiaW5pdCIsIm1ldGhvZHMiLCJhcGkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZXN0b3J5ZWQiLCJjbG9zZVRpbWVyIiwidGltZXIiLCJjbGVhckludGVydmFsIiwiY29uZmlybUFkZCIsImdldExpc3QiLCJzbGljZSIsImNvbXBvbmVudCIsInBicXNzIiwicGFyYW1zIiwicmVxdWVzdCIsInBvc3QiLCJwYnFzYiIsInBicW1sIiwicGJxcm0iLCJwYnFhbiIsIiQiLCJpc09iamVjdCIsImlzQXJyYXkiLCJ0b0Fic29sdXRlSW5kZXgiLCJ0b0xlbmd0aCIsInRvSW5kZXhlZE9iamVjdCIsImNyZWF0ZVByb3BlcnR5Iiwid2VsbEtub3duU3ltYm9sIiwiYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwiSEFTX1NQRUNJRVNfU1VQUE9SVCIsIlVTRVNfVE9fTEVOR1RIIiwiQUNDRVNTT1JTIiwiMCIsIjEiLCJTUEVDSUVTIiwibmF0aXZlU2xpY2UiLCJtYXgiLCJNYXRoIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJzdGFydCIsImVuZCIsIkNvbnN0cnVjdG9yIiwicmVzdWx0IiwibiIsIk8iLCJsZW5ndGgiLCJrIiwiZmluIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiXSwibWFwcGluZ3MiOiJrSkFBQSxJQUFJQSxFQUFTLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxNQUFNLENBQUNFLFlBQVksZ0JBQWdCLENBQUNGLEVBQUcsZUFBZSxDQUFDRyxNQUFNLENBQUMsTUFBUSxhQUFhSCxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxvQkFBb0IsQ0FBQ0YsRUFBRyxNQUFNLENBQUNFLFlBQVksdUJBQXVCLENBQUNGLEVBQUcsT0FBTyxDQUFDSixFQUFJUSxHQUFHLGFBQWFKLEVBQUcsTUFBTSxDQUFDRSxZQUFZLGlCQUFpQkcsWUFBWSxDQUFDLGFBQWEsU0FBUyxDQUFDTCxFQUFHLFNBQVMsQ0FBQ0ssWUFBWSxDQUFDLGNBQWMsUUFBUUYsTUFBTSxDQUFDLEtBQU8sV0FBV0csR0FBRyxDQUFDLE1BQVEsU0FBU0MsR0FBUVgsRUFBSVks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aEJQLEVBQTRCUyxNQUFRVCxHQUFhUCxFQUFJYSxFQUFNRCxFQUFHLElBQ3ZFSCxFQUFJLEVBQUdHLEVBQUlDLEVBQUtELElBQUtILElBQVNHLEtBQUtGLEdBQUdyQixFQUFlbUIsRUFBUUMsRUFBR0MsRUFBRUUsSUFFdkUsT0FEQUosRUFBT0csT0FBU0YsRUFDVEQiLCJmaWxlIjoianMvY2h1bmstNGNmN2QzNzAuNzU1NTExY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkYXRhLXN0b3JhZ2VcIn0sW19jKCdjaGFpbi1oZWFkZXInLHthdHRyczp7XCJ0aXRsZVwiOlwi5pWw5o2u5a2Y566h5Z+f566h55CGXCJ9fSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYmctd2hpdGUgcGFkZGluZ1wifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic2VjdGlvbi10aXRsZSBjbGVhclwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLmlbDmja7lrZjnrqHln5/liJfooahcIildKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJmciBmbG9hdC1yaWdodFwiLHN0YXRpY1N0eWxlOntcIm1hcmdpbi10b3BcIjpcIi01cHhcIn19LFtfYygnQnV0dG9uJyx7c3RhdGljU3R5bGU6e1wibWFyZ2luLWxlZnRcIjpcIjI0cHhcIn0sYXR0cnM6e1widHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmFkZE1vZGFsID0gdHJ1ZX19fSxbX3ZtLl92KFwi6L+e5o6l546w5pyJ5Z+fXCIpXSldLDEpXSksX2MoJ2RpdicsW19jKCdUYWJsZScse2F0dHJzOntcImNvbHVtbnNcIjpfdm0uY29sdW1ucyxcImxvYWRpbmdcIjpfdm0ubGlzdExvYWRpbmcsXCJkYXRhXCI6X3ZtLmxpc3R9fSldLDEpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2VcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2UtaW5uZXJcIn0sW19jKCdQYWdlJyx7YXR0cnM6e1wic2hvdy1zaXplclwiOlwiXCIsXCJ0b3RhbFwiOl92bS5wYWdlLnRvdGFsLFwiY3VycmVudFwiOl92bS5wYWdlLmN1cnJlbnR9LG9uOntcIm9uLWNoYW5nZVwiOl92bS5wYWdlQ2hhbmdlLFwib24tcGFnZS1zaXplLWNoYW5nZVwiOl92bS5zaXplQ2hhbmdlfX0pXSwxKV0pLF9jKCdNb2RhbCcse2F0dHJzOntcInRpdGxlXCI6XCLov57mjqXmlbDmja7lrZjnrqHln59cIn0sb246e1wib24tb2tcIjpfdm0ub2ssXCJvbi1jYW5jZWxcIjpfdm0uY2FuY2VsfSxtb2RlbDp7dmFsdWU6KF92bS5hZGRNb2RhbCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5hZGRNb2RhbD0kJHZ9LGV4cHJlc3Npb246XCJhZGRNb2RhbFwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFkZC1tb2RhbC1ib2R5XCJ9LFtfYygnZGl2JyxbX2MoJ3AnLHtzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxNXB4XCJ9fSxbX3ZtLl92KFwi5pWw5o2u5a2Y566h5Z+f5ZSv5LiA5qCH6K+G77yaXCIpXSksX2MoJ0lucHV0Jyx7YXR0cnM6e1wicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpeWnlOWRmOWQjeensFwifSxtb2RlbDp7dmFsdWU6KF92bS5hZGRyZXNzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFkZHJlc3M9JCR2fSxleHByZXNzaW9uOlwiYWRkcmVzc1wifX0pXSwxKV0pLF9jKCdkaXYnLHthdHRyczp7XCJzbG90XCI6XCJmb290ZXJcIn0sc2xvdDpcImZvb3RlclwifSxbX2MoJ0J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xlYXJCdG5cIixhdHRyczp7XCJsb2FkaW5nXCI6X3ZtLmFkZExvYWRpbmcsXCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6X3ZtLm9rfX0sW192bS5fdihcIui/nuaOpVwiKV0pLF9jKCdCdXR0b24nLHtzdGF0aWNDbGFzczpcImNsZWFyQnRuXCIsc3RhdGljU3R5bGU6e1wid2lkdGhcIjpcIjgwcHhcIn0sb246e1wiY2xpY2tcIjpfdm0uY2FuY2VsfX0sW192bS5fdihcIuWPlua2iFwiKV0pXSwxKV0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRhdGEtc3RvcmFnZVwiPlxuICAgIDxjaGFpbi1oZWFkZXIgdGl0bGU9XCLmlbDmja7lrZjnrqHln5/nrqHnkIZcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSBwYWRkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZSBjbGVhclwiPlxuICAgICAgICA8c3Bhbj7mlbDmja7lrZjnrqHln5/liJfooag8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmciBmbG9hdC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDogLTVweDtcIj5cbiAgICAgICAgICA8IS0tIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7liJvlu7rmlrDln588L0J1dHRvbj4gLS0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImFkZE1vZGFsID0gdHJ1ZVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDI0cHg7XCI+6L+e5o6l546w5pyJ5Z+fPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VGFibGUgOmNvbHVtbnM9XCJjb2x1bW5zXCIgOmxvYWRpbmc9XCJsaXN0TG9hZGluZ1wiIDpkYXRhPVwibGlzdFwiPjwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWlubmVyXCI+XG4gICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgIHNob3ctc2l6ZXJcbiAgICAgICAgICAgIDp0b3RhbD1cInBhZ2UudG90YWxcIlxuICAgICAgICAgICAgOmN1cnJlbnQ9XCJwYWdlLmN1cnJlbnRcIlxuICAgICAgICAgICAgQG9uLWNoYW5nZT1cInBhZ2VDaGFuZ2VcIlxuICAgICAgICAgICAgQG9uLXBhZ2Utc2l6ZS1jaGFuZ2U9XCJzaXplQ2hhbmdlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIHYtbW9kZWw9XCJhZGRNb2RhbFwiXG4gICAgICAgIHRpdGxlPVwi6L+e5o6l5pWw5o2u5a2Y566h5Z+fXCJcbiAgICAgICAgQG9uLW9rPVwib2tcIlxuICAgICAgICBAb24tY2FuY2VsPVwiY2FuY2VsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxkaXY+PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjE1cHg7XCI+5pWw5o2u5a2Y566h5Z+f5ZSv5LiA5qCH6K+G77yaPC9wPjxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWnlOWRmOWQjeensFwiIHYtbW9kZWw9XCJhZGRyZXNzXCIgLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgIDxCdXR0b24gOmxvYWRpbmc9XCJhZGRMb2FkaW5nXCIgdHlwZT1cInByaW1hcnlcIiBjbGFzcz0nY2xlYXJCdG4nIEBjbGljaz1cIm9rXCIgPui/nuaOpTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gIHN0eWxlPVwid2lkdGg6ODBweDtcIiBjbGFzcz0nY2xlYXJCdG4nIEBjbGljaz1cImNhbmNlbFwiID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSdcbi8vIGltcG9ydCAqIGFzIGNBcGkgZnJvbSAnQC9odHRwL2FwaSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IGNvbHVtbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5pWw5o2u5a2Y566h5Z+f5ZCN56ewJyxcbiAgICAgICAga2V5OiAnc3RvcmFnZV9uYW1lJyxcbiAgICAgICAgd2lkdGg6IDE0MFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmlbDmja7lrZjnrqHln5/llK/kuIDmoIfor4YnLFxuICAgICAgICBrZXk6ICdzdG9yYWdlX2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfliJvlu7rml7bpl7QnLFxuICAgICAgICBrZXk6ICdqb2luX3RpbWUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+acgOWkp+iuuOWPr+WtmOWCqOWuuemHjycsXG4gICAgICAgIGtleTogJ2NhcGFjaXR5X2xpY2Vuc2UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgICAgIHJlbmRlciAoaCwgcCkge1xuICAgICAgICAgIC8vIGxldCBpbmRleCA9IHAuaW5kZXhcbiAgICAgICAgICBsZXQgcm93ID0gcC5yb3cgfHwge31cbiAgICAgICAgICBsZXQgdHlwZSA9IHJvdy50eXBlXG4gICAgICAgICAgbGV0IG9wdDEgPSBoKCdhJywge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2sgKCkge1xuICAgICAgICAgICAgICAgIC8vIHRoYXQuZGF0YTEuc3BsaWNlKGluZGV4LDEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn5pat5byA6L+e5o6lJylcbiAgICAgICAgICBsZXQgb3B0MiA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgICAgICAgIC8vIGxldCB7IG1haW5BY3RpdmUsIHNob3dEYXRhU3VibWVudSwgc2hvd0J1c2luZXNzU3VibWVudSB9ID0gdGhhdC4kcm91dGUucXVlcnlcbiAgICAgICAgICAgICAgICBsZXQgeyBzaG93QnVzaW5lc3NTdWJtZW51IH0gPSB0aGF0LiRyb3V0ZS5xdWVyeVxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Zic19zdG9yYWdlX2lkJywgcm93LnN0b3JhZ2VfaWQpXG4gICAgICAgICAgICAgICAgdGhhdC4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgcGF0aDogJ2RhdGEtZGV0YWlsJyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEYXRhU3VibWVudTogJzEnLFxuICAgICAgICAgICAgICAgICAgICBzaG93QnVzaW5lc3NTdWJtZW51LFxuICAgICAgICAgICAgICAgICAgICBtYWluQWN0aXZlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAnMScsXG4gICAgICAgICAgICAgICAgICAgIHN1YkFjdGl2ZTogJ2RhdGEtZGV0YWlsJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn6K+m5oOFJylcbiAgICAgICAgICBsZXQgb3B0MyA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgJ+WIoOmZpCcpXG4gICAgICAgICAgbGV0IG9wdHMgPSBbb3B0MSwgb3B0Ml1cbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgb3B0cy5wdXNoKG9wdDMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdC1idG5zJ1xuICAgICAgICAgIH0sIG9wdHMpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgbGlzdExvYWRpbmc6IGZhbHNlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIG9sZExpc3Q6IFtdLFxuICAgICAgbGlzdDogW10sXG4gICAgICBwYWdlOiB7XG4gICAgICAgIHRvdGFsOiAxLFxuICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICBzaXplOiAxMFxuICAgICAgfSxcbiAgICAgIGFkZExvYWRpbmc6IGZhbHNlLFxuICAgICAgYWRkTW9kYWw6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBhZGRyZXNzOiAnJ1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pbml0KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQgKCkge1xuICAgICAgdGhpcy5saXN0TG9hZGluZyA9IHRydWVcbiAgICAgIGFwaS5wYnFzcyh7XG4gICAgICAgIGFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Zic19hZGRyZXNzJylcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5saXN0TG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub2xkTGlzdCA9IHJlcy5yb3dzXG4gICAgICAgIHRoaXMucGFnZS50b3RhbCA9IHRoaXMub2xkTGlzdC5sZW5ndGhcbiAgICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMubGlzdExvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVyci5yZXRNc2cpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGVzdG9yeWVkICgpIHtcbiAgICAgIHRoaXMuY2xvc2VUaW1lcigpXG4gICAgfSxcbiAgICBjbG9zZVRpbWVyICgpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgICAgLy8gbGV0IHNpZ25SZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblJlc3VsdCcpXG4gICAgICAgIC8vIHNpZ25SZXN1bHQgPSAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlybUFkZCAoKSB7XG5cbiAgICB9LFxuICAgIG9rICgpIHtcbiAgICAgIC8vIC8vIGxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICAvLyAvLyBsZXQgc2lnblN0ciA9IHRoaXMudGltZXN0YW1wICsgJydcbiAgICAgIC8vIC8vIHNpZ24oc2lnblN0cilcbiAgICAgIC8vIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyAgIGxldCBzaWduUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25SZXN1bHQnKVxuICAgICAgLy8gICBsZXQgc2lnbmF0dXJlID0gc2lnblJlc3VsdC52YWx1ZVxuICAgICAgLy8gICBpZiAoc2lnbmF0dXJlICYmICFzaWduYXR1cmUubWF0Y2goL14oZG9pbmcpfChmYWlsKXwocmVmdXNlKSQvKSkge1xuICAgICAgLy8gICAgIHRoaXMuY2xvc2VUaW1lcigpXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coc2lnbmF0dXJlKVxuICAgICAgLy8gICAgIHRoaXMuX2FkZCgpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgaWYgKHNpZ25hdHVyZSA9PT0gJ2ZhaWwnKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ+etvuWQjeWksei0pScpXG4gICAgICAvLyAgICAgdGhpcy5jbG9zZVRpbWVyKClcbiAgICAgIC8vICAgICAvLyB0aGlzLiR0b2FzdCgn562+5ZCN5aSx6LSlJylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBpZiAoc2lnbmF0dXJlID09PSAncmVmdXNlJykge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfmi5Lnu53nrb7lkI0nKVxuICAgICAgLy8gICAgIHRoaXMuY2xvc2VUaW1lcigpXG4gICAgICAvLyAgICAgLy8gdGhpcy4kdG9hc3QoJ+etvuWQjeWksei0pScpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sIDEwMClcbiAgICAgIC8vIGxldCBuYW1lID0gdGhpcy5uYW1lLnRyaW0oKVxuICAgICAgLy8gdGhpcy5hZGRMb2FkaW5nID0gdHJ1ZVxuICAgICAgLy8gbGV0IGRhdGEgPSB7XG4gICAgICAvLyAgIG5hbWVcbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMuJGh0dHAucG9zdCgnJywgZGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgLy8gICByZXMgPSByZXMuZGF0YVxuICAgICAgLy8gfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgLy9cbiAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIC8vICAgdGhpcy5jYW5jZWwoKVxuICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGNhbmNlbCAoKSB7XG4gICAgICB0aGlzLm5hbWUgPSAnJ1xuICAgICAgdGhpcy5hZGRyZXNzID0gJydcbiAgICAgIHRoaXMuYWRkTW9kYWwgPSBmYWxzZVxuICAgICAgdGhpcy5hZGRMb2FkaW5nID0gZmFsc2VcbiAgICB9LFxuICAgIGdldExpc3QgKCkge1xuICAgICAgdGhpcy5saXN0ID0gdGhpcy5vbGRMaXN0LnNsaWNlKCh0aGlzLnBhZ2UuY3VycmVudCAtIDEpICogdGhpcy5wYWdlLnNpemUsIHRoaXMucGFnZS5zaXplICogdGhpcy5wYWdlLmN1cnJlbnQpXG4gICAgfSxcbiAgICBzaXplQ2hhbmdlIChzaXplKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCA9IDFcbiAgICAgIHRoaXMucGFnZS5zaXplID0gc2l6ZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9LFxuICAgIC8vIOWIhumhtVxuICAgIHBhZ2VDaGFuZ2UgKHBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS5jdXJyZW50ID0gcGFnZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4gICAuYWRkLW1vZGFsLWJvZHkge1xuICAgICYgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2UxZWJiYTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2UxZWJiYTImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZTFlYmJhMlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTFlYmJhMiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTFlYmJhMiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgcmVxdWVzdCBmcm9tICdAL2h0dHAnXG4vLyDmlbDmja7lrZjnrqHln5/nrqHnkIZcbmV4cG9ydCBjb25zdCBwYnFzcyA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXNzLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5Lia5Yqh5Z+fXG5leHBvcnQgY29uc3QgcGJxc2IgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFzYi5kbycsIHBhcmFtcywgb3B0cylcbi8vIOaVsOaNruWtmOeuoeWfny3ln5/nrqHnkIblkZhcbmV4cG9ydCBjb25zdCBwYnFtbCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicW1sLmRvJywgcGFyYW1zLCBvcHRzKVxuZXhwb3J0IGNvbnN0IHBicXJtID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxcm0uZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t6IqC54K55YeG5YWlLeWHhuWFpeiKgueCueacjeWKoeWZqOWIl+ihqFxuZXhwb3J0IGNvbnN0IHBicWFuID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxYW4uZG8nLCBwYXJhbXMsIG9wdHMpXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==