(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiuzhenxinxi/add-or-update"],{"0f65":function(e,n,i){"use strict";(function(e){i("5ee9");t(i("66fd"));var n=t(i("510d"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"19a2":function(e,n,i){"use strict";var t;i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"301b":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void i(c)}o.done?n(s):Promise.resolve(s).then(t,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var u=e.apply(n,i);function o(e){a(u,t,r,o,s,"next",e)}function s(e){a(u,t,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("d697"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{gonghao:"",yishengxingming:"",xingbie:"",xiangpian:"",zhiwu:"",guahaofei:"",keshimingcheng:"",keshidizhi:"",jiuzhenshijian:"",yishengjianjie:""},keshimingchengOptions:[],keshimingchengIndex:0,user:{},ro:{gonghao:!1,yishengxingming:!1,xingbie:!1,xiangpian:!1,zhiwu:!1,guahaofei:!1,keshimingcheng:!1,keshidizhi:!1,jiuzhenshijian:!1,yishengjianjie:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(t.default.mark((function r(){var a,u,o,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:return u=r.sent,i.user=u.data,r.next=7,i.$api.option("keshixinxi","keshimingcheng",{});case 7:if(u=r.sent,i.keshimingchengOptions=u.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=17;break}return i.ruleForm.id=n.id,r.next=15,i.$api.info("jiuzhenxinxi",i.ruleForm.id);case 15:u=r.sent,i.ruleForm=u.data;case 17:if(i.cross=n.cross,!n.cross){r.next=65;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 21:if((r.t1=r.t0()).done){r.next=65;break}if(s=r.t1.value,"gonghao"!=s){r.next=27;break}return i.ruleForm.gonghao=o[s],i.ro.gonghao=!0,r.abrupt("continue",21);case 27:if("yishengxingming"!=s){r.next=31;break}return i.ruleForm.yishengxingming=o[s],i.ro.yishengxingming=!0,r.abrupt("continue",21);case 31:if("xingbie"!=s){r.next=35;break}return i.ruleForm.xingbie=o[s],i.ro.xingbie=!0,r.abrupt("continue",21);case 35:if("xiangpian"!=s){r.next=39;break}return i.ruleForm.xiangpian=o[s],i.ro.xiangpian=!0,r.abrupt("continue",21);case 39:if("zhiwu"!=s){r.next=43;break}return i.ruleForm.zhiwu=o[s],i.ro.zhiwu=!0,r.abrupt("continue",21);case 43:if("guahaofei"!=s){r.next=47;break}return i.ruleForm.guahaofei=o[s],i.ro.guahaofei=!0,r.abrupt("continue",21);case 47:if("keshimingcheng"!=s){r.next=51;break}return i.ruleForm.keshimingcheng=o[s],i.ro.keshimingcheng=!0,r.abrupt("continue",21);case 51:if("keshidizhi"!=s){r.next=55;break}return i.ruleForm.keshidizhi=o[s],i.ro.keshidizhi=!0,r.abrupt("continue",21);case 55:if("jiuzhenshijian"!=s){r.next=59;break}return i.ruleForm.jiuzhenshijian=o[s],i.ro.jiuzhenshijian=!0,r.abrupt("continue",21);case 59:if("yishengjianjie"!=s){r.next=63;break}return i.ruleForm.yishengjianjie=o[s],i.ro.yishengjianjie=!0,r.abrupt("continue",21);case 63:r.next=21;break;case 65:i.styleChange();case 66:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},keshimingchengChange:function(e){var n=this;return u(t.default.mark((function i(){var r;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n.keshimingchengIndex=e.target.value,n.ruleForm.keshimingcheng=n.keshimingchengOptions[n.keshimingchengIndex],i.next=4,n.$api.follow("keshixinxi","keshimingcheng",{columnValue:n.ruleForm.keshimingcheng});case 4:r=i.sent,r.data.keshidizhi&&(n.ruleForm.keshidizhi=r.data.keshidizhi);case 6:case"end":return i.stop()}}),i)})))()},xiangpianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangpian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function i(){var r,a,u,o,s,c,h,g,f,l;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.cross){i.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){i.next=16;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=12;break}for(h in c)h==o&&(c[h]=s);return g=e.getStorageSync("crossTable"),i.next=10,n.$api.update("".concat(g),c);case 10:i.next=16;break;case 12:r=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!a||!r){i.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:r,crossrefid:a},i.next=22,n.$api.list("jiuzhenxinxi",f);case 22:if(l=i.sent,!(l.data.total>=u)){i.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 28:if(!n.ruleForm.id){i.next=33;break}return i.next=31,n.$api.update("jiuzhenxinxi",n.ruleForm);case 31:i.next=35;break;case 33:return i.next=35,n.$api.add("jiuzhenxinxi",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:i.next=46;break;case 38:if(!n.ruleForm.id){i.next=43;break}return i.next=41,n.$api.update("jiuzhenxinxi",n.ruleForm);case 41:i.next=45;break;case 43:return i.next=45,n.$api.add("jiuzhenxinxi",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},"49e1":function(e,n,i){"use strict";var t=i("e8d7"),r=i.n(t);r.a},"4c50":function(e,n,i){"use strict";i.r(n);var t=i("301b"),r=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},"510d":function(e,n,i){"use strict";i.r(n);var t=i("19a2"),r=i("4c50");for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);i("49e1");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"12183c8e",null,!1,t["a"],u);n["default"]=s.exports},e8d7:function(e,n,i){}},[["0f65","common/runtime","common/vendor"]]]);