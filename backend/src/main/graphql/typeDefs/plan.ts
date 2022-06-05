import { gql } from "apollo-server-express";

export default gql`
  type Query {
    Plans: [Plan]
  }

  type Plan {
    id: ID
    name: String
    byllingCycle: Int
    price: Float
  }
`;
