import { IPaymentGateway } from "../../entities/IPaymentGateway";
export interface IPaymentGatewayRepository {
  findAllPaymentGateways(): Promise<IPaymentGateway[]>;
}
