import { IPaymentGateway } from "../../../entities/IPaymentGateway";
import PaymentGatewayRepositoryPostgres from "../../../infra/postgres/repositories/PaymentGatewayRepositoryPostgres";
export default {
  Query: {
    PaymentGateways: async (): Promise<IPaymentGateway[]> => {
      return await PaymentGatewayRepositoryPostgres.findAllPaymentGateways()
    },
  },
};
