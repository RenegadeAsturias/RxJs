"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var product_1 = require("../model/product");
var product1 = new product_1.Product();
product1.idProduct = 1;
product1.name = "TV";
product1.price = 1000;
var product2 = new product_1.Product();
product2.idProduct = 2;
product2.name = "PC";
product2.price = 3000;
var obs = (0, rxjs_1.from)([product1, product2]);
obs.subscribe(function (x) { return console.log(x); });
