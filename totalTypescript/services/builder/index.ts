// import { builder } from "@builder.io/sdk";
import { Dictionary, groupBy } from "lodash";
import { faqs } from "./data/faq";
// const getFaqCategories = async () => {
//   try {
//     const faqs = await builder.getAll("faq", {
//       apiKey: "c0e24be8e3a3478fa0eb69a6f61964eb",
//     });

//     console.dir(faqs, { depth: null });

//     return faqs;
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(getFaqCategories());

const mappedFaqsData = faqs.map((elem) => {
  return {
    question: {
      title: elem.data.question,
      answer: elem.data.answer,
      id: elem.id,
    },
    category: {
      id: elem.data.category.id,
      name: elem.data.category.value.name,
      title: elem.data.category.value.data.slug,
      slug: elem.data.category.value.data.slug,
      scope: elem.data.category.value.data.scope,
      ["revision"]: elem.rev,
    },
  };
});

// console.log("mappedFaqsData", mappedFaqsData);

// powerful technique to group elements in an array in a dictionary based on a key.
console.log("groupBy", groupBy(mappedFaqsData, "category.id"));

const formatItems = (
  array: Dictionary<
    {
      question: { title: string; answer: string; id: string };
      category: {
        id: string;
        name: string;
        title: string;
        slug: string;
        scope: string;
        revision: string;
      };
    }[]
  >,
) => {
  return Object.entries(array).map(([keys, values]: any) => {
    if (keys === values[0].category.id) {
      return {
        title: values[0].category.title,
        slug: values[0].category.slug,
        scope: values[0].category.scope,
        questions: values.map((elem: any) => {
          return {
            id: elem.question.id,
            title: elem.question.title,
            answer: elem.question.answer,
          };
        }),
      };
    }
  });
};

console.log(formatItems(groupBy(mappedFaqsData, "category.id")));

const result = Object.values(groupBy(mappedFaqsData, "category.id")).reduce(
  (acc: any, questions: any, index) => {
    console.log(index);

    acc.push({
      title: questions[0].category.title,
      slug: questions[0].category.slug,
      scope: questions[0].category.scope,
      questions: questions.map((elem: any) => {
        return {
          id: elem.question.id,
          title: elem.question.title,
          answer: elem.question.answer,
        };
      }),
    });

    return acc;
  },
  [],
);

// console.dir(result, { depth: null });

const desiredResult = [
  {
    id: "47b29f68f6014b7f995274f40acdb5e2",
    title: "category-01",
    slug: "category-1",
    questions: [
      {
        id: "735f2b6ab2f642aeaf98cef30cd1a7e6",
        question: "faq-test-1",
        answer:
          '<h1>Title</h1><h3>Sub Heading</h3><p><span style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p><p> </p>',
      },
    ],
  },
];

// also map it for algolia {ObjectID: "..."}
