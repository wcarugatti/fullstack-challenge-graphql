import { ICustomer } from "./../../entities/ICustomer";
export interface ICustomerRepository {
  findCustomerById(id: string): Promise<ICustomer>;
  createCustomer({
    firstName,
    lastName,
    role,
    email,
  }: Partial<ICustomer>): Promise<ICustomer>;
}
