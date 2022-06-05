import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { IPlan } from "../../../entities/IPlan";
import Subscription from "./Subscription.model";

@Table({
  underscored: true,
  timestamps: false,
})
class Plan extends Model implements IPlan {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  byllingCycle: number;

  @Column(DataType.FLOAT)
  price: number;

  @HasMany(() => Subscription)
  subscriptions: Subscription[];
}

export default Plan;
