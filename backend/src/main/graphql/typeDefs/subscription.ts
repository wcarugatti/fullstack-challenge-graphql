import { gql } from "apollo-server-express";

export default gql`
  type Subscription {
    id: ID!
    customerId: String!
    planId: String!
    paymentGatewayId: String!
    createdAt: String!
    updatedAt: String!
    endsAt: String!
    deletedAt: String
  }
`;
