"use strict";var precacheConfig=[["/index.html","ea7f0e4ac284720304d750c91a2da09c"],["/static/css/main.6a639fcd.css","44306ec8f254da0f90e1172490f86fc2"],["/static/media/activity.0d238f26.jpg","0d238f26e77dfa43aa10dc881932b73f"],["/static/media/bg.82fc62b5.png","82fc62b5af8182ecfab51e0c34a410eb"],["/static/media/bg_line.669533c0.png","669533c0e94294863ed1271bdda92a0f"],["/static/media/bg_wangge.950f63d6.png","950f63d681ebb32a9708be812a0c099f"],["/static/media/bj.654c39dc.jpg","654c39dcf8c2ff008b27a50347c09a02"],["/static/media/comBtn1.52176384.png","521763843bbb9f934ab69aa7c811eea5"],["/static/media/comBtn2.8e58a079.png","8e58a079017e33cf34b9f0b276c3677d"],["/static/media/comBtn3.297f1e78.png","297f1e78e878761da533a409a5d01a88"],["/static/media/common.2c6a7e95.png","2c6a7e95a12e46613e67bf824c38541c"],["/static/media/company.4935f005.png","4935f005dbfbb40341bdb2bcd2aebaf9"],["/static/media/company1.eab404b8.png","eab404b88eabe2eff27803f01e72d1e4"],["/static/media/condition.d0911c0c.png","d0911c0c2377e992ba3147d0ed7eb833"],["/static/media/default-avatar.d6fedfe8.jpg","d6fedfe8b1da8f1d7b739e5b862f5939"],["/static/media/erweim.b639e63e.png","b639e63ec6aeb3a6caf76f1562677a3d"],["/static/media/flow.e0f7e0e9.jpg","e0f7e0e92c1e0678df502d542c9d757a"],["/static/media/footer-logo.85166ec1.png","85166ec1bf722d0653713d1028fd77c3"],["/static/media/footer.82fc03eb.png","82fc03ebb3087b81d4719649e509c6c9"],["/static/media/headTIT.3d322f09.png","3d322f095150d52da39b8a413a10bb44"],["/static/media/header.ad3ade6e.jpg","ad3ade6ef37f6f447e1501cb448268ce"],["/static/media/line.745e7be1.png","745e7be1b928db058d31af672322e5e0"],["/static/media/nomiee_tit.68113da8.jpg","68113da871982238e2bc2f39f7cac78c"],["/static/media/person.87b523ae.png","87b523ae53752741ce2cf7dfb099081d"],["/static/media/person1.d2bd99cc.png","d2bd99cc2eaceaa0e7b95123e5c71090"],["/static/media/prizaTable.79095d58.jpg","79095d58716ba9cd878fb28d0959f611"],["/static/media/prize12.acd3d94e.jpg","acd3d94e303be6da10cba90bb4d22c5b"],["/static/media/product.a3182fa2.png","a3182fa2f2b70114b3968fb3fe8c2ebd"],["/static/media/product1.18ee73a0.png","18ee73a0c89695c7b6cad0c5315fa561"],["/static/media/rules11.97f29c3e.png","97f29c3e096cdbc5f856e41b76340581"],["/static/media/rules22.a10f62ab.jpg","a10f62ab6092562a0dfa27e591cd7309"],["/static/media/rules33.b7e74caa.png","b7e74caa3348a30c5356ac19cb6e62dd"],["/static/media/tabBg.09fc63e6.png","09fc63e6c595e5419f49e4de0e1d2a9d"],["/static/media/title6.ecc59480.png","ecc59480fa4509ecee757cf6c9e09cc7"],["/static/media/title8.5b971fd4.jpg","5b971fd4306e13d461ae9d127cd947f3"],["/static/media/大会简介.7c897983.png","7c89798330acac6b83a19fc4085fad7b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});