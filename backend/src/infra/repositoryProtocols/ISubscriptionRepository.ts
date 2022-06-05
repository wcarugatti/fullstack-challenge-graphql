import { ISubscription } from "../../entities/ISubscription";

export interface ISubscriptionRepository {
  findSubscriptionByCustomer(customerId: string): Promise<ISubscription>;

  findSubscriptionByCustomerAndSoftDelete(customerId: string): Promise<void>;

  createSubscription({
    customerId,
    planId,
    paymentGatewayId,
  }: Partial<ISubscription>): Promise<ISubscription>;

  updateSubscription({
    customerId,
    planId,
    paymentGatewayId,
  }: Partial<ISubscription>): Promise<ISubscription>;
}
