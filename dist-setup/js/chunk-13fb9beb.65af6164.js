(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13fb9beb"],{"11ac":function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r})),i.d(e,"e",(function(){return c}));var a=i("db04"),n=function(t,e){return a["a"].post("cmw/pbqbl.do",t,e)},s=function(t,e){return a["a"].post("cmw/pbqbd.do",t,e)},o=function(t,e){return a["a"].post("cmw/pbqbi.do",t,e)},r=function(t,e){return a["a"].post("cmw/pbqbc.do",t,e)},c=function(t,e){return a["a"].post("cmw/pbqml.do",t,e)}},a434:function(t,e,i){"use strict";var a=i("23e7"),n=i("23cb"),s=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),l=i("8418"),d=i("1dde"),u=i("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var i,a,d,u,p,f,v=r(this),w=o(v.length),y=n(t,w),k=arguments.length;if(0===k?i=a=0:1===k?(i=0,a=w-y):(i=k-2,a=g(h(s(e),0),w-y)),w+i-a>b)throw TypeError(m);for(d=c(v,a),u=0;u<a;u++)p=y+u,p in v&&l(d,u,v[p]);if(d.length=a,i<a){for(u=y;u<w-a;u++)p=u+a,f=u+i,p in v?v[f]=v[p]:delete v[f];for(u=w;u>w-a+i;u--)delete v[u-1]}else if(i>a)for(u=w-a;u>y;u--)p=u+a-1,f=u+i-1,p in v?v[f]=v[p]:delete v[f];for(u=0;u<i;u++)v[u+y]=arguments[u+2];return v.length=w-a+i,d}})},dd5b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"business"},[i("chain-header",{attrs:{title:"业务域管理"}}),i("div",{staticClass:"bg-white padding"},[i("div",{staticClass:"section-title clear"},[i("span",[t._v("业务域列表")]),i("div",{staticClass:"fr float-right",staticStyle:{"margin-top":"-5px"}},[i("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("连接业务域")])],1)]),i("div",[i("Table",{attrs:{columns:t.columns,loading:t.listLoading,data:t.list}})],1),i("div",{staticClass:"page"},[i("div",{staticClass:"page-inner"},[i("Page",{attrs:{"show-sizer":"",total:t.page.total,current:t.page.current},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)]),i("Modal",{attrs:{title:"连接业务域"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[i("div",{staticClass:"add-modal-body"},[i("div",[i("p",{staticStyle:{"margin-bottom":"15px"}},[t._v("业务域唯一标识：")]),i("Input",{attrs:{placeholder:"请输入要连接的链实例中的业务域唯一标识"},model:{value:t.businame,callback:function(e){t.businame=e},expression:"businame"}})],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("连接")]),i("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)],1)},n=[],s=(i("fb6a"),i("a434"),i("11ac")),o={data:function(){var t=this,e=[{title:"业务域名称",key:"biz_name",width:130},{title:"业务域唯一标识",width:150,key:"biz_id"},{title:"隶属数据存管域名称",key:"main_storage_storage_name"},{title:"隶属数据存管域ID",key:"main_storage_storage_id"},{title:"创建时间",width:160,key:"join_time"},{title:"操作",width:180,render:function(e,i){var a=i.row||{},n=a.type,s=e("a",{on:{click:function(){t.$Modal.confirm({title:"提示",content:"确定断开链接么？"})}}},"断开联接"),o=e("a",{on:{click:function(){var e=t.$route.query.showDataSubmenu;sessionStorage.setItem("fbs_biz_id",a.biz_id),t.$router.push({name:"business-detail",query:{mainActive:"business",activeIndex:"2",subActive:"business-detail",showDataSubmenu:e,showBusinessSubmenu:"1"}})}}},"详情"),r=e("a",{on:{click:function(){var e=i.index;t.data1.splice(e,1)}}},"删除"),c=[s];switch(n){case"1":c.push(o);break;case"2":c.push(o);break;case"4":c.push(o),c.push(r);break;default:break}return e("div",{class:"opt-btns"},[o])}}];return{listLoading:!1,columns:e,oldList:[],list:[],page:{total:1,current:1,size:10},addModal:!1,addLoading:!1,businame:""}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){var t=this;this.listLoading=!0,s["d"]({address:sessionStorage.getItem("fbs_address")}).then((function(e){t.listLoading=!1,t.oldList=e.rows,t.page.total=t.oldList.length,t.getList()})).catch((function(e){t.listLoading=!1,t.$Message.error(e.retMsg)}))},ok:function(){},cancel:function(){},getList:function(){this.list=this.oldList.slice((this.page.current-1)*this.page.size,this.page.size*this.page.current)},sizeChange:function(t){this.page.current=1,this.page.size=t,this.getList()},pageChange:function(t){this.page.current=t,this.getList()}}},r=o,c=i("2877"),l=Object(c["a"])(r,a,n,!1,null,"27b617bc",null);e["default"]=l.exports},fb6a:function(t,e,i){"use strict";var a=i("23e7"),n=i("861d"),s=i("e8b5"),o=i("23cb"),r=i("50c4"),c=i("fc6a"),l=i("8418"),d=i("b622"),u=i("1dde"),p=i("ae40"),f=u("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),b=[].slice,m=Math.max;a({target:"Array",proto:!0,forced:!f||!h},{slice:function(t,e){var i,a,d,u=c(this),p=r(u.length),f=o(t,p),h=o(void 0===e?p:e,p);if(s(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[g],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return b.call(u,f,h);for(a=new(void 0===i?Array:i)(m(h-f,0)),d=0;f<h;f++,d++)f in u&&l(a,d,u[f]);return a.length=d,a}})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc3BsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9pbmRleC52dWU/ZjJhMCIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvaW5kZXgudnVlPzI3YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sIm5hbWVzIjpbInBicWJsIiwicGFyYW1zIiwib3B0cyIsInJlcXVlc3QiLCJwb3N0IiwicGJxYmQiLCJwYnFiaSIsInBicWJjIiwicGJxbWwiLCIkIiwidG9BYnNvbHV0ZUluZGV4IiwidG9JbnRlZ2VyIiwidG9MZW5ndGgiLCJ0b09iamVjdCIsImFycmF5U3BlY2llc0NyZWF0ZSIsImNyZWF0ZVByb3BlcnR5IiwiYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwiSEFTX1NQRUNJRVNfU1VQUE9SVCIsIlVTRVNfVE9fTEVOR1RIIiwiQUNDRVNTT1JTIiwiMCIsIjEiLCJtYXgiLCJNYXRoIiwibWluIiwiTUFYX1NBRkVfSU5URUdFUiIsIk1BWElNVU1fQUxMT1dFRF9MRU5HVEhfRVhDRUVERUQiLCJ0YXJnZXQiLCJwcm90byIsImZvcmNlZCIsInNwbGljZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpbnNlcnRDb3VudCIsImFjdHVhbERlbGV0ZUNvdW50IiwiQSIsImsiLCJmcm9tIiwidG8iLCJPIiwidGhpcyIsImxlbiIsImxlbmd0aCIsImFjdHVhbFN0YXJ0IiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwicmVuZGVyIiwiX3ZtIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiX3YiLCJzdGF0aWNTdHlsZSIsIm9uIiwiJGV2ZW50IiwiYWRkTW9kYWwiLCJjb2x1bW5zIiwibGlzdExvYWRpbmciLCJsaXN0IiwicGFnZSIsInRvdGFsIiwiY3VycmVudCIsInBhZ2VDaGFuZ2UiLCJzaXplQ2hhbmdlIiwib2siLCJjYW5jZWwiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiYnVzaW5hbWUiLCJzbG90IiwiYWRkTG9hZGluZyIsInN0YXRpY1JlbmRlckZucyIsImRhdGEiLCJwdXNoIiwib3B0MiIsIm9wdDMiLCJvbGRMaXN0Iiwic2l6ZSIsIm1vdW50ZWQiLCJpbml0Iiwid2F0Y2giLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhcGkiLCJhZGRyZXNzIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TGlzdCIsInNsaWNlIiwiY29tcG9uZW50IiwiaXNPYmplY3QiLCJpc0FycmF5IiwidG9JbmRleGVkT2JqZWN0Iiwid2VsbEtub3duU3ltYm9sIiwiU1BFQ0lFUyIsIm5hdGl2ZVNsaWNlIiwiZW5kIiwiQ29uc3RydWN0b3IiLCJyZXN1bHQiLCJuIiwiZmluIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiXSwibWFwcGluZ3MiOiJrSEFBQSwwTEFFYUEsRUFBUSxTQUFDQyxFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvREcsRUFBUSxTQUFDSixFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxFQUFRQyxJQUUvREksRUFBUSxTQUFDTCxFQUFRQyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCSCxF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cXVlc3QgZnJvbSAnQC9odHRwJ1xuLy8g5Lia5Yqh5Z+f566h55CGXG5leHBvcnQgY29uc3QgcGJxYmwgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFibC5kbycsIHBhcmFtcywgb3B0cylcbi8vIOaVsOaNruWtmOeuoeWfny3kuJrliqHln5/or6bmg4VcbmV4cG9ydCBjb25zdCBwYnFiZCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWJkLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5Lia5Yqh5Z+fLeaVsOaNruaTjeS9nOinhOWImVxuZXhwb3J0IGNvbnN0IHBicWJpID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxYmkuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDkuJrliqHln58t5ZCI57qm5rK755CGXG5leHBvcnQgY29uc3QgcGJxYmMgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFiYy5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3ogZTnm5/lp5TlkZjkvJot6IGU55uf5aeU5ZGY5Yaz6K6u5a6h5om56KeE5YiZKuiBlOebn+WnlOWRmOS8muaIkOWRmCoqXG5leHBvcnQgY29uc3QgcGJxbWwgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFtbC5kbycsIHBhcmFtcywgb3B0cylcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NwbGljZScpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ3NwbGljZScsIHsgQUNDRVNTT1JTOiB0cnVlLCAwOiAwLCAxOiAyIH0pO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0xFTkdUSF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGV4Y2VlZGVkJztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zcGxpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNwbGljZVxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCAvKiAsIC4uLml0ZW1zICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBhY3R1YWxTdGFydCA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5zZXJ0Q291bnQsIGFjdHVhbERlbGV0ZUNvdW50LCBBLCBrLCBmcm9tLCB0bztcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFjdHVhbERlbGV0ZUNvdW50ID0gMDtcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSAwO1xuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBsZW4gLSBhY3R1YWxTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zZXJ0Q291bnQgPSBhcmd1bWVudHNMZW5ndGggLSAyO1xuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBtaW4obWF4KHRvSW50ZWdlcihkZWxldGVDb3VudCksIDApLCBsZW4gLSBhY3R1YWxTdGFydCk7XG4gICAgfVxuICAgIGlmIChsZW4gKyBpbnNlcnRDb3VudCAtIGFjdHVhbERlbGV0ZUNvdW50ID4gTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9MRU5HVEhfRVhDRUVERUQpO1xuICAgIH1cbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIGFjdHVhbERlbGV0ZUNvdW50KTtcbiAgICBmb3IgKGsgPSAwOyBrIDwgYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xuICAgICAgZnJvbSA9IGFjdHVhbFN0YXJ0ICsgaztcbiAgICAgIGlmIChmcm9tIGluIE8pIGNyZWF0ZVByb3BlcnR5KEEsIGssIE9bZnJvbV0pO1xuICAgIH1cbiAgICBBLmxlbmd0aCA9IGFjdHVhbERlbGV0ZUNvdW50O1xuICAgIGlmIChpbnNlcnRDb3VudCA8IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBhY3R1YWxTdGFydDsgayA8IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudDtcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQ7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgICB9XG4gICAgICBmb3IgKGsgPSBsZW47IGsgPiBsZW4gLSBhY3R1YWxEZWxldGVDb3VudCArIGluc2VydENvdW50OyBrLS0pIGRlbGV0ZSBPW2sgLSAxXTtcbiAgICB9IGVsc2UgaWYgKGluc2VydENvdW50ID4gYWN0dWFsRGVsZXRlQ291bnQpIHtcbiAgICAgIGZvciAoayA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrID4gYWN0dWFsU3RhcnQ7IGstLSkge1xuICAgICAgICBmcm9tID0gayArIGFjdHVhbERlbGV0ZUNvdW50IC0gMTtcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQgLSAxO1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGsgPSAwOyBrIDwgaW5zZXJ0Q291bnQ7IGsrKykge1xuICAgICAgT1trICsgYWN0dWFsU3RhcnRdID0gYXJndW1lbnRzW2sgKyAyXTtcbiAgICB9XG4gICAgTy5sZW5ndGggPSBsZW4gLSBhY3R1YWxEZWxldGVDb3VudCArIGluc2VydENvdW50O1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzXCJ9LFtfYygnY2hhaW4taGVhZGVyJyx7YXR0cnM6e1widGl0bGVcIjpcIuS4muWKoeWfn+euoeeQhlwifX0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJnLXdoaXRlIHBhZGRpbmdcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNlY3Rpb24tdGl0bGUgY2xlYXJcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi5Lia5Yqh5Z+f5YiX6KGoXCIpXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZnIgZmxvYXQtcmlnaHRcIixzdGF0aWNTdHlsZTp7XCJtYXJnaW4tdG9wXCI6XCItNXB4XCJ9fSxbX2MoJ0J1dHRvbicse3N0YXRpY1N0eWxlOntcIm1hcmdpbi1sZWZ0XCI6XCIyNHB4XCJ9LGF0dHJzOntcInR5cGVcIjpcInByaW1hcnlcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5hZGRNb2RhbCA9IHRydWV9fX0sW192bS5fdihcIui/nuaOpeS4muWKoeWfn1wiKV0pXSwxKV0pLF9jKCdkaXYnLFtfYygnVGFibGUnLHthdHRyczp7XCJjb2x1bW5zXCI6X3ZtLmNvbHVtbnMsXCJsb2FkaW5nXCI6X3ZtLmxpc3RMb2FkaW5nLFwiZGF0YVwiOl92bS5saXN0fX0pXSwxKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwYWdlXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwYWdlLWlubmVyXCJ9LFtfYygnUGFnZScse2F0dHJzOntcInNob3ctc2l6ZXJcIjpcIlwiLFwidG90YWxcIjpfdm0ucGFnZS50b3RhbCxcImN1cnJlbnRcIjpfdm0ucGFnZS5jdXJyZW50fSxvbjp7XCJvbi1jaGFuZ2VcIjpfdm0ucGFnZUNoYW5nZSxcIm9uLXBhZ2Utc2l6ZS1jaGFuZ2VcIjpfdm0uc2l6ZUNoYW5nZX19KV0sMSldKSxfYygnTW9kYWwnLHthdHRyczp7XCJ0aXRsZVwiOlwi6L+e5o6l5Lia5Yqh5Z+fXCJ9LG9uOntcIm9uLW9rXCI6X3ZtLm9rLFwib24tY2FuY2VsXCI6X3ZtLmNhbmNlbH0sbW9kZWw6e3ZhbHVlOihfdm0uYWRkTW9kYWwpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYWRkTW9kYWw9JCR2fSxleHByZXNzaW9uOlwiYWRkTW9kYWxcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhZGQtbW9kYWwtYm9keVwifSxbX2MoJ2RpdicsW19jKCdwJyx7c3RhdGljU3R5bGU6e1wibWFyZ2luLWJvdHRvbVwiOlwiMTVweFwifX0sW192bS5fdihcIuS4muWKoeWfn+WUr+S4gOagh+ivhu+8mlwiKV0pLF9jKCdJbnB1dCcse2F0dHJzOntcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXopoHov57mjqXnmoTpk77lrp7kvovkuK3nmoTkuJrliqHln5/llK/kuIDmoIfor4ZcIn0sbW9kZWw6e3ZhbHVlOihfdm0uYnVzaW5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYnVzaW5hbWU9JCR2fSxleHByZXNzaW9uOlwiYnVzaW5hbWVcIn19KV0sMSldKSxfYygnZGl2Jyx7YXR0cnM6e1wic2xvdFwiOlwiZm9vdGVyXCJ9LHNsb3Q6XCJmb290ZXJcIn0sW19jKCdCdXR0b24nLHtzdGF0aWNDbGFzczpcImNsZWFyQnRuXCIsYXR0cnM6e1wibG9hZGluZ1wiOl92bS5hZGRMb2FkaW5nLFwidHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOl92bS5va319LFtfdm0uX3YoXCLov57mjqVcIildKSxfYygnQnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbGVhckJ0blwiLHN0YXRpY1N0eWxlOntcIndpZHRoXCI6XCI4MHB4XCJ9LG9uOntcImNsaWNrXCI6X3ZtLmNhbmNlbH19LFtfdm0uX3YoXCLlj5bmtohcIildKV0sMSldKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJidXNpbmVzc1wiPlxuICAgIDxjaGFpbi1oZWFkZXIgdGl0bGU9XCLkuJrliqHln5/nrqHnkIZcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSBwYWRkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZSBjbGVhclwiPlxuICAgICAgICA8c3Bhbj7kuJrliqHln5/liJfooag8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmciBmbG9hdC1yaWdodFwiIHN0eWxlPVwibWFyZ2luLXRvcDogLTVweDtcIj5cbiAgICAgICAgICA8IS0tIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7liJvlu7rkuJrliqHln588L0J1dHRvbj4gLS0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImFkZE1vZGFsID0gdHJ1ZSBcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyNHB4O1wiPui/nuaOpeS4muWKoeWfnzwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRhYmxlIDpjb2x1bW5zPVwiY29sdW1uc1wiIDpsb2FkaW5nPVwibGlzdExvYWRpbmdcIiA6ZGF0YT1cImxpc3RcIj48L1RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1pbm5lclwiPlxuICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICBzaG93LXNpemVyXG4gICAgICAgICAgICA6dG90YWw9XCJwYWdlLnRvdGFsXCJcbiAgICAgICAgICAgIDpjdXJyZW50PVwicGFnZS5jdXJyZW50XCJcbiAgICAgICAgICAgIEBvbi1jaGFuZ2U9XCJwYWdlQ2hhbmdlXCJcbiAgICAgICAgICAgIEBvbi1wYWdlLXNpemUtY2hhbmdlPVwic2l6ZUNoYW5nZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB2LW1vZGVsPVwiYWRkTW9kYWxcIlxuICAgICAgICB0aXRsZT1cIui/nuaOpeS4muWKoeWfn1wiXG4gICAgICAgIEBvbi1vaz1cIm9rXCJcbiAgICAgICAgQG9uLWNhbmNlbD1cImNhbmNlbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2PjxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxNXB4O1wiPuS4muWKoeWfn+WUr+S4gOagh+ivhu+8mjwvcD48SW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXopoHov57mjqXnmoTpk77lrp7kvovkuK3nmoTkuJrliqHln5/llK/kuIDmoIfor4ZcIiB2LW1vZGVsPVwiYnVzaW5hbWVcIiAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiA6bG9hZGluZz1cImFkZExvYWRpbmdcIiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPSdjbGVhckJ0bicgQGNsaWNrPVwib2tcIiA+6L+e5o6lPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT1cIndpZHRoOjgwcHg7XCIgY2xhc3M9J2NsZWFyQnRuJyBAY2xpY2s9XCJjYW5jZWxcIiA+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknXG4vLyBpbXBvcnQgKiBhcyBjQXBpIGZyb20gJ0AvaHR0cC9hcGknXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIC8vIHtcbiAgICAvLyAgIFwiYml6X2lkXCI6IFwiMVwiLCAgICAvLyDkuJrliqHln5/llK/kuIDmoIfor4bvvIjkuJrliqHln59pZO+8iVxuICAgIC8vICAgXCJtYWluX3N0b3JhZ2Vfc3RvcmFnZV9pZFwiOiBcIjFcIiwgLy8g6Zq25bGe5pWw5o2u5a2Y566h5Z+fSURcbiAgICAvLyAgIFwibWFpbl9zdG9yYWdlX3N0b3JhZ2VfbmFtZVwiOmFhXCJcIiwgLy/pmrblsZ7mlbDmja7lrZjnrqHln5/lkI3np7BcbiAgICAvLyAgIFwiYml6X25hbWVcIjogXCLkuJrliqHln5/lkI3np7BcIixcdFx0XHQvLyDkuJrliqHln5/lkI3np7BcbiAgICAvLyAgIFwicnVsZVwiOiAzMDAsXG4gICAgLy8gICBcImluZm9ybWF0aW9uXCI6IFwi5p6a5Li+5pqC57y6XCIsXG4gICAgLy8gICBcImZpbGVfcGVybWlzc2lvblwiOiBcIuaemuS4vuaague8ulwiLFxuICAgIC8vICAgXCJqb2luX3RpbWVcIjogMTU5OTcwNDE1NDAwMFx0XHRcdFx0Ly/liJvlu7rml7bpl7RcbiAgICAvLyB9XG4gICAgbGV0IGNvbHVtbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Lia5Yqh5Z+f5ZCN56ewJyxcbiAgICAgICAga2V5OiAnYml6X25hbWUnLFxuICAgICAgICB3aWR0aDogMTMwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S4muWKoeWfn+WUr+S4gOagh+ivhicsXG4gICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgIGtleTogJ2Jpel9pZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6Zq25bGe5pWw5o2u5a2Y566h5Z+f5ZCN56ewJyxcbiAgICAgICAga2V5OiAnbWFpbl9zdG9yYWdlX3N0b3JhZ2VfbmFtZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6Zq25bGe5pWw5o2u5a2Y566h5Z+fSUQnLFxuICAgICAgICBrZXk6ICdtYWluX3N0b3JhZ2Vfc3RvcmFnZV9pZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Yib5bu65pe26Ze0JyxcbiAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAga2V5OiAnam9pbl90aW1lJ1xuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgdGl0bGU6ICfnirbmgIEnLFxuICAgICAgLy8gICBrZXk6ICdzdGF0dXMnLFxuICAgICAgLy8gICB3aWR0aDogMTEwXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgICAgIHdpZHRoOiAxODAsXG4gICAgICAgIHJlbmRlciAoaCwgcCkge1xuICAgICAgICAgIC8vIGxldCBpbmRleCA9IHAuaW5kZXhcbiAgICAgICAgICBsZXQgcm93ID0gcC5yb3cgfHwge31cbiAgICAgICAgICBsZXQgdHlwZSA9IHJvdy50eXBlXG4gICAgICAgICAgbGV0IG9wdDEgPSBoKCdhJywge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2sgKCkge1xuICAgICAgICAgICAgICAgIHRoYXQuJE1vZGFsLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruWumuaWreW8gOmTvuaOpeS5iO+8nydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgJ+aWreW8gOiBlOaOpScpXG4gICAgICAgICAgbGV0IG9wdDIgPSBoKCdhJywge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2sgKCkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IHAuaW5kZXhcbiAgICAgICAgICAgICAgICAvLyBsZXQgeyBtYWluQWN0aXZlLCBzaG93RGF0YVN1Ym1lbnUsIHNob3dCdXNpbmVzc1N1Ym1lbnUgfSA9IHRoYXQuJHJvdXRlLnF1ZXJ5XG4gICAgICAgICAgICAgICAgbGV0IHsgc2hvd0RhdGFTdWJtZW51IH0gPSB0aGF0LiRyb3V0ZS5xdWVyeVxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Zic19iaXpfaWQnLCByb3cuYml6X2lkKVxuICAgICAgICAgICAgICAgIHRoYXQuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXNpbmVzcy1kZXRhaWwnLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYml6X2lkOiByb3cuYml6X2lkLFxuICAgICAgICAgICAgICAgICAgICBtYWluQWN0aXZlOiAnYnVzaW5lc3MnLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogJzInLFxuICAgICAgICAgICAgICAgICAgICBzdWJBY3RpdmU6ICdidXNpbmVzcy1kZXRhaWwnLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGF0YVN1Ym1lbnUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dCdXNpbmVzc1N1Ym1lbnU6ICcxJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAn6K+m5oOFJylcbiAgICAgICAgICBsZXQgb3B0MyA9IGgoJ2EnLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljayAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcC5pbmRleFxuICAgICAgICAgICAgICAgIHRoYXQuZGF0YTEuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgJ+WIoOmZpCcpXG4gICAgICAgICAgbGV0IG9wdHMgPSBbb3B0MV1cbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgIG9wdHMucHVzaChvcHQyKVxuICAgICAgICAgICAgb3B0cy5wdXNoKG9wdDMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdC1idG5zJ1xuICAgICAgICAgIH0sIFtvcHQyXSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgXVxuICAgIHJldHVybiB7XG4gICAgICBsaXN0TG9hZGluZzogZmFsc2UsXG4gICAgICBjb2x1bW5zLFxuICAgICAgb2xkTGlzdDogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgJ21lbWJlcl9pZCc6IDEsXG4gICAgICAgIC8vICAgJ21lbWJlcl9hZGRyZXNzJzogJzEnLFxuICAgICAgICAvLyAgICdtYWluX2NvbW1pdHRlZWdyb3VwX2dyb3VwX2lkJzogJzEnLFxuICAgICAgICAvLyAgICdqb2luX3RpbWUnOiAxNTk4MzQ1OTIzMDAwLFxuICAgICAgICAvLyAgICdtZW1iZXJfbmFtZSc6ICflkI3np7AnXG4gICAgICAgIC8vIH1cbiAgICAgIF0sXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgdG90YWw6IDEsXG4gICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgIHNpemU6IDEwXG4gICAgICB9LFxuICAgICAgYWRkTW9kYWw6IGZhbHNlLFxuICAgICAgYWRkTG9hZGluZzogZmFsc2UsXG4gICAgICBidXNpbmFtZTogJydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH0sXG4gIHdhdGNoOiB7XG5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCAoKSB7XG4gICAgICB0aGlzLmxpc3RMb2FkaW5nID0gdHJ1ZVxuICAgICAgYXBpLnBicWJsKHtcbiAgICAgICAgYWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZmJzX2FkZHJlc3MnKVxuICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbGRMaXN0ID0gcmVzLnJvd3NcbiAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gdGhpcy5vbGRMaXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5saXN0TG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyLnJldE1zZylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvayAoKSB7XG5cbiAgICB9LFxuICAgIGNhbmNlbCAoKSB7XG5cbiAgICB9LFxuICAgIGdldExpc3QgKCkge1xuICAgICAgdGhpcy5saXN0ID0gdGhpcy5vbGRMaXN0LnNsaWNlKCh0aGlzLnBhZ2UuY3VycmVudCAtIDEpICogdGhpcy5wYWdlLnNpemUsIHRoaXMucGFnZS5zaXplICogdGhpcy5wYWdlLmN1cnJlbnQpXG4gICAgfSxcbiAgICBzaXplQ2hhbmdlIChzaXplKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCA9IDFcbiAgICAgIHRoaXMucGFnZS5zaXplID0gc2l6ZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9LFxuICAgIC8vIOWIhumhtVxuICAgIHBhZ2VDaGFuZ2UgKHBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS5jdXJyZW50ID0gcGFnZVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yN2I2MTdiYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjdiNjE3YmNcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==