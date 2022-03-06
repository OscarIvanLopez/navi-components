"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "No label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.allCaps, allCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "primary" : _e, _f = _a.customFontColor, customFontColor = _f === void 0 ? "black" : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "transparent" : _g;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { color: customFontColor, backgroundColor: backgroundColor }, className: "label ".concat(size, " text-").concat(color) }, { children: allCaps ? label.toUpperCase() : label })));
};
exports.default = MyLabel;
