(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a492e52"],{"1b25":function(t,a,s){},"6eca":function(t,a,s){"use strict";var e=s("1b25"),i=s.n(e);i.a},"9ed6":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login"},[s("div",{staticClass:"header-title"},[t._v("欢迎登录")]),s("p",{staticClass:"header-info"},[t._v("请使用“数字身份管理”APP扫描二维码，进行登录身份确认")]),t.qrCodeUrl?s("div",{staticClass:"qrcode"},[t.qrCodeUrl?s("vue-qr-code",{staticClass:"qrCodeAuthDialog-picture",attrs:{margin:0,id:"picture",value:t.qrCodeUrl}}):t._e()],1):t._e(),t._m(0),s("img",{staticClass:"b-g-img1",staticStyle:{position:"absolute",top:"0",left:"0",width:"443px",height:"492px",opacity:"0.04",background:"#388af7"},attrs:{src:"",alt:""}}),s("img",{staticClass:"b-g-img5",staticStyle:{position:"absolute",bottom:"0",right:"0",width:"502px",height:"447px",opacity:"0.04",background:"#388af7"},attrs:{src:"",alt:""}}),s("img",{staticClass:"b-g-img2",staticStyle:{position:"absolute",top:"206px",right:"471px",width:"84px",height:"65px",opacity:"0.04",background:"red"},attrs:{src:"",alt:""}}),s("img",{staticClass:"b-g-img3",staticStyle:{position:"absolute",bottom:"129px",left:"158px",width:"84px",height:"65px",opacity:"0.04",background:"red"},attrs:{src:"",alt:""}}),s("img",{staticClass:"b-g-img4",staticStyle:{position:"absolute",bottom:"149px",right:"273px",width:"84px",height:"65px",opacity:"0.04",background:"red"},attrs:{src:"",alt:""}})])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"info"},[s("p",[t._v("没有“数字身份管理”APP？")]),s("p",[t._v("* “数字身份管理” App，请访问此链接下载安装："),s("a",{attrs:{href:"https://www.coolaw.com/cfchain/eID",target:"_blank"}},[t._v("https://www.coolaw.com/cfchain/eID")])]),s("p",[t._v("* 请在“数字身份管理” App中进行数字身份创建和管理。")])])}],r=s("a8c4"),o=s.n(r),c=s("f96b"),n={name:"login",components:{VueQrCode:o.a},data:function(){return{qrCodeUrl:"",fbsInterval:null}},created:function(){var t=this,a=(new Date).getTime();this.qrCodeUrl=JSON.stringify({url:"http://124.71.130.140:18093/fbs/cmw/pblin.do",func:"login_manager",data:{ts:a}}),this.fbsInterval&&clearInterval(this.fbsInterval),this.fbsInterval=setInterval((function(){c["d"]({},{params:{smid:a}}).then((function(a){"success"===a.loginStatus&&(sessionStorage.setItem("fbs_address",a.address),t.$Message.success("登录成功"),t.$router.push("/"),clearInterval(t.fbsInterval))}))}),3e3)},methods:{}},l=n,p=(s("6eca"),s("2877")),d=Object(p["a"])(l,e,i,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4a492e52.80a63d96.js.map