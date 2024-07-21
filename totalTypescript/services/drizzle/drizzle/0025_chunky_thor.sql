DO $$ BEGIN
 CREATE TYPE "public"."job_request_status" AS ENUM('ACCEPT', 'DECLINE', 'UNREAD');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job_request" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer,
	"job_request_status" "job_request_status" DEFAULT 'UNREAD' NOT NULL,
	"distance" double precision,
	"duration" double precision
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_request" ADD CONSTRAINT "job_request_provider_id_provider_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."provider"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
