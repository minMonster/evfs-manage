(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49cf9dfa"],{"0ed9":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"business-detail"},[s("chain-header",{attrs:{title:"数据存管域详情"}}),s("div",{staticClass:"business-detail-item"},[t._m(0),s("div",[s("Row",[s("Col",{attrs:{span:8}},[s("div",[t._v("数据存管域名称：司法业务域")])]),s("Col",{attrs:{span:8}},[s("div",[t._v("数据存管域唯一标识：00740f...ffbc3")])]),s("Col",{attrs:{span:8}},[s("div",[t._v("创建时间：2020-1-5 10:21:32")])])],1),s("Row",[s("Col",{attrs:{span:8}},[s("div",[t._v("创建企业名称：从法科技")])]),s("Col",{attrs:{span:8}},[s("div",[t._v("创建企业身份标识：00740f...ccbb1")])])],1)],1)]),s("div",{staticClass:"business-detail-item"},[t._m(1),s("div",{staticStyle:{color:"#1E1E1E"}},[t._v("联合构建企业成员数量："),s("b",[t._v(t._s(t.node.unitedCompanyMember))])]),s("div",{staticClass:"mb20"},[s("div",{staticClass:"chain-content-item"},[s("Row",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"10px"}},[s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.accountNum))])]),s("div",[t._v("域内主节点数量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.usedAccountNum))])]),s("div",[t._v("在线主节点数量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.outAccountNum))])]),s("div",[t._v("离线主节点数量")])])],1),s("Row",{staticClass:"bg-white padding"},[s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.resourceNum))])]),s("div",[t._v("域内资源节点数量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.usedResourceNum))])]),s("div",[t._v("在线资源节点数量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.outResourceNum))])]),s("div",[t._v("离线资源主节点数量")])])],1)],1)])]),s("div",{staticClass:"tips"},[t._v(" * 数据存管域联合构建企业分别将各自隶属的节点服务器硬件资源联合在一起，共同维护一个数据和文件上链固化存储空间，便于企业间的数据和文件共享。 ")]),s("div",{staticClass:"business-detail-item padding bg-white mb20"},[t._m(2),s("div",{staticClass:"chain-content-item"},[s("Row",[s("Col",{attrs:{span:24}},[s("p",[s("span",[t._v(t._s(t.biz.bizNum))])]),s("div",[t._v("业务域数量")])])],1)],1)]),s("div",{staticClass:"business-detail-item bg-white padding mb20"},[t._m(3),s("div",[s("Row",[s("Col",{attrs:{span:8}},[s("div",[t._v("文件碎片化数量："),s("span",[t._v("未确认")])])]),s("Col",{attrs:{span:8}},[s("div",[t._v("文件保存副本数量："),s("span",[t._v("未确认")])])]),s("Col",{attrs:{span:8}},[s("div",[t._v("文件副本在不同site分散保存："),s("span",[t._v("未确认")])])])],1)],1)]),s("div",{staticClass:"business-detail-item bg-white mb20 padding"},[t._m(4),s("div",[s("div",{staticClass:"chain-content-item"},[s("Row",[s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.capacityLicense)+"TB")])]),s("div",[t._v("最大存储容量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.outCapacityLicense)+" TB")])]),s("div",[t._v("可用存储容量")])]),s("Col",{attrs:{span:8}},[s("p",[s("span",[t._v(t._s(t.node.usedCapacityLicense)+" TB")])]),s("div",[t._v("已用存储容量")])])],1)],1)])])],1)},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"section-title"},[s("span",[t._v("数据存管域信息")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"section-title",staticStyle:{"margin-top":"25px","margin-bottom":"2px"}},[s("span",[t._v("域内节点信息")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"section-title"},[s("span",[t._v("域内业务域信息")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"section-title"},[s("span",[t._v("域内固存规则信息")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"section-title"},[s("span",[t._v("域内存储容量信息")])])}],a=s("5530"),c=s("5138"),o={data:function(){return{storage:{},biz:{bizNum:"--",runBizNum:"--",outBizNum:"--"},node:{accountNum:"--",usedAccountNum:"--",outAccountNum:"--",resourceNum:"--",usedResourceNum:"--",outResourceNum:"--",usedSyncNum:"--",clientNum:"--",clientCompanyNum:"--",usedSystemNum:"--",systemCompanyNum:"--",accountCompanyNum:"--",resourceCompanyNum:"--",nodeLicenseNum:"--",usedLicenseNum:"--",outLicenseNum:"--",capacityLicense:"--",usedCapacityLicense:"--",outCapacityLicense:"--",unitedCompanyMember:"--"}}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){this.initList()},initList:function(){var t=this,n=sessionStorage.getItem("fbs_storage_id"),s={};n&&(s={storage_id:n}),c["k"](s).then((function(n){1===n.retCode?(t.$Message.success("查询成功"),n.storage&&(t.storage=Object(a["a"])(Object(a["a"])({},t.storage),n.storage)),n.biz&&(t.biz=Object(a["a"])(Object(a["a"])({},t.biz),n.biz)),n.node&&(t.node=Object(a["a"])(Object(a["a"])({},t.node),n.node))):n.retMsg&&t.$Message.error(n.retMsg)})).catch((function(n){t.$Message.error(n.retMsg)}))}}},u=o,r=(s("c245"),s("2877")),d=Object(r["a"])(u,e,i,!1,null,"3bb11bf6",null);n["default"]=d.exports},5138:function(t,n,s){"use strict";s.d(n,"c",(function(){return i})),s.d(n,"e",(function(){return a})),s.d(n,"g",(function(){return c})),s.d(n,"a",(function(){return o})),s.d(n,"b",(function(){return u})),s.d(n,"d",(function(){return r})),s.d(n,"f",(function(){return d})),s.d(n,"h",(function(){return p})),s.d(n,"l",(function(){return v})),s.d(n,"k",(function(){return m})),s.d(n,"j",(function(){return l})),s.d(n,"i",(function(){return _}));var e=s("db04"),i=function(t,n){return e["a"].post("cmw/pbqct.do",t,n)},a=function(t,n){return e["a"].post("cmw/pbqgi.do",t,n)},c=function(t,n){return e["a"].post("cmw/pbqml.do",t,n)},o=function(t,n){return e["a"].post("cmw/pbqan.do",t,n)},u=function(t,n){return e["a"].post("cmw/pbqcn.do",t,n)},r=function(t,n){return e["a"].post("cmw/pbqfc.do",t,n)},d=function(t,n){return e["a"].post("cmw/pbqll.do",t,n)},p=function(t,n){return e["a"].post("cmw/pbqmn.do",t,n)},v=function(t,n){return e["a"].post("cmw/pbqsl.do",t,n)},m=function(t,n){return e["a"].post("cmw/pbqsd.do",t,n)},l=function(t,n){return e["a"].post("cmw/pbqrm.do",t,n)},_=function(t,n){return e["a"].post("cmw/pbqrc.do",t,n)}},c245:function(t,n,s){"use strict";var e=s("e5ae"),i=s.n(e);i.a},e5ae:function(t,n,s){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9kZXRhaWwudnVlP2Q2MjYiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9hZG1pbi9kYXRhL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2RhdGEvZGV0YWlsLnZ1ZT9hZGI0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9kYXRhL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2NoYWluL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vZGF0YS9kZXRhaWwudnVlPzFmZDciXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsIl9tIiwiX3YiLCJzdGF0aWNTdHlsZSIsIl9zIiwibm9kZSIsInVuaXRlZENvbXBhbnlNZW1iZXIiLCJhY2NvdW50TnVtIiwidXNlZEFjY291bnROdW0iLCJvdXRBY2NvdW50TnVtIiwicmVzb3VyY2VOdW0iLCJ1c2VkUmVzb3VyY2VOdW0iLCJvdXRSZXNvdXJjZU51bSIsImJpeiIsImJpek51bSIsImNhcGFjaXR5TGljZW5zZSIsIm91dENhcGFjaXR5TGljZW5zZSIsInVzZWRDYXBhY2l0eUxpY2Vuc2UiLCJzdGF0aWNSZW5kZXJGbnMiLCJkYXRhIiwic3RvcmFnZSIsInJ1bkJpek51bSIsIm91dEJpek51bSIsInVzZWRTeW5jTnVtIiwiY2xpZW50TnVtIiwiY2xpZW50Q29tcGFueU51bSIsInVzZWRTeXN0ZW1OdW0iLCJzeXN0ZW1Db21wYW55TnVtIiwiYWNjb3VudENvbXBhbnlOdW0iLCJyZXNvdXJjZUNvbXBhbnlOdW0iLCJub2RlTGljZW5zZU51bSIsInVzZWRMaWNlbnNlTnVtIiwib3V0TGljZW5zZU51bSIsIndhdGNoIiwiY29tcHV0ZWQiLCJtb3VudGVkIiwiaW5pdCIsIm1ldGhvZHMiLCJpbml0TGlzdCIsInN0b3JhZ2VfaWQiLCJwYXJhbXMiLCJhcGkiLCJyZXMiLCJyZXRDb2RlIiwicmV0TXNnIiwiY29tcG9uZW50IiwicGJxY3QiLCJvcHRzIiwicmVxdWVzdCIsInBvc3QiLCJwYnFnaSIsInBicW1sIiwicGJxYW4iLCJwYnFjbiIsInBicWZjIiwicGJxbGwiLCJwYnFtbiIsInBicXNsIiwicGJxc2QiLCJwYnFybSIsInBicXJjIl0sIm1hcHBpbmdzIjoieUhBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsTUFBTSxDQUFDRSxZQUFZLG1CQUFtQixDQUFDRixFQUFHLGVBQWUsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsYUFBYUgsRUFBRyxNQUFNLENBQUNFLFlBQVksd0JBQXdCLENBQUNOLEVBQUlRLEdBQUcsR0FBR0osRUFBRyxNQUFNLENBQUNBLEVBQUcsTUFBTSxDQUFDQSxFQUFHLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLEtBQU8sSUFBSSxDQUFDSCxFQUFHLE1BQU0sQ0FBQ0osRUFBSVMsR0FBRyxxQkFBcUJMLEVBQUcsTUFBTSxDQUFDRyxNQUFNLENBQUMsS0FBTyxJQUFJLENBQUNILEVBQUcsTUFBTSxDQUFDSixFQUFJUyxHQUFHLGdDQUFnQ0wsRUFBRyxNQUFNLENBQUNHLE1BQU0sQ0FBQyxLQUFPLElBQUksQ0FBQ0gsRUFBRyxNQUFNLENBQUNKLEVBQUlTLEdBQUcsK0JBQStCLEdBQUdMLEVBQUcsTUFBTSxDQUFDQSxFQUFHLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLEtBQU8sSUFBSSxDQUFDSCxFQUFHLE1BQU0sQ0FBQ0osRUFBSVMsR0FBRyxtQkFBbUJMLEVBQUcsTUFBTSxDQUFDRyxNQUFNLENBQUMsS0FBTyxJQUFJLENBQUNILEVBQUcsTUFBTSxDQUFDSixFQUFJUyxHQUFHLGdDQUFnQyxJQUFJLEtBQUtMLEVBQUcsTUFBTSxDQUFDRSxZ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QyxLQUFLLGVBQWdCVCxFQUFRTyxJQUUvRFMsRUFBUSxTQUFDaEIsRUFBUU8sR0FBVCxPQUFrQkMsT0FBUUMsS0FBSyxlQUFnQlQsRUFBUU8sSUFFL0RVLEVBQVEsU0FBQ2pCLEVBQVFPLEdBQVQsT0FBa0JDLE9BQVFDLEtBQUssZUFBZ0JULEVBQVFPLElBRS9EVyxFQUFRLFNBQUNsQixFQUFRTyxHQUFULE9BQWtCQyxPQUFRQyxLQUFLLGVBQWdCVCxFQUFRTyxJQUUvRFksRUFBUSxTQUFDbkIsRUFBUU8sR0FBVCxPQUFrQkMsT0FBUUMsS0FBSyxlQUFnQlQsRUFBUU8sSUFFL0RhLEVBQVEsU0FBQ3BCLEVBQVFPLEdBQVQsT0FBa0JDLE9BQVFDLEtBQUssZUFBZ0JULEVBQVFPLEssa0NDekI1RSx5QkFBaWxCLEVBQUcsRyIsImZpbGUiOiJqcy9jaHVuay00OWNmOWRmYS5hZjEyODZiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbFwifSxbX2MoJ2NoYWluLWhlYWRlcicse2F0dHJzOntcInRpdGxlXCI6XCLmlbDmja7lrZjnrqHln5/or6bmg4VcIn19KSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXNpbmVzcy1kZXRhaWwtaXRlbVwifSxbX3ZtLl9tKDApLF9jKCdkaXYnLFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlbDmja7lrZjnrqHln5/lkI3np7DvvJrlj7jms5XkuJrliqHln59cIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygnZGl2JyxbX3ZtLl92KFwi5pWw5o2u5a2Y566h5Z+f5ZSv5LiA5qCH6K+G77yaMDA3NDBmLi4uZmZiYzNcIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygnZGl2JyxbX3ZtLl92KFwi5Yib5bu65pe26Ze077yaMjAyMC0xLTUgMTA6MjE6MzJcIildKV0pXSwxKSxfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLliJvlu7rkvIHkuJrlkI3np7DvvJrku47ms5Xnp5HmioBcIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygnZGl2JyxbX3ZtLl92KFwi5Yib5bu65LyB5Lia6Lqr5Lu95qCH6K+G77yaMDA3NDBmLi4uY2NiYjFcIildKV0pXSwxKV0sMSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXNpbmVzcy1kZXRhaWwtaXRlbVwifSxbX3ZtLl9tKDEpLF9jKCdkaXYnLHtzdGF0aWNTdHlsZTp7XCJjb2xvclwiOlwiIzFFMUUxRVwifX0sW192bS5fdihcIuiBlOWQiOaehOW7uuS8geS4muaIkOWRmOaVsOmHj++8mlwiKSxfYygnYicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUudW5pdGVkQ29tcGFueU1lbWJlcikpXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtYjIwXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjaGFpbi1jb250ZW50LWl0ZW1cIn0sW19jKCdSb3cnLHtzdGF0aWNDbGFzczpcImJnLXdoaXRlIHBhZGRpbmdcIixzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxMHB4XCJ9fSxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLmFjY291bnROdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuWfn+WGheS4u+iKgueCueaVsOmHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLnVzZWRBY2NvdW50TnVtKSldKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLlnKjnur/kuLvoioLngrnmlbDph49cIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygncCcsW19jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0ubm9kZS5vdXRBY2NvdW50TnVtKSldKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLnprvnur/kuLvoioLngrnmlbDph49cIildKV0pXSwxKSxfYygnUm93Jyx7c3RhdGljQ2xhc3M6XCJiZy13aGl0ZSBwYWRkaW5nXCJ9LFtfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOjh9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUucmVzb3VyY2VOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuWfn+WGhei1hOa6kOiKgueCueaVsOmHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLnVzZWRSZXNvdXJjZU51bSkpXSldKSxfYygnZGl2JyxbX3ZtLl92KFwi5Zyo57q/6LWE5rqQ6IqC54K55pWw6YePXCIpXSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOjh9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLm5vZGUub3V0UmVzb3VyY2VOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuemu+e6v+i1hOa6kOS4u+iKgueCueaVsOmHj1wiKV0pXSldLDEpXSwxKV0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGlwc1wifSxbX3ZtLl92KFwiICog5pWw5o2u5a2Y566h5Z+f6IGU5ZCI5p6E5bu65LyB5Lia5YiG5Yir5bCG5ZCE6Ieq6Zq25bGe55qE6IqC54K55pyN5Yqh5Zmo56Gs5Lu26LWE5rqQ6IGU5ZCI5Zyo5LiA6LW377yM5YWx5ZCM57u05oqk5LiA5Liq5pWw5o2u5ZKM5paH5Lu25LiK6ZO+5Zu65YyW5a2Y5YKo56m66Ze077yM5L6/5LqO5LyB5Lia6Ze055qE5pWw5o2u5ZKM5paH5Lu25YWx5Lqr44CCIFwiKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbC1pdGVtIHBhZGRpbmcgYmctd2hpdGUgbWIyMFwifSxbX3ZtLl9tKDIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNoYWluLWNvbnRlbnQtaXRlbVwifSxbX2MoJ1JvdycsW19jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6MjR9fSxbX2MoJ3AnLFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLmJpei5iaXpOdW0pKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuS4muWKoeWfn+aVsOmHj1wiKV0pXSldLDEpXSwxKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJ1c2luZXNzLWRldGFpbC1pdGVtIGJnLXdoaXRlIHBhZGRpbmcgbWIyMFwifSxbX3ZtLl9tKDMpLF9jKCdkaXYnLFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7bnoo7niYfljJbmlbDph4/vvJpcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCLmnKrnoa7orqRcIildKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7bkv53lrZjlia/mnKzmlbDph4/vvJpcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCLmnKrnoa7orqRcIildKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdkaXYnLFtfdm0uX3YoXCLmlofku7blia/mnKzlnKjkuI3lkIxzaXRl5YiG5pWj5L+d5a2Y77yaXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwi5pyq56Gu6K6kXCIpXSldKV0pXSwxKV0sMSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXNpbmVzcy1kZXRhaWwtaXRlbSBiZy13aGl0ZSBtYjIwIHBhZGRpbmdcIn0sW192bS5fbSg0KSxfYygnZGl2JyxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY2hhaW4tY29udGVudC1pdGVtXCJ9LFtfYygnUm93JyxbX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLmNhcGFjaXR5TGljZW5zZSkrXCJUQlwiKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuacgOWkp+WtmOWCqOWuuemHj1wiKV0pXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjo4fX0sW19jKCdwJyxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5ub2RlLm91dENhcGFjaXR5TGljZW5zZSkrXCIgVEJcIildKV0pLF9jKCdkaXYnLFtfdm0uX3YoXCLlj6/nlKjlrZjlgqjlrrnph49cIildKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6OH19LFtfYygncCcsW19jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0ubm9kZS51c2VkQ2FwYWNpdHlMaWNlbnNlKStcIiBUQlwiKV0pXSksX2MoJ2RpdicsW192bS5fdihcIuW3sueUqOWtmOWCqOWuuemHj1wiKV0pXSldLDEpXSwxKV0pXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNlY3Rpb24tdGl0bGVcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi5pWw5o2u5a2Y566h5Z+f5L+h5oGvXCIpXSldKX0sZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzZWN0aW9uLXRpdGxlXCIsc3RhdGljU3R5bGU6e1wibWFyZ2luLXRvcFwiOlwiMjVweFwiLFwibWFyZ2luLWJvdHRvbVwiOlwiMnB4XCJ9fSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLln5/lhoXoioLngrnkv6Hmga9cIildKV0pfSxmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNlY3Rpb24tdGl0bGVcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwi5Z+f5YaF5Lia5Yqh5Z+f5L+h5oGvXCIpXSldKX0sZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzZWN0aW9uLXRpdGxlXCJ9LFtfYygnc3BhbicsW192bS5fdihcIuWfn+WGheWbuuWtmOinhOWImeS/oeaBr1wiKV0pXSl9LGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic2VjdGlvbi10aXRsZVwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCLln5/lhoXlrZjlgqjlrrnph4/kv6Hmga9cIildKV0pfV1cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbFwiPlxuICAgIDxjaGFpbi1oZWFkZXIgdGl0bGU9XCLmlbDmja7lrZjnrqHln5/or6bmg4VcIi8+XG4gICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbC1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPuaVsOaNruWtmOeuoeWfn+S/oeaBrzwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuaVsOaNruWtmOeuoeWfn+WQjeensO+8muWPuOazleS4muWKoeWfnzwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7mlbDmja7lrZjnrqHln5/llK/kuIDmoIfor4bvvJowMDc0MGYuLi5mZmJjMzwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7liJvlu7rml7bpl7TvvJoyMDIwLTEtNSAxMDoyMTozMjwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgIDxkaXY+5Yib5bu65LyB5Lia5ZCN56ew77ya5LuO5rOV56eR5oqAPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuWIm+W7uuS8geS4mui6q+S7veagh+ivhu+8mjAwNzQwZi4uLmNjYmIxPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbC1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjVweDttYXJnaW4tYm90dG9tOiAycHg7XCI+PHNwYW4+5Z+f5YaF6IqC54K55L+h5oGvPC9zcGFuPjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiAjMUUxRTFFO1wiPuiBlOWQiOaehOW7uuS8geS4muaIkOWRmOaVsOmHj++8mjxiPnt7bm9kZS51bml0ZWRDb21wYW55TWVtYmVyfX08L2I+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWIyMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhaW4tY29udGVudC1pdGVtXCI+XG4gICAgICAgICAgPFJvdyBjbGFzcz1cImJnLXdoaXRlIHBhZGRpbmdcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCI+XG4gICAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPHA+PHNwYW4+e3tub2RlLmFjY291bnROdW19fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8ZGl2PuWfn+WGheS4u+iKgueCueaVsOmHjzwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPHA+PHNwYW4+e3tub2RlLnVzZWRBY2NvdW50TnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7lnKjnur/kuLvoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS5vdXRBY2NvdW50TnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7nprvnur/kuLvoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgY2xhc3M9XCJiZy13aGl0ZSBwYWRkaW5nXCI+XG4gICAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPHA+PHNwYW4+e3tub2RlLnJlc291cmNlTnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7ln5/lhoXotYTmupDoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS51c2VkUmVzb3VyY2VOdW19fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8ZGl2PuWcqOe6v+i1hOa6kOiKgueCueaVsOmHjzwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPHA+PHNwYW4+e3tub2RlLm91dFJlc291cmNlTnVtfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7nprvnur/otYTmupDkuLvoioLngrnmlbDph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XG4gICAgICAqIOaVsOaNruWtmOeuoeWfn+iBlOWQiOaehOW7uuS8geS4muWIhuWIq+WwhuWQhOiHqumatuWxnueahOiKgueCueacjeWKoeWZqOehrOS7tui1hOa6kOiBlOWQiOWcqOS4gOi1t++8jOWFseWQjOe7tOaKpOS4gOS4quaVsOaNruWSjOaWh+S7tuS4iumTvuWbuuWMluWtmOWCqOepuumXtO+8jOS+v+S6juS8geS4mumXtOeahOaVsOaNruWSjOaWh+S7tuWFseS6q+OAglxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1kZXRhaWwtaXRlbSBwYWRkaW5nIGJnLXdoaXRlIG1iMjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+PHNwYW4+5Z+f5YaF5Lia5Yqh5Z+f5L+h5oGvPC9zcGFuPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoYWluLWNvbnRlbnQtaXRlbVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgOnNwYW49XCIyNFwiPlxuICAgICAgICAgIDxwPjxzcGFuPnt7Yml6LmJpek51bX19PC9zcGFuPjwvcD5cbiAgICAgICAgICA8ZGl2PuS4muWKoeWfn+aVsOmHjzwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwhLS0gPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPjI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7pmrblsZ7kvIHkuJrmlbDph488L2Rpdj5cbiAgICAgICAgICA8L0NvbD4gLS0+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWRldGFpbC1pdGVtIGJnLXdoaXRlIHBhZGRpbmcgbWIyMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj48c3Bhbj7ln5/lhoXlm7rlrZjop4TliJnkv6Hmga88L3NwYW4+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgPGRpdj7mlofku7bnoo7niYfljJbmlbDph4/vvJo8c3Bhbj7mnKrnoa7orqQ8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICA8ZGl2PuaWh+S7tuS/neWtmOWJr+acrOaVsOmHj++8mjxzcGFuPuacquehruiupDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgIDxkaXY+5paH5Lu25Ymv5pys5Zyo5LiN5ZCMc2l0ZeWIhuaVo+S/neWtmO+8mjxzcGFuPuacquehruiupDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnVzaW5lc3MtZGV0YWlsLWl0ZW0gYmctd2hpdGUgbWIyMCBwYWRkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPuWfn+WGheWtmOWCqOWuuemHj+S/oeaBrzwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFpbi1jb250ZW50LWl0ZW1cIj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS5jYXBhY2l0eUxpY2Vuc2V9fVRCPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxkaXY+5pyA5aSn5a2Y5YKo5a656YePPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8cD48c3Bhbj57e25vZGUub3V0Q2FwYWNpdHlMaWNlbnNlfX0gVEI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7lj6/nlKjlrZjlgqjlrrnph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxwPjxzcGFuPnt7bm9kZS51c2VkQ2FwYWNpdHlMaWNlbnNlfX0gVEI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGRpdj7lt7LnlKjlrZjlgqjlrrnph488L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vY2hhaW4vYXBpJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmFnZToge30sXG4gICAgICBiaXo6IHtcbiAgICAgICAgYml6TnVtOiAnLS0nLCAvLyDkuJrliqHln5/mlbDph49cbiAgICAgICAgcnVuQml6TnVtOiAnLS0nLCAvLyDov5DooYzkuJrliqHln5/mlbDph49cbiAgICAgICAgb3V0Qml6TnVtOiAnLS0nLy8g5YGc6L+Q5Lia5Yqh5Z+f5pWw6YePXG4gICAgICB9LFxuICAgICAgbm9kZToge1xuICAgICAgICBhY2NvdW50TnVtOiAnLS0nLCAvLyDkuLvoioLngrnmnI3liqHlmajmlbDph49cbiAgICAgICAgdXNlZEFjY291bnROdW06ICctLScsIC8vIOWcqOe6v+S4u+iKgueCueacjeWKoeWZqOaVsOmHj1xuICAgICAgICBvdXRBY2NvdW50TnVtOiAnLS0nLCAvLyDnprvnur/kuLvoioLngrnmnI3liqHlmajmlbDph49cbiAgICAgICAgcmVzb3VyY2VOdW06ICctLScsIC8vIOi1hOa6kOiKgueCueacjeWKoeWZqOaVsOmHj1xuICAgICAgICB1c2VkUmVzb3VyY2VOdW06ICctLScsIC8vIOWcqOe6v+i1hOa6kOiKgueCueacjeWKoeWZqOaVsOmHj1xuICAgICAgICBvdXRSZXNvdXJjZU51bTogJy0tJywgLy8g56a757q/6LWE5rqQ6IqC54K55pyN5Yqh5Zmo5pWw6YePXG4gICAgICAgIHVzZWRTeW5jTnVtOiAnLS0nLCAvLyDlnKjnur/lj6ror7voioLngrlcbiAgICAgICAgY2xpZW50TnVtOiAnLS0nLCAvLyDmjqXlhaXliY3nva7oioLngrnmlbDph49cbiAgICAgICAgY2xpZW50Q29tcGFueU51bTogJy0tJywgLy8g5YmN572u6Zq25bGe5LyB5Lia5pWw6YePXG4gICAgICAgIHVzZWRTeXN0ZW1OdW06ICctLScsIC8vIOaOpeWFpeS4muWKoeezu+e7n+aVsOmHj1xuICAgICAgICBzeXN0ZW1Db21wYW55TnVtOiAnLS0nLCAvLyDkuJrliqHns7vnu5/pmrblsZ7kvIHkuJrmlbDph49cbiAgICAgICAgYWNjb3VudENvbXBhbnlOdW06ICctLScsIC8vIOS4u+iKgueCuematuWxnuS8geS4muaVsOmHj1xuICAgICAgICByZXNvdXJjZUNvbXBhbnlOdW06ICctLScsIC8vIOi1hOa6kOiKgueCuematuWxnuS8geS4muaVsOmHj1xuICAgICAgICBub2RlTGljZW5zZU51bTogJy0tJywgLy8g6IqC54K56L+Q6KGM6K645Y+v5oC75pWw6YePXG4gICAgICAgIHVzZWRMaWNlbnNlTnVtOiAnLS0nLCAvLyDlt7Llj5HmlL7oioLngrnorrjlj6/mlbDph49cbiAgICAgICAgb3V0TGljZW5zZU51bTogJy0tJywgLy8g5pyq5Y+R5pS+6IqC54K56K645Y+v5pWw6YePXG4gICAgICAgIGNhcGFjaXR5TGljZW5zZTogJy0tJywgLy8g5a2Y5YKo6K645Y+v5oC75a656YePXG4gICAgICAgIHVzZWRDYXBhY2l0eUxpY2Vuc2U6ICctLScsIC8vIOW3suWPkeaUvuWtmOWCqOiuuOWPr+WuuemHj1xuICAgICAgICBvdXRDYXBhY2l0eUxpY2Vuc2U6ICctLScsIC8vIOacquWPkeWtmOWCqOiuuOWPr+WuuemHj1xuICAgICAgICB1bml0ZWRDb21wYW55TWVtYmVyOiAnLS0nIC8vIOiBlOWQiOaehOW7uuS8geS4muaIkOWRmOaVsOmHj1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHt9LFxuICBjb21wdXRlZDoge30sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0ICgpIHtcbiAgICAgIHRoaXMuaW5pdExpc3QoKVxuICAgIH0sXG4gICAgaW5pdExpc3QgKCkge1xuICAgICAgbGV0IHN0b3JhZ2VfaWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmYnNfc3RvcmFnZV9pZCcpXG4gICAgICBsZXQgcGFyYW1zID0ge31cbiAgICAgIGlmIChzdG9yYWdlX2lkKSB7XG4gICAgICAgIHBhcmFtcyA9IHsgc3RvcmFnZV9pZCB9XG4gICAgICB9XG4gICAgICAvLyDmn6Xor6LmlbDmja7lrZjnrqHln5/or6bmg4VcbiAgICAgIGFwaS5wYnFzZChwYXJhbXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5yZXRDb2RlID09PSAxKSB7XG4gICAgICAgICAgdGhpcy4kTWVzc2FnZS5zdWNjZXNzKCfmn6Xor6LmiJDlip8nKVxuICAgICAgICAgIGlmIChyZXMuc3RvcmFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLnN0b3JhZ2UsXG4gICAgICAgICAgICAgIC4uLnJlcy5zdG9yYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXMuYml6KSB7XG4gICAgICAgICAgICB0aGlzLmJpeiA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5iaXosXG4gICAgICAgICAgICAgIC4uLnJlcy5iaXpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMubm9kZSxcbiAgICAgICAgICAgICAgLi4ucmVzLm5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJlcy5yZXRNc2cpIHtcbiAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzLnJldE1zZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyLnJldE1zZylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuICAuYnVzaW5lc3MtZGV0YWlsLWl0ZW0ge1xuICAgIGNvbG9yOiAjN0Q4Qjk3O1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgLnNlY3Rpb24tdGl0bGUge1xuXG4gICAgfVxuICAgIC5pdnUtY29sIHtcbiAgICAgIGRpdiB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzc1OUJGQTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRpcHMge1xuICAgIGNvbG9yOiAjNzU5QkZBO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6MXB4IGRhc2hlZCAjNzU5QkZBO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiYjExYmY2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNiYjExYmY2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2JiMTFiZjZcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tICdAL2h0dHAnXG4vLyDpppbpobXmn6Xor6JcbmV4cG9ydCBjb25zdCBwYnFjdCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWN0LmRvJywgcGFyYW1zLCBvcHRzKVxuLy8gbWVtYmVyVHlwZUlkIO+8iOmTvi3pk77nrqHnkIblkZjlkozpk74t6IGU55uf5aeU5ZGY5Lya77yJXG5leHBvcnQgY29uc3QgcGJxZ2kgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFnaS5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3ogZTnm5/lp5TlkZjkvJotKirogZTnm5/lp5TlkZjlhrPorq7lrqHmibnop4TliJkqKioq6IGU55uf5aeU5ZGY5Lya5oiQ5ZGYKipcbmV4cG9ydCBjb25zdCBwYnFtbCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicW1sLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g6ZO+LeiKgueCueWHhuWFpS3lh4blhaXoioLngrnmnI3liqHlmajliJfooahcbmV4cG9ydCBjb25zdCBwYnFhbiA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWFuLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8gZXhwb3J0IGNvbnN0IHBiYnFhbiA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BiYnFhbi5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3liY3nva7oioLngrnlh4blhaVcbmV4cG9ydCBjb25zdCBwYnFjbiA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicWNuLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g6ZO+5YaF5a2Y5YKo5a656YeP6K645Y+v5YiG5biD5L+h5oGvXG5leHBvcnQgY29uc3QgcGJxZmMgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFmYy5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvuWGhei/kOihjOiuuOWPr+ivgeWIhuW4g+S/oeaBr1xuZXhwb3J0IGNvbnN0IHBicWxsID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxbGwuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDpk74t5Li76IqC54K55o6I5p2DXG5leHBvcnQgY29uc3QgcGJxbW4gPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFtbi5kbycsIHBhcmFtcywgb3B0cylcbi8vIOmTvi3mlbDmja7lrZjnrqHln59cbmV4cG9ydCBjb25zdCBwYnFzbCA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicXNsLmRvJywgcGFyYW1zLCBvcHRzKVxuLy8g6ZO+LeaVsOaNruWtmOeuoeWfn+ivpuaDhVxuZXhwb3J0IGNvbnN0IHBicXNkID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxc2QuZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyBwYnFybS5kb1xuZXhwb3J0IGNvbnN0IHBicXJtID0gKHBhcmFtcywgb3B0cykgPT4gcmVxdWVzdC5wb3N0KCdjbXcvcGJxcm0uZG8nLCBwYXJhbXMsIG9wdHMpXG4vLyDlvoXlrqHmoLjkuovpobnoj5zljZUt5ZCEdGFi54K55Ye75pe26Ze055qE5piO57uG5p+l6K+iXG5leHBvcnQgY29uc3QgcGJxcmMgPSAocGFyYW1zLCBvcHRzKSA9PiByZXF1ZXN0LnBvc3QoJ2Ntdy9wYnFyYy5kbycsIHBhcmFtcywgb3B0cylcbi8vIOiKgueCueacjeWKoeWZqOivpuaDhS3mnI3liqHlmajnrqHnkIblkZjliJfooahcbmV4cG9ydCBjb25zdCBwYnFubSA9IChwYXJhbXMsIG9wdHMpID0+IHJlcXVlc3QucG9zdCgnY213L3BicW5tLmRvJywgcGFyYW1zLCBvcHRzKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmIxMWJmNiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JiMTFiZjYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==