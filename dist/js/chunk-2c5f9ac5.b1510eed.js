(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5f9ac5"],{"1a40":function(t,a,s){},2394:function(t,a,s){"use strict";var i=s("1a40"),e=s.n(i);e.a},"8bf0":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"node-detail-header"},[s("div",{staticClass:"clear chain-baseinfo"},[s("h2",{staticClass:"content-title"},[t._v(t._s(t.title)+" ")]),s("Row",{staticClass:"chain-header-content"},[s("Col",{attrs:{span:"8"}},[s("div",[t._v("服务器名称：从法存管域-节点4")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("服务器身份标识：00630e...bbac5")])])],1),s("Row",{staticClass:"chain-header-content"},[s("Col",{attrs:{span:"8"}},[s("div",[t._v("企业名称：从法科技")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("企业身份标识：00740f...ccbb1")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("创建时间： 2020-1-5 8:21:32")])])],1),t.status>2?s("Row",{staticClass:"chain-header-content"},[s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属链ID：lskdjflkjsl…dfjsldkjfsd")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属数据存管域名称：：00740f...ccbb1")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属数据存管域ID： 200740f...ccbb9")])])],1):s("Row",{staticClass:"chain-header-content"},[1==t.status?s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属链ID：--")])]):s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属链ID：00740f...aaba8")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属数据存管域名称：：--")])]),s("Col",{attrs:{span:"8"}},[s("div",[t._v("隶属数据存管域ID： --")])])],1)],1),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[s("Row",[s("Col",{attrs:{span:3}},[s("div",[t._v("节点类型：")])]),s("Col",{attrs:{span:10}},[s("RadioGroup",{staticClass:"supervision",model:{value:t.nodeType,callback:function(a){t.nodeType=a},expression:"nodeType"}},[s("Radio",{staticStyle:{"margin-right":"30px"},attrs:{label:"1"}},[t._v("主节点")]),s("Radio",{attrs:{label:"2"}},[t._v("资源节点")])],1)],1)],1)],1),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[t._m(0),s("div",{staticClass:"node-detail-btn"},["1"==t.status?s("Button",{attrs:{type:"primary"}},[t._v("加入链")]):t._e(),t.status>=2?s("Button",{attrs:{type:"primary"}},[t._v("退出当前链")]):t._e()],1),"1"==t.status?s("div",{staticClass:"node-detail-tips"},[t._v(" * 当前服务器将加入现有链的主节点网络。（主节点网络由不属于任何数据存管域的主节点自然形成。) ")]):t._e(),t.status>1?s("div",{staticClass:"node-detail-tips"},[t._v(" * 从当前链实例中彻底退出。 ")]):t._e(),t.status>=3?s("div",{staticClass:"node-detail-btn"},[s("Button",{attrs:{type:"primary"}},[t._v("数据存管域变更")])],1):t._e(),t.status>=3?s("div",{staticClass:"node-detail-tips"},[t._v(" * 申请加入当前链实例中的另一个数据存管域，一旦被批准，则节点服务器将从当前数据存管域准入列表中删除，且缓存的变更前的数据存管域中的文件碎片将会被清空。 ")]):t._e(),3==t.status?s("div",{staticClass:"node-detail-btn"},[s("Button",{attrs:{type:"primary"}},[t._v("退出当前数据存管域")])],1):t._e(),3==t.status?s("div",{staticClass:"node-detail-tips"},[t._v(" * 申请退出当前数据存管域，一旦被批准，则节点服务器将从当前数据存管域准入列表中删除，且缓存的变更前的数据存管域中的文件碎片将会被清空。随后节点只作为专属主节点进行记账服务。 ")]):t._e(),t.status<=2?s("div",{staticClass:"node-detail-btn"},[s("Button",{attrs:{type:"primary"}},[t._v("加入数据存管域")])],1):t._e(),t.status<=2?s("div",{staticClass:"node-detail-tips"},[t._v(" *当前服务器将不仅成为现有链的主节点，提供记账功能，同时也会参与特定数据存管域的数据存管服务。 ")]):t._e()]),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[t._m(1),s("div",{staticClass:"node-detail-storage-info"},[s("Row",[s("Col",{attrs:{span:8}},[s("div",{staticClass:"value"},[t._v(t._s(t.all)+" "),s("span",[t._v("TB")])]),s("p",[t._v("文件存储总容量")])]),s("Col",{attrs:{span:8}},[s("div",{staticClass:"value"},[t._v(t._s(t.available)+" "),s("span",[t._v("TB")])]),s("p",[t._v("可用文件存储容量")])]),s("Col",{attrs:{span:8}},[s("div",{staticClass:"value"},[t._v(t._s(t.used)+" "),s("span",[t._v("TB")])]),s("p",[t._v("已用文件存储容量")])])],1)],1)]),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[s("span",{staticStyle:{display:"inline-block",height:"32px","line-height":"32px","vertical-align":"middle"}},[t._v("容量许可操作：")]),s("Input",{staticStyle:{width:"200px",margin:"0 20px"},attrs:{disabled:t.disabled},model:{value:t.storage,callback:function(a){t.storage=a},expression:"storage"}}),s("div",{staticStyle:{display:"inline-block",position:"relative"}},[s("Select",{staticStyle:{width:"100px","margin-right":"20px"},attrs:{disabled:t.disabled},model:{value:t.unit,callback:function(a){t.unit=a},expression:"unit"}},[s("Option",{attrs:{value:"1"}},[t._v("MB")]),s("Option",{attrs:{value:"2"}},[t._v("GB")]),s("Option",{attrs:{value:"3"}},[t._v("TB")]),s("Option",{attrs:{value:"4"}},[t._v("PB")])],1)],1),s("Button",{staticStyle:{width:"120px"},attrs:{type:"primary"}},[t._v("扩容申请")])],1),s("div",{staticClass:"padding bg-white",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"section-title"},[s("span",[t._v("服务器管理员列表")]),s("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(a){t.addModal=!0}}},[t._v("添加")])],1),s("div",[s("Table",{attrs:{columns:t.columns1,data:t.data1}})],1),s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("Page",{attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popups,expression:"popups"}]},[s("div",{attrs:{id:"qrcode"}}),s("div",{staticClass:"over"})]),s("Modal",{attrs:{title:"添加服务器管理员"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.addModal,callback:function(a){t.addModal=a},expression:"addModal"}},[s("div",{staticClass:"add-modal-body"},[s("div",{staticStyle:{"margin-bottom":"20px"}},[s("Input",{attrs:{placeholder:"请输入链管理员姓名"},model:{value:t.formItem.adminName,callback:function(a){t.$set(t.formItem,"adminName",a)},expression:"formItem.adminName"}})],1),s("div",[s("Input",{attrs:{placeholder:"请输入链管理员身份标识"},model:{value:t.formItem.address,callback:function(a){t.$set(t.formItem,"address",a)},expression:"formItem.address"}})],1)]),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{staticClass:"clearBtn",attrs:{loading:t.addLoading,type:"primary"},on:{click:t.ok}},[t._v("添加")]),s("Button",{staticClass:"clearBtn",staticStyle:{width:"80px"},on:{click:t.cancel}},[t._v("取消")])],1)])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title"},[s("span",[t._v("链内隶属关系管理")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title"},[s("span",[t._v("服务器存储许可容量信息")])])}],n=s("d044"),l=s.n(n),d={data:function(){var t=this,a=[{title:"管理员姓名",key:"adminName"},{title:"管理员身份标识",key:"address"},{title:"操作",render:function(a,s){var i=s.row;return a("a",{on:{click:function(){t.del(i)}}},"删除")}}],s=[{adminName:"张力",address:"008b0f...acfe5"},{adminName:"李志伟",address:"008b0f...abbc3"}],i={adminName:"",address:""};return{title:"节点服务器管理",status:"",nodeType:"1",storage:"10000",unit:"MB",total:120,columns1:a,data1:s,disabled:!0,addModal:!1,addLoading:!1,formItem:i,all:"0.00",available:"0.00",used:"0.00",popups:0}},mounted:function(){this.init()},watch:{},computed:{},methods:{init:function(){this.initStatus()},initStatus:function(){var t=this.$route.query.status||"";this.status=t,4==t&&(this.nodeType="2"),t>2&&(this.disabled=!1),t>=3&&(this.all="5.00",this.available="1.21",this.used="3.79")},ok:function(){var t=this.adminName,a=this.address;t&&a&&this.data1.push({adminName:t,address:a}),this.addModal=!1},del:function(t){this.$Modal.confirm({title:"删除确认",content:'<p style="color:black;font-size:15px;">确定将当前管理员从管理列表中删除？</p><br/> 管理员姓名： '+t.adminName+" <br/> 管理员身份标识: "+t.address,okText:"删除",cancelText:"取消",onOk:function(){this.popups=1,this.creatQrCode()}})},cancel:function(){},pageChange:function(t){},creatQrCode:function(){var t={data:{}};new l.a("qrcode",{text:JSON.stringify(t),width:260,height:260,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.a.CorrectLevel.H})}}},o=d,c=(s("2394"),s("2877")),r=Object(c["a"])(o,i,e,!1,null,"13761d3e",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2c5f9ac5.b1510eed.js.map