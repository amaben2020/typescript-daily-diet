import StoryblokClient from "storyblok-js-client";

const GATSBY_STORYBLOK_API_KEY = "xE82d8m60MZs6fXriyqFjAtt";

const Storyblok = new StoryblokClient({
  accessToken: GATSBY_STORYBLOK_API_KEY,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

async function getSuByCategory() {
  try {
    const { data, total } = await Storyblok.get(
      `cdn/stories`,
      // {
      // version: "published",
      // filter_query: {
      //   // component: { in: "template_scientificUpdate" },
      //   // su_categories: {
      //   //   exists: category,
      //   // },
      // },
      // // page,
      // cv: Date.now(),
      // // per_page: amountPerPage,
      // // sort_by: "content.su_date_of_publication:desc",
      // }
    );

    console.log("data length", data.stories.length);
    console.log("data", data.stories);
    // console.log("total", total);

    // if (Array.isArray(data.stories)) {
    //   const newList = data.stories.map((el: any) => ({
    //     full_slug: `/${el.full_slug}`,
    //     ...el.content,
    //   }));
    //   console.log(newList);
    // }
  } catch (error) {
    console.log("error", error);
  }
}

console.log("data", getSuByCategory());
