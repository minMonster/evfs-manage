(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-085f48b4"],{"52f3":function(t,i,e){"use strict";var n=e("c3d2"),s=e.n(n);s.a},"53ac":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"data-business"},[e("data-header",{attrs:{title:"数据存管域内业务域授权管理",btn:!0}}),e("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-bottom":"10px",color:"#273D52"}},[e("span",{staticStyle:{color:"#273D52","font-weight":"600"}},[t._v("业务域列表")]),e("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.addEstablish}},[t._v("创建业务域")]),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“主节点网络准入审批”选择“开启”时，主节点服务器列表中的节点服务器才可以加入链的节点网络。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1)],1),e("Row",[e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务域名称：")]),e("Input",{attrs:{type:"text",placeholder:"请填写"},model:{value:t.form.name,callback:function(i){t.$set(t.form,"name",i)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务域唯一标识：")]),e("Input",{attrs:{type:"text",placeholder:"请填写"},model:{value:t.form.address,callback:function(i){t.$set(t.form,"address",i)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)])],1)],1)},s=[],a=(e("fb6a"),e("9aa7")),o={data:function(){var t=this,i=[{title:"业务域名称",key:"biz_name"},{title:"业务域唯一标识",key:"biz_id"},{title:"创建时间",key:"join_time"},{width:120,title:"操作",render:function(i,e){var n=e.row||{},s=i("a",{on:{click:function(){var i=t.$route.query.showBusinessSubmenu;sessionStorage.setItem("fbs_biz_id",n.biz_id),t.$router.push({name:"business-detail",query:{showDataSubmenu:"1",showBusinessSubmenu:i,mainActive:"business",activeIndex:"2",subActive:"business-detail"}})}}},"详情"),a=[s];return i("div",{},a)}}];return{acceptLimit:"1/3",myswitch:"1",addModal:!1,listLoading:!1,columns:i,oldList:[],list:[],page:{total:1,current:1,size:10},form:{name:"",address:""},switch1:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;this.listLoading=!0,a["d"]({}).then((function(i){t.listLoading=!1,t.oldList=i.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(i){t.listLoading=!1,t.$Message.error(i.retMsg)}))},ok:function(){},cancel:function(){},search:function(){},addEstablish:function(){this.$router.push("/data-busestablish")},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},r=o,c=(e("52f3"),e("2877")),u=Object(c["a"])(r,n,s,!1,null,"04ce2bbc",null);i["default"]=u.exports},"9aa7":function(t,i,e){"use strict";e.d(i,"e",(function(){return s})),e.d(i,"d",(function(){return a})),e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return c}));var n=e("db04"),s=function(t,i){return n["a"].post("cmw/pbqss.do",t,i)},a=function(t,i){return n["a"].post("cmw/pbqsb.do",t,i)},o=function(t,i){return n["a"].post("cmw/pbqml.do",t,i)},r=function(t,i){return n["a"].post("cmw/pbqrm.do",t,i)},c=function(t,i){return n["a"].post("cmw/pbqan.do",t,i)}},c3d2:function(t,i,e){},fb6a:function(t,i,e){"use strict";var n=e("23e7"),s=e("861d"),a=e("e8b5"),o=e("23cb"),r=e("50c4"),c=e("fc6a"),u=e("8418"),l=e("b622"),d=e("1dde"),p=e("ae40"),f=d("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),b=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!f||!h},{slice:function(t,i){var e,n,l,d=c(this),p=r(d.length),f=o(t,p),h=o(void 0===i?p:i,p);if(a(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?s(e)&&(e=e[m],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return b.call(d,f,h);for(n=new(void 0===e?Array:e)(g(h-f,0)),l=0;f<h;f++,l++)f in d&&u(n,l,d[f]);return n.length=l,n}})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9idXNpbmVzcy52dWU/NThjYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9idXNpbmVzcy52dWU/MzgyYiIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2RhdGEvYnVzaW5lc3MudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2J1c2luZXNzLnZ1ZT9lNWNlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2J1c2luZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwic3RhdGljU3R5bGUiLCJfdiIsIm9uIiwiYWRkRXN0YWJsaXNoIiwibW9kZWwiLCJ2YWx1ZSIsImZvcm0iLCJjYWxsYmFjayIsIiQkdiIsIiRzZXQiLCJleHByZXNzaW9uIiwic2VhcmNoIiwiY29sdW1ucyIsImxpc3RMb2FkaW5nIiwibGlzdCIsInBhZ2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJwYWdlQ2hhbmdlIiwic2l6ZUNoYW5nZSIsInN0YXRpY1JlbmRlckZucyIsImRhdGEiLCJhY2NlcHRMaW1pdCIsIm15c3dpdGNoIiwiYWRkTW9kYWwiLCJvbGRMaXN0Iiwic2l6ZSIsIm5hbWUiLCJhZGRyZXNzIiwic3dpdGNoMSIsIm1vdW50ZWQiLCJpbml0Iiwid2F0Y2giLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhcGkiLCJvayIsImNhbmNlbCIsIiRyb3V0ZXIiLCJwdXNoIiwiZ2V0TGlzdCIsInNsaWNlIiwiY29tcG9uZW50IiwicGJxc3MiLCJwYXJhbXMiLCJvcHRzIiwicmVxdWVzdCIsInBvc3QiLCJwYnFzYiIsInBicW1sIiwicGJxcm0iLCJwYnFhbiIsIiQiLCJpc09iamVjdCIsImlzQXJyYXkiLCJ0b0Fic29sdXRlSW5kZXgiLCJ0b0xlbmd0aCIsInRvSW5kZXhlZE9iamVjdCIsImNyZWF0ZVByb3BlcnR5Iiwid2VsbEtub3duU3ltYm9sIiwiYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwiSEFTX1NQRUNJRVNfU1VQUE9SVCIsIlVTRVNfVE9fTEVOR1RIIiwiQUNDRVNTT1JTIiwiMCIsIjEiLCJTUEVDSUVTIiwibmF0aXZlU2xpY2UiLCJtYXgiLCJNYXRoIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJzdGFydCIsImVuZCIsIkNvbnN0cnVjdG9yIiwicmVzdWx0IiwibiIsIk8iLCJsZW5ndGgiLCJrIiwiZmluIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiXSwibWFwcGluZ3MiOiJrSEFBQSx5QkFBbWxCLEVBQUcsRywyQ0NBdGxCLElBQUlBLEVBQVMsV0FBYSxJQUFJQyxFQUFJQyxLQUFTQyxFQUFHRixFQUFJRyxlQUFtQkMsRUFBR0osRUFBSUssTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxpQkFBaUIsQ0FBQ0YsRUFBRyxjQUFjLENBQUNHLE1BQU0sQ0FBQyxNQUFRLGdCQUFnQixLQUFNLEtBQVFILEVBQUcsTUFBTSxDQUFDRSxZQUFZLG1CQUFtQkUsWUFBWSxDQUFDLGdCQUFnQixTQUFTLENBQUNKLEVBQUcsTUFBTSxDQUFDSSxZQUFZLENBQUMsZ0JBQWdCLE9BQU8sTUFBUSxZQUFZLENBQUNKLEVBQUcsT0FBTyxDQUFDSSxZQUFZLENBQUMsTUFBUSxVQUFVLGNBQWMsUUFBUSxDQUFDUixFQUFJUyxHQUFHLFdBQVdMLEVBQUcsU0FBUyxDQUFDRSxZQUFZLEtBQUtDLE1BQU0sQ0FBQyxLQUFPLFdBQVdH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RUFBUUMsRUFBR0MsRUFBRUUsSUFFdkUsT0FEQUosRUFBT0csT0FBU0YsRUFDVEQiLCJmaWxlIjoianMvY2h1bmstMDg1ZjQ4YjQuZGZiYWJlYTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVzaW5lc3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDRjZTJiYmMmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVzaW5lc3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDRjZTJiYmMmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZGF0YS1idXNpbmVzc1wifSxbX2MoJ2RhdGEtaGVhZGVyJyx7YXR0cnM6e1widGl0bGVcIjpcIuaVsOaNruWtmOeuoeWfn+WGheS4muWKoeWfn+aOiOadg+euoeeQhlwiLFwiYnRuXCI6dHJ1ZX19KSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwYWRkaW5nIGJnLXdoaXRlXCIsc3RhdGljU3R5bGU6e1wibWFyZ2luLWJvdHRvbVwiOlwiMjBweFwifX0sW19jKCdkaXYnLHtzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxMHB4XCIsXCJjb2xvclwiOlwiIzI3M0Q1MlwifX0sW19jKCdzcGFuJyx7c3RhdGljU3R5bGU6e1wiY29sb3JcIjpcIiMyNzNENTJcIixcImZvbnQtd2VpZ2h0XCI6XCI2MDBcIn19LFtfdm0uX3YoXCLkuJrliqHln5/liJfooahcIildKSxfYygnQnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJmclwiLGF0dHJzOntcInR5cGVcIjpcInByaW1hcnlcIn0sb246e1wiY2xpY2tcIjpfdm0uYWRkRXN0YWJsaXNofX0sW192bS5fdihcIuWIm+W7uuS4muWKoeWfn1wiKV0pLF9jKCdUb29sdGlwJyx7YXR0cnM6e1wicGxhY2VtZW50XCI6XCJ0b3BcIixcIm1heC13aWR0aFwiOlwiNjAwXCIsXCJ0cmFuc2ZlclwiOlwiXCIsXCJjb250ZW50XCI6XCLlip/mlYjor7TmmI7vvJrlnKjigJzkuLvoioLngrnnvZHnu5zlh4blhaXlrqHmibnigJ3pgInmi6nigJzlvIDlkK/igJ3ml7bvvIzkuLvoioLngrnmnI3liqHlmajliJfooajkuK3nmoToioLngrnmnI3liqHlmajmiY3lj6/ku6XliqDlhaXpk77nmoToioLngrnnvZHnu5zjgIJcIn19LFtfYygnSWNvbicse2F0dHJzOntcInR5cGVcIjpcImlvcy1oZWxwLWNpcmNsZS1vdXRsaW5lXCJ9fSldLDEpXSwxKSxfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjpcIjdcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb25kaXRpb24taXRlbVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1sYWJlbFwifSxbX3ZtLl92KFwi5Lia5Yqh5Z+f5ZCN56ew77yaXCIpXSksX2MoJ0lucHV0Jyx7YXR0cnM6e1widHlwZVwiOlwidGV4dFwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+Whq+WGmVwifSxtb2RlbDp7dmFsdWU6KF92bS5mb3JtLm5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdil9LGV4cHJlc3Npb246XCJmb3JtLm5hbWVcIn19KV0sMSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOlwiOFwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1pdGVtXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY29uZGl0aW9uLWxhYmVsXCJ9LFtfdm0uX3YoXCLkuJrliqHln5/llK/kuIDmoIfor4bvvJpcIildKSxfYygnSW5wdXQnLHthdHRyczp7XCJ0eXBlXCI6XCJ0ZXh0XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+35aGr5YaZXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmZvcm0uYWRkcmVzcyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5mb3JtLCBcImFkZHJlc3NcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImZvcm0uYWRkcmVzc1wifX0pXSwxKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6XCI2XCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29uZGl0aW9uLWl0ZW1cIn0sW19jKCdCdXR0b24nLHtzdGF0aWNTdHlsZTp7XCJ3aWR0aFwiOlwiODBweFwifSxhdHRyczp7XCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6X3ZtLnNlYXJjaH19LFtfdm0uX3YoXCLmn6Xor6JcIildKV0sMSldKV0sMSksX2MoJ2RpdicsW19jKCdUYWJsZScse2F0dHJzOntcImNvbHVtbnNcIjpfdm0uY29sdW1ucyxcImxvYWRpbmdcIjpfdm0ubGlzdExvYWRpbmcsXCJkYXRhXCI6X3ZtLmxpc3R9fSldLDEpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2VcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2UtaW5uZXJcIn0sW19jKCdQYWdlJyx7YXR0cnM6e1wic2hvdy1zaXplclwiOlwiXCIsXCJ0b3RhbFwiOl92bS5wYWdlLnRvdGFsLFwiY3VycmVudFwiOl92bS5wYWdlLmN1cnJlbnR9LG9uOntcIm9uLWNoYW5nZVwiOl92bS5wYWdlQ2hhbmdlLFwib24tcGFnZS1zaXplLWNoYW5nZVwiOl92bS5zaXplQ2hhbmdlfX0pXSwxKV0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRhdGEtYnVzaW5lc3NcIj5cbiAgICA8ZGF0YS1oZWFkZXIgdGl0bGU9XCLmlbDmja7lrZjnrqHln5/lhoXkuJrliqHln5/mjojmnYPnrqHnkIZcIiA6YnRuPVwidHJ1ZVwiIC8+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicGFkZGluZyBiZy13aGl0ZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgIDxzcGFuPuS4muWKoeWfn+WIm+W7uuWuoeaJuTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiNlwiPlxuICAgICAgICAgICAg5Lia5Yqh5Z+f5Yib5bu65a6h5om577yaXG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiaW9zLWhlbHAtY2lyY2xlLW91dGxpbmVcIiAvPi0tPlxuICAgIDwhLS0gPFRvb2x0aXBcbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgdHJhbnNmZXJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImlvcy1oZWxwLWNpcmNsZS1vdXRsaW5lXCIgLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD4gLS0+XG4gICAgPCEtLSAgPC9Db2w+LS0+XG4gICAgPCEtLSDmlofku7bkv53lrZjlia/mnKzmlbDph48gLS0+XG4gICAgPCEtLSAgPENvbCA6c3Bhbj1cIjEwXCI+XG4gICAgICAgICAgICA8UmFkaW9Hcm91cCBjbGFzcz1cImFwcHJvdmFsXCIgdi1tb2RlbD1cIm15c3dpdGNoXCIgc3R5bGU9XCJ3aWR0aDogNTAlO1wiPlxuICAgICAgICAgICAgICA8Um93IHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICA8UmFkaW8gbGFiZWw9XCIxXCI+5byA5ZCvPC9SYWRpbz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgPFJhZGlvIGxhYmVsPVwiMFwiPuWFs+mXrTwvUmFkaW8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImZyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIiB0eXBlPVwicHJpbWFyeVwiPuS/ruaUuTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IC0tPlxuICAgIDwhLS0gPGRpdiBjbGFzcz1cImJnLXdoaXRlIHBhZGRpbmdcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7Y29sb3I6ICMzNzM3Mzc7XCI+XG4gICAgICA8c3Bhbj7mlbDmja7lrZjnrqHln5/liJvlu7rlrqHmibnvvJo8L3NwYW4+XG4gICAgICA8VG9vbHRpcFxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBtYXgtd2lkdGg9XCI2MDBcIlxuICAgICAgICB0cmFuc2ZlclxuICAgICAgICA8SWNvbiB0eXBlPVwiaW9zLWhlbHAtY2lyY2xlLW91dGxpbmVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgc3R5bGU9XCJtYXJnaW46IDAgMjBweDtcIlxuICAgICAgICB2LW1vZGVsPVwic3dpdGNoMVwiPlxuICAgICAgICA8UmFkaW8gbGFiZWw9XCIxXCI+5byA5ZCvPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvIGxhYmVsPVwiMFwiPuWFs+mXrTwvUmFkaW8+XG4gICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCI+5L+u5pS5PC9CdXR0b24+XG4gICAgPC9kaXY+LS0+XG4gICAgPGRpdiBjbGFzcz1cInBhZGRpbmcgYmctd2hpdGVcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtjb2xvcjogIzI3M0Q1MjtcIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzI3M0Q1Mjtmb250LXdlaWdodDogNjAwO1wiPuS4muWKoeWfn+WIl+ihqDwvc3Bhbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImFkZEVzdGFibGlzaFwiIGNsYXNzPVwiZnJcIj7liJvlu7rkuJrliqHln588L0J1dHRvbj5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgIG1heC13aWR0aD1cIjYwMFwiXG4gICAgICAgICAgdHJhbnNmZXJcbiAgICAgICAgICBjb250ZW50PSflip/mlYjor7TmmI7vvJrlnKjigJzkuLvoioLngrnnvZHnu5zlh4blhaXlrqHmibnigJ3pgInmi6nigJzlvIDlkK/igJ3ml7bvvIzkuLvoioLngrnmnI3liqHlmajliJfooajkuK3nmoToioLngrnmnI3liqHlmajmiY3lj6/ku6XliqDlhaXpk77nmoToioLngrnnvZHnu5zjgIInPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJpb3MtaGVscC1jaXJjbGUtb3V0bGluZVwiIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzcGFuPVwiN1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWl0ZW1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmRpdGlvbi1sYWJlbFwiPuS4muWKoeWfn+WQjeensO+8mjwvc3Bhbj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgcGxhY2Vob2xkZXI9XCLor7floavlhplcIj48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj1cIjhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvbi1pdGVtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb24tbGFiZWxcIj7kuJrliqHln5/llK/kuIDmoIfor4bvvJo8L3NwYW4+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0uYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwi6K+35aGr5YaZXCI+PC9JbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49XCI2XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24taXRlbVwiPlxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9XCJ3aWR0aDogODBweDtcIiBAY2xpY2s9XCJzZWFyY2hcIiB0eXBlPVwicHJpbWFyeVwiPuafpeivojwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxUYWJsZSA6Y29sdW1ucz1cImNvbHVtbnNcIiA6bG9hZGluZz1cImxpc3RMb2FkaW5nXCIgOmRhdGE9XCJsaXN0XCI+PC9UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaW5uZXJcIj5cbiAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgc2hvdy1zaXplclxuICAgICAgICAgICAgOnRvdGFsPVwicGFnZS50b3RhbFwiXG4gICAgICAgICAgICA6Y3VycmVudD1cInBhZ2UuY3VycmVudFwiXG4gICAgICAgICAgICBAb24tY2hhbmdlPVwicGFnZUNoYW5nZVwiXG4gICAgICAgICAgICBAb24tcGFnZS1zaXplLWNoYW5nZT1cInNpemVDaGFuZ2VcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicGFkZGluZyBiZy13aGl0ZSBjbGVhclwiPlxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7Y29sb3I6ICMyNzNENTI7XCIgY2xhc3M9XCJjbGVhclwiPlxuICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMjczRDUyO2ZvbnQtd2VpZ2h0OiA2MDA7XCI+5Yib5bu66K645Y+v5LyB5Lia5YiX6KGoPC9zcGFuPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgbWF4LXdpZHRoPVwiNjAwXCJcbiAgICAgICAgICB0cmFuc2ZlclxuICAgICAgICAgIDxJY29uIHR5cGU9XCJpb3MtaGVscC1jaXJjbGUtb3V0bGluZVwiIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49XCI2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmRpdGlvbi1sYWJlbFwiPuS8geS4muWQjeensO+8mjwvc3Bhbj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5LyB5Lia5ZCN56ewXCI+PC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj1cIjZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uZGl0aW9uLWxhYmVsXCI+5LyB5Lia6Lqr5Lu95qCH6K+G77yaPC9zcGFuPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLkvIHkuJrouqvku73moIfor4ZcIj48L0lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPVwiNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24taXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb24tbGFiZWxcIj7nirbmgIHvvJo8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0IHZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuWFqOmDqDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMVwiPuW3sua3u+WKoDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPuW3suWIoOmZpDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiM1wiPua3u+WKoOWuoeaguOS4rTwvT3B0aW9uPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiNFwiPuWIoOmZpOWuoeaguOS4rTwvT3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49XCI2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPVwid2lkdGg6IDgwcHg7XCIgdHlwZT1cInByaW1hcnlcIj7mn6Xor6I8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxUYWJsZSA6Y29sdW1ucz1cImNvbHVtbnMyXCIgOmRhdGE9XCJkYXRhMlwiPjwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWlubmVyXCI+XG4gICAgICAgICAgPFBhZ2UgOnRvdGFsPVwidG90YWxcIiBAb24tY2hhbmdlPVwicGFnZUNoYW5nZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4tLT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJ1xuLy8gaW1wb3J0ICogYXMgY0FwaSBmcm9tICdAL2h0dHAvYXBpJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuJrliqHln5/lkI3np7AnLFxuICAgICAgICBrZXk6ICdiaXpfbmFtZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Lia5Yqh5Z+f5ZSv5LiA5qCH6K+GJyxcbiAgICAgICAga2V5OiAnYml6X2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfliJvlu7rml7bpl7QnLFxuICAgICAgICBrZXk6ICdqb2luX3RpbWUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgICAgIHJlbmRlciAoaCwgcCkge1xuICAgICAgICAgIGxldCByb3cgPSBwLnJvdyB8fCB7fVxuICAgICAgICAgIC8vIGxldCBzdGF0dXMgPSByb3cuc3RhdHVzIHx8ICcnXG4gICAgICAgICAgLy8gbGV0IG9wdCA9IGgoJ2EnLCB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyB9KVxuICAgICAgICAgIGxldCBvcHQyID0gaCgnYScsIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrICgpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaW5kZXggPSBwLmluZGV4XG4gICAgICAgICAgICAgICAgLy8gbGV0IHsgbWFpbkFjdGl2ZSwgc2hvd0RhdGFTdWJtZW51LCBzaG93QnVzaW5lc3NTdWJtZW51IH0gPSB0aGF0LiRyb3V0ZS5xdWVyeVxuICAgICAgICAgICAgICAgIGxldCB7IHNob3dCdXNpbmVzc1N1Ym1lbnUgfSA9IHRoYXQuJHJvdXRlLnF1ZXJ5XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZmJzX2Jpel9pZCcsIHJvdy5iaXpfaWQpXG4gICAgICAgICAgICAgICAgdGhhdC4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1c2luZXNzLWRldGFpbCcsXG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBzaG93RGF0YVN1Ym1lbnU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0J1c2luZXNzU3VibWVudSxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkFjdGl2ZTogJ2J1c2luZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6ICcyJyxcbiAgICAgICAgICAgICAgICAgICAgc3ViQWN0aXZlOiAnYnVzaW5lc3MtZGV0YWlsJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn6K+m5oOFJylcbiAgICAgICAgICBsZXQgb3B0cyA9IFtvcHQyXVxuICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7fSwgb3B0cylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgICAvLyBsZXQgY29sdW1uczIgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiAn5LyB5Lia5ZCN56ewJyxcbiAgICAvLyAgICAga2V5OiAnbmFtZSdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiAn5LyB5Lia6Lqr5Lu95qCH6K+GJyxcbiAgICAvLyAgICAga2V5OiAnYWRkcmVzcydcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiAn5re75Yqg5pe26Ze0JyxcbiAgICAvLyAgICAga2V5OiAndGltZSdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRpdGxlOiAn54q25oCBJyxcbiAgICAvLyAgICAga2V5OiAnc3RhdHVzbGFiZWwnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgLy8gICAgIHdpZHRoOiAxMjAsXG4gICAgLy8gICAgIHJlbmRlciAoaCwgcCkge1xuICAgIC8vICAgICAgIGxldCByb3cgPSBwLnJvdyB8fCB7fVxuICAgIC8vICAgICAgIGxldCBsYWJlbCA9IHJvdy5zdGF0dXMgPT09ICcxJyA/ICfliKDpmaQnIDogJ+aSpOmUgCdcbiAgICAvLyAgICAgICBsYWJlbCA9IHJvdy5zdGF0dXMgPT09ICcwJyA/ICctLScgOiBsYWJlbFxuICAgIC8vICAgICAgIHJldHVybiBoKCdhJywge1xuICAgIC8vICAgICAgICAgb246IHtcbiAgICAvLyAgICAgICAgICAgY2xpY2sgKCkge1xuICAgIC8vICAgICAgICAgICAgIGxldCBpbmRleCA9IHAuaW5kZXhcbiAgICAvLyAgICAgICAgICAgICB0aGF0LmRhdGExLnNwbGljZShpbmRleCwgMSlcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH0sIGxhYmVsKVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gXVxuICAgIHJldHVybiB7XG4gICAgICBhY2NlcHRMaW1pdDogJzEvMycsXG4gICAgICBteXN3aXRjaDogJzEnLFxuICAgICAgYWRkTW9kYWw6IGZhbHNlLFxuICAgICAgbGlzdExvYWRpbmc6IGZhbHNlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIG9sZExpc3Q6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICdtZW1iZXJfaWQnOiAxLFxuICAgICAgICAvLyAgICdtZW1iZXJfYWRkcmVzcyc6ICcxJyxcbiAgICAgICAgLy8gICAnbWFpbl9jb21taXR0ZWVncm91cF9ncm91cF9pZCc6ICcxJyxcbiAgICAgICAgLy8gICAnam9pbl90aW1lJzogMTU5ODM0NTkyMzAwMCxcbiAgICAgICAgLy8gICAnbWVtYmVyX25hbWUnOiAn5ZCN56ewJ1xuICAgICAgICAvLyB9XG4gICAgICBdLFxuICAgICAgbGlzdDogW10sXG4gICAgICBwYWdlOiB7XG4gICAgICAgIHRvdGFsOiAxLFxuICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICBzaXplOiAxMFxuICAgICAgfSxcbiAgICAgIGZvcm06IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnXG4gICAgICB9LFxuICAgICAgc3dpdGNoMTogJzAnXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmluaXQoKVxuICB9LFxuICB3YXRjaDoge1xuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQgKCkge1xuICAgICAgdGhpcy5saXN0TG9hZGluZyA9IHRydWVcbiAgICAgIGFwaS5wYnFzYih7fSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbGRMaXN0ID0gcmVzLnJvd3NcbiAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gdGhpcy5vbGRMaXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5saXN0TG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyLnJldE1zZylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvayAoKSB7XG5cbiAgICB9LFxuICAgIGNhbmNlbCAoKSB7XG5cbiAgICB9LFxuICAgIHNlYXJjaCAoKSB7fSxcbiAgICBhZGRFc3RhYmxpc2ggKCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9kYXRhLWJ1c2VzdGFibGlzaCcpXG4gICAgfSxcbiAgICBnZXRMaXN0ICgpIHtcbiAgICAgIHRoaXMubGlzdCA9IHRoaXMub2xkTGlzdC5zbGljZSgodGhpcy5wYWdlLmN1cnJlbnQgLSAxKSAqIHRoaXMucGFnZS5zaXplLCB0aGlzLnBhZ2Uuc2l6ZSAqIHRoaXMucGFnZS5jdXJyZW50KVxuICAgIH0sXG4gICAgc2l6ZUNoYW5nZSAoc2l6ZSkge1xuICAgICAgdGhpcy5wYWdlLmN1cnJlbnQgPSAxXG4gICAgICB0aGlzLnBhZ2Uuc2l6ZSA9IHNpemVcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfSxcbiAgICAvLyDliIbpobVcbiAgICBwYWdlQ2hhbmdlIChwYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCA9IHBhZ2VcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuICAuYXBwcm92YWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICYgPiBkaXYge1xuICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgfVxuICB9XG4gIC5sZWFndWUtbWVtIHtcbiAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzI3M0Q1MjtcbiAgICB9XG4gICAgLmZyIHtcbiAgICAgIGNvbG9yOiAjNjA5NEZGO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MDk0RkY7XG4gICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgLmFkZC1tb2RhbC1ib2R5IHtcbiAgICAmID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxuICAuY29uZGl0aW9uLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNvbmRpdGlvbi1sYWJlbCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB9XG4gICAgLml2dS1pbnB1dC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5pdnUtc2VsZWN0IHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXNpbmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVzaW5lc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9idXNpbmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDRjZTJiYmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYnVzaW5lc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9idXNpbmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnVzaW5lc3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDRjZTJiYmMmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNGNlMmJiY1wiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCByZXF1ZXN0IGZyb20gJ0AvaHR0cCdcbi8vIOaVsOaNruWtmOeuoeWfn+euoeeQhlxuZXhwb3J0IGNvbnN0IHBicXNzID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxc3MuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDkuJrliqHln59cbmV4cG9ydCBjb25zdCBwYnFzYiA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXNiLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5pWw5o2u5a2Y566h5Z+fLeWfn+euoeeQhuWRmFxuZXhwb3J0IGNvbnN0IHBicW1sID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxbWwuZG8nLCBwYXJhbXMsIG9wdHMpXG5leHBvcnQgY29uc3QgcGJxcm0gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFybS5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3oioLngrnlh4blhaUt5YeG5YWl6IqC54K55pyN5Yqh5Zmo5YiX6KGoXG5leHBvcnQgY29uc3QgcGJxYW4gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFhbi5kbycsIHBhcmFtcywgb3B0cylcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzbGljZScsIHsgQUNDRVNTT1JTOiB0cnVlLCAwOiAwLCAxOiAyIH0pO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIG5hdGl2ZVNsaWNlID0gW10uc2xpY2U7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQ29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IGlzQXJyYXkoQ29uc3RydWN0b3IucHJvdG90eXBlKSkpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yW1NQRUNJRVNdO1xuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9