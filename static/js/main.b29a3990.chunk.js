(this["webpackJsonpreact-examples"]=this["webpackJsonpreact-examples"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=(a(15),a(5)),s=a(6),o=a(8),m=a(7),u=a(9),p=a(1),h=a(2),d=function(e){var t=e.parentIndex,a=e.index,n=(t+a)%2?["white","black"]:["grey","white"],i=Object(h.a)(n,2),c={backgroundColor:i[0],color:i[1]};return r.a.createElement("div",{className:"Square br2 grow-large hide-child",style:c},r.a.createElement("span",{className:"child"},t,", ",a))},b=function(e){var t=e.index,a=e.width,n=Object(p.a)(Array(a).keys()).map((function(e){return r.a.createElement(d,{key:e,index:e,parentIndex:t})}));return r.a.createElement("div",{className:"SquareRow"},n)},f=(a(16),function(e){var t=e.size.split("x").map((function(e){return Number(e)})),a=Object(h.a)(t,2),n=a[0],i=a[1];if(!Number.isInteger(n)||!Number.isInteger(i))return r.a.createElement("span",{className:"error"},r.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0"),"\ufe0f Try again with positive integers.");if(n<=0||i<=0)return r.a.createElement("span",{className:"error"},r.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0"),"\ufe0f Elements have been painted in another dimension. Try again with positive integers.");if(n*i>1e4)return r.a.createElement("span",{className:"error"},"\u26a0\ufe0f Sorry, there are too many elements to paint. Try again with a smaller size.");var c=Object(p.a)(new Array(n)).map((function(e,t){return r.a.createElement(b,{key:t,index:t,width:i})}));return r.a.createElement("div",{className:"Grid"},c)}),v=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({size:a.sizeInput.current.value})},a.sizeInput=Object(n.createRef)(),a.state={size:"3x3"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.size;return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("span",{role:"img","aria-label":"checkerboard"},"\ud83c\udfc1"),r.a.createElement("span",null,"Checkerboard size :"),r.a.createElement("input",{type:"text",placeholder:"Up to 100x100",ref:this.sizeInput})),r.a.createElement("input",{type:"submit",value:"update"})),r.a.createElement(f,{size:e}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b29a3990.chunk.js.map