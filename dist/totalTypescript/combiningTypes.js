"use strict";
// intersection: this feature enables us compose several types. Only used by interfaces not types.
var getDefaultUserAndPostArray = function () {
    return {
        id: "1",
        firstName: "Matt",
        lastName: "Pocock",
        posts: [
            {
                id: "1",
                title: "How I eat so much cheese",
                body: "It's pretty edam difficult",
            },
        ],
    };
};
// interface Posts {
//   id: string
//   title: string
//   body: string
// }
var getDefaultUserAndPosts = function () {
    return {
        id: "1",
        firstName: "Matt",
        lastName: "Pocock",
        posts: [
            {
                id: "1",
                title: "How I eat so much cheese",
                body: "It's pretty edam difficult",
            },
        ],
    };
};
var userAndPosts = getDefaultUserAndPosts();
console.log(userAndPosts.posts[0]);
//# sourceMappingURL=combiningTypes.js.map