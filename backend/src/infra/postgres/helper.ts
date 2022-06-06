import { Sequelize } from "sequelize-typescript";
import Customer from "./models/Customer.model";
import PaymentGateway from "./models/PaymentGateway.model";
import Plan from "./models/Plan.model";
import Subscription from "./models/Subscription.model";

export const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  dialect: "postgres",
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
});

sequelize.addModels([Customer, PaymentGateway, Plan, Subscription]);
