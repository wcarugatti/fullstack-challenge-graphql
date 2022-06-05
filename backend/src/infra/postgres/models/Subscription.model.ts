import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  DataType,
  Default,
} from "sequelize-typescript";
import { ISubscription } from "../../../entities/ISubscription";
import Customer from "./Customer.model";
import PaymentGateway from "./PaymentGateway.model";
import Plan from "./Plan.model";

@Table({
  underscored: true,
  paranoid: true,
})
class Subscription extends Model implements ISubscription {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Customer)
  @Column
  customerId: string;

  @ForeignKey(() => Plan)
  @Column
  planId: string;

  @ForeignKey(() => PaymentGateway)
  @Column
  paymentGatewayId: string;

  @Column(DataType.DATEONLY)
  createdAt: Date;

  @Column(DataType.DATEONLY)
  updatedAt: Date;

  @Column(DataType.DATEONLY)
  endsAt: Date;

  @Column(DataType.DATEONLY)
  deletedAt: Date;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Plan)
  plan: Plan;

  @BelongsTo(() => PaymentGateway)
  paymentGateway: PaymentGateway;
}

export default Subscription;
