ALTER TABLE "posts" DROP CONSTRAINT "posts_author_id_userInfo_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_userInfo_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."userInfo"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
