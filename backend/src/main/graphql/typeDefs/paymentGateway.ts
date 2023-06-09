import { gql } from "apollo-server-express";

export default gql`
  type Query {
    PaymentGateways: [PaymentGateway]
  }

  type PaymentGateway {
    id: ID
    name: String
  }
`;
