'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ab35ee76d489ad2013ea805c83a759a",
"assets/AssetManifest.bin.json": "14e47f8332136b4382b4781575a95f59",
"assets/AssetManifest.json": "e0202b0dbac574fc89025a87dfe9f391",
"assets/assets/images/choklate.png": "55c656e98a3e5df60f00abb6e87bdf6b",
"assets/assets/images/demo.jpg": "2dfcb5c78ea14430f872910374d2e9b8",
"assets/assets/logo/PUNAB%25203%2520transparent@3x.png": "096a635be9912cd2d49c09bed91fafcf",
"assets/assets/logo/Punab%2520Logo%2520SVG-01.svg": "fcfeff6b28a1e3ba49c5d96580ed5d2e",
"assets/assets/logo/punab_logo_base.png": "338ea926ea024227d8261d4ce56bbe62",
"assets/assets/uni_logo/%25E0%25A6%25B8%25E0%25A7%258B%25E0%25A6%25A8%25E0%25A6%25BE%25E0%25A6%25B0%25E0%25A6%2597%25E0%25A6%25BE%25E0%25A6%2581%25E0%25A6%2593_%25E0%25A6%25AC%25E0%25A6%25BF%25E0%25A6%25B6%25E0%25A7%258D%25E0%25A6%25AC%25E0%25A6%25AC%25E0%25A6%25BF%25E0%25A6%25A6%25E0%25A7%258D%25E0%25A6%25AF%25E0%25A6%25BE%25E0%25A6%25B2%25E0%25A6%25AF%25E0%25A6%25BC.png": "4a9cacd2adef74378ebbc9efdc7402d0",
"assets/assets/uni_logo/Ahsanullah_University_of_Science_and_Technology_Logo.svg.png": "275e150e689c6c992e138be19b52e409",
"assets/assets/uni_logo/American_International_University-Bangladesh_Monogram.svg.png": "402ce486b4123603d9f3858c0b461ea8",
"assets/assets/uni_logo/BRAC_University_monogram.svg.png": "f04e889eec1fc3e9924d208b37cc118b",
"assets/assets/uni_logo/bubt-logo-A2A32F498B-seeklogo.com.png": "b6c5405c7514b6d7ea4c6022805e8935",
"assets/assets/uni_logo/buft.png": "a81a89ecd62379fa39614c8f8bb32262",
"assets/assets/uni_logo/city%2520university.png": "d286cfebb4e9ea97169989672e2db8b2",
"assets/assets/uni_logo/Dhaka_International_University.png": "44b3f6a7379ecf293a85393b95e1d932",
"assets/assets/uni_logo/diulogoside.png": "5d78b318784cc01eb817b97bb6946593",
"assets/assets/uni_logo/east-west-university-ewu-logo.png": "860c5bdebca27b2f6df752a657605926",
"assets/assets/uni_logo/Green_University_of_Bangladesh_logo.svg.png": "9c51dd2812ae80e99ea4ff61c3947f0f",
"assets/assets/uni_logo/images%2520(1).png": "eabbb66432fe4d9ca7fcdf9e8ed9de5f",
"assets/assets/uni_logo/Independent_University,_Bangladesh_logo.png": "1ca50eb26a059eef3d0ea6c0bcecb3ed",
"assets/assets/uni_logo/Islamic_University_of_Technology_(coat_of_arms).png": "257b1a1f0d7ba0c32638185d40884903",
"assets/assets/uni_logo/iubat%2520logo.jpg": "8a03ab60d3ed8c8f1ba55d69f7ed3174",
"assets/assets/uni_logo/north-south-university-logo-0CA3A4611D-seeklogo.com.png": "4f07d46173f4f76917919047edbaa398",
"assets/assets/uni_logo/SEU_logo.png": "eb078b167a145a57999bf34d8fbaa21d",
"assets/assets/uni_logo/SMUCT-logo-01.png": "5b664f418e135a73ed78372f73783f63",
"assets/assets/uni_logo/uiu.png": "a7e87daff768f9e91e3b5cf164f74533",
"assets/assets/uni_logo/ulab.png": "db6ac678cdc4c7411dee2940968da9a6",
"assets/assets/uni_logo/uu_brand_logo.png": "5d1b0b3d2549123cf95679b3e2f59e7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c765b14882d69cdfb192ef0896731d75",
"assets/NOTICES": "24f75eb9fbd4ddd5f2ce540f2777861e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "edabd596a028b8d5407e1b645c4be628",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3f09e511d80c8bdc9068447001631ca",
"/": "a3f09e511d80c8bdc9068447001631ca",
"main.dart.js": "d0461cc8aa3ce04bda00f203d157f798",
"manifest.json": "23a4626e2ce3cd104234c8380f43bf66",
"version.json": "eb4e9316066df13582aae4a6750baed0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
