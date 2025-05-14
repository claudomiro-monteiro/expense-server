CREATE TABLE IF NOT EXISTS "expenses" (
	"id" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"type" text NOT NULL,
	"category" text NOT NULL,
	"price" real NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
