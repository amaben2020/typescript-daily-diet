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
var filterOutboundInternalLinks = (function () {
    var INTERNAL_HOST = "dodonut";
    var url = new URL("https://dodonut/jbsjaj.com");
    return url.hostname === INTERNAL_HOST
        ? "noopener"
        : "nofollow noopener noreferrer";
})();
console.log(filterOutboundInternalLinks);
var props = {
    properties: {
        a: "1",
    },
};
var loggerr = function (title, p) {
    console.log(__assign({}, p));
};
console.log(loggerr("a", props.properties));
var StripeUrl = "https://checkout.stripe.com/c/pay/cs_test_a1wi1IKdw4XZ061J7CRp3os49Bo35TBZfAcYnSBZ1RriP5yRP930HxsXXC#fidkdWxOYHwnPyd1blpxYHZxWjA0TXxgajdBSFI2UWxrXE9RMzJcVUtdUD1dSjEwR2JoS2lKY3ZTalZCUWNdX05xZDxLNjF8cE5%2FcGNHTlJvcTRdTTVKS1dwRGd1X0JOYlFjNUk9b2puT0k0NTU1Un1ubDE0TicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";
var stripe_url = new URL(StripeUrl).hostname;
console.log(stripe_url);
//# sourceMappingURL=strings.js.map