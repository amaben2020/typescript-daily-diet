// declare module "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface Global {
      appRoot: string;
    }
  }
  interface TCompanyData {
    sales: any;
  }
}

export {}; // make the file a module, to get rid of the warning
