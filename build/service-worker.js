"use strict";var precacheConfig=[["/index.html","af5a5514dfce44e6b727e0dfbe0d6ea7"],["/static/css/main.44aa587c.css","b4a6ea084df163fe0bf5ac744b9b68b2"],["/static/media/activity.db8f6635.png","db8f6635d5d187a0374325981db9813d"],["/static/media/bg.82fc62b5.png","82fc62b5af8182ecfab51e0c34a410eb"],["/static/media/bg_line.669533c0.png","669533c0e94294863ed1271bdda92a0f"],["/static/media/bg_wangge.950f63d6.png","950f63d681ebb32a9708be812a0c099f"],["/static/media/bj.654c39dc.jpg","654c39dcf8c2ff008b27a50347c09a02"],["/static/media/default-avatar.d6fedfe8.jpg","d6fedfe8b1da8f1d7b739e5b862f5939"],["/static/media/flow.9137e32b.png","9137e32b0c312c64358fdd5f22306bf6"],["/static/media/footer-logo.85166ec1.png","85166ec1bf722d0653713d1028fd77c3"],["/static/media/line.745e7be1.png","745e7be1b928db058d31af672322e5e0"],["/static/media/title1.1aaf93f8.png","1aaf93f8001022ae0a66f6138ca995c1"],["/static/media/title2.8fbb645d.png","8fbb645da5cdc837d99224ed382838fe"],["/static/media/title4.d2303056.png","d2303056d7e30c21481cdba289b83308"],["/static/media/title5.15aab3e6.png","15aab3e6fb5eee2ba7dd7257c4d7b156"],["/static/media/title6.b681b8c5.png","b681b8c5d5277f3ef29038a80f3d790e"],["/static/media/大会简介.7c897983.png","7c89798330acac6b83a19fc4085fad7b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});