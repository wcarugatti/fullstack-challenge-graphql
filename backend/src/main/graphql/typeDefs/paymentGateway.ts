import { gql } from "apollo-server-express";

export default gql`
  type PaymentGateway {
    id: ID
    name: String
  }
`;
