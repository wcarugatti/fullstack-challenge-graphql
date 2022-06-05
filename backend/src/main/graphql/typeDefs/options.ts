import { gql } from "apollo-server-express";

export default gql`
  type Query {
    Plans: [Plan]
    PaymentGateways: [PaymentGateway]
  }
`;
