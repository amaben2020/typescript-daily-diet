"use strict";
var link = "https://a.storyblok.com/f/124722/x/2c1f1bae94/jjjjdsjkdsjkds/charm-industrial-science-video.mp4";
var extractPath = function (url) {
    var requiredUrl = "";
    requiredUrl = url.split("/").pop();
    return requiredUrl;
};
console.log(extractPath(link));
//# sourceMappingURL=strings.js.map