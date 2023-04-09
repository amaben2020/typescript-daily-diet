function removeFirstEntryFromArray<T>(arr: T[]): T[] {
  return arr.splice(1);
}

const strArray: string[] = ["Santa", "Claus", "is", "coming", "to", "town"];

const newStrArray = removeFirstEntryFromArray<string>(strArray);

let str = "";

newStrArray.forEach((elem) => (str += elem.toUpperCase()));

console.log(str);

//Storyblok Sections : understand what's going on here
type MainHeroType = StoryblokBlok<"section_mainHero"> & {
  label?: string;
};

type FeaturedScientificBoardType =
  StoryblokBlok<"section_featuredScientificBoard"> & {
    heading?: string;
    subheading?: string;
    btn_label?: string;
    list?: {
      full_slug: string;
    }[];
  };
