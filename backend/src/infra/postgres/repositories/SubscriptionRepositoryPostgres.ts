import { ISubscription } from "../../../entities/ISubscription";
import { ISubscriptionRepository } from "../../repositoryProtocols/ISubscriptionRepository";
import Subscription from "../models/Subscription.model";

class SubscriptionRepositoryPostgres implements ISubscriptionRepository {
  async findSubscriptionByCustomer(customerId: string): Promise<Subscription> {
    return await Subscription.findOne({
      where: {
        customerId,
      },
    });
  }

  async findSubscriptionByCustomerAndSoftDelete(
    customerId: string,
  ): Promise<void> {
    const subscription = await Subscription.findOne({
      where: {
        customerId,
      },
    });
    if (subscription) {
      await subscription.destroy();
    }
  }

  async createSubscription({
    customerId,
    planId,
    paymentGatewayId,
  }: Partial<ISubscription>): Promise<Subscription> {
    const subscription = await Subscription.create({
      customerId,
      planId,
      paymentGatewayId,
    });
    return subscription;
  }

  async updateSubscription({
    customerId,
    planId,
    paymentGatewayId,
  }: Partial<ISubscription>): Promise<Subscription> {
    const currentSubscription = await this.findSubscriptionByCustomer(
      customerId,
    );

    if (!currentSubscription) {
      return null;
    }

    if (planId && planId != currentSubscription.planId) {
      await currentSubscription.destroy();
      const newSubscription = await this.createSubscription({
        customerId,
        planId,
        paymentGatewayId:
          paymentGatewayId ?? currentSubscription.paymentGatewayId,
      });
      return newSubscription;
    }
    await currentSubscription.update({
      paymentGatewayId,
    });
    return currentSubscription;
  }
}

export default new SubscriptionRepositoryPostgres();
