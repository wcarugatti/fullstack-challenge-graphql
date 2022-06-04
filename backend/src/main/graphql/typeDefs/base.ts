import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getCustomer(id: ID): Customer
  }

  type Mutation {
    createCustomer(
      firstName: String
      lastName: String
      role: String
      email: String
    ): Customer
  }
`;
