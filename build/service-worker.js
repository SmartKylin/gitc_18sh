"use strict";var precacheConfig=[["/index.html","e95cd2b60f853126ee0efc27d859a8e4"],["/static/css/main.44aa587c.css","b4a6ea084df163fe0bf5ac744b9b68b2"],["/static/js/main.e73d222b.js","d2145f50db79e2adfd7f6852e90fd43d"],["/static/media/2013.970681e9.jpg","970681e996bb8e65eb28ba1c559c5179"],["/static/media/2014.78a27a84.jpg","78a27a84acec806a163cf25fa8d90753"],["/static/media/2015.1ca942bd.jpg","1ca942bd09222976dc31ed88c2bc3efa"],["/static/media/2016-2.bf85a972.jpg","bf85a97229417d25c416374aaf2aff82"],["/static/media/2016.d321e366.jpg","d321e3660ad019d08159d226db3b3020"],["/static/media/2017bj.9f7e0c94.png","9f7e0c94639fda5914d0c59aeef2e371"],["/static/media/2017sh.0643e545.jpg","0643e545cb11da4c4d7f7d13e6c88a2c"],["/static/media/2018-4.041b4aa3.jpg","041b4aa3d1c367e55a82c46a4c3a7a6f"],["/static/media/banner5.7d59ce45.png","7d59ce452ed6eea68c2be59f39b4a60d"],["/static/media/bg.82fc62b5.png","82fc62b5af8182ecfab51e0c34a410eb"],["/static/media/bj.8cc998a9.jpg","8cc998a9c603a48460224d2811c4baec"],["/static/media/default-avatar.d6fedfe8.jpg","d6fedfe8b1da8f1d7b739e5b862f5939"],["/static/media/footer.9c902368.png","9c902368a10a9f79b0a6ab172d6e21b4"],["/static/media/pic1.cced22ff.png","cced22ff901cc056916296f72127259a"],["/static/media/pic2.acb9b2cc.png","acb9b2ccf6259148551d41657ad903d8"],["/static/media/pic3.e692e4fb.png","e692e4fbe89ae3709d0eeddc2e1c2233"],["/static/media/pic4.0a83707b.png","0a83707bb1687e577c1801c693724a87"],["/static/media/pic5.34d24b55.png","34d24b554402ed540d44ec0aa53753af"],["/static/media/stru_parallel.5d10a552.png","5d10a552d708c3bb793b19364772e3a2"],["/static/media/swiperBj.8fbd7592.png","8fbd7592a7253d3f08d99c900079ead8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});