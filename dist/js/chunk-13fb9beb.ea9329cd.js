(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13fb9beb"],{"11ac":function(t,e,i){"use strict";i.d(e,"d",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r})),i.d(e,"f",(function(){return c})),i.d(e,"g",(function(){return d})),i.d(e,"h",(function(){return u}));var n=i("db04"),a=function(t,e){return n["a"].post("cmw/pbqbl.do",t,e)},s=function(t,e){return n["a"].post("cmw/pbqbd.do",t,e)},o=function(t,e){return n["a"].post("cmw/pbqbi.do",t,e)},r=function(t,e){return n["a"].post("cmw/pbqbc.do",t,e)},c=function(t,e){return n["a"].post("cmw/pbqml.do",t,e)},d=function(t,e){return n["a"].post("cmw/pbqrc.do",t,e)},u=function(t,e){return n["a"].post("cmw/pbqrm.do",t,e)}},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),s=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),d=i("8418"),u=i("1dde"),l=i("ae40"),f=u("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,m=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var i,n,u,l,f,p,v=r(this),_=o(v.length),w=a(t,_),y=arguments.length;if(0===y?i=n=0:1===y?(i=0,n=_-w):(i=y-2,n=m(g(s(e),0),_-w)),_+i-n>b)throw TypeError(h);for(u=c(v,n),l=0;l<n;l++)f=w+l,f in v&&d(u,l,v[f]);if(u.length=n,i<n){for(l=w;l<_-n;l++)f=l+n,p=l+i,f in v?v[p]=v[f]:delete v[p];for(l=_;l>_-n+i;l--)delete v[l-1]}else if(i>n)for(l=_-n;l>w;l--)f=l+n-1,p=l+i-1,f in v?v[p]=v[f]:delete v[p];for(l=0;l<i;l++)v[l+w]=arguments[l+2];return v.length=_-n+i,u}})},dd5b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"business"},[i("chain-header",{attrs:{title:"业务域管理"}}),i("div",{staticClass:"bg-white padding"},[i("div",{staticClass:"section-title clear"},[i("span",[t._v("业务域列表")]),i("div",{staticClass:"fr float-right",staticStyle:{"margin-top":"-5px"}},[i("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("连接业务域")])],1)]),i("div",[i("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),i("div",{staticClass:"page"},[i("div",{staticClass:"page-inner"},[i("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)]),i("Modal",{attrs:{title:"连接业务域"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[i("div",{staticClass:"add-modal-body"},[i("div",[i("p",{staticStyle:{"margin-bottom":"15px"}},[t._v("业务域唯一标识：")]),i("Input",{attrs:{placeholder:"请输入要连接的链实例中的业务域唯一标识"},model:{value:t.businame,callback:function(e){t.businame=e},expression:"businame"}})],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("连接")]),i("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},a=[],s=(i("fb6a"),i("a434"),i("5530")),o=i("11ac"),r={data:function(){var t=this,e=[{title:"业务域名称",key:"biz_name",width:130},{title:"业务域唯一标识",width:150,key:"biz_id"},{title:"隶属数据存管域名称",key:"main_storage_storage_name"},{title:"隶属数据存管域ID",key:"main_storage_storage_id"},{title:"创建时间",width:160,key:"join_time",render:function(e,i){var n=i.row;return n.join_time?e("span",t.$moment.unix(n.join_time/1e3).format("YYYY-MM-DD HH:mm:ss")):e("span","--")}},{title:"操作",width:180,render:function(e,i){var n=i.row||{},a=n.type,o=e("a",{on:{click:function(){t.$Modal.confirm({title:"提示",content:"确定断开链接么？"})}}},"断开联接"),r=e("a",{on:{click:function(){var e=t.$route.query.showDataSubmenu;sessionStorage.setItem("fbs_biz_id",n.biz_id);var i=Object(s["a"])(Object(s["a"])({},n),{},{biz_id_format:t.formatId(n.biz_id),main_storage_storage_id_format:t.formatId(n.main_storage_storage_id),join_time_format:n.join_time?t.$moment.unix(n.join_time/1e3).format("YYYY-MM-DD HH:mm:ss"):"--"});sessionStorage.setItem("fbs_biz",JSON.stringify(i)),t.$router.push({name:"business-detail",query:{mainActive:"business",activeIndex:"2",subActive:"business-detail",showDataSubmenu:e,showBusinessSubmenu:"1"}})}}},"详情"),c=e("a",{on:{click:function(){var e=i.index;t.data1.splice(e,1)}}},"删除"),d=[o];switch(a){case"1":d.push(r);break;case"2":d.push(r);break;case"4":d.push(r),d.push(c);break;default:break}return e("div",{class:"opt-btns"},[r])}}];return{listLoading:!1,columns:e,oldList:[],list:[],page:{total:1,current:1,size:10},addModal:!1,addLoading:!1,businame:""}},mounted:function(){this.init()},watch:{},computed:{},methods:{formatId:function(t){if(!t)return"--";var e=t.length,i=t.substring(0,6),n=t.substring(e-6,e);return i+"....."+n},init:function(){var t=this;this.listLoading=!0,o["d"]({address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},ok:function(){},cancel:function(){},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},c=r,d=i("2877"),u=Object(d["a"])(c,n,a,!1,null,"7378d3bd",null);e["default"]=u.exports},fb6a:function(t,e,i){"use strict";var n=i("23e7"),a=i("861d"),s=i("e8b5"),o=i("23cb"),r=i("50c4"),c=i("fc6a"),d=i("8418"),u=i("b622"),l=i("1dde"),f=i("ae40"),p=l("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),b=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var i,n,u,l=c(this),f=r(l.length),p=o(t,f),g=o(void 0===e?f:e,f);if(s(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?a(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return b.call(l,p,g);for(n=new(void 0===i?Array:i)(h(g-p,0)),u=0;p<g;p++,u++)p in l&&d(n,u,l[p]);return n.length=u,n}})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc3BsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9pbmRleC52dWU/NDU0YyIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvaW5kZXgudnVlPzI3YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sIm5hbWVzIjpbInBicWJsIiwicGFyYW1zIiwib3B0cyIsInJlcXVlc3QiLCJwb3N0IiwicGJxYmQiLCJwYnFiaSIsInBicWJjIiwicGJxbWwiLCJwYnFyYyIsInBicXJtIiwiJCIsInRvQWJzb2x1dGVJbmRleCIsInRvSW50ZWdlciIsInRvTGVuZ3RoIiwidG9PYmplY3QiLCJhcnJheVNwZWNpZXNDcmVhdGUiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQiLCJhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCIsIkhBU19TUEVDSUVTX1NVUFBPUlQiLCJVU0VTX1RPX0xFTkdUSCIsIkFDQ0VTU09SUyIsIjAiLCIxIiwibWF4IiwiTWF0aCIsIm1pbiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJzcGxpY2UiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiaW5zZXJ0Q291bnQiLCJhY3R1YWxEZWxldGVDb3VudCIsIkEiLCJrIiwiZnJvbSIsInRvIiwiTyIsInRoaXMiLCJsZW4iLCJsZW5ndGgiLCJhY3R1YWxTdGFydCIsImFyZ3VtZW50c0xlbmd0aCIsImFyZ3VtZW50cyIsIlR5cGVFcnJvciIsIl92bSIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl92Iiwic3RhdGljU3R5bGUiLCJvbiIsIiRldmVudCIsImFkZE1vZGFsIiwiY29sdW1ucyIsImxpc3RMb2FkaW5nIiwibGlzdCIsInBhZ2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJwYWdlQ2hhbmdlIiwic2l6ZUNoYW5nZSIsIm9rIiwiY2FuY2VsIiwibW9kZWwiLCJ2YWx1ZSIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsImJ1c2luYW1lIiwic2xvdCIsImFkZExvYWRpbmciLCJzdGF0aWNSZW5kZXJGbnMiLCJkYXRhIiwicHVzaCIsIm9wdDIiLCJvcHQzIiwib2xkTGlzdCIsInNpemUiLCJtb3VudGVkIiwiaW5pdCIsIndhdGNoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybWF0SWQiLCJpZCIsImZpc3RTdHIiLCJsYXN0U3RyIiwiYXBpIiwiYWRkcmVzcyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImdldExpc3QiLCJzbGljZSIsImNvbXBvbmVudCIsImlzT2JqZWN0IiwiaXNBcnJheSIsInRvSW5kZXhlZE9iamVjdCIsIndlbGxLbm93blN5bWJvbCIsIlNQRUNJRVMiLCJuYXRpdmVTbGljZSIsImVuZCIsIkNvbnN0cnVjdG9yIiwicmVzdWx0IiwibiIsImZpbiIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoia0hBQUEsOFBBRWFBLEVBQVEsU0FBQ0MsRUFBUUMsR0FBVCxPQUFrQkMsT0FBUUMsS0FBSyxlQUFnQkgsRUFBUUMsSUFFL0RHLEVBQVEsU0FBQ0osRUFBUUMsR0FBVCxPQUFrQkMsT0FBUUMsS0FBSyxlQUFnQkgsRUFBUUMsSUFFL0RJLEVBQVEs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WUgsR0FDTixPQUFoQkcsSUFBc0JBLE9BQWNJLElBSHhDSixPQUFjSSxFQUtaSixJQUFnQk0sWUFBeUJGLElBQWhCSixHQUMzQixPQUFPRixFQUFZVSxLQUFLNUUsRUFBR0gsRUFBRzBFLEdBSWxDLElBREFGLEVBQVMsU0FBcUJHLElBQWhCSixFQUE0Qk0sTUFBUU4sR0FBYXJGLEVBQUl3RixFQUFNMUUsRUFBRyxJQUN2RXlFLEVBQUksRUFBR3pFLEVBQUkwRSxFQUFLMUUsSUFBS3lFLElBQVN6RSxLQUFLRyxHQUFHekIsRUFBZThGLEVBQVFDLEVBQUd0RSxFQUFFSCxJQUV2RSxPQURBd0UsRUFBT2xFLE9BQVNtRSxFQUNURCIsImZpbGUiOiJqcy9jaHVuay0xM2ZiOWJlYi5lYTkzMjljZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ0AvaHR0cCdcbi8vIOS4muWKoeWfn+euoeeQhlxuZXhwb3J0IGNvbnN0IHBicWJsID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxYmwuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDmlbDmja7lrZjnrqHln58t5Lia5Yqh5Z+f6K+m5oOFXG5leHBvcnQgY29uc3QgcGJxYmQgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFiZC5kbycsIHBhcmFtcywgb3B0cylcbi8vIOS4muWKoeWfny3mlbDmja7mk43kvZzop4TliJlcbmV4cG9ydCBjb25zdCBwYnFiaSA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWJpLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5Lia5Yqh5Z+fLeWQiOe6puayu+eQhlxuZXhwb3J0IGNvbnN0IHBicWJjID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxYmMuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t6IGU55uf5aeU5ZGY5LyaLeiBlOebn+WnlOWRmOWGs+iuruWuoeaJueinhOWImSrogZTnm5/lp5TlkZjkvJrmiJDlkZgqKlxuZXhwb3J0IGNvbnN0IHBicW1sID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxbWwuZG8nLCBwYXJhbXMsIG9wdHMpXG5leHBvcnQgY29uc3QgcGJxcmMgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFyYy5kbycsIHBhcmFtcywgb3B0cylcbmV4cG9ydCBjb25zdCBwYnFybSA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXJtLmRvJywgcGFyYW1zLCBvcHRzKVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc3BsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc3BsaWNlJywgeyBBQ0NFU1NPUlM6IHRydWUsIDA6IDAsIDE6IDIgfSk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBsZW5ndGggZXhjZWVkZWQnO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNwbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc3BsaWNlXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50IC8qICwgLi4uaXRlbXMgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGFjdHVhbFN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRDb3VudCwgYWN0dWFsRGVsZXRlQ291bnQsIEEsIGssIGZyb20sIHRvO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIGluc2VydENvdW50ID0gYWN0dWFsRGVsZXRlQ291bnQgPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IDA7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IGxlbiAtIGFjdHVhbFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFyZ3VtZW50c0xlbmd0aCAtIDI7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IG1pbihtYXgodG9JbnRlZ2VyKGRlbGV0ZUNvdW50KSwgMCksIGxlbiAtIGFjdHVhbFN0YXJ0KTtcbiAgICB9XG4gICAgaWYgKGxlbiArIGluc2VydENvdW50IC0gYWN0dWFsRGVsZXRlQ291bnQgPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0xFTkdUSF9FWENFRURFRCk7XG4gICAgfVxuICAgIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgYWN0dWFsRGVsZXRlQ291bnQpO1xuICAgIGZvciAoayA9IDA7IGsgPCBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICBmcm9tID0gYWN0dWFsU3RhcnQgKyBrO1xuICAgICAgaWYgKGZyb20gaW4gTykgY3JlYXRlUHJvcGVydHkoQSwgaywgT1tmcm9tXSk7XG4gICAgfVxuICAgIEEubGVuZ3RoID0gYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgaWYgKGluc2VydENvdW50IDwgYWN0dWFsRGVsZXRlQ291bnQpIHtcbiAgICAgIGZvciAoayA9IGFjdHVhbFN0YXJ0OyBrIDwgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xuICAgICAgICBmcm9tID0gayArIGFjdHVhbERlbGV0ZUNvdW50O1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudDtcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICAgIH1cbiAgICAgIGZvciAoayA9IGxlbjsgayA+IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQ7IGstLSkgZGVsZXRlIE9bayAtIDFdO1xuICAgIH0gZWxzZSBpZiAoaW5zZXJ0Q291bnQgPiBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsgPiBhY3R1YWxTdGFydDsgay0tKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxO1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudCAtIDE7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoayA9IDA7IGsgPCBpbnNlcnRDb3VudDsgaysrKSB7XG4gICAgICBPW2sgKyBhY3R1YWxTdGFydF0gPSBhcmd1bWVudHNbayArIDJdO1xuICAgIH1cbiAgICBPLmxlbmd0aCA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQ7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYnVzaW5lc3NcIn0sW19jKCdjaGFpbi1oZWFkZXInLHthdHRyczp7XCJ0aXRsZVwiOlwi5Lia5Yqh5Z+f566h55CGXCJ9fSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYmctd2hpdGUgcGFkZGluZ1wifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic2VjdGlvbi10aXRsZSBjbGVhclwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLkuJrliqHln5/liJfooahcIildKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJmciBmbG9hdC1yaWdodFwiLHN0YXRpY1N0eWxlOntcIm1hcmdpbi10b3BcIjpcIi01cHhcIn19LFtfYygnQnV0dG9uJyx7c3RhdGljU3R5bGU6e1wibWFyZ2luLWxlZnRcIjpcIjI0cHhcIn0sYXR0cnM6e1widHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmFkZE1vZGFsID0gdHJ1ZX19fSxbX3ZtLl92KFwi6L+e5o6l5Lia5Yqh5Z+fXCIpXSldLDEpXSksX2MoJ2RpdicsW19jKCdUYWJsZScse2F0dHJzOntcImNvbHVtbnNcIjpfdm0uY29sdW1ucyxcImxvYWRpbmdcIjpfdm0ubGlzdExvYWRpbmcsXCJkYXRhXCI6X3ZtLmxpc3R9fSldLDEpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2VcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBhZ2UtaW5uZXJcIn0sW19jKCdQYWdlJyx7YXR0cnM6e1wic2hvdy1zaXplclwiOlwiXCIsXCJ0b3RhbFwiOl92bS5wYWdlLnRvdGFsLFwiY3VycmVudFwiOl92bS5wYWdlLmN1cnJlbnR9LG9uOntcIm9uLWNoYW5nZVwiOl92bS5wYWdlQ2hhbmdlLFwib24tcGFnZS1zaXplLWNoYW5nZVwiOl92bS5zaXplQ2hhbmdlfX0pXSwxKV0pLF9jKCdNb2RhbCcse2F0dHJzOntcInRpdGxlXCI6XCLov57mjqXkuJrliqHln59cIn0sb246e1wib24tb2tcIjpfdm0ub2ssXCJvbi1jYW5jZWxcIjpfdm0uY2FuY2VsfSxtb2RlbDp7dmFsdWU6KF92bS5hZGRNb2RhbCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5hZGRNb2RhbD0kJHZ9LGV4cHJlc3Npb246XCJhZGRNb2RhbFwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFkZC1tb2RhbC1ib2R5XCJ9LFtfYygnZGl2JyxbX2MoJ3AnLHtzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxNXB4XCJ9fSxbX3ZtLl92KFwi5Lia5Yqh5Z+f5ZSv5LiA5qCH6K+G77yaXCIpXSksX2MoJ0lucHV0Jyx7YXR0cnM6e1wicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpeimgei/nuaOpeeahOmTvuWunuS+i+S4reeahOS4muWKoeWfn+WUr+S4gOagh+ivhlwifSxtb2RlbDp7dmFsdWU6KF92bS5idXNpbmFtZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5idXNpbmFtZT0kJHZ9LGV4cHJlc3Npb246XCJidXNpbmFtZVwifX0pXSwxKV0pLF9jKCdkaXYnLHthdHRyczp7XCJzbG90XCI6XCJmb290ZXJcIn0sc2xvdDpcImZvb3RlclwifSxbX2MoJ0J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xlYXJCdG5cIixhdHRyczp7XCJsb2FkaW5nXCI6X3ZtLmFkZExvYWRpbmcsXCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6X3ZtLm9rfX0sW192bS5fdihcIui/nuaOpVwiKV0pLF9jKCdCdXR0b24nLHtzdGF0aWNDbGFzczpcImNsZWFyQnRuXCIsc3RhdGljU3R5bGU6e1wid2lkdGhcIjpcIjgwcHhcIn0sb246e1wiY2xpY2tcIjpfdm0uY2FuY2VsfX0sW192bS5fdihcIuWPlua2iFwiKV0pXSwxKV0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ1c2luZXNzXCI+XG4gICAgPGNoYWluLWhlYWRlciB0aXRsZT1cIuS4muWKoeWfn+euoeeQhlwiIC8+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHBhZGRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlIGNsZWFyXCI+XG4gICAgICAgIDxzcGFuPuS4muWKoeWfn+WIl+ihqDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZyIGZsb2F0LXJpZ2h0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAtNXB4O1wiPlxuICAgICAgICAgIDwhLS0gPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPuWIm+W7uuS4muWKoeWfnzwvQnV0dG9uPiAtLT5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWRkTW9kYWwgPSB0cnVlIFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDI0cHg7XCI+6L+e5o6l5Lia5Yqh5Z+fPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VGFibGUgOmNvbHVtbnM9XCJjb2x1bW5zXCIgOmxvYWRpbmc9XCJsaXN0TG9hZGluZ1wiIDpkYXRhPVwibGlzdFwiPjwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWlubmVyXCI+XG4gICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgIHNob3ctc2l6ZXJcbiAgICAgICAgICAgIDp0b3RhbD1cInBhZ2UudG90YWxcIlxuICAgICAgICAgICAgOmN1cnJlbnQ9XCJwYWdlLmN1cnJlbnRcIlxuICAgICAgICAgICAgQG9uLWNoYW5nZT1cInBhZ2VDaGFuZ2VcIlxuICAgICAgICAgICAgQG9uLXBhZ2Utc2l6ZS1jaGFuZ2U9XCJzaXplQ2hhbmdlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIHYtbW9kZWw9XCJhZGRNb2RhbFwiXG4gICAgICAgIHRpdGxlPVwi6L+e5o6l5Lia5Yqh5Z+fXCJcbiAgICAgICAgQG9uLW9rPVwib2tcIlxuICAgICAgICBAb24tY2FuY2VsPVwiY2FuY2VsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtbW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxkaXY+PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjE1cHg7XCI+5Lia5Yqh5Z+f5ZSv5LiA5qCH6K+G77yaPC9wPjxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeimgei/nuaOpeeahOmTvuWunuS+i+S4reeahOS4muWKoeWfn+WUr+S4gOagh+ivhlwiIHYtbW9kZWw9XCJidXNpbmFtZVwiIC8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIDpsb2FkaW5nPVwiYWRkTG9hZGluZ1wiIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9J2NsZWFyQnRuJyBAY2xpY2s9XCJva1wiID7ov57mjqU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPVwid2lkdGg6ODBweDtcIiBjbGFzcz0nY2xlYXJCdG4nIEBjbGljaz1cImNhbmNlbFwiID7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSdcbi8vIGltcG9ydCAqIGFzIGNBcGkgZnJvbSAnQC9odHRwL2FwaSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgLy8ge1xuICAgIC8vICAgXCJiaXpfaWRcIjogXCIxXCIsICAgIC8vIOS4muWKoeWfn+WUr+S4gOagh+ivhu+8iOS4muWKoeWfn2lk77yJXG4gICAgLy8gICBcIm1haW5fc3RvcmFnZV9zdG9yYWdlX2lkXCI6IFwiMVwiLCAvLyDpmrblsZ7mlbDmja7lrZjnrqHln59JRFxuICAgIC8vICAgXCJtYWluX3N0b3JhZ2Vfc3RvcmFnZV9uYW1lXCI6YWFcIlwiLCAvL+matuWxnuaVsOaNruWtmOeuoeWfn+WQjeensFxuICAgIC8vICAgXCJiaXpfbmFtZVwiOiBcIuS4muWKoeWfn+WQjeensFwiLFx0XHRcdC8vIOS4muWKoeWfn+WQjeensFxuICAgIC8vICAgXCJydWxlXCI6IDMwMCxcbiAgICAvLyAgIFwiaW5mb3JtYXRpb25cIjogXCLmnprkuL7mmoLnvLpcIixcbiAgICAvLyAgIFwiZmlsZV9wZXJtaXNzaW9uXCI6IFwi5p6a5Li+5pqC57y6XCIsXG4gICAgLy8gICBcImpvaW5fdGltZVwiOiAxNTk5NzA0MTU0MDAwXHRcdFx0XHQvL+WIm+W7uuaXtumXtFxuICAgIC8vIH1cbiAgICBsZXQgY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuJrliqHln5/lkI3np7AnLFxuICAgICAgICBrZXk6ICdiaXpfbmFtZScsXG4gICAgICAgIHdpZHRoOiAxMzBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Lia5Yqh5Z+f5ZSv5LiA5qCH6K+GJyxcbiAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAga2V5OiAnYml6X2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfpmrblsZ7mlbDmja7lrZjnrqHln5/lkI3np7AnLFxuICAgICAgICBrZXk6ICdtYWluX3N0b3JhZ2Vfc3RvcmFnZV9uYW1lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfpmrblsZ7mlbDmja7lrZjnrqHln59JRCcsXG4gICAgICAgIGtleTogJ21haW5fc3RvcmFnZV9zdG9yYWdlX2lkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfliJvlu7rml7bpl7QnLFxuICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICBrZXk6ICdqb2luX3RpbWUnLFxuICAgICAgICByZW5kZXIgKGgsIHApIHtcbiAgICAgICAgICBsZXQgcm93ID0gcC5yb3dcbiAgICAgICAgICBpZiAoIXJvdy5qb2luX3RpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBoKCdzcGFuJywgJy0tJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGgoJ3NwYW4nLCB0aGF0LiRtb21lbnQudW5peChyb3cuam9pbl90aW1lIC8gMTAwMCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICB0aXRsZTogJ+eKtuaAgScsXG4gICAgICAvLyAgIGtleTogJ3N0YXR1cycsXG4gICAgICAvLyAgIHdpZHRoOiAxMTBcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5pON5L2cJyxcbiAgICAgICAgd2lkdGg6IDE4MCxcbiAgICAgICAgcmVuZGVyIChoLCBwKSB7XG4gICAgICAgICAgLy8gbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgIGxldCByb3cgPSBwLnJvdyB8fCB7fVxuICAgICAgICAgIGxldCB0eXBlID0gcm93LnR5cGVcbiAgICAgICAgICBsZXQgb3B0MSA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgdGhhdC4kTW9kYWwuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu5a6a5pat5byA6ZO+5o6l5LmI77yfJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn5pat5byA6IGU5o6lJylcbiAgICAgICAgICBsZXQgb3B0MiA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgICAgICAgIC8vIGxldCB7IG1haW5BY3RpdmUsIHNob3dEYXRhU3VibWVudSwgc2hvd0J1c2luZXNzU3VibWVudSB9ID0gdGhhdC4kcm91dGUucXVlcnlcbiAgICAgICAgICAgICAgICBsZXQgeyBzaG93RGF0YVN1Ym1lbnUgfSA9IHRoYXQuJHJvdXRlLnF1ZXJ5XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZmJzX2Jpel9pZCcsIHJvdy5iaXpfaWQpXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdEJpeiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgICAgICAgIGJpel9pZF9mb3JtYXQ6IHRoYXQuZm9ybWF0SWQocm93LmJpel9pZCksXG4gICAgICAgICAgICAgICAgICBtYWluX3N0b3JhZ2Vfc3RvcmFnZV9pZF9mb3JtYXQ6IHRoYXQuZm9ybWF0SWQocm93Lm1haW5fc3RvcmFnZV9zdG9yYWdlX2lkKSxcbiAgICAgICAgICAgICAgICAgIGpvaW5fdGltZV9mb3JtYXQ6IHJvdy5qb2luX3RpbWUgPyB0aGF0LiRtb21lbnQudW5peChyb3cuam9pbl90aW1lIC8gMTAwMCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykgOiAnLS0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Zic19iaXonLCBKU09OLnN0cmluZ2lmeShmb3JtYXRCaXopKVxuICAgICAgICAgICAgICAgIHRoYXQuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXNpbmVzcy1kZXRhaWwnLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYml6X2lkOiByb3cuYml6X2lkLFxuICAgICAgICAgICAgICAgICAgICBtYWluQWN0aXZlOiAnYnVzaW5lc3MnLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogJzInLFxuICAgICAgICAgICAgICAgICAgICBzdWJBY3RpdmU6ICdidXNpbmVzcy1kZXRhaWwnLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGF0YVN1Ym1lbnUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dCdXNpbmVzc1N1Ym1lbnU6ICcxJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn6K+m5oOFJylcbiAgICAgICAgICBsZXQgb3B0MyA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgICAgICAgIHRoYXQuZGF0YTEuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgJ+WIoOmZpCcpXG4gICAgICAgICAgbGV0IG9wdHMgPSBbb3B0MV1cbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgb3B0cy5wdXNoKG9wdDMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdC1idG5zJ1xuICAgICAgICAgIH0sIFtvcHQyXSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgXVxuICAgIHJldHVybiB7XG4gICAgICBsaXN0TG9hZGluZzogZmFsc2UsXG4gICAgICBjb2x1bW5zLFxuICAgICAgb2xkTGlzdDogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgJ21lbWJlcl9pZCc6IDEsXG4gICAgICAgIC8vICAgJ21lbWJlcl9hZGRyZXNzJzogJzEnLFxuICAgICAgICAvLyAgICdtYWluX2NvbW1pdHRlZWdyb3VwX2dyb3VwX2lkJzogJzEnLFxuICAgICAgICAvLyAgICdqb2luX3RpbWUnOiAxNTk4MzQ1OTIzMDAwLFxuICAgICAgICAvLyAgICdtZW1iZXJfbmFtZSc6ICflkI3np7AnXG4gICAgICAgIC8vIH1cbiAgICAgIF0sXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgdG90YWw6IDEsXG4gICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgIHNpemU6IDEwXG4gICAgICB9LFxuICAgICAgYWRkTW9kYWw6IGZhbHNlLFxuICAgICAgYWRkTG9hZGluZzogZmFsc2UsXG4gICAgICBidXNpbmFtZTogJydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH0sXG4gIHdhdGNoOiB7XG5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZm9ybWF0SWQgKGlkKSB7XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybiAnLS0nXG4gICAgICB9XG4gICAgICBsZXQgc3RyaW5nbGVuZ3RoID0gaWQubGVuZ3RoXG4gICAgICBsZXQgZmlzdFN0ciA9IGlkLnN1YnN0cmluZygwLCA2KVxuICAgICAgbGV0IGxhc3RTdHIgPSBpZC5zdWJzdHJpbmcoc3RyaW5nbGVuZ3RoIC0gNiwgc3RyaW5nbGVuZ3RoKVxuICAgICAgcmV0dXJuIGZpc3RTdHIgKyAnLi4uLi4nICsgbGFzdFN0clxuICAgIH0sXG4gICAgaW5pdCAoKSB7XG4gICAgICB0aGlzLmxpc3RMb2FkaW5nID0gdHJ1ZVxuICAgICAgYXBpLnBicWJsKHtcbiAgICAgICAgYWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZmJzX2FkZHJlc3MnKVxuICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbGRMaXN0ID0gcmVzLnJvd3NcbiAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gdGhpcy5vbGRMaXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5saXN0TG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyLnJldE1zZylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvayAoKSB7XG5cbiAgICB9LFxuICAgIGNhbmNlbCAoKSB7XG5cbiAgICB9LFxuICAgIGdldExpc3QgKCkge1xuICAgICAgdGhpcy5saXN0ID0gdGhpcy5vbGRMaXN0LnNsaWNlKCh0aGlzLnBhZ2UuY3VycmVudCAtIDEpICogdGhpcy5wYWdlLnNpemUsIHRoaXMucGFnZS5zaXplICogdGhpcy5wYWdlLmN1cnJlbnQpXG4gICAgfSxcbiAgICBzaXplQ2hhbmdlIChzaXplKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCA9IDFcbiAgICAgIHRoaXMucGFnZS5zaXplID0gc2l6ZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9LFxuICAgIC8vIOWIhumhtVxuICAgIHBhZ2VDaGFuZ2UgKHBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS5jdXJyZW50ID0gcGFnZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Mzc4ZDNiZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzM3OGQzYmRcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==