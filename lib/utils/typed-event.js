"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypedEvent = /** @class */ (function () {
    function TypedEvent() {
        var _this = this;
        this.listeners = [];
        this.listenersOncer = [];
        this.on = function (listener) {
            _this.listeners.push(listener);
            return {
                dispose: function () { return _this.off(listener); }
            };
        };
        this.once = function (listener) {
            _this.listenersOncer.push(listener);
        };
        this.off = function (listener) {
            var callbackIndex = _this.listeners.indexOf(listener);
            if (callbackIndex > -1)
                _this.listeners.splice(callbackIndex, 1);
        };
        this.emit = function (sender, event) {
            /** Update any general listeners */
            _this.listeners.forEach(function (listener) { return listener(sender, event); });
            /** Clear the `once` queue */
            _this.listenersOncer.forEach(function (listener) { return listener(sender, event); });
            _this.listenersOncer = [];
        };
        this.pipe = function (sender, te) {
            return _this.on(function (e) { return te.emit(sender, e); });
        };
    }
    Object.defineProperty(TypedEvent.prototype, "isEmpty", {
        get: function () {
            return (this.listeners.length === 0 && this.listenersOncer.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    return TypedEvent;
}());
exports.TypedEvent = TypedEvent;
exports.default = TypeError;
//# sourceMappingURL=typed-event.js.map