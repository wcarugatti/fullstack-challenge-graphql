import { ICustomer } from "../../../entities/ICustomer";
import { ICustomerRepository } from "./../../repositoryProtocols/ICustomerRepository";
import Customer from "./../models/Customer.model";

class CustomerRepository implements ICustomerRepository {
  async findCustomerById(id: string): Promise<ICustomer> {
    return await Customer.findByPk(id);
  }
  async createCustomer({
    firstName,
    lastName,
    role,
    email,
  }: Partial<ICustomer>): Promise<ICustomer> {
    const customer = await Customer.create({
      firstName,
      lastName,
      role,
      email,
    });
    return customer;
  }
}

export default new CustomerRepository();
