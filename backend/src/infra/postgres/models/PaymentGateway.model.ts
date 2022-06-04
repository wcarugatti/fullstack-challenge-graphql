import { Table, Column, Model, PrimaryKey, HasMany } from 'sequelize-typescript'
import Subscription from './Subscription.model';

@Table({
  underscored: true,
  timestamps: false
})
class PaymentGateway extends Model {
  @PrimaryKey
  @Column
  id: string

  @Column
  name: string

  @HasMany(()=> Subscription)
  subscriptions: Subscription[]
}

export default PaymentGateway