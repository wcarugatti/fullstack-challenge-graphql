import CustomerRepository from "../../../infra/postgres/repositories/CustomerRepository";
import { ICustomer } from "./../../../entities/ICustomer";
export default {
  Query: {
    getCustomer: async (_, { id }): Promise<ICustomer> => {
      return await CustomerRepository.findCustomerById(id);
    },
  },
  Mutation: {
    createCustomer: async (
      _,
      { firstName, lastName, role, email },
    ): Promise<ICustomer> => {
      const customer = await CustomerRepository.createCustomer({
        firstName,
        lastName,
        role,
        email,
      });
      return customer;
    },
  },
};
