(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(3),o=t(5),s=t(0),u=t(4),i=t(16),d=t.n(i),h=t(6),l=t.n(h),p="http://localhost:3001/persons",f=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(p);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(p,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.delete("".concat(p,"/").concat(n)).catch((function(e){if(404===e.response.status)throw new Error("".concat(e.config.url," not found"));throw e}));case 3:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("".concat(p,"/").concat(n.id),n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=(t(41),function(e){var n=e.value,t=e.onChange;return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{value:n,onChange:t})]})}),v=function(e){var n=e.persons,t=e.newPhoneSearch,r=e.deletePersonHandler;return Object(s.jsx)("div",{children:n.map((function(e){return e.name.indexOf(t)>-1?Object(s.jsxs)("p",{children:[e.name," ",e.phone," ",Object(s.jsx)("button",{type:"button",onClick:function(){return r(e)},children:"delete"})]}):null}))})},m=function(e){var n=e.newName,t=e.newPhone,r=e.handleChangeName,a=e.handleChangePhone,c=e.handleAdd;return Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n,onChange:r}),Object(s.jsx)("br",{}),"number: ",Object(s.jsx)("input",{value:t,onChange:a})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"button",onClick:c,children:"add"})})]})},w=function(e){var n=e.message;return Object(s.jsx)("p",{className:"error-message-".concat(n.color),children:n.message})},g=function(){var e=Object(u.useState)([{name:"Arto Hellas"}]),n=Object(o.a)(e,2),t=n[0],r=n[1],i=Object(u.useState)(""),d=Object(o.a)(i,2),h=d[0],l=d[1],p=Object(u.useState)(""),g=Object(o.a)(p,2),k=g[0],C=g[1],y=Object(u.useState)(""),P=Object(o.a)(y,2),S=P[0],N=P[1],A=Object(u.useState)({}),E=Object(o.a)(A,2),H=E[0],J=E[1];Object(u.useEffect)(Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,console.log(n.data),r(n.data);case 5:case"end":return e.stop()}}),e)}))),[]);var L=function(){var e=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n.id);case 2:return e.sent||J({message:"Information of "+n.name+"has already been removed from server",color:"red"}),e.next=6,f();case 6:t=e.sent,r(t.data);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(a.a.mark((function e(){var n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.filter((function(e){return e.name===h})),c=!1,n.length&&(console.log(t,n),c=confirm("".concat(h," is already added to phonebook, replace the old number with a new one ^_^"))),!c){e.next=7;break}return e.next=6,x({id:n[0].id,name:h,phone:k});case 6:J({message:"Updated "+h,color:"green"});case 7:if(n.length){e.next=11;break}return e.next=10,j({name:h,phone:k});case 10:J({message:"Added "+h,color:"green"});case 11:return e.next=13,f();case 13:o=e.sent,r(o.data);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),!!H&&Object(s.jsx)(w,{message:H}),Object(s.jsx)(O,{value:S,onChange:function(e){N(e.target.value)}}),Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsx)(m,{newName:h,handleChangeName:function(e){l(e.target.value)},handleChangePhone:function(e){C(e.target.value)},handleAdd:q}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(v,{persons:t,newPhoneSearch:S,deletePersonHandler:L})]})};n.default=g;document.addEventListener("DOMContentLoaded",(function(){d.a.render(Object(s.jsx)(g,{}),document.querySelector("#root"))}))}},[[42,1,2]]]);
//# sourceMappingURL=main.bac8a6e8.chunk.js.map