(()=>{"use strict";var e,t,n,o,r,i,s={4762:(e,t,n)=>{n.d(t,{IS_FIREFOX:()=>s,IS_SAFARI:()=>i});var o=n(6761);const r=navigator?navigator.userAgent:null,i=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&o.Z.MSStream,!!("safari"in o.Z)||!(!r||!(/\b(iPad|iPhone|iPod)\b/.test(r)||r.match("Safari")&&!r.match("Chrome")))),s=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},1352:(e,t,n)=>{n.d(t,{FK:()=>s,N5:()=>r,SU:()=>o,kC:()=>i});const o="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&!o,i=r||o,s=()=>self.clients.matchAll({includeUncontrolled:!1,type:"window"}),a=(e,...t)=>{try{e.postMessage(...t)}catch(e){console.error("[worker] postMessage error:",e,t)}},c=(e,...t)=>{s().then((n=>{n.length&&n.slice(e?0:-1).forEach((e=>{a(e,...t)}))}))};o&&c.bind(null,!1),o&&c.bind(null,!0)},5003:(e,t,n)=>{n.d(t,{kg:()=>f,v9:()=>o});var o,r=n(410),i=n(4762),s=n(1352),a=n(5289);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(o||(o={}));const c=[o.None,o.Error,o.Warn,o.Log,o.Debug],l=!(i.IS_SAFARI||i.IS_FIREFOX),u="[33m",h="[36m",d=[["debug",o.Debug],["info",o.Log],["warn",o.Warn],["error",o.Error],["assert",o.Error],["trace",o.Log],["group",o.Log],["groupCollapsed",o.Log],["groupEnd",o.Log]];function f(e,t=o.Log|o.Warn|o.Error,n=!1,i=""){let g;r.ZP||n||(t=o.Error),l?i||(s.SU?i=u:s.N5&&(i=h)):i="";const p=i;i=i?`%s ${i}%s`:"%s";const m=function(...n){return t&o.Log&&console.log(i,(0,a.Z)(),e,...n)};return d.forEach((([n,o])=>{m[n]=function(...r){return t&o&&console[n](i,(0,a.Z)(),e,...r)}})),m.setPrefix=function(t){g=t,e="["+t+"]"},m.setPrefix(e),m.setLevel=function(e){t=c.slice(0,e+1).reduce(((e,t)=>e|t),0)},m.bindPrefix=function(e){return f(`${g}] [${e}`,t,n,p)},m}},1901:(e,t,n)=>{n.d(t,{Vp:()=>J,cM:()=>V,j6:()=>H});var o=n(5003);function r(e){return new Promise((t=>{setTimeout(t,e)}))}const i=self,s="cachedAssets";function a(e){return e.ok&&200===e.status}function c(e){return Promise.race([e,r(1e4).then((()=>Promise.reject()))])}function l(){}function u(){const e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach((e=>e(...t)))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise(((n,o)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,o(...e))}}));return t.catch(l).finally((()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=l)})),Object.assign(t,e),t}var h=n(6761),d=n(1267);function f(e,t=""){Array.isArray(e)||(e=[e]);const n=function(e){return-1===["image/jpeg","image/png","image/gif","image/svg+xml","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","audio/wav","application/json","application/pdf"].indexOf(e)?"application/octet-stream":e}(t);return new Blob(e,{type:n})}class g{constructor(e,t,n){this.mimeType=e,this.size=t,this.saveFileCallback=n,this.bytes=new Uint8Array(t)}write(e,t){return n=this,o=void 0,i=function*(){const n=t+e.byteLength;if(n>this.bytes.byteLength){const e=new Uint8Array(n);e.set(this.bytes,0),this.bytes=e}this.bytes.set(e,t)},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(n,o||[])).next())}));var n,o,r,i}truncate(){this.bytes=new Uint8Array}trim(e){this.bytes=this.bytes.slice(0,e)}finalize(e=!0){const t=f(this.bytes,this.mimeType);return e&&this.saveFileCallback&&this.saveFileCallback(t),t}getParts(){return this.bytes}replaceParts(e){this.bytes=e}}var p=n(5471);class m{constructor(e){this.dbName=e,this.useStorage=!0,d.Z.test&&(this.dbName+="_test"),m.STORAGES.length&&(this.useStorage=m.STORAGES[0].useStorage),this.openDatabase(),m.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation((t=>t.delete("/"+e)))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation((t=>t.match("/"+e)))}save(e,t){return this.timeoutOperation((n=>n.put("/"+e,t)))}getFile(e,t="blob"){return this.get(e).then((e=>{if(!e)throw(0,p.Z)("NO_ENTRY_FOUND");return e[t]()}))}saveFile(e,t){t instanceof Blob||(t=f(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then((()=>t))}timeoutOperation(e){return this.useStorage?new Promise(((t,n)=>{return o=this,r=void 0,s=function*(){let o=!1;const r=setTimeout((()=>{n(),o=!0}),15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const r=yield e(n);if(o)return;t(r)}catch(e){n(e)}clearTimeout(r)},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}));var o,r,i,s})):Promise.reject((0,p.Z)("STORAGE_OFFLINE"))}prepareWriting(e,t,n){return{deferred:u(),getWriter:()=>new g(n,t,(t=>this.saveFile(e,t).catch((()=>t))))}}static toggleStorage(e,t){return Promise.all(this.STORAGES.map((n=>{if(n.useStorage=e,t)return e?void 0:n.deleteAll()})))}}m.STORAGES=[];const v=new Map,w=new m("cachedStreamChunks"),b="Time-Cached";setInterval((()=>w.timeoutOperation((e=>e.keys().then((t=>{const n=new Map,o=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const r=[];for(const[t,i]of n){const n=e.match(i).then((n=>{if(+n.headers.get(b)+86400<=o)return V("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})}));r.push(n)}return Promise.all(r)}))))),18e5),setInterval((()=>{const e=J();for(const[t,n]of v)if(t!==e){for(const e in n)n[e].reject();v.delete(t)}}),12e4);const y=new Map;class S{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{y.delete(this.id)},this.id=S.getId(e),y.set(this.id,this),this.limitPart=e.size>78643200?A:P,this.destroyDebounced=function(e,t,n=!0,o=!0){let r,i,s,a,c=!1;const u=t=>{const n=s,o=a;try{n(e.apply(null,t))}catch(e){console.error("debounce error",e),o(e)}},d=(...e)=>{i||(i=new Promise(((e,t)=>(s=e,a=t)))),r?(clearTimeout(r),c=!0,a(),i=new Promise(((e,t)=>(s=e,a=t)))):n&&(u(e),c=!1);const d=h.Z.setTimeout((()=>{!o||n&&!c||u(e),r===d&&(r=i=s=a=void 0,c=!1)}),t);return r=d,i.catch(l),i};return d.clearTimeout=()=>{r&&(h.Z.clearTimeout(r),a(),r=i=s=a=void 0,c=!1)},d}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){return o=this,r=void 0,s=function*(){const o={docId:this.id,dcId:this.info.dcId,offset:e,limit:t},r=JSON.stringify(o),i=J();let s=v.get(i);s||v.set(i,s={});let a=s[r];if(a)return a.then((e=>e.bytes));this.loadedOffsets.add(e),a=s[r]=u(),H.invoke("requestFilePart",o,void 0,i).then(a.resolve,a.reject).finally((()=>{s[r]===a&&(delete s[r],Object.keys(s).length||v.delete(i))}));const c=a.then((e=>e.bytes));return this.saveChunkToCache(c,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),c},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}));var o,r,i,s}requestFilePartFromCache(e,t,n){const o=this.getChunkKey(e,t);return w.getFile(o).then((e=>n?new Uint8Array:function(e){return function(e){return function(e,t){return new Promise((t=>{const n=new FileReader;n.addEventListener("loadend",(e=>{t(e.target.result)})),n.readAsArrayBuffer(e)}))}(e)}(e).then((e=>new Uint8Array(e)))}(e)),(e=>{e.type}))}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then((o=>o||this.requestFilePartFromWorker(e,t,n)))}saveChunkToCache(e,t,n){return e.then((e=>{const o=this.getChunkKey(t,n),r=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream",[b]:""+(Date.now()/1e3|0)}});return w.save(o,r)}))}preloadChunk(e){this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}preloadChunks(e,t){if(t>this.info.size&&(t=this.info.size),e)for(;e<t;e+=this.limitPart)this.preloadChunk(e);else this.preloadChunk(k(e,this.limitPart))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){return 0===e[0]&&1===e[1]?new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":`bytes 0-1/${n||"*"}`,"Content-Length":"2","Content-Type":t||"video/mp4"}}):null}(e,this.info.mimeType,this.info.size);if(t)return t;let[n,o]=e;const r=o&&o<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(o-n+1):this.limitPart,i=k(n,r);return o||(o=Math.min(n+r,this.info.size-1)),this.requestFilePart(i,r).then((e=>{n===i&&o===i+r||(e=e.slice(n-i,o-i+1));const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":`${e.byteLength}`};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),new Response(e,{status:206,statusText:"Partial Content",headers:t})}))}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=y.get(this.getId(e)))&&void 0!==t?t:new S(e)}static getId(e){return e.location.id}}const P=524288,A=1048576;function k(e,t=2048){return e-e%t}var O=n(4762);function C(e,t){const n=Object.keys,o=typeof e;return e&&t&&"object"===o&&o===typeof t?n(e).length===n(t).length&&n(e).every((n=>C(e[n],t[n]))):e===t}class T{constructor(e){!function(e,t){if(t)for(const n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),d.Z.test&&(this.name+="_test"),this.storageIsAvailable=!0,this.log=(0,o.kg)(["IDB",e.name].join("-")),this.log("constructor"),this.openDatabase(!0),T.INSTANCES.push(this)}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;const t=(e,t)=>{var n;const o=Array.from(e.indexNames);for(const t of o)e.deleteIndex(t);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const n of t.indexes)e.indexNames.contains(n.indexName)||e.createIndex(n.indexName,n.keyPath,n.objectParameters)};try{var n=indexedDB.open(this.name,this.version);if(!n)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let o=!1;return setTimeout((()=>{o||n.onerror((0,p.Z)("IDB_CREATE_TIMEOUT"))}),3e3),this.openDbPromise=new Promise(((e,r)=>{n.onsuccess=t=>{o=!0;const i=n.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},n.onerror=e=>{o=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},n.onupgradeneeded=e=>{o=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);const n=e.target,r=n.result;this.stores.forEach((e=>{if(r.objectStoreNames.contains(e.name)){const o=n.transaction.objectStore(e.name);t(o,e)}else((e,n)=>{const o=e.createObjectStore(n.name);t(o,n)})(r,e)}))}}))}static create(e){var t;return null!==(t=this.INSTANCES.find((t=>t.name===e.name)))&&void 0!==t?t:new T(e)}static closeDatabases(e){this.INSTANCES.forEach((t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())}))}}T.INSTANCES=[];class j{constructor(e,t){this.storeName=t,this.log=(0,o.kg)(["IDB",e.name,t].join("-")),this.idb=T.create(e)}delete(e,t){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",(t=>e.map((e=>t.delete(e)))),"",t)}clear(e){return this.getObjectStore("readwrite",(e=>e.clear()),"",e)}save(e,t,n){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",(n=>e.map(((e,o)=>n.put(t[o],e)))),"",n)}get(e,t){return Array.isArray(e)||(e=[].concat(e)),e.length?this.getObjectStore("readonly",(t=>e.map((e=>t.get(e)))),"",t):Promise.resolve([])}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.idb.openDatabase().then((i=>new Promise(((s,a)=>{const c=i.transaction([o],e),l=()=>{clearTimeout(d),a(c.error)},u=()=>{clearTimeout(d),n&&this.log(n+": end",performance.now()-r);const e=p.map((e=>e.result));s(g?e:e[0])};c.onerror=l;const h="readwrite"===e;h&&(c.oncomplete=()=>u());const d=setTimeout((()=>{this.log.error("transaction not finished",c,n)}),1e4),f=t(c.objectStore(o)),g=Array.isArray(f),p=g?f:[].concat(f);if(h)return;const m=p.length;let v=m;const w=()=>{c.error||--v||u()};for(let e=0;e<m;++e){const t=p[e];t.onerror=l,t.onsuccess=w}}))))}getAll(e){return this.getObjectStore("readonly",(e=>e.getAll()),"",e)}}var E=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const x=self,I=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/",_=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new j(e,t)}get(e){return E(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){var n;return E(this,void 0,void 0,(function*(){if(!C(null!==(n=this.cache[e])&&void 0!==n?n:this.defaults[e],t)){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}}))}}({name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]},"session",{push_mute_until:0,push_lang:{push_message_nopreview:"You have a new message",push_action_mute1d:"Mute for 24H",push_action_settings:"Settings"},push_settings:{}});x.addEventListener("push",(e=>{const t=e.data.json();V("push",t);let n=!1;const o=Promise.all([_.get("push_mute_until"),x.clients.matchAll({type:"window"})]).then((e=>{const[o,r]=e;if(V("matched clients",r),n=r.length>0,n)throw"Supress notification because some instance is alive";const i=Date.now();if(L()&&o&&i<o)throw`Supress notification because mute for ${Math.ceil((o-i)/6e4)} min`;if(!t.badge)throw"No badge?"}));o.catch((e=>{V(e)}));const r=o.then((()=>Promise.all([_.get("push_settings"),_.get("push_lang")]))).then((e=>function(e,t,n){const o="assets/img/logo_filled_rounded.png";let r,i=e.title||"Telegram",s=e.description||"";e.custom&&(r=e.custom.channel_id?""+-e.custom.channel_id:e.custom.chat_id?""+-e.custom.chat_id:e.custom.from_id||""),e.custom.peerId=""+r;let a="peer"+r;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview,a="unknown_peer"),V("show notify",i,s,o,e);const c=[{action:"mute1d",title:n.push_action_mute1d}];return x.registration.showNotification(i,{body:s,icon:o,tag:a,data:e,actions:c}).then((e=>{var t;(null==e?void 0:e.notification)&&(t=e.notification,N.has(t)||(N.add(t),t.onclose=D))})).catch((e=>{V.error("Show notification promise",e)}))}(t,e[0],e[1]))),i=r.catch((()=>(V("Closing all notifications on push",n),L()||n?R():x.registration.showNotification("Telegram",{tag:"unknown_peer"}).then((()=>{if(n)return R();setTimeout((()=>R()),n?0:100)})).catch((e=>{V.error("Show notification error",e)})))));e.waitUntil(i)})),x.addEventListener("notificationclick",(e=>{const t=e.notification;V("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&L())return V("[SW] mute for 1d"),void _.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=x.clients.matchAll({type:"window"}).then((e=>{o.action=n,F=o;for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),H.invokeVoid("pushClick",F,n),void(F=void 0)}if(x.clients.openWindow)return _.get("push_settings").then((e=>x.clients.openWindow(e.baseUrl||I)))})).catch((e=>{V.error("Clients.matchAll error",e)}));e.waitUntil(r)})),x.addEventListener("notificationclose",D);const N=new Set;let F;function D(e){var t;t=e.notification,N.delete(t)}function R(){for(const e of N)try{e.close()}catch(e){}let e;return e="getNotifications"in x.registration?x.registration.getNotifications({}).then((e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}})).catch((e=>{V.error("Offline register SW error",e)})):Promise.resolve(),N.clear(),e}function L(){return O.IS_FIREFOX}var W=n(153),M=n(410);class q extends W.Z{constructor(){super("SERVICE"),M.GO&&(M.GO.serviceMessagePort=this)}}var U=n(1352);const Z=new Map,G=(0,p.Z)("UNKNOWN");self.downloadMap=Z;const z={download:e=>{const{id:t}=e;if(Z.has(t))return Promise.reject(G);const n=new CountQueuingStrategy({highWaterMark:1}),o=u();let r;o.then((()=>{setTimeout((()=>{Z.delete(t)}),5e3)}),(()=>{Z.delete(t)}));const i=new ReadableStream({start:e=>{r=e},cancel:e=>{o.reject(G)}},n),s=Object.assign(Object.assign({},e),{readableStream:i,promise:o,controller:r});return Z.set(t,s),o.catch((()=>{throw G}))},downloadChunk:({id:e,chunk:t})=>{const n=Z.get(e);return n?n.controller.enqueue(t):Promise.reject()},downloadFinalize:e=>{const t=Z.get(e);return t?(t.promise.resolve(),t.controller.close()):Promise.reject()},downloadCancel:e=>{const t=Z.get(e);if(t)return t.promise.reject(),t.controller.error()}};function $(e,t){const n=r(100).then((()=>{const e=Z.get(t);if(!e||e.used)return;e.used=!0;const n=e.readableStream;return new Response(n,{headers:e.headers})}));e.respondWith(n)}function B(){if(Z.size)for(const[e,t]of Z)t.controller.error()}const V=(0,o.kg)("SW",o.v9.Error|o.v9.Debug|o.v9.Log|o.v9.Warn,!0),K=self;let X;const J=()=>X,Y=e=>{V("window connected",e.id,"windows before",te.size),"none"!==e.frameType?(V("windows",Array.from(te)),H.invokeVoid("hello",void 0,e),(e=>{te.size||X||(V("sending message port for mtproto"),(e=>{const t=new MessageChannel;H.attachPort(X=t.port1),H.invokeVoid("port",void 0,e,[t.port2])})(e))})(e),te.set(e.id,e)):V.warn("maybe a bugged Safari starting window",e.id)},H=new q;H.addMultipleEventsListeners({notificationsClear:R,toggleStorages:({enabled:e,clearWrite:t})=>{m.toggleStorage(e,t)},pushPing:(e,t)=>{!function(e,t){F&&t&&(H.invokeVoid("pushClick",F,t),F=void 0),e.lang&&_.set("push_lang",e.lang),e.settings&&_.set("push_settings",e.settings)}(e,t)},hello:(e,t)=>{Y(t)}});const{onDownloadFetch:Q,onClosedWindows:ee}=function(e){return e.addMultipleEventsListeners(z),{onDownloadFetch:$,onClosedWindows:B}}(H);(0,U.FK)().then((e=>{V(`got ${e.length} windows from the start`),e.forEach((e=>{Y(e)}))}));const te=new Map;self.connectedWindows=te,function(e,t,n){const o=(t,n)=>{e.attachListenPort(t),n&&e.attachSendPort(n)};e.setOnPortDisconnect((e=>{V("something has disconnected",e),e instanceof WindowClient&&te.has(e.id)?(te.delete(e.id),V("window disconnected, left",te.size),te.size||(V.warn("no windows left"),X&&(H.detachPort(X),X=void 0),ee())):V.warn("it is not a window")})),"undefined"!=typeof SharedWorkerGlobalScope?h.Z.addEventListener("connect",(e=>o(e.source,e.source))):"undefined"!=typeof ServiceWorkerGlobalScope?o(h.Z,null):o(h.Z,h.Z)}(H);const ne=e=>{if(!O.IS_SAFARI&&0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return t=this,n=void 0,r=function*(){try{const t=yield c(i.caches.open(s)),n=yield c(t.match(e.request,{ignoreVary:!0}));if(n&&a(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(a(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),a(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}(e));try{const[t,n]=e.request.url.split("/").slice(-2);switch(t){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range")),o=JSON.parse(decodeURIComponent(t)),r=S.get(o);e.respondWith(Promise.race([(45e3,new Promise((e=>{setTimeout((()=>{e(new Response("",{status:408,statusText:"Request timed out."}))}),45e3)}))),r.requestRange(n)]))}(e,n);break;case"download":Q(e,n);break;case"ping":e.respondWith(new Response("pong"))}}catch(t){V.error("fetch error",t),e.respondWith(new Response("",{status:500,statusText:"Internal Server Error",headers:{"Cache-Control":"no-cache"}}))}},oe=()=>{K.onfetch=ne};K.addEventListener("install",(e=>{V("installing"),e.waitUntil(K.skipWaiting().then((()=>V("skipped waiting"))))})),K.addEventListener("activate",(e=>{V("activating",K),e.waitUntil(K.caches.delete(s).then((()=>V("cleared assets cache")))),e.waitUntil(K.clients.claim().then((()=>V("claimed clients"))))})),K.onoffline=K.ononline=oe,oe()}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e](n,n.exports,c),n.exports}c.m=s,c.x=()=>{var e=c.O(void 0,[437],(()=>c(1901)));return c.O(e)},e=[],c.O=(t,n,o,r)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,r]=e[u],s=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(c.O).every((e=>c.O[e](n[a])))?n.splice(a--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>e+".ee43acb84f0205aa16e3.bundle.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),t=c.u,n=c.e,o=new Map,r=new Map,c.u=function(e){return t(e)+(o.has(e)?"?"+o.get(e):"")},c.e=function(e){return n(e).catch((function(n){var i=r.has(e)?r.get(e):999999;if(i<1){var s=t(e);throw n.message="Loading chunk "+e+" failed after 999999 retries.\n("+s+")",n.request=s,n}return new Promise((function(t){setTimeout((function(){var n=Date.now();o.set(e,n),r.set(e,i-1),t(c.e(e))}),3e3)}))}))},(()=>{var e={670:1};c.f.i=(t,n)=>{e[t]||importScripts(c.p+c.u(t))};var t=this.webpackChunktweb=this.webpackChunktweb||[],n=t.push.bind(t);t.push=t=>{var[o,r,i]=t;for(var s in r)c.o(r,s)&&(c.m[s]=r[s]);for(i&&i(c);o.length;)e[o.pop()]=1;n(t)}})(),i=c.x,c.x=()=>c.e(437).then(i),c.x()})();
//# sourceMappingURL=sw.b71f4764a2a2861984ee.chunk.js.map