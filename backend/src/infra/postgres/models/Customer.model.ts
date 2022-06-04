import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  DataType,
  Default
} from "sequelize-typescript";
import Subscription from "./Subscription.model";
import { ICustomer } from "./../../../entities/ICustomer";

@Table({
  underscored: true,
})
class Customer extends Model implements ICustomer {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  role: string;

  @Column
  email: string;

  @Column(DataType.DATEONLY)
  createdAt: Date;

  @Column(DataType.DATEONLY)
  updatedAt: Date;

  @Column(DataType.DATEONLY)
  deletedAt: Date;

  @HasMany(() => Subscription)
  subscriptions: Subscription[];
}

export default Customer;
