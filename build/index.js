'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var normalize = function normalize(string) {
    return string.replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n').toLowerCase();
};

exports.normalize = normalize;