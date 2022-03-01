"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var obs = rxjs_1.Observable.create(function (observer) {
    observer.next('Hola');
    observer.next('Coders');
    observer.complete();
});
obs.subscribe(function (x) { return console.log(x); });
