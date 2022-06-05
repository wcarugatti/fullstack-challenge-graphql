import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import Subscription from "./Subscription.model";
import { IPaymentGateway } from "./../../../entities/IPaymentGateway";

@Table({
  underscored: true,
  timestamps: false,
})
class PaymentGateway extends Model implements IPaymentGateway {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @HasMany(() => Subscription)
  subscriptions: Subscription[];
}

export default PaymentGateway;
