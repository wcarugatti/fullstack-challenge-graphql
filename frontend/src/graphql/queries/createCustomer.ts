import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer(
    $firstName: String!
    $lastName: String!
    $role: String!
    $email: String!
    $planId: String!
    $paymentGatewayId: String!
  ) {
    createCustomer(
      firstName: $firstName
      lastName: $lastName
      role: $role
      email: $email
      planId: $planId
      paymentGatewayId: $paymentGatewayId
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;
