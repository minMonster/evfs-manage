(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519077e4"],{"11ac":function(t,i,n){"use strict";n.d(i,"d",(function(){return r})),n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return s})),n.d(i,"g",(function(){return c})),n.d(i,"h",(function(){return u})),n.d(i,"i",(function(){return l})),n.d(i,"e",(function(){return p}));var o=n("db04"),r=function(t,i){return o["a"].post("cmw/pbqbl.do",t,i)},e=function(t,i){return o["a"].post("cmw/pbqbd.do",t,i)},a=function(t,i){return o["a"].post("cmw/pbqbi.do",t,i)},s=function(t,i){return o["a"].post("cmw/pbqbc.do",t,i)},c=function(t,i){return o["a"].post("cmw/pbqml.do",t,i)},u=function(t,i){return o["a"].post("cmw/pbqrc.do",t,i)},l=function(t,i){return o["a"].post("cmw/pbqrm.do",t,i)},p=function(t,i){return o["a"].post("cmw/pbqbs.do",t,i)}},9732:function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"business-detail"},[n("business-header",{attrs:{title:"业务域内文件操作规则设置",btn:!0}}),n("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"30px",color:"#373737"}},[n("span",[t._v("信息监管：")]),n("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:""}},[n("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),n("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.information,callback:function(i){t.information=i},expression:"information"}},[n("Radio",{staticStyle:{"margin-right":"40px"},attrs:{label:"1"}},[t._v("允许")]),n("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),n("Button",{staticStyle:{float:"right","margin-top":"-5px"},attrs:{type:"primary"}},[t._v("修改")])],1),n("div",{staticClass:"bg-white padding",staticStyle:{"margin-bottom":"30px",color:"#373737"}},[n("div",{staticStyle:{"margin-bottom":"20px"}},[n("span",[t._v("文件删除权限控制：")]),n("Tooltip",{attrs:{placement:"top","max-width":"600",transfer:""}},[n("Icon",{attrs:{type:"ios-help-circle-outline"}})],1),n("RadioGroup",{staticStyle:{margin:"0 20px"},model:{value:t.filePermission,callback:function(i){t.filePermission=i},expression:"filePermission"}},[n("Radio",{staticStyle:{"margin-right":"40px"},attrs:{label:"1"}},[t._v("允许")]),n("Radio",{attrs:{label:"0"}},[t._v("禁止")])],1),n("Button",{staticStyle:{float:"right","margin-top":"-5px"},attrs:{type:"primary"}},[t._v("修改")])],1)])],1)},r=[],e=n("11ac"),a={data:function(){return{switch3:"0",information:"",filePermission:""}},watch:{},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;console.log(this.$route.query.biz_id,"this.$route.query.biz_id"),e["c"]({biz_id:sessionStorage.getItem("fbs_biz_id")}).then((function(i){t.filePermission=i.filePermission,t.information=i.information})).catch((function(i){t.$Message.error(i.retMsg)}))},pageChange:function(t){}}},s=a,c=n("2877"),u=Object(c["a"])(s,o,r,!1,null,null,null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-519077e4.af876b0b.js.map