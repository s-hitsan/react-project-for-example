(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{108:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(11),s=n(2),a="SEND_MESSAGE",c={dialogs:[{id:1,name:"Vanya"},{id:2,name:"Masha"},{id:3,name:"Borya"},{id:4,name:"Egor"},{id:5,name:"Zay"},{id:6,name:"Kira"}],messages:[{id:1,message:"Ne"},{id:2,message:"Nu"},{id:3,message:"Da"},{id:4,message:"Ladno"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}},110:function(e,t,n){e.exports={item:"Users_item__1lc5v"}},112:function(e,t,n){},119:function(e,t,n){},124:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__2bd4q",item:"Navbar_item__1ejUp",activeLink:"Navbar_activeLink__1USAE"}},250:function(e,t,n){"use strict";n.r(t);n(119);var r=n(0),s=n.n(r),a=n(48),c=n.n(a),i=n(3),o=n(4),u=n(6),l=n(7),j=(n(124),n(14)),d=n.n(j),b=n(12),p=n(1),h=function(){return Object(p.jsxs)("nav",{className:d.a.nav,children:[Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/profile",activeClassName:d.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/dialogs",activeClassName:d.a.activeLink,children:"Messages"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/news",activeClassName:d.a.activeLink,children:"News"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/music",activeClassName:d.a.activeLink,children:"Music"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/settings",activeClassName:d.a.activeLink,children:"Settings"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/users",activeClassName:d.a.activeLink,children:"Users"})})]})},O=n(9),g=n(13),f=n(8),m=n.n(f),A=n(19),w=n(11),v=n(2),x=n(50).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6d1ede3f-1464-4ebd-8729-5b9d4ae7e7fa"}}),I={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return x.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return x.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return x.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obselete method. Please use profileAPI object"),C.getProfile(e)}},C={getProfile:function(e){return x.get("profile/"+e)},getStatus:function(e){return x.get("profile/status/"+e)},updateStatus:function(e){return x.put("profile/status/",{status:e})}},E=function(){return x.get("auth/me")},N=function(e){var t=e.email,n=e.password,r=e.rememberMe,s=void 0!==r&&r;return x.post("auth/login/",{email:t,password:n,rememberMe:s})},P=function(){return x.delete("auth/login/")},S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),r):e}))},B="FOLLOW",k="UNFOLLOW",y="SET_USERS",R="SET_CURRENT_PAGE",D="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",W="TOGGLE_FOLLOWING_IN_PROGRESS",z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},M=function(e){return{type:B,userId:e}},Q=function(e){return{type:k,userId:e}},Y=function(e){return{type:U,isFetching:e}},T=function(e,t){return{type:W,isFetching:e,userId:t}},L=function(){var e=Object(A.a)(m.a.mark((function e(t,n,r,s){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(s(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(v.a)(Object(v.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case k:return Object(v.a)(Object(v.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case y:return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case R:return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case D:return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.totalUsersCount});case U:return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case W:return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Z=n(22),G=n(39),K=n.n(G),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/i),d=Object(r.useState)(1),b=Object(Z.a)(d,2),h=b[0],O=b[1],g=(h-1)*i+1,f=h*i;return Object(p.jsxs)("div",{className:K.a.paginator,children:[h>1&&Object(p.jsx)("button",{onClick:function(){O(h-1)},children:"prev"}),u.filter((function(e){return e>=g&&e<=f})).map((function(e){return Object(p.jsx)("div",{className:K.a.pageNumber,children:Object(p.jsx)("span",{className:s===e?K.a.selectedPage:K.a.noSelectedPage,onClick:function(t){s!==e&&a(e)},children:e},e)})})),h<j&&Object(p.jsx)("button",{onClick:function(){O(h+1)},children:"next"})]})},V=n(110),q=n.n(V),X=n.p+"static/media/user.f414aa60.png",J=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,s=e.follow;return Object(p.jsxs)("div",{className:q.a.item,children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:X})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"u.location.country"}),Object(p.jsx)("div",{children:"u.location.city"})]})]})]})},_=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.users,c=e.followingInProgress,i=e.unfollow,o=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsx)(H,{currentPage:r,onPageChanged:s,totalItemsCount:t,pageSize:n}),Object(p.jsx)("div",{children:a.map((function(e){return Object(p.jsx)(J,{user:e,followingInProgress:c,unfollow:i,follow:o},e.id)}))})]})},$=n.p+"static/media/preloader.1d695c46.svg",ee=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:$})})},te=n(16),ne=n(111),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),se=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props,r=n.requestUsers,s=n.pageSize,a=n.setCurrentPage;r(s,t),a(t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageSize,n=e.currentPage;(0,e.requestUsers)(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(ee,{}):null,Object(p.jsx)(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),le=Object(te.d)(Object(g.b)((function(e){return{users:re(e),pageSize:se(e),totalUsersCount:ae(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,I.follow.bind(I),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,I.unfollow.bind(I),Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:R,currentPage:e}},requestUsers:function(e,t){return function(){var n=Object(A.a)(m.a.mark((function n(r){var s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Y(!0)),n.next=3,I.getUsers(e,t);case 3:s=n.sent,r(Y(!1)),r((c=s.items,{type:y,users:c})),r((a=s.totalCount,{type:D,totalUsersCount:a}));case 7:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),je=n(112),de=n.n(je),be=n(56),pe=n.n(be),he=n(71),Oe=n.n(he),ge=function(e){return Object(p.jsxs)("div",{className:Oe.a.item,children:[Object(p.jsx)("img",{src:"data:image/png;base64,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"}),e.message,Object(p.jsxs)("div",{className:Oe.a.likes__block,children:[Object(p.jsx)("span",{children:"like"}),e.likesCount]})]})},fe=n(21),me=n(84),Ae=n(30),we=function(e){var t=Object(w.a)(e.posts).reverse().map((function(e){return Object(p.jsx)(ge,{message:e.message,likesCount:e.likes},e.id)}));return Object(p.jsxs)("div",{className:pe.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)("div",{children:Object(p.jsx)(fe.c,{initialValues:{newPostText:""},onSubmit:function(t){return e.addPost(t.newPostText)},children:function(){return Object(p.jsxs)(fe.b,{children:[Object(p.jsx)(fe.a,{validate:Object(me.a)(50),component:Ae.b,placeholder:"Fuck",name:"newPostText"}),Object(p.jsx)("button",{type:"submit",children:"Add post"})]})}})}),Object(p.jsx)("div",{className:pe.a.posts,children:Object(p.jsx)("div",{className:pe.a.postsElements,children:t})})]})},ve=n(72),xe=n.n(ve),Ie=function(e){var t=Object(r.useState)(!1),n=Object(Z.a)(t,2),s=n[0],a=n[1],c=Object(r.useState)(e.status),i=Object(Z.a)(c,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!s&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"No status"})}),s&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){a(!1),e.updateStatus(o)},autoFocus:!0,value:o})})]})},Ce=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return t?Object(p.jsxs)("div",{className:xe.a.descriptionBlock,children:[Object(p.jsx)("img",{className:xe.a.ProfileImg,src:null!=t.photos.large?t.photos.large:X}),Object(p.jsx)("div",{children:Object(p.jsx)(Ie,{status:n,updateStatus:r})})]}):Object(p.jsx)(ee,{})},Ee="ADD-POST",Ne="SET-USER-PROFILE",Pe="SET-STATUS",Se="DELETE-POST",Be={posts:[{id:1,message:"Hello",likes:20},{id:2,message:"Where are you?",likes:15},{id:3,message:"Baby",likes:7}],profile:null,status:""},ke=function(e){return{type:Pe,status:e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:var n={id:4,message:t.postText,likes:0};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(w.a)(e.posts),[n])});case Ne:return Object(v.a)(Object(v.a)({},e),{},{profile:t.profile});case Pe:return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case Se:return Object(v.a)(Object(v.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},Re=Object(g.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:Ee,postText:e}}(t))}}}))(we),De=function(e){return Object(p.jsxs)("div",{className:de.a.profilePage,children:[Object(p.jsx)(Ce,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)(Re,{})]})},Ue=n(85),We=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(p.jsx)(De,Object(v.a)(Object(v.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(s.a.Component),ze=Object(te.d)(Object(g.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:Ne,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getStatus(e);case 2:r=t.sent,n(ke(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(ke(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),O.f,Ue.a)(We),Me=n(73),Qe=n.n(Me),Ye=function(e){return Object(p.jsxs)("header",{className:Qe.a.header,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTI3VDE1OjQyOjE4KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTI3VDE1OjQyOjE4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0yN1QxNTo0MjoxOCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYTE2MjI3OS00YmI3LTdjNDQtYmU4Yy1mMzZiNGQ5MzEwYTUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NDMwMjZjOS0zNjYwLWVjNDYtOWQxZC1hNTU1YzNhNjdkY2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MGI2YTQ4Zi00NzViLThlNGQtOWRkYy1iYjY1MTc1M2E4NjUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjBiNmE0OGYtNDc1Yi04ZTRkLTlkZGMtYmI2NTE3NTNhODY1IiBzdEV2dDp3aGVuPSIyMDIwLTA4LTI3VDE1OjQyOjE4KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBhMTYyMjc5LTRiYjctN2M0NC1iZThjLWYzNmI0ZDkzMTBhNSIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0yN1QxNTo0MjoxOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2Vk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"}),Object(p.jsx)("div",{className:Qe.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(p.jsx)(b.b,{to:"/login",children:"login"})})]})},Te="samurai-network/auth/SET_USER_DATA",Le="samurai-network/auth/SET_ERRORS",Fe={id:null,email:null,login:null,isFetching:!1,isAuth:!1,errors:""},Ze=function(e,t,n,r){return{type:Te,payload:{id:e,email:t,login:n,isAuth:r}}},Ge=function(){return function(){var e=Object(A.a)(m.a.mark((function e(t){var n,r,s,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,c=r.login,t(Ze(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(v.a)(Object(v.a)({},e),t.payload);case Le:return Object(v.a)(Object(v.a)({},e),{},{errors:t.errors});default:return e}},He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(Ye,Object(v.a)({},this.props))}}]),n}(s.a.Component),Ve=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:0===e.sent.data.resultCode&&t(Ze(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(He),qe=n(58),Xe=qe.a().shape({email:qe.b().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),password:qe.b().min(7,"Must be longer than 7 characters").required("Required")}),Je=function(e){var t=e.login,n=e.errors;return Object(p.jsx)(fe.c,{initialValues:{email:"",password:"",rememberMe:!1},validateOnBlur:!0,onSubmit:function(e){return t(e)},validationSchema:Xe,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(fe.b,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"email",children:" \u0418\u043c\u044f "})," ",Object(p.jsx)("br",{}),Object(Ae.c)("e-mail","text","email",Ae.a)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"password",children:" \u041f\u0430\u0440\u043e\u043b\u044c "})," ",Object(p.jsx)("br",{}),Object(Ae.c)("password","password","password",Ae.a)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(fe.a,{type:"checkbox",name:"rememberMe"}),Object(p.jsx)("label",{htmlFor:"rememberMe",children:" remember me "})]}),Object(p.jsx)("p",{children:n}),n?t=!1:null,Object(p.jsx)("button",{disabled:t,type:"submit",children:"Send"})]})}})},_e=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,errors:e.auth.errors}}),{login:function(e){return function(){var t=Object(A.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:0===(r=t.sent).data.resultCode&&n(Ge()),n((s=r.data.messages[0],{type:Le,errors:s}));case 5:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login,r=e.errors;return t?Object(p.jsx)(O.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Je,{login:n,errors:r})]})})),$e="INITIALIZED_SUCCES",et={initialized:!1},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},nt=n(108),rt={},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;return e},at=n(118),ct=Object(te.c)({profilePage:ye,dialogsPage:nt.a,sidebar:st,usersPage:F,auth:Ke,app:tt}),it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,ot=Object(te.e)(ct,it(Object(te.a)(at.a))),ut=s.a.lazy((function(){return n.e(4).then(n.bind(null,257))})),lt=s.a.lazy((function(){return n.e(3).then(n.bind(null,260))})),jt=s.a.lazy((function(){return n.e(5).then(n.bind(null,258))})),dt=s.a.lazy((function(){return n.e(6).then(n.bind(null,259))})),bt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Ve,{}),Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(O.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(ze,{})}}),Object(p.jsxs)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[Object(p.jsx)(O.b,{path:"/music",render:function(){return Object(p.jsx)(ut,{})}}),Object(p.jsx)(O.b,{path:"/dialogs",render:function(){return Object(p.jsx)(lt,{})}}),Object(p.jsx)(O.b,{path:"/news",render:function(){return Object(p.jsx)(jt,{})}}),Object(p.jsx)(O.b,{path:"/settings",render:function(){return Object(p.jsx)(dt,{})}})]}),Object(p.jsx)(O.b,{path:"/users",render:function(){return Object(p.jsx)(le,{})}}),Object(p.jsx)(O.b,{path:"/login",render:function(){return Object(p.jsx)(_e,{})}})]})]}):Object(p.jsx)(ee,{})}}]),n}(s.a.Component),pt=Object(te.d)(O.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ge());Promise.all([t]).then((function(){e({type:$e})}))}}}))(bt),ht=function(e){return Object(p.jsx)(b.a,{basename:"/react-project-for-example",children:Object(p.jsx)(g.a,{store:ot,children:Object(p.jsx)(pt,{})})})};c.a.render(Object(p.jsx)(ht,{}),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(2),s=n(75),a=n(57),c=n.n(a),i=n(21),o=n(1),u=function(e){var t=e.field,n=e.form,r=n.errors,s=n.touched,a=e.children,i=s[t.name]&&r[t.name];return Object(o.jsxs)("div",{className:c.a.main+" "+(i?c.a.error:""),children:[a,i&&Object(o.jsx)("span",{className:c.a.error,children:r[t.name]})]})},l=function(e){var t=e.field,n=Object(s.a)(e,["field"]);return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.field,n=Object(s.a)(e,["field"]);return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,r){return Object(o.jsx)(i.a,{placeholder:e,type:t,name:n,component:r})}},39:function(e,t,n){e.exports={paginator:"Paginator_paginator__39ULu",pageNumber:"Paginator_pageNumber__3sUV9",selectedPage:"Paginator_selectedPage__3FjR4",noSelectedPage:"Paginator_noSelectedPage__3SVxF"}},56:function(e,t,n){e.exports={postsElements:"MyPosts_postsElements__1DXnT",posts:"MyPosts_posts__2r9kJ"}},57:function(e,t,n){e.exports={main:"FormsControls_main__30wOQ",error:"FormsControls_error__2QG86"}},71:function(e,t,n){e.exports={item:"Post_item__3iZAg",likes__block:"Post_likes__block__2Llkh"}},72:function(e,t,n){e.exports={ProfileImg:"ProfileInfo_ProfileImg__1CSQs"}},73:function(e,t,n){e.exports={header:"Header_header__XdPH6",loginBlock:"Header_loginBlock__3_blW"}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return function(t){return t?t.length>e?"Max length ".concat(e):void 0:"Field is required"}}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(2),s=n(3),a=n(4),c=n(6),i=n(7),o=n(0),u=n.n(o),l=n(9),j=n(13),d=n(1),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(b)(t)}}},[[250,1,2]]]);
//# sourceMappingURL=main.64d55ff0.chunk.js.map