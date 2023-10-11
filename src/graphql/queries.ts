import { gql } from "../__generated__/gql";

export const RICK_MOERTY = gql(`
query Epi_query{
  episodes {
    results {
      name
      episode
      air_date
    }
  }
}
`);