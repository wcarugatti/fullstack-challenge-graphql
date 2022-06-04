import { gql } from "apollo-server-express";

export default gql`
  type Customer {
    id: ID
    firstName: String
    lastName: String
    role: String
    email: String
    createdAt: String
    updatedAt: String
    endsAt: String
    deletedAt: String
  }
`;
