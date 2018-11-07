"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = {
    callbacks: [],
    fire: function (eventName, data) {
        if (data === void 0) { data = null; }
        if (this.callbacks.some(function (c) { return c.eventName === eventName; })) {
            this.callbacks.filter(function (c) { return c.eventName === eventName; }).forEach(function (c) {
                c.callback(data);
            });
        }
    },
    listen: function (eventName, id, callback) {
        this.callbacks.push({ eventName: eventName, callback: callback, id: id });
    },
    unlisten: function (eventName, id) {
        this.callbacks.splice(this.callbacks.indexOf(this.callbacks.find(function (c) { return c.eventName === eventName && c.id === id; })), 1);
    }
};
//# sourceMappingURL=events.js.map