"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[171],{171:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var o=function(){var t=this,e=t._self._c;return e("div",[e("PostItem"),e("AddNewPost")],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",t._l(t.getPosts,(function(s){return e("div",{key:s.id},[e("div",{staticClass:"wrapper"},[e("img",{staticClass:"img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIyl_sTNDD3_cwNWo8-I23uOudiVoxxX1V9kesyN7BPQD9GuK-ztvGZ_y9KNAafRyvK0&usqp=CAU",alt:"logo"}}),e("span",{staticClass:"title"},[t._v("Title: "+t._s(s.title))]),e("div",{staticClass:"body"},[t._v("Message: "+t._s(s.body)+" ")])])])})),0)},l=[],a=s(629),u={name:"PostItem",computed:(0,a.Se)(["getPosts"]),methods:(0,a.nv)(["fetchPosts"]),mounted(){this.fetchPosts()}},r=u,d=s(1),c=(0,d.Z)(r,n,l,!1,null,"0d81ac22",null),p=c.exports,m=function(){var t=this,e=t._self._c;return e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{type:"text",placeholder:"Body"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),e("button",{attrs:{type:"submit"}},[t._v("Create post")])])},v=[],f={name:"AddNewPost",data(){return{title:"",body:""}},methods:{...(0,a.OI)(["addNewPost"]),submit(){this.addNewPost({title:this.title,body:this.body}),this.title="",this.body=""}}},y=f,b=(0,d.Z)(y,m,v,!1,null,"1eeb10f2",null),h=b.exports,P={name:"PostsPage",components:{PostItem:p,AddNewPost:h}},_=P,g=(0,d.Z)(_,o,i,!1,null,null,null),N=g.exports}}]);
//# sourceMappingURL=171.533dbba5.js.map