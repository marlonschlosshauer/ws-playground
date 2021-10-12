(this["webpackJsonpws-playground"]=this["webpackJsonpws-playground"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},175:function(e,t,c){},177:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(25),l=c.n(s),i=(c(103),c(38)),j=c(52),r=c(34),b=c(181),o=c(183),d=c(48),u=c(185),O=c(184),h=c(182),x=c(186),m=c(187),p=c(188),g=c(189),f=(c(104),c(6)),v=O.a.Panel;var w=function(e){var t=e.url,c=e.uuid,a=e.add,s=Object(n.useState)(),l=Object(r.a)(s,2),b=l[0],u=l[1],w=Object(n.useState)(""),N=Object(r.a)(w,2),k=N[0],S=N[1],y=Object(n.useState)([]),C=Object(r.a)(y,2),I=C[0],A=C[1],D=Object(n.useState)([]),E=Object(r.a)(D,2),J=E[0],M=E[1],R=Object(n.useState)({connected:!1}),T=Object(r.a)(R,2),L=T[0],B=T[1];return Object(n.useEffect)((function(){b||u(new WebSocket(t))}),[]),Object(n.useEffect)((function(){b&&(b.onopen=function(e){console.log({time:(new Date).valueOf(),e:e}),B(Object(i.a)(Object(i.a)({},L),{},{connected:!0}))},b.onclose=function(e){console.log({time:(new Date).valueOf(),e:e}),B(Object(i.a)(Object(i.a)({},L),{},{connected:!1}))},b.onmessage=function(e){return M([e].concat(Object(j.a)(J)))})})),Object(f.jsx)("div",{className:"websocket-header-wrapper",children:Object(f.jsxs)(h.a,{ghost:!1,tags:L.connected?Object(f.jsx)(x.a,{color:"green",children:"Online"}):Object(f.jsx)(x.a,{color:"red",children:"Offline"}),className:"websocket-header",title:"".concat(c),extra:[Object(f.jsx)(d.a,{type:"primary",danger:!0,onClick:function(){b&&(b.close(),u(void 0))},icon:Object(f.jsx)(p.a,{}),disabled:!L.connected,children:"Close"}),Object(f.jsx)(d.a,{onClick:function(){return a(t)},icon:Object(f.jsx)(g.a,{}),children:"Duplicate"})],children:[Object(f.jsxs)(m.b,{small:"small",column:3,children:[Object(f.jsx)(m.b.Item,{label:"URL",children:Object(f.jsx)("b",{children:t})}),Object(f.jsx)(m.b.Item,{label:"Total Sent",children:I.length}),Object(f.jsx)(m.b.Item,{label:"Total Received",children:J.length}),Object(f.jsx)(m.b.Item,{label:"Last received",children:J[0]})]}),Object(f.jsxs)("div",{className:"websocket-input-wrapper",children:[Object(f.jsxs)("div",{className:"websocket-input-container",children:[Object(f.jsx)(o.a.TextArea,{className:"websocket-input",name:"Message...",type:"text",value:k,disabled:!L.connected,onChange:function(e){return S(e.target.value)}}),Object(f.jsx)(d.a,{className:"websocket-input-send",onClick:function(){b.send(JSON.parse(k)),A([].concat(Object(j.a)(I),[k])),S("")},type:"primary",disabled:!L.connected,children:"Send"})]}),Object(f.jsxs)("div",{className:"websocket-input-length-counter",children:["Message length: ",k.length]})]}),Object(f.jsxs)(O.a,{ghost:!0,children:[Object(f.jsx)(v,{header:"Received messages",children:Object(f.jsx)("div",{className:"message-display",children:J.length>1?J.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("samp",{children:e}),Object(f.jsx)("br",{})]})})):""})}),Object(f.jsx)(v,{header:"Sent messages",children:Object(f.jsx)("div",{className:"message-display",children:I.length>1?I.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("samp",{children:e}),Object(f.jsx)("br",{})]})})):""})})]})]})})},N=(c(175),b.a.Content);var k=function(){var e=Object(n.useState)("ws://localhost:8999/connection"),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),l=Object(r.a)(s,2),O=l[0],h=l[1],x=function(e){return h([{url:e,uuid:Object(u.a)(),key:O.length,index:O.length}].concat(Object(j.a)(O)))};return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b.a,{className:"layout",children:Object(f.jsxs)(N,{className:"content",children:[Object(f.jsxs)("div",{className:"url-input-container",children:[Object(f.jsx)(o.a,{className:"url-input",value:c,onChange:function(e){return a(e.target.value)}}),Object(f.jsx)(d.a,{className:"url-input-add",onClick:function(){return x(c)},children:"Add connection"})]}),Object(f.jsx)("div",{className:"table",children:O.map((function(e){return Object(f.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{add:x}))}))})]})})})};c(176);l.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.4bcd9245.chunk.js.map