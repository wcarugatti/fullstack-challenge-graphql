import { IPaymentGateway } from "../../../entities/IPaymentGateway";
import { IPaymentGatewayRepository } from "../../repositoryProtocols/IPaymentGatewayRepository";
import PaymentGateway from "../models/PaymentGateway.model";

class PaymentGatewayRepositoryPostgres
  implements IPaymentGatewayRepository
{
  async findAllPaymentGateways(): Promise<IPaymentGateway[]> {
    return await PaymentGateway.findAll();
  }
}

export default new PaymentGatewayRepositoryPostgres();