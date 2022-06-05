import CustomerRepositoryPostgres from "../../../infra/postgres/repositories/CustomerRepositoryPostgres";
import { ICustomer } from "../../../entities/ICustomer";
import SubscriptionRepositoryPostgres from "../../../infra/postgres/repositories/SubscriptionRepositoryPostgres";
import { ApolloError } from "apollo-server-core";
export default {
  Query: {
    getCustomer: async (_, { id }): Promise<ICustomer> => {
      return await CustomerRepositoryPostgres.findCustomerById(id);
    },
  },
  Mutation: {
    createCustomer: async (
      _,
      { firstName, lastName, role, email, planId, paymentGatewayId },
    ): Promise<ICustomer> => {
      const customer = await CustomerRepositoryPostgres.createCustomer({
        firstName,
        lastName,
        role,
        email,
      });
      if (planId && paymentGatewayId) {
        await SubscriptionRepositoryPostgres.createSubscription({
          customerId: customer.id,
          planId,
          paymentGatewayId,
        });
      }
      return customer;
    },
    updateCustomer: async (
      _,
      { id, firstName, lastName, role, email, planId, paymentGatewayId },
    ): Promise<ICustomer> => {
      const customer = await CustomerRepositoryPostgres.updateCustomer({
        id,
        firstName,
        lastName,
        role,
        email,
      });

      if (!customer) {
        throw new ApolloError("Customer not found");
      }

      if (planId || paymentGatewayId) {
        await SubscriptionRepositoryPostgres.updateSubscription({
          customerId: customer.id,
          planId,
          paymentGatewayId,
        });
      }
      return customer;
    },
    removeCustomer: async (_, { id }): Promise<{ ok: boolean }> => {
      try {
        const result = await CustomerRepositoryPostgres.removeCustomer(id);
        return { ok: result };
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Customer: {
    subscription: async (parent) => {
      return await SubscriptionRepositoryPostgres.findSubscriptionByCustomer(
        parent.id,
      );
    },
  },
};
