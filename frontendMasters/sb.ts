async function getSuByCategory() {
  const {
    data,
  }: Omit<StoryblokResult, "data"> & {
    data: { stories: ParsedStoryblokStory<ScientificUpdatePageTemplate>[] };
  } = await Storyblok.get(`cdn/stories`, {
    version: "published",
  });

  console.dir(data.stories, { depth: null });
}
