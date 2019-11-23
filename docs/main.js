!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports={createElement:function(e,t={},...n){return{type:e,props:{...t,children:n.map(e=>"object"==typeof e?e:function(e){return{type:"TEXT_ELEMENT",props:{nodeValue:e,children:[]}}}(e))}}},render:function e(t,n){const o="TEXT_ELEMENT"===t.type?document.createTextNode(""):document.createElement(t.type);Object.keys(t.props).filter(e=>"children"!==e).forEach(e=>{o[e]=t.props[e]}),t.props.children.forEach(t=>{e(t,o)}),n.appendChild(o)}}},function(e,t,n){const o=n(0);e.exports=function({className:e="",fontSize:t="1rem",hidden:n=!1,text:r="no text provided"}={}){return o.createElement("p",{className:e,style:`\n        display: ${n?"none":"block"};\n        font-size: ${t};\n        margin-bottom: 1rem;\n      `},r)}},function(e,t,n){const o=n(0);e.exports=function({children:e=[],direction:t="row"}={}){return o.createElement("div",{style:`\n        display: flex;\n        flex-direction: ${t};\n      `},...e)}},function(e,t,n){const o=n(0),r=n(4);o.render(r(),document.querySelector(".app"))},function(e,t,n){const o=n(0),r=n(5),c=n(7),i=n(2),a=n(8),l=n(1),u=["With the Deact library, you can stop worrying about exactly how to handle the DOM manipulation that you want to achieve and just worry about actually building the application you want. Deact is based heavily on the React library. This is a reference application for me, Don Hamilton, to understand the inner workings of a library like React.","Have a look at the source code for this page to see just exactly how this sort of component system works."];e.exports=function(){return o.createElement("section",{},a(c({text:"Welcome to our Deact Example"}),i({children:u.map(e=>l({fontSize:"0.8rem",text:e})),direction:"column"}),r()))}},function(e,t,n){const o=n(0),r=n(6),c=n(1);e.exports=function(){return o.createElement("section",{},r({onclick:e=>{e.target.parentElement.querySelector(".click-example-text").style.display="block"},text:"Reveal hidden text"}),c({className:"click-example-text",hidden:!0,text:"You have done the good clicking! Solid job fam."}))}},function(e,t,n){const o=n(0);e.exports=function({onclick:e=(()=>console.error("unimplemented event!")),text:t="Add some label text!"}={}){return o.createElement("button",{onclick:e,style:"\n        border: 1px solid var(--dark-blue);\n        border-radius: 1rem;\n        color: var(--dark-blue);\n        cursor: pointer;\n        font-size: 0.7rem;\n        font-weight: bold;\n        margin-bottom: 1rem;\n        padding: 0.5rem 1rem;\n      "},t)}},function(e,t,n){const o=n(0);e.exports=function({text:e="no text provided"}={}){return o.createElement("h2",{style:"\n        margin: 1rem 0;\n      "},e)}},function(e,t,n){const o=n(0),r=n(9),c=n(10),i=n(13);e.exports=function(...e){return o.createElement("section",{style:"\n        display: grid;\n        grid-template-rows: 6rem auto 8rem;\n        min-height: 100vh;\n      "},c(),i(...e),r())}},function(e,t,n){const o=n(0);e.exports=function(){return o.createElement("footer",{style:"\n        align-items: center;\n        background-color: #fdb;\n        color: #357;\n        display: flex;\n        justify-content: center;\n      "},o.createElement("small",{},`© ${(new Date).getFullYear()} Deact`))}},function(e,t,n){const o=n(0),r=n(2),c=n(11),i=n(12);e.exports=function(){return o.createElement("header",{style:"\n        align-items: center;\n        background-color: #357;\n        display: flex;\n        justify-content: space-between;\n        padding: 1rem;\n      "},i(),r({children:[c({href:"https://donhamiltoniii.github.io/deact",text:"Deact Homepage"}),c({href:"https://github.com/donhamiltoniii/deact",text:"Deact Docs"})]}))}},function(e,t,n){const o=n(0);e.exports=function({href:e="invslid",text:t="Name the link!"}={}){return o.createElement("a",{href:e,style:"\n        color: #fdb;\n        cursor: pointer;\n        margin-left: 1rem;\n      "},t)}},function(e,t,n){const o=n(0);e.exports=function(){return o.createElement("h1",{style:"\n        color: #fdb;\n      "},"Deact Intro")}},function(e,t,n){const o=n(0),r=n(14);e.exports=function(...e){return o.createElement("main",{},r(...e))}},function(e,t,n){const o=n(0);e.exports=function(...e){return o.createElement("div",{style:"\n        margin: 0 auto;\n        max-width: 30rem;\n        width: 90%;\n      "},...e)}}]);