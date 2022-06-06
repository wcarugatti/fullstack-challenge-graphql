import { gql } from "@apollo/client";

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer(
    $updateCustomerId: ID!
    $firstName: String
    $planId: String
    $lastName: String
    $role: String
    $email: String
    $paymentGatewayId: String
  ) {
    updateCustomer(
      id: $updateCustomerId
      firstName: $firstName
      planId: $planId
      lastName: $lastName
      role: $role
      email: $email
      paymentGatewayId: $paymentGatewayId
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;
