async function getArr(a: number, b: number): Promise<[number, string]> {
  const result = await Promise.all([
    Promise.resolve(5),
    Promise.resolve('hello'),
  ]);

  return result;
}

// 👇️ [number, string]
type E = Awaited<ReturnType<typeof getArr>>;

const uppercaser1 = (s: string): string => {

  const words = s.split('');
  console.log(words)
  return words[0].toUpperCase() + words.slice(1).join("").toLowerCase();
}

console.log(uppercaser1("nnoxx"))

const uppercaser2 = (s: string): string => {
  return s.split("")[0].toUpperCase() + s.substring(1).toLowerCase()
}

console.log(uppercaser2("nnoxx"))

const delayy = (fn: any) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(fn('yeah'))
    }, 200)
  })
}


const delayer = (time: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

console.log('delayer', delayer(500))


// Models to be built:
// 1. ItemsWithDetail(s): This model would be used to create a list of items that have an Icon, Title and Description. They would be referenced in the ColumnsDropdowns (TwoColumnsDropdown & MegaColumnsDropdown )

//2. Help Center model : This model would be comprised of: a. Icon, b. Text and c. Email fields.

//3. HeaderLinks model: This model would be composed of:

//4. megaDropdown model: This model would be composed of:

// build a content dropdown
const TwoColumnsDropdown = [
  // reference the ItemsWithDetail model
  {
    icon: 'headphone',
    title: 'Industrial Computer Repairs',
    details:
      'All industrial computer purchases made with ADEK receive a standard 2-year warranty and access to our technical support team throughout your systems’ lifetime. ADEK will repair most PC-based controllers on an industry-and-brand-agnostic basis, and provide you with a comprehensive repair or replacement plan.',
  },
  {
    icon: 'headphone',
    title: 'OEM Services',
    details:
      'All industrial computer purchases made with ADEK receive a standard 2-year warranty and access to our technical support team throughout your systems’ lifetime. ADEK will repair most PC-based controllers on an industry-and-brand-agnostic basis, and provide you with a comprehensive repair or replacement plan.',
  },
];

const MegaColumnsDropdown = {
  link: 'Computer Cases',
  menu: [
    // reference the ItemsWithDetail model
    {
      icon: 'headphone',
      title: 'Computer Cases',
      details: [
        'Mid-Tower & Desktop Cases',
        'Panel Mount Computer Cases',
        'Rack Mount Computer Cases',
      ],
    },
    {
      icon: 'headphone',
      title: 'Industrial Motherboards',
      details: [
        'ATX Motherboards with ISA Slots',
        'ATX Motherboards with PCI Slots',
        'Mini-ITX Industrial Motherboards',
      ],
    },
    {
      icon: 'headphone',
      title: 'BackPlanes',
      details: ['PICMG 1.0 Backplanes', 'PICMG 1.3 Backplanes'],
    },
    {
      icon: 'headphone',
      title: 'Single Board Computers',
      details: [
        'PICMG 1.0 Single Board Computers',
        'PICMG 1.3 Single Board Computers',
      ],
    },
  ],
};

const megaDropdown = [
  {
    link: 'Computer Cases',
    menuItem: MegaColumnsDropdown,
    isTwoColumn: false,
  },
  {
    link: 'Embedded Systems',
    // reference: Use the 2Columns model here
    menuItem: TwoColumnsDropdown,
    isTwoColumn: true,
  },
  {
    link: 'Industrial Computers',
    // reference: Use the 2Columns model here
    menuItem: TwoColumnsDropdown,
    isTwoColumn: true,
  },
  {
    link: 'Panel PCs & Monitors',
    // reference: Use the 2Columns model here
    menuItem: TwoColumnsDropdown,
    isTwoColumn: true,
  },
];

const HelpCenter = {
  icon: 'cube',
  text: 'Do you need help?',
  email: 'sales@adek.com',
};

export const headerLinks = [
  {
    title: 'Services',
    icon: 'chevron',
    url: '/',
    // reference: Use the 2Columns model here
    content: TwoColumnsDropdown,
    help: HelpCenter,
  },
  {
    title: 'Products',
    icon: 'chevron',
    url: '/',
    contentMega: megaDropdown,
    help: HelpCenter,
  },
  {
    title: 'Markets',
    url: '/markets',
  },
  {
    title: 'Support',
    url: '/support',
  },
];

export const buttonHeader = { title: 'Contact Us', url: '/path' };

// This should reference a generic content model
export const contactHeader = [
  { title: '1 (800) 431-2335', icon: 'phone' },
  { title: 'sales@adek', icon: 'mail' },
];


const incrementOnMobile = (index: number) => {

  return headerLinks[index]
}

console.log('Stuff to render', incrementOnMobile(0))
console.log('Products', incrementOnMobile(1))

const isMega = incrementOnMobile(1)?.contentMega ? true : false;

console.log(isMega ? "<MegaHamburger/>" : "<Standard/>")

// const handleSubmit = async () => {
//   let isSubmitSuccess = false;

//   try {
//     const { data } = await axios.post("", {
//       email,
//       password
//     })


//     switch (data.status) {
//       case 200:
//         isSubmitSuccess = true
//       default:
//         break;
//     }

//   } catch (error) {
//     isSubmitSuccess = false;
//   }

//   if (isSubmitSuccess) {
//     redirect('/');
//   }

// }

const items = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Third' },
  { id: 4, title: 'Fourth' },
]

const deleteItem = (item: any, itemId: number) => {
  for (let elem of items) {
    if (elem.id === itemId) {
      //@ts-ignore
      // return item.filter(elem => elem.id !== itemId)
      return item.splice(itemId, 1).concat(item.splice(itemId - 1, item.length - 1));
    }
  }
}
console.log(deleteItem(items, 3))

console.log([0, 1, 2, 3].slice(1, 4))

//satisfies
type ObjectA<T> = { a: T }

const object = {
  a: "a"
} satisfies ObjectA<string>

console.log(object)

//   type Route = { path: string; children?: Routes }
// type Routes = Record<string, Route>

// const routes = {
//   AUTH: {
//     path: "/auth",
//   },
// } satisfies Routes; // 😍