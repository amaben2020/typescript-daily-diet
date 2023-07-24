import dotenv from "dotenv";

import { SupabaseClient, createClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_ADMIN_SECRET_KEY ?? "";

const email = "someone1@email.com";
const password = "xvmnVuQmFZp1LVcvDLLxD";
abstract class SupabaseService {
  private client: SupabaseClient;
  constructor() {
    this.client = createClient(supabaseUrl, supabaseKey);
  }

  async signin(email: string, password: string) {
    let { data, error } = await this.client.auth.signUp({
      email,
      password,
    });

    // do something with data or error
    try {
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }
}

// abstract classes cannot be instantiated but extended by another class
class Supabase extends SupabaseService {}

const supabase = new Supabase();

// supabase.signin(email, password);
// supabase2

const breakStuff = (name: string) => {
  switch (name) {
    case "ben":
      console.log("Yeah");

      break;

    case "not-ben":
      {
        console.log("ok");
      }

      break;
    default:
      break;
  }
};
console.log(breakStuff("not-ben"));
