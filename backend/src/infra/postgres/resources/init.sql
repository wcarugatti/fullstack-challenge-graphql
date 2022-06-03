CREATE TABLE IF NOT EXISTS "customer" (
  "id" VARCHAR(255),
  "first_name" VARCHAR(255),
  "last_name" VARCHAR(255),
  "role" VARCHAR(255),
  "email" VARCHAR(255),
  "created_at" VARCHAR(255),
  "updated_at" VARCHAR(255),
  "deleted_at" VARCHAR(255),
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "plan" (
  "id" VARCHAR(255),
  "name" VARCHAR(255),
  "bylling_cycle" INTEGER,
  "price" FLOAT,
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "payment_gateway" (
  "id" VARCHAR(255),
  "name" VARCHAR(255),
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "subscription" (
  "id" VARCHAR(255),
  "customer" VARCHAR(255),
  "plan" VARCHAR(255),
  "payment_gateway" VARCHAR(255),
  "created_at" VARCHAR(255),
  "updated_at" VARCHAR(255),
  "deleted_at" VARCHAR(255),
  PRIMARY KEY ("id", "customer", "plan", "payment_gateway"),
  FOREIGN KEY ("customer") REFERENCES "customer" (id),
  FOREIGN KEY ("plan") REFERENCES "plan" (id),
  FOREIGN KEY ("payment_gateway") REFERENCES "payment_gateway" (id)
);