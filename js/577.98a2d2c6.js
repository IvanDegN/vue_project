"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[577,364,171],{364:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"container mr-auto"},[e("div",{staticClass:"d-flex flex-row justify-content-between"},[e("div",{staticClass:"block"},[e("CarouselContainer")],1),e("div",{staticClass:"block"},[e("CarouselContainer")],1)])])])])},a=[],l=function(){var t=this,e=t._self._c;return e("div",t._l(t.getAlbum,(function(t){return e("div",{key:t.id},[e("b-carousel",{attrs:{fade:"",indicators:""}},[e("b-carousel-slide",{staticClass:"img",attrs:{"img-src":t.url,"img-alt":"photo"}}),e("b-carousel-slide",{staticClass:"img",attrs:{"img-src":t.thumbnailUrl,"img-alt":"photo"}}),e("b-carousel-slide",{staticClass:"img",attrs:{"img-src":t.url,"img-alt":"photo"}}),e("b-carousel-slide",{staticClass:"img",attrs:{"img-src":t.thumbnailUrl,"img-alt":"photo"}}),e("b-carousel-slide",{staticClass:"img",attrs:{"img-src":t.url,"img-alt":"photo"}})],1)],1)})),0)},o=[],r=s(629),n={name:"CarouselContainer",computed:(0,r.Se)(["getAlbum"]),methods:(0,r.nv)(["fetchAlbum"]),mounted(){this.fetchAlbum()}},u=n,c=s(1),d=(0,c.Z)(u,l,o,!1,null,"48a33d53",null),m=d.exports,p={name:"AlbumsPage",components:{CarouselContainer:m}},f=p,v=(0,c.Z)(f,i,a,!1,null,"645cf0fe",null),g=v.exports},171:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=t._self._c;return e("div",[e("PostItem"),e("AddNewPost")],1)},a=[],l=function(){var t=this,e=t._self._c;return e("div",t._l(t.getPosts,(function(s){return e("div",{key:s.id},[e("div",{staticClass:"wrapper"},[e("img",{staticClass:"img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIyl_sTNDD3_cwNWo8-I23uOudiVoxxX1V9kesyN7BPQD9GuK-ztvGZ_y9KNAafRyvK0&usqp=CAU",alt:"logo"}}),e("span",{staticClass:"title"},[t._v("Title: "+t._s(s.title))]),e("div",{staticClass:"body"},[t._v("Message: "+t._s(s.body)+" ")])])])})),0)},o=[],r=s(629),n={name:"PostItem",computed:(0,r.Se)(["getPosts"]),methods:(0,r.nv)(["fetchPosts"]),mounted(){this.fetchPosts()}},u=n,c=s(1),d=(0,c.Z)(u,l,o,!1,null,"0d81ac22",null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{type:"text",placeholder:"Body"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),e("button",{attrs:{type:"submit"}},[t._v("Create post")])])},f=[],v={name:"AddNewPost",data(){return{title:"",body:""}},methods:{...(0,r.OI)(["addNewPost"]),submit(){this.addNewPost({title:this.title,body:this.body}),this.title="",this.body=""}}},g=v,b=(0,c.Z)(g,p,f,!1,null,"1eeb10f2",null),h=b.exports,_={name:"PostsPage",components:{PostItem:m,AddNewPost:h}},C=_,P=(0,c.Z)(C,i,a,!1,null,null,null),y=P.exports},577:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var i=function(){var t=this,e=t._self._c;return e("div",[[e("div",{staticClass:"text"},[e("router-link",{staticClass:"link",attrs:{to:{name:"users-page"}}},[t._v("Users ")]),e("span",[t._v("Profile page ")]),e("router-link",{staticClass:"link",attrs:{to:{name:"albums-page"}}},[t._v("Albums")]),e("router-link",{staticClass:"link",attrs:{to:{name:"posts"}}},[t._v(" Posts")])],1),e("UserProfile",{attrs:{profile:t.profile}})]],2)},a=[],l=function(){var t=this,e=t._self._c;return e("div",[e("UserProfileItem",{attrs:{profile:t.profile}}),e("AlbumsPage"),e("PostsPage")],1)},o=[],r=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex flex-column align-items-center text-center"},[e("img",{staticClass:"rounded-circle",attrs:{src:"https://bootdey.com/img/Content/avatar/avatar7.png",alt:"Admin",width:"150"}}),e("div",{staticClass:"mt-3"},[e("h4",[t._v("Name: "+t._s(t.profile.name))]),e("p",{staticClass:"text-secondary mb-1"},[t._v("Email: "+t._s(t.profile.email))]),e("p",{staticClass:"text-muted font-size-sm"},[t._v("Phone: "+t._s(t.profile.phone))]),e("p",{staticClass:"text-muted font-size-sm"},[t._v("Web site: "+t._s(t.profile.website))])])])])])])])},n=[],u={name:"UserProfileItem",props:["profile"]},c=u,d=s(1),m=(0,d.Z)(c,r,n,!1,null,"6407a210",null),p=m.exports,f=s(364),v=s(171),g={name:"UserProfile",components:{PostsPage:v["default"],AlbumsPage:f["default"],UserProfileItem:p},props:["profile"]},b=g,h=(0,d.Z)(b,l,o,!1,null,"6a35672c",null),_=h.exports,C={name:"ProfilePage",components:{UserProfile:_},props:["id"],computed:{profile(){return this.$store.state.user.profile}},created(){this.$store.dispatch("getUserProfile",this.id)}},P=C,y=(0,d.Z)(P,i,a,!1,null,"2d2e8170",null),x=y.exports}}]);
//# sourceMappingURL=577.98a2d2c6.js.map