(function(t){function e(e){for(var r,a,l=e[0],u=e[1],s=e[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={cnblogs:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ideas/vue-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("961e")},"3d94":function(t,e,n){"use strict";var r=n("6785"),o=n.n(r);o.a},6785:function(t,e,n){},"961e":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={},l=a,u=(n("9f60"),n("2877")),s=Object(u["a"])(l,o,i,!1,null,null,null),c=s.exports,f=n("c478"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["list"!==t.tab?n("div",{on:{click:function(e){t.tab="list"}}},[t._v("show list")]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:"list"===t.tab,expression:"tab === 'list'"}]},[n("list",{on:{"show-detail":t.onShowDetail}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"detail"===t.tab,expression:"tab === 'detail'"}]},[n("detail",{attrs:{news:t.news}})],1)])},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ol",t._l(t.news,(function(e){return n("li",{key:e.link},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.showDetail(e)}}},[t._v(t._s(e.title))])])})),0),n("button",{on:{click:t.loadNextPage}},[t._v("Next Page -> "+t._s(t.page+1))])])},v=[];n("b54a"),n("a481"),n("5df3"),n("1c4c");function w(t){var e=new DOMParser,n=e.parseFromString(t,"text/html");return n}function m(t){return fetch("https://news.cnblogs.com/m?page="+t).then((function(t){return t.text()})).then((function(t){var e=w(t),n=e.querySelectorAll(".list_item");return Array.from(n).map((function(t){return{title:(t.textContent||"").trim(),link:t.querySelector("a").getAttribute("href")}}))}))}function b(t){var e="https://news.cnblogs.com"+t;return fetch(e).then((function(t){return t.text()})).then((function(t){var n=w(t),r=n.querySelector("#main_body").innerHTML;return r.replace(/<a href="(\/\/[^"]+)">\[图片\]<\/a>/g,'<img src="https:$1?x-referrer-url='.concat(encodeURIComponent(e),'" />'))}))}var g={data:function(){return{page:0,news:[]}},mounted:function(){console.log("list.vue mounted"),this.loadNextPage()},methods:{loadNextPage:function(){var t=this;m(++this.page).then((function(e){t.news=t.news.concat(e)})).catch((function(e){console.warn("第".concat(t.page,"页数据加载失败: "),e)}))},showDetail:function(t){this.$emit("show-detail",t)}},filters:{transferDetailLink:function(t){return"/detail?link=".concat(t.link)}}},_=g,y=Object(u["a"])(_,h,v,!1,null,null,null),x=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.newsHtml)}})},k=[],j={props:["news"],data:function(){return{newsHtml:""}},methods:{loadDetail:function(){var t=this;this.news.link&&b(this.news.link).then((function(e){t.newsHtml=e})).catch((function(t){alert("error: "+t.message)}))}},watch:{"news.link":function(){this.loadDetail()}}},P=j,S=(n("3d94"),Object(u["a"])(P,O,k,!1,null,null,null)),D=S.exports,M={data:function(){return{tab:"list",news:{}}},methods:{onShowDetail:function(t){this.tab="detail",this.news=t}},components:{list:x,detail:D}},$=M,N=Object(u["a"])($,d,p,!1,null,null,null),H=N.exports;r["a"].use(f["a"]);var T=new f["a"]({mode:"hash",base:"/ideas/vue-demo/",routes:[{path:"/",name:"news-list",component:H}]});r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(t){return t(c)}}).$mount("#app")},"9f60":function(t,e,n){"use strict";var r=n("a809"),o=n.n(r);o.a},a809:function(t,e,n){}});
//# sourceMappingURL=cnblogs.268f92ac.js.map