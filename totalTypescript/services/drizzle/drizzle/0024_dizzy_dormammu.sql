DO $$ BEGIN
 CREATE TYPE "public"."job_status" AS ENUM('NOTIFYING', 'ACCEPTED', 'REJECTED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
