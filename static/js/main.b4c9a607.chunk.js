(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,n,t){},181:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t.n(a),o=t(79),r=t.n(o),c=(t(179),t(80)),l=t(81),s=t(83),u=t(82),d=t(29),h=t(84),g=t(47),p=t.n(g),v={value:"Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain!\n\n *[Michael Ignacio's Github](https://github.com/michaelignacio)*"},f=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state=v,t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"handleChange",value:function(e){document.getElementById("output").innerHTML=p()(e.target.value),this.setState({value:e.target.value})}},{key:"rawMarkup",value:function(e){var n=p()(e,{sanitize:!0});return{__html:n}}},{key:"render",value:function(){return i.a.createElement("div",{style:w},i.a.createElement("h1",{style:k},"Markdown Previewer"),i.a.createElement("div",{style:m},i.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,style:b})),i.a.createElement("div",{id:"output",style:m,dangerouslySetInnerHTML:this.rawMarkup(this.state.value)}))}}]),n}(a.Component),w={display:"flex"},m={width:"50%",margin:"20px"},b={"margin-top":"20px",width:"100%",height:"550px",padding:"10px"},k={"text-align":"center"},y=f,x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/markdown-previewer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/markdown-previewer","/service-worker.js");x?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):E(e)})}}()},85:function(e,n,t){e.exports=t(181)}},[[85,1,2]]]);
//# sourceMappingURL=main.b4c9a607.chunk.js.map