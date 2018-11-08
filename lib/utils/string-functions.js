"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classes(classes) {
    return classes.join(' ').trim();
}
exports.classes = classes;
function strstr(needle, haystack, caseSensitive) {
    if (caseSensitive === void 0) { caseSensitive = false; }
    if (caseSensitive) {
        return haystack.indexOf(needle) !== -1;
    }
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
}
exports.strstr = strstr;
//# sourceMappingURL=string-functions.js.map