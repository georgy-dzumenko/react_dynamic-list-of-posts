(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),o=n(1),u=n.n(o),i=n(2),l=n(3),m=(n(16),n(17),n(18),function(e){var t=e.posts,n=e.selectPostId,a=e.selectedPostId;return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return r.a.createElement("li",{className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){a!==e.id?n(e.id):n(0)}},a===e.id?"Close":"Open"))}))))}),p=(n(19),n(9)),f=n(6),d="https://mate-api.herokuapp.com",h=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts").concat(0!==t?"?userId=".concat(t):"")).then((function(e){return e.json()})).then((function(e){n=Object(f.a)(e.data)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/comments?postId=").concat(t)).then((function(e){return e.json()})).then((function(e){n=Object(f.a)(e.data)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts/").concat(t)).then((function(e){return e.json()})).then((function(e){n=e.data}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(Object(p.a)({},t))});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/comments/").concat(t),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.onCommentAdd,n=Object(a.useState)(),c=Object(l.a)(n,2),s=c[0],o=c[1],u=Object(a.useState)(),i=Object(l.a)(u,2),m=i[0],p=i[1],f=Object(a.useState)(),d=Object(l.a)(f,2),h=d[0],b=d[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({userName:s,userEmail:m,commentText:h}),b("")},className:"NewCommentForm"},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{required:!0,onChange:function(e){o(e.target.value)},type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{required:!0,onChange:function(e){p(e.target.value)},type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{required:!0,value:h,onChange:function(e){b(e.target.value)},name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},N=(n(20),function(e){var t=e.postId,n=Object(a.useState)({}),c=Object(l.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(a.useState)(!0),N=Object(l.a)(h,2),O=N[0],w=N[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,E(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=d,e.next=8,b(t);case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var x=function(){var e=Object(i.a)(u.a.mark((function e(n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.userName,r=n.userEmail,c=n.commentText,e.next=3,v({postId:t,name:a,email:r,body:c});case 3:return e.t0=d,e.next=6,b(t);case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){w((function(e){return!e}))}},O?"Hide":"Show"," ","comments"),r.a.createElement("ul",{className:"PostDetails__list ".concat(O?"":"hidden")},f.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item"},r.a.createElement("button",{onClick:Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_(e.id);case 2:return n.t0=d,n.next=5,b(t);case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)}))),type:"button",className:"PostDetails__remove-button button"},"X"),r.a.createElement("p",null,e.body))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(j,{onCommentAdd:x}))))}),O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(l.a)(s,2),p=o[0],f=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,h(0);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,h(+t.target.value);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("option",{value:0},"All users"),r.a.createElement("option",{value:1},"Leanne Graham"),r.a.createElement("option",{value:2},"Ervin Howell"),r.a.createElement("option",{value:3},"Clementine Bauch"),r.a.createElement("option",{value:4},"Patricia Lebsack"),r.a.createElement("option",{value:5},"Chelsey Dietrich"),r.a.createElement("option",{value:6},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:7},"Kurtis Weissnat"),r.a.createElement("option",{value:8},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:9},"Glenna Reichert"),r.a.createElement("option",{value:10},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{posts:n,selectPostId:f,selectedPostId:p})),0!==p?r.a.createElement("div",{className:"App__content"},r.a.createElement(N,{postId:p})):""))};s.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a34b89bd.chunk.js.map