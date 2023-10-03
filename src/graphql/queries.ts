import { gql } from "../__generated__/gql";


export const GET_LOCATIONS = gql(`
  query GetData {
    continents {
      name
    }
  }
`);