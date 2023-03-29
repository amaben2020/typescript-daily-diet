"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faqs = [
    {
        id: "607a097e9b7844a0bd2806fa8ac1282d",
        name: "FAQ - FAQ Question 5",
        data: {
            question: "FAQ Question 5",
            answer: '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p><br></p><p><img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F30e53f6137104be08375bde3ca512509"></p><p>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/hpLUsAqCeQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</p><p><br></p>',
            category: {
                id: "dfae1beea8ff43a8bcfedb3d8aee6396",
                model: "faq-category",
                "@type": "@builder.io/core:Reference",
            },
        },
    },
    {
        id: "601e160f44274cd887cfdcc7e23f0657",
        name: "FAQ - FAQ Question 4",
        data: {
            question: "FAQ Question 4",
            answer: '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p><br></p><p><img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F30e53f6137104be08375bde3ca512509"></p><p>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/hpLUsAqCeQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</p><p><br></p>',
            category: {
                "@type": "@builder.io/core:Reference",
                model: "faq-category",
                id: "dfae1beea8ff43a8bcfedb3d8aee6396",
            },
        },
    },
    {
        id: "4beff8facb664a19b8c56d917c9cbc38",
        name: "FAQ - FAQ Question 3",
        data: {
            question: "FAQ Question 03",
            answer: '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p><br></p><p><img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F30e53f6137104be08375bde3ca512509"></p><p>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/hpLUsAqCeQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</p><p><br></p>',
            category: {
                "@type": "@builder.io/core:Reference",
                id: "c87ad99d169648b9b1eef43841a681c4",
                model: "faq-category",
            },
        },
    },
    {
        id: "d3857ebd29ac4c6081fb5e481fe2147e",
        name: "FAQ - FAQ Question 2",
        data: {
            question: "FAQ Question 2",
            answer: '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p><br></p><p><img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F30e53f6137104be08375bde3ca512509"></p><p>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/hpLUsAqCeQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</p><p><br></p>',
            category: {
                "@type": "@builder.io/core:Reference",
                id: "76e59c1138d14317845c8799d3374b19",
                model: "faq-category",
            },
        },
    },
    {
        id: "10f96636f4864fc0aa20570cd0b6b115",
        name: "FAQ - FAQ Question 1",
        data: {
            question: "FAQ Question 1",
            answer: '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p><br></p><p><img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F30e53f6137104be08375bde3ca512509"></p><p>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/hpLUsAqCeQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;</p><p><br></p>',
            category: {
                model: "faq-category",
                id: "76e59c1138d14317845c8799d3374b19",
                "@type": "@builder.io/core:Reference",
            },
        },
    },
];
var faqCategory = [
    {
        name: "FAQ Category - FAQ Category 4",
        id: "30cca23ae1864e6e8dda5b6ca60e8850",
        data: {
            title: "FAQ Category 4",
            slug: "faq-category-4",
            scope: "com",
        },
    },
    {
        name: "FAQ Category - FAQ Category 3",
        id: "dfae1beea8ff43a8bcfedb3d8aee6396",
        data: {
            title: "FAQ Category 3",
            slug: "faq-category-3",
            scope: "empty",
        },
    },
    {
        name: "FAQ Category - FAQ Category 2",
        id: "c87ad99d169648b9b1eef43841a681c4",
        data: {
            title: "FAQ Category 2",
            slug: "faq-category-2",
            scope: "com",
        },
    },
    {
        name: "FAQ Category - FAQ Category 1",
        id: "76e59c1138d14317845c8799d3374b19",
        data: {
            title: "FAQ Category 1",
            slug: "faq-category-1",
            scope: "com",
        },
    },
];
var mergedFaqs = faqs.map(function (faq) {
    return faqCategory
        .map(function (e) {
        return {
            id: faq.id,
            title: e.data.title,
            slug: e.data.slug,
            questions: faq.data.question,
        };
    })
        .reduce((acc, currentValue));
});
console.log(mergedFaqs);
//# sourceMappingURL=lodash.js.map