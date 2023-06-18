import { hasProperty } from "../../has-property";

type TAllSitePage = {
  allSitePage: {
    nodes: {
      path: string;
      pageContext: {
        id?: string;
        category?: string;
        categoryName?: string;
        dataSourceName?: string;
      };
    }[];
  };
};
type TSiteData = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

const sbData: TAllSitePage & TSiteData = {
  allSitePage: {
    nodes: [
      {
        path: "/",
        pageContext: {
          id: "storyblokentry-129022951-default",
        },
      },
      {
        path: "/thank-you-awards",
        pageContext: {
          id: "storyblokentry-230972929-default",
        },
      },
      {
        path: "/call-for-entries-for-the-2022-alpro-foundation-award",
        pageContext: {
          id: "storyblokentry-226975569-default",
        },
      },
      {
        path: "/news",
        pageContext: {
          id: "storyblokentry-171052532-default",
        },
      },
      {
        path: "/resources",
        pageContext: {
          id: "storyblokentry-169387909-default",
        },
      },
      {
        path: "/awards",
        pageContext: {
          id: "storyblokentry-167607084-default",
        },
      },
      {
        path: "/events",
        pageContext: {
          id: "storyblokentry-164467253-default",
        },
      },
      {
        path: "/research-grants-sandbox",
        pageContext: {
          id: "storyblokentry-184109644-default",
        },
      },
      {
        path: "/research-grants",
        pageContext: {
          id: "storyblokentry-157364866-default",
        },
      },
      {
        path: "/plant-based-eating",
        pageContext: {
          id: "storyblokentry-155213638-default",
        },
      },
      {
        path: "/scientific-board",
        pageContext: {
          id: "storyblokentry-152432137-default",
        },
      },
      {
        path: "/about",
        pageContext: {
          id: "storyblokentry-147049139-default",
        },
      },
      {
        path: "/scientific-updates",
        pageContext: {
          id: "storyblokentry-144130159-default",
        },
      },
      {
        path: "/alpro-foundation-award-terms-conditions",
        pageContext: {
          id: "storyblokentry-230658976-default",
        },
      },
      {
        path: "/terms-conditions",
        pageContext: {
          id: "storyblokentry-141534104-default",
        },
      },
      {
        path: "/privacy-policy",
        pageContext: {
          id: "storyblokentry-141533641-default",
        },
      },
      {
        path: "/cookies",
        pageContext: {
          id: "storyblokentry-141533591-default",
        },
      },
      {
        path: "/richtext-test",
        pageContext: {
          id: "storyblokentry-141215473-default",
        },
      },
      {
        path: "/contact",
        pageContext: {
          id: "storyblokentry-139285813-default",
        },
      },
      {
        path: "/scientific-updates/eat-lancet-proves-to-be-nutritionally-adequate",
        pageContext: {
          id: "storyblokentry-299311858-default",
        },
      },
      {
        path: "/scientific-updates/food-taxation-an-effective-driver-for-adopting-sustainable-diets",
        pageContext: {
          id: "storyblokentry-299288733-default",
        },
      },
      {
        path: "/scientific-updates/american-heart-association-approves-the-eat-lancet-diet",
        pageContext: {
          id: "storyblokentry-299285080-default",
        },
      },
      {
        path: "/scientific-updates/care-needed-when-using-upf-classification",
        pageContext: {
          id: "storyblokentry-299175701-default",
        },
      },
      {
        path: "/scientific-updates/efad-distance-learning",
        pageContext: {
          id: "storyblokentry-299154297-default",
        },
      },
      {
        path: "/scientific-updates/calculate-the-planetary-health-impact-of-your-diet",
        pageContext: {
          id: "storyblokentry-299060268-default",
        },
      },
      {
        path: "/scientific-updates/healthy-plant-based-diets-mitigate-bone-loss",
        pageContext: {
          id: "storyblokentry-298714649-default",
        },
      },
      {
        path: "/scientific-updates/74-of-fbdg-have-a-long-way-to-go-to-meet-sustainable-standards",
        pageContext: {
          id: "storyblokentry-249126051-default",
        },
      },
      {
        path: "/scientific-updates/eat-lancet-planetary-health-diet-evidence-of-improved-health-outcomes-in-practice",
        pageContext: {
          id: "storyblokentry-249125239-default",
        },
      },
      {
        path: "/scientific-updates/healthy-plant-foods-can-half-the-risk-of-nafld",
        pageContext: {
          id: "storyblokentry-249118261-default",
        },
      },
      {
        path: "/scientific-updates/income-education-and-occupation-key-drivers-to-adopting-sustainable-diets",
        pageContext: {
          id: "storyblokentry-248539054-default",
        },
      },
      {
        path: "/scientific-updates/soya-health-the-ultimate-guide-for-health-professionals",
        pageContext: {
          id: "storyblokentry-187604130-default",
        },
      },
      {
        path: "/scientific-updates/environmental-impact-of-57-000-new-composite-foods",
        pageContext: {
          id: "storyblokentry-187595351-default",
        },
      },
      {
        path: "/scientific-updates/can-people-afford-to-switch-to-sustainable-diets",
        pageContext: {
          id: "storyblokentry-183414054-default",
        },
      },
      {
        path: "/scientific-updates/soya-foods-with-naturally-occurring-isoflavones-are-safe",
        pageContext: {
          id: "storyblokentry-176016835-default",
        },
      },
      {
        path: "/scientific-updates/are-plant-based-diets-nutritionally-adequate",
        pageContext: {
          id: "storyblokentry-176012195-default",
        },
      },
      {
        path: "/scientific-updates/wide-variety-of-different-types-of-fruit-recommended-for-cardiovascular-health",
        pageContext: {
          id: "storyblokentry-174723760-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-prolongs-lifespan-by-two-years",
        pageContext: {
          id: "storyblokentry-174722233-default",
        },
      },
      {
        path: "/scientific-updates/mediterranean-diets-associated-with-improved-male-fertility",
        pageContext: {
          id: "storyblokentry-174719107-default",
        },
      },
      {
        path: "/scientific-updates/healthy-plant-based-diets-associated-with-less-weight-gain-over-time",
        pageContext: {
          id: "storyblokentry-174146112-default",
        },
      },
      {
        path: "/scientific-updates/global-environmental-impacts-of-a-shift-from-current-to-sustainable-eating-habits",
        pageContext: {
          id: "storyblokentry-174146100-default",
        },
      },
      {
        path: "/scientific-updates/body-weight-and-waistlines-benefit-from-a-shift-towards-a-more-plant-based-diet",
        pageContext: {
          id: "storyblokentry-174146080-default",
        },
      },
      {
        path: "/scientific-updates/effect-of-soya-on-metabolic-syndrome-and-cardiovascular-risk-factors",
        pageContext: {
          id: "storyblokentry-167968911-default",
        },
      },
      {
        path: "/scientific-updates/impact-of-plant-protein-in-particular-soya-on-aspects-of-the-metabolic-syndrome",
        pageContext: {
          id: "storyblokentry-167967454-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-foods-dietary-fibre-and-heart-disease-risk-in-a-large-european-cohort-study",
        pageContext: {
          id: "storyblokentry-167965857-default",
        },
      },
      {
        path: "/scientific-updates/exposure-to-social-media-food-messages-has-an-impact-on-eating-habits-of-adolescents",
        pageContext: {
          id: "storyblokentry-167933822-default",
        },
      },
      {
        path: "/scientific-updates/comparing-appetite-control-and-satiety-effects-for-soya-and-meat-based-high-protein-diets",
        pageContext: {
          id: "storyblokentry-167913612-default",
        },
      },
      {
        path: "/scientific-updates/rewarding-teens-for-healthier-snack-choices-can-help-improve-dietary-habits",
        pageContext: {
          id: "storyblokentry-167899430-default",
        },
      },
      {
        path: "/scientific-updates/are-teenagers-ready-to-adopt-a-plant-based-diet",
        pageContext: {
          id: "storyblokentry-167871001-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-is-cost-effective",
        pageContext: {
          id: "storyblokentry-167849107-default",
        },
      },
      {
        path: "/scientific-updates/is-a-diet-low-in-greenhouse-gas-emissions-a-nutritious-diet",
        pageContext: {
          id: "storyblokentry-167848478-default",
        },
      },
      {
        path: "/scientific-updates/daily-soya-drink-intake-may-alleviate-vasomotor-symptoms",
        pageContext: {
          id: "storyblokentry-167523497-default",
        },
      },
      {
        path: "/scientific-updates/behavioural-nudges-effective-in-encouraging-healthy-eating-in-schools",
        pageContext: {
          id: "storyblokentry-167467451-default",
        },
      },
      {
        path: "/scientific-updates/longer-term-soya-nut-consumption-improves-cerebrovascular-function",
        pageContext: {
          id: "storyblokentry-167386091-default",
        },
      },
      {
        path: "/scientific-updates/soya-improves-vascular-function-and-cardiometabolic-risk-markers-in-older-adults",
        pageContext: {
          id: "storyblokentry-167185908-default",
        },
      },
      {
        path: "/scientific-updates/systematic-review-shows-soya-intake-is-associated-with-lowering-blood-pressure-in-adults",
        pageContext: {
          id: "storyblokentry-164617389-default",
        },
      },
      {
        path: "/scientific-updates/how-social-media-food-marketing-communication-is-related-to-adolescent-eating",
        pageContext: {
          id: "storyblokentry-160757551-default",
        },
      },
      {
        path: "/scientific-updates/health-benefits-of-plant-based-eating-the-way-forward-and-how-to-implement-it-in-daily-life",
        pageContext: {
          id: "storyblokentry-156409266-default",
        },
      },
      {
        path: "/scientific-updates/one-blue-dot",
        pageContext: {
          id: "storyblokentry-155897043-default",
        },
      },
      {
        path: "/scientific-updates/adoption-of-national-dietary-guidelines-can-not-only-improve-health-but-can-be-ecologically-favourable",
        pageContext: {
          id: "storyblokentry-155856918-default",
        },
      },
      {
        path: "/scientific-updates/labelling-soya-foods-as-ultra-processed-is-unhelpful",
        pageContext: {
          id: "storyblokentry-147784879-default",
        },
      },
      {
        path: "/scientific-updates/which-dietary-changes-are-critical-to-reduce-our-environmental-burden",
        pageContext: {
          id: "storyblokentry-146383237-default",
        },
      },
      {
        path: "/scientific-updates/the-muscle-power-of-soya-protein",
        pageContext: {
          id: "storyblokentry-146383114-default",
        },
      },
      {
        path: "/scientific-updates/soya-protein-is-effective-for-building-muscle-mass-and-strength",
        pageContext: {
          id: "storyblokentry-146383084-default",
        },
      },
      {
        path: "/scientific-updates/soya-foods-get-the-all-the-clear-for-breast-cancer",
        pageContext: {
          id: "storyblokentry-146381823-default",
        },
      },
      {
        path: "/scientific-updates/the-saturated-fat-debate",
        pageContext: {
          id: "storyblokentry-146380578-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-diabetes",
        pageContext: {
          id: "storyblokentry-146356431-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-cholesterol",
        pageContext: {
          id: "storyblokentry-146355722-default",
        },
      },
      {
        path: "/scientific-updates/soya-and-heart-health",
        pageContext: {
          id: "storyblokentry-146350817-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-healthy-ageing",
        pageContext: {
          id: "storyblokentry-146349502-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-weight-management",
        pageContext: {
          id: "storyblokentry-145465585-default",
        },
      },
      {
        path: "/scientific-updates/meta-analysis-confirms-soya-protein-cholesterol-lowering-effect",
        pageContext: {
          id: "storyblokentry-145465569-default",
        },
      },
      {
        path: "/scientific-updates/the-healthiness-and-sustainability-of-national-and-global-food-based-dietary-guidelines",
        pageContext: {
          id: "storyblokentry-145465537-default",
        },
      },
      {
        path: "/scientific-updates/eat-lancet-s-planetary-health-diets-plant-based-food-as-part-of-the-solution",
        pageContext: {
          id: "storyblokentry-145349630-default",
        },
      },
      {
        path: "/scientific-updates/the-plant-based-plan-10-scientific-reasons-for-plant-based-eating",
        pageContext: {
          id: "storyblokentry-145349153-default",
        },
      },
      {
        path: "/scientific-updates/sustainable-diets-for-better-human-and-planetary-health",
        pageContext: {
          id: "storyblokentry-145331977-default",
        },
      },
      {
        path: "/scientific-updates/reversing-the-nitrogen-crisis-with-sustainable-diets-report",
        pageContext: {
          id: "storyblokentry-144837325-default",
        },
      },
      {
        path: "/scientific-updates/reversing-fatty-liver-disease-with-healthy-lifestyle",
        pageContext: {
          id: "storyblokentry-144836000-default",
        },
      },
      {
        path: "/scientific-updates/changing-behaviour-from-policy-to-table-moving-the-dial-towards-healthy-sustainable-diets",
        pageContext: {
          id: "storyblokentry-144835916-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-cardiometabolic-health",
        pageContext: {
          id: "storyblokentry-144834363-default",
        },
      },
      {
        path: "/scientific-updates/interaction-of-plant-based-diets-and-gut-microbiota",
        pageContext: {
          id: "storyblokentry-144471383-default",
        },
      },
      {
        path: "/scientific-updates/intake-of-micronutrients-and-fatty-acids-of-vegetarian-vegan-and-omnivorous-children",
        pageContext: {
          id: "storyblokentry-144465067-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-eating-and-carbon-footprint",
        pageContext: {
          id: "storyblokentry-143748211-default",
        },
      },
      {
        path: "/scientific-updates/soya-food-and-health-an-overview",
        pageContext: {
          id: "storyblokentry-141949377-default",
        },
      },
      {
        path: "/scientific-updates/plant-based-diets-and-cancer",
        pageContext: {
          id: "storyblokentry-141947594-default",
        },
      },
      {
        path: "/scientific-updates/healthful-plant-based-eating-is-associated-with-lower-adiposity-and-inflammation",
        pageContext: {
          id: "storyblokentry-141944508-default",
        },
      },
      {
        path: "/board-member/prof-joan-trabal",
        pageContext: {
          id: "storyblokentry-248007107-default",
        },
      },
      {
        path: "/board-member/prof-kurt-widhalm",
        pageContext: {
          id: "storyblokentry-158327549-default",
        },
      },
      {
        path: "/board-member/prof-helmut-heseker",
        pageContext: {
          id: "storyblokentry-158327540-default",
        },
      },
      {
        path: "/board-member/prof-peter-clarys",
        pageContext: {
          id: "storyblokentry-158327512-default",
        },
      },
      {
        path: "/board-member/harry-aiking",
        pageContext: {
          id: "storyblokentry-158327463-default",
        },
      },
      {
        path: "/board-member/prof-anna-arnoldi",
        pageContext: {
          id: "storyblokentry-156461521-default",
        },
      },
      {
        path: "/board-member/ian-rowland",
        pageContext: {
          id: "storyblokentry-150991929-default",
        },
      },
      {
        path: "/board-member/cesare-sirtori",
        pageContext: {
          id: "storyblokentry-150991892-default",
        },
      },
      {
        path: "/research-grants/call-for-research-grant-applications",
        pageContext: {
          id: "storyblokentry-180507867-default",
        },
      },
      {
        path: "/scientific-updates/planet",
        pageContext: {
          category: "planet",
          categoryName: "Planet",
        },
      },
      {
        path: "/scientific-updates/health",
        pageContext: {
          category: "health",
          categoryName: "Health",
        },
      },
      {
        path: "/scientific-updates/nutrients",
        pageContext: {
          category: "nutrients",
          categoryName: "Nutrients",
        },
      },
      {
        path: "/scientific-updates/dietary-patterns",
        pageContext: {
          category: "dietary-patterns",
          categoryName: "Dietary patterns & FBDG",
        },
      },
      {
        path: "/scientific-updates/dietary-behaviour",
        pageContext: {
          category: "dietary-behaviour",
          categoryName: "Dietary behaviour",
        },
      },
      {
        path: "/scientific-updates/soya",
        pageContext: {
          category: "soya",
          categoryName: "Soya",
        },
      },
      {
        path: "/events/sustainable-diets-key-updates-from-research-policy-and-action",
        pageContext: {
          id: "storyblokentry-279386102-default",
        },
      },
      {
        path: "/events/soya-series-part-3-of-3-soya-products-future-opportunities-novel-applications",
        pageContext: {
          id: "storyblokentry-221710011-default",
        },
      },
      {
        path: "/events/the-truth-about-plant-protein",
        pageContext: {
          id: "storyblokentry-198511965-default",
        },
      },
      {
        path: "/events/soy-series-part-1-of-3-why-consider-soy-alternatives-to-dairy-and-meat-building-a-healthy-sustainable-diet",
        pageContext: {
          id: "storyblokentry-183788570-default",
        },
      },
      {
        path: "/events/soy-series-part-2-of-3-soy-isoflavones-in-the-endocrine-system",
        pageContext: {
          id: "storyblokentry-183074766-default",
        },
      },
      {
        path: "/events/is-a-sustainable-diet-more-expensive",
        pageContext: {
          id: "storyblokentry-178234676-default",
        },
      },
      {
        path: "/events/sustainable-healthy-eating-what-does-this-really-look-like",
        pageContext: {
          id: "storyblokentry-178234648-default",
        },
      },
      {
        path: "/events/plant-based-eating-and-cardiometabolic-health-symposium",
        pageContext: {
          id: "storyblokentry-178234580-default",
        },
      },
      {
        path: "/events/cardiometabolic-health-plant-based-eating-series-part-2",
        pageContext: {
          id: "storyblokentry-178234502-default",
        },
      },
      {
        path: "/events/event-sandbox-dev",
        pageContext: {
          id: "storyblokentry-183614171-default",
        },
      },
      {
        path: "/events/cardiometabolic-health-plant-based-eating-series-part-1",
        pageContext: {
          id: "storyblokentry-178234437-default",
        },
      },
      {
        path: "/events/non-alcoholic-fatty-liver-disease-and-nutrition",
        pageContext: {
          id: "storyblokentry-172938487-default",
        },
      },
      {
        path: "/events/the-moment-for-plant-based-eating-is-now",
        pageContext: {
          id: "storyblokentry-172938479-default",
        },
      },
      {
        path: "/events/changing-behaviour-from-policy-to-table-moving-the-dial-towards-healthy-sustainable-diets",
        pageContext: {
          id: "storyblokentry-172938477-default",
        },
      },
      {
        path: "/events/diet-change-the-impact-on-agriculture-and-ecological-conditions",
        pageContext: {
          id: "storyblokentry-149531977-default",
        },
      },
      {
        path: "/resources/books",
        pageContext: {
          category: "books",
          categoryName: "Books",
          dataSourceName: "resources",
        },
      },
      {
        path: "/resources/infographics",
        pageContext: {
          category: "infographics",
          categoryName: "Infographics",
          dataSourceName: "resources",
        },
      },
      {
        path: "/resources/videos",
        pageContext: {
          category: "videos",
          categoryName: "Videos",
          dataSourceName: "resources",
        },
      },
      {
        path: "/dev-404-page/",
        pageContext: {},
      },
      {
        path: "/404/",
        pageContext: {},
      },
      {
        path: "/404.html",
        pageContext: {},
      },
      {
        path: "/newsletter/",
        pageContext: {},
      },
      {
        path: "/search/",
        pageContext: {},
      },
      {
        path: "/thank-you/",
        pageContext: {},
      },
      {
        path: "/ui-kit/",
        pageContext: {},
      },
    ],
  },
  site: {
    siteMetadata: {
      siteUrl: "https://www.alprofoundation.org",
    },
  },
};

console.log("site", sbData.site);
console.log("site", sbData.allSitePage);

const serialize = ({ site, allSitePage }: TAllSitePage & TSiteData) => {
  const exclude = ["sandbox", "ui-kit"];
  return allSitePage.nodes
    .filter((elem) => hasProperty(elem.pageContext))
    .map((elem) => {
      return {
        url: site.siteMetadata.siteUrl + elem.path,
        changefreq: "daily",
        priority: 0.7,
      };
    })
    .filter((elem) => !elem.url.includes("sandbox"));
};

console.log("Map", serialize(sbData));
console.log(["sandbox", "ui-kit"]);
