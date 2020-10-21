(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0afe1553"],{"7cd8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"node-admission"},[e("business-header",{attrs:{title:"业务系统访问许可管理",btn:!0}}),e("div",{staticClass:"bg-white padding"},[e("div",{staticStyle:{"margin-bottom":"25px",color:"#273D52"}},[t._m(0),e("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:"",content:"功效说明：在“匿名调用访问”选择“允许”时，禁止特定的前置节点与链建立访问通道，被禁止的前置节点无法向链上提交或访问链上数据。"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),e("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.confirmAdd}},[t._v("添加")])],1),e("Row",[e("Col",{attrs:{span:"5"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务系统名称：")]),e("Input",{attrs:{type:"text",placeholder:"业务系统名称"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)]),e("Col",{attrs:{span:"7"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("业务系统身份标识：")]),e("Input",{attrs:{type:"text",placeholder:"业务系统身份标识"},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("span",{staticClass:"condition-label"},[t._v("状态：")]),e("Select",{attrs:{value:"0"},model:{value:t.form.status,callback:function(a){t.$set(t.form,"status",a)},expression:"form.status"}},[e("Option",{attrs:{value:"0"}},[t._v("全部")]),e("Option",{attrs:{value:"1"}},[t._v("已添加")]),e("Option",{attrs:{value:"2"}},[t._v("已删除")]),e("Option",{attrs:{value:"3"}},[t._v("添加审核中")]),e("Option",{attrs:{value:"4"}},[t._v("删除审核中")])],1)],1)]),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"condition-item"},[e("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),e("div",[e("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])],1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("b",[t._v("业务域调用访问")]),e("b",[t._v("【白名单】")]),t._v("： ")])}],i=(e("a434"),{data:function(){var t=this,a=[{title:"业务系统名称",key:"name"},{title:"业务系统身份标识",key:"address"},{title:"添加时间",key:"time"},{title:"状态",key:"statuslabel"},{title:"操作",render:function(a,e){var s=e.row||{},n="--",i=s.status;return"2"==i&&(n="删除"),"3"==i&&(n="撤销"),a("a",{on:{click:function(){var a=e.index;t.data1.splice(a,1)}}},n)}}],e=[{name:"上海公证系统",address:"00740f...aaba8",time:"2020-1-5 10:45:25",statuslabel:"已添加",status:"2"},{name:"四川公证系统",address:"00da0c...cfbe5",time:"--",statuslabel:"删除审核中",status:"1"},{name:"四川公证系统",address:"00da0c...cfbe5",time:"--",statuslabel:"添加审核中",status:"1"},{name:"北京公证系统",address:"00740f...dadaf",time:"2020-1-1 12:00:00",statuslabel:"已授权",status:"3"}];return{acceptLimit:"1/3",name:"",address:"",addModal:!1,columns1:a,data1:e,total:100,form:{name:"",address:"",status:""},switch1:"0"}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){},confirmAdd:function(){this.$router.push("/business-addpermission")},ok:function(){},search:function(){},cancel:function(){},pageChange:function(t){console.log(t)}}}),o=i,l=(e("d358"),e("2877")),r=Object(l["a"])(o,s,n,!1,null,"3eaf28be",null);a["default"]=r.exports},a434:function(t,a,e){"use strict";var s=e("23e7"),n=e("23cb"),i=e("a691"),o=e("50c4"),l=e("7b0b"),r=e("65f0"),c=e("8418"),d=e("1dde"),u=e("ae40"),f=d("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,a){var e,s,d,u,f,m,g=l(this),C=o(g.length),_=n(t,C),y=arguments.length;if(0===y?e=s=0:1===y?(e=0,s=C-_):(e=y-2,s=v(p(i(a),0),C-_)),C+e-s>h)throw TypeError(b);for(d=r(g,s),u=0;u<s;u++)f=_+u,f in g&&c(d,u,g[f]);if(d.length=s,e<s){for(u=_;u<C-s;u++)f=u+s,m=u+e,f in g?g[m]=g[f]:delete g[m];for(u=C;u>C-s+e;u--)delete g[u-1]}else if(e>s)for(u=C-s;u>_;u--)f=u+s-1,m=u+e-1,f in g?g[m]=g[f]:delete g[m];for(u=0;u<e;u++)g[u+_]=arguments[u+2];return g.length=C-s+e,d}})},d358:function(t,a,e){"use strict";var s=e("f94d"),n=e.n(s);n.a},f94d:function(t,a,e){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvcGVybWlzc2lvbi52dWU/NWE4ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FkbWluL2J1c2luZXNzL3Blcm1pc3Npb24udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9wZXJtaXNzaW9uLnZ1ZT82OTMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9idXNpbmVzcy9wZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNwbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vYnVzaW5lc3MvcGVybWlzc2lvbi52dWU/MDAxNiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwic3RhdGljU3R5bGUiLCJfbSIsIm9uIiwiY29uZmlybUFkZCIsIl92IiwibW9kZWwiLCJ2YWx1ZSIsImZvcm0iLCJjYWxsYmFjayIsIiQkdiIsIiRzZXQiLCJleHByZXNzaW9uIiwic2VhcmNoIiwiY29sdW1uczEiLCJkYXRhMSIsInRvdGFsIiwicGFnZUNoYW5nZSIsInN0YXRpY1JlbmRlckZucyIsImRhdGEiLCJhY2NlcHRMaW1pdCIsIm5hbWUiLCJhZGRyZXNzIiwiYWRkTW9kYWwiLCJzdGF0dXMiLCJzd2l0Y2gxIiwibW91bnRlZCIsImluaXQiLCJ3YXRjaCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIiRyb3V0ZXIiLCJwdXNoIiwib2siLCJjYW5jZWwiLCJjb25zb2xlIiwibG9nIiwicGFnZSIsImNvbXBvbmVudCIsIiQiLCJ0b0Fic29sdXRlSW5kZXgiLCJ0b0ludGVnZXIiLCJ0b0xlbmd0aCIsInRvT2JqZWN0IiwiYXJyYXlTcGVjaWVzQ3JlYXRlIiwiY3JlYXRlUHJvcGVydHkiLCJhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0IiwiYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgiLCJIQVNfU1BFQ0lFU19TVVBQT1JUIiwiVVNFU19UT19MRU5HVEgiLCJBQ0NFU1NPUlMiLCIwIiwiMSIsIm1heCIsIk1hdGgiLCJtaW4iLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUFYSU1VTV9BTExPV0VEX0xFTkdUSF9FWENFRURFRCIsInRhcmdldCIsInByb3RvIiwiZm9yY2VkIiwic3BsaWNlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImluc2VydENvdW50IiwiYWN0dWFsRGVsZXRlQ291bnQiLCJBIiwiayIsImZyb20iLCJ0byIsIk8iLCJsZW4iLCJsZW5ndGgiLCJhY3R1YWxTdGFydCIsImFyZ3VtZW50c0xlbmd0aCIsImFyZ3VtZW50cyIsIlR5cGVFcnJvciJdLCJtYXBwaW5ncyI6InlIQUFBLElBQUlBLEVBQVMsV0FBYSxJQUFJQyxFQUFJQyxLQUFTQyxFQUFHRixFQUFJRyxlQUFtQkMsRUFBR0osRUFBSUssTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxrQkFBa0IsQ0FBQ0YsRUFBRyxrQkFBa0IsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsYUFBYSxLQUFNLEtBQVFILEVBQUcsTUFBTSxDQUFDRSxZQUFZLG9CQUFvQixDQUFDRixFQUFHLE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLGdCQUFnQixPQUFPLE1BQVEsWUFBWSxDQUFDUixFQUFJUyxHQUFHLEdBQUdMLEVBQUcsVUFBVSxDQUFDRyxNQUFNLENBQUMsVUFBWSxNQUFNLFlBQVksTUFBTSxTQUFXLEdBQUcsUUFBVSxvRUFBb0UsQ0FBQ0gsRUFBRyxPQUFPLENBQUNHLE1BQU0sQ0FBQyxLQUFPLDhCQUE4QixHQUFHSCxFQUFHLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLE1BQVEsU0FBU0QsTUFBTSxDQUFDLEtBQU8sV0FBV0csR0FBRyxDQUFDLE1BQVFWLEVBQUlXLGFBQWEsQ0FBQ1gsRUFBSVksR0FBRyxTQUFT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TixFQUFJSSxFQUFNTixFQUFtQkUsSUFDakRDLEVBQU9ELEVBQUlGLEVBQ1hJLEVBQUtGLEVBQUlILEVBQ0xJLEtBQVFFLEVBQUdBLEVBQUVELEdBQU1DLEVBQUVGLFVBQ2JFLEVBQUVELEdBRWhCLElBQUtGLEVBQUlJLEVBQUtKLEVBQUlJLEVBQU1OLEVBQW9CRCxFQUFhRyxXQUFZRyxFQUFFSCxFQUFJLFFBQ3RFLEdBQUlILEVBQWNDLEVBQ3ZCLElBQUtFLEVBQUlJLEVBQU1OLEVBQW1CRSxFQUFJTSxFQUFhTixJQUNqREMsRUFBT0QsRUFBSUYsRUFBb0IsRUFDL0JJLEVBQUtGLEVBQUlILEVBQWMsRUFDbkJJLEtBQVFFLEVBQUdBLEVBQUVELEdBQU1DLEVBQUVGLFVBQ2JFLEVBQUVELEdBR2xCLElBQUtGLEVBQUksRUFBR0EsRUFBSUgsRUFBYUcsSUFDM0JHLEVBQUVILEVBQUlNLEdBQWVFLFVBQVVSLEVBQUksR0FHckMsT0FEQUcsRUFBRUUsT0FBU0QsRUFBTU4sRUFBb0JELEVBQzlCRSxNLGtDQ25FWCx5QkFBcWxCLEVBQUcsRyIsImZpbGUiOiJqcy9jaHVuay0wYWZlMTU1My44MGVhMGY2My5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm5vZGUtYWRtaXNzaW9uXCJ9LFtfYygnYnVzaW5lc3MtaGVhZGVyJyx7YXR0cnM6e1widGl0bGVcIjpcIuS4muWKoeezu+e7n+iuv+mXruiuuOWPr+euoeeQhlwiLFwiYnRuXCI6dHJ1ZX19KSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJiZy13aGl0ZSBwYWRkaW5nXCJ9LFtfYygnZGl2Jyx7c3RhdGljU3R5bGU6e1wibWFyZ2luLWJvdHRvbVwiOlwiMjVweFwiLFwiY29sb3JcIjpcIiMyNzNENTJcIn19LFtfdm0uX20oMCksX2MoJ1Rvb2x0aXAnLHthdHRyczp7XCJwbGFjZW1lbnRcIjpcInRvcFwiLFwibWF4LXdpZHRoXCI6XCI2MDBcIixcInRyYW5zZmVyXCI6XCJcIixcImNvbnRlbnRcIjpcIuWKn+aViOivtOaYju+8muWcqOKAnOWMv+WQjeiwg+eUqOiuv+mXruKAnemAieaLqeKAnOWFgeiuuOKAneaXtu+8jOemgeatoueJueWumueahOWJjee9ruiKgueCueS4jumTvuW7uueri+iuv+mXrumAmumBk++8jOiiq+emgeatoueahOWJjee9ruiKgueCueaXoOazleWQkemTvuS4iuaPkOS6pOaIluiuv+mXrumTvuS4iuaVsOaNruOAglwifX0sW19jKCdJY29uJyx7YXR0cnM6e1widHlwZVwiOlwiaW9zLWhlbHAtY2lyY2xlLW91dGxpbmVcIn19KV0sMSksX2MoJ0J1dHRvbicse3N0YXRpY1N0eWxlOntcImZsb2F0XCI6XCJyaWdodFwifSxhdHRyczp7XCJ0eXBlXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6X3ZtLmNvbmZpcm1BZGR9fSxbX3ZtLl92KFwi5re75YqgXCIpXSldLDEpLF9jKCdSb3cnLFtfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOlwiNVwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1pdGVtXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY29uZGl0aW9uLWxhYmVsXCJ9LFtfdm0uX3YoXCLkuJrliqHns7vnu5/lkI3np7DvvJpcIildKSxfYygnSW5wdXQnLHthdHRyczp7XCJ0eXBlXCI6XCJ0ZXh0XCIsXCJwbGFjZWhvbGRlclwiOlwi5Lia5Yqh57O757uf5ZCN56ewXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmZvcm0ubmFtZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImZvcm0ubmFtZVwifX0pXSwxKV0pLF9jKCdDb2wnLHthdHRyczp7XCJzcGFuXCI6XCI3XCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29uZGl0aW9uLWl0ZW1cIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjb25kaXRpb24tbGFiZWxcIn0sW192bS5fdihcIuS4muWKoeezu+e7n+i6q+S7veagh+ivhu+8mlwiKV0pLF9jKCdJbnB1dCcse2F0dHJzOntcInR5cGVcIjpcInRleHRcIixcInBsYWNlaG9sZGVyXCI6XCLkuJrliqHns7vnu5/ouqvku73moIfor4ZcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZm9ybS5hZGRyZXNzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYWRkcmVzc1wiLCAkJHYpfSxleHByZXNzaW9uOlwiZm9ybS5hZGRyZXNzXCJ9fSldLDEpXSksX2MoJ0NvbCcse2F0dHJzOntcInNwYW5cIjpcIjZcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb25kaXRpb24taXRlbVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1sYWJlbFwifSxbX3ZtLl92KFwi54q25oCB77yaXCIpXSksX2MoJ1NlbGVjdCcse2F0dHJzOntcInZhbHVlXCI6XCIwXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmZvcm0uc3RhdHVzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdil9LGV4cHJlc3Npb246XCJmb3JtLnN0YXR1c1wifX0sW19jKCdPcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwiMFwifX0sW192bS5fdihcIuWFqOmDqFwiKV0pLF9jKCdPcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwiMVwifX0sW192bS5fdihcIuW3sua3u+WKoFwiKV0pLF9jKCdPcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwiMlwifX0sW192bS5fdihcIuW3suWIoOmZpFwiKV0pLF9jKCdPcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwiM1wifX0sW192bS5fdihcIua3u+WKoOWuoeaguOS4rVwiKV0pLF9jKCdPcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwiNFwifX0sW192bS5fdihcIuWIoOmZpOWuoeaguOS4rVwiKV0pXSwxKV0sMSldKSxfYygnQ29sJyx7YXR0cnM6e1wic3BhblwiOlwiNlwifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbmRpdGlvbi1pdGVtXCJ9LFtfYygnQnV0dG9uJyx7c3RhdGljU3R5bGU6e1wid2lkdGhcIjpcIjgwcHhcIn0sYXR0cnM6e1widHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOl92bS5zZWFyY2h9fSxbX3ZtLl92KFwi5p+l6K+iXCIpXSldLDEpXSldLDEpLF9jKCdkaXYnLFtfYygnVGFibGUnLHthdHRyczp7XCJjb2x1bW5zXCI6X3ZtLmNvbHVtbnMxLFwiZGF0YVwiOl92bS5kYXRhMX19KV0sMSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicGFnZVwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicGFnZS1pbm5lclwifSxbX2MoJ1BhZ2UnLHthdHRyczp7XCJ0b3RhbFwiOl92bS50b3RhbH0sb246e1wib24tY2hhbmdlXCI6X3ZtLnBhZ2VDaGFuZ2V9fSldLDEpXSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc3BhbicsW19jKCdiJyxbX3ZtLl92KFwi5Lia5Yqh5Z+f6LCD55So6K6/6ZeuXCIpXSksX2MoJ2InLFtfdm0uX3YoXCLjgJDnmb3lkI3ljZXjgJFcIildKSxfdm0uX3YoXCLvvJogXCIpXSl9XVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibm9kZS1hZG1pc3Npb25cIj5cbiAgICA8YnVzaW5lc3MtaGVhZGVyIHRpdGxlPVwi5Lia5Yqh57O757uf6K6/6Zeu6K645Y+v566h55CGXCIgOmJ0bj1cInRydWVcIi8+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcGFkZGluZ1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweDtjb2xvcjogIzM3MzczNztcIj5cbiAgICAgIDxzcGFuPuS4muWKoeWfn+WMv+WQjeiwg+eUqOiuv+mXru+8mjwvc3Bhbj5cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIG1heC13aWR0aD1cIjYwMFwiXG4gICAgICAgIHRyYW5zZmVyXG4gICAgICA+XG4gICAgICAgIDxJY29uIHR5cGU9XCJpb3MtaGVscC1jaXJjbGUtb3V0bGluZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICA8UmFkaW9Hcm91cCBzdHlsZT1cIm1hcmdpbjogMCAyMHB4O1wiIHYtbW9kZWw9XCJzd2l0Y2gxXCI+XG4gICAgICAgIDxSYWRpbyBsYWJlbD1cIjFcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNDBweDtcIj7lhYHorrg8L1JhZGlvPlxuICAgICAgICA8UmFkaW8gbGFiZWw9XCIwXCI+56aB5q2iPC9SYWRpbz5cbiAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT1cImZsb2F0OiByaWdodDttYXJnaW4tdG9wOiAtNXB4OyBcIj7kv67mlLk8L0J1dHRvbj5cbiAgICA8L2Rpdj4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHBhZGRpbmdcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyNXB4O2NvbG9yOiAjMjczRDUyO1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8Yj7kuJrliqHln5/osIPnlKjorr/pl648L2I+XG4gICAgICAgICAgPGI+44CQ55m95ZCN5Y2V44CRPC9iPu+8mlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICBtYXgtd2lkdGg9XCI2MDBcIlxuICAgICAgICAgIHRyYW5zZmVyXG4gICAgICAgICAgY29udGVudD1cIuWKn+aViOivtOaYju+8muWcqOKAnOWMv+WQjeiwg+eUqOiuv+mXruKAnemAieaLqeKAnOWFgeiuuOKAneaXtu+8jOemgeatoueJueWumueahOWJjee9ruiKgueCueS4jumTvuW7uueri+iuv+mXrumAmumBk++8jOiiq+emgeatoueahOWJjee9ruiKgueCueaXoOazleWQkemTvuS4iuaPkOS6pOaIluiuv+mXrumTvuS4iuaVsOaNruOAglwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwiaW9zLWhlbHAtY2lyY2xlLW91dGxpbmVcIiAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiAgQGNsaWNrPVwiY29uZmlybUFkZFwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49XCI1XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24taXRlbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uZGl0aW9uLWxhYmVsXCI+5Lia5Yqh57O757uf5ZCN56ew77yaPC9zcGFuPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiBwbGFjZWhvbGRlcj1cIuS4muWKoeezu+e7n+WQjeensFwiPjwvSW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPVwiN1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWl0ZW1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmRpdGlvbi1sYWJlbFwiPuS4muWKoeezu+e7n+i6q+S7veagh+ivhu+8mjwvc3Bhbj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5hZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCLkuJrliqHns7vnu5/ouqvku73moIfor4ZcIj48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj1cIjZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvbi1pdGVtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb24tbGFiZWxcIj7nirbmgIHvvJo8L3NwYW4+XG4gICAgICAgICAgPFNlbGVjdCB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+5YWo6YOoPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMVwiPuW3sua3u+WKoDwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjJcIj7lt7LliKDpmaQ8L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIzXCI+5re75Yqg5a6h5qC45LitPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiNFwiPuWIoOmZpOWuoeaguOS4rTwvT3B0aW9uPlxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj1cIjZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvbi1pdGVtXCI+XG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiIEBjbGljaz1cInNlYXJjaFwiIHR5cGU9XCJwcmltYXJ5XCI+5p+l6K+iPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRhYmxlIDpjb2x1bW5zPVwiY29sdW1uczFcIiA6ZGF0YT1cImRhdGExXCI+PC9UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaW5uZXJcIj5cbiAgICAgICAgICA8UGFnZSA6dG90YWw9XCJ0b3RhbFwiIEBvbi1jaGFuZ2U9XCJwYWdlQ2hhbmdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgY29sdW1uczEgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Lia5Yqh57O757uf5ZCN56ewJyxcbiAgICAgICAga2V5OiAnbmFtZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Lia5Yqh57O757uf6Lqr5Lu95qCH6K+GJyxcbiAgICAgICAga2V5OiAnYWRkcmVzcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5re75Yqg5pe26Ze0JyxcbiAgICAgICAga2V5OiAndGltZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn54q25oCBJyxcbiAgICAgICAga2V5OiAnc3RhdHVzbGFiZWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAgICAgIHJlbmRlciAoaCwgcCkge1xuICAgICAgICAgIGxldCByb3cgPSBwLnJvdyB8fCB7fVxuICAgICAgICAgIGxldCBsYWJlbCA9ICctLSdcbiAgICAgICAgICBsZXQgc3RhdHVzID0gcm93LnN0YXR1c1xuICAgICAgICAgIGlmIChzdGF0dXMgPT0gJzInKSB7XG4gICAgICAgICAgICBsYWJlbCA9ICfliKDpmaQnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0dXMgPT0gJzMnKSB7XG4gICAgICAgICAgICBsYWJlbCA9ICfmkqTplIAnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBoKCdhJywge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2sgKCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHAuaW5kZXhcbiAgICAgICAgICAgICAgICB0aGF0LmRhdGExLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGxhYmVsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICAgIGxldCBkYXRhMSA9IFtcbiAgICAgIHsgbmFtZTogJ+S4iua1t+WFrOivgeezu+e7nycsIGFkZHJlc3M6ICcwMDc0MGYuLi5hYWJhOCcsIHRpbWU6ICcyMDIwLTEtNSAxMDo0NToyNScsIHN0YXR1c2xhYmVsOiAn5bey5re75YqgJywgc3RhdHVzOiAnMicgfSxcbiAgICAgIHsgbmFtZTogJ+Wbm+W3neWFrOivgeezu+e7nycsIGFkZHJlc3M6ICcwMGRhMGMuLi5jZmJlNScsIHRpbWU6ICctLScsIHN0YXR1c2xhYmVsOiAn5Yig6Zmk5a6h5qC45LitJywgc3RhdHVzOiAnMScgfSxcbiAgICAgIHsgbmFtZTogJ+Wbm+W3neWFrOivgeezu+e7nycsIGFkZHJlc3M6ICcwMGRhMGMuLi5jZmJlNScsIHRpbWU6ICctLScsIHN0YXR1c2xhYmVsOiAn5re75Yqg5a6h5qC45LitJywgc3RhdHVzOiAnMScgfSxcbiAgICAgIHsgbmFtZTogJ+WMl+S6rOWFrOivgeezu+e7nycsIGFkZHJlc3M6ICcwMDc0MGYuLi5kYWRhZicsIHRpbWU6ICcyMDIwLTEtMSAxMjowMDowMCcsIHN0YXR1c2xhYmVsOiAn5bey5o6I5p2DJywgc3RhdHVzOiAnMycgfVxuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXB0TGltaXQ6ICcxLzMnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBhZGRyZXNzOiAnJyxcbiAgICAgIGFkZE1vZGFsOiBmYWxzZSxcbiAgICAgIGNvbHVtbnMxLFxuICAgICAgZGF0YTEsXG4gICAgICB0b3RhbDogMTAwLFxuICAgICAgZm9ybToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgIHN0YXR1czogJydcbiAgICAgIH0sXG4gICAgICBzd2l0Y2gxOiAnMCdcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH0sXG4gIHdhdGNoOiB7fSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCAoKSB7fSxcbiAgICBjb25maXJtQWRkICgpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvYnVzaW5lc3MtYWRkcGVybWlzc2lvbicpXG4gICAgfSxcbiAgICBvayAoKSB7fSxcbiAgICBzZWFyY2ggKCkge30sXG4gICAgY2FuY2VsICgpIHt9LFxuICAgIHBhZ2VDaGFuZ2UgKHBhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhZ2UpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuLmFwcHJvdmFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gICYgPiBkaXYge1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICB9XG59XG4ubGVhZ3VlLW1lbSB7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgc3BhbiB7XG4gICAgY29sb3I6ICMyNzNENTI7XG4gIH1cbiAgLmZyIHtcbiAgICBjb2xvcjogIzYwOTRmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MDk0ZmY7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uYWRkLW1vZGFsLWJvZHkge1xuICAmID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLmNvbmRpdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuY29uZGl0aW9uLWxhYmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG4gIC5pdnUtaW5wdXQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuaXZ1LXNlbGVjdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWYyOGJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlYWYyOGJlJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2VhZjI4YmVcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzcGxpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzcGxpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9MRU5HVEhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGxlbmd0aCBleGNlZWRlZCc7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc3BsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zcGxpY2Vcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQgLyogLCAuLi5pdGVtcyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsU3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGluc2VydENvdW50LCBhY3R1YWxEZWxldGVDb3VudCwgQSwgaywgZnJvbSwgdG87XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBhY3R1YWxEZWxldGVDb3VudCA9IDA7XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGluc2VydENvdW50ID0gMDtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbGVuIC0gYWN0dWFsU3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvdW50ID0gYXJndW1lbnRzTGVuZ3RoIC0gMjtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbWluKG1heCh0b0ludGVnZXIoZGVsZXRlQ291bnQpLCAwKSwgbGVuIC0gYWN0dWFsU3RhcnQpO1xuICAgIH1cbiAgICBpZiAobGVuICsgaW5zZXJ0Q291bnQgLSBhY3R1YWxEZWxldGVDb3VudCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEKTtcbiAgICB9XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCBhY3R1YWxEZWxldGVDb3VudCk7XG4gICAgZm9yIChrID0gMDsgayA8IGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgIGZyb20gPSBhY3R1YWxTdGFydCArIGs7XG4gICAgICBpZiAoZnJvbSBpbiBPKSBjcmVhdGVQcm9wZXJ0eShBLCBrLCBPW2Zyb21dKTtcbiAgICB9XG4gICAgQS5sZW5ndGggPSBhY3R1YWxEZWxldGVDb3VudDtcbiAgICBpZiAoaW5zZXJ0Q291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gYWN0dWFsU3RhcnQ7IGsgPCBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50O1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgICAgfVxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGUgT1trIC0gMV07XG4gICAgfSBlbHNlIGlmIChpbnNlcnRDb3VudCA+IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgayA+IGFjdHVhbFN0YXJ0OyBrLS0pIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudCAtIDE7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50IC0gMTtcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gMDsgayA8IGluc2VydENvdW50OyBrKyspIHtcbiAgICAgIE9bayArIGFjdHVhbFN0YXJ0XSA9IGFyZ3VtZW50c1trICsgMl07XG4gICAgfVxuICAgIE8ubGVuZ3RoID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZWFmMjhiZSZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlYWYyOGJlJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=