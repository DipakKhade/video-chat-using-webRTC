"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('hello from express');
    return;
});
app.listen(PORT, function () { return console.log('server is up and running ...'); });
