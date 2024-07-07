DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('ADMIN', 'BASIC');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_category" (
	"post_id" uuid NOT NULL,
	"category_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"average_rating" real DEFAULT 0 NOT NULL,
	"author_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_preference" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email_updates" boolean DEFAULT false,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userInfo" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "userInfo" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "userInfo" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "userInfo" ALTER COLUMN "email" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "userInfo" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "userInfo" ADD COLUMN "user_role" "user_role" DEFAULT 'BASIC' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_category" ADD CONSTRAINT "post_category_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_category" ADD CONSTRAINT "post_category_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_userInfo_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."userInfo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_preference" ADD CONSTRAINT "user_preference_user_id_userInfo_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."userInfo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "emailIndex" ON "userInfo" USING btree ("email");--> statement-breakpoint
ALTER TABLE "userInfo" ADD CONSTRAINT "userInfo_email_unique" UNIQUE("email");