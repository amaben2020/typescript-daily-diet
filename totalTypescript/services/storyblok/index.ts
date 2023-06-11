import StoryblokClient from "storyblok-js-client";

const GATSBY_STORYBLOK_API_KEY = "xE82d8m60MZs6fXriyqFjAtt";

const Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_API_KEY,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

async function getSuByCategory() {
  const { data, total } = await Storyblok.get(`cdn/stories`, {
    version: "published",
    filter_query: {
      // component: { in: "template_scientificUpdate" },
      // su_categories: {
      //   exists: category,
      // },
    },
    // page,
    cv: Date.now(),
    // per_page: amountPerPage,
    // sort_by: "content.su_date_of_publication:desc",
  });

  if (Array.isArray(data.stories)) {
    const newList = data.stories.map((el: any) => ({
      full_slug: `/${el.full_slug}`,
      ...el.content,
    }));
    console.log(newList);
  }
}
