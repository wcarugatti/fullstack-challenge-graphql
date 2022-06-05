CREATE TABLE IF NOT EXISTS "customers" (
  "id" VARCHAR(255),
  "first_name" VARCHAR(255),
  "last_name" VARCHAR(255),
  "role" VARCHAR(255),
  "email" VARCHAR(255),
  "created_at" DATE,
  "updated_at" DATE,
  "deleted_at" DATE,
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "plans" (
  "id" VARCHAR(255),
  "name" VARCHAR(255),
  "bylling_cycle" INTEGER,
  "price" FLOAT,
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "payment_gateways" (
  "id" VARCHAR(255),
  "name" VARCHAR(255),
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "subscriptions" (
  "id" VARCHAR(255),
  "customer_id" VARCHAR(255),
  "plan_id" VARCHAR(255),
  "payment_gateway_id" VARCHAR(255),
  "created_at" DATE,
  "updated_at" DATE,
  "ends_at" DATE,
  "deleted_at" DATE,
  PRIMARY KEY (
    "id",
    "customer_id",
    "plan_id",
    "payment_gateway_id"
  ),
  FOREIGN KEY ("customer_id") REFERENCES "customers" (id),
  FOREIGN KEY ("plan_id") REFERENCES "plans" (id),
  FOREIGN KEY ("payment_gateway_id") REFERENCES "payment_gateways" (id)
);

INSERT INTO
  "plans"
VALUES
  ('plan1_1', 'The Creative', 1, 29.00),
  ('plan1_2', 'The Creative', 2, 278.00),
  ('plan2_1', 'Adventurer', 1, 108.00),
  ('plan2_2', 'Adventurer', 2, 1231.20),
  ('plan3_1', 'Super Star', 1, 325.00),
  ('plan3_2', 'Super Star', 2, 3705.00);

INSERT INTO
  "payment_gateways"
VALUES
  ('pg1', 'Stripe'),
  ('pg2', 'PayPal');