import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getCustomer(id: ID!): Customer
  }

  type Mutation {
    createCustomer(
      firstName: String!
      lastName: String!
      role: String!
      email: String!
      planId: String!
      paymentGatewayId: String!
    ): Customer
    updateCustomer(
      id: ID!
      firstName: String
      lastName: String
      role: String
      email: String
      planId: String
      paymentGatewayId: String
    ): String
    removeCustomer(id: ID!): removedCustomer
  }

  type removedCustomer {
    ok: Boolean
  }

  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    role: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    endsAt: String!
    deletedAt: String
    subscription: Subscription
  }
`;
