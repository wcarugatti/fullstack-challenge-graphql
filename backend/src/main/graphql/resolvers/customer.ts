import CustomerRepositoryPostgres from "../../../infra/postgres/repositories/CustomerRepositoryPostgres";
import { ICustomer } from "../../../entities/ICustomer";
export default {
  Query: {
    getCustomer: async (_, { id }): Promise<ICustomer> => {
      return await CustomerRepositoryPostgres.findCustomerById(id);
    },
  },
  Mutation: {
    createCustomer: async (
      _,
      { firstName, lastName, role, email },
    ): Promise<ICustomer> => {
      const customer = await CustomerRepositoryPostgres.createCustomer({
        firstName,
        lastName,
        role,
        email,
      });
      return customer;
    },
  },
}
