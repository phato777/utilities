"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = {
    callbacks: [],
    fire: function (eventName, data) {
        if (data === void 0) { data = null; }
        var events = this.callbacks.filter(function (c) { return c.eventName === eventName; });
        if (events.length > 0)
            events.forEach(function (c) { return c.callback(data); });
    },
    listen: function (eventName, id, callback) {
        var events = this.callbacks.filter(function (c) { return c.eventName === eventName && c.id === id; });
        if (events.length === 0)
            this.callbacks.push({ eventName: eventName, callback: callback, id: id });
    },
    unlisten: function (eventName, id) {
        var callback = this.callbacks.find(function (c) { return c.eventName === eventName && c.id === id; });
        var index = callback ? this.callbacks.indexOf(callback) : null;
        if (index)
            this.callbacks.splice(index, 1);
    }
};
//# sourceMappingURL=events.js.map