(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{102:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n(3782)}])},7922:function(e,s,n){"use strict";n.d(s,{Z:function(){return a}});var i=n(5893),t=n(1664),r=n.n(t);let c={marginRight:15},h=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r(),{href:"/",style:c,children:"Home"}),(0,i.jsx)(r(),{href:"/starships",style:c,children:"Starships"}),(0,i.jsx)(r(),{href:"/vehicles",style:c,children:"Vehicles"})]}),l={margin:20,padding:20,border:"1px solid #DDD"},o=e=>(0,i.jsxs)("div",{style:l,children:[(0,i.jsx)(h,{}),e.children]});var a=o},3782:function(e,s,n){"use strict";n.r(s);var i=n(5893),t=n(7922),r=n(3144),c=n.n(r);let h=e=>(0,i.jsxs)(t.Z,{children:[(0,i.jsx)("h1",{children:e.show.name}),(0,i.jsx)("p",{children:e.show.model.replace(/<[/]?p>/g,"")}),(0,i.jsx)("img",{src:e.show.image.medium})]});h.getInitialProps=async function(e){let{id:s}=e.query,n=await c()("https://swapi.dev/api/starships/".concat(s)),i=await n.json();return console.log("Fetched show: ".concat(i.id)),{people:i}},s.default=h}},function(e){e.O(0,[774,566,888,179],function(){return e(e.s=102)}),_N_E=e.O()}]);