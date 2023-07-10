import dotenv from "dotenv";

import { SupabaseClient, createClient } from "@supabase/supabase-js";

dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_ADMIN_SECRET_KEY ?? "";

const email = "someone1@email.com";
const password = "xvmnVuQmFZp1LVcvDLLxD";
class SupabaseService {
  private client: SupabaseClient;
  constructor() {
    this.client = createClient(supabaseUrl, supabaseKey);
  }

  async signin(email: string, password: string) {
    let { data, error } = await this.client.auth.signUp({
      email,
      password,
    });

    console.log("Data", data);
    console.log(error);

    try {
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }
}

const supabase = new SupabaseService();

supabase.signin(email, password);
