import { gql } from "@apollo/client";

export const OPTIONS_QUERY = gql`
  query Options {
    Plans {
      id
      name
      byllingCycle
    }
    PaymentGateways {
      id
      name
    }
  }
`;
