(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var o=t(15),c=t.n(o),r=t(6),u=t(3),a=t(1),i=t(0),s=function(e){var n=e.value,t=e.onChange;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.message,t=e.error;if(null===n)return null;var o=t?"red":"green",c={color:o,fontSize:20,padding:5,background:"lightgrey",borderColor:o,borderStyle:"solid",borderRadius:5,marginBottom:7};return Object(i.jsx)("div",{style:c,children:n})},b=function(e){var n=e.onSubmit,t=e.nameInputValue,o=e.onChangeNameInput,c=e.numberInputValue,r=e.onChangeNumberInput,u=e.buttonText;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:o})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:u})})]})},d=function(e){var n=e.persons,t=e.onClickDelete;return n.map((function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.id)}))},j=t(4),f=t.n(j),m="/api/persons",h=function(){return f.a.get(m).then((function(e){return e.data}))},O=function(e){return f.a.post(m,e).then((function(e){return e.data}))},p=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(m,"/").concat(e))},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1];Object(a.useEffect)((function(){h().then((function(e){o(e)}))}),[]);var c=Object(a.useState)(""),j=Object(u.a)(c,2),f=j[0],m=j[1],g=Object(a.useState)(""),x=Object(u.a)(g,2),C=x[0],w=x[1],S=Object(a.useState)(null),I=Object(u.a)(S,2),k=I[0],y=I[1],T=Object(a.useState)(!1),D=Object(u.a)(T,2),N=D[0],V=D[1],A=Object(a.useState)(!0),B=Object(u.a)(A,2),E=B[0],J=B[1],L=Object(a.useState)(""),z=Object(u.a)(L,2),P=z[0],R=z[1],q=E?t:t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(l,{message:k,error:N}),Object(i.jsx)(s,{value:P,onChange:function(e){var n=e.target.value;R(n),J(""===n)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(b,{onSubmit:function(e){if(e.preventDefault(),0!==f.length&&0!==C.length){var n=t.find((function(e){return e.name===f}));if(void 0!==n){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var c=Object(r.a)(Object(r.a)({},n),{},{number:C});p(n.id,c).then((function(e){console.log("after axios.put"),o(t.map((function(t){return t.id===n.id?e:t}))),console.log("after set persons"),m(""),w(""),y("Changed ".concat(e.name,"'s number")),setTimeout((function(){y(null)}),5e3)})).catch((function(e){V(!0),y("Information of ".concat(c.name," has already been removed from server")),setTimeout((function(){y(null),V(!1)}),5e3)}))}}else O({name:f,number:C}).then((function(e){o(t.concat(e)),m(""),w(""),y("Added ".concat(e.name)),setTimeout((function(){y(null)}),5e3)}))}},nameInputValue:f,onChangeNameInput:function(e){m(e.target.value)},numberInputValue:C,onChangeNumberInput:function(e){w(e.target.value)},buttonText:"add"}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(d,{persons:q,onClickDelete:function(e){window.confirm("Delete ".concat(e.name," ?"))&&v(e.id).then((function(n){o(t.filter((function(n){return n.id!==e.id}))),y("Deleted ".concat(e.name)),setTimeout((function(){y(null)}),5e3)})).catch((function(n){V(!0),y("Information of ".concat(e.name," has already been removed from server")),setTimeout((function(){y(null),V(!1)}),5e3)}))}})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.332ee7ea.chunk.js.map