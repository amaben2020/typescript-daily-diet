ALTER TABLE "job_request" ADD COLUMN "job_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_request" ADD CONSTRAINT "job_request_job_id_provider_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."provider"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
