//   declare type StoryblokTemplate<T> = {
//     pageContext: {
//       blok: StoryblokEntry<T>;
//       language: string;
//       layout: StoryblokEntry<string>;
//     };
//     location: Location;
//   };

//  declare type StoryblokPage<T> = StoryblokEntry<T> & { location: Location; pageConfig: PageConfig };

// export type DemoPageTypes = {
//   body: StoryblokRichtext;
//   logo_heading: StoryblokRichtext;
//   logos: { src: ImageDataType }[];
//   card_body: CardTypes[];
// };

// export default function DemoPageTemplate({ pageContext, location }: StoryblokTemplate<DemoPageTypes>) {
//   return withLayout(DemoPage, { ...pageContext, location });
// }

// StoryblokPage<DemoPageTypes>

//   declare type StoryblokEntry<T = Record<string, unknown>> = {
//     content: T;
//     created_at: string;
//     field_component: string;
//     first_published_at: string;
//     full_slug: string;
//     group_id: string;
//     id: string;
//     is_startpage: string;
//     name: string;
//     parent_id: string;
//     published_at: string;
//     slug: string;
//     uuid: string;
//   };

//     declare type Children = {
//     children: React.ReactNode;
//   };
