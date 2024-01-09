'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "1f869c0fe4e6bc43cfa492cab9a579f6",
"/": "1f869c0fe4e6bc43cfa492cab9a579f6",
"main.dart.js": "85d518dd7d923cb63ea2f1eb9e78ca29",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "92e0ee2eeb2aef70d68a7486622c1b8a",
"icons/vikas-192.png": "92e0ee2eeb2aef70d68a7486622c1b8a",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "5452f808ed8ff0c2156165b8df987f85",
"assets/coding.gif": "3d63a3e8137e4376c492690c914aa905",
"assets/NOTICES": "f91db6e12acd4c756cb9819028342f32",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ff2df4bc54666d9584b43ac82152a963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "96b0083cce07a4d939c51bc6a5b1addb",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/feed.jpg": "296b56014da348bb0871bc7d23d17815",
"assets/assets/images/ingamesplash.png": "7a14ad482e5f33bf7296582c06881e52",
"assets/assets/images/wantsscreen.png": "114b7b47f04ad84ee8216954e529c521",
"assets/assets/images/rentdetails.png": "b8e5e9f3b04951647592eee05848f567",
"assets/assets/images/housemessages.jpg": "37b893d9bf0e682558b4bd63c82ffd96",
"assets/assets/images/discover.jpg": "62f9b7d332082d7c2281715e6fdf2017",
"assets/assets/images/ingameSignUp.png": "7555279b40ef919cd16fe22686c26b15",
"assets/assets/images/rentallposts.png": "5e40ffe787ce54ed4e0d8e41033cfb6f",
"assets/assets/images/houseintro.jpg": "82bd9f2ecc411dab54470a00048aac63",
"assets/assets/images/bg.webp": "aa6ce961fe20e135c0374a5e78abf66a",
"assets/assets/images/dealmessage.png": "0d6a1f4a21ddf98d492db45b47a75cdb",
"assets/assets/images/houseprofile.jpg": "841a474e5a8f97c66015d0c0d1c92b3b",
"assets/assets/images/wantschat.png": "be8bf9cceb1c2e4bbc7853f07cd08530",
"assets/assets/images/ingamedrawaer.png": "c1f26c8804540b32dba918f0a0e8174c",
"assets/assets/images/swipe.jpg": "4de07ba14fe79c5d2503179011e6bf24",
"assets/assets/images/bg.gif": "03a4a5f034bf0bafa661fd8a8aabedc8",
"assets/assets/images/ingameHome.png": "b589f92a1409ccbdb2197530f4e80312",
"assets/assets/images/rentrequest.png": "5af5343c73e2ba41d051a09c6cdc366a",
"assets/assets/images/wantsprofile.png": "5ada46d3abd540c45a6ec1d5f148bfa2",
"assets/assets/images/dealdetails.png": "30d66254d4c38c04ca3e4c25935afe5b",
"assets/assets/images/dealHome.png": "1db225dd0cb9e80cf5f5d5b8ab665bdc",
"assets/assets/images/vikas.jpeg": "b075c9e1646683ce4e040448e1cf99b3",
"assets/assets/images/renthome.png": "dfe7802065f6b565050400bfae1b6a9e",
"assets/assets/images/bg.jpeg": "b7a84e8f7b1c8680503eaf0906e8717f",
"assets/assets/images/dealmotor.png": "1907fcda691cf0be8beaa1ac8123996f",
"assets/assets/images/message.jpg": "490f9a2ca5d85af7593a3a5602c34ba9",
"assets/assets/images/wantshome.png": "61ee83e86cd105822b72b79889008dc7",
"assets/assets/images/househome.jpg": "aeb8b4835cdaffe6d5dddcecfdfc4f4d",
"assets/assets/icons/github.svg": "5601f8895eab39f6fa7ab29866f3fa8f",
"assets/assets/icons/Threads.png": "6b143464689dc9620f2371ce518f9ae9",
"assets/assets/icons/instagram.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/download.svg": "f4112e64560f5b066e384dc9e763f11e",
"assets/assets/icons/stack_overflow.svg": "9483751649cf03a3b67fe2d553d3f30f",
"assets/assets/icons/tick.svg": "60c2ddfa5bad34413840f025be965dc7",
"assets/assets/icons/email.svg": "165a208e6dd67c3541a8ce2c85cb56f7",
"assets/assets/icons/facebook.svg": "4decfb5b6262ad2ecad426a7626949f8",
"assets/assets/icons/google_play.svg": "28196f5c787c05f9472474af8711d9a8",
"assets/assets/icons/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/icons/phone.svg": "1f0b141002a18b3aed3ac14da0e30108",
"assets/assets/icons/location.svg": "1f744a51ed6b07dfbe03bfcd1e951ba1",
"assets/assets/icons/linkedin.svg": "2718df0f80edf6d928d2835720192083",
"assets/assets/icons/stackoverflow.png": "e89afa3d48129ecc54023b8fbbf577cd",
"assets/assets/icons/twitter.svg": "5d49f1db5744d4dadff120634ba237b6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
