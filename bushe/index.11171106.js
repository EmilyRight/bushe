// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"czuV8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "55b70dc811171106";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"e0cVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _detectDevice = require("./helpers/detectDevice");
var _detectDeviceDefault = parcelHelpers.interopDefault(_detectDevice);
var _utils = require("./helpers/utils");
var _videoTeaser = require("./helpers/videoTeaser");
var _videoTeaserDefault = parcelHelpers.interopDefault(_videoTeaser);
var _page = require("./components/Page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _sliderFunctions = require("./helpers/sliderFunctions");
/// /////// DocReady //////////
const page = document.querySelector(".page");
window.addEventListener("load", ()=>{
    (0, _detectDeviceDefault.default)();
    (0, _videoTeaserDefault.default)();
    setPageheight();
    const pageView = new (0, _pageDefault.default)(page);
    const buttonMore = document.querySelector(".teaser-more");
    buttonMore.addEventListener("click", ()=>{
        pageView.init();
    });
// const loader = document.querySelector('.loader');
// const controls = document.querySelector('.swiper-controls');
// const hiddenList = document.querySelectorAll('.hidden');
// const teaser = document.querySelector('.teaser');
// loader.addEventListener('animationend', () => {
//   teaser.remove();
//   hiddenList.forEach((element) => {
//     element.classList.remove('hidden');
//     element.classList.add('visible');
//     controls.classList.add('displayed');
//     createSlider();
//   });
//   addAnimationClass();
//   handleAnimation();
// });
});
window.addEventListener("resize", ()=>{
    setPageheight();
});
window.addEventListener("orientationchange", ()=>{
    setPageheight();
});
function setPageheight() {
    const elements = document.querySelectorAll(".js-set-size");
    elements.forEach((el)=>{
        el.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    });
}

},{"./helpers/detectDevice":"i1bMP","./helpers/utils":"i4jdK","./helpers/videoTeaser":"hlzn1","./components/Page":"iwYYK","./helpers/sliderFunctions":"7nCEy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1bMP":[function(require,module,exports) {
/// Detect device
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uaParserJs = require("ua-parser-js");
const getMobileOs = ()=>{
    const { userAgent  } = navigator;
    const parser = new (0, _uaParserJs.UAParser)();
    let platform = "unknown";
    if (parser.getDevice().vendor === "Huawei") platform = "huawei";
    if (/android/i.test(userAgent)) platform = "android";
    if (parser.getDevice().vendor === "Apple") platform = "ios";
    return platform;
};
function detectDevice() {
    const deviceOs = getMobileOs();
    document.body.classList.add(`platform_${deviceOs}`);
    setLinkHref();
}
function setLinkHref() {
    const deviceOs = getMobileOs();
    const appLink = {
        ios: "https://redirect.appmetrica.yandex.com/serve/315401363163010541",
        android: "https://redirect.appmetrica.yandex.com/serve/388180713033187193",
        huawei: "https://redirect.appmetrica.yandex.com/serve/244065662866049837"
    };
    let appLinkHrf = appLink.android;
    if (deviceOs === "ios") appLinkHrf = appLink.ios;
    else if (deviceOs === "huawei") appLinkHrf = appLink.huawei;
    return appLinkHrf;
}
exports.default = detectDevice;

},{"ua-parser-js":"2fabB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fabB":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    "use strict";
    //////////////
    // Constants
    /////////////
    var LIBVERSION = "1.0.33", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook";
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
    }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": [
            "NT 5.1",
            "NT 5.2"
        ],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": [
            "NT 6.4",
            "NT 10.0"
        ],
        "RT": "ARM"
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "Chrome"
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    "Edge"
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Mini"
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                // Trident based
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    "UC" + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat(Win) Desktop"
                ]
            ],
            [
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat"
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    "Konqueror"
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    "IE"
                ]
            ],
            [
                /yabrowser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    "Yandex"
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 Secure " + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Focus"
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Touch"
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Coc Coc"
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    "Dolphin"
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Coast"
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "MIUI " + BROWSER
                ]
            ],
            [
                /fxios\/([-\w\.]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihu|(qi?ho?o?|360)browser/i // 360
            ],
            [
                [
                    NAME,
                    "360 " + BROWSER
                ]
            ],
            [
                /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 " + BROWSER
                ],
                VERSION
            ],
            [
                /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
            ],
            [
                [
                    NAME,
                    /_/g,
                    " "
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/Baidu App/2345 Browser
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i // Chromium/Instagram
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "GSA"
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + " Headless"
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + " WebView"
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Android " + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    "Mobile Safari"
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    "Netscape"
                ],
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Reality"
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i // Links
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    "amd64"
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    "ia32"
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    "arm64"
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    "armhf"
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    "arm"
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    "sparc"
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                // Ordered by popularity
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /\((ip(?:hone|od)[\w ]*);/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Vivo"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Realme"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Lenovo"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    "Nokia"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    "Xperia Tablet"
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OnePlus"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    "Fire Phone $1"
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "HTC"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Acer"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Meizu"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Fairphone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "AT&T"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Siemens"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "RCA"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Dell"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Verizon"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Barnes & Noble"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NuVision"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Zeki"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    "Dragon Touch"
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Insignia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NextBook"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    "Voice"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    "LvTel"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Essential"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Envizen"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "MachSpeed"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Rotor"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    " "
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    "SmartTV"
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + " TV"
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + "cast"
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(quest( 2)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Generic"
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + "HTML"
                ]
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    "Blink"
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i // iCab
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    NAME,
                    "Windows"
                ],
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    "."
                ],
                [
                    NAME,
                    "iOS"
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    "Mac OS"
                ],
                [
                    VERSION,
                    /_/g,
                    "."
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    "Symbian"
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " OS"
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "webOS"
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + "cast"
                ]
            ],
            [
                /(cros) [\w]+ ([\w\.]+\w)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    "Chromium OS"
                ],
                VERSION
            ],
            [
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    "Solaris"
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _ua = ua || (typeof window1 !== UNDEF_TYPE && window1.navigator && window1.navigator.userAgent ? window1.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === "object" ? window : this);

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i4jdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SafeHtml", ()=>SafeHtml);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "generateId", ()=>generateId);
var _he = require("he");
/// Unique ID
/**
  * @param {number} dec
  * @return {string}
  */ function dec2hex(dec) {
    return `0${dec.toString(16)}`.substring(-2);
}
/**
 * @param {number} len
 * @return {string}
 */ function generateId(len) {
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
}
class SafeHtml extends String {
}
/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @return {SafeHtml}
 */ function html(strings, ...values) {
    const result = strings.reduce((before, after, index)=>{
        const value = values[index - 1];
        if (value === undefined) return before + after;
        if (Array.isArray(value) && value.every((it)=>it instanceof SafeHtml)) return before + value.join("") + after;
        if (!(value instanceof SafeHtml)) return before + (0, _he.escape)(String(value)) + after;
        return before + value + after;
    });
    return new SafeHtml(result);
}

},{"he":"eDqRh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDqRh":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    // Detect free variables `exports`.
    var freeExports = exports;
    // Detect free variable `module`.
    var freeModule = module && module.exports == freeExports && module;
    // Detect free variable `global`, from Node.js or Browserified code,
    // and use it as `root`.
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;
    /*--------------------------------------------------------------------------*/ // All astral symbols.
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // All ASCII symbols (not just printable ASCII) except those listed in the
    // first column of the overrides table.
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
    var regexAsciiWhitelist = /[\x01-\x7F]/g;
    // All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
    // code points listed in the first column of the overrides table on
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
    var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
    var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
    var encodeMap = {
        "\xad": "shy",
        "‌": "zwnj",
        "‍": "zwj",
        "‎": "lrm",
        "⁣": "ic",
        "⁢": "it",
        "⁡": "af",
        "‏": "rlm",
        "​": "ZeroWidthSpace",
        "⁠": "NoBreak",
        "̑": "DownBreve",
        "⃛": "tdot",
        "⃜": "DotDot",
        "	": "Tab",
        "\n": "NewLine",
        " ": "puncsp",
        " ": "MediumSpace",
        " ": "thinsp",
        " ": "hairsp",
        " ": "emsp13",
        " ": "ensp",
        " ": "emsp14",
        " ": "emsp",
        " ": "numsp",
        "\xa0": "nbsp",
        "  ": "ThickSpace",
        "‾": "oline",
        "_": "lowbar",
        "‐": "dash",
        "–": "ndash",
        "—": "mdash",
        "―": "horbar",
        ",": "comma",
        ";": "semi",
        "⁏": "bsemi",
        ":": "colon",
        "⩴": "Colone",
        "!": "excl",
        "\xa1": "iexcl",
        "?": "quest",
        "\xbf": "iquest",
        ".": "period",
        "‥": "nldr",
        "…": "mldr",
        "\xb7": "middot",
        "'": "apos",
        "‘": "lsquo",
        "’": "rsquo",
        "‚": "sbquo",
        "‹": "lsaquo",
        "›": "rsaquo",
        '"': "quot",
        "“": "ldquo",
        "”": "rdquo",
        "„": "bdquo",
        "\xab": "laquo",
        "\xbb": "raquo",
        "(": "lpar",
        ")": "rpar",
        "[": "lsqb",
        "]": "rsqb",
        "{": "lcub",
        "}": "rcub",
        "⌈": "lceil",
        "⌉": "rceil",
        "⌊": "lfloor",
        "⌋": "rfloor",
        "⦅": "lopar",
        "⦆": "ropar",
        "⦋": "lbrke",
        "⦌": "rbrke",
        "⦍": "lbrkslu",
        "⦎": "rbrksld",
        "⦏": "lbrksld",
        "⦐": "rbrkslu",
        "⦑": "langd",
        "⦒": "rangd",
        "⦓": "lparlt",
        "⦔": "rpargt",
        "⦕": "gtlPar",
        "⦖": "ltrPar",
        "⟦": "lobrk",
        "⟧": "robrk",
        "⟨": "lang",
        "⟩": "rang",
        "⟪": "Lang",
        "⟫": "Rang",
        "⟬": "loang",
        "⟭": "roang",
        "❲": "lbbrk",
        "❳": "rbbrk",
        "‖": "Vert",
        "\xa7": "sect",
        "\xb6": "para",
        "@": "commat",
        "*": "ast",
        "/": "sol",
        "undefined": null,
        "&": "amp",
        "#": "num",
        "%": "percnt",
        "‰": "permil",
        "‱": "pertenk",
        "†": "dagger",
        "‡": "Dagger",
        "•": "bull",
        "⁃": "hybull",
        "′": "prime",
        "″": "Prime",
        "‴": "tprime",
        "⁗": "qprime",
        "‵": "bprime",
        "⁁": "caret",
        "`": "grave",
        "\xb4": "acute",
        "˜": "tilde",
        "^": "Hat",
        "\xaf": "macr",
        "˘": "breve",
        "˙": "dot",
        "\xa8": "die",
        "˚": "ring",
        "˝": "dblac",
        "\xb8": "cedil",
        "˛": "ogon",
        "ˆ": "circ",
        "ˇ": "caron",
        "\xb0": "deg",
        "\xa9": "copy",
        "\xae": "reg",
        "℗": "copysr",
        "℘": "wp",
        "℞": "rx",
        "℧": "mho",
        "℩": "iiota",
        "←": "larr",
        "↚": "nlarr",
        "→": "rarr",
        "↛": "nrarr",
        "↑": "uarr",
        "↓": "darr",
        "↔": "harr",
        "↮": "nharr",
        "↕": "varr",
        "↖": "nwarr",
        "↗": "nearr",
        "↘": "searr",
        "↙": "swarr",
        "↝": "rarrw",
        "↝̸": "nrarrw",
        "↞": "Larr",
        "↟": "Uarr",
        "↠": "Rarr",
        "↡": "Darr",
        "↢": "larrtl",
        "↣": "rarrtl",
        "↤": "mapstoleft",
        "↥": "mapstoup",
        "↦": "map",
        "↧": "mapstodown",
        "↩": "larrhk",
        "↪": "rarrhk",
        "↫": "larrlp",
        "↬": "rarrlp",
        "↭": "harrw",
        "↰": "lsh",
        "↱": "rsh",
        "↲": "ldsh",
        "↳": "rdsh",
        "↵": "crarr",
        "↶": "cularr",
        "↷": "curarr",
        "↺": "olarr",
        "↻": "orarr",
        "↼": "lharu",
        "↽": "lhard",
        "↾": "uharr",
        "↿": "uharl",
        "⇀": "rharu",
        "⇁": "rhard",
        "⇂": "dharr",
        "⇃": "dharl",
        "⇄": "rlarr",
        "⇅": "udarr",
        "⇆": "lrarr",
        "⇇": "llarr",
        "⇈": "uuarr",
        "⇉": "rrarr",
        "⇊": "ddarr",
        "⇋": "lrhar",
        "⇌": "rlhar",
        "⇐": "lArr",
        "⇍": "nlArr",
        "⇑": "uArr",
        "⇒": "rArr",
        "⇏": "nrArr",
        "⇓": "dArr",
        "⇔": "iff",
        "⇎": "nhArr",
        "⇕": "vArr",
        "⇖": "nwArr",
        "⇗": "neArr",
        "⇘": "seArr",
        "⇙": "swArr",
        "⇚": "lAarr",
        "⇛": "rAarr",
        "⇝": "zigrarr",
        "⇤": "larrb",
        "⇥": "rarrb",
        "⇵": "duarr",
        "⇽": "loarr",
        "⇾": "roarr",
        "⇿": "hoarr",
        "∀": "forall",
        "∁": "comp",
        "∂": "part",
        "∂̸": "npart",
        "∃": "exist",
        "∄": "nexist",
        "∅": "empty",
        "∇": "Del",
        "∈": "in",
        "∉": "notin",
        "∋": "ni",
        "∌": "notni",
        "϶": "bepsi",
        "∏": "prod",
        "∐": "coprod",
        "∑": "sum",
        "+": "plus",
        "\xb1": "pm",
        "\xf7": "div",
        "\xd7": "times",
        "<": "lt",
        "≮": "nlt",
        "<⃒": "nvlt",
        "=": "equals",
        "≠": "ne",
        "=⃥": "bne",
        "⩵": "Equal",
        ">": "gt",
        "≯": "ngt",
        ">⃒": "nvgt",
        "\xac": "not",
        "|": "vert",
        "\xa6": "brvbar",
        "−": "minus",
        "∓": "mp",
        "∔": "plusdo",
        "⁄": "frasl",
        "∖": "setmn",
        "∗": "lowast",
        "∘": "compfn",
        "√": "Sqrt",
        "∝": "prop",
        "∞": "infin",
        "∟": "angrt",
        "∠": "ang",
        "∠⃒": "nang",
        "∡": "angmsd",
        "∢": "angsph",
        "∣": "mid",
        "∤": "nmid",
        "∥": "par",
        "∦": "npar",
        "∧": "and",
        "∨": "or",
        "∩": "cap",
        "∩︀": "caps",
        "∪": "cup",
        "∪︀": "cups",
        "∫": "int",
        "∬": "Int",
        "∭": "tint",
        "⨌": "qint",
        "∮": "oint",
        "∯": "Conint",
        "∰": "Cconint",
        "∱": "cwint",
        "∲": "cwconint",
        "∳": "awconint",
        "∴": "there4",
        "∵": "becaus",
        "∶": "ratio",
        "∷": "Colon",
        "∸": "minusd",
        "∺": "mDDot",
        "∻": "homtht",
        "∼": "sim",
        "≁": "nsim",
        "∼⃒": "nvsim",
        "∽": "bsim",
        "∽̱": "race",
        "∾": "ac",
        "∾̳": "acE",
        "∿": "acd",
        "≀": "wr",
        "≂": "esim",
        "≂̸": "nesim",
        "≃": "sime",
        "≄": "nsime",
        "≅": "cong",
        "≇": "ncong",
        "≆": "simne",
        "≈": "ap",
        "≉": "nap",
        "≊": "ape",
        "≋": "apid",
        "≋̸": "napid",
        "≌": "bcong",
        "≍": "CupCap",
        "≭": "NotCupCap",
        "≍⃒": "nvap",
        "≎": "bump",
        "≎̸": "nbump",
        "≏": "bumpe",
        "≏̸": "nbumpe",
        "≐": "doteq",
        "≐̸": "nedot",
        "≑": "eDot",
        "≒": "efDot",
        "≓": "erDot",
        "≔": "colone",
        "≕": "ecolon",
        "≖": "ecir",
        "≗": "cire",
        "≙": "wedgeq",
        "≚": "veeeq",
        "≜": "trie",
        "≟": "equest",
        "≡": "equiv",
        "≢": "nequiv",
        "≡⃥": "bnequiv",
        "≤": "le",
        "≰": "nle",
        "≤⃒": "nvle",
        "≥": "ge",
        "≱": "nge",
        "≥⃒": "nvge",
        "≦": "lE",
        "≦̸": "nlE",
        "≧": "gE",
        "≧̸": "ngE",
        "≨︀": "lvnE",
        "≨": "lnE",
        "≩": "gnE",
        "≩︀": "gvnE",
        "≪": "ll",
        "≪̸": "nLtv",
        "≪⃒": "nLt",
        "≫": "gg",
        "≫̸": "nGtv",
        "≫⃒": "nGt",
        "≬": "twixt",
        "≲": "lsim",
        "≴": "nlsim",
        "≳": "gsim",
        "≵": "ngsim",
        "≶": "lg",
        "≸": "ntlg",
        "≷": "gl",
        "≹": "ntgl",
        "≺": "pr",
        "⊀": "npr",
        "≻": "sc",
        "⊁": "nsc",
        "≼": "prcue",
        "⋠": "nprcue",
        "≽": "sccue",
        "⋡": "nsccue",
        "≾": "prsim",
        "≿": "scsim",
        "≿̸": "NotSucceedsTilde",
        "⊂": "sub",
        "⊄": "nsub",
        "⊂⃒": "vnsub",
        "⊃": "sup",
        "⊅": "nsup",
        "⊃⃒": "vnsup",
        "⊆": "sube",
        "⊈": "nsube",
        "⊇": "supe",
        "⊉": "nsupe",
        "⊊︀": "vsubne",
        "⊊": "subne",
        "⊋︀": "vsupne",
        "⊋": "supne",
        "⊍": "cupdot",
        "⊎": "uplus",
        "⊏": "sqsub",
        "⊏̸": "NotSquareSubset",
        "⊐": "sqsup",
        "⊐̸": "NotSquareSuperset",
        "⊑": "sqsube",
        "⋢": "nsqsube",
        "⊒": "sqsupe",
        "⋣": "nsqsupe",
        "⊓": "sqcap",
        "⊓︀": "sqcaps",
        "⊔": "sqcup",
        "⊔︀": "sqcups",
        "⊕": "oplus",
        "⊖": "ominus",
        "⊗": "otimes",
        "⊘": "osol",
        "⊙": "odot",
        "⊚": "ocir",
        "⊛": "oast",
        "⊝": "odash",
        "⊞": "plusb",
        "⊟": "minusb",
        "⊠": "timesb",
        "⊡": "sdotb",
        "⊢": "vdash",
        "⊬": "nvdash",
        "⊣": "dashv",
        "⊤": "top",
        "⊥": "bot",
        "⊧": "models",
        "⊨": "vDash",
        "⊭": "nvDash",
        "⊩": "Vdash",
        "⊮": "nVdash",
        "⊪": "Vvdash",
        "⊫": "VDash",
        "⊯": "nVDash",
        "⊰": "prurel",
        "⊲": "vltri",
        "⋪": "nltri",
        "⊳": "vrtri",
        "⋫": "nrtri",
        "⊴": "ltrie",
        "⋬": "nltrie",
        "⊴⃒": "nvltrie",
        "⊵": "rtrie",
        "⋭": "nrtrie",
        "⊵⃒": "nvrtrie",
        "⊶": "origof",
        "⊷": "imof",
        "⊸": "mumap",
        "⊹": "hercon",
        "⊺": "intcal",
        "⊻": "veebar",
        "⊽": "barvee",
        "⊾": "angrtvb",
        "⊿": "lrtri",
        "⋀": "Wedge",
        "⋁": "Vee",
        "⋂": "xcap",
        "⋃": "xcup",
        "⋄": "diam",
        "⋅": "sdot",
        "⋆": "Star",
        "⋇": "divonx",
        "⋈": "bowtie",
        "⋉": "ltimes",
        "⋊": "rtimes",
        "⋋": "lthree",
        "⋌": "rthree",
        "⋍": "bsime",
        "⋎": "cuvee",
        "⋏": "cuwed",
        "⋐": "Sub",
        "⋑": "Sup",
        "⋒": "Cap",
        "⋓": "Cup",
        "⋔": "fork",
        "⋕": "epar",
        "⋖": "ltdot",
        "⋗": "gtdot",
        "⋘": "Ll",
        "⋘̸": "nLl",
        "⋙": "Gg",
        "⋙̸": "nGg",
        "⋚︀": "lesg",
        "⋚": "leg",
        "⋛": "gel",
        "⋛︀": "gesl",
        "⋞": "cuepr",
        "⋟": "cuesc",
        "⋦": "lnsim",
        "⋧": "gnsim",
        "⋨": "prnsim",
        "⋩": "scnsim",
        "⋮": "vellip",
        "⋯": "ctdot",
        "⋰": "utdot",
        "⋱": "dtdot",
        "⋲": "disin",
        "⋳": "isinsv",
        "⋴": "isins",
        "⋵": "isindot",
        "⋵̸": "notindot",
        "⋶": "notinvc",
        "⋷": "notinvb",
        "⋹": "isinE",
        "⋹̸": "notinE",
        "⋺": "nisd",
        "⋻": "xnis",
        "⋼": "nis",
        "⋽": "notnivc",
        "⋾": "notnivb",
        "⌅": "barwed",
        "⌆": "Barwed",
        "⌌": "drcrop",
        "⌍": "dlcrop",
        "⌎": "urcrop",
        "⌏": "ulcrop",
        "⌐": "bnot",
        "⌒": "profline",
        "⌓": "profsurf",
        "⌕": "telrec",
        "⌖": "target",
        "⌜": "ulcorn",
        "⌝": "urcorn",
        "⌞": "dlcorn",
        "⌟": "drcorn",
        "⌢": "frown",
        "⌣": "smile",
        "⌭": "cylcty",
        "⌮": "profalar",
        "⌶": "topbot",
        "⌽": "ovbar",
        "⌿": "solbar",
        "⍼": "angzarr",
        "⎰": "lmoust",
        "⎱": "rmoust",
        "⎴": "tbrk",
        "⎵": "bbrk",
        "⎶": "bbrktbrk",
        "⏜": "OverParenthesis",
        "⏝": "UnderParenthesis",
        "⏞": "OverBrace",
        "⏟": "UnderBrace",
        "⏢": "trpezium",
        "⏧": "elinters",
        "␣": "blank",
        "─": "boxh",
        "│": "boxv",
        "┌": "boxdr",
        "┐": "boxdl",
        "└": "boxur",
        "┘": "boxul",
        "├": "boxvr",
        "┤": "boxvl",
        "┬": "boxhd",
        "┴": "boxhu",
        "┼": "boxvh",
        "═": "boxH",
        "║": "boxV",
        "╒": "boxdR",
        "╓": "boxDr",
        "╔": "boxDR",
        "╕": "boxdL",
        "╖": "boxDl",
        "╗": "boxDL",
        "╘": "boxuR",
        "╙": "boxUr",
        "╚": "boxUR",
        "╛": "boxuL",
        "╜": "boxUl",
        "╝": "boxUL",
        "╞": "boxvR",
        "╟": "boxVr",
        "╠": "boxVR",
        "╡": "boxvL",
        "╢": "boxVl",
        "╣": "boxVL",
        "╤": "boxHd",
        "╥": "boxhD",
        "╦": "boxHD",
        "╧": "boxHu",
        "╨": "boxhU",
        "╩": "boxHU",
        "╪": "boxvH",
        "╫": "boxVh",
        "╬": "boxVH",
        "▀": "uhblk",
        "▄": "lhblk",
        "█": "block",
        "░": "blk14",
        "▒": "blk12",
        "▓": "blk34",
        "□": "squ",
        "▪": "squf",
        "▫": "EmptyVerySmallSquare",
        "▭": "rect",
        "▮": "marker",
        "▱": "fltns",
        "△": "xutri",
        "▴": "utrif",
        "▵": "utri",
        "▸": "rtrif",
        "▹": "rtri",
        "▽": "xdtri",
        "▾": "dtrif",
        "▿": "dtri",
        "◂": "ltrif",
        "◃": "ltri",
        "◊": "loz",
        "○": "cir",
        "◬": "tridot",
        "◯": "xcirc",
        "◸": "ultri",
        "◹": "urtri",
        "◺": "lltri",
        "◻": "EmptySmallSquare",
        "◼": "FilledSmallSquare",
        "★": "starf",
        "☆": "star",
        "☎": "phone",
        "♀": "female",
        "♂": "male",
        "♠": "spades",
        "♣": "clubs",
        "♥": "hearts",
        "♦": "diams",
        "♪": "sung",
        "✓": "check",
        "✗": "cross",
        "✠": "malt",
        "✶": "sext",
        "❘": "VerticalSeparator",
        "⟈": "bsolhsub",
        "⟉": "suphsol",
        "⟵": "xlarr",
        "⟶": "xrarr",
        "⟷": "xharr",
        "⟸": "xlArr",
        "⟹": "xrArr",
        "⟺": "xhArr",
        "⟼": "xmap",
        "⟿": "dzigrarr",
        "⤂": "nvlArr",
        "⤃": "nvrArr",
        "⤄": "nvHarr",
        "⤅": "Map",
        "⤌": "lbarr",
        "⤍": "rbarr",
        "⤎": "lBarr",
        "⤏": "rBarr",
        "⤐": "RBarr",
        "⤑": "DDotrahd",
        "⤒": "UpArrowBar",
        "⤓": "DownArrowBar",
        "⤖": "Rarrtl",
        "⤙": "latail",
        "⤚": "ratail",
        "⤛": "lAtail",
        "⤜": "rAtail",
        "⤝": "larrfs",
        "⤞": "rarrfs",
        "⤟": "larrbfs",
        "⤠": "rarrbfs",
        "⤣": "nwarhk",
        "⤤": "nearhk",
        "⤥": "searhk",
        "⤦": "swarhk",
        "⤧": "nwnear",
        "⤨": "toea",
        "⤩": "tosa",
        "⤪": "swnwar",
        "⤳": "rarrc",
        "⤳̸": "nrarrc",
        "⤵": "cudarrr",
        "⤶": "ldca",
        "⤷": "rdca",
        "⤸": "cudarrl",
        "⤹": "larrpl",
        "⤼": "curarrm",
        "⤽": "cularrp",
        "⥅": "rarrpl",
        "⥈": "harrcir",
        "⥉": "Uarrocir",
        "⥊": "lurdshar",
        "⥋": "ldrushar",
        "⥎": "LeftRightVector",
        "⥏": "RightUpDownVector",
        "⥐": "DownLeftRightVector",
        "⥑": "LeftUpDownVector",
        "⥒": "LeftVectorBar",
        "⥓": "RightVectorBar",
        "⥔": "RightUpVectorBar",
        "⥕": "RightDownVectorBar",
        "⥖": "DownLeftVectorBar",
        "⥗": "DownRightVectorBar",
        "⥘": "LeftUpVectorBar",
        "⥙": "LeftDownVectorBar",
        "⥚": "LeftTeeVector",
        "⥛": "RightTeeVector",
        "⥜": "RightUpTeeVector",
        "⥝": "RightDownTeeVector",
        "⥞": "DownLeftTeeVector",
        "⥟": "DownRightTeeVector",
        "⥠": "LeftUpTeeVector",
        "⥡": "LeftDownTeeVector",
        "⥢": "lHar",
        "⥣": "uHar",
        "⥤": "rHar",
        "⥥": "dHar",
        "⥦": "luruhar",
        "⥧": "ldrdhar",
        "⥨": "ruluhar",
        "⥩": "rdldhar",
        "⥪": "lharul",
        "⥫": "llhard",
        "⥬": "rharul",
        "⥭": "lrhard",
        "⥮": "udhar",
        "⥯": "duhar",
        "⥰": "RoundImplies",
        "⥱": "erarr",
        "⥲": "simrarr",
        "⥳": "larrsim",
        "⥴": "rarrsim",
        "⥵": "rarrap",
        "⥶": "ltlarr",
        "⥸": "gtrarr",
        "⥹": "subrarr",
        "⥻": "suplarr",
        "⥼": "lfisht",
        "⥽": "rfisht",
        "⥾": "ufisht",
        "⥿": "dfisht",
        "⦚": "vzigzag",
        "⦜": "vangrt",
        "⦝": "angrtvbd",
        "⦤": "ange",
        "⦥": "range",
        "⦦": "dwangle",
        "⦧": "uwangle",
        "⦨": "angmsdaa",
        "⦩": "angmsdab",
        "⦪": "angmsdac",
        "⦫": "angmsdad",
        "⦬": "angmsdae",
        "⦭": "angmsdaf",
        "⦮": "angmsdag",
        "⦯": "angmsdah",
        "⦰": "bemptyv",
        "⦱": "demptyv",
        "⦲": "cemptyv",
        "⦳": "raemptyv",
        "⦴": "laemptyv",
        "⦵": "ohbar",
        "⦶": "omid",
        "⦷": "opar",
        "⦹": "operp",
        "⦻": "olcross",
        "⦼": "odsold",
        "⦾": "olcir",
        "⦿": "ofcir",
        "⧀": "olt",
        "⧁": "ogt",
        "⧂": "cirscir",
        "⧃": "cirE",
        "⧄": "solb",
        "⧅": "bsolb",
        "⧉": "boxbox",
        "⧍": "trisb",
        "⧎": "rtriltri",
        "⧏": "LeftTriangleBar",
        "⧏̸": "NotLeftTriangleBar",
        "⧐": "RightTriangleBar",
        "⧐̸": "NotRightTriangleBar",
        "⧜": "iinfin",
        "⧝": "infintie",
        "⧞": "nvinfin",
        "⧣": "eparsl",
        "⧤": "smeparsl",
        "⧥": "eqvparsl",
        "⧫": "lozf",
        "⧴": "RuleDelayed",
        "⧶": "dsol",
        "⨀": "xodot",
        "⨁": "xoplus",
        "⨂": "xotime",
        "⨄": "xuplus",
        "⨆": "xsqcup",
        "⨍": "fpartint",
        "⨐": "cirfnint",
        "⨑": "awint",
        "⨒": "rppolint",
        "⨓": "scpolint",
        "⨔": "npolint",
        "⨕": "pointint",
        "⨖": "quatint",
        "⨗": "intlarhk",
        "⨢": "pluscir",
        "⨣": "plusacir",
        "⨤": "simplus",
        "⨥": "plusdu",
        "⨦": "plussim",
        "⨧": "plustwo",
        "⨩": "mcomma",
        "⨪": "minusdu",
        "⨭": "loplus",
        "⨮": "roplus",
        "⨯": "Cross",
        "⨰": "timesd",
        "⨱": "timesbar",
        "⨳": "smashp",
        "⨴": "lotimes",
        "⨵": "rotimes",
        "⨶": "otimesas",
        "⨷": "Otimes",
        "⨸": "odiv",
        "⨹": "triplus",
        "⨺": "triminus",
        "⨻": "tritime",
        "⨼": "iprod",
        "⨿": "amalg",
        "⩀": "capdot",
        "⩂": "ncup",
        "⩃": "ncap",
        "⩄": "capand",
        "⩅": "cupor",
        "⩆": "cupcap",
        "⩇": "capcup",
        "⩈": "cupbrcap",
        "⩉": "capbrcup",
        "⩊": "cupcup",
        "⩋": "capcap",
        "⩌": "ccups",
        "⩍": "ccaps",
        "⩐": "ccupssm",
        "⩓": "And",
        "⩔": "Or",
        "⩕": "andand",
        "⩖": "oror",
        "⩗": "orslope",
        "⩘": "andslope",
        "⩚": "andv",
        "⩛": "orv",
        "⩜": "andd",
        "⩝": "ord",
        "⩟": "wedbar",
        "⩦": "sdote",
        "⩪": "simdot",
        "⩭": "congdot",
        "⩭̸": "ncongdot",
        "⩮": "easter",
        "⩯": "apacir",
        "⩰": "apE",
        "⩰̸": "napE",
        "⩱": "eplus",
        "⩲": "pluse",
        "⩳": "Esim",
        "⩷": "eDDot",
        "⩸": "equivDD",
        "⩹": "ltcir",
        "⩺": "gtcir",
        "⩻": "ltquest",
        "⩼": "gtquest",
        "⩽": "les",
        "⩽̸": "nles",
        "⩾": "ges",
        "⩾̸": "nges",
        "⩿": "lesdot",
        "⪀": "gesdot",
        "⪁": "lesdoto",
        "⪂": "gesdoto",
        "⪃": "lesdotor",
        "⪄": "gesdotol",
        "⪅": "lap",
        "⪆": "gap",
        "⪇": "lne",
        "⪈": "gne",
        "⪉": "lnap",
        "⪊": "gnap",
        "⪋": "lEg",
        "⪌": "gEl",
        "⪍": "lsime",
        "⪎": "gsime",
        "⪏": "lsimg",
        "⪐": "gsiml",
        "⪑": "lgE",
        "⪒": "glE",
        "⪓": "lesges",
        "⪔": "gesles",
        "⪕": "els",
        "⪖": "egs",
        "⪗": "elsdot",
        "⪘": "egsdot",
        "⪙": "el",
        "⪚": "eg",
        "⪝": "siml",
        "⪞": "simg",
        "⪟": "simlE",
        "⪠": "simgE",
        "⪡": "LessLess",
        "⪡̸": "NotNestedLessLess",
        "⪢": "GreaterGreater",
        "⪢̸": "NotNestedGreaterGreater",
        "⪤": "glj",
        "⪥": "gla",
        "⪦": "ltcc",
        "⪧": "gtcc",
        "⪨": "lescc",
        "⪩": "gescc",
        "⪪": "smt",
        "⪫": "lat",
        "⪬": "smte",
        "⪬︀": "smtes",
        "⪭": "late",
        "⪭︀": "lates",
        "⪮": "bumpE",
        "⪯": "pre",
        "⪯̸": "npre",
        "⪰": "sce",
        "⪰̸": "nsce",
        "⪳": "prE",
        "⪴": "scE",
        "⪵": "prnE",
        "⪶": "scnE",
        "⪷": "prap",
        "⪸": "scap",
        "⪹": "prnap",
        "⪺": "scnap",
        "⪻": "Pr",
        "⪼": "Sc",
        "⪽": "subdot",
        "⪾": "supdot",
        "⪿": "subplus",
        "⫀": "supplus",
        "⫁": "submult",
        "⫂": "supmult",
        "⫃": "subedot",
        "⫄": "supedot",
        "⫅": "subE",
        "⫅̸": "nsubE",
        "⫆": "supE",
        "⫆̸": "nsupE",
        "⫇": "subsim",
        "⫈": "supsim",
        "⫋︀": "vsubnE",
        "⫋": "subnE",
        "⫌︀": "vsupnE",
        "⫌": "supnE",
        "⫏": "csub",
        "⫐": "csup",
        "⫑": "csube",
        "⫒": "csupe",
        "⫓": "subsup",
        "⫔": "supsub",
        "⫕": "subsub",
        "⫖": "supsup",
        "⫗": "suphsub",
        "⫘": "supdsub",
        "⫙": "forkv",
        "⫚": "topfork",
        "⫛": "mlcp",
        "⫤": "Dashv",
        "⫦": "Vdashl",
        "⫧": "Barv",
        "⫨": "vBar",
        "⫩": "vBarv",
        "⫫": "Vbar",
        "⫬": "Not",
        "⫭": "bNot",
        "⫮": "rnmid",
        "⫯": "cirmid",
        "⫰": "midcir",
        "⫱": "topcir",
        "⫲": "nhpar",
        "⫳": "parsim",
        "⫽": "parsl",
        "⫽⃥": "nparsl",
        "♭": "flat",
        "♮": "natur",
        "♯": "sharp",
        "\xa4": "curren",
        "\xa2": "cent",
        "$": "dollar",
        "\xa3": "pound",
        "\xa5": "yen",
        "€": "euro",
        "\xb9": "sup1",
        "\xbd": "half",
        "⅓": "frac13",
        "\xbc": "frac14",
        "⅕": "frac15",
        "⅙": "frac16",
        "⅛": "frac18",
        "\xb2": "sup2",
        "⅔": "frac23",
        "⅖": "frac25",
        "\xb3": "sup3",
        "\xbe": "frac34",
        "⅗": "frac35",
        "⅜": "frac38",
        "⅘": "frac45",
        "⅚": "frac56",
        "⅝": "frac58",
        "⅞": "frac78",
        "\uD835\uDCB6": "ascr",
        "\uD835\uDD52": "aopf",
        "\uD835\uDD1E": "afr",
        "\uD835\uDD38": "Aopf",
        "\uD835\uDD04": "Afr",
        "\uD835\uDC9C": "Ascr",
        "\xaa": "ordf",
        "\xe1": "aacute",
        "\xc1": "Aacute",
        "\xe0": "agrave",
        "\xc0": "Agrave",
        "ă": "abreve",
        "Ă": "Abreve",
        "\xe2": "acirc",
        "\xc2": "Acirc",
        "\xe5": "aring",
        "\xc5": "angst",
        "\xe4": "auml",
        "\xc4": "Auml",
        "\xe3": "atilde",
        "\xc3": "Atilde",
        "ą": "aogon",
        "Ą": "Aogon",
        "ā": "amacr",
        "Ā": "Amacr",
        "\xe6": "aelig",
        "\xc6": "AElig",
        "\uD835\uDCB7": "bscr",
        "\uD835\uDD53": "bopf",
        "\uD835\uDD1F": "bfr",
        "\uD835\uDD39": "Bopf",
        "ℬ": "Bscr",
        "\uD835\uDD05": "Bfr",
        "\uD835\uDD20": "cfr",
        "\uD835\uDCB8": "cscr",
        "\uD835\uDD54": "copf",
        "ℭ": "Cfr",
        "\uD835\uDC9E": "Cscr",
        "ℂ": "Copf",
        "ć": "cacute",
        "Ć": "Cacute",
        "ĉ": "ccirc",
        "Ĉ": "Ccirc",
        "č": "ccaron",
        "Č": "Ccaron",
        "ċ": "cdot",
        "Ċ": "Cdot",
        "\xe7": "ccedil",
        "\xc7": "Ccedil",
        "℅": "incare",
        "\uD835\uDD21": "dfr",
        "ⅆ": "dd",
        "\uD835\uDD55": "dopf",
        "\uD835\uDCB9": "dscr",
        "\uD835\uDC9F": "Dscr",
        "\uD835\uDD07": "Dfr",
        "ⅅ": "DD",
        "\uD835\uDD3B": "Dopf",
        "ď": "dcaron",
        "Ď": "Dcaron",
        "đ": "dstrok",
        "Đ": "Dstrok",
        "\xf0": "eth",
        "\xd0": "ETH",
        "ⅇ": "ee",
        "ℯ": "escr",
        "\uD835\uDD22": "efr",
        "\uD835\uDD56": "eopf",
        "ℰ": "Escr",
        "\uD835\uDD08": "Efr",
        "\uD835\uDD3C": "Eopf",
        "\xe9": "eacute",
        "\xc9": "Eacute",
        "\xe8": "egrave",
        "\xc8": "Egrave",
        "\xea": "ecirc",
        "\xca": "Ecirc",
        "ě": "ecaron",
        "Ě": "Ecaron",
        "\xeb": "euml",
        "\xcb": "Euml",
        "ė": "edot",
        "Ė": "Edot",
        "ę": "eogon",
        "Ę": "Eogon",
        "ē": "emacr",
        "Ē": "Emacr",
        "\uD835\uDD23": "ffr",
        "\uD835\uDD57": "fopf",
        "\uD835\uDCBB": "fscr",
        "\uD835\uDD09": "Ffr",
        "\uD835\uDD3D": "Fopf",
        "ℱ": "Fscr",
        "ﬀ": "fflig",
        "ﬃ": "ffilig",
        "ﬄ": "ffllig",
        "ﬁ": "filig",
        "fj": "fjlig",
        "ﬂ": "fllig",
        "ƒ": "fnof",
        "ℊ": "gscr",
        "\uD835\uDD58": "gopf",
        "\uD835\uDD24": "gfr",
        "\uD835\uDCA2": "Gscr",
        "\uD835\uDD3E": "Gopf",
        "\uD835\uDD0A": "Gfr",
        "ǵ": "gacute",
        "ğ": "gbreve",
        "Ğ": "Gbreve",
        "ĝ": "gcirc",
        "Ĝ": "Gcirc",
        "ġ": "gdot",
        "Ġ": "Gdot",
        "Ģ": "Gcedil",
        "\uD835\uDD25": "hfr",
        "ℎ": "planckh",
        "\uD835\uDCBD": "hscr",
        "\uD835\uDD59": "hopf",
        "ℋ": "Hscr",
        "ℌ": "Hfr",
        "ℍ": "Hopf",
        "ĥ": "hcirc",
        "Ĥ": "Hcirc",
        "ℏ": "hbar",
        "ħ": "hstrok",
        "Ħ": "Hstrok",
        "\uD835\uDD5A": "iopf",
        "\uD835\uDD26": "ifr",
        "\uD835\uDCBE": "iscr",
        "ⅈ": "ii",
        "\uD835\uDD40": "Iopf",
        "ℐ": "Iscr",
        "ℑ": "Im",
        "\xed": "iacute",
        "\xcd": "Iacute",
        "\xec": "igrave",
        "\xcc": "Igrave",
        "\xee": "icirc",
        "\xce": "Icirc",
        "\xef": "iuml",
        "\xcf": "Iuml",
        "ĩ": "itilde",
        "Ĩ": "Itilde",
        "İ": "Idot",
        "į": "iogon",
        "Į": "Iogon",
        "ī": "imacr",
        "Ī": "Imacr",
        "ĳ": "ijlig",
        "Ĳ": "IJlig",
        "ı": "imath",
        "\uD835\uDCBF": "jscr",
        "\uD835\uDD5B": "jopf",
        "\uD835\uDD27": "jfr",
        "\uD835\uDCA5": "Jscr",
        "\uD835\uDD0D": "Jfr",
        "\uD835\uDD41": "Jopf",
        "ĵ": "jcirc",
        "Ĵ": "Jcirc",
        "ȷ": "jmath",
        "\uD835\uDD5C": "kopf",
        "\uD835\uDCC0": "kscr",
        "\uD835\uDD28": "kfr",
        "\uD835\uDCA6": "Kscr",
        "\uD835\uDD42": "Kopf",
        "\uD835\uDD0E": "Kfr",
        "ķ": "kcedil",
        "Ķ": "Kcedil",
        "\uD835\uDD29": "lfr",
        "\uD835\uDCC1": "lscr",
        "ℓ": "ell",
        "\uD835\uDD5D": "lopf",
        "ℒ": "Lscr",
        "\uD835\uDD0F": "Lfr",
        "\uD835\uDD43": "Lopf",
        "ĺ": "lacute",
        "Ĺ": "Lacute",
        "ľ": "lcaron",
        "Ľ": "Lcaron",
        "ļ": "lcedil",
        "Ļ": "Lcedil",
        "ł": "lstrok",
        "Ł": "Lstrok",
        "ŀ": "lmidot",
        "Ŀ": "Lmidot",
        "\uD835\uDD2A": "mfr",
        "\uD835\uDD5E": "mopf",
        "\uD835\uDCC2": "mscr",
        "\uD835\uDD10": "Mfr",
        "\uD835\uDD44": "Mopf",
        "ℳ": "Mscr",
        "\uD835\uDD2B": "nfr",
        "\uD835\uDD5F": "nopf",
        "\uD835\uDCC3": "nscr",
        "ℕ": "Nopf",
        "\uD835\uDCA9": "Nscr",
        "\uD835\uDD11": "Nfr",
        "ń": "nacute",
        "Ń": "Nacute",
        "ň": "ncaron",
        "Ň": "Ncaron",
        "\xf1": "ntilde",
        "\xd1": "Ntilde",
        "ņ": "ncedil",
        "Ņ": "Ncedil",
        "№": "numero",
        "ŋ": "eng",
        "Ŋ": "ENG",
        "\uD835\uDD60": "oopf",
        "\uD835\uDD2C": "ofr",
        "ℴ": "oscr",
        "\uD835\uDCAA": "Oscr",
        "\uD835\uDD12": "Ofr",
        "\uD835\uDD46": "Oopf",
        "\xba": "ordm",
        "\xf3": "oacute",
        "\xd3": "Oacute",
        "\xf2": "ograve",
        "\xd2": "Ograve",
        "\xf4": "ocirc",
        "\xd4": "Ocirc",
        "\xf6": "ouml",
        "\xd6": "Ouml",
        "ő": "odblac",
        "Ő": "Odblac",
        "\xf5": "otilde",
        "\xd5": "Otilde",
        "\xf8": "oslash",
        "\xd8": "Oslash",
        "ō": "omacr",
        "Ō": "Omacr",
        "œ": "oelig",
        "Œ": "OElig",
        "\uD835\uDD2D": "pfr",
        "\uD835\uDCC5": "pscr",
        "\uD835\uDD61": "popf",
        "ℙ": "Popf",
        "\uD835\uDD13": "Pfr",
        "\uD835\uDCAB": "Pscr",
        "\uD835\uDD62": "qopf",
        "\uD835\uDD2E": "qfr",
        "\uD835\uDCC6": "qscr",
        "\uD835\uDCAC": "Qscr",
        "\uD835\uDD14": "Qfr",
        "ℚ": "Qopf",
        "ĸ": "kgreen",
        "\uD835\uDD2F": "rfr",
        "\uD835\uDD63": "ropf",
        "\uD835\uDCC7": "rscr",
        "ℛ": "Rscr",
        "ℜ": "Re",
        "ℝ": "Ropf",
        "ŕ": "racute",
        "Ŕ": "Racute",
        "ř": "rcaron",
        "Ř": "Rcaron",
        "ŗ": "rcedil",
        "Ŗ": "Rcedil",
        "\uD835\uDD64": "sopf",
        "\uD835\uDCC8": "sscr",
        "\uD835\uDD30": "sfr",
        "\uD835\uDD4A": "Sopf",
        "\uD835\uDD16": "Sfr",
        "\uD835\uDCAE": "Sscr",
        "Ⓢ": "oS",
        "ś": "sacute",
        "Ś": "Sacute",
        "ŝ": "scirc",
        "Ŝ": "Scirc",
        "š": "scaron",
        "Š": "Scaron",
        "ş": "scedil",
        "Ş": "Scedil",
        "\xdf": "szlig",
        "\uD835\uDD31": "tfr",
        "\uD835\uDCC9": "tscr",
        "\uD835\uDD65": "topf",
        "\uD835\uDCAF": "Tscr",
        "\uD835\uDD17": "Tfr",
        "\uD835\uDD4B": "Topf",
        "ť": "tcaron",
        "Ť": "Tcaron",
        "ţ": "tcedil",
        "Ţ": "Tcedil",
        "™": "trade",
        "ŧ": "tstrok",
        "Ŧ": "Tstrok",
        "\uD835\uDCCA": "uscr",
        "\uD835\uDD66": "uopf",
        "\uD835\uDD32": "ufr",
        "\uD835\uDD4C": "Uopf",
        "\uD835\uDD18": "Ufr",
        "\uD835\uDCB0": "Uscr",
        "\xfa": "uacute",
        "\xda": "Uacute",
        "\xf9": "ugrave",
        "\xd9": "Ugrave",
        "ŭ": "ubreve",
        "Ŭ": "Ubreve",
        "\xfb": "ucirc",
        "\xdb": "Ucirc",
        "ů": "uring",
        "Ů": "Uring",
        "\xfc": "uuml",
        "\xdc": "Uuml",
        "ű": "udblac",
        "Ű": "Udblac",
        "ũ": "utilde",
        "Ũ": "Utilde",
        "ų": "uogon",
        "Ų": "Uogon",
        "ū": "umacr",
        "Ū": "Umacr",
        "\uD835\uDD33": "vfr",
        "\uD835\uDD67": "vopf",
        "\uD835\uDCCB": "vscr",
        "\uD835\uDD19": "Vfr",
        "\uD835\uDD4D": "Vopf",
        "\uD835\uDCB1": "Vscr",
        "\uD835\uDD68": "wopf",
        "\uD835\uDCCC": "wscr",
        "\uD835\uDD34": "wfr",
        "\uD835\uDCB2": "Wscr",
        "\uD835\uDD4E": "Wopf",
        "\uD835\uDD1A": "Wfr",
        "ŵ": "wcirc",
        "Ŵ": "Wcirc",
        "\uD835\uDD35": "xfr",
        "\uD835\uDCCD": "xscr",
        "\uD835\uDD69": "xopf",
        "\uD835\uDD4F": "Xopf",
        "\uD835\uDD1B": "Xfr",
        "\uD835\uDCB3": "Xscr",
        "\uD835\uDD36": "yfr",
        "\uD835\uDCCE": "yscr",
        "\uD835\uDD6A": "yopf",
        "\uD835\uDCB4": "Yscr",
        "\uD835\uDD1C": "Yfr",
        "\uD835\uDD50": "Yopf",
        "\xfd": "yacute",
        "\xdd": "Yacute",
        "ŷ": "ycirc",
        "Ŷ": "Ycirc",
        "\xff": "yuml",
        "Ÿ": "Yuml",
        "\uD835\uDCCF": "zscr",
        "\uD835\uDD37": "zfr",
        "\uD835\uDD6B": "zopf",
        "ℨ": "Zfr",
        "ℤ": "Zopf",
        "\uD835\uDCB5": "Zscr",
        "ź": "zacute",
        "Ź": "Zacute",
        "ž": "zcaron",
        "Ž": "Zcaron",
        "ż": "zdot",
        "Ż": "Zdot",
        "Ƶ": "imped",
        "\xfe": "thorn",
        "\xde": "THORN",
        "ŉ": "napos",
        "α": "alpha",
        "Α": "Alpha",
        "β": "beta",
        "Β": "Beta",
        "γ": "gamma",
        "Γ": "Gamma",
        "δ": "delta",
        "Δ": "Delta",
        "ε": "epsi",
        "ϵ": "epsiv",
        "Ε": "Epsilon",
        "ϝ": "gammad",
        "Ϝ": "Gammad",
        "ζ": "zeta",
        "Ζ": "Zeta",
        "η": "eta",
        "Η": "Eta",
        "θ": "theta",
        "ϑ": "thetav",
        "Θ": "Theta",
        "ι": "iota",
        "Ι": "Iota",
        "κ": "kappa",
        "ϰ": "kappav",
        "Κ": "Kappa",
        "λ": "lambda",
        "Λ": "Lambda",
        "μ": "mu",
        "\xb5": "micro",
        "Μ": "Mu",
        "ν": "nu",
        "Ν": "Nu",
        "ξ": "xi",
        "Ξ": "Xi",
        "ο": "omicron",
        "Ο": "Omicron",
        "π": "pi",
        "ϖ": "piv",
        "Π": "Pi",
        "ρ": "rho",
        "ϱ": "rhov",
        "Ρ": "Rho",
        "σ": "sigma",
        "Σ": "Sigma",
        "ς": "sigmaf",
        "τ": "tau",
        "Τ": "Tau",
        "υ": "upsi",
        "Υ": "Upsilon",
        "ϒ": "Upsi",
        "φ": "phi",
        "ϕ": "phiv",
        "Φ": "Phi",
        "χ": "chi",
        "Χ": "Chi",
        "ψ": "psi",
        "Ψ": "Psi",
        "ω": "omega",
        "Ω": "ohm",
        "а": "acy",
        "А": "Acy",
        "б": "bcy",
        "Б": "Bcy",
        "в": "vcy",
        "В": "Vcy",
        "г": "gcy",
        "Г": "Gcy",
        "ѓ": "gjcy",
        "Ѓ": "GJcy",
        "д": "dcy",
        "Д": "Dcy",
        "ђ": "djcy",
        "Ђ": "DJcy",
        "е": "iecy",
        "Е": "IEcy",
        "ё": "iocy",
        "Ё": "IOcy",
        "є": "jukcy",
        "Є": "Jukcy",
        "ж": "zhcy",
        "Ж": "ZHcy",
        "з": "zcy",
        "З": "Zcy",
        "ѕ": "dscy",
        "Ѕ": "DScy",
        "и": "icy",
        "И": "Icy",
        "і": "iukcy",
        "І": "Iukcy",
        "ї": "yicy",
        "Ї": "YIcy",
        "й": "jcy",
        "Й": "Jcy",
        "ј": "jsercy",
        "Ј": "Jsercy",
        "к": "kcy",
        "К": "Kcy",
        "ќ": "kjcy",
        "Ќ": "KJcy",
        "л": "lcy",
        "Л": "Lcy",
        "љ": "ljcy",
        "Љ": "LJcy",
        "м": "mcy",
        "М": "Mcy",
        "н": "ncy",
        "Н": "Ncy",
        "њ": "njcy",
        "Њ": "NJcy",
        "о": "ocy",
        "О": "Ocy",
        "п": "pcy",
        "П": "Pcy",
        "р": "rcy",
        "Р": "Rcy",
        "с": "scy",
        "С": "Scy",
        "т": "tcy",
        "Т": "Tcy",
        "ћ": "tshcy",
        "Ћ": "TSHcy",
        "у": "ucy",
        "У": "Ucy",
        "ў": "ubrcy",
        "Ў": "Ubrcy",
        "ф": "fcy",
        "Ф": "Fcy",
        "х": "khcy",
        "Х": "KHcy",
        "ц": "tscy",
        "Ц": "TScy",
        "ч": "chcy",
        "Ч": "CHcy",
        "џ": "dzcy",
        "Џ": "DZcy",
        "ш": "shcy",
        "Ш": "SHcy",
        "щ": "shchcy",
        "Щ": "SHCHcy",
        "ъ": "hardcy",
        "Ъ": "HARDcy",
        "ы": "ycy",
        "Ы": "Ycy",
        "ь": "softcy",
        "Ь": "SOFTcy",
        "э": "ecy",
        "Э": "Ecy",
        "ю": "yucy",
        "Ю": "YUcy",
        "я": "yacy",
        "Я": "YAcy",
        "ℵ": "aleph",
        "ℶ": "beth",
        "ℷ": "gimel",
        "ℸ": "daleth"
    };
    var regexEscape = /["&'<>`]/g;
    var escapeMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
        // following is not strictly necessary unless it’s part of a tag or an
        // unquoted attribute value. We’re only escaping it to support those
        // situations, and for XML support.
        ">": "&gt;",
        // In Internet Explorer ≤ 8, the backtick character can be used
        // to break out of (un)quoted attribute values or HTML comments.
        // See http://html5sec.org/#102, http://html5sec.org/#108, and
        // http://html5sec.org/#133.
        "`": "&#x60;"
    };
    var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
    var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
    var decodeMap = {
        "aacute": "\xe1",
        "Aacute": "\xc1",
        "abreve": "ă",
        "Abreve": "Ă",
        "ac": "∾",
        "acd": "∿",
        "acE": "∾̳",
        "acirc": "\xe2",
        "Acirc": "\xc2",
        "acute": "\xb4",
        "acy": "а",
        "Acy": "А",
        "aelig": "\xe6",
        "AElig": "\xc6",
        "af": "⁡",
        "afr": "\uD835\uDD1E",
        "Afr": "\uD835\uDD04",
        "agrave": "\xe0",
        "Agrave": "\xc0",
        "alefsym": "ℵ",
        "aleph": "ℵ",
        "alpha": "α",
        "Alpha": "Α",
        "amacr": "ā",
        "Amacr": "Ā",
        "amalg": "⨿",
        "amp": "&",
        "AMP": "&",
        "and": "∧",
        "And": "⩓",
        "andand": "⩕",
        "andd": "⩜",
        "andslope": "⩘",
        "andv": "⩚",
        "ang": "∠",
        "ange": "⦤",
        "angle": "∠",
        "angmsd": "∡",
        "angmsdaa": "⦨",
        "angmsdab": "⦩",
        "angmsdac": "⦪",
        "angmsdad": "⦫",
        "angmsdae": "⦬",
        "angmsdaf": "⦭",
        "angmsdag": "⦮",
        "angmsdah": "⦯",
        "angrt": "∟",
        "angrtvb": "⊾",
        "angrtvbd": "⦝",
        "angsph": "∢",
        "angst": "\xc5",
        "angzarr": "⍼",
        "aogon": "ą",
        "Aogon": "Ą",
        "aopf": "\uD835\uDD52",
        "Aopf": "\uD835\uDD38",
        "ap": "≈",
        "apacir": "⩯",
        "ape": "≊",
        "apE": "⩰",
        "apid": "≋",
        "apos": "'",
        "ApplyFunction": "⁡",
        "approx": "≈",
        "approxeq": "≊",
        "aring": "\xe5",
        "Aring": "\xc5",
        "ascr": "\uD835\uDCB6",
        "Ascr": "\uD835\uDC9C",
        "Assign": "≔",
        "ast": "*",
        "asymp": "≈",
        "asympeq": "≍",
        "atilde": "\xe3",
        "Atilde": "\xc3",
        "auml": "\xe4",
        "Auml": "\xc4",
        "awconint": "∳",
        "awint": "⨑",
        "backcong": "≌",
        "backepsilon": "϶",
        "backprime": "‵",
        "backsim": "∽",
        "backsimeq": "⋍",
        "Backslash": "∖",
        "Barv": "⫧",
        "barvee": "⊽",
        "barwed": "⌅",
        "Barwed": "⌆",
        "barwedge": "⌅",
        "bbrk": "⎵",
        "bbrktbrk": "⎶",
        "bcong": "≌",
        "bcy": "б",
        "Bcy": "Б",
        "bdquo": "„",
        "becaus": "∵",
        "because": "∵",
        "Because": "∵",
        "bemptyv": "⦰",
        "bepsi": "϶",
        "bernou": "ℬ",
        "Bernoullis": "ℬ",
        "beta": "β",
        "Beta": "Β",
        "beth": "ℶ",
        "between": "≬",
        "bfr": "\uD835\uDD1F",
        "Bfr": "\uD835\uDD05",
        "bigcap": "⋂",
        "bigcirc": "◯",
        "bigcup": "⋃",
        "bigodot": "⨀",
        "bigoplus": "⨁",
        "bigotimes": "⨂",
        "bigsqcup": "⨆",
        "bigstar": "★",
        "bigtriangledown": "▽",
        "bigtriangleup": "△",
        "biguplus": "⨄",
        "bigvee": "⋁",
        "bigwedge": "⋀",
        "bkarow": "⤍",
        "blacklozenge": "⧫",
        "blacksquare": "▪",
        "blacktriangle": "▴",
        "blacktriangledown": "▾",
        "blacktriangleleft": "◂",
        "blacktriangleright": "▸",
        "blank": "␣",
        "blk12": "▒",
        "blk14": "░",
        "blk34": "▓",
        "block": "█",
        "bne": "=⃥",
        "bnequiv": "≡⃥",
        "bnot": "⌐",
        "bNot": "⫭",
        "bopf": "\uD835\uDD53",
        "Bopf": "\uD835\uDD39",
        "bot": "⊥",
        "bottom": "⊥",
        "bowtie": "⋈",
        "boxbox": "⧉",
        "boxdl": "┐",
        "boxdL": "╕",
        "boxDl": "╖",
        "boxDL": "╗",
        "boxdr": "┌",
        "boxdR": "╒",
        "boxDr": "╓",
        "boxDR": "╔",
        "boxh": "─",
        "boxH": "═",
        "boxhd": "┬",
        "boxhD": "╥",
        "boxHd": "╤",
        "boxHD": "╦",
        "boxhu": "┴",
        "boxhU": "╨",
        "boxHu": "╧",
        "boxHU": "╩",
        "boxminus": "⊟",
        "boxplus": "⊞",
        "boxtimes": "⊠",
        "boxul": "┘",
        "boxuL": "╛",
        "boxUl": "╜",
        "boxUL": "╝",
        "boxur": "└",
        "boxuR": "╘",
        "boxUr": "╙",
        "boxUR": "╚",
        "boxv": "│",
        "boxV": "║",
        "boxvh": "┼",
        "boxvH": "╪",
        "boxVh": "╫",
        "boxVH": "╬",
        "boxvl": "┤",
        "boxvL": "╡",
        "boxVl": "╢",
        "boxVL": "╣",
        "boxvr": "├",
        "boxvR": "╞",
        "boxVr": "╟",
        "boxVR": "╠",
        "bprime": "‵",
        "breve": "˘",
        "Breve": "˘",
        "brvbar": "\xa6",
        "bscr": "\uD835\uDCB7",
        "Bscr": "ℬ",
        "bsemi": "⁏",
        "bsim": "∽",
        "bsime": "⋍",
        "bsol": "\\",
        "bsolb": "⧅",
        "bsolhsub": "⟈",
        "bull": "•",
        "bullet": "•",
        "bump": "≎",
        "bumpe": "≏",
        "bumpE": "⪮",
        "bumpeq": "≏",
        "Bumpeq": "≎",
        "cacute": "ć",
        "Cacute": "Ć",
        "cap": "∩",
        "Cap": "⋒",
        "capand": "⩄",
        "capbrcup": "⩉",
        "capcap": "⩋",
        "capcup": "⩇",
        "capdot": "⩀",
        "CapitalDifferentialD": "ⅅ",
        "caps": "∩︀",
        "caret": "⁁",
        "caron": "ˇ",
        "Cayleys": "ℭ",
        "ccaps": "⩍",
        "ccaron": "č",
        "Ccaron": "Č",
        "ccedil": "\xe7",
        "Ccedil": "\xc7",
        "ccirc": "ĉ",
        "Ccirc": "Ĉ",
        "Cconint": "∰",
        "ccups": "⩌",
        "ccupssm": "⩐",
        "cdot": "ċ",
        "Cdot": "Ċ",
        "cedil": "\xb8",
        "Cedilla": "\xb8",
        "cemptyv": "⦲",
        "cent": "\xa2",
        "centerdot": "\xb7",
        "CenterDot": "\xb7",
        "cfr": "\uD835\uDD20",
        "Cfr": "ℭ",
        "chcy": "ч",
        "CHcy": "Ч",
        "check": "✓",
        "checkmark": "✓",
        "chi": "χ",
        "Chi": "Χ",
        "cir": "○",
        "circ": "ˆ",
        "circeq": "≗",
        "circlearrowleft": "↺",
        "circlearrowright": "↻",
        "circledast": "⊛",
        "circledcirc": "⊚",
        "circleddash": "⊝",
        "CircleDot": "⊙",
        "circledR": "\xae",
        "circledS": "Ⓢ",
        "CircleMinus": "⊖",
        "CirclePlus": "⊕",
        "CircleTimes": "⊗",
        "cire": "≗",
        "cirE": "⧃",
        "cirfnint": "⨐",
        "cirmid": "⫯",
        "cirscir": "⧂",
        "ClockwiseContourIntegral": "∲",
        "CloseCurlyDoubleQuote": "”",
        "CloseCurlyQuote": "’",
        "clubs": "♣",
        "clubsuit": "♣",
        "colon": ":",
        "Colon": "∷",
        "colone": "≔",
        "Colone": "⩴",
        "coloneq": "≔",
        "comma": ",",
        "commat": "@",
        "comp": "∁",
        "compfn": "∘",
        "complement": "∁",
        "complexes": "ℂ",
        "cong": "≅",
        "congdot": "⩭",
        "Congruent": "≡",
        "conint": "∮",
        "Conint": "∯",
        "ContourIntegral": "∮",
        "copf": "\uD835\uDD54",
        "Copf": "ℂ",
        "coprod": "∐",
        "Coproduct": "∐",
        "copy": "\xa9",
        "COPY": "\xa9",
        "copysr": "℗",
        "CounterClockwiseContourIntegral": "∳",
        "crarr": "↵",
        "cross": "✗",
        "Cross": "⨯",
        "cscr": "\uD835\uDCB8",
        "Cscr": "\uD835\uDC9E",
        "csub": "⫏",
        "csube": "⫑",
        "csup": "⫐",
        "csupe": "⫒",
        "ctdot": "⋯",
        "cudarrl": "⤸",
        "cudarrr": "⤵",
        "cuepr": "⋞",
        "cuesc": "⋟",
        "cularr": "↶",
        "cularrp": "⤽",
        "cup": "∪",
        "Cup": "⋓",
        "cupbrcap": "⩈",
        "cupcap": "⩆",
        "CupCap": "≍",
        "cupcup": "⩊",
        "cupdot": "⊍",
        "cupor": "⩅",
        "cups": "∪︀",
        "curarr": "↷",
        "curarrm": "⤼",
        "curlyeqprec": "⋞",
        "curlyeqsucc": "⋟",
        "curlyvee": "⋎",
        "curlywedge": "⋏",
        "curren": "\xa4",
        "curvearrowleft": "↶",
        "curvearrowright": "↷",
        "cuvee": "⋎",
        "cuwed": "⋏",
        "cwconint": "∲",
        "cwint": "∱",
        "cylcty": "⌭",
        "dagger": "†",
        "Dagger": "‡",
        "daleth": "ℸ",
        "darr": "↓",
        "dArr": "⇓",
        "Darr": "↡",
        "dash": "‐",
        "dashv": "⊣",
        "Dashv": "⫤",
        "dbkarow": "⤏",
        "dblac": "˝",
        "dcaron": "ď",
        "Dcaron": "Ď",
        "dcy": "д",
        "Dcy": "Д",
        "dd": "ⅆ",
        "DD": "ⅅ",
        "ddagger": "‡",
        "ddarr": "⇊",
        "DDotrahd": "⤑",
        "ddotseq": "⩷",
        "deg": "\xb0",
        "Del": "∇",
        "delta": "δ",
        "Delta": "Δ",
        "demptyv": "⦱",
        "dfisht": "⥿",
        "dfr": "\uD835\uDD21",
        "Dfr": "\uD835\uDD07",
        "dHar": "⥥",
        "dharl": "⇃",
        "dharr": "⇂",
        "DiacriticalAcute": "\xb4",
        "DiacriticalDot": "˙",
        "DiacriticalDoubleAcute": "˝",
        "DiacriticalGrave": "`",
        "DiacriticalTilde": "˜",
        "diam": "⋄",
        "diamond": "⋄",
        "Diamond": "⋄",
        "diamondsuit": "♦",
        "diams": "♦",
        "die": "\xa8",
        "DifferentialD": "ⅆ",
        "digamma": "ϝ",
        "disin": "⋲",
        "div": "\xf7",
        "divide": "\xf7",
        "divideontimes": "⋇",
        "divonx": "⋇",
        "djcy": "ђ",
        "DJcy": "Ђ",
        "dlcorn": "⌞",
        "dlcrop": "⌍",
        "dollar": "$",
        "dopf": "\uD835\uDD55",
        "Dopf": "\uD835\uDD3B",
        "dot": "˙",
        "Dot": "\xa8",
        "DotDot": "⃜",
        "doteq": "≐",
        "doteqdot": "≑",
        "DotEqual": "≐",
        "dotminus": "∸",
        "dotplus": "∔",
        "dotsquare": "⊡",
        "doublebarwedge": "⌆",
        "DoubleContourIntegral": "∯",
        "DoubleDot": "\xa8",
        "DoubleDownArrow": "⇓",
        "DoubleLeftArrow": "⇐",
        "DoubleLeftRightArrow": "⇔",
        "DoubleLeftTee": "⫤",
        "DoubleLongLeftArrow": "⟸",
        "DoubleLongLeftRightArrow": "⟺",
        "DoubleLongRightArrow": "⟹",
        "DoubleRightArrow": "⇒",
        "DoubleRightTee": "⊨",
        "DoubleUpArrow": "⇑",
        "DoubleUpDownArrow": "⇕",
        "DoubleVerticalBar": "∥",
        "downarrow": "↓",
        "Downarrow": "⇓",
        "DownArrow": "↓",
        "DownArrowBar": "⤓",
        "DownArrowUpArrow": "⇵",
        "DownBreve": "̑",
        "downdownarrows": "⇊",
        "downharpoonleft": "⇃",
        "downharpoonright": "⇂",
        "DownLeftRightVector": "⥐",
        "DownLeftTeeVector": "⥞",
        "DownLeftVector": "↽",
        "DownLeftVectorBar": "⥖",
        "DownRightTeeVector": "⥟",
        "DownRightVector": "⇁",
        "DownRightVectorBar": "⥗",
        "DownTee": "⊤",
        "DownTeeArrow": "↧",
        "drbkarow": "⤐",
        "drcorn": "⌟",
        "drcrop": "⌌",
        "dscr": "\uD835\uDCB9",
        "Dscr": "\uD835\uDC9F",
        "dscy": "ѕ",
        "DScy": "Ѕ",
        "dsol": "⧶",
        "dstrok": "đ",
        "Dstrok": "Đ",
        "dtdot": "⋱",
        "dtri": "▿",
        "dtrif": "▾",
        "duarr": "⇵",
        "duhar": "⥯",
        "dwangle": "⦦",
        "dzcy": "џ",
        "DZcy": "Џ",
        "dzigrarr": "⟿",
        "eacute": "\xe9",
        "Eacute": "\xc9",
        "easter": "⩮",
        "ecaron": "ě",
        "Ecaron": "Ě",
        "ecir": "≖",
        "ecirc": "\xea",
        "Ecirc": "\xca",
        "ecolon": "≕",
        "ecy": "э",
        "Ecy": "Э",
        "eDDot": "⩷",
        "edot": "ė",
        "eDot": "≑",
        "Edot": "Ė",
        "ee": "ⅇ",
        "efDot": "≒",
        "efr": "\uD835\uDD22",
        "Efr": "\uD835\uDD08",
        "eg": "⪚",
        "egrave": "\xe8",
        "Egrave": "\xc8",
        "egs": "⪖",
        "egsdot": "⪘",
        "el": "⪙",
        "Element": "∈",
        "elinters": "⏧",
        "ell": "ℓ",
        "els": "⪕",
        "elsdot": "⪗",
        "emacr": "ē",
        "Emacr": "Ē",
        "empty": "∅",
        "emptyset": "∅",
        "EmptySmallSquare": "◻",
        "emptyv": "∅",
        "EmptyVerySmallSquare": "▫",
        "emsp": " ",
        "emsp13": " ",
        "emsp14": " ",
        "eng": "ŋ",
        "ENG": "Ŋ",
        "ensp": " ",
        "eogon": "ę",
        "Eogon": "Ę",
        "eopf": "\uD835\uDD56",
        "Eopf": "\uD835\uDD3C",
        "epar": "⋕",
        "eparsl": "⧣",
        "eplus": "⩱",
        "epsi": "ε",
        "epsilon": "ε",
        "Epsilon": "Ε",
        "epsiv": "ϵ",
        "eqcirc": "≖",
        "eqcolon": "≕",
        "eqsim": "≂",
        "eqslantgtr": "⪖",
        "eqslantless": "⪕",
        "Equal": "⩵",
        "equals": "=",
        "EqualTilde": "≂",
        "equest": "≟",
        "Equilibrium": "⇌",
        "equiv": "≡",
        "equivDD": "⩸",
        "eqvparsl": "⧥",
        "erarr": "⥱",
        "erDot": "≓",
        "escr": "ℯ",
        "Escr": "ℰ",
        "esdot": "≐",
        "esim": "≂",
        "Esim": "⩳",
        "eta": "η",
        "Eta": "Η",
        "eth": "\xf0",
        "ETH": "\xd0",
        "euml": "\xeb",
        "Euml": "\xcb",
        "euro": "€",
        "excl": "!",
        "exist": "∃",
        "Exists": "∃",
        "expectation": "ℰ",
        "exponentiale": "ⅇ",
        "ExponentialE": "ⅇ",
        "fallingdotseq": "≒",
        "fcy": "ф",
        "Fcy": "Ф",
        "female": "♀",
        "ffilig": "ﬃ",
        "fflig": "ﬀ",
        "ffllig": "ﬄ",
        "ffr": "\uD835\uDD23",
        "Ffr": "\uD835\uDD09",
        "filig": "ﬁ",
        "FilledSmallSquare": "◼",
        "FilledVerySmallSquare": "▪",
        "fjlig": "fj",
        "flat": "♭",
        "fllig": "ﬂ",
        "fltns": "▱",
        "fnof": "ƒ",
        "fopf": "\uD835\uDD57",
        "Fopf": "\uD835\uDD3D",
        "forall": "∀",
        "ForAll": "∀",
        "fork": "⋔",
        "forkv": "⫙",
        "Fouriertrf": "ℱ",
        "fpartint": "⨍",
        "frac12": "\xbd",
        "frac13": "⅓",
        "frac14": "\xbc",
        "frac15": "⅕",
        "frac16": "⅙",
        "frac18": "⅛",
        "frac23": "⅔",
        "frac25": "⅖",
        "frac34": "\xbe",
        "frac35": "⅗",
        "frac38": "⅜",
        "frac45": "⅘",
        "frac56": "⅚",
        "frac58": "⅝",
        "frac78": "⅞",
        "frasl": "⁄",
        "frown": "⌢",
        "fscr": "\uD835\uDCBB",
        "Fscr": "ℱ",
        "gacute": "ǵ",
        "gamma": "γ",
        "Gamma": "Γ",
        "gammad": "ϝ",
        "Gammad": "Ϝ",
        "gap": "⪆",
        "gbreve": "ğ",
        "Gbreve": "Ğ",
        "Gcedil": "Ģ",
        "gcirc": "ĝ",
        "Gcirc": "Ĝ",
        "gcy": "г",
        "Gcy": "Г",
        "gdot": "ġ",
        "Gdot": "Ġ",
        "ge": "≥",
        "gE": "≧",
        "gel": "⋛",
        "gEl": "⪌",
        "geq": "≥",
        "geqq": "≧",
        "geqslant": "⩾",
        "ges": "⩾",
        "gescc": "⪩",
        "gesdot": "⪀",
        "gesdoto": "⪂",
        "gesdotol": "⪄",
        "gesl": "⋛︀",
        "gesles": "⪔",
        "gfr": "\uD835\uDD24",
        "Gfr": "\uD835\uDD0A",
        "gg": "≫",
        "Gg": "⋙",
        "ggg": "⋙",
        "gimel": "ℷ",
        "gjcy": "ѓ",
        "GJcy": "Ѓ",
        "gl": "≷",
        "gla": "⪥",
        "glE": "⪒",
        "glj": "⪤",
        "gnap": "⪊",
        "gnapprox": "⪊",
        "gne": "⪈",
        "gnE": "≩",
        "gneq": "⪈",
        "gneqq": "≩",
        "gnsim": "⋧",
        "gopf": "\uD835\uDD58",
        "Gopf": "\uD835\uDD3E",
        "grave": "`",
        "GreaterEqual": "≥",
        "GreaterEqualLess": "⋛",
        "GreaterFullEqual": "≧",
        "GreaterGreater": "⪢",
        "GreaterLess": "≷",
        "GreaterSlantEqual": "⩾",
        "GreaterTilde": "≳",
        "gscr": "ℊ",
        "Gscr": "\uD835\uDCA2",
        "gsim": "≳",
        "gsime": "⪎",
        "gsiml": "⪐",
        "gt": ">",
        "Gt": "≫",
        "GT": ">",
        "gtcc": "⪧",
        "gtcir": "⩺",
        "gtdot": "⋗",
        "gtlPar": "⦕",
        "gtquest": "⩼",
        "gtrapprox": "⪆",
        "gtrarr": "⥸",
        "gtrdot": "⋗",
        "gtreqless": "⋛",
        "gtreqqless": "⪌",
        "gtrless": "≷",
        "gtrsim": "≳",
        "gvertneqq": "≩︀",
        "gvnE": "≩︀",
        "Hacek": "ˇ",
        "hairsp": " ",
        "half": "\xbd",
        "hamilt": "ℋ",
        "hardcy": "ъ",
        "HARDcy": "Ъ",
        "harr": "↔",
        "hArr": "⇔",
        "harrcir": "⥈",
        "harrw": "↭",
        "Hat": "^",
        "hbar": "ℏ",
        "hcirc": "ĥ",
        "Hcirc": "Ĥ",
        "hearts": "♥",
        "heartsuit": "♥",
        "hellip": "…",
        "hercon": "⊹",
        "hfr": "\uD835\uDD25",
        "Hfr": "ℌ",
        "HilbertSpace": "ℋ",
        "hksearow": "⤥",
        "hkswarow": "⤦",
        "hoarr": "⇿",
        "homtht": "∻",
        "hookleftarrow": "↩",
        "hookrightarrow": "↪",
        "hopf": "\uD835\uDD59",
        "Hopf": "ℍ",
        "horbar": "―",
        "HorizontalLine": "─",
        "hscr": "\uD835\uDCBD",
        "Hscr": "ℋ",
        "hslash": "ℏ",
        "hstrok": "ħ",
        "Hstrok": "Ħ",
        "HumpDownHump": "≎",
        "HumpEqual": "≏",
        "hybull": "⁃",
        "hyphen": "‐",
        "iacute": "\xed",
        "Iacute": "\xcd",
        "ic": "⁣",
        "icirc": "\xee",
        "Icirc": "\xce",
        "icy": "и",
        "Icy": "И",
        "Idot": "İ",
        "iecy": "е",
        "IEcy": "Е",
        "iexcl": "\xa1",
        "iff": "⇔",
        "ifr": "\uD835\uDD26",
        "Ifr": "ℑ",
        "igrave": "\xec",
        "Igrave": "\xcc",
        "ii": "ⅈ",
        "iiiint": "⨌",
        "iiint": "∭",
        "iinfin": "⧜",
        "iiota": "℩",
        "ijlig": "ĳ",
        "IJlig": "Ĳ",
        "Im": "ℑ",
        "imacr": "ī",
        "Imacr": "Ī",
        "image": "ℑ",
        "ImaginaryI": "ⅈ",
        "imagline": "ℐ",
        "imagpart": "ℑ",
        "imath": "ı",
        "imof": "⊷",
        "imped": "Ƶ",
        "Implies": "⇒",
        "in": "∈",
        "incare": "℅",
        "infin": "∞",
        "infintie": "⧝",
        "inodot": "ı",
        "int": "∫",
        "Int": "∬",
        "intcal": "⊺",
        "integers": "ℤ",
        "Integral": "∫",
        "intercal": "⊺",
        "Intersection": "⋂",
        "intlarhk": "⨗",
        "intprod": "⨼",
        "InvisibleComma": "⁣",
        "InvisibleTimes": "⁢",
        "iocy": "ё",
        "IOcy": "Ё",
        "iogon": "į",
        "Iogon": "Į",
        "iopf": "\uD835\uDD5A",
        "Iopf": "\uD835\uDD40",
        "iota": "ι",
        "Iota": "Ι",
        "iprod": "⨼",
        "iquest": "\xbf",
        "iscr": "\uD835\uDCBE",
        "Iscr": "ℐ",
        "isin": "∈",
        "isindot": "⋵",
        "isinE": "⋹",
        "isins": "⋴",
        "isinsv": "⋳",
        "isinv": "∈",
        "it": "⁢",
        "itilde": "ĩ",
        "Itilde": "Ĩ",
        "iukcy": "і",
        "Iukcy": "І",
        "iuml": "\xef",
        "Iuml": "\xcf",
        "jcirc": "ĵ",
        "Jcirc": "Ĵ",
        "jcy": "й",
        "Jcy": "Й",
        "jfr": "\uD835\uDD27",
        "Jfr": "\uD835\uDD0D",
        "jmath": "ȷ",
        "jopf": "\uD835\uDD5B",
        "Jopf": "\uD835\uDD41",
        "jscr": "\uD835\uDCBF",
        "Jscr": "\uD835\uDCA5",
        "jsercy": "ј",
        "Jsercy": "Ј",
        "jukcy": "є",
        "Jukcy": "Є",
        "kappa": "κ",
        "Kappa": "Κ",
        "kappav": "ϰ",
        "kcedil": "ķ",
        "Kcedil": "Ķ",
        "kcy": "к",
        "Kcy": "К",
        "kfr": "\uD835\uDD28",
        "Kfr": "\uD835\uDD0E",
        "kgreen": "ĸ",
        "khcy": "х",
        "KHcy": "Х",
        "kjcy": "ќ",
        "KJcy": "Ќ",
        "kopf": "\uD835\uDD5C",
        "Kopf": "\uD835\uDD42",
        "kscr": "\uD835\uDCC0",
        "Kscr": "\uD835\uDCA6",
        "lAarr": "⇚",
        "lacute": "ĺ",
        "Lacute": "Ĺ",
        "laemptyv": "⦴",
        "lagran": "ℒ",
        "lambda": "λ",
        "Lambda": "Λ",
        "lang": "⟨",
        "Lang": "⟪",
        "langd": "⦑",
        "langle": "⟨",
        "lap": "⪅",
        "Laplacetrf": "ℒ",
        "laquo": "\xab",
        "larr": "←",
        "lArr": "⇐",
        "Larr": "↞",
        "larrb": "⇤",
        "larrbfs": "⤟",
        "larrfs": "⤝",
        "larrhk": "↩",
        "larrlp": "↫",
        "larrpl": "⤹",
        "larrsim": "⥳",
        "larrtl": "↢",
        "lat": "⪫",
        "latail": "⤙",
        "lAtail": "⤛",
        "late": "⪭",
        "lates": "⪭︀",
        "lbarr": "⤌",
        "lBarr": "⤎",
        "lbbrk": "❲",
        "lbrace": "{",
        "lbrack": "[",
        "lbrke": "⦋",
        "lbrksld": "⦏",
        "lbrkslu": "⦍",
        "lcaron": "ľ",
        "Lcaron": "Ľ",
        "lcedil": "ļ",
        "Lcedil": "Ļ",
        "lceil": "⌈",
        "lcub": "{",
        "lcy": "л",
        "Lcy": "Л",
        "ldca": "⤶",
        "ldquo": "“",
        "ldquor": "„",
        "ldrdhar": "⥧",
        "ldrushar": "⥋",
        "ldsh": "↲",
        "le": "≤",
        "lE": "≦",
        "LeftAngleBracket": "⟨",
        "leftarrow": "←",
        "Leftarrow": "⇐",
        "LeftArrow": "←",
        "LeftArrowBar": "⇤",
        "LeftArrowRightArrow": "⇆",
        "leftarrowtail": "↢",
        "LeftCeiling": "⌈",
        "LeftDoubleBracket": "⟦",
        "LeftDownTeeVector": "⥡",
        "LeftDownVector": "⇃",
        "LeftDownVectorBar": "⥙",
        "LeftFloor": "⌊",
        "leftharpoondown": "↽",
        "leftharpoonup": "↼",
        "leftleftarrows": "⇇",
        "leftrightarrow": "↔",
        "Leftrightarrow": "⇔",
        "LeftRightArrow": "↔",
        "leftrightarrows": "⇆",
        "leftrightharpoons": "⇋",
        "leftrightsquigarrow": "↭",
        "LeftRightVector": "⥎",
        "LeftTee": "⊣",
        "LeftTeeArrow": "↤",
        "LeftTeeVector": "⥚",
        "leftthreetimes": "⋋",
        "LeftTriangle": "⊲",
        "LeftTriangleBar": "⧏",
        "LeftTriangleEqual": "⊴",
        "LeftUpDownVector": "⥑",
        "LeftUpTeeVector": "⥠",
        "LeftUpVector": "↿",
        "LeftUpVectorBar": "⥘",
        "LeftVector": "↼",
        "LeftVectorBar": "⥒",
        "leg": "⋚",
        "lEg": "⪋",
        "leq": "≤",
        "leqq": "≦",
        "leqslant": "⩽",
        "les": "⩽",
        "lescc": "⪨",
        "lesdot": "⩿",
        "lesdoto": "⪁",
        "lesdotor": "⪃",
        "lesg": "⋚︀",
        "lesges": "⪓",
        "lessapprox": "⪅",
        "lessdot": "⋖",
        "lesseqgtr": "⋚",
        "lesseqqgtr": "⪋",
        "LessEqualGreater": "⋚",
        "LessFullEqual": "≦",
        "LessGreater": "≶",
        "lessgtr": "≶",
        "LessLess": "⪡",
        "lesssim": "≲",
        "LessSlantEqual": "⩽",
        "LessTilde": "≲",
        "lfisht": "⥼",
        "lfloor": "⌊",
        "lfr": "\uD835\uDD29",
        "Lfr": "\uD835\uDD0F",
        "lg": "≶",
        "lgE": "⪑",
        "lHar": "⥢",
        "lhard": "↽",
        "lharu": "↼",
        "lharul": "⥪",
        "lhblk": "▄",
        "ljcy": "љ",
        "LJcy": "Љ",
        "ll": "≪",
        "Ll": "⋘",
        "llarr": "⇇",
        "llcorner": "⌞",
        "Lleftarrow": "⇚",
        "llhard": "⥫",
        "lltri": "◺",
        "lmidot": "ŀ",
        "Lmidot": "Ŀ",
        "lmoust": "⎰",
        "lmoustache": "⎰",
        "lnap": "⪉",
        "lnapprox": "⪉",
        "lne": "⪇",
        "lnE": "≨",
        "lneq": "⪇",
        "lneqq": "≨",
        "lnsim": "⋦",
        "loang": "⟬",
        "loarr": "⇽",
        "lobrk": "⟦",
        "longleftarrow": "⟵",
        "Longleftarrow": "⟸",
        "LongLeftArrow": "⟵",
        "longleftrightarrow": "⟷",
        "Longleftrightarrow": "⟺",
        "LongLeftRightArrow": "⟷",
        "longmapsto": "⟼",
        "longrightarrow": "⟶",
        "Longrightarrow": "⟹",
        "LongRightArrow": "⟶",
        "looparrowleft": "↫",
        "looparrowright": "↬",
        "lopar": "⦅",
        "lopf": "\uD835\uDD5D",
        "Lopf": "\uD835\uDD43",
        "loplus": "⨭",
        "lotimes": "⨴",
        "lowast": "∗",
        "lowbar": "_",
        "LowerLeftArrow": "↙",
        "LowerRightArrow": "↘",
        "loz": "◊",
        "lozenge": "◊",
        "lozf": "⧫",
        "lpar": "(",
        "lparlt": "⦓",
        "lrarr": "⇆",
        "lrcorner": "⌟",
        "lrhar": "⇋",
        "lrhard": "⥭",
        "lrm": "‎",
        "lrtri": "⊿",
        "lsaquo": "‹",
        "lscr": "\uD835\uDCC1",
        "Lscr": "ℒ",
        "lsh": "↰",
        "Lsh": "↰",
        "lsim": "≲",
        "lsime": "⪍",
        "lsimg": "⪏",
        "lsqb": "[",
        "lsquo": "‘",
        "lsquor": "‚",
        "lstrok": "ł",
        "Lstrok": "Ł",
        "lt": "<",
        "Lt": "≪",
        "LT": "<",
        "ltcc": "⪦",
        "ltcir": "⩹",
        "ltdot": "⋖",
        "lthree": "⋋",
        "ltimes": "⋉",
        "ltlarr": "⥶",
        "ltquest": "⩻",
        "ltri": "◃",
        "ltrie": "⊴",
        "ltrif": "◂",
        "ltrPar": "⦖",
        "lurdshar": "⥊",
        "luruhar": "⥦",
        "lvertneqq": "≨︀",
        "lvnE": "≨︀",
        "macr": "\xaf",
        "male": "♂",
        "malt": "✠",
        "maltese": "✠",
        "map": "↦",
        "Map": "⤅",
        "mapsto": "↦",
        "mapstodown": "↧",
        "mapstoleft": "↤",
        "mapstoup": "↥",
        "marker": "▮",
        "mcomma": "⨩",
        "mcy": "м",
        "Mcy": "М",
        "mdash": "—",
        "mDDot": "∺",
        "measuredangle": "∡",
        "MediumSpace": " ",
        "Mellintrf": "ℳ",
        "mfr": "\uD835\uDD2A",
        "Mfr": "\uD835\uDD10",
        "mho": "℧",
        "micro": "\xb5",
        "mid": "∣",
        "midast": "*",
        "midcir": "⫰",
        "middot": "\xb7",
        "minus": "−",
        "minusb": "⊟",
        "minusd": "∸",
        "minusdu": "⨪",
        "MinusPlus": "∓",
        "mlcp": "⫛",
        "mldr": "…",
        "mnplus": "∓",
        "models": "⊧",
        "mopf": "\uD835\uDD5E",
        "Mopf": "\uD835\uDD44",
        "mp": "∓",
        "mscr": "\uD835\uDCC2",
        "Mscr": "ℳ",
        "mstpos": "∾",
        "mu": "μ",
        "Mu": "Μ",
        "multimap": "⊸",
        "mumap": "⊸",
        "nabla": "∇",
        "nacute": "ń",
        "Nacute": "Ń",
        "nang": "∠⃒",
        "nap": "≉",
        "napE": "⩰̸",
        "napid": "≋̸",
        "napos": "ŉ",
        "napprox": "≉",
        "natur": "♮",
        "natural": "♮",
        "naturals": "ℕ",
        "nbsp": "\xa0",
        "nbump": "≎̸",
        "nbumpe": "≏̸",
        "ncap": "⩃",
        "ncaron": "ň",
        "Ncaron": "Ň",
        "ncedil": "ņ",
        "Ncedil": "Ņ",
        "ncong": "≇",
        "ncongdot": "⩭̸",
        "ncup": "⩂",
        "ncy": "н",
        "Ncy": "Н",
        "ndash": "–",
        "ne": "≠",
        "nearhk": "⤤",
        "nearr": "↗",
        "neArr": "⇗",
        "nearrow": "↗",
        "nedot": "≐̸",
        "NegativeMediumSpace": "​",
        "NegativeThickSpace": "​",
        "NegativeThinSpace": "​",
        "NegativeVeryThinSpace": "​",
        "nequiv": "≢",
        "nesear": "⤨",
        "nesim": "≂̸",
        "NestedGreaterGreater": "≫",
        "NestedLessLess": "≪",
        "NewLine": "\n",
        "nexist": "∄",
        "nexists": "∄",
        "nfr": "\uD835\uDD2B",
        "Nfr": "\uD835\uDD11",
        "nge": "≱",
        "ngE": "≧̸",
        "ngeq": "≱",
        "ngeqq": "≧̸",
        "ngeqslant": "⩾̸",
        "nges": "⩾̸",
        "nGg": "⋙̸",
        "ngsim": "≵",
        "ngt": "≯",
        "nGt": "≫⃒",
        "ngtr": "≯",
        "nGtv": "≫̸",
        "nharr": "↮",
        "nhArr": "⇎",
        "nhpar": "⫲",
        "ni": "∋",
        "nis": "⋼",
        "nisd": "⋺",
        "niv": "∋",
        "njcy": "њ",
        "NJcy": "Њ",
        "nlarr": "↚",
        "nlArr": "⇍",
        "nldr": "‥",
        "nle": "≰",
        "nlE": "≦̸",
        "nleftarrow": "↚",
        "nLeftarrow": "⇍",
        "nleftrightarrow": "↮",
        "nLeftrightarrow": "⇎",
        "nleq": "≰",
        "nleqq": "≦̸",
        "nleqslant": "⩽̸",
        "nles": "⩽̸",
        "nless": "≮",
        "nLl": "⋘̸",
        "nlsim": "≴",
        "nlt": "≮",
        "nLt": "≪⃒",
        "nltri": "⋪",
        "nltrie": "⋬",
        "nLtv": "≪̸",
        "nmid": "∤",
        "NoBreak": "⁠",
        "NonBreakingSpace": "\xa0",
        "nopf": "\uD835\uDD5F",
        "Nopf": "ℕ",
        "not": "\xac",
        "Not": "⫬",
        "NotCongruent": "≢",
        "NotCupCap": "≭",
        "NotDoubleVerticalBar": "∦",
        "NotElement": "∉",
        "NotEqual": "≠",
        "NotEqualTilde": "≂̸",
        "NotExists": "∄",
        "NotGreater": "≯",
        "NotGreaterEqual": "≱",
        "NotGreaterFullEqual": "≧̸",
        "NotGreaterGreater": "≫̸",
        "NotGreaterLess": "≹",
        "NotGreaterSlantEqual": "⩾̸",
        "NotGreaterTilde": "≵",
        "NotHumpDownHump": "≎̸",
        "NotHumpEqual": "≏̸",
        "notin": "∉",
        "notindot": "⋵̸",
        "notinE": "⋹̸",
        "notinva": "∉",
        "notinvb": "⋷",
        "notinvc": "⋶",
        "NotLeftTriangle": "⋪",
        "NotLeftTriangleBar": "⧏̸",
        "NotLeftTriangleEqual": "⋬",
        "NotLess": "≮",
        "NotLessEqual": "≰",
        "NotLessGreater": "≸",
        "NotLessLess": "≪̸",
        "NotLessSlantEqual": "⩽̸",
        "NotLessTilde": "≴",
        "NotNestedGreaterGreater": "⪢̸",
        "NotNestedLessLess": "⪡̸",
        "notni": "∌",
        "notniva": "∌",
        "notnivb": "⋾",
        "notnivc": "⋽",
        "NotPrecedes": "⊀",
        "NotPrecedesEqual": "⪯̸",
        "NotPrecedesSlantEqual": "⋠",
        "NotReverseElement": "∌",
        "NotRightTriangle": "⋫",
        "NotRightTriangleBar": "⧐̸",
        "NotRightTriangleEqual": "⋭",
        "NotSquareSubset": "⊏̸",
        "NotSquareSubsetEqual": "⋢",
        "NotSquareSuperset": "⊐̸",
        "NotSquareSupersetEqual": "⋣",
        "NotSubset": "⊂⃒",
        "NotSubsetEqual": "⊈",
        "NotSucceeds": "⊁",
        "NotSucceedsEqual": "⪰̸",
        "NotSucceedsSlantEqual": "⋡",
        "NotSucceedsTilde": "≿̸",
        "NotSuperset": "⊃⃒",
        "NotSupersetEqual": "⊉",
        "NotTilde": "≁",
        "NotTildeEqual": "≄",
        "NotTildeFullEqual": "≇",
        "NotTildeTilde": "≉",
        "NotVerticalBar": "∤",
        "npar": "∦",
        "nparallel": "∦",
        "nparsl": "⫽⃥",
        "npart": "∂̸",
        "npolint": "⨔",
        "npr": "⊀",
        "nprcue": "⋠",
        "npre": "⪯̸",
        "nprec": "⊀",
        "npreceq": "⪯̸",
        "nrarr": "↛",
        "nrArr": "⇏",
        "nrarrc": "⤳̸",
        "nrarrw": "↝̸",
        "nrightarrow": "↛",
        "nRightarrow": "⇏",
        "nrtri": "⋫",
        "nrtrie": "⋭",
        "nsc": "⊁",
        "nsccue": "⋡",
        "nsce": "⪰̸",
        "nscr": "\uD835\uDCC3",
        "Nscr": "\uD835\uDCA9",
        "nshortmid": "∤",
        "nshortparallel": "∦",
        "nsim": "≁",
        "nsime": "≄",
        "nsimeq": "≄",
        "nsmid": "∤",
        "nspar": "∦",
        "nsqsube": "⋢",
        "nsqsupe": "⋣",
        "nsub": "⊄",
        "nsube": "⊈",
        "nsubE": "⫅̸",
        "nsubset": "⊂⃒",
        "nsubseteq": "⊈",
        "nsubseteqq": "⫅̸",
        "nsucc": "⊁",
        "nsucceq": "⪰̸",
        "nsup": "⊅",
        "nsupe": "⊉",
        "nsupE": "⫆̸",
        "nsupset": "⊃⃒",
        "nsupseteq": "⊉",
        "nsupseteqq": "⫆̸",
        "ntgl": "≹",
        "ntilde": "\xf1",
        "Ntilde": "\xd1",
        "ntlg": "≸",
        "ntriangleleft": "⋪",
        "ntrianglelefteq": "⋬",
        "ntriangleright": "⋫",
        "ntrianglerighteq": "⋭",
        "nu": "ν",
        "Nu": "Ν",
        "num": "#",
        "numero": "№",
        "numsp": " ",
        "nvap": "≍⃒",
        "nvdash": "⊬",
        "nvDash": "⊭",
        "nVdash": "⊮",
        "nVDash": "⊯",
        "nvge": "≥⃒",
        "nvgt": ">⃒",
        "nvHarr": "⤄",
        "nvinfin": "⧞",
        "nvlArr": "⤂",
        "nvle": "≤⃒",
        "nvlt": "<⃒",
        "nvltrie": "⊴⃒",
        "nvrArr": "⤃",
        "nvrtrie": "⊵⃒",
        "nvsim": "∼⃒",
        "nwarhk": "⤣",
        "nwarr": "↖",
        "nwArr": "⇖",
        "nwarrow": "↖",
        "nwnear": "⤧",
        "oacute": "\xf3",
        "Oacute": "\xd3",
        "oast": "⊛",
        "ocir": "⊚",
        "ocirc": "\xf4",
        "Ocirc": "\xd4",
        "ocy": "о",
        "Ocy": "О",
        "odash": "⊝",
        "odblac": "ő",
        "Odblac": "Ő",
        "odiv": "⨸",
        "odot": "⊙",
        "odsold": "⦼",
        "oelig": "œ",
        "OElig": "Œ",
        "ofcir": "⦿",
        "ofr": "\uD835\uDD2C",
        "Ofr": "\uD835\uDD12",
        "ogon": "˛",
        "ograve": "\xf2",
        "Ograve": "\xd2",
        "ogt": "⧁",
        "ohbar": "⦵",
        "ohm": "Ω",
        "oint": "∮",
        "olarr": "↺",
        "olcir": "⦾",
        "olcross": "⦻",
        "oline": "‾",
        "olt": "⧀",
        "omacr": "ō",
        "Omacr": "Ō",
        "omega": "ω",
        "Omega": "Ω",
        "omicron": "ο",
        "Omicron": "Ο",
        "omid": "⦶",
        "ominus": "⊖",
        "oopf": "\uD835\uDD60",
        "Oopf": "\uD835\uDD46",
        "opar": "⦷",
        "OpenCurlyDoubleQuote": "“",
        "OpenCurlyQuote": "‘",
        "operp": "⦹",
        "oplus": "⊕",
        "or": "∨",
        "Or": "⩔",
        "orarr": "↻",
        "ord": "⩝",
        "order": "ℴ",
        "orderof": "ℴ",
        "ordf": "\xaa",
        "ordm": "\xba",
        "origof": "⊶",
        "oror": "⩖",
        "orslope": "⩗",
        "orv": "⩛",
        "oS": "Ⓢ",
        "oscr": "ℴ",
        "Oscr": "\uD835\uDCAA",
        "oslash": "\xf8",
        "Oslash": "\xd8",
        "osol": "⊘",
        "otilde": "\xf5",
        "Otilde": "\xd5",
        "otimes": "⊗",
        "Otimes": "⨷",
        "otimesas": "⨶",
        "ouml": "\xf6",
        "Ouml": "\xd6",
        "ovbar": "⌽",
        "OverBar": "‾",
        "OverBrace": "⏞",
        "OverBracket": "⎴",
        "OverParenthesis": "⏜",
        "par": "∥",
        "para": "\xb6",
        "parallel": "∥",
        "parsim": "⫳",
        "parsl": "⫽",
        "part": "∂",
        "PartialD": "∂",
        "pcy": "п",
        "Pcy": "П",
        "percnt": "%",
        "period": ".",
        "permil": "‰",
        "perp": "⊥",
        "pertenk": "‱",
        "pfr": "\uD835\uDD2D",
        "Pfr": "\uD835\uDD13",
        "phi": "φ",
        "Phi": "Φ",
        "phiv": "ϕ",
        "phmmat": "ℳ",
        "phone": "☎",
        "pi": "π",
        "Pi": "Π",
        "pitchfork": "⋔",
        "piv": "ϖ",
        "planck": "ℏ",
        "planckh": "ℎ",
        "plankv": "ℏ",
        "plus": "+",
        "plusacir": "⨣",
        "plusb": "⊞",
        "pluscir": "⨢",
        "plusdo": "∔",
        "plusdu": "⨥",
        "pluse": "⩲",
        "PlusMinus": "\xb1",
        "plusmn": "\xb1",
        "plussim": "⨦",
        "plustwo": "⨧",
        "pm": "\xb1",
        "Poincareplane": "ℌ",
        "pointint": "⨕",
        "popf": "\uD835\uDD61",
        "Popf": "ℙ",
        "pound": "\xa3",
        "pr": "≺",
        "Pr": "⪻",
        "prap": "⪷",
        "prcue": "≼",
        "pre": "⪯",
        "prE": "⪳",
        "prec": "≺",
        "precapprox": "⪷",
        "preccurlyeq": "≼",
        "Precedes": "≺",
        "PrecedesEqual": "⪯",
        "PrecedesSlantEqual": "≼",
        "PrecedesTilde": "≾",
        "preceq": "⪯",
        "precnapprox": "⪹",
        "precneqq": "⪵",
        "precnsim": "⋨",
        "precsim": "≾",
        "prime": "′",
        "Prime": "″",
        "primes": "ℙ",
        "prnap": "⪹",
        "prnE": "⪵",
        "prnsim": "⋨",
        "prod": "∏",
        "Product": "∏",
        "profalar": "⌮",
        "profline": "⌒",
        "profsurf": "⌓",
        "prop": "∝",
        "Proportion": "∷",
        "Proportional": "∝",
        "propto": "∝",
        "prsim": "≾",
        "prurel": "⊰",
        "pscr": "\uD835\uDCC5",
        "Pscr": "\uD835\uDCAB",
        "psi": "ψ",
        "Psi": "Ψ",
        "puncsp": " ",
        "qfr": "\uD835\uDD2E",
        "Qfr": "\uD835\uDD14",
        "qint": "⨌",
        "qopf": "\uD835\uDD62",
        "Qopf": "ℚ",
        "qprime": "⁗",
        "qscr": "\uD835\uDCC6",
        "Qscr": "\uD835\uDCAC",
        "quaternions": "ℍ",
        "quatint": "⨖",
        "quest": "?",
        "questeq": "≟",
        "quot": '"',
        "QUOT": '"',
        "rAarr": "⇛",
        "race": "∽̱",
        "racute": "ŕ",
        "Racute": "Ŕ",
        "radic": "√",
        "raemptyv": "⦳",
        "rang": "⟩",
        "Rang": "⟫",
        "rangd": "⦒",
        "range": "⦥",
        "rangle": "⟩",
        "raquo": "\xbb",
        "rarr": "→",
        "rArr": "⇒",
        "Rarr": "↠",
        "rarrap": "⥵",
        "rarrb": "⇥",
        "rarrbfs": "⤠",
        "rarrc": "⤳",
        "rarrfs": "⤞",
        "rarrhk": "↪",
        "rarrlp": "↬",
        "rarrpl": "⥅",
        "rarrsim": "⥴",
        "rarrtl": "↣",
        "Rarrtl": "⤖",
        "rarrw": "↝",
        "ratail": "⤚",
        "rAtail": "⤜",
        "ratio": "∶",
        "rationals": "ℚ",
        "rbarr": "⤍",
        "rBarr": "⤏",
        "RBarr": "⤐",
        "rbbrk": "❳",
        "rbrace": "}",
        "rbrack": "]",
        "rbrke": "⦌",
        "rbrksld": "⦎",
        "rbrkslu": "⦐",
        "rcaron": "ř",
        "Rcaron": "Ř",
        "rcedil": "ŗ",
        "Rcedil": "Ŗ",
        "rceil": "⌉",
        "rcub": "}",
        "rcy": "р",
        "Rcy": "Р",
        "rdca": "⤷",
        "rdldhar": "⥩",
        "rdquo": "”",
        "rdquor": "”",
        "rdsh": "↳",
        "Re": "ℜ",
        "real": "ℜ",
        "realine": "ℛ",
        "realpart": "ℜ",
        "reals": "ℝ",
        "rect": "▭",
        "reg": "\xae",
        "REG": "\xae",
        "ReverseElement": "∋",
        "ReverseEquilibrium": "⇋",
        "ReverseUpEquilibrium": "⥯",
        "rfisht": "⥽",
        "rfloor": "⌋",
        "rfr": "\uD835\uDD2F",
        "Rfr": "ℜ",
        "rHar": "⥤",
        "rhard": "⇁",
        "rharu": "⇀",
        "rharul": "⥬",
        "rho": "ρ",
        "Rho": "Ρ",
        "rhov": "ϱ",
        "RightAngleBracket": "⟩",
        "rightarrow": "→",
        "Rightarrow": "⇒",
        "RightArrow": "→",
        "RightArrowBar": "⇥",
        "RightArrowLeftArrow": "⇄",
        "rightarrowtail": "↣",
        "RightCeiling": "⌉",
        "RightDoubleBracket": "⟧",
        "RightDownTeeVector": "⥝",
        "RightDownVector": "⇂",
        "RightDownVectorBar": "⥕",
        "RightFloor": "⌋",
        "rightharpoondown": "⇁",
        "rightharpoonup": "⇀",
        "rightleftarrows": "⇄",
        "rightleftharpoons": "⇌",
        "rightrightarrows": "⇉",
        "rightsquigarrow": "↝",
        "RightTee": "⊢",
        "RightTeeArrow": "↦",
        "RightTeeVector": "⥛",
        "rightthreetimes": "⋌",
        "RightTriangle": "⊳",
        "RightTriangleBar": "⧐",
        "RightTriangleEqual": "⊵",
        "RightUpDownVector": "⥏",
        "RightUpTeeVector": "⥜",
        "RightUpVector": "↾",
        "RightUpVectorBar": "⥔",
        "RightVector": "⇀",
        "RightVectorBar": "⥓",
        "ring": "˚",
        "risingdotseq": "≓",
        "rlarr": "⇄",
        "rlhar": "⇌",
        "rlm": "‏",
        "rmoust": "⎱",
        "rmoustache": "⎱",
        "rnmid": "⫮",
        "roang": "⟭",
        "roarr": "⇾",
        "robrk": "⟧",
        "ropar": "⦆",
        "ropf": "\uD835\uDD63",
        "Ropf": "ℝ",
        "roplus": "⨮",
        "rotimes": "⨵",
        "RoundImplies": "⥰",
        "rpar": ")",
        "rpargt": "⦔",
        "rppolint": "⨒",
        "rrarr": "⇉",
        "Rrightarrow": "⇛",
        "rsaquo": "›",
        "rscr": "\uD835\uDCC7",
        "Rscr": "ℛ",
        "rsh": "↱",
        "Rsh": "↱",
        "rsqb": "]",
        "rsquo": "’",
        "rsquor": "’",
        "rthree": "⋌",
        "rtimes": "⋊",
        "rtri": "▹",
        "rtrie": "⊵",
        "rtrif": "▸",
        "rtriltri": "⧎",
        "RuleDelayed": "⧴",
        "ruluhar": "⥨",
        "rx": "℞",
        "sacute": "ś",
        "Sacute": "Ś",
        "sbquo": "‚",
        "sc": "≻",
        "Sc": "⪼",
        "scap": "⪸",
        "scaron": "š",
        "Scaron": "Š",
        "sccue": "≽",
        "sce": "⪰",
        "scE": "⪴",
        "scedil": "ş",
        "Scedil": "Ş",
        "scirc": "ŝ",
        "Scirc": "Ŝ",
        "scnap": "⪺",
        "scnE": "⪶",
        "scnsim": "⋩",
        "scpolint": "⨓",
        "scsim": "≿",
        "scy": "с",
        "Scy": "С",
        "sdot": "⋅",
        "sdotb": "⊡",
        "sdote": "⩦",
        "searhk": "⤥",
        "searr": "↘",
        "seArr": "⇘",
        "searrow": "↘",
        "sect": "\xa7",
        "semi": ";",
        "seswar": "⤩",
        "setminus": "∖",
        "setmn": "∖",
        "sext": "✶",
        "sfr": "\uD835\uDD30",
        "Sfr": "\uD835\uDD16",
        "sfrown": "⌢",
        "sharp": "♯",
        "shchcy": "щ",
        "SHCHcy": "Щ",
        "shcy": "ш",
        "SHcy": "Ш",
        "ShortDownArrow": "↓",
        "ShortLeftArrow": "←",
        "shortmid": "∣",
        "shortparallel": "∥",
        "ShortRightArrow": "→",
        "ShortUpArrow": "↑",
        "shy": "\xad",
        "sigma": "σ",
        "Sigma": "Σ",
        "sigmaf": "ς",
        "sigmav": "ς",
        "sim": "∼",
        "simdot": "⩪",
        "sime": "≃",
        "simeq": "≃",
        "simg": "⪞",
        "simgE": "⪠",
        "siml": "⪝",
        "simlE": "⪟",
        "simne": "≆",
        "simplus": "⨤",
        "simrarr": "⥲",
        "slarr": "←",
        "SmallCircle": "∘",
        "smallsetminus": "∖",
        "smashp": "⨳",
        "smeparsl": "⧤",
        "smid": "∣",
        "smile": "⌣",
        "smt": "⪪",
        "smte": "⪬",
        "smtes": "⪬︀",
        "softcy": "ь",
        "SOFTcy": "Ь",
        "sol": "/",
        "solb": "⧄",
        "solbar": "⌿",
        "sopf": "\uD835\uDD64",
        "Sopf": "\uD835\uDD4A",
        "spades": "♠",
        "spadesuit": "♠",
        "spar": "∥",
        "sqcap": "⊓",
        "sqcaps": "⊓︀",
        "sqcup": "⊔",
        "sqcups": "⊔︀",
        "Sqrt": "√",
        "sqsub": "⊏",
        "sqsube": "⊑",
        "sqsubset": "⊏",
        "sqsubseteq": "⊑",
        "sqsup": "⊐",
        "sqsupe": "⊒",
        "sqsupset": "⊐",
        "sqsupseteq": "⊒",
        "squ": "□",
        "square": "□",
        "Square": "□",
        "SquareIntersection": "⊓",
        "SquareSubset": "⊏",
        "SquareSubsetEqual": "⊑",
        "SquareSuperset": "⊐",
        "SquareSupersetEqual": "⊒",
        "SquareUnion": "⊔",
        "squarf": "▪",
        "squf": "▪",
        "srarr": "→",
        "sscr": "\uD835\uDCC8",
        "Sscr": "\uD835\uDCAE",
        "ssetmn": "∖",
        "ssmile": "⌣",
        "sstarf": "⋆",
        "star": "☆",
        "Star": "⋆",
        "starf": "★",
        "straightepsilon": "ϵ",
        "straightphi": "ϕ",
        "strns": "\xaf",
        "sub": "⊂",
        "Sub": "⋐",
        "subdot": "⪽",
        "sube": "⊆",
        "subE": "⫅",
        "subedot": "⫃",
        "submult": "⫁",
        "subne": "⊊",
        "subnE": "⫋",
        "subplus": "⪿",
        "subrarr": "⥹",
        "subset": "⊂",
        "Subset": "⋐",
        "subseteq": "⊆",
        "subseteqq": "⫅",
        "SubsetEqual": "⊆",
        "subsetneq": "⊊",
        "subsetneqq": "⫋",
        "subsim": "⫇",
        "subsub": "⫕",
        "subsup": "⫓",
        "succ": "≻",
        "succapprox": "⪸",
        "succcurlyeq": "≽",
        "Succeeds": "≻",
        "SucceedsEqual": "⪰",
        "SucceedsSlantEqual": "≽",
        "SucceedsTilde": "≿",
        "succeq": "⪰",
        "succnapprox": "⪺",
        "succneqq": "⪶",
        "succnsim": "⋩",
        "succsim": "≿",
        "SuchThat": "∋",
        "sum": "∑",
        "Sum": "∑",
        "sung": "♪",
        "sup": "⊃",
        "Sup": "⋑",
        "sup1": "\xb9",
        "sup2": "\xb2",
        "sup3": "\xb3",
        "supdot": "⪾",
        "supdsub": "⫘",
        "supe": "⊇",
        "supE": "⫆",
        "supedot": "⫄",
        "Superset": "⊃",
        "SupersetEqual": "⊇",
        "suphsol": "⟉",
        "suphsub": "⫗",
        "suplarr": "⥻",
        "supmult": "⫂",
        "supne": "⊋",
        "supnE": "⫌",
        "supplus": "⫀",
        "supset": "⊃",
        "Supset": "⋑",
        "supseteq": "⊇",
        "supseteqq": "⫆",
        "supsetneq": "⊋",
        "supsetneqq": "⫌",
        "supsim": "⫈",
        "supsub": "⫔",
        "supsup": "⫖",
        "swarhk": "⤦",
        "swarr": "↙",
        "swArr": "⇙",
        "swarrow": "↙",
        "swnwar": "⤪",
        "szlig": "\xdf",
        "Tab": "	",
        "target": "⌖",
        "tau": "τ",
        "Tau": "Τ",
        "tbrk": "⎴",
        "tcaron": "ť",
        "Tcaron": "Ť",
        "tcedil": "ţ",
        "Tcedil": "Ţ",
        "tcy": "т",
        "Tcy": "Т",
        "tdot": "⃛",
        "telrec": "⌕",
        "tfr": "\uD835\uDD31",
        "Tfr": "\uD835\uDD17",
        "there4": "∴",
        "therefore": "∴",
        "Therefore": "∴",
        "theta": "θ",
        "Theta": "Θ",
        "thetasym": "ϑ",
        "thetav": "ϑ",
        "thickapprox": "≈",
        "thicksim": "∼",
        "ThickSpace": "  ",
        "thinsp": " ",
        "ThinSpace": " ",
        "thkap": "≈",
        "thksim": "∼",
        "thorn": "\xfe",
        "THORN": "\xde",
        "tilde": "˜",
        "Tilde": "∼",
        "TildeEqual": "≃",
        "TildeFullEqual": "≅",
        "TildeTilde": "≈",
        "times": "\xd7",
        "timesb": "⊠",
        "timesbar": "⨱",
        "timesd": "⨰",
        "tint": "∭",
        "toea": "⤨",
        "top": "⊤",
        "topbot": "⌶",
        "topcir": "⫱",
        "topf": "\uD835\uDD65",
        "Topf": "\uD835\uDD4B",
        "topfork": "⫚",
        "tosa": "⤩",
        "tprime": "‴",
        "trade": "™",
        "TRADE": "™",
        "triangle": "▵",
        "triangledown": "▿",
        "triangleleft": "◃",
        "trianglelefteq": "⊴",
        "triangleq": "≜",
        "triangleright": "▹",
        "trianglerighteq": "⊵",
        "tridot": "◬",
        "trie": "≜",
        "triminus": "⨺",
        "TripleDot": "⃛",
        "triplus": "⨹",
        "trisb": "⧍",
        "tritime": "⨻",
        "trpezium": "⏢",
        "tscr": "\uD835\uDCC9",
        "Tscr": "\uD835\uDCAF",
        "tscy": "ц",
        "TScy": "Ц",
        "tshcy": "ћ",
        "TSHcy": "Ћ",
        "tstrok": "ŧ",
        "Tstrok": "Ŧ",
        "twixt": "≬",
        "twoheadleftarrow": "↞",
        "twoheadrightarrow": "↠",
        "uacute": "\xfa",
        "Uacute": "\xda",
        "uarr": "↑",
        "uArr": "⇑",
        "Uarr": "↟",
        "Uarrocir": "⥉",
        "ubrcy": "ў",
        "Ubrcy": "Ў",
        "ubreve": "ŭ",
        "Ubreve": "Ŭ",
        "ucirc": "\xfb",
        "Ucirc": "\xdb",
        "ucy": "у",
        "Ucy": "У",
        "udarr": "⇅",
        "udblac": "ű",
        "Udblac": "Ű",
        "udhar": "⥮",
        "ufisht": "⥾",
        "ufr": "\uD835\uDD32",
        "Ufr": "\uD835\uDD18",
        "ugrave": "\xf9",
        "Ugrave": "\xd9",
        "uHar": "⥣",
        "uharl": "↿",
        "uharr": "↾",
        "uhblk": "▀",
        "ulcorn": "⌜",
        "ulcorner": "⌜",
        "ulcrop": "⌏",
        "ultri": "◸",
        "umacr": "ū",
        "Umacr": "Ū",
        "uml": "\xa8",
        "UnderBar": "_",
        "UnderBrace": "⏟",
        "UnderBracket": "⎵",
        "UnderParenthesis": "⏝",
        "Union": "⋃",
        "UnionPlus": "⊎",
        "uogon": "ų",
        "Uogon": "Ų",
        "uopf": "\uD835\uDD66",
        "Uopf": "\uD835\uDD4C",
        "uparrow": "↑",
        "Uparrow": "⇑",
        "UpArrow": "↑",
        "UpArrowBar": "⤒",
        "UpArrowDownArrow": "⇅",
        "updownarrow": "↕",
        "Updownarrow": "⇕",
        "UpDownArrow": "↕",
        "UpEquilibrium": "⥮",
        "upharpoonleft": "↿",
        "upharpoonright": "↾",
        "uplus": "⊎",
        "UpperLeftArrow": "↖",
        "UpperRightArrow": "↗",
        "upsi": "υ",
        "Upsi": "ϒ",
        "upsih": "ϒ",
        "upsilon": "υ",
        "Upsilon": "Υ",
        "UpTee": "⊥",
        "UpTeeArrow": "↥",
        "upuparrows": "⇈",
        "urcorn": "⌝",
        "urcorner": "⌝",
        "urcrop": "⌎",
        "uring": "ů",
        "Uring": "Ů",
        "urtri": "◹",
        "uscr": "\uD835\uDCCA",
        "Uscr": "\uD835\uDCB0",
        "utdot": "⋰",
        "utilde": "ũ",
        "Utilde": "Ũ",
        "utri": "▵",
        "utrif": "▴",
        "uuarr": "⇈",
        "uuml": "\xfc",
        "Uuml": "\xdc",
        "uwangle": "⦧",
        "vangrt": "⦜",
        "varepsilon": "ϵ",
        "varkappa": "ϰ",
        "varnothing": "∅",
        "varphi": "ϕ",
        "varpi": "ϖ",
        "varpropto": "∝",
        "varr": "↕",
        "vArr": "⇕",
        "varrho": "ϱ",
        "varsigma": "ς",
        "varsubsetneq": "⊊︀",
        "varsubsetneqq": "⫋︀",
        "varsupsetneq": "⊋︀",
        "varsupsetneqq": "⫌︀",
        "vartheta": "ϑ",
        "vartriangleleft": "⊲",
        "vartriangleright": "⊳",
        "vBar": "⫨",
        "Vbar": "⫫",
        "vBarv": "⫩",
        "vcy": "в",
        "Vcy": "В",
        "vdash": "⊢",
        "vDash": "⊨",
        "Vdash": "⊩",
        "VDash": "⊫",
        "Vdashl": "⫦",
        "vee": "∨",
        "Vee": "⋁",
        "veebar": "⊻",
        "veeeq": "≚",
        "vellip": "⋮",
        "verbar": "|",
        "Verbar": "‖",
        "vert": "|",
        "Vert": "‖",
        "VerticalBar": "∣",
        "VerticalLine": "|",
        "VerticalSeparator": "❘",
        "VerticalTilde": "≀",
        "VeryThinSpace": " ",
        "vfr": "\uD835\uDD33",
        "Vfr": "\uD835\uDD19",
        "vltri": "⊲",
        "vnsub": "⊂⃒",
        "vnsup": "⊃⃒",
        "vopf": "\uD835\uDD67",
        "Vopf": "\uD835\uDD4D",
        "vprop": "∝",
        "vrtri": "⊳",
        "vscr": "\uD835\uDCCB",
        "Vscr": "\uD835\uDCB1",
        "vsubne": "⊊︀",
        "vsubnE": "⫋︀",
        "vsupne": "⊋︀",
        "vsupnE": "⫌︀",
        "Vvdash": "⊪",
        "vzigzag": "⦚",
        "wcirc": "ŵ",
        "Wcirc": "Ŵ",
        "wedbar": "⩟",
        "wedge": "∧",
        "Wedge": "⋀",
        "wedgeq": "≙",
        "weierp": "℘",
        "wfr": "\uD835\uDD34",
        "Wfr": "\uD835\uDD1A",
        "wopf": "\uD835\uDD68",
        "Wopf": "\uD835\uDD4E",
        "wp": "℘",
        "wr": "≀",
        "wreath": "≀",
        "wscr": "\uD835\uDCCC",
        "Wscr": "\uD835\uDCB2",
        "xcap": "⋂",
        "xcirc": "◯",
        "xcup": "⋃",
        "xdtri": "▽",
        "xfr": "\uD835\uDD35",
        "Xfr": "\uD835\uDD1B",
        "xharr": "⟷",
        "xhArr": "⟺",
        "xi": "ξ",
        "Xi": "Ξ",
        "xlarr": "⟵",
        "xlArr": "⟸",
        "xmap": "⟼",
        "xnis": "⋻",
        "xodot": "⨀",
        "xopf": "\uD835\uDD69",
        "Xopf": "\uD835\uDD4F",
        "xoplus": "⨁",
        "xotime": "⨂",
        "xrarr": "⟶",
        "xrArr": "⟹",
        "xscr": "\uD835\uDCCD",
        "Xscr": "\uD835\uDCB3",
        "xsqcup": "⨆",
        "xuplus": "⨄",
        "xutri": "△",
        "xvee": "⋁",
        "xwedge": "⋀",
        "yacute": "\xfd",
        "Yacute": "\xdd",
        "yacy": "я",
        "YAcy": "Я",
        "ycirc": "ŷ",
        "Ycirc": "Ŷ",
        "ycy": "ы",
        "Ycy": "Ы",
        "yen": "\xa5",
        "yfr": "\uD835\uDD36",
        "Yfr": "\uD835\uDD1C",
        "yicy": "ї",
        "YIcy": "Ї",
        "yopf": "\uD835\uDD6A",
        "Yopf": "\uD835\uDD50",
        "yscr": "\uD835\uDCCE",
        "Yscr": "\uD835\uDCB4",
        "yucy": "ю",
        "YUcy": "Ю",
        "yuml": "\xff",
        "Yuml": "Ÿ",
        "zacute": "ź",
        "Zacute": "Ź",
        "zcaron": "ž",
        "Zcaron": "Ž",
        "zcy": "з",
        "Zcy": "З",
        "zdot": "ż",
        "Zdot": "Ż",
        "zeetrf": "ℨ",
        "ZeroWidthSpace": "​",
        "zeta": "ζ",
        "Zeta": "Ζ",
        "zfr": "\uD835\uDD37",
        "Zfr": "ℨ",
        "zhcy": "ж",
        "ZHcy": "Ж",
        "zigrarr": "⇝",
        "zopf": "\uD835\uDD6B",
        "Zopf": "ℤ",
        "zscr": "\uD835\uDCCF",
        "Zscr": "\uD835\uDCB5",
        "zwj": "‍",
        "zwnj": "‌"
    };
    var decodeMapLegacy = {
        "aacute": "\xe1",
        "Aacute": "\xc1",
        "acirc": "\xe2",
        "Acirc": "\xc2",
        "acute": "\xb4",
        "aelig": "\xe6",
        "AElig": "\xc6",
        "agrave": "\xe0",
        "Agrave": "\xc0",
        "amp": "&",
        "AMP": "&",
        "aring": "\xe5",
        "Aring": "\xc5",
        "atilde": "\xe3",
        "Atilde": "\xc3",
        "auml": "\xe4",
        "Auml": "\xc4",
        "brvbar": "\xa6",
        "ccedil": "\xe7",
        "Ccedil": "\xc7",
        "cedil": "\xb8",
        "cent": "\xa2",
        "copy": "\xa9",
        "COPY": "\xa9",
        "curren": "\xa4",
        "deg": "\xb0",
        "divide": "\xf7",
        "eacute": "\xe9",
        "Eacute": "\xc9",
        "ecirc": "\xea",
        "Ecirc": "\xca",
        "egrave": "\xe8",
        "Egrave": "\xc8",
        "eth": "\xf0",
        "ETH": "\xd0",
        "euml": "\xeb",
        "Euml": "\xcb",
        "frac12": "\xbd",
        "frac14": "\xbc",
        "frac34": "\xbe",
        "gt": ">",
        "GT": ">",
        "iacute": "\xed",
        "Iacute": "\xcd",
        "icirc": "\xee",
        "Icirc": "\xce",
        "iexcl": "\xa1",
        "igrave": "\xec",
        "Igrave": "\xcc",
        "iquest": "\xbf",
        "iuml": "\xef",
        "Iuml": "\xcf",
        "laquo": "\xab",
        "lt": "<",
        "LT": "<",
        "macr": "\xaf",
        "micro": "\xb5",
        "middot": "\xb7",
        "nbsp": "\xa0",
        "not": "\xac",
        "ntilde": "\xf1",
        "Ntilde": "\xd1",
        "oacute": "\xf3",
        "Oacute": "\xd3",
        "ocirc": "\xf4",
        "Ocirc": "\xd4",
        "ograve": "\xf2",
        "Ograve": "\xd2",
        "ordf": "\xaa",
        "ordm": "\xba",
        "oslash": "\xf8",
        "Oslash": "\xd8",
        "otilde": "\xf5",
        "Otilde": "\xd5",
        "ouml": "\xf6",
        "Ouml": "\xd6",
        "para": "\xb6",
        "plusmn": "\xb1",
        "pound": "\xa3",
        "quot": '"',
        "QUOT": '"',
        "raquo": "\xbb",
        "reg": "\xae",
        "REG": "\xae",
        "sect": "\xa7",
        "shy": "\xad",
        "sup1": "\xb9",
        "sup2": "\xb2",
        "sup3": "\xb3",
        "szlig": "\xdf",
        "thorn": "\xfe",
        "THORN": "\xde",
        "times": "\xd7",
        "uacute": "\xfa",
        "Uacute": "\xda",
        "ucirc": "\xfb",
        "Ucirc": "\xdb",
        "ugrave": "\xf9",
        "Ugrave": "\xd9",
        "uml": "\xa8",
        "uuml": "\xfc",
        "Uuml": "\xdc",
        "yacute": "\xfd",
        "Yacute": "\xdd",
        "yen": "\xa5",
        "yuml": "\xff"
    };
    var decodeMapNumeric = {
        "0": "�",
        "128": "€",
        "130": "‚",
        "131": "ƒ",
        "132": "„",
        "133": "…",
        "134": "†",
        "135": "‡",
        "136": "ˆ",
        "137": "‰",
        "138": "Š",
        "139": "‹",
        "140": "Œ",
        "142": "Ž",
        "145": "‘",
        "146": "’",
        "147": "“",
        "148": "”",
        "149": "•",
        "150": "–",
        "151": "—",
        "152": "˜",
        "153": "™",
        "154": "š",
        "155": "›",
        "156": "œ",
        "158": "ž",
        "159": "Ÿ"
    };
    var invalidReferenceCodePoints = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        11,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        64976,
        64977,
        64978,
        64979,
        64980,
        64981,
        64982,
        64983,
        64984,
        64985,
        64986,
        64987,
        64988,
        64989,
        64990,
        64991,
        64992,
        64993,
        64994,
        64995,
        64996,
        64997,
        64998,
        64999,
        65000,
        65001,
        65002,
        65003,
        65004,
        65005,
        65006,
        65007,
        65534,
        65535,
        131070,
        131071,
        196606,
        196607,
        262142,
        262143,
        327678,
        327679,
        393214,
        393215,
        458750,
        458751,
        524286,
        524287,
        589822,
        589823,
        655358,
        655359,
        720894,
        720895,
        786430,
        786431,
        851966,
        851967,
        917502,
        917503,
        983038,
        983039,
        1048574,
        1048575,
        1114110,
        1114111
    ];
    /*--------------------------------------------------------------------------*/ var stringFromCharCode = String.fromCharCode;
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var has = function(object, propertyName) {
        return hasOwnProperty.call(object, propertyName);
    };
    var contains = function(array, value) {
        var index = -1;
        var length = array.length;
        while(++index < length){
            if (array[index] == value) return true;
        }
        return false;
    };
    var merge = function(options, defaults) {
        if (!options) return defaults;
        var result = {};
        var key;
        for(key in defaults)// A `hasOwnProperty` check is not needed here, since only recognized
        // option names are used anyway. Any others are ignored.
        result[key] = has(options, key) ? options[key] : defaults[key];
        return result;
    };
    // Modified version of `ucs2encode`; see https://mths.be/punycode.
    var codePointToSymbol = function(codePoint, strict) {
        var output = "";
        if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
            // See issue #4:
            // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
            // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
            // REPLACEMENT CHARACTER.”
            if (strict) parseError("character reference outside the permissible Unicode range");
            return "�";
        }
        if (has(decodeMapNumeric, codePoint)) {
            if (strict) parseError("disallowed character reference");
            return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) parseError("disallowed character reference");
        if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        output += stringFromCharCode(codePoint);
        return output;
    };
    var hexEscape = function(codePoint) {
        return "&#x" + codePoint.toString(16).toUpperCase() + ";";
    };
    var decEscape = function(codePoint) {
        return "&#" + codePoint + ";";
    };
    var parseError = function(message) {
        throw Error("Parse error: " + message);
    };
    /*--------------------------------------------------------------------------*/ var encode = function(string, options) {
        options = merge(options, encode.options);
        var strict = options.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) parseError("forbidden code point");
        var encodeEverything = options.encodeEverything;
        var useNamedReferences = options.useNamedReferences;
        var allowUnsafeSymbols = options.allowUnsafeSymbols;
        var escapeCodePoint = options.decimal ? decEscape : hexEscape;
        var escapeBmpSymbol = function(symbol) {
            return escapeCodePoint(symbol.charCodeAt(0));
        };
        if (encodeEverything) {
            // Encode ASCII symbols.
            string = string.replace(regexAsciiWhitelist, function(symbol) {
                // Use named references if requested & possible.
                if (useNamedReferences && has(encodeMap, symbol)) return "&" + encodeMap[symbol] + ";";
                return escapeBmpSymbol(symbol);
            });
            // Shorten a few escapes that represent two symbols, of which at least one
            // is within the ASCII range.
            if (useNamedReferences) string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
            // Encode non-ASCII symbols.
            if (useNamedReferences) // Encode non-ASCII symbols that can be replaced with a named reference.
            string = string.replace(regexEncodeNonAscii, function(string) {
                // Note: there is no need to check `has(encodeMap, string)` here.
                return "&" + encodeMap[string] + ";";
            });
        // Note: any remaining non-ASCII symbols are handled outside of the `if`.
        } else if (useNamedReferences) {
            // Apply named character references.
            // Encode `<>"'&` using named character references.
            if (!allowUnsafeSymbols) string = string.replace(regexEscape, function(string) {
                return "&" + encodeMap[string] + ";"; // no need to check `has()` here
            });
            // Shorten escapes that represent two symbols, of which at least one is
            // `<>"'&`.
            string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
            // Encode non-ASCII symbols that can be replaced with a named reference.
            string = string.replace(regexEncodeNonAscii, function(string) {
                // Note: there is no need to check `has(encodeMap, string)` here.
                return "&" + encodeMap[string] + ";";
            });
        } else if (!allowUnsafeSymbols) // Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
        // using named character references.
        string = string.replace(regexEscape, escapeBmpSymbol);
        return string// Encode astral symbols.
        .replace(regexAstralSymbols, function($0) {
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            var high = $0.charCodeAt(0);
            var low = $0.charCodeAt(1);
            var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
            return escapeCodePoint(codePoint);
        })// Encode any remaining BMP symbols that are not printable ASCII symbols
        // using a hexadecimal escape.
        .replace(regexBmpWhitelist, escapeBmpSymbol);
    };
    // Expose default options (so they can be overridden globally).
    encode.options = {
        "allowUnsafeSymbols": false,
        "encodeEverything": false,
        "strict": false,
        "useNamedReferences": false,
        "decimal": false
    };
    var decode = function(html, options) {
        options = merge(options, decode.options);
        var strict = options.strict;
        if (strict && regexInvalidEntity.test(html)) parseError("malformed character reference");
        return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
            var codePoint;
            var semicolon;
            var decDigits;
            var hexDigits;
            var reference;
            var next;
            if ($1) {
                reference = $1;
                // Note: there is no need to check `has(decodeMap, reference)`.
                return decodeMap[reference];
            }
            if ($2) {
                // Decode named character references without trailing `;`, e.g. `&amp`.
                // This is only a parse error if it gets converted to `&`, or if it is
                // followed by `=` in an attribute context.
                reference = $2;
                next = $3;
                if (next && options.isAttributeValue) {
                    if (strict && next == "=") parseError("`&` did not start a character reference");
                    return $0;
                } else {
                    if (strict) parseError("named character reference was not terminated by a semicolon");
                    // Note: there is no need to check `has(decodeMapLegacy, reference)`.
                    return decodeMapLegacy[reference] + (next || "");
                }
            }
            if ($4) {
                // Decode decimal escapes, e.g. `&#119558;`.
                decDigits = $4;
                semicolon = $5;
                if (strict && !semicolon) parseError("character reference was not terminated by a semicolon");
                codePoint = parseInt(decDigits, 10);
                return codePointToSymbol(codePoint, strict);
            }
            if ($6) {
                // Decode hexadecimal escapes, e.g. `&#x1D306;`.
                hexDigits = $6;
                semicolon = $7;
                if (strict && !semicolon) parseError("character reference was not terminated by a semicolon");
                codePoint = parseInt(hexDigits, 16);
                return codePointToSymbol(codePoint, strict);
            }
            // If we’re still here, `if ($7)` is implied; it’s an ambiguous
            // ampersand for sure. https://mths.be/notes/ambiguous-ampersands
            if (strict) parseError("named character reference was not terminated by a semicolon");
            return $0;
        });
    };
    // Expose default options (so they can be overridden globally).
    decode.options = {
        "isAttributeValue": false,
        "strict": false
    };
    var escape = function(string) {
        return string.replace(regexEscape, function($0) {
            // Note: there is no need to check `has(escapeMap, $0)` here.
            return escapeMap[$0];
        });
    };
    /*--------------------------------------------------------------------------*/ var he = {
        "version": "1.2.0",
        "encode": encode,
        "decode": decode,
        "escape": escape,
        "unescape": decode
    };
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
        return he;
    });
    else if (freeExports && !freeExports.nodeType) {
        if (freeModule) freeModule.exports = he;
        else for(var key in he)has(he, key) && (freeExports[key] = he[key]);
    } else root.he = he;
})(this);

},{}],"hlzn1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function videoTeaser() {
    const startedClass = "is_started";
    const savingClass = "device-suspended-mode";
    const offsetPause = 400;
    const selectorVideo = "#video-teaser";
    const vd = document.querySelector(selectorVideo);
    // change video source on HD
    // let hdVideoUrl = './video/video.h264.mp4'; ($(window).width()
    // >=960)? vd.src = hdVideoUrl : null;
    function playPause() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const state = vd.paused;
        if (+scrolled >= offsetPause && !state) vd.pause();
        else if (+scrolled < offsetPause && state) vd.play();
    }
    const readyPlay = vd.play();
    if (readyPlay !== undefined) readyPlay.then(()=>{
        window.addEventListener("scroll", playPause);
        vd.classList.add(startedClass);
    }).catch((err)=>{
        vd.classList.add(savingClass);
        document.body.addEventListener("touchstart", ()=>{
            if (!vd.playing) {
                vd.play();
                vd.classList.add(startedClass);
            }
            console.log("video started");
        });
    });
}
exports.default = videoTeaser;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwYYK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sliderView = require("./SliderView");
var _sliderViewDefault = parcelHelpers.interopDefault(_sliderView);
var _swiperMin = require("../vendor/swiper.min");
var _swiperMinDefault = parcelHelpers.interopDefault(_swiperMin);
var _swiperOptions = require("../constants/swiperOptions");
var _swiperOptionsDefault = parcelHelpers.interopDefault(_swiperOptions);
var _slideCoupleView = require("./SlideCoupleView");
var _slideCoupleViewDefault = parcelHelpers.interopDefault(_slideCoupleView);
var _slideManView = require("./SlideManView");
var _slideManViewDefault = parcelHelpers.interopDefault(_slideManView);
var _slideStudentView = require("./SlideStudentView");
var _slideStudentViewDefault = parcelHelpers.interopDefault(_slideStudentView);
var _modalView = require("./ModalView");
var _modalViewDefault = parcelHelpers.interopDefault(_modalView);
var _dimensions = require("../constants/dimensions");
var _dimensionsDefault = parcelHelpers.interopDefault(_dimensions);
class Page {
    slider;
    slidesArray;
    constructor(element){
        this.viewWidth = document.documentElement.clientWidth;
        this.element = element;
        this.nextBtn = null;
        this.swiper = null;
        this.modalIcon = null;
        this.modal = null;
        this.controls = null;
        this.sliderNextButton = null;
        this.activeSlide = null;
        this.activeSlideContent = null;
    }
    init() {
        this.showMainScreen();
        this.addEventListeners();
    }
    renderSlider() {
        this.slidesArray = [
            new (0, _slideCoupleViewDefault.default)(this.viewWidth),
            new (0, _slideManViewDefault.default)(this.viewWidth),
            new (0, _slideStudentViewDefault.default)(this.viewWidth),
            new (0, _modalViewDefault.default)(this.viewWidth)
        ];
        this.slider = new (0, _sliderViewDefault.default)(this.slidesArray);
        this.element.innerHTML = String(this.slider.render());
        this.controls = document.querySelector(".swiper-controls");
    }
    addEventListeners() {
        this.modalIcon.addEventListener("click", ()=>{
            this.openModal();
        });
        window.addEventListener("resize", ()=>{
            this.showMainScreen();
        });
    }
    showMainScreen() {
        this.renderSlider();
        const wrapper = document.querySelector(".swiper-wrapper");
        this.slidesArray.forEach((slide)=>{
            wrapper.append(slide.render());
        });
        const loader = document.querySelector(".loader");
        const hiddenList = document.querySelectorAll(".hidden");
        this.modalIcon = document.querySelector(".modal-icon");
        this.modal = document.querySelector(".modal");
        loader.addEventListener("animationend", ()=>{
            loader.remove();
            hiddenList.forEach((element)=>{
                element.classList.remove("hidden");
                element.classList.add("visible");
            });
            if (this.viewWidth < (0, _dimensionsDefault.default)) this.renderForMobile();
            else {
                this.modal.classList.add("modal-hidden");
                this.handleDesktopScreen();
            }
        });
    }
    /**
 * @param {string} type
 * @param {any} [detail]
 * @return {boolean}
 */ notify(type, detail = null) {
        const cancelable = true;
        const bubbles = true;
        const event = new CustomEvent(type, {
            detail,
            cancelable,
            bubbles
        });
        return document.dispatchEvent(event);
    }
    renderForMobile() {
        this.createSlider();
        this.activeSlide = document.querySelector(".swiper-slide-active");
        const fixedText = document.querySelector(".fixed-text_mobile");
        this.handleActiveSlide();
        this.animateActiveSlide();
        setTimeout(()=>{
            this.controls.classList.add("displayed");
        }, 3000);
        this.swiper.on("slideNextTransitionEnd", ()=>{
            this.notify("isPrevios");
            this.handleActiveSlide();
            this.animateActiveSlide();
            if (this.activeSlide.id === "modal") fixedText.style.display = "none";
            else fixedText.style.display = "block";
        });
        this.swiper.on("slideChangeTransitionEnd", ()=>{
            this.notify("isPrevios");
        });
        this.swiper.on("slideChangeTransitionStart", ()=>{
            this.hideControls();
        });
    }
    hidePopups() {
        const popupList = this.activeSlide.querySelectorAll(".main-image__popup");
        if (popupList) popupList.forEach((popup)=>{
            popup.classList.remove("opened");
        });
    }
    hideControls() {
        this.controls.classList.remove("displayed");
        setTimeout(()=>{
            this.controls.classList.add("displayed");
        }, 3000);
    }
    handleActiveSlide() {
        this.activeSlide = document.querySelector(".swiper-slide-active");
        this.activeSlideContent = this.activeSlide.querySelector(".slide__content");
    }
    createSlider() {
        this.swiper = new (0, _swiperMinDefault.default)(".swiper-container", (0, _swiperOptionsDefault.default));
        if (this.viewWidth < (0, _dimensionsDefault.default)) this.swiper.init();
        else this.destroySlider();
    }
    handleDesktopScreen() {
        const slides = document.querySelectorAll(".slide_hidden");
        for(let i = 0; i < slides.length - 1; i++){
            slides[0].classList.remove("slide_hidden");
            slides[0].classList.add("slide_visible");
            const activeSlideContent = slides[0].querySelector(".slide__content");
            activeSlideContent.classList.add("animated");
        }
    }
    animateActiveSlide() {
        this.activeSlide.classList.remove("slide_hidden");
        this.activeSlide.classList.add("slide_visible");
        this.activeSlideContent?.classList.add("animated");
    }
    openModal() {
        this.modalIcon.classList.remove("animated");
        this.modal.classList.remove("modal-hidden");
        this.modal.classList.remove("slide_hidden");
    }
    destroySlider() {
        this.swiper.destroy();
    }
}
exports.default = Page;

},{"./SliderView":"fXYV5","../vendor/swiper.min":"31E87","../constants/swiperOptions":"dMCZq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./SlideCoupleView":"8oQfY","./SlideManView":"6sDVX","./SlideStudentView":"cnfzj","./ModalView":"912up","../constants/dimensions":"4y9Dz"}],"fXYV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
var _utils = require("../helpers/utils");
var _loaderView = require("./LoaderView");
var _loaderViewDefault = parcelHelpers.interopDefault(_loaderView);
class SliderView {
    constructor(slides){
        this.loader = new (0, _loaderViewDefault.default)();
        this.slides = slides;
        this.activeSlide = null;
    }
    // setActiveSlide(id) {
    //   [this.activeSlide] = this.slides.filter((slide) => slide.id === id);
    //   this.activeSlide.addEventListeners();
    // }
    // setElementsForSlides({
    //   animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
    // }) {
    //   this.slides.forEach((slide) => {
    //     slide.setElements(animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide);
    //   });
    // }
    // removeEventListeners(id) {
    //   const inactiveSlide = this.slides.filter((slide) => slide.id === id);
    //   inactiveSlide[0]?.removeEventListeners();
    // }
    render() {
        const loader = this.loader.render();
        return (0, _utils.html)`
    <section class="section-slider">
    <div class="slider">
      ${loader}
      <div class="swiper-container">
        <div class="swiper-wrapper__background"> </div>
        <div class="swiper-wrapper hidden">
        <div class="swiper-wrapper__background"> </div>
          <div class="slider__text fixed-text fixed-text_desktop hidden">
            <h3 class="fixed-text__title">
              1&nbsp;чашка&nbsp;&mdash; 250 минут
            </h3>
            <p class="fixed-text__text">
              Провести время с&nbsp;близкими<br />
              за&nbsp;чашкой кофе&nbsp;&mdash; бесценно. Меняем минуты
              Tele2&nbsp;на кофе в&nbsp;буше
              до&nbsp;3&nbsp;декабря&nbsp;2023&nbsp;г.
            </p>
            <div
              class="fixed-text__modal-icon modal-icon js-gtm-event animated"
              data-event="glass"
              >
                <img src=${(0, _imageSourcesListDefault.default).modalIconSrc} alt="" />
            </div>
          </div>
        </div>
        <div class="slider__text fixed-text fixed-text_mobile hidden">
          <h3 class="fixed-text__title">
            1&nbsp;чашка&nbsp;&mdash; 250 минут
          </h3>
          <p class="fixed-text__text">
            Провести время с&nbsp;близкими<br />
            за&nbsp;чашкой кофе&nbsp;&mdash; бесценно. Меняем минуты
            Tele2&nbsp;на кофе в&nbsp;буше
            до&nbsp;3&nbsp;декабря&nbsp;2023&nbsp;г.
          </p>

        </div>
        <div class="swiper-controls">
          <div
            class="swiper-button-next js-gtm-event"
            data-event="pointer-right"
          >
            <img src=${(0, _imageSourcesListDefault.default).arrowSrc} alt="" />
          </div>
          <div
            class="swiper-button-prev js-gtm-event"
            data-event="pointer-left"
          >
            <img src=${(0, _imageSourcesListDefault.default).arrowSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
    }
}
exports.default = SliderView; // ${this.slides.map((slide) => html`
 //   <div class="swiper-slide slide slide_hidden ${slide.id} " id=${slide.id}>
 //     ${slide.render()}
 //   </div>
 // `)}

},{"../constants/imageSourcesList":"3PCfr","../helpers/utils":"i4jdK","./LoaderView":"33uFw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PCfr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const imageSourcesList = {
    loaderSrc: require("4aab69be07eac9f0"),
    coupleSrc: require("c36ed8be815c4ff1"),
    coupleCoffeeSrc: require("b40d865df60ffa8"),
    coupleHands: require("5b893b5f62bd9ee"),
    manSrc: require("f41f0037e16d8669"),
    manPhone: require("c250e47694a9cebb"),
    manHand: require("55164364e03fe111"),
    manDogTail: require("20f3fdffb0f138d5"),
    studentSrc: require("464706777fde2eea"),
    studentCoffee: require("c83fb2e7d31e2669"),
    studentHand: require("2745643583150070"),
    arrowSrc: require("2b529ab0c83621e9"),
    modalIconSrc: require("4b3f7fbaa6131b8e"),
    logoSrc: require("43528202a6c639a6"),
    copyLinkSrc: require("d5e39649620065cf"),
    vkLinkSrc: require("8652e954e55e96cb"),
    okLinkSrc: require("34bfae7e55f9ea19")
};
exports.default = imageSourcesList;

},{"4aab69be07eac9f0":"8PhAh","f41f0037e16d8669":"1OcCw","c250e47694a9cebb":"jjjKJ","55164364e03fe111":"7in6k","2b529ab0c83621e9":"8SVLa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","464706777fde2eea":"5nYT6","43528202a6c639a6":"fCFQy","d5e39649620065cf":"gcsmE","8652e954e55e96cb":"4wtTo","34bfae7e55f9ea19":"6xj26","4b3f7fbaa6131b8e":"4kJ8t","c36ed8be815c4ff1":"5IK6m","b40d865df60ffa8":"2Kcwd","5b893b5f62bd9ee":"eGBSP","20f3fdffb0f138d5":"cqbFl","2745643583150070":"YCZ9T","c83fb2e7d31e2669":"kfcZP"}],"8PhAh":[function(require,module,exports) {
module.exports = require("178591e17136783a").getBundleURL("7mg4r") + "coffee.b393a499.png" + "?" + Date.now();

},{"178591e17136783a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1OcCw":[function(require,module,exports) {
module.exports = require("22a872676f278936").getBundleURL("7mg4r") + "man2.f3198c25.svg" + "?" + Date.now();

},{"22a872676f278936":"lgJ39"}],"jjjKJ":[function(require,module,exports) {
module.exports = require("de04e8819551c11f").getBundleURL("7mg4r") + "mans-phone2.252503ec.svg" + "?" + Date.now();

},{"de04e8819551c11f":"lgJ39"}],"7in6k":[function(require,module,exports) {
module.exports = require("80489db2967ca207").getBundleURL("7mg4r") + "mans-hand2.950a0f0c.svg" + "?" + Date.now();

},{"80489db2967ca207":"lgJ39"}],"8SVLa":[function(require,module,exports) {
module.exports = require("57acf45cccf986a9").getBundleURL("7mg4r") + "Expander.832e75db.svg" + "?" + Date.now();

},{"57acf45cccf986a9":"lgJ39"}],"5nYT6":[function(require,module,exports) {
module.exports = require("a7ea5e911be7c046").getBundleURL("7mg4r") + "student.49d0c092.svg" + "?" + Date.now();

},{"a7ea5e911be7c046":"lgJ39"}],"fCFQy":[function(require,module,exports) {
module.exports = require("756de788c7bbe25f").getBundleURL("7mg4r") + "logo.ad6ae07f.svg" + "?" + Date.now();

},{"756de788c7bbe25f":"lgJ39"}],"gcsmE":[function(require,module,exports) {
module.exports = require("7f0eeb40f5dc5cd1").getBundleURL("7mg4r") + "copy.f4c4dac5.svg" + "?" + Date.now();

},{"7f0eeb40f5dc5cd1":"lgJ39"}],"4wtTo":[function(require,module,exports) {
module.exports = require("5c658611bfa4ca9b").getBundleURL("7mg4r") + "vk.3b4d3da6.svg" + "?" + Date.now();

},{"5c658611bfa4ca9b":"lgJ39"}],"6xj26":[function(require,module,exports) {
module.exports = require("cd6f4f5312727eb5").getBundleURL("7mg4r") + "ok.74766e27.svg" + "?" + Date.now();

},{"cd6f4f5312727eb5":"lgJ39"}],"4kJ8t":[function(require,module,exports) {
module.exports = require("dc46672ed01b98c").getBundleURL("7mg4r") + "modal-icon.063d2a84.svg" + "?" + Date.now();

},{"dc46672ed01b98c":"lgJ39"}],"5IK6m":[function(require,module,exports) {
module.exports = require("65305b03f358d865").getBundleURL("7mg4r") + "main-slide1.4465fa3c.svg" + "?" + Date.now();

},{"65305b03f358d865":"lgJ39"}],"2Kcwd":[function(require,module,exports) {
module.exports = require("de100d2a4990fa6c").getBundleURL("7mg4r") + "couple-coffee.fb8367eb.svg" + "?" + Date.now();

},{"de100d2a4990fa6c":"lgJ39"}],"eGBSP":[function(require,module,exports) {
module.exports = require("7e0214d39f45efc4").getBundleURL("7mg4r") + "couple-hands.050c9b49.svg" + "?" + Date.now();

},{"7e0214d39f45efc4":"lgJ39"}],"cqbFl":[function(require,module,exports) {
module.exports = require("5e86970ca6e5c63f").getBundleURL("7mg4r") + "dog-tail.e0b52bb6.svg" + "?" + Date.now();

},{"5e86970ca6e5c63f":"lgJ39"}],"YCZ9T":[function(require,module,exports) {
module.exports = require("cbcca46e1ff573db").getBundleURL("7mg4r") + "students-hand.e8d0f821.svg" + "?" + Date.now();

},{"cbcca46e1ff573db":"lgJ39"}],"kfcZP":[function(require,module,exports) {
module.exports = require("530c1da3d3f11fe1").getBundleURL("7mg4r") + "students-coffee.6e215750.svg" + "?" + Date.now();

},{"530c1da3d3f11fe1":"lgJ39"}],"33uFw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
var _utils = require("../helpers/utils");
class LoaderView {
    render() {
        return (0, _utils.html)`
    <div class="loader">
      <div class="loader__image-area">
        <div class="loader__coffee">
          <img src=${(0, _imageSourcesListDefault.default).loaderSrc} alt="" />
        </div>
      </div>
    </div>
    `;
    }
}
exports.default = LoaderView;

},{"../constants/imageSourcesList":"3PCfr","../helpers/utils":"i4jdK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31E87":[function(require,module,exports) {
/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */ !function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        location: {
            hash: ""
        }
    } : document, t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window, i = function(e) {
        for(var t = 0; t < e.length; t += 1)this[t] = e[t];
        return this.length = e.length, this;
    };
    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) {
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for(0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1)r.push(l.childNodes[n]);
                } else for(o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [
                    e.getElementById(s.trim().split("#")[1])
                ], n = 0; n < o.length; n += 1)o[n] && r.push(o[n]);
            } else if (s.nodeType || s === t || s === e) r.push(s);
            else if (s.length > 0 && s[0].nodeType) for(n = 0; n < s.length; n += 1)r.push(s[n]);
        }
        return new i(r);
    }
    function a(e) {
        for(var t = [], i = 0; i < e.length; i += 1)-1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function(e) {
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for(var t = e.split(" "), i = 0; i < t.length; i += 1)for(var s = 0; s < this.length; s += 1)void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(var s = 0; s < this.length; s += 1)if (2 === i.length) this[s].setAttribute(e, t);
            else for(var a in e)this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function(e) {
            for(var t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for(var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this;
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0;
            }
        },
        transform: function(e) {
            for(var t = 0; t < this.length; t += 1){
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e;
            }
            return this;
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for(var t = 0; t < this.length; t += 1){
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e;
            }
            return this;
        },
        on: function() {
            for(var e, t = [], i = arguments.length; i--;)t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else for(var a = s(t).parents(), o = 0; o < a.length; o += 1)s(a[o]).is(r) && n.apply(a[o], i);
                }
            }
            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for(var h, p = a.split(" "), c = 0; c < this.length; c += 1){
                var u = this[c];
                if (r) for(h = 0; h < p.length; h += 1){
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, o);
                }
                else for(h = 0; h < p.length; h += 1){
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(f, d, o);
                }
            }
            return this;
        },
        off: function() {
            for(var e, t = [], i = arguments.length; i--;)t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for(var o = s.split(" "), l = 0; l < o.length; l += 1)for(var d = o[l], h = 0; h < this.length; h += 1){
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for(var u = c.length - 1; u >= 0; u -= 1){
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for(var i = [], s = arguments.length; s--;)i[s] = arguments[s];
            for(var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)for(var o = a[n], l = 0; l < this.length; l += 1){
                var d = this[l], h = void 0;
                try {
                    h = new t.CustomEvent(o, {
                        detail: r,
                        bubbles: !0,
                        cancelable: !0
                    });
                } catch (t1) {
                    (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
                }
                d.dom7EventData = i.filter(function(e, t) {
                    return t > 0;
                }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
            }
            return this;
        },
        transitionEnd: function(e) {
            var t, i = [
                "webkitTransitionEnd",
                "transitionend"
            ], s = this;
            function a(r) {
                if (r.target === this) for(e.call(this, r), t = 0; t < i.length; t += 1)s.off(i[t], a);
            }
            if (e) for(t = 0; t < i.length; t += 1)s.on(i[t], a);
            return this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0, n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop, l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                };
            }
            return null;
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(s = 0; s < this.length; s += 1)for(var a in e)this[s].style[a] = e[a];
                    return this;
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(s = 0; s < this.length; s += 1)this[s].style[e] = i;
                return this;
            }
            return this;
        },
        each: function(e) {
            if (!e) return this;
            for(var t = 0; t < this.length; t += 1)if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for(var t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(var t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for(r = s(a), n = 0; n < r.length; n += 1)if (r[n] === o) return !0;
                return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for(r = a.nodeType ? [
                    a
                ] : a, n = 0; n < r.length; n += 1)if (r[n] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [
                this[t]
            ] : [
                this[e]
            ]);
        },
        append: function() {
            for(var t, s = [], a = arguments.length; a--;)s[a] = arguments[a];
            for(var r = 0; r < s.length; r += 1){
                t = s[r];
                for(var n = 0; n < this.length; n += 1)if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for(o.innerHTML = t; o.firstChild;)this[n].appendChild(o.firstChild);
                } else if (t instanceof i) for(var l = 0; l < t.length; l += 1)this[n].appendChild(t[l]);
                else this[n].appendChild(t);
            }
            return this;
        },
        prepend: function(t) {
            var s, a;
            for(s = 0; s < this.length; s += 1)if ("string" == typeof t) {
                var r = e.createElement("div");
                for(r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
            } else if (t instanceof i) for(a = 0; a < t.length; a += 1)this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([
                this[0].nextElementSibling
            ]) : new i([]) : this[0].nextElementSibling ? new i([
                this[0].nextElementSibling
            ]) : new i([]) : new i([]);
        },
        nextAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for(; a.nextElementSibling;){
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([
                    t.previousElementSibling
                ]) : new i([]) : t.previousElementSibling ? new i([
                    t.previousElementSibling
                ]) : new i([]);
            }
            return new i([]);
        },
        prevAll: function(e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for(; a.previousElementSibling;){
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
            }
            return new i(t);
        },
        parent: function(e) {
            for(var t = [], i = 0; i < this.length; i += 1)null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t));
        },
        parents: function(e) {
            for(var t = [], i = 0; i < this.length; i += 1)for(var r = this[i].parentNode; r;)e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t));
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for(var t = [], s = 0; s < this.length; s += 1)for(var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)t.push(a[r]);
            return new i(t);
        },
        children: function(e) {
            for(var t = [], r = 0; r < this.length; r += 1)for(var n = this[r].childNodes, o = 0; o < n.length; o += 1)e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
        },
        remove: function() {
            for(var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
            var i, a;
            for(i = 0; i < e.length; i += 1){
                var r = s(e[i]);
                for(a = 0; a < r.length; a += 1)this[this.length] = r[a], this.length += 1;
            }
            return this;
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = r[e];
    });
    var n, o, l, d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null;
                } catch (e1) {}
                try {
                    delete t[e];
                } catch (e2) {}
            });
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function() {
            return Date.now();
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                return e.replace(",", ".");
            }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for(r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                return "" !== e;
            })).length, i = 0; i < r; i += 1)a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n;
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
        },
        extend: function() {
            for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
            for(var i = Object(e[0]), s = 1; s < e.length; s += 1){
                var a = e[s];
                if (void 0 !== a && null !== a) for(var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1){
                    var l = r[n], h = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
                }
            }
            return i;
        }
    }, h = (l = e.createElement("div"), {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
        flexbox: function() {
            for(var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)if (t[i] in e) return !0;
            return !1;
        }(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0;
                    }
                });
                t.addEventListener("testPassiveListener", null, i);
            } catch (e1) {}
            return e;
        }(),
        gestures: "ongesturestart" in t
    }), p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e]);
        });
    }, c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
    }, p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        return s.on(e, function i() {
            for(var a = [], r = arguments.length; r--;)a[r] = arguments[r];
            t.apply(s, a), s.off(e, i);
        }, i);
    }, p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
                s === t && i.eventsListeners[e].splice(a, 1);
            });
        }), i) : i;
    }, p.prototype.emit = function() {
        for(var e = [], t = arguments.length; t--;)e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e);
                }), t.forEach(function(e) {
                    e.apply(a, s);
                });
            }
        }), r) : r;
    }, p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params);
        });
    }, p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e]);
            }), s.create && s.create.bind(t)(a);
        });
    }, c.components.set = function(e) {
        this.use && this.use(e);
    }, p.installModule = function(e) {
        for(var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t];
        }), e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t];
        }), e.install && e.install.apply(s, t), s;
    }, p.use = function(e) {
        for(var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e);
        }), s) : s.installModule.apply(s, [
            e
        ].concat(t));
    }, Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }));
        },
        updateSlides: function() {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL, n = this.virtual && e.virtual.enabled, o = n ? this.virtual.slides.length : this.slides.length, l = i.children("." + this.params.slideClass), p = n ? this.virtual.slides.length : l.length, c = [], u = [], v = [], f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, E = 0;
            if (void 0 !== s) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (T = Math.floor(p / e.slidesPerColumn) === p / this.params.slidesPerColumn ? p : Math.ceil(p / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for(var C, M = e.slidesPerColumn, z = T / M, k = z - (e.slidesPerColumn * z - p), P = 0; P < p; P += 1){
                    S = 0;
                    var $ = l.eq(P);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        "column" === e.slidesPerColumnFill ? (D = P - (I = Math.floor(P / M)) * M, (I > k || I === k && D === M - 1) && (D += 1) >= M && (D = 0, I += 1), L = I + D * T / M, $.css({
                            "-webkit-box-ordinal-group": L,
                            "-moz-box-ordinal-group": L,
                            "-ms-flex-order": L,
                            "-webkit-order": L,
                            order: L
                        })) : I = P - (D = Math.floor(P / z)) * z, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", D);
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var O = t.getComputedStyle($[0], null), A = $[0].style.transform, G = $[0].style.webkitTransform;
                            A && ($[0].style.transform = "none"), G && ($[0].style.webkitTransform = "none"), S = this.isHorizontal() ? $[0].getBoundingClientRect().width + parseFloat(O.getPropertyValue("margin-left")) + parseFloat(O.getPropertyValue("margin-right")) : $[0].getBoundingClientRect().height + parseFloat(O.getPropertyValue("margin-top")) + parseFloat(O.getPropertyValue("margin-bottom")), A && ($[0].style.transform = A), G && ($[0].style.webkitTransform = G), e.roundLengths && (S = Math.floor(S));
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[P] && (this.isHorizontal() ? l[P].style.width = S + "px" : l[P].style.height = S + "px");
                        l[P] && (l[P].swiperSlideSize = S), v.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== P && (y = y - s / 2 - w), 0 === P && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && c.push(y), u.push(y)) : (e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1;
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }), e.centeredSlides)) {
                    C = [];
                    for(var H = 0; H < c.length; H += 1){
                        var N = c[H];
                        e.roundLengths && (N = Math.floor(N)), c[H] < this.virtualSize + c[0] && C.push(N);
                    }
                    c = C;
                }
                if (!e.centeredSlides) {
                    C = [];
                    for(var B = 0; B < c.length; B += 1){
                        var X = c[B];
                        e.roundLengths && (X = Math.floor(X)), c[B] <= this.virtualSize - s && C.push(X);
                    }
                    c = C, Math.floor(this.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - s);
                }
                0 === c.length && (c = [
                    0
                ]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? l.css({
                    marginLeft: w + "px"
                }) : l.css({
                    marginRight: w + "px"
                }) : l.css({
                    marginBottom: w + "px"
                })), d.extend(this, {
                    slides: l,
                    snapGrid: c,
                    slidesGrid: u,
                    slidesSizesGrid: v
                }), p !== o && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for(t = 0; t < Math.ceil(this.params.slidesPerView); t += 1){
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0]);
            }
            else i.push(this.slides.eq(this.activeIndex)[0]);
            for(t = 0; t < i.length; t += 1)if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s;
            }
            s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function() {
            for(var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for(var r = 0; r < i.length; r += 1){
                    var n = i[r], o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass);
                    }
                    n.progress = s ? -o : o;
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.maxTranslate() - this.minTranslate(), s = this.progress, a = this.isBeginning, r = this.isEnd, n = a, o = r;
            0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s);
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for(var p = 0; p < s.length; p += 1)void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for(var r = 0; r < this.slides.length; r += 1)this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.progress, n = 0, o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this, r = e;
            r < 0 && (r = 0);
            var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, p = a.activeIndex, c = a.rtlTranslate;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var v, f = -o[u];
            if (a.updateProgress(f), n.normalizeSlideIndex) for(var m = 0; m < l.length; m += 1)-Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && f < a.translate && f < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== r) return !1;
            }
            return v = r > p ? "next" : r < p ? "prev" : "reset", c && -f === a.translate || !c && f === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(f), "reset" !== v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.transitionEnd(i, v));
            }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, v), a.transitionEnd(i, v)), !0);
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map(function(e) {
                return l(e);
            }), c = (n.map(function(e) {
                return l(e);
            }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex, a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate, n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
            }
            return this.slideTo(s, e, t, i);
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n);
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n);
                })) : t.slideTo(n);
            } else t.slideTo(n);
        }
    };
    var g = {
        loopCreate: function() {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for(var o = 0; o < n; o += 1){
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l);
                    }
                    r = a.children("." + i.slideClass);
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
            });
            for(var p = 0; p < h.length; p += 1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for(var c = d.length - 1; c >= 0; c -= 1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function() {
            var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r, this.allowSlideNext = n;
        },
        loopDestroy: function() {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
            }
        },
        unsetGrabCursor: function() {
            h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
        }
    };
    var w = {
        appendSlide: function(e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for(var s = 0; s < e.length; s += 1)e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(), i.observer && h.observer || this.update();
        },
        prependSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for(var r = 0; r < e.length; r += 1)e[r] && i.prepend(e[r]);
                a = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t);
            else if (e >= r) this.appendSlide(t);
            else {
                for(var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1){
                    var d = this.slides.eq(l);
                    d.remove(), o.unshift(d);
                }
                if ("object" == typeof t && "length" in t) {
                    for(var p = 0; p < t.length; p += 1)t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a;
                } else i.append(t);
                for(var c = 0; c < o.length; c += 1)i.append(o[c]);
                s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
            }
        },
        removeSlide: function(e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for(var n = 0; n < e.length; n += 1)a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0);
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function() {
            for(var e = [], t = 0; t < this.slides.length; t += 1)e.push(t);
            this.removeSlide(e);
        }
    }, y = function() {
        var i = t.navigator.userAgent, s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
        }, a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), r = i.match(/(Android);?[\s\/]+([\d.]+)?/), n = i.match(/(iPad).*OS\s([\d_]+)/), o = i.match(/(iPod)(.*OS\s([\d_]+))?/), l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
            var d = s.osVersion.split("."), h = e.querySelector('meta[name="viewport"]');
            s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
        }
        return s.pixelRatio = t.devicePixelRatio || 1, s;
    }();
    function x() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    var E = {
        attachEvents: function() {
            var i = this.params, a = this.touchEvents, r = this.el, n = this.wrapperEl;
            this.onTouchStart = (function(i) {
                var a = this.touchEventsData, r = this.params, n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) {
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            var l = n.currentX, h = n.currentY;
                            if (!y.ios || y.cordova || !r.iOSEdgeSwipeDetection || !(l <= r.iOSEdgeSwipeThreshold || l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                                if (d.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                    var p = !0;
                                    s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault();
                                }
                                this.emit("touchStart", o);
                            }
                        }
                    }
                }
            }).bind(this), this.onTouchMove = (function(t) {
                var i = this.touchEventsData, a = this.params, r = this.touches, n = this.rtlTranslate, o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(r, {
                            startX: l,
                            startY: h,
                            currentX: l,
                            currentY: h
                        }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                            if (this.isVertical()) {
                                if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
                            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
                        }
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = h;
                            var p, c = r.currentX - r.startX, u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0, m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
            }).bind(this), this.onTouchEnd = (function(e) {
                var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, h = e;
                if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(), u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                    t && !t.destroyed && t.emit("click", h);
                }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() {
                    t.destroyed || (t.allowClick = !0);
                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position, g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                        r && (y = -y);
                        var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for(var C, M = 0; M < l.length; M += 1)if (l[M] > -y) {
                                C = M;
                                break;
                            }
                            y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
                        }
                        if (E && t.once("transitionEnd", function() {
                            t.loopFix();
                        }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd();
                            }));
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd();
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                    for(var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
                    var $ = (p - o[z]) / k;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
                    }
                }
            }).bind(this), this.onClick = (function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }).bind(this);
            var o = "container" === i.touchEventsTarget ? r : n, l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
                        passive: !1,
                        capture: l
                    } : l), o.addEventListener(a.end, this.onTouchEnd, p);
                }
                (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0);
        },
        detachEvents: function() {
            var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = "container" === t.touchEventsTarget ? s : a, n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
                }
                (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x);
        }
    };
    var T = {
        setBreakpoint: function() {
            var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
            void 0 === i && (i = 0);
            var s = this.params, a = s.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
                var r = this.getBreakpoint(a);
                if (r && this.currentBreakpoint !== r) {
                    var n = r in a ? a[r] : this.originalParams, o = s.loop && n.slidesPerView !== s.slidesPerView;
                    d.extend(this.params, n), d.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = r, o && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", n);
                }
            }
        },
        getBreakpoint: function(e) {
            if (e) {
                var i = !1, s = [];
                Object.keys(e).forEach(function(e) {
                    s.push(e);
                }), s.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10);
                });
                for(var a = 0; a < s.length; a += 1){
                    var r = s[a];
                    r >= t.innerWidth && !i && (i = r);
                }
                return i || "max";
            }
        }
    }, S = function() {
        var e;
        return {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
    }();
    var C = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, M = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: w,
        events: E,
        breakpoints: T,
        checkOverflow: {
            checkOverflow: function() {
                var e = this.isLocked;
                this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) {
                    e.push(t.containerModifierClass + i);
                }), s.addClass(e.join(" "));
            },
            removeClasses: function() {
                var e = this.$el, t = this.classNames;
                e.removeClass(t.join(" "));
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n();
                }
                e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(var i = 0; i < e.imagesToLoad.length; i += 1){
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, z = {}, k = function(e) {
        function t() {
            for(var i, a, r, n = [], o = arguments.length; o--;)n[o] = arguments[o];
            1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function(e) {
                Object.keys(M[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = M[e][i]);
                });
            });
            var l = this;
            void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s) return;
                    if (!(i in r && "enabled" in s)) return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                        enabled: !1
                    });
                }
            });
            var p = d.extend({}, C);
            l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
            var c = s(l.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each(function(e, i) {
                        var s = d.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s));
                    }), u;
                }
                a.swiper = l, c.data("swiper", l);
                var v, f, m = c.children("." + l.params.wrapperClass);
                return d.extend(l, {
                    $el: c,
                    el: a,
                    $wrapperEl: m,
                    wrapperEl: m[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction;
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction;
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === m.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (v = [
                        "touchstart",
                        "touchmove",
                        "touchend"
                    ], f = [
                        "mousedown",
                        "mousemove",
                        "mouseup"
                    ], h.pointerEvents ? f = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ] : h.prefixedPointerEvents && (f = [
                        "MSPointerDown",
                        "MSPointerMove",
                        "MSPointerUp"
                    ]), l.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2]
                    }, l.touchEventsDesktop = {
                        start: f[0],
                        move: f[1],
                        end: f[2]
                    }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.useModules(), l.params.init && l.init(), l;
            }
        }
        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
            if (e.centeredSlides) {
                for(var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                for(var d = a - 1; d >= 0; d -= 1)t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
            } else for(var h = a + 1; h < t.length; h += 1)i[h] - i[a] < s && (r += 1);
            return r;
        }, t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
        }, t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
        }, t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([
                s.slideVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e);
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null);
        }, t.extendDefaults = function(e) {
            d.extend(z, e);
        }, i.extendedDefaults.get = function() {
            return z;
        }, i.defaults.get = function() {
            return C;
        }, i.Class.get = function() {
            return e;
        }, i.$.get = function() {
            return s;
        }, Object.defineProperties(t, i), t;
    }(p), P = {
        name: "device",
        proto: {
            device: y
        },
        static: {
            device: y
        }
    }, $ = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }, L = {
        name: "browser",
        proto: {
            browser: S
        },
        static: {
            browser: S
        }
    }, I = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
            }
        }
    }, D = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this, s = new D.func(function(e) {
                e.forEach(function(e) {
                    i.emit("observerUpdate", e);
                });
            });
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(s);
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents) for(var e = this.$el.parents(), t = 0; t < e.length; t += 1)this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                }), this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect();
            }), this.observer.observers = [];
        }
    }, O = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: D.init.bind(this),
                    attach: D.attach.bind(this),
                    destroy: D.destroy.bind(this),
                    observers: []
                }
            });
        },
        on: {
            init: function() {
                this.observer.init();
            },
            destroy: function() {
                this.observer.destroy();
            }
        }
    }, A = {
        update: function(e) {
            var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, n = t.virtual, o = n.from, l = n.to, h = n.slides, p = n.slidesGrid, c = n.renderSlide, u = n.offset;
            t.updateActiveIndex();
            var v, f, m, g = t.activeIndex || 0;
            v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
            var b = Math.max((g || 0) - m, 0), w = Math.min((g || 0) + f, h.length - 1), y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
            function x() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (d.extend(t.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: t.slidesGrid
            }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: y,
                from: b,
                to: w,
                slides: function() {
                    for(var e = [], t = b; t <= w; t += 1)e.push(h[t]);
                    return e;
                }()
            }), void x();
            var E = [], T = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
            else for(var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
            for(var C = 0; C < h.length; C += 1)C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
            T.forEach(function(e) {
                t.$wrapperEl.append(c(h[e], e));
            }), E.sort(function(e, t) {
                return e < t;
            }).forEach(function(e) {
                t.$wrapperEl.prepend(c(h[e], e));
            }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x();
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e), this.virtual.update(!0);
        },
        prependSlide: function(e) {
            if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                var t = this.virtual.cache, i = {};
                Object.keys(t).forEach(function(e) {
                    i[e + 1] = t[e];
                }), this.virtual.cache = i;
            }
            this.virtual.update(!0), this.slideNext(0);
        }
    }, G = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: A.update.bind(this),
                    appendSlide: A.appendSlide.bind(this),
                    prependSlide: A.prependSlide.bind(this),
                    renderSlide: A.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            });
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update();
            }
        }
    }, H = {
        handle: function(i) {
            var s = this.rtlTranslate, a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                    var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for(var h = [
                        [
                            d.left,
                            d.top
                        ],
                        [
                            d.left + this.width,
                            d.top
                        ],
                        [
                            d.left,
                            d.top + this.height
                        ],
                        [
                            d.left + this.width,
                            d.top + this.height
                        ]
                    ], p = 0; p < h.length; p += 1){
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                    }
                    if (!n) return;
                }
                this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r);
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
        }
    }, N = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: H.enable.bind(this),
                    disable: H.disable.bind(this),
                    handle: H.handle.bind(this)
                }
            });
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable();
            }
        }
    };
    var B = {
        lastScrollTime: d.now(),
        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var t = "onwheel" in e;
            if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
            }
            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            };
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0;
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1;
        },
        handle: function(e) {
            var i = e, s = this, a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            var r = 0, n = s.rtlTranslate ? -1 : 1, o = B.normalize(i);
            if (a.forceToAxis) {
                if (s.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                    r = o.pixelX * n;
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                    r = o.pixelY;
                }
            } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r) return !0;
            if (a.invert && (r = -r), s.params.freeMode) {
                s.params.loop && s.loopFix();
                var l = s.getTranslate() + r * a.sensitivity, h = s.isBeginning, p = s.isEnd;
                if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function() {
                    s.slideToClosest();
                }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), l === s.minTranslate() || l === s.maxTranslate()) return !0;
            } else {
                if (d.now() - s.mousewheel.lastScrollTime > 60) {
                    if (r < 0) {
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (a.releaseOnEdges) return !0;
                        } else s.slideNext(), s.emit("scroll", i);
                    } else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges) return !0;
                    } else s.slidePrev(), s.emit("scroll", i);
                }
                s.mousewheel.lastScrollTime = (new t.Date).getTime();
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
        },
        enable: function() {
            if (!B.event) return !1;
            if (this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
        },
        disable: function() {
            if (!B.event) return !1;
            if (!this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
        }
    }, X = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
            }
        },
        init: function() {
            var e, t, i = this, a = i.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) {
                e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
            }), t && t.length > 0 && t.on("click", function(e) {
                e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
            }), d.extend(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }));
        },
        destroy: function() {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
        }
    }, Y = {
        update: function() {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
                    });
                    else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                        for(var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1)h.eq(u).addClass(t.bulletActiveClass + "-main");
                        p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                    }
                    if (t.dynamicBullets) {
                        var v = Math.min(h.length, t.dynamicMainBullets + 4), f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize, m = e ? "right" : "left";
                        h.css(this.isHorizontal() ? m : "top", f + "px");
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                    var g;
                    g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var b = (i + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed);
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for(var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
            }
        },
        init: function() {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }), d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }));
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
            }
        }
    }, V = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                    n[0].style.opacity = 0, n.transition(400);
                }, 1e3));
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
            }
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize;
            t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
        },
        onDragMove: function(e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar, i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
                i.css("opacity", 0), i.transition(400);
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }, o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params, r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }, o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable();
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, R = {
        setTransform: function(e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0", o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"), d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p;
            }
            if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
            }
        },
        setTranslate: function() {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                e.parallax.setTransform(i, a);
            }), i.each(function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    e.parallax.setTransform(i, n);
                });
            });
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r);
            });
        }
    }, F = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
        },
        onGestureStart: function(e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e);
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
        },
        onGestureChange: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e);
            }
            s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
        },
        onTouchStart: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
        },
        onTouchMove: function(e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function(e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
        },
        out: function() {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
            }
        }
    }, W = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e), n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"), p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1);
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1);
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0]);
                        }
                    }), i.emit("lazyImageLoad", r[0], o[0]);
                });
            }
        },
        load: function() {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex, n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                } else if (a[e]) return !0;
                return !1;
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
            }
            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a);
            });
            else if (l > 1) for(var p = r; p < r + l; p += 1)d(p) && e.lazy.loadInSlide(p);
            else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) {
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for(var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)d(m) && e.lazy.loadInSlide(m);
                    for(var g = f; g < r; g += 1)d(g) && e.lazy.loadInSlide(g);
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w));
                }
            }
        }
    }, q = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for(s = -1, i = e.length; i - s > 1;)e[a = i + s >> 1] <= t ? s = a : i = a;
                return i;
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            if (Array.isArray(r)) for(var o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof k && n(r[o]);
            else r instanceof k && t !== r && n(r);
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
            }
            if (Array.isArray(a)) for(i = 0; i < a.length; i += 1)a[i] !== t && a[i] instanceof k && r(a[i]);
            else a instanceof k && t !== a && r(a);
        }
    }, j = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"), e;
        },
        addElRole: function(e, t) {
            return e.attr("role", t), e;
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t), e;
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0), e;
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
            }
        },
        updatePagination: function() {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
            });
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
        }
    }, K = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e;
            }), i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            };
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = K.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a));
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e, t, i) {
            if (t) for(var s = 0, a = this.slides.length; s < a; s += 1){
                var r = this.slides.eq(s);
                if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i);
                }
            }
            else this.slideTo(0, e, i);
        }
    }, U = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) {
                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash"));
                else {
                    var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                    e.location.hash = s || "";
                }
            }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for(var a = 0, r = this.slides.length; a < r; a += 1){
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
        }
    }, _ = {
        run: function() {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
            }, i);
        },
        start: function() {
            return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
        },
        stop: function() {
            return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
        }
    }, Z = {
        setTranslate: function() {
            for(var e = this.slides, t = 0; t < e.length; t += 1){
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function() {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], i = 0; i < e.length; i += 1)s.trigger(e[i]);
                    }
                });
            }
        }
    }, Q = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for(var u = 0; u < a.length; u += 1){
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0));
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) {
                if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2), k = d.shadowScale, P = d.shadowScale / z, $ = d.shadowOffset;
                    e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
                }
            }
            var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
        }
    }, J = {
        setTranslate: function() {
            for(var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1){
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
        },
        setTransition: function(e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for(var e = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], i = 0; i < e.length; i += 1)a.trigger(e[i]);
                    }
                });
            }
        }
    }, ee = {
        setTranslate: function() {
            for(var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1){
                var f = i.eq(u), m = r[u], g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = o ? p * g : 0, w = o ? 0 : p * g, y = -c * Math.abs(g), x = o ? 0 : n.stretch * g, E = o ? n.stretch * g : 0;
                Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        }
    }, te = [
        P,
        $,
        L,
        I,
        O,
        G,
        N,
        {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                d.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(this),
                        disable: B.disable.bind(this),
                        handle: B.handle.bind(this),
                        handleMouseEnter: B.handleMouseEnter.bind(this),
                        handleMouseLeave: B.handleMouseLeave.bind(this),
                        lastScrollTime: d.now()
                    }
                });
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable();
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable();
                }
            }
        },
        {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    navigation: {
                        init: X.init.bind(this),
                        update: X.update.bind(this),
                        destroy: X.destroy.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update();
                },
                toEdge: function() {
                    this.navigation.update();
                },
                fromEdge: function() {
                    this.navigation.update();
                },
                destroy: function() {
                    this.navigation.destroy();
                },
                click: function(e) {
                    var t = this.navigation, i = t.$nextEl, a = t.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
                }
            }
        },
        {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e;
                    },
                    formatFractionTotal: function(e) {
                        return e;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    pagination: {
                        init: Y.init.bind(this),
                        render: Y.render.bind(this),
                        update: Y.update.bind(this),
                        destroy: Y.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                });
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update();
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update();
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update());
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update());
                },
                destroy: function() {
                    this.pagination.destroy();
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
                }
            }
        },
        {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                d.extend(this, {
                    scrollbar: {
                        init: V.init.bind(this),
                        destroy: V.destroy.bind(this),
                        updateSize: V.updateSize.bind(this),
                        setTranslate: V.setTranslate.bind(this),
                        setTransition: V.setTransition.bind(this),
                        enableDraggable: V.enableDraggable.bind(this),
                        disableDraggable: V.disableDraggable.bind(this),
                        setDragPosition: V.setDragPosition.bind(this),
                        onDragStart: V.onDragStart.bind(this),
                        onDragMove: V.onDragMove.bind(this),
                        onDragEnd: V.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                });
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                },
                update: function() {
                    this.scrollbar.updateSize();
                },
                resize: function() {
                    this.scrollbar.updateSize();
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize();
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate();
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e);
                },
                destroy: function() {
                    this.scrollbar.destroy();
                }
            }
        },
        {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                d.extend(this, {
                    parallax: {
                        setTransform: R.setTransform.bind(this),
                        setTranslate: R.setTranslate.bind(this),
                        setTransition: R.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate();
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate();
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e);
                }
            }
        },
        {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this, t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = F[i].bind(e);
                }), d.extend(e, {
                    zoom: t
                });
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable();
                },
                destroy: function() {
                    this.zoom.disable();
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e);
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e);
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                }
            }
        },
        {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: W.load.bind(this),
                        loadInSlide: W.loadInSlide.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load();
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load();
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                }
            }
        },
        {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                d.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: q.getInterpolateFunction.bind(this),
                        setTranslate: q.setTranslate.bind(this),
                        setTransition: q.setTransition.bind(this)
                    }
                });
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t);
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t);
                }
            }
        },
        {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(j).forEach(function(t) {
                    e.a11y[t] = j[t].bind(e);
                });
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination();
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy();
                }
            }
        },
        {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                d.extend(this, {
                    history: {
                        init: K.init.bind(this),
                        setHistory: K.setHistory.bind(this),
                        setHistoryPopState: K.setHistoryPopState.bind(this),
                        scrollToSlide: K.scrollToSlide.bind(this),
                        destroy: K.destroy.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init();
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy();
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                }
            }
        },
        {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                d.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: U.init.bind(this),
                        destroy: U.destroy.bind(this),
                        setHash: U.setHash.bind(this),
                        onHashCange: U.onHashCange.bind(this)
                    }
                });
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init();
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash();
                }
            }
        },
        {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: _.run.bind(e),
                        start: _.start.bind(e),
                        stop: _.stop.bind(e),
                        pause: _.pause.bind(e),
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                        }
                    }
                });
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start();
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop();
                }
            }
        },
        {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate();
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate();
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate();
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e);
                }
            }
        },
        {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                });
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                }
            }
        }
    ];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k;
}); //# sourceMappingURL=swiper.min.js.map

},{}],"dMCZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const options = {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mousewheel: true,
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 36,
    loop: false,
    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }
};
exports.default = options;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oQfY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
class SlideCoupleView {
    #htmlComponent = document.createDocumentFragment();
    constructor(viewWidth){
        this.id = "couple";
        this.#htmlComponent.append(this.createElement());
        this.viewWidth = viewWidth;
        this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
        this.animatedContent = this.#htmlComponent.querySelector(".slide__content");
        this.popupList = Array.from(this.#htmlComponent.querySelectorAll(".text-popup"));
        this.tooltipIconsList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip-icon"));
        this.tooltipList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip"));
        this.animatedContent.addEventListener("animationend", ()=>{
            this.showPopup();
            setTimeout(()=>{
                this.notify("popUpCoupleiShown");
            }, 1000);
        });
        this.tooltipIconsList.forEach((icon)=>{
            icon.addEventListener("click", ()=>this.showTooltip(icon));
        });
        document.addEventListener("isPrevios", ()=>{
            this.hidePopup();
        });
    }
    showTooltip(icon) {
        this.tooltipList.forEach((tooltip)=>{
            if (tooltip.id === icon.dataset.tooltip) {
                if (!tooltip.classList.contains("opened")) tooltip.classList.add("opened");
                else tooltip.classList.remove("opened");
            }
        });
    }
    createAnimation(element, delay) {
        const animation = new KeyframeEffect(element, [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ], {
            duration: 1500,
            fill: "forwards",
            easing: "linear",
            delay,
            iterations: 1,
            direction: "normal"
        });
        return new Animation(animation, document.timeline);
    }
    showPopup() {
        this.popupList.forEach((popup, index)=>{
            this.popupAnimation = this.createAnimation(popup, index);
            popup.classList.add("opened");
            this.popupAnimation.ready.then(()=>{
                this.popupAnimation.play();
            });
        });
    }
    hidePopup() {
        this.popupList.forEach((popup)=>{
            if (this.popupAnimation) {
                this.popupAnimation.cancel();
                popup.classList.remove("opened");
            }
        });
    }
    /**
 * @param {string} type
 * @param {any} [detail]
 * @return {boolean}
 */ notify(type, detail = null) {
        const cancelable = true;
        const bubbles = true;
        const event = new CustomEvent(type, {
            detail,
            cancelable,
            bubbles
        });
        return document.dispatchEvent(event);
    }
    render() {
        return this.#htmlComponent;
    }
    createElement() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("swiper-slide");
        wrapper.classList.add("slide");
        wrapper.classList.add("slide_hidden");
        wrapper.classList.add(`${this.id}`);
        wrapper.setAttribute("id", `${this.id}`);
        wrapper.innerHTML = `

    <div class="slide__content slide-content">
      <div class="slide-content__wrapper js-set-size">
        <div class="slide-content__img-box images">
          <div class="image-box images__main-img">
            <img
              src=${(0, _imageSourcesListDefault.default).coupleSrc}
              alt=""
              class="images__main couple"
            />
          </div>
          <div
            class="image-box image-box_absolute images__coffee-img"
          >
            <img
              src=${(0, _imageSourcesListDefault.default).coupleCoffeeSrc}
              alt=""
              class="images__coffee coffee-image"
            />
          </div>
          <div
            class="image-box image-box_absolute images__hand-img"
          >
            <img
              src=${(0, _imageSourcesListDefault.default).coupleHands}
              alt=""
              class="images__hands hand-image"
            />
          </div>
        </div>
        <div class="slide-content__popup man-popup text-popup">
          Гуляли по&nbsp;Питеру, любовались осенним городом, взяли
          с&nbsp;собой
          <a
            href="https://spb.tele2.ru/minutes-management/bushe"
            class="js-gtm-event link text-popup__link"
            target="_blank"
            data-event="conv_bushe"
            >кофе буше за&nbsp;минуты Tele2</a
          >
        </div>
        <div class="slide-content__popup woman-popup text-popup">
          Мне с&nbsp;тобой так&nbsp;тепло
        </div>
        <div class="slide-content__tooltip-block tooltip-block man-tooltip">
          <div
            class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
            data-tooltip="pair-man"
            data-event="cup-pair"></div>
          <div class="tooltip-block__tooltip tooltip" id="pair-man">
            <div class="tooltip__text">
              <ul class="tooltip-list">
                <li class="tooltip-list__item">
                  Капучино классический 220&nbsp;мл
                </li>
                <li class="tooltip-list__item">
                  Американо 250&nbsp;мл
                </li>
              </ul>
            </div>
            <div class="tooltip__close-icon tooltip-icon">
              <span class="close"></span>
            </div>
          </div>
        </div>
        <div class="slide-content__tooltip-block tooltip-block woman-tooltip">
        <div
        class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
        data-tooltip="pair-woman"
        data-event="cup-pair"></div>
          <div
            class="tooltip-block__tooltip tooltip"
            id="pair-woman"
          >
            <div class="tooltip__text">
              <ul class="tooltip-list">
                <li class="tooltip-list__item">
                  Капучино классический 220&nbsp;мл
                </li>
                <li class="tooltip-list__item">
                  Американо 250&nbsp;мл
                </li>
              </ul>
            </div>
            <div class="tooltip__close-icon tooltip-icon">
              <span class="close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;
        return wrapper;
    }
}
exports.default = SlideCoupleView;

},{"../constants/imageSourcesList":"3PCfr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sDVX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dimensions = require("../constants/dimensions");
var _dimensionsDefault = parcelHelpers.interopDefault(_dimensions);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
var _utils = require("../helpers/utils");
// class SlideManView {
//   constructor() {
//     this.id = 'man';
//     this.tooltipIconsList = null;
//     this.tooltipList = null;
//     this.popupList = null;
//     this.delay = null;
//     this.renderedSlide = null;
//     this.animatedContent = null;
//     this.popupAnimation = null;
//   }
//   setElements({
//     animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
//   }) {
//     this.tooltipIconsList = tooltipIconsList;
//     this.tooltipList = tooltipList;
//     this.popupList = popupList;
//     this.delay = null;
//     this.animatedContent = animatedContent;
//     this.renderedSlide = renderedSlide;
//   }
//   addEventListeners() {
//     console.log(
//       this.tooltipIconsList,
//       this.tooltipList,
//       this.popupList,
//       this.delay,
//       this.renderedSlide,
//       this.animatedContent,
//       this.popupAnimation,
//     );
//     this.animatedContent.addEventListener('animationend', () => {
//       this.showPopup();
//     });
//     this.tooltipIconsList.forEach((icon) => {
//       icon.addEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }
//   removeEventListeners() {
//     console.log('remove');
//     this.animatedContent.removeEventListener('animationend', this.showPopup.bind(this));
//     this.tooltipIconsList.forEach((icon) => {
//       icon.removeEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }
//   showTooltip(icon) {
//     this.tooltipList.forEach((tooltip) => {
//       if (tooltip.id === icon.dataset.tooltip) {
//         console.log('hey', tooltip.classList);
//         if (!tooltip.classList.contains('opened')) {
//           tooltip.classList.add('opened');
//         } else {
//           tooltip.classList.remove('opened');
//         }
//       }
//     });
//   }
//   showPopup() {
//     this.popupList.forEach((popup) => {
//       this.popupAnimation = this.createAnimation(popup);
//       if (this.renderedSlide.classList.contains('swiper-slide-active')) {
//         popup.classList.add('opened');
//         // this.popupAnimation.ready.then(() => this.popupAnimation.play());
//       } else {
//         popup.classList.remove('opened');
//       }
//     });
//   }
//   createAnimation(element) {
//     const animation = new KeyframeEffect(
//       element,
//       [
//         { opacity: 0, offset: 0 },
//         { opacity: 1, offset: 1 },
//       ],
//       {
//         duration: 1500,
//         fill: 'forwards',
//         easing: 'linear',
//         iterations: 1,
//         direction: 'normal',
//       }, // keyframe options
//     );
//     return new Animation(animation, document.timeline);
//   }
//   render() {
//     return html`
//     <div class="slide__content">
//       <div class="slide__images-list images">
//         <div class="images__item main-image">
//           <div class="main-image__box">
//             <img
//               src=${imageSourcesList.manSrc}
//               alt=""
//               class="main-image__man"
//             />
//             <div class="main-image__popup text-popup">
//               <a
//                 href="https://spb.tele2.ru/minutes-management/bushe"
//                 class="js-gtm-event link text-popup__link"
//                 target="_blank"
//                 data-event="conv_present"
//                 >Подарил кофе</a
//               >
//               гостю в очереди. Это просто: надо всего-то показать
//               QR-код бариста. Сейчас еще маме код на кофе в
//               мессенджере перешлю. Здорово, когда можно спонтанно
//               делиться теплом!
//             </div>
//             <div
//               class="js-gtm-event main-image__tooltip-block tooltip-block man-tooltip tooltip-icon"
//               data-tooltip="smartphone"
//               data-event="smartphone"
//             >
//               <img
//                 src=${imageSourcesList.manHand}
//                 alt=""
//                 class="tooltip-block__icon hand-image"
//               />
//               <img
//                 src=${imageSourcesList.manPhone}
//                 alt=""
//                 class="tooltip-block__icon phone-image"
//               />
//               <div
//                 class="tooltip-block__image-light image-light"
//               ></div>
//               <div
//                 class="tooltip-block__tooltip tooltip"
//                 id="smartphone"
//               >
//                 <div class="tooltip__text">
//                   <ul class="tooltip-list">
//                     <li class="tooltip-list__item">
//                       Подвешенный кофе
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="tooltip__close-icon tooltip-icon">
//                   <span class="close"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `;
//   }
// }
class SlideManView {
    #htmlComponent = document.createDocumentFragment();
    constructor(viewWidth){
        this.id = "man";
        this.#htmlComponent.append(this.createElement());
        this.viewWidth = viewWidth;
        this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
        this.animatedContent = this.#htmlComponent.querySelector(".slide__content");
        this.popupList = Array.from(this.#htmlComponent.querySelectorAll(".text-popup"));
        this.tooltipIconsList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip-icon"));
        this.tooltipList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip"));
        this.animatedContent.addEventListener("animationend", ()=>{
            this.showPopup();
            setTimeout(()=>{
                this.notify("popUpManIsShown");
            }, 1000);
        });
        this.tooltipIconsList.forEach((icon)=>{
            icon.addEventListener("click", ()=>this.showTooltip(icon));
        });
        document.addEventListener("isPrevios", ()=>{
            this.hidePopup();
        });
        document.addEventListener("popUpCoupleiShown", ()=>{
            if (this.viewWidth > (0, _dimensionsDefault.default)) this.animateSelf();
        });
    }
    animateSelf() {
        this.renderedSlide.classList.remove("slide_hidden");
        this.renderedSlide.classList.add("slide_visible");
        this.animatedContent?.classList.add("animated");
    }
    showTooltip(icon) {
        this.tooltipList.forEach((tooltip)=>{
            if (tooltip.id === icon.dataset.tooltip) {
                if (!tooltip.classList.contains("opened")) tooltip.classList.add("opened");
                else tooltip.classList.remove("opened");
            }
        });
    }
    /**
 * @param {string} type
 * @param {any} [detail]
 * @return {boolean}
 */ notify(type, detail = null) {
        const cancelable = true;
        const bubbles = true;
        const event = new CustomEvent(type, {
            detail,
            cancelable,
            bubbles
        });
        return document.dispatchEvent(event);
    }
    showPopup() {
        this.popupList.forEach((popup, index)=>{
            this.popupAnimation = this.createAnimation(popup, index);
            popup.classList.add("opened");
            this.popupAnimation.ready.then(()=>{
                this.popupAnimation.play();
            });
        });
    }
    hidePopup() {
        this.popupList.forEach((popup)=>{
            if (this.popupAnimation) {
                this.popupAnimation.cancel();
                popup.classList.remove("opened");
            }
        });
    }
    createAnimation(element, delay) {
        const animation = new KeyframeEffect(element, [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ], {
            duration: 1500,
            fill: "forwards",
            easing: "linear",
            delay,
            iterations: 1,
            direction: "normal"
        });
        return new Animation(animation, document.timeline);
    }
    render() {
        return this.#htmlComponent;
    }
    createElement() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("swiper-slide");
        wrapper.classList.add("slide");
        wrapper.classList.add(`${this.id}`);
        wrapper.classList.add("slide_hidden");
        wrapper.setAttribute("id", `${this.id}`);
        wrapper.innerHTML = `

      <div class="slide__content slide-content">
        <div class="slide-content__wrapper js-set-size">
          <div class="slide-content__img-box images">
            <div class="image-box images__main-img">
              <img
                src=${(0, _imageSourcesListDefault.default).manSrc}
                alt=""
                class="images__main man"
              />
            </div>
            <div
              class="image-box image-box_absolute images__phone-img"
            >
              <img
                src=${(0, _imageSourcesListDefault.default).manPhone}
                alt=""
                class="images__phone phone-image"
              />
            </div>
            <div class="image-box image-box_absolute images__dog-img">
              <img
                src=${(0, _imageSourcesListDefault.default).manDogTail}
                alt=""
                class="images__dog dog-image"
              />
            </div>
            <div
              class="image-box image-box_absolute images__hand-img"
            >
              <img
                src=${(0, _imageSourcesListDefault.default).manHand}
                alt=""
                class="images__hand hand-image"
              />
            </div>
          </div>
          <div class="slide-content__popup text-popup">
            <a
              href="https://spb.tele2.ru/minutes-management/bushe"
              class="js-gtm-event link text-popup__link"
              target="_blank"
              data-event="conv_present"
              >Подарил кофе</a
            >
            гостю в очереди. Это просто: надо всего-то показать QR-код
            бариста. Сейчас еще маме код на кофе в мессенджере
            перешлю. Здорово, когда можно спонтанно делиться теплом!
          </div>
          <div
            class="js-gtm-event slide-content__tooltip-block tooltip-block man-tooltip tooltip-icon"
            data-tooltip="smartphone"
            data-event="smartphone"
          >
            <div
              class="tooltip-block__tooltip tooltip"
              id="smartphone"
            >
              <div class="tooltip__text">
                <ul class="tooltip-list">
                  <li class="tooltip-list__item">Подвешенный кофе</li>
                </ul>
              </div>
              <div class="tooltip__close-icon tooltip-icon">
                <span class="close"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
        return wrapper;
    }
}
exports.default = SlideManView;

},{"../constants/imageSourcesList":"3PCfr","../helpers/utils":"i4jdK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/dimensions":"4y9Dz"}],"4y9Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const MOBILE = 768;
exports.default = MOBILE;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnfzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dimensions = require("../constants/dimensions");
var _dimensionsDefault = parcelHelpers.interopDefault(_dimensions);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
var _linksList = require("../constants/linksList");
var _linksListDefault = parcelHelpers.interopDefault(_linksList);
var _utils = require("../helpers/utils");
// class SlideStudentView {
//   constructor() {
//     this.id = 'girl';
//     this.tooltipIconsList = null;
//     this.tooltipList = null;
//     this.popupList = null;
//     this.delay = null;
//     this.renderedSlide = null;
//     this.animatedContent = null;
//     this.popupAnimation = null;
//   }
//   setElements({
//     animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
//   }) {
//     this.tooltipIconsList = tooltipIconsList;
//     this.tooltipList = tooltipList;
//     this.popupList = popupList;
//     this.delay = null;
//     this.animatedContent = animatedContent;
//     this.renderedSlide = renderedSlide;
//   }
//   addEventListeners() {
//     this.animatedContent.addEventListener('animationend', () => {
//       this.showPopup();
//     });
//     this.tooltipIconsList.forEach((icon) => {
//       icon.addEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }
//   removeEventListeners() {
//     this.animatedContent.removeEventListener('animationend', this.showPopup.bind(this));
//     this.tooltipIconsList.forEach((icon) => {
//       icon.removeEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }
//   showTooltip(icon) {
//     this.tooltipList.forEach((tooltip) => {
//       if (tooltip.id === icon.dataset.tooltip) {
//         if (!tooltip.classList.contains('opened')) {
//           tooltip.classList.add('opened');
//         } else {
//           tooltip.classList.remove('opened');
//         }
//       }
//     });
//   }
//   showPopup() {
//     this.popupList.forEach((popup) => {
//       this.popupAnimation = this.createAnimation(popup);
//       if (this.renderedSlide.classList.contains('swiper-slide-active')) {
//         popup.classList.add('opened');
//         // this.popupAnimation.ready.then(() => this.popupAnimation.play());
//       } else {
//         popup.classList.remove('opened');
//       }
//     });
//   }
//   createAnimation(element) {
//     const animation = new KeyframeEffect(
//       element,
//       [
//         { opacity: 0, offset: 0 },
//         { opacity: 1, offset: 1 },
//       ],
//       {
//         duration: 1500,
//         fill: 'forwards',
//         easing: 'linear',
//         iterations: 1,
//         direction: 'normal',
//       }, // keyframe options
//     );
//     return new Animation(animation, document.timeline);
//   }
//   render() {
//     return html`
//       <div class="slide__content">
//         <div class="slide__images-list images">
//           <div class="images__item main-image">
//             <div class="main-image__box">
//               <img
//                 src=${imageSourcesList.studentSrc}
//                 alt=""
//                 class="main-image__girl"
//               />
//               <div class="main-image__tooltip-block tooltip-block">
//                 <img
//                   src=${imageSourcesList.studentCoffee}
//                   alt=""
//                   class="js-gtm-event popup__link tooltip-block__icon coffee-image tooltip-icon"
//                   data-event="cup-girl"
//                   data-tooltip="girl"
//                 />
//                 <div
//                   class="tooltip-block__image-light image-light"
//                 ></div>
//                 <div class="tooltip-block__tooltip tooltip ${this.id}" id=${this.id}>
//                   <div class="tooltip__text">
//                     <ul class="tooltip__list tooltip-list">
//                       <li class="tooltip-list__item">
//                         Капучино на&nbsp;альтернативном молоке
//                         220&nbsp;мл
//                       </li>
//                     </ul>
//                   </div>
//                   <div
//                     class="tooltip__close-icon tooltip-icon"
//                     data-tooltip="girl"
//                   >
//                     <span class="close"></span>
//                   </div>
//                 </div>
//               </div>
//               <div class="main-image__popup text-popup">
//                 Ух&nbsp;ты,
//                 <a
//                   href=${linksList.internet}
//                   class="js-gtm-event link text-popup__link"
//                   target="_blank"
//                   >до&nbsp;1500 минут</a
//                 >
//                 на&nbsp;кофе! Это&nbsp;же шесть чашек&nbsp;&mdash;
//                 и&nbsp;себе можно взять, и&nbsp;друзей угостить. Есть
//                 кофе на&nbsp;альтернативном молоке? Беру!
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//   }
// }
class SlideStudentView {
    #htmlComponent = document.createDocumentFragment();
    constructor(viewWidth){
        this.id = "girl";
        this.viewWidth = viewWidth;
        this.#htmlComponent.append(this.createElement());
        this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
        this.animatedContent = this.#htmlComponent.querySelector(".slide__content");
        this.popupList = Array.from(this.#htmlComponent.querySelectorAll(".text-popup"));
        this.tooltipIconsList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip-icon"));
        this.tooltipList = Array.from(this.#htmlComponent.querySelectorAll(".tooltip"));
        this.animatedContent.addEventListener("animationend", ()=>{
            this.showPopup();
        });
        this.tooltipIconsList.forEach((icon)=>{
            icon.addEventListener("click", ()=>this.showTooltip(icon));
        });
        document.addEventListener("isPrevios", ()=>{
            this.hidePopup();
        });
        document.addEventListener("popUpManIsShown", ()=>{
            if (this.viewWidth > (0, _dimensionsDefault.default)) this.animateSelf();
        });
    }
    animateSelf() {
        this.renderedSlide.classList.remove("slide_hidden");
        this.renderedSlide.classList.add("slide_visible");
        this.animatedContent?.classList.add("animated");
    }
    showTooltip(icon) {
        this.tooltipList.forEach((tooltip)=>{
            if (tooltip.id === icon.dataset.tooltip) {
                if (!tooltip.classList.contains("opened")) tooltip.classList.add("opened");
                else tooltip.classList.remove("opened");
            }
        });
    }
    showPopup() {
        this.popupList.forEach((popup, index)=>{
            this.popupAnimation = this.createAnimation(popup, index);
            popup.classList.add("opened");
            this.popupAnimation.ready.then(()=>this.popupAnimation.play());
        });
    }
    hidePopup() {
        this.popupList.forEach((popup)=>{
            if (this.popupAnimation) {
                this.popupAnimation.cancel();
                popup.classList.remove("opened");
            }
        });
    }
    createAnimation(element, delay) {
        const animation = new KeyframeEffect(element, [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ], {
            duration: 1500,
            fill: "forwards",
            easing: "linear",
            delay,
            iterations: 1,
            direction: "normal"
        });
        return new Animation(animation, document.timeline);
    }
    render() {
        return this.#htmlComponent;
    }
    createElement() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("swiper-slide");
        wrapper.classList.add("slide");
        wrapper.classList.add(`${this.id}`);
        wrapper.classList.add("slide_hidden");
        wrapper.setAttribute("id", `${this.id}`);
        wrapper.innerHTML = `
    <div class="slide__content slide-content">
      <div class="slide-content__wrapper js-set-size">
        <div class="slide-content__img-box images">
          <div class="image-box images__main-img">
            <img
              src=${(0, _imageSourcesListDefault.default).studentSrc}
              alt=""
              class="main-image__girl"
            />
          </div>
          <div
            class="image-box image-box_absolute images__coffee-img"
          >
            <img
              src=${(0, _imageSourcesListDefault.default).studentCoffee}
              alt=""
              class="images__coffee coffee-image"
            />
          </div>
          <div
            class="image-box image-box_absolute images__hand-img"
          >
            <img
              src=${(0, _imageSourcesListDefault.default).studentHand}
              alt=""
              class="images__hand hand-image"
            />
          </div>
        </div>
        <div class="slide-content__popup text-popup">
          Ух&nbsp;ты,
          <a
            href=${(0, _linksListDefault.default).internet}
            class="js-gtm-event link text-popup__link"
            target="_blank"
            >до&nbsp;1500 минут</a
          >
          на&nbsp;кофе! Это&nbsp;же шесть чашек&nbsp;&mdash;
          и&nbsp;себе можно взять, и&nbsp;друзей угостить. Есть кофе
          на&nbsp;альтернативном молоке? Беру!
        </div>
        <div
          class="js-gtm-event slide-content__tooltip-block tooltip-block girl-tooltip tooltip-icon"
          data-tooltip="girl"
          data-event="cup-girl"
        >
          <div class="tooltip-block__tooltip tooltip" id="girl">
            <div class="tooltip__text">
              <ul class="tooltip__list tooltip-list">
                <li class="tooltip-list__item">
                  Капучино на&nbsp;альтернативном молоке 220&nbsp;мл
                </li>
              </ul>
            </div>
            <div
              class="tooltip__close-icon tooltip-icon"
              data-tooltip="girl"
            >
              <span class="close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;
        return wrapper;
    }
}
exports.default = SlideStudentView;

},{"../constants/imageSourcesList":"3PCfr","../constants/linksList":"kZLRc","../helpers/utils":"i4jdK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/dimensions":"4y9Dz"}],"kZLRc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const linksList = {
    tele2: "https://tele2.ru",
    exchange: "https://spb.tele2.ru/minutes-management/bushe",
    internet: "https://tele2.ru/stock-exchange/internet",
    tariffs: "https://q.tele2.ru/tariffs"
};
exports.default = linksList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"912up":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dimensions = require("../constants/dimensions");
var _dimensionsDefault = parcelHelpers.interopDefault(_dimensions);
var _imageSourcesList = require("../constants/imageSourcesList");
var _imageSourcesListDefault = parcelHelpers.interopDefault(_imageSourcesList);
class ModalView {
    #htmlComponent = document.createDocumentFragment();
    constructor(viewWidth){
        this.id = "modal";
        this.viewWidth = viewWidth;
        this.#htmlComponent.append(this.createElement());
        this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
        this.closeIcon = this.#htmlComponent.querySelector(".close-icon");
        this.copyIcon = this.#htmlComponent.querySelector(".copy-icon");
        this.copyTooltip = this.#htmlComponent.querySelector(".copy-tooltip");
        this.okIcon = this.#htmlComponent.querySelector(".share__icon_ok");
        this.vkIcon = this.#htmlComponent.querySelector(".share__icon_vk");
        this.closeIcon?.addEventListener("click", ()=>{
            this.closeModal();
        });
        if (this.viewWidth > (0, _dimensionsDefault.default)) this.renderedSlide.addEventListener("click", (event)=>{
            if (!event.target.closest(".modal-box")) this.closeModal();
        });
        this.copyIcon?.addEventListener("click", ()=>this.copyLink());
        this.shareWithSocialMedia();
    }
    shareWithSocialMedia() {
        const shareOptions = {
            url: "window.location.href"
        };
        this.vkIcon?.addEventListener("click", ()=>{
            this.vkIcon.href = `http://vk.com/share.php?url=${shareOptions.url}`;
        });
        this.okIcon?.addEventListener("click", ()=>{
            this.okIcon.href = `https://connect.ok.ru/offer?url=${shareOptions.url}`;
        });
    }
    closeModal() {
        const icon = document.querySelector(".modal-icon");
        icon.classList.add("animated");
        this.renderedSlide.classList.add("modal-hidden");
        this.renderedSlide.classList.add("slide_hidden");
    }
    handleClosingModal() {
        const closeModalIcon = document.querySelector(".modal__close-icon");
        closeModalIcon.addEventListener("click", ()=>{
            this.closeModal();
        });
    }
    copyLink() {
        navigator.clipboard.writeText(window.location.href).then(()=>{
            this.copyTooltip.classList.add("opened");
            setTimeout(()=>{
                this.copyTooltip.classList.remove("opened");
            }, 2000);
        }).catch((err)=>{
            console.log("Something went wrong", err);
        });
    }
    render() {
        return this.#htmlComponent;
    }
    createElement() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("swiper-slide");
        wrapper.classList.add("slide");
        wrapper.classList.add(`${this.id}`);
        wrapper.classList.add("slide_hidden");
        wrapper.setAttribute("id", `${this.id}`);
        wrapper.innerHTML = `
      <div class="popup-modal">
        <div class="modal-box" id="modal-box">
          <div class="modal__container">
            <div class="modal-box__header">
              <a
                href="https://tele2.ru"
                class="logo logo--white js-gtm-event"
                data-event="logo"
              >
                <img src=${(0, _imageSourcesListDefault.default).logoSrc} alt="Tele2" />
              </a>
              <h2 class="modal-box__title">
                Больше теплых минут с&nbsp;Tele2
              </h2>
              <div class="modal-box__close-icon close-icon">
                <span class="close"></span>
              </div>
            </div>

            <div class="modal-box__body modal-body">
              <p class="modal-body__text">
                Меняем все доступные вам минуты&nbsp;&mdash;
                включенные в&nbsp;тариф, приобретенные или
                перенесенные от&nbsp;другого оператора&nbsp;&mdash;
                на&nbsp;кофе буше, а&nbsp;еще&nbsp;&mdash;
                на&nbsp;смартфоны, гаджеты и&nbsp;сервисы.
                С&nbsp;Tele2&nbsp;теплее.
              </p>
              <div class="modal-body__buttons buttons">
                <a
                  href="https://q.tele2.ru/tariffs"
                  class="js-gtm-event btn btn-primary"
                  data-event="conv_connect"
                  target="_blank"
                >
                  Подключиться
                </a>
                <a
                  href="https://spb.tele2.ru/minutes-management/bushe"
                  class="js-gtm-event link"
                  data-event="conv_change-final"
                  target="_blank"
                >
                  К&nbsp;обмену
                </a>
              </div>
            </div>
          </div>

          <div class="modal-box__footer footer">
            <div class="footer__share-block share">
              <p class="share__text">Поделиться с&nbsp;друзьями</p>
              <ul class="share__links-list links">
                <li
                  class="links__item share__copy-link copy-icon js-gtm-event"
                  data-event="share_link">
                    <img src=${(0, _imageSourcesListDefault.default).copyLinkSrc} alt="" />
                </li>
                <li class="links__item">
                  <a
                  class="js-gtm-event share__icon_vk"
                  href=""
                  target="_blank"
                  data-event="share_vk"
                  >
                    <img src=${(0, _imageSourcesListDefault.default).vkLinkSrc} alt="" />
                  </a>
                </li>
                <li class="links__item">
                  <a
                  class="js-gtm-event share__icon_ok"
                  href=""
                  target="_blank"
                  data-event="share_vk"
                  >
                    <img src=${(0, _imageSourcesListDefault.default).okLinkSrc} alt="" />
                  </a>
                </li>
                <li class="links__item copy-tooltip">
                  Ссылка скопирована
                </li>
              </ul>
            </div>
            <div class="footer__image-box">
              <img src="./img/page/footer-coffee.svg" alt="" />
            </div>
            <div class="footer__box-content">
              <div class="footer__copyrights copyrights">
                18+ &copy; Tele2 Россия, 2023.
              </div>
              <div class="footer__rules rules">
                <a
                  href="https://tele2.ru/minutes-management"
                  target="_blank"
                  class="text-link js-gtm-event"
                  data-event="rules-link"
                  data-section="section-footer"
                  >Подробное&nbsp;описание</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
        return wrapper;
    }
}
exports.default = ModalView;

},{"../constants/imageSourcesList":"3PCfr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/dimensions":"4y9Dz"}],"7nCEy":[function(require,module,exports) {
/* eslint-disable import/no-cycle */ // import sliderView from '../main';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSlider", ()=>createSlider);
parcelHelpers.export(exports, "destroySlider", ()=>destroySlider);
parcelHelpers.export(exports, "handleAnimation", ()=>handleAnimation);
parcelHelpers.export(exports, "addAnimationClass", ()=>addAnimationClass);
var _swiperMin = require("../vendor/swiper.min");
var _swiperMinDefault = parcelHelpers.interopDefault(_swiperMin);
const options = {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mousewheel: false,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: true,
    // slideVisibleClass: 'visible',
    spaceBetween: 0,
    loop: false,
    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }
};
let swiper = null;
function createSlider() {
    const slider = document.querySelector(".swiper-wrapper");
    const viewWidth = document.documentElement.clientWidth;
    console.log(viewWidth);
    swiper = new (0, _swiperMinDefault.default)(".swiper-container", options);
    if (viewWidth < 992) swiper.init();
    else destroySlider(swiper);
}
function addAnimationClass() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) activeSlide.classList.add("animated");
}
function handleAnimation() {
    if (swiper) swiper.on("transitionEnd", ()=>{
        console.log("slideChange");
        addAnimationClass();
    });
// swiper.on('transitionEnd', () => {
//   console.log('transitionEnd');
//   addAnimationClass();
// });
}
function destroySlider(slider) {
    slider.destroy();
}

},{"../vendor/swiper.min":"31E87","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["czuV8","e0cVP"], "e0cVP", "parcelRequire052b")

//# sourceMappingURL=index.11171106.js.map
