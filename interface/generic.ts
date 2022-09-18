// Generic interface syntax#
// We can pass types into an interface that are used within its definition like we can to a function. The syntax for a generic interface is below:

// interface InterfaceName<T1, T2, ...> {
//     ...
// }

// A common use case for a generic interface is a generic form interface. This is because all forms have values, default values, validation rules, etc. but the specific fields differ from form to form.
interface Form<T> {
  values: T;
}

interface Contact2 {
  name: string;
  email: string;
}

interface Form<T> {
  values: T;
}

const contactForm = {
  values: {
    name: "Bob",
    email: "bob@someemail.com",
  },
};

console.log(contactForm);

interface Form<T> {
  errors: {
    [P in keyof T]?: string;
  };
  values: T;
}

// const contactForm: Form<Contact> = {
//   errors: {},
//   //  values: { ... }
// };

// const contactForm2: Form<Contact2> = {
//   errors: {
//     email: "This must be a valid email address",
//   },
//    values: { ... }
// };

const user3 = {
  ["name"]: "Bob",
};

console.log(user3);
