(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(503),t.b),l=new URL(t(99),t.b),p=i()(a());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);var u=d()(c),h=d()(l);p.push([e.id,":root {\n  /* font */\n  --game-style-font: 'Press Start 2P', cursive;\n\n  /* color */\n  --grid-border-color: #0b3974;\n  --yellow: #f8fe16;\n  --sky-blue: #00c4f7;\n  --normal-blue: #0187ea;\n  --navy-blue: #0b3974;\n  --white: #fcfcfc;\n  --red: #ff495c;\n}\n\nbody {\n  margin: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n}\n\n/* header */\n.header {\n  background-color: var(--sky-blue);\n  text-shadow: var(--gray) 5px 2px;\n}\n\n.game-name {\n  font-family: var(--game-style-font);\n  color: #fcfcfc;\n  margin: 0;\n  margin-top: 16px;\n}\n\n.restart-btn {\n  border: 2mm ridge var(--normal-blue);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-family: var(--game-style-font);\n  font-size: 16px;\n  color: #0b3974;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 16px;\n}\n\n.restart-btn:hover {\n  background-color: var(--yellow);\n}\n\n/* main */\n.main {\n  flex: 1;\n  background-color: #efffff;\n}\n\n.game-zone {\n  display: flex;\n  justify-content: center;\n  padding-top: 16px;\n  background-color: #efffff;\n  gap: 60px;\n  margin: 0 auto;\n}\n\n.game-notice {\n  color: var(--navy-blue);\n  background-color: var(--yellow);\n  font-family: var(--game-style-font);\n  font-size: 16px;\n  margin-bottom: 16px;\n  padding: 8px 0;\n}\n\n.user-name, .computer-name {\n  font-family: 'Press Start 2P', cursive;\n  text-shadow: var(--gray) 1px 1px;\n  margin-bottom: 16px;\n}\n\n.user-name {\n  color: var(--normal-blue);\n}\n\n.computer-name {\n  color: var(--red);\n}\n\n.user-gameBoard, .computer-gameBoard {\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  margin: 0 auto;\n  margin-bottom: 8px;\n  width: 410px;\n  height: 410px;\n  border-left: 2px solid var(--grid-border-color);\n  border-top: 2px solid var(--grid-border-color);\n}\n\n.cell {\n  border-right: 2px solid var(--grid-border-color);\n  border-bottom: 2px solid var(--grid-border-color);\n}\n\n.cell:hover {\n  background-color: var(--yellow);\n}\n\n.occupied {\n  background-color: var(--yellow);\n}\n\n.hit {\n  background: var(--red) url("+u+");\n}\n\n.miss {\n  background: var(--sky-blue) url("+h+");\n}\n\n.ship-container {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n\n.ship-name {\n  text-align: left;\n  font-family: var(--game-style-font);\n  font-size: 12px;\n  width: 120px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.ship {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n}\n\n.ship-cell {\n  width: 40px;\n  height: 40px;\n  background-color: var(--yellow);\n  border-top: 2px solid var(--grid-border-color);\n  border-right: 2px solid var(--grid-border-color);\n  border-bottom: 2px solid var(--grid-border-color);\n}\n\n.ship-cell:first-child {\n  border-left: 2px solid var(--grid-border-color);\n}\n\n.footer {\n  color: var(--white);\n  font-family: var(--game-style-font);\n  font-size: 12px;\n  background-color: var(--navy-blue);\n}\n\n@media screen and (min-width: 100px) {\n  .game-name {\n    font-size: 16px;\n  }\n\n  .restart-btn {\n    font-size: 12px;\n  }\n\n  .game-zone {\n    flex-direction: column;\n    justify-content: start;\n  }\n\n  .grid {\n    width: 250px;\n    height: 250px;\n  }\n\n  .ship-container {\n    margin-bottom: 4px;\n  }\n\n  .ship {\n    height: 27px;\n    margin: 0;\n  }\n\n  .ship-name {\n    width: 80px;\n    height: 27px;\n    line-height: 27px;\n    font-size: 8px;\n    margin: 0;\n  }\n\n  .ship-cell {\n    width: 23px;\n    height: 23px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .game-name {\n    font-size: 28px;\n  }\n\n  .restart-btn {\n    font-size: 16px;\n  }\n\n  .game-zone {\n    flex-direction: row;\n    justify-content: center;\n    max-width: 900px;\n  }\n\n  .grid {\n    width: 330px;\n    height: 330px;\n  }\n\n  .ship-container {\n    margin: 16px;\n  }\n\n  .ship-name {\n    width: 120px;\n    font-size: 12px;\n  }\n\n  .ship {\n    height: 35px;\n  }\n\n  .ship-cell {\n    width: 31px;\n    height: 31px;\n  }\n}\n\n@media screen and (min-width: 920px) {\n  .main {\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .grid {\n    width: 410px;\n    height: 410px;\n  }\n\n  .ship {\n    height: 43px;\n  }\n\n  .ship-cell {\n    width: 39px;\n    height: 39px;\n  }\n}",""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=r(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},503:(e,n,t)=>{e.exports=t.p+"6276d9bb6b7a8286d47b.svg"},99:(e,n,t)=>{e.exports=t.p+"1cc5b8e5d77062ccf18a.svg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=e=>{const n=document.createElement("div");n.classList.add(`${e}-gameBoard`);const t=document.createElement("div");return t.classList.add(`${e}-name`),n.appendChild(t),n},f=(e,n)=>{let t=[];for(let r=0;r<e*n;r++)t.push({shipObject:void 0,shipPart:void 0});let r=[],a=[],o=[],i=[];return{getCell:e=>t[e],placeShip:(e,n)=>{o.push(e),i=[...i,...n];for(let r=0;r<n.length;r++)t[n[r]].shipObject=e,t[n[r]].shipPart=r},receiveAttack:e=>void 0===t[e].shipObject?(t[e].miss=!0,r.push(e),"miss"):(a.push(e),t[e].shipObject.hit(t[e].shipPart),"hit"),getMissedAttacksArray:()=>r,getHitAttacksArray:()=>a,getAllSunk:()=>{for(let e=0;e<o.length;e++)if(!o[e].isSunk())return!1;return!0},getOccupiedCells:()=>i,getShips:()=>o}},v=(e,n)=>{let t=0,r=-1;if(0===e.length)r=n[Math.floor(Math.random()*n.length)];else for(;!n.includes(r);)if(r=e.length>1&&10===Math.abs(e[e.length-1]-e[e.length-2])?e[Math.floor(Math.random()*e.length)]+[-10,10][Math.floor(2*Math.random())]:e[Math.floor(Math.random()*e.length)]+[-1,1][Math.floor(2*Math.random())],t+=1,t>4*e.length){r=n[Math.floor(Math.random()*n.length)];break}return r},x=e=>{const n=e,t=Array.from(Array(100).keys());let r=[];return{getName:()=>n,attack:(e,n)=>r.includes(n)?"duplicated":(r.push(n),e.receiveAttack(n)),randomAttack:e=>{let n=t.filter((e=>!r.includes(e))),a=e.getHitAttacksArray(),o=v(a,n);return r.push(o),{result:e.receiveAttack(o),targetNum:o}}}},b=e=>{const n=e;let t=[];for(let n=0;n<e;n++)t.push({hit:!1});return{getLength:()=>n,getStatus:()=>t,hit:e=>{t[e].hit=!0},isSunk:()=>{for(let n=0;n<e;n++)if(!t[n].hit)return!1;return!0}}},y={renderName:(e,n)=>{e.innerText=n.getName()},renderShip:(e,n,t,r)=>{let a=r?1:10;for(let r=0;r<t;r+=a)e.childNodes[n+r].classList.add("occupied")},addShip:(e,n,t)=>{let r=document.createElement("div");r.classList.add("ship-container");let a=document.createElement("p");a.classList.add("ship-name"),a.innerText=n;let o=document.createElement("div");o.classList.add("ship"),o.id=n;for(let e=0;e<t;e++){let n=document.createElement("div");n.classList.add("ship-cell"),n.dataset.index=e,o.appendChild(n)}r.appendChild(a),r.appendChild(o),e.appendChild(r)},clearAvailableShips:e=>{for(;e.lastChild.classList.contains("ship-container");)e.lastChild.remove()},renderGrid:(e,n,t)=>{const r=document.createElement("div");r.classList.add("grid",`${n}-grid`),r.style.gridTemplateColumns=`repeat(${t}, 1fr)`,r.style.gridTemplateRows=`repeat(${t}, 1fr)`;for(let e=0;e<t*t;e++){const t=document.createElement("div");t.classList.add("cell"),t.dataset.index=e,t.dataset.owner=n,r.appendChild(t)}e.appendChild(r)},removeGrid:e=>{e.remove()},receiveAttack:(e,n,t)=>{let r=e.childNodes[n];"hit"===t?r.classList.add("hit"):r.classList.add("miss")},renderNotice:(e,n)=>{n.innerText=e}},w=y,S=()=>document.querySelector(".game-notice"),k=()=>document.querySelector(".user-name"),C=()=>document.querySelector(".computer-name"),E=()=>document.querySelector(".user-grid"),L=()=>document.querySelector(".computer-grid"),A=()=>document.querySelector(".restart-btn"),N=()=>document.querySelectorAll(".ship"),M=()=>document.querySelector(".user-gameBoard"),T=()=>document.querySelector(".computer-gameBoard"),P=e=>{let n,t="",r=[],a=0;const o=e=>{n=Number(e.target.dataset.index)},i=e=>{t=e.target},s=o=>{if(r.includes(o.target.dataset.index))return;let i=t.childNodes.length;{let s=o.target.dataset.index-n,d=[],c=!1;for(let e=0;e<i;e++){let n=s+e;if(n<0||r.includes(n)||Math.floor(n/10)!==Math.floor(s/10)){c=!0;break}d.push(n)}c||(r=r.concat(d),w.renderShip(E(),s,i,true),t.parentNode.remove(),a+=1,5===a&&w.renderNotice("Start to attack computer ship!",S()),l(),e.placeShip(b(i),d))}},d=e=>{e.preventDefault()},c=()=>{},l=()=>{const e=N(),n=E().childNodes;for(const n of e)n.draggable=!0,n.childNodes.forEach((e=>{e.addEventListener("mousedown",o)})),n.addEventListener("dragstart",i),n.addEventListener("dragend",c);for(const e of n)e.addEventListener("dragover",d),e.addEventListener("drop",s)};return{addDragAndDropEvenListeners:l,getDraggedShip:()=>t}};(()=>{const e=document.getElementById("content");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.classList.add("game-name"),n.textContent="Let's Play Battleship";const t=document.createElement("button");return t.classList.add("restart-btn"),t.textContent="Restart",e.appendChild(n),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("main");const n=document.createElement("div");n.classList.add("game-notice");const t=document.createElement("div");t.classList.add("game-zone");let r=g("user"),a=g("computer");return e.appendChild(n),e.appendChild(t),t.appendChild(r),t.appendChild(a),e})()),e.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p");return n.textContent=`Copyright © ${(new Date).getFullYear()} Sean Liu`,e.appendChild(n),e})())})();let j=(()=>{let e=k(),n=C(),t=M(),r=T(),a=x("User"),o=f(10,10),i=x("Computer"),s=f(10,10),d="user",c=!1,l=P(o);const p=[{name:"Carrier",length:5},{name:"Battleship",length:4},{name:"Cruiser",length:3},{name:"Submarine",length:3},{name:"Destroyer",length:2}],u=()=>{const{result:e,targetNum:n}=i.randomAttack(o);"hit"===e&&(w.receiveAttack(E(),n,e),o.getAllSunk()?(c=!0,w.renderNotice("Computer win! Game Over",S())):(d="user",setTimeout((()=>{w.renderNotice("Your term now!",S())}),200))),"miss"===e&&(w.receiveAttack(E(),n,e),d="user",setTimeout((()=>{w.renderNotice("Your term now!",S())}),200))};return{renderName:()=>{w.renderName(e,a),w.renderName(n,i)},renderNotice:()=>{w.renderNotice("Put user's ships to the place you want!",S())},placeShips:()=>{l.addDragAndDropEvenListeners(),[{ship:b(5),place:[0,1,2,3,4]},{ship:b(4),place:[20,21,22,23]},{ship:b(3),place:[40,41,42]},{ship:b(3),place:[60,61,62]},{ship:b(2),place:[80,81]}].forEach((e=>{s.placeShip(e.ship,e.place)}))},init:()=>{w.removeGrid(E()),w.removeGrid(L()),w.clearAvailableShips(t),a=x("User"),o=f(10,10),i=x("Computer"),s=f(10,10),l=P(o),d="user",c=!1},renderAvailableShips:()=>{p.forEach((e=>{w.addShip(t,e.name,e.length)}))},renderGrid:()=>{w.renderGrid(t,"user",10),w.renderGrid(r,"computer",10)},addEventListener:()=>{L().addEventListener("click",(e=>{if(o.getShips().length<5)return void w.renderNotice("Put all your ships on the board!",S());const n=e.target;if(c)w.renderNotice("Game Over!",S());else if("computer"===d)w.renderNotice("It's computer term now!",S());else if("computer"===n.dataset.owner&&"user"===d){const e=a.attack(s,n.dataset.index);"hit"===e&&(w.receiveAttack(L(),n.dataset.index,e),s.getAllSunk()?(c=!0,w.renderNotice("You win! Game Over!",S())):(d="computer",w.renderNotice("Computer's term now!",S()),setTimeout((()=>u()),1e3))),"miss"===e&&(w.receiveAttack(L(),n.dataset.index,e),d="computer",setTimeout((()=>u()),400))}}))}}})();function z(){j.renderName(),j.renderGrid(),j.renderAvailableShips(),j.placeShips(),j.renderNotice(),j.addEventListener()}z(),A().addEventListener("click",(e=>{j.init(),z()}))})()})();