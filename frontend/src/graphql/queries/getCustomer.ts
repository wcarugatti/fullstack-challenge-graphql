import { gql } from "@apollo/client";

export const GET_CUSTOMER = gql`
  query GetCustomer($customerId: ID!) {
    getCustomer(id: $customerId) {
      firstName
      lastName
      role
      email
      subscription {
        planId
        paymentGatewayId
      }
    }
  }
`;
