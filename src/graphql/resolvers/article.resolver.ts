import { Resolvers } from "@apollo/client";

export const articleResolvers: Resolvers = {
  Query: {
    async Articles(obj, args, context, info) {
      const response = await fetch("https://api.realworld.io/api/articles");

      return await response.json();
    },
  },
};
