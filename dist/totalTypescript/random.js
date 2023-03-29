"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactHeader = exports.buttonHeader = exports.headerLinks = void 0;
var uppercaser1 = function (s) {
    var words = s.split('');
    console.log(words);
    return words[0].toUpperCase() + words.slice(1).join("").toLowerCase();
};
console.log(uppercaser1("nnoxx"));
var uppercaser2 = function (s) {
    return s.split("")[0].toUpperCase() + s.substring(1).toLowerCase();
};
console.log(uppercaser2("nnoxx"));
var delayy = function (fn) {
    return new Promise(function (resolve, reject) {
        return setTimeout(function () {
            resolve(fn('yeah'));
        }, 200);
    });
};
var delayer = function (time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
};
console.log('delayer', delayer(500));
// Models to be built:
// 1. ItemsWithDetail(s): This model would be used to create a list of items that have an Icon, Title and Description. They would be referenced in the ColumnsDropdowns (TwoColumnsDropdown & MegaColumnsDropdown )
//2. Help Center model : This model would be comprised of: a. Icon, b. Text and c. Email fields.
//3. HeaderLinks model: This model would be composed of:
//4. megaDropdown model: This model would be composed of:
// build a content dropdown
var TwoColumnsDropdown = [
    // reference the ItemsWithDetail model
    {
        icon: 'headphone',
        title: 'Industrial Computer Repairs',
        details: 'All industrial computer purchases made with ADEK receive a standard 2-year warranty and access to our technical support team throughout your systems’ lifetime. ADEK will repair most PC-based controllers on an industry-and-brand-agnostic basis, and provide you with a comprehensive repair or replacement plan.',
    },
    {
        icon: 'headphone',
        title: 'OEM Services',
        details: 'All industrial computer purchases made with ADEK receive a standard 2-year warranty and access to our technical support team throughout your systems’ lifetime. ADEK will repair most PC-based controllers on an industry-and-brand-agnostic basis, and provide you with a comprehensive repair or replacement plan.',
    },
];
var MegaColumnsDropdown = {
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
var megaDropdown = [
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
var HelpCenter = {
    icon: 'cube',
    text: 'Do you need help?',
    email: 'sales@adek.com',
};
exports.headerLinks = [
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
exports.buttonHeader = { title: 'Contact Us', url: '/path' };
// This should reference a generic content model
exports.contactHeader = [
    { title: '1 (800) 431-2335', icon: 'phone' },
    { title: 'sales@adek', icon: 'mail' },
];
var incrementOnMobile = function (index) {
    return exports.headerLinks[index];
};
console.log('Stuff to render', incrementOnMobile(0));
console.log('Products', incrementOnMobile(1));
var isMega = ((_a = incrementOnMobile(1)) === null || _a === void 0 ? void 0 : _a.contentMega) ? true : false;
console.log(isMega ? "<MegaHamburger/>" : "<Standard/>");
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
var items = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' },
    { id: 4, title: 'Fourth' },
];
var deleteItem = function (item, itemId) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var elem = items_1[_i];
        if (elem.id === itemId) {
            //@ts-ignore
            // return item.filter(elem => elem.id !== itemId)
            return item.splice(itemId, 1).concat(item.splice(itemId - 1, item.length - 1));
        }
    }
};
console.log(deleteItem(items, 3));
console.log([0, 1, 2, 3].slice(1, 4));
var object = {
    a: "a"
};
console.log(object);
var routes = {
    AUTH: {
        path: "/auth",
    },
};
console.log(routes.AUTH.path);
var nestedObject = {
    amaben: {
        name: "amaben",
        sex: " male",
    }
};
console.log(nestedObject.amaben);
var multiArray = [{ name: "amaben", sex: "male" }, { name: "ben", sex: "female" }];
var phoneBooth = {
    name: "Amaben",
    phoneNumber: "+234",
    scores: {
        inputs: ["First", 33, 3311]
    }
};
console.log('phoneBooth', phoneBooth);
//# sourceMappingURL=random.js.map