(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,l){e.exports=l(36)},18:function(e,a,l){},36:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),c=l(12),r=(l(18),e=>{let{label:a,value:l,onChange:t}=e;return n.a.createElement("div",null,n.a.createElement("label",null,a),n.a.createElement("input",{className:"input",value:l,onChange:e=>t(e.target.value)}))});const u=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"French",value:"fr"},{label:"Hindi",value:"hi"},{label:"Japanese",value:"ja"},{label:"Portuguese",value:"pt"},{label:"English",value:"en"},{label:"Simplified Chinese",value:"zh-CN"},{label:"Spanish",value:"es"},{label:"Swahili",value:"sw"},{label:"Thai",value:"th"}];var o=e=>{let{language:a,onLanguageChange:l}=e;void 0===a&&(a="en");const c=u.find(e=>e.value===a);if(!c)throw new Error(`Unknown language code '${a}'`);const[r,o]=Object(t.useState)(!1);return n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"),n.a.createElement("div",{className:`dropdown ${r&&"is-active"}`},n.a.createElement("div",{className:"dropdown-trigger"},n.a.createElement("button",{className:"button",onClick:()=>o(!r)},n.a.createElement("span",null,c.label),n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{className:"dropdown-content"},u.map(e=>{let{label:a,value:t}=e;return n.a.createElement("a",{key:Math.random(),href:"#",onClick:()=>(e=>{o(!1),l(e)})(t),className:"dropdown-item"},a)})))))},s=l(2),i=l.n(s);var m=e=>{let{language:a,text:l}=e;const[c,r]=Object(t.useState)("");return Object(t.useEffect)(()=>{if(!l)return;const e=i.a.CancelToken.source();return(async(e,a,l)=>{try{const n=`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20241130T115834Z.d9ddf7a36d0ef05c.69ad2d126339359e81fcae9cebeb91555a4fa682&lang=ru-${a}&text=${e}`,{data:c}=await i.a.get(n,{cancelToken:l.token});return c.def[0].tr[0].text}catch(t){return console.error(t),"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}})(l,a,e).then(r),()=>{try{e.cancel()}catch(a){console.error(a)}}},[l,a]),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"\u0412\u044b\u0445\u043e\u0434"),n.a.createElement("h1",{className:"title"},c))};function d(){const[e,a]=Object(t.useState)("en"),[l,c]=Object(t.useState)("\u0420\u0435\u0430\u043a\u0446\u0438\u044f");return n.a.createElement("div",null,n.a.createElement(r,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430",onChange:c,value:l}),n.a.createElement(o,{language:e,onLanguageChange:a}),n.a.createElement("hr",null),n.a.createElement(m,{text:l,language:e}))}Object(c.render)(n.a.createElement(d,null),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a7d62e0a.chunk.js.map