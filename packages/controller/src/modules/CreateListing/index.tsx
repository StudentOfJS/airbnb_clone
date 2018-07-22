// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { CreateListingVariables, CreateListing } from "../../schemaTypes";

const CreateListingMutation = gql`
  mutation CreateListing(
    $name: String!
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guests: Int!
    $lat: Float!
    $long: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        name: $name
        category: $category
        description: $description
        price: $price
        beds: $beds
        guests: $guests
        lat: $lat
        long: $long
        amenities: $amenities
      }
    )
  }
`;

export interface NewPropsCreateListing {
  createListing: (variables: CreateListingVariables) => void;
}
export const withCreateListing = graphql<
  any,
  CreateListing,
  CreateListingVariables,
  NewPropsCreateListing
>(CreateListingMutation, {
  props: ({ mutate }) => ({
    createListing: async variables => {
      if (!mutate) {
        return;
      }
      await mutate({ variables });
    }
  })
});
