import { gql } from "@apollo/client";

export const REMOVE_CUSTOMER = gql`
mutation RemoveCustomer($removeCustomerId: ID!) {
  removeCustomer(id: $removeCustomerId) {
    ok
  }
}
`