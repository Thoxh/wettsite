'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "468d85ff27c1be1def5d040157c8ac4e",
"index.html": "158fadcbc201e2263f11b1cf1a22f304",
"/": "158fadcbc201e2263f11b1cf1a22f304",
"main.dart.js": "2d2b95acc4992bec29c0075e46590e44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ef9b70739d32a3a62d3de8b5a569b7ab",
".git/config": "64da6c1106a3ac56cd4f8d160365e3aa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/66/70c3ed2b2ffee0d8c189693dda46ed5c21849f": "63652950f827bcee07a9f111cc38ba6f",
".git/objects/50/bc798222cbd5fab30ad55a742856d0777f6ed2": "6632ec943d915ba57a9c5bf75847b0d1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/51/7fd200deb46b3a04cb0fafee38f540d9e579f7": "dad11a48cfe705eaf882442d4e4c61b4",
".git/objects/60/53fa29e386e149b4a78bc2eef67009abfeb562": "5a082c2e4013a52c9a42d248d9caa716",
".git/objects/60/af7dca7dc332652d1fc990747b4a80b910f90b": "dbf960d440d88bf33affff86ce5dd64a",
".git/objects/34/8370c0f1b95e4fac20f25a81cce145c0e3fccb": "47a1638f44793252715952a67448c8b1",
".git/objects/b2/ba4100bac0f8d3984deec1ddd2b772a0eaa599": "f464ef4bee07e25a03fe24065d4668e3",
".git/objects/bb/f3c7810a358a72c53dee2c7f3fe4312d7e361d": "44e9249fa743911fa4cd720bc0ba1af5",
".git/objects/d7/9b2ef759dd4dbb177f88d1d05d9a7fa4e1f98c": "01cf98214c3cbac620fbe2559c46162f",
".git/objects/d0/042dd5db2f72d5961f2f56d3748697a3d5437d": "980c4d38afdfbde57c413796d7026657",
".git/objects/b3/03c9164ee3d1b5ca96a75ea12da59bc99b42fc": "9e69e36e4c44af6cf02af49134bff61f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/e7a970bf47b95e025c338a7186daebf1583cee": "d5d4b32b8ff4b76113cbc0faacbb74b5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/8f/e98e7347f2a0e688445576fa5d76d804be6fab": "ae017417b637e033619b8cd9832230be",
".git/objects/8a/729a15a8d52b66966c57ef15e426a2cd1a4454": "8bcfa8aa3b85e401e17ae1425b8bae66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/32752217a03a37df2ffc77e9258b27a8406b55": "d64c65d79e6a1bdd0f4e1e247e2f9fe8",
".git/objects/4c/e81c80d8ea2e992d301e5ff9971cb56e149a8a": "2be7d3b99de9461d9c9dad6a5875d335",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5fd260a9e6ec2385b64dbd238cf39bbbfd71ca": "27cf41fe629abf000862083150ae4032",
".git/objects/07/20055e04974b89955d87d24485bfec3ab92679": "561f134292e6ea44c8c1162b5bbd2aa8",
".git/objects/07/9df481568b598d180b65d1da987cab395192dc": "4e012906d66854665518ab8c2cc4e0e5",
".git/objects/38/e7a31099536bf3c9bb98e492de2a491801e59b": "adf761863c903152a3409737e9ffdfe5",
".git/objects/00/f422937f81bb188ebfbaca30b6c65fa48c0106": "206ffb3ae25b092b9595437179be2a03",
".git/objects/31/ab4dc54776478756ea5aa41cfd9e0baef1f41b": "f78fdc9d5bb2f4d7f2c56436f5dacc67",
".git/objects/53/8b886980840cec6b76efd6e49752a3a75fb9eb": "37e5a57b3445e873e2c9182937e94aa7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/90/3d5be69c98da3425e671f04cbf7047cf32933b": "0dad1358e09d6cbced3bebbdf3229312",
".git/objects/a7/2a4f67111a8ed58d6f22951afa6bc5a4b6bf32": "f52c95ce2bf2aabf7d4671752b42673b",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cbdc346974132236159090c7bf3c30ceb66740": "e9121339e588900dba72f2e17b91daaa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e6/8d99d364a268dcb5f9649323c5669bc1c1b070": "cc0276934b0c3b01e67eb38d31b998a5",
".git/objects/fa/0bcc64830025468dc2f746068a712b9d8d0a60": "205a3edb9987b4f8b18fae3dd446bc5f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/64610be35917bbec846ca67add088d8b37a7cc": "da67975a6e5ffda48076e2c92877b5be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/04bb210951197ecad5b724139365d5039de860": "a8bcbae11a9434d922ade7518fb93ccd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/5240102ba5528cb03d56bf7be2676258ff11bc": "5d67b3eb0a811d32cf94922d23c36df7",
".git/objects/15/160f20ce1769d8bf4573ce60c3047f0e9af63d": "35f5ec1c5455d753e6f6bfacca09781b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/e79f4241c1c345a818b920a8b4037d74db71f4": "a1f9664643cf8ccfe393cc28b4682457",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0dcfa9b0e3e27667961e41e9d31e370f",
".git/logs/refs/heads/master": "0dcfa9b0e3e27667961e41e9d31e370f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "951137ea4a357ed5dc932de590e3fb2d",
".git/index": "5e99183c95ca2bb5dee99d9a19d237c7",
".git/COMMIT_EDITMSG": "7944c8e3e648ad97e19abefc3755d00f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9449e7ef321b1a8d016205a8a6ce2073",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
