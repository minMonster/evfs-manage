(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bf71704"],{"0ed9":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"business-detail"},[n("chain-header",{attrs:{title:"数据存管域详情"}}),n("div",{staticClass:"business-detail-item"},[t._m(0),t.storage_session?n("div",[n("Row",[n("Col",{attrs:{span:8}},[n("div",[t._v("数据存管域名称："+t._s(t.storage_session.storage_name||"--"))])]),n("Col",{attrs:{span:8}},[n("div",[t._v("数据存管域唯一标识："+t._s(t.storage_session.storage_id_format))])]),n("Col",{attrs:{span:8}},[n("div",[t._v("创建时间："+t._s(t.storage_session.join_time_format))])])],1),n("Row",[n("Col",{attrs:{span:8}},[n("div",[t._v("创建企业名称："+t._s(t.storage_session.create_org_name||"--"))])]),n("Col",{attrs:{span:8}},[n("div",[t._v("创建企业身份标识："+t._s(t.storage_session.create_org_address_format))])])],1)],1):t._e()]),n("div",{staticClass:"business-detail-item"},[t._m(1),n("div",{staticStyle:{color:"#1E1E1E"}},[t._v("联合构建企业成员数量："),n("b",[t._v(t._s(t.node.unitedCompanyMember))])]),n("div",{staticClass:"mb20"},[n("div",{staticClass:"chain-content-item"},[n("Row",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px"}},[n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.accountNum))])]),n("div",[t._v("域内主节点数量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.usedAccountNum))])]),n("div",[t._v("在线主节点数量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.outAccountNum))])]),n("div",[t._v("离线主节点数量")])])],1),n("Row",{staticClass:"bg-white padding"},[n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.resourceNum))])]),n("div",[t._v("域内资源节点数量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.usedResourceNum))])]),n("div",[t._v("在线资源节点数量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.outResourceNum))])]),n("div",[t._v("离线资源主节点数量")])])],1)],1)])]),n("div",{staticClass:"tips"},[t._v(" * 数据存管域联合构建企业分别将各自隶属的节点服务器硬件资源联合在一起，共同维护一个数据和文件上链固化存储空间，便于企业间的数据和文件共享。 ")]),n("div",{staticClass:"business-detail-item padding bg-white mb20"},[t._m(2),n("div",{staticClass:"chain-content-item"},[n("Row",[n("Col",{attrs:{span:24}},[n("p",[n("span",[t._v(t._s(t.biz.bizNum))])]),n("div",[t._v("业务域数量")])])],1)],1)]),n("div",{staticClass:"business-detail-item bg-white padding mb20"},[t._m(3),n("div",[n("Row",[n("Col",{attrs:{span:8}},[n("div",[t._v("文件碎片化数量："),n("span",[t._v("未确认")])])]),n("Col",{attrs:{span:8}},[n("div",[t._v("文件保存副本数量："),n("span",[t._v("未确认")])])]),n("Col",{attrs:{span:8}},[n("div",[t._v("文件副本在不同site分散保存："),n("span",[t._v("未确认")])])])],1)],1)]),n("div",{staticClass:"business-detail-item bg-white mb20 padding"},[t._m(4),n("div",[n("div",{staticClass:"chain-content-item"},[n("Row",[n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.capacityLicense)+"TB")])]),n("div",[t._v("最大存储容量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.outCapacityLicense)+" TB")])]),n("div",[t._v("可用存储容量")])]),n("Col",{attrs:{span:8}},[n("p",[n("span",[t._v(t._s(t.node.usedCapacityLicense)+" TB")])]),n("div",[t._v("已用存储容量")])])],1)],1)])])],1)},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section-title"},[n("span",[t._v("数据存管域信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section-title",staticStyle:{"margin-top":"25px","margin-bottom":"2px"}},[n("span",[t._v("域内节点信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section-title"},[n("span",[t._v("域内业务域信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section-title"},[n("span",[t._v("域内固存规则信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section-title"},[n("span",[t._v("域内存储容量信息")])])}],a=n("5530"),o=n("5138"),c={data:function(){return{storage_session:null,storage:{},biz:{bizNum:"--",runBizNum:"--",outBizNum:"--"},node:{accountNum:"--",usedAccountNum:"--",outAccountNum:"--",resourceNum:"--",usedResourceNum:"--",outResourceNum:"--",usedSyncNum:"--",clientNum:"--",clientCompanyNum:"--",usedSystemNum:"--",systemCompanyNum:"--",accountCompanyNum:"--",resourceCompanyNum:"--",nodeLicenseNum:"--",usedLicenseNum:"--",outLicenseNum:"--",capacityLicense:"--",usedCapacityLicense:"--",outCapacityLicense:"--",unitedCompanyMember:"--"}}},watch:{},computed:{},mounted:function(){this.init(),this.storage_session=JSON.parse(sessionStorage.getItem("fbs_storage"))},methods:{init:function(){this.initList()},initList:function(){var t=this,s=sessionStorage.getItem("fbs_storage_id"),n={};s&&(n={storage_id:s}),o["l"](n).then((function(s){1===s.retCode?(t.$Message.success("查询成功"),s.storage&&(t.storage=Object(a["a"])(Object(a["a"])({},t.storage),s.storage)),s.biz&&(t.biz=Object(a["a"])(Object(a["a"])({},t.biz),s.biz)),s.node&&(t.node=Object(a["a"])(Object(a["a"])({},t.node),s.node))):s.retMsg&&t.$Message.error(s.retMsg)})).catch((function(s){t.$Message.error(s.retMsg)}))}}},r=c,u=(n("7e8a"),n("2877")),d=Object(u["a"])(r,e,i,!1,null,"cb93b3e8",null);s["default"]=d.exports},"1a17":function(t,s,n){},5138:function(t,s,n){"use strict";n.d(s,"d",(function(){return i})),n.d(s,"f",(function(){return a})),n.d(s,"h",(function(){return o})),n.d(s,"a",(function(){return c})),n.d(s,"c",(function(){return r})),n.d(s,"e",(function(){return u})),n.d(s,"g",(function(){return d})),n.d(s,"i",(function(){return p})),n.d(s,"m",(function(){return _})),n.d(s,"l",(function(){return m})),n.d(s,"k",(function(){return v})),n.d(s,"j",(function(){return l})),n.d(s,"b",(function(){return b}));var e=n("db04"),i=function(t,s){return e["a"].post("cmw/pbqct.do",t,s)},a=function(t,s){return e["a"].post("cmw/pbqgi.do",t,s)},o=function(t,s){return e["a"].post("cmw/pbqml.do",t,s)},c=function(t,s){return e["a"].post("cmw/pbqan.do",t,s)},r=function(t,s){return e["a"].post("cmw/pbqcn.do",t,s)},u=function(t,s){return e["a"].post("cmw/pbqfc.do",t,s)},d=function(t,s){return e["a"].post("cmw/pbqll.do",t,s)},p=function(t,s){return e["a"].post("cmw/pbqmn.do",t,s)},_=function(t,s){return e["a"].post("cmw/pbqsl.do",t,s)},m=function(t,s){return e["a"].post("cmw/pbqsd.do",t,s)},v=function(t,s){return e["a"].post("cmw/pbqrm.do",t,s)},l=function(t,s){return e["a"].post("cmw/pbqrc.do",t,s)},b=function(t,s){return e["a"].post("cmw/pbqci.do",t,s)}},"7e8a":function(t,s,n){"use strict";var e=n("1a17"),i=n.n(e);i.a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9kZXRhaWwudnVlP2NkYjkiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9hZG1pbi9kYXRhL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2RhdGEvZGV0YWlsLnZ1ZT9hZGI0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2NoYWluL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9kZXRhaWwudnVlP2ZlZWIiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl9tIiwiX3YiLCJfcyIsInN0b3JhZ2Vfc2Vzc2lvbiIsInN0b3JhZ2VfbmFtZSIsInN0b3JhZ2VfaWRfZm9ybWF0Iiwiam9pbl90aW1lX2Zvcm1hdCIsImNyZWF0ZV9vcmdfbmFtZSIsImNyZWF0ZV9vcmdfYWRkcmVzc19mb3JtYXQiLCJfZSIsInN0YXRpY1N0eWxlIiwibm9kZSIsInVuaXRlZENvbXBhbnlNZW1iZXIiLCJhY2NvdW50TnVtIiwidXNlZEFjY291bnROdW0iLCJvdXRBY2NvdW50TnVtIiwicmVzb3VyY2VOdW0iLCJ1c2VkUmVzb3VyY2VOdW0iLCJvdXRSZXNvdXJjZU51bSIsImJpeiIsImJpek51bSIsImNhcGFjaXR5TGljZW5zZSIsIm91dENhcGFjaXR5TGljZW5zZSIsInVzZWRDYXBhY2l0eUxpY2Vuc2UiLCJzdGF0aWNSZW5kZXJGbnMiLCJkYXRhIiwic3RvcmFnZSIsInJ1bkJpek51bSIsIm91dEJpek51bSIsInVzZWRTeW5jTnVtIiwiY2xpZW50TnVtIiwiY2xpZW50Q29tcGFueU51bSIsInVzZWRTeXN0ZW1OdW0iLCJzeXN0ZW1Db21wYW55TnVtIiwiYWNjb3VudENvbXBhbnlOdW0iLCJyZXNvdXJjZUNvbXBhbnlOdW0iLCJub2RlTGljZW5zZU51bSIsInVzZWRMaWNlbnNlTnVtIiwib3V0TGljZW5zZU51bSIsIndhdGNoIiwiY29tcHV0ZWQiLCJtb3VudGVkIiwiaW5pdCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIm1ldGhvZHMiLCJpbml0TGlzdCIsInN0b3JhZ2VfaWQiLCJwYXJhbXMiLCJhcGkiLCJyZXMiLCJyZXRDb2RlIiwicmV0TXNnIiwiY29tcG9uZW50IiwicGJxY3QiLCJvcHRzIiwicmVxdWVzdCIsInBvc3QiLCJwYnFnaSIsInBicW1sIiwicGJxYW4iLCJwYnFjbiIsInBicWZjIiwicGJxbGwiLCJwYnFtbiIsInBicXNsIiwicGJxc2QiLCJwYnFybSIsInBicXJjIiwicGJxY2kiXSwibWFwcGluZ3MiOiJ5SEFBQSxJQUFJQSxFQUFTLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxNQUFNLENBQUNFLFlBQVksbUJBQW1CLENBQUNGLEVBQUcsZUFBZSxDQUFDRyxNQUFNLENBQUMsTUFBUSxhQUFhSCxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSx3QkFBd0IsQ0FBQ04sRUFBSVEsR0FBRyxHQUFJUixFQUFtQixnQkFBRUksRUFBRyxNQUFNLENBQUNBLEVBQUcsTUFBTSxDQUFDQSxFQUFHLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLEtBQU8sSUFBSSxDQUFDSCxFQUFHLE1BQU0sQ0FBQ0osRUFBSVMsR0FBRyxXQUFXVCxFQUFJVSxHQUFHVixFQUFJVyxnQkFBZ0JDLGNBQWdCLFdBQVdSLEVBQUcsTUFBTSxDQUFDRyxNQUFNLENBQUMsS0FBTyxJQUFJLENBQUNILEVBQUcsTUFBTSxDQUFDSixFQUFJUyxHQUFHLGFBQWFULEVBQUlVLEdBQUdWLEVBQUlXLGdCQUFnQkUsd0JBQXdCVCxFQUFHLE1BQU0sQ0FBQ0csTUFBTSxDQUFD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c291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYnVzaW5lc3MtZGV0YWlsXCJ9LFtfYygnY2hhaW4taGVhZGVyJyx7YXR0cnM6e1widGl0bGVcIjpcIuaVsOaNruWtmOeuoeWfn+ivpuaDhVwifX0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbC1pdGVtXCJ9LFtfdm0uX20oMCksKF92bS5zdG9yYWdlX3Nlc3Npb24pP19jKCdkaXYnLFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlbDmja7lrZjnrqHln5/lkI3np7DvvJpcIitfdm0uX3MoX3ZtLnN0b3JhZ2Vfc2Vzc2lvbi5zdG9yYWdlX25hbWUgfHwgJy0tJykpXSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOjh9fSxbX2MoJ2RpdicsW192bS5fdihcIuaVsOaNruWtmOeuoeWfn+WUr+S4gOagh+ivhu+8mlwiK192bS5fcyhfdm0uc3RvcmFnZV9zZXNzaW9uLnN0b3JhZ2VfaWRfZm9ybWF0KSldKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygnZGl2JyxbX3ZtLl92KFwi5Yib5bu65pe26Ze077yaXCIrX3ZtLl9zKF92bS5zdG9yYWdlX3Nlc3Npb24uam9pbl90aW1lX2Zvcm1hdCkpXSldKV0sMSksX2MoJ1JvdycsW19jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygnZGl2JyxbX3ZtLl92KFwi5Yib5bu65LyB5Lia5ZCN56ew77yaXCIrX3ZtLl9zKF92bS5zdG9yYWdlX3Nlc3Npb24uY3JlYXRlX29yZ19uYW1lIHx8ICctLScpKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLliJvlu7rkvIHkuJrouqvku73moIfor4bvvJpcIitfdm0uX3MoX3ZtLnN0b3JhZ2Vfc2Vzc2lvbi5jcmVhdGVfb3JnX2FkZHJlc3NfZm9ybWF0KSldKV0pXSwxKV0sMSk6X3ZtLl9lKCldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXNpbmVzcy1kZXRhaWwtaXRlbVwifSxbX3ZtLl9tKDEpLF9jKCdkaXYnLHtzdGF0aWNTdHlsZTp7XCJjb2xvclwiOlwiIzFFMUUxRVwifX0sW192bS5fdihcIuiBlOWQiOaehOW7uuS8geS4muaIkOWRmOaVsOmHj++8mlwiKSxfYygnYicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUudW5pdGVkQ29tcGFueU1lbWJlcikpXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtYjIwXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjaGFpbi1jb250ZW50LWl0ZW1cIn0sW19jKCdSb3cnLHtzdGF0aWNDbGFzczpcImJnLXdoaXRlIHBhZGRpbmdcIixzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxMHB4XCJ9fSxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLmFjY291bnROdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuWfn+WGheS4u+iKgueCueaVsOmHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLnVzZWRBY2NvdW50TnVtKSldKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLlnKjnur/kuLvoioLngrnmlbDph49cIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygncCcsW19jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0ubm9kZS5vdXRBY2NvdW50TnVtKSldKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLnprvnur/kuLvoioLngrnmlbDph49cIildKV0pXSwxKSxfYygnUm93Jyx7c3RhdGljQ2xhc3M6XCJiZy13aGl0ZSBwYWRkaW5nXCJ9LFtfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOjh9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUucmVzb3VyY2VOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuWfn+WGhei1hOa6kOiKgueCueaVsOmHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLnVzZWRSZXNvdXJjZU51bSkpXSldKSxfYygnZGl2JyxbX3ZtLl92KFwi5Zyo57q/6LWE5rqQ6IqC54K55pWw6YePXCIpXSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOjh9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUub3V0UmVzb3VyY2VOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuemu+e6v+i1hOa6kOS4u+iKgueCueaVsOmHj1wiKV0pXSldLDEpXSwxKV0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGlwc1wifSxbX3ZtLl92KFwiICog5pWw5o2u5a2Y566h5Z+f6IGU5ZCI5p6E5bu65LyB5Lia5YiG5Yir5bCG5ZCE6Ieq6Zq25bGe55qE6IqC54K55pyN5Yqh5Zmo56Gs5Lu26LWE5rqQ6IGU5ZCI5Zyo5LiA6LW377yM5YWx5ZCM57u05oqk5LiA5Liq5pWw5o2u5ZKM5paH5Lu25LiK6ZO+5Zu65YyW5a2Y5YKo56m66Ze077yM5L6/5LqO5LyB5Lia6Ze055qE5pWw5o2u5ZKM5paH5Lu25YWx5Lqr44CCIFwiKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbC1pdGVtIHBhZGRpbmcgYmctd2hpdGUgbWIyMFwifSxbX3ZtLl9tKDIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNoYWluLWNvbnRlbnQtaXRlbVwifSxbX2MoJ1JvdycsW19jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6MjR9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLmJpei5iaXpOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuS4muWKoeWfn+aVsOmHj1wiKV0pXSldLDEpXSwxKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbC1pdGVtIGJnLXdoaXRlIHBhZGRpbmcgbWIyMFwifSxbX3ZtLl9tKDMpLF9jKCdkaXYnLFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7bnoo7niYfljJbmlbDph4/vvJpcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCLmnKrnoa7orqRcIildKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7bkv53lrZjlia/mnKzmlbDph4/vvJpcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCLmnKrnoa7orqRcIildKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7blia/mnKzlnKjkuI3lkIxzaXRl5YiG5pWj5L+d5a2Y77yaXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwi5pyq56Gu6K6kXCIpXSldKV0pXSwxKV0sMSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXNpbmVzcy1kZXRhaWwtaXRlbSBiZy13aGl0ZSBtYjIwIHBhZGRpbmdcIn0sW192bS5fbSg0KSxfYygnZGl2JyxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY2hhaW4tY29udGVudC1pdGVtXCJ9LFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLmNhcGFjaXR5TGljZW5zZSkrXCJUQlwiKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuacgOWkp+WtmOWCqOWuuemHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLm91dENhcGFjaXR5TGljZW5zZSkrXCIgVEJcIildKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLlj6/nlKjlrZjlgqjlrrnph49cIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygncCcsW19jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0ubm9kZS51c2VkQ2FwYWNpdHlMaWNlbnNlKStcIiBUQlwiKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuW3sueUqOWtmOWCqOWuuemHj1wiKV0pXSldLDEpXSwxKV0pXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNlY3Rpb24tdGl0bGVcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi5pWw5o2u5a2Y566h5Z+f5L+h5oGvXCIpXSldKX0sZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzZWN0aW9uLXRpdGxlXCIsc3RhdGljU3R5bGU6e1wibWFyZ2luLXRvcFwiOlwiMjVweFwiLFwibWFyZ2luLWJvdHRvbVwiOlwiMnB4XCJ9fSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLln5/lhoXoioLngrnkv6Hmga9cIildKV0pfSxmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNlY3Rpb24tdGl0bGVcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi5Z+f5YaF5Lia5Yqh5Z+f5L+h5oGvXCIpXSldKX0sZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzZWN0aW9uLXRpdGxlXCJ9LFtfYygnc3BhbicsW192bS5fdihcIuWfn+WGheWbuuWtmOinhOWImeS/oeaBr1wiKV0pXSl9LGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic2VjdGlvbi10aXRsZVwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLln5/lhoXlrZjlgqjlrrnph4/kv6Hmga9cIildKV0pfV1cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbFwiPlxuICAgIDxjaGFpbi1oZWFkZXIgdGl0bGU9XCLmlbDmja7lrZjnrqHln5/or6bmg4VcIi8+XG4gICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbC1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPuaVsOaNruWtmOeuoeWfn+S/oeaBrzwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cInN0b3JhZ2Vfc2Vzc2lvblwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7mlbDmja7lrZjnrqHln5/lkI3np7DvvJp7e3N0b3JhZ2Vfc2Vzc2lvbi5zdG9yYWdlX25hbWUgfHwgJy0tJ319PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuaVsOaNruWtmOeuoeWfn+WUr+S4gOagh+ivhu+8mnt7c3RvcmFnZV9zZXNzaW9uLnN0b3JhZ2VfaWRfZm9ybWF0fX08L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgIDxkaXY+5Yib5bu65pe26Ze077yae3tzdG9yYWdlX3Nlc3Npb24uam9pbl90aW1lX2Zvcm1hdH19PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7liJvlu7rkvIHkuJrlkI3np7DvvJp7e3N0b3JhZ2Vfc2Vzc2lvbi5jcmVhdGVfb3JnX25hbWUgfHwgJy0tJ319PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuWIm+W7uuS8geS4mui6q+S7veagh+ivhu+8mnt7c3RvcmFnZV9zZXNzaW9uLmNyZWF0ZV9vcmdfYWRkcmVzc19mb3JtYXR9fTwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1kZXRhaWwtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDI1cHg7bWFyZ2luLWJvdHRvbTogMnB4O1wiPjxzcGFuPuWfn+WGheiKgueCueS/oeaBrzwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogIzFFMUUxRTtcIj7ogZTlkIjmnoTlu7rkvIHkuJrmiJDlkZjmlbDph4/vvJo8Yj57e25vZGUudW5pdGVkQ29tcGFueU1lbWJlcn19PC9iPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1iMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYWluLWNvbnRlbnQtaXRlbVwiPlxuICAgICAgICAgIDxSb3cgY2xhc3M9XCJiZy13aGl0ZSBwYWRkaW5nXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS5hY2NvdW50TnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7ln5/lhoXkuLvoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS51c2VkQWNjb3VudE51bX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+5Zyo57q/5Li76IqC54K55pWw6YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj57e25vZGUub3V0QWNjb3VudE51bX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+56a757q/5Li76IqC54K55pWw6YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IGNsYXNzPVwiYmctd2hpdGUgcGFkZGluZ1wiPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS5yZXNvdXJjZU51bX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+5Z+f5YaF6LWE5rqQ6IqC54K55pWw6YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj57e25vZGUudXNlZFJlc291cmNlTnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7lnKjnur/otYTmupDoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS5vdXRSZXNvdXJjZU51bX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+56a757q/6LWE5rqQ5Li76IqC54K55pWw6YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxuICAgICAgKiDmlbDmja7lrZjnrqHln5/ogZTlkIjmnoTlu7rkvIHkuJrliIbliKvlsIblkIToh6rpmrblsZ7nmoToioLngrnmnI3liqHlmajnoazku7botYTmupDogZTlkIjlnKjkuIDotbfvvIzlhbHlkIznu7TmiqTkuIDkuKrmlbDmja7lkozmlofku7bkuIrpk77lm7rljJblrZjlgqjnqbrpl7TvvIzkvr/kuo7kvIHkuJrpl7TnmoTmlbDmja7lkozmlofku7blhbHkuqvjgIJcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnVzaW5lc3MtZGV0YWlsLWl0ZW0gcGFkZGluZyBiZy13aGl0ZSBtYjIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPuWfn+WGheS4muWKoeWfn+S/oeaBrzwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFpbi1jb250ZW50LWl0ZW1cIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiMjRcIj5cbiAgICAgICAgICA8cD48c3Bhbj57e2Jpei5iaXpOdW19fTwvc3Bhbj48L3A+XG4gICAgICAgICAgPGRpdj7kuJrliqHln5/mlbDph488L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8IS0tIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj4yPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+6Zq25bGe5LyB5Lia5pWw6YePPC9kaXY+XG4gICAgICAgICAgPC9Db2w+IC0tPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1kZXRhaWwtaXRlbSBiZy13aGl0ZSBwYWRkaW5nIG1iMjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+PHNwYW4+5Z+f5YaF5Zu65a2Y6KeE5YiZ5L+h5oGvPC9zcGFuPjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgIDxkaXY+5paH5Lu256KO54mH5YyW5pWw6YeP77yaPHNwYW4+5pyq56Gu6K6kPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7mlofku7bkv53lrZjlia/mnKzmlbDph4/vvJo8c3Bhbj7mnKrnoa7orqQ8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuaWh+S7tuWJr+acrOWcqOS4jeWQjHNpdGXliIbmlaPkv53lrZjvvJo8c3Bhbj7mnKrnoa7orqQ8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbC1pdGVtIGJnLXdoaXRlIG1iMjAgcGFkZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj48c3Bhbj7ln5/lhoXlrZjlgqjlrrnph4/kv6Hmga88L3NwYW4+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhaW4tY29udGVudC1pdGVtXCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj57e25vZGUuY2FwYWNpdHlMaWNlbnNlfX1UQjwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8ZGl2PuacgOWkp+WtmOWCqOWuuemHjzwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPHA+PHNwYW4+e3tub2RlLm91dENhcGFjaXR5TGljZW5zZX19IFRCPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+5Y+v55So5a2Y5YKo5a656YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj57e25vZGUudXNlZENhcGFjaXR5TGljZW5zZX19IFRCPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+5bey55So5a2Y5YKo5a656YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2NoYWluL2FwaSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JhZ2Vfc2Vzc2lvbjogbnVsbCxcbiAgICAgIHN0b3JhZ2U6IHt9LFxuICAgICAgYml6OiB7XG4gICAgICAgIGJpek51bTogJy0tJywgLy8g5Lia5Yqh5Z+f5pWw6YePXG4gICAgICAgIHJ1bkJpek51bTogJy0tJywgLy8g6L+Q6KGM5Lia5Yqh5Z+f5pWw6YePXG4gICAgICAgIG91dEJpek51bTogJy0tJy8vIOWBnOi/kOS4muWKoeWfn+aVsOmHj1xuICAgICAgfSxcbiAgICAgIG5vZGU6IHtcbiAgICAgICAgYWNjb3VudE51bTogJy0tJywgLy8g5Li76IqC54K55pyN5Yqh5Zmo5pWw6YePXG4gICAgICAgIHVzZWRBY2NvdW50TnVtOiAnLS0nLCAvLyDlnKjnur/kuLvoioLngrnmnI3liqHlmajmlbDph49cbiAgICAgICAgb3V0QWNjb3VudE51bTogJy0tJywgLy8g56a757q/5Li76IqC54K55pyN5Yqh5Zmo5pWw6YePXG4gICAgICAgIHJlc291cmNlTnVtOiAnLS0nLCAvLyDotYTmupDoioLngrnmnI3liqHlmajmlbDph49cbiAgICAgICAgdXNlZFJlc291cmNlTnVtOiAnLS0nLCAvLyDlnKjnur/otYTmupDoioLngrnmnI3liqHlmajmlbDph49cbiAgICAgICAgb3V0UmVzb3VyY2VOdW06ICctLScsIC8vIOemu+e6v+i1hOa6kOiKgueCueacjeWKoeWZqOaVsOmHj1xuICAgICAgICB1c2VkU3luY051bTogJy0tJywgLy8g5Zyo57q/5Y+q6K+76IqC54K5XG4gICAgICAgIGNsaWVudE51bTogJy0tJywgLy8g5o6l5YWl5YmN572u6IqC54K55pWw6YePXG4gICAgICAgIGNsaWVudENvbXBhbnlOdW06ICctLScsIC8vIOWJjee9rumatuWxnuS8geS4muaVsOmHj1xuICAgICAgICB1c2VkU3lzdGVtTnVtOiAnLS0nLCAvLyDmjqXlhaXkuJrliqHns7vnu5/mlbDph49cbiAgICAgICAgc3lzdGVtQ29tcGFueU51bTogJy0tJywgLy8g5Lia5Yqh57O757uf6Zq25bGe5LyB5Lia5pWw6YePXG4gICAgICAgIGFjY291bnRDb21wYW55TnVtOiAnLS0nLCAvLyDkuLvoioLngrnpmrblsZ7kvIHkuJrmlbDph49cbiAgICAgICAgcmVzb3VyY2VDb21wYW55TnVtOiAnLS0nLCAvLyDotYTmupDoioLngrnpmrblsZ7kvIHkuJrmlbDph49cbiAgICAgICAgbm9kZUxpY2Vuc2VOdW06ICctLScsIC8vIOiKgueCuei/kOihjOiuuOWPr+aAu+aVsOmHj1xuICAgICAgICB1c2VkTGljZW5zZU51bTogJy0tJywgLy8g5bey5Y+R5pS+6IqC54K56K645Y+v5pWw6YePXG4gICAgICAgIG91dExpY2Vuc2VOdW06ICctLScsIC8vIOacquWPkeaUvuiKgueCueiuuOWPr+aVsOmHj1xuICAgICAgICBjYXBhY2l0eUxpY2Vuc2U6ICctLScsIC8vIOWtmOWCqOiuuOWPr+aAu+WuuemHj1xuICAgICAgICB1c2VkQ2FwYWNpdHlMaWNlbnNlOiAnLS0nLCAvLyDlt7Llj5HmlL7lrZjlgqjorrjlj6/lrrnph49cbiAgICAgICAgb3V0Q2FwYWNpdHlMaWNlbnNlOiAnLS0nLCAvLyDmnKrlj5HlrZjlgqjorrjlj6/lrrnph49cbiAgICAgICAgdW5pdGVkQ29tcGFueU1lbWJlcjogJy0tJyAvLyDogZTlkIjmnoTlu7rkvIHkuJrmiJDlkZjmlbDph49cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7fSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuc3RvcmFnZV9zZXNzaW9uID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmYnNfc3RvcmFnZScpKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCAoKSB7XG4gICAgICB0aGlzLmluaXRMaXN0KClcbiAgICB9LFxuICAgIGluaXRMaXN0ICgpIHtcbiAgICAgIGxldCBzdG9yYWdlX2lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZmJzX3N0b3JhZ2VfaWQnKVxuICAgICAgbGV0IHBhcmFtcyA9IHt9XG4gICAgICBpZiAoc3RvcmFnZV9pZCkge1xuICAgICAgICBwYXJhbXMgPSB7IHN0b3JhZ2VfaWQgfVxuICAgICAgfVxuICAgICAgLy8g5p+l6K+i5pWw5o2u5a2Y566h5Z+f6K+m5oOFXG4gICAgICBhcGkucGJxc2QocGFyYW1zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMucmV0Q29kZSA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5p+l6K+i5oiQ5YqfJylcbiAgICAgICAgICBpZiAocmVzLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZSA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdG9yYWdlLFxuICAgICAgICAgICAgICAuLi5yZXMuc3RvcmFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzLmJpeikge1xuICAgICAgICAgICAgdGhpcy5iaXogPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuYml6LFxuICAgICAgICAgICAgICAuLi5yZXMuYml6XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXMubm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLm5vZGUsXG4gICAgICAgICAgICAgIC4uLnJlcy5ub2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXMucmV0TXNnKSB7XG4gICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlcy5yZXRNc2cpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVyci5yZXRNc2cpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbiAgLmJ1c2luZXNzLWRldGFpbC1pdGVtIHtcbiAgICBjb2xvcjogIzdEOEI5NztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcblxuICAgIH1cbiAgICAuaXZ1LWNvbCB7XG4gICAgICBkaXYge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM3NTlCRkE7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50aXBzIHtcbiAgICBjb2xvcjogIzc1OUJGQTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOjFweCBkYXNoZWQgIzc1OUJGQTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjkzYjNlOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYjkzYjNlOCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNiOTNiM2U4XCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnQC9odHRwJ1xuLy8g6aaW6aG15p+l6K+iXG5leHBvcnQgY29uc3QgcGJxY3QgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFjdC5kbycsIHBhcmFtcywgb3B0cylcbi8vIG1lbWJlclR5cGVJZCDvvIjpk74t6ZO+566h55CG5ZGY5ZKM6ZO+LeiBlOebn+WnlOWRmOS8mu+8iVxuZXhwb3J0IGNvbnN0IHBicWdpID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxZ2kuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t6IGU55uf5aeU5ZGY5LyaLSoq6IGU55uf5aeU5ZGY5Yaz6K6u5a6h5om56KeE5YiZKioqKuiBlOebn+WnlOWRmOS8muaIkOWRmCoqXG5leHBvcnQgY29uc3QgcGJxbWwgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFtbC5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3oioLngrnlh4blhaUt5YeG5YWl6IqC54K55pyN5Yqh5Zmo5YiX6KGoXG5leHBvcnQgY29uc3QgcGJxYW4gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFhbi5kbycsIHBhcmFtcywgb3B0cylcbi8vIGV4cG9ydCBjb25zdCBwYmJxYW4gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYmJxYW4uZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t5YmN572u6IqC54K55YeG5YWlXG5leHBvcnQgY29uc3QgcGJxY24gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFjbi5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvuWGheWtmOWCqOWuuemHj+iuuOWPr+WIhuW4g+S/oeaBr1xuZXhwb3J0IGNvbnN0IHBicWZjID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxZmMuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk77lhoXov5DooYzorrjlj6/or4HliIbluIPkv6Hmga9cbmV4cG9ydCBjb25zdCBwYnFsbCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWxsLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g6ZO+LeS4u+iKgueCueaOiOadg1xuZXhwb3J0IGNvbnN0IHBicW1uID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxbW4uZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t5pWw5o2u5a2Y566h5Z+fXG5leHBvcnQgY29uc3QgcGJxc2wgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFzbC5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3mlbDmja7lrZjnrqHln5/or6bmg4VcbmV4cG9ydCBjb25zdCBwYnFzZCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXNkLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8gcGJxcm0uZG9cbmV4cG9ydCBjb25zdCBwYnFybSA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXJtLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g5b6F5a6h5qC45LqL6aG56I+c5Y2VLeWQhHRhYueCueWHu+aXtumXtOeahOaYjue7huafpeivolxuZXhwb3J0IGNvbnN0IHBicXJjID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxcmMuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDoioLngrnmnI3liqHlmajor6bmg4Ut5pyN5Yqh5Zmo566h55CG5ZGY5YiX6KGoXG5leHBvcnQgY29uc3QgcGJxbm0gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFubS5kbycsIHBhcmFtcywgb3B0cylcbmV4cG9ydCBjb25zdCBwYnFjaSA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWNpLmRvJywgcGFyYW1zLCBvcHRzKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYjkzYjNlOCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I5M2IzZTgmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==