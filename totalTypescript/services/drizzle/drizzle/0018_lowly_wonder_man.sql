CREATE TABLE IF NOT EXISTS "job" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer,
	"payment_sum" numeric DEFAULT '0',
	"payment_sum_cents" integer DEFAULT 0 NOT NULL,
	"balance_cents" integer DEFAULT 0 NOT NULL,
	"is_abandoned" boolean DEFAULT false,
	"customer_ref" varchar(256),
	"provider_callout_cents" integer DEFAULT 0 NOT NULL,
	"provider_rate_cents" integer DEFAULT 0 NOT NULL,
	"charge_callout_cents" integer NOT NULL,
	"charge_rate_cents" integer NOT NULL,
	"charge_fuel_surcharge_cents" integer NOT NULL,
	"job_statuses" "job_statuses"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provider" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"notifications" boolean DEFAULT false,
	"phone_number" numeric NOT NULL,
	"accepted_rate" real,
	CONSTRAINT "provider_email_unique" UNIQUE("email"),
	CONSTRAINT "provider_city_unique" UNIQUE("city"),
	CONSTRAINT "provider_state_unique" UNIQUE("state")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job" ADD CONSTRAINT "job_provider_id_provider_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."provider"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
