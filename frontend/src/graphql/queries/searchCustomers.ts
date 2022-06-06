import { gql } from "@apollo/client";

export const SEARCH_CUSTOMERS = gql`
  query SearchCustomers($searchInput: String) {
    searchCustomers(searchInput: $searchInput) {
      id
      email
      firstName
      lastName
    }
  }
`;
