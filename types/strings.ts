const link =
  "https://a.storyblok.com/f/124722/x/2c1f1bae94/jjjjdsjkdsjkds/charm-industrial-science-video.mp4";

const extractPath = (url: string): string | undefined => {
  let requiredUrl: string | undefined = "";
  requiredUrl = url.split("/").pop();

  return requiredUrl;
};

console.log(extractPath(link));
