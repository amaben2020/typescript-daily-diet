"use strict";
// array: is it ordered correctly?
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
// halve the array
var bs_list = function (haystack, needle) {
    var lo = 0;
    var hi = haystack.length;
    do {
        var m = Math.floor(lo + (hi - lo) / 2);
        var value_1 = haystack[m];
        if (value_1 === needle) {
            return true;
        }
        else if (value_1 > needle) {
            hi = m;
        }
        else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
};
// console.log(bs_list([2, 3, 4, 5, 6, 7, 8, 9], 9))
var getName = function (name) { return name; };
console.log(getName('Name'));
var images = [
    {
        node: {
            originalSrc: 'Men-Jacket-Front-Black__15466.1603283963.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    },
    {
        node: {
            originalSrc: 'Men-Jacket-Side-Black__68202.1603283961.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    },
    {
        node: {
            originalSrc: 'Men-Jacket-Back-Black__33864.1603283963.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    },
    {
        node: {
            originalSrc: 'Men-Jacket-Front-White__95300.1603283963.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    },
    {
        node: {
            originalSrc: 'Men-Jacket-Side-White__91924.1603283962.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    },
    {
        node: {
            originalSrc: 'Men-Jacket-Back-White__02866.1603283963.png',
            altText: '',
            width: 2048,
            height: 2048
        }
    }
];
var normalizedImages = function (edges) {
    return edges.map(function (_a) {
        var node = _a.node;
        return __assign({ url: "/".concat(node.originalSrc) }, node);
    });
};
console.log(normalizedImages(images));
//# sourceMappingURL=binarySearch.js.map