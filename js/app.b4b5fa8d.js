(function(){"use strict";var e={641:function(e,t,n){var r=n(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{users:e.getUsers,items:e.getLinks}})],1)},s=[],u=n(629),i={name:"app",computed:(0,u.Se)(["getUsers","getLinks"]),methods:(0,u.nv)(["fetchUsers","fetchLinks"]),mounted(){this.fetchUsers()}},a=i,c=n(1),l=(0,c.Z)(a,o,s,!1,null,null,null),f=l.exports,p=n(345),d=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text"},[e._v("Users")]),t("hr"),e._l(e.users,(function(e){return t("UserItem",{key:e.id,attrs:{users:e}})}))],2)},m=[],h=function(){var e=this,t=e._self._c;return t("b-list-group",{staticClass:"mx-auto",staticStyle:{"max-width":"340px"}},[t("b-list-group-item",{staticClass:"d-flex align-items-center"},[t("b-avatar",{staticClass:"mr-3"}),t("router-link",{staticClass:"mr-auto link",attrs:{items:e.items,to:{name:"profile-page",params:{id:e.users.id}}}},[e._v(e._s(e.users.name))])],1)],1)},v=[],g={name:"UserItem",props:["users","items"]},b=g,y=(0,c.Z)(b,h,v,!1,null,"d4aa670a",null),w=y.exports,j={components:{UserItem:w},props:["users"]},k=j,_=(0,c.Z)(k,d,m,!1,null,null,null),C=_.exports;r["default"].use(p.Z);const P=[{name:"users-page",path:"/",component:C},{name:"profile-page",path:"/user/:id",component:()=>n.e(577).then(n.bind(n,577)),props:!0},{name:"albums-page",path:"/user/:id/albums",component:()=>n.e(364).then(n.bind(n,364)),props:!0},{name:"posts",path:"/user/:id/posts",component:()=>n.e(171).then(n.bind(n,171)),props:!0}],O=new p.Z({mode:"history",base:"/vue_project/",routes:P});var A=O,U={state:{users:[],profile:null},getters:{getUsers(e){return e.users}},mutations:{updateUsers(e,t){return e.users=t},updateProfile(e,t){return e.profile=t}},actions:{async fetchUsers({commit:e}){const t="https://jsonplaceholder.typicode.com/users",n=await fetch(t),r=await n.json();e("updateUsers",r)},async getUserProfile({commit:e},t){const n=`https://jsonplaceholder.typicode.com/users/${t}`,r=await fetch(n),o=await r.json();e("updateProfile",o)}}},x={state:{album:[]},getters:{getAlbum(e){return e.album}},mutations:{updateAlbum(e,t){return e.album=t}},actions:{async fetchAlbum({commit:e}){const t="https://jsonplaceholder.typicode.com/photos?_limit=2",n=await fetch(t),r=await n.json();e("updateAlbum",r)}}},S={state:{posts:[]},getters:{getPosts(e){return e.posts}},mutations:{updatePosts(e,t){return e.posts=t},addNewPost(e,t){return e.posts.push(t)}},actions:{async fetchPosts({commit:e}){const t="https://jsonplaceholder.typicode.com/posts?_limit=5",n=await fetch(t),r=await n.json();e("updatePosts",r)}}};r["default"].use(u.ZP);var E=new u.ZP.Store({modules:{user:U,albums:x,post:S}}),T=n(69),L=n(17);n(24);r["default"].use(T.XG7),r["default"].use(L.A7),r["default"].config.productionTip=!1,window.events=new r["default"],new r["default"]({router:A,store:E,render:e=>e(f)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var i=!0,a=0;a<r.length;a++)(!1&s||u>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,s<u&&(u=s));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{171:"533dbba5",364:"4adf4679",577:"98a2d2c6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{171:"6f07738e",364:"b331313b",577:"b2731cf5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-project:";n.l=function(r,o,s,u){if(e[r])e[r].push(o);else{var i,a;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+s){i=f;break}}i||(a=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[o];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue_project/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var u=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=i,o.parentNode.removeChild(o),r(a)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],s=o.getAttribute("data-href");if(s===e||s===t)return o}},r=function(r){return new Promise((function(o,s){var u=n.miniCssF(r),i=n.p+u;if(t(u,i))return o();e(r,i,o,s)}))},o={143:0};n.f.miniCss=function(e,t){var n={171:1,364:1,577:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=s);var u=n.p+n.u(t),i=new Error,a=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+u+")",i.name="ChunkLoadError",i.type=s,i.request=u,o[1](i)}};n.l(u,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,u=r[0],i=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var l=a(n)}for(t&&t(r);c<u.length;c++)s=u[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(641)}));r=n.O(r)})();
//# sourceMappingURL=app.b4b5fa8d.js.map