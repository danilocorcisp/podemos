!function(e){function t(t){for(var l,c,u=t[0],s=t[1],o=t[2],d=0,m=[];d<u.length;d++)c=u[d],n[c]&&m.push(n[c][0]),n[c]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(i&&i(t);m.length;)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,u=1;u<a.length;u++){var s=a[u];0!==n[s]&&(l=!1)}l&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},n={1:0},r=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var i=s;r.push([37,0]),a()}({29:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(1),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e){var t=e.title,a=e.image,l=e.trackUrl;return r.default.createElement("div",{className:"d-block d-md-flex podcast-entry bg-white mb-5"},r.default.createElement("div",{className:"image",style:{backgroundImage:"url('"+a+"')"}}),r.default.createElement("div",{className:"text"},r.default.createElement("h3",{className:"font-weight-light"},r.default.createElement("a",{href:"single-post.html"},t)),r.default.createElement("div",{className:"text-white mb-3"},r.default.createElement("span",{className:"text-black-opacity-05"},r.default.createElement("small",null,"By Mike Smith",r.default.createElement("span",{className:"sep"},"/")," 16 September 2017",r.default.createElement("span",{className:"sep"},"/"),"1:30:20"))),r.default.createElement("div",{className:"player"},r.default.createElement("audio",{id:"player2",preload:"none",controls:!0,controlsList:"nodownload",style:{width:"100%"}},r.default.createElement("source",{src:l,type:"audio/mp3"})))))}},30:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(1),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(e){var t=e.name,a=e.image,l=e.categories,n=e.onSelect;return r.default.createElement("li",null,r.default.createElement("a",{href:"#",onClick:n,className:"d-flex align-items-center p-2"},r.default.createElement("img",{src:a,alt:"Image",className:"img-fluid mr-2"}),r.default.createElement("div",{className:"podcaster"},r.default.createElement("span",{className:"d-block"},t),r.default.createElement("span",{className:"small"},l.join(", ")))))}},31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(1),r=(l=n)&&l.__esModule?l:{default:l};t.default=function(){return r.default.createElement("header",{className:"site-navbar py-4",role:"banner"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row align-items-center"},r.default.createElement("div",{className:"col-3"},r.default.createElement("h1",{className:"site-logo"},r.default.createElement("a",{href:"index.html",className:"h2"},"Podcast",r.default.createElement("span",{className:"text-primary"},".")))),r.default.createElement("div",{className:"col-9"},r.default.createElement("nav",{className:"site-navigation position-relative text-right text-md-right",role:"navigation"},r.default.createElement("div",{className:"d-block d-lg-none ml-md-0 mr-auto"},r.default.createElement("a",{href:"#",className:"site-menu-toggle js-menu-toggle text-black"},r.default.createElement("span",{className:"icon-menu h3"}))),r.default.createElement("ul",{className:"site-menu js-clone-nav d-none d-lg-block"},r.default.createElement("li",{className:"active"},r.default.createElement("a",{href:"index.html"},"Home")),r.default.createElement("li",null,r.default.createElement("a",{href:"about.html"},"About")),r.default.createElement("li",null,r.default.createElement("a",{href:"contact.html"},"Contact")),r.default.createElement("li",null,r.default.createElement("a",{href:"login-register.html"},"Login / Register"))))))))}},37:function(e,t,a){"use strict";var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],l=!0,n=!1,r=void 0;try{for(var c,u=e[Symbol.iterator]();!(l=(c=u.next()).done)&&(a.push(c.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{!l&&u.return&&u.return()}finally{if(n)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=a(1),c=m(r),u=m(a(35)),s=m(a(31)),o=m(a(30)),i=m(a(29)),d=m(a(28));function m(e){return e&&e.__esModule?e:{default:e}}u.default.render(c.default.createElement(function(){var e=(0,r.useState)(""),t=n(e,2),a=t[0],u=t[1],m=(0,r.useState)([]),f=n(m,2),p=f[0],h=f[1],v=(0,r.useState)([]),E=n(v,2),g=E[0],b=E[1],y=(0,r.useState)(null),N=n(y,2),w=N[0],x=N[1];return(0,r.useEffect)(function(){if(w){var e="/feed?url="+w.feed;(0,d.default)({url:e,method:"get"}).then(function(e){var t=e.data,a=t.item.map(function(e,t){return{id:t,title:e.title[0],image:w.image,trackUrl:e.enclosure[0].$.url}});b(a)}).catch(function(e){})}},[w]),c.default.createElement("div",{className:"site-wrap"},c.default.createElement(s.default,null),c.default.createElement("div",{className:"site-section"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-lg-3"},c.default.createElement("div",{className:"featured-user mb-5 mb-lg-0"},c.default.createElement("h3",{className:"mb-2"},"Search Podcasts"),c.default.createElement("div",{style:{display:"flex"}},c.default.createElement("input",{onChange:function(e){u(e.target.value)},type:"text",style:{height:32},className:"form-control mb-4"}),c.default.createElement("button",{onClick:function(e){e.preventDefault(),(0,d.default)({url:"/search",method:"post",data:{term:a.trim().toLocaleLowerCase()},options:{headers:{Accept:"application/json"}}}).then(function(e){var t=e.data;h(t.podcasts)}).catch(function(e){})},className:"btn btn-info p-1 ml-2",style:{height:32}},"GO!")),c.default.createElement("ul",{className:"list-unstyled"},p.map(function(e){return c.default.createElement(o.default,l({key:e.id},e,{onSelect:function(t){return function(e,t){t.preventDefault(),x(e)}(e,t)}}))})))),c.default.createElement("div",{className:"col-lg-9"},g.map(function(e){return c.default.createElement(i.default,l({key:e.id},e))}))))))},null),document.getElementById("root"))}});