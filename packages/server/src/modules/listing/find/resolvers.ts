import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    findListings: async () => {
      const listings = await Listing.find();
      return listings;
    }
  }
};
