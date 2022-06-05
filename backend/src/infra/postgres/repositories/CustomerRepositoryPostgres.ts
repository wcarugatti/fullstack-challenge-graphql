import { ICustomer } from "../../../entities/ICustomer";
import { ICustomerRepository } from "../../repositoryProtocols/ICustomerRepository";
import Customer from "../models/Customer.model";
import Subscription from "../models/Subscription.model";

class CustomerRepositoryPostgres implements ICustomerRepository {
  async findCustomerById(id: string): Promise<Customer> {
    return await Customer.findByPk(id);
  }
  async createCustomer({
    firstName,
    lastName,
    role,
    email,
  }: Partial<ICustomer>): Promise<Customer> {
    const customer = await Customer.create({
      firstName,
      lastName,
      role,
      email,
    });
    return customer;
  }

  async updateCustomer({
    id,
    firstName,
    lastName,
    role,
    email,
  }: Partial<ICustomer>): Promise<Customer | null> {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return null;
    }
    await customer.update({ firstName, lastName, role, email });
    return customer;
  }

  async removeCustomer(id: string): Promise<boolean> {
    const destroyResult = await Customer.destroy({
      where: {
        id,
      },
    });
    if (destroyResult > 0) {
      await Subscription.destroy({
        where: {
          customerId: id,
        },
      });
      return true;
    }
    return false;
  }
}

export default new CustomerRepositoryPostgres();
