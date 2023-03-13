//https://javascript.plainenglish.io/level-up-your-typescript-game-with-these-6-advanced-features-e5e9b232d990

// Advanced: Mapped Types in Typescript help us not repeat ourselves when we need to base a type on another type. Significantly, when those types need to remain in sync, they can help us a lot.

// Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time

type ApplicationConfig = {
  email: string;
  mainColor: string;
  darkMode: boolean;
};

// typing it this way means we always have to update this file
type AppPermissions = {
  changeemail: boolean;
  changemainColor: boolean;
  changedarkMode: boolean;
};

// So, what's the problem here? We must adjust the permissions accordingly each time we add a new configuration.

// we use index signatures because we do not know what values would be added to permissions

//in: used to check whether a property belongs to a particular object i.e Copy
// propertyName in objectVariable returns true or false depending on whether the property belongs to the object.

type Contact = {
  firstName: string;
};

function sayHello(contact: Contact) {
  if ("firstName" in contact) {
    console.log("Hello " + contact.firstName);
  }
}

type TAppPermissions = {
  [Type in keyof ApplicationConfig as `change${Type}`]: boolean;
};

// filtering away darkmode permission, Exclude, Omit, Pick

type AppPermissionsWithoutDarkmode = {
  [Property in keyof AppConfig as Exclude<Property, "darkMode">]: boolean;
};
const permission: TAppPermissions = {
  changeemail: false,
  changemainColor: false,
  changedarkMode: false,
};

console.log(permission.changemainColor);
