import { gql } from "graphql-request";

export const GET_BUSES = gql`
  query GetBuses($locale: Locale!) {
    buses(locales: [$locale]) {
      id
      title
      slug
      description
      image {
        url
      }
    }
  }
`;

export const GET_BUS_BY_SLUG = gql`
  query GetBusBySlug($slug: String!, $locale: Locale!) {
    bus(where: { slug: $slug }, locales: [$locale]) {
      id
      title
      slug
      description
      content {
        html
        text
      }
      image {
        url
      }
    }
  }
`;
