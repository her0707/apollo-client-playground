import { makeExecutableSchema } from "@graphql-tools/schema";

import resolvers from "./resolvers/resolvers";
import typeDefs from "./schema.graphql";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
