System.register("splashes", [], function (exports_1, context_1) {
    "use strict";
    var splashes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("splashes", splashes = [
                "Hello, world!",
                "Here be dragons…",
                "?????? ???!",
                "Work in progress",
                "Early beta",
                "β-version",
            ]);
        }
    };
});
System.register("main", ["splashes"], function (exports_2, context_2) {
    "use strict";
    var splashes_1, splash;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (splashes_1_1) {
                splashes_1 = splashes_1_1;
            }
        ],
        execute: function () {
            splash = document.getElementsByClassName("logo__splash")[0];
            splash.innerHTML = splashes_1.splashes[Math.floor(Math.random() * Math.floor(splashes_1.splashes.length))];
        }
    };
});
//# sourceMappingURL=script.js.map