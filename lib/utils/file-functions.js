"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUnits = function (size) {
    var bytes = ['B', 'KB', 'MB', 'GB', 'TB'];
    var measurement = '';
    for (var _i = 0, bytes_1 = bytes; _i < bytes_1.length; _i++) {
        var val = bytes_1[_i];
        measurement = val;
        if (size > 1024) {
            size = size / 1024;
        }
        else {
            break;
        }
    }
    return size.toFixed(2) + " " + measurement;
};
//# sourceMappingURL=file-functions.js.map