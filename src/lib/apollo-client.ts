import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  defaultDataIdFromObject,
  from,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";

import { onError } from "@apollo/client/link/error";
import { schema } from "@/graphql/execute-schema";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.log(err);
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

export function createClient() {
  return new ApolloClient({
    link: from([errorLink, new SchemaLink({ schema })]),
    cache: new InMemoryCache({
      dataIdFromObject(responseObject) {
        switch (responseObject.__typename) {
          case "Article":
            return `Article:${responseObject.slug}`;
          default:
            return defaultDataIdFromObject(responseObject);
        }
      },
    }),
    ssrMode: typeof window === "undefined",
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
      query: {
        fetchPolicy: "network-only",
      },
    },
  });
}

export function initializeApollo(
  initialState = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    // const data = merge(initialState, existingCache)

    // _apolloClient.cache.restore(data)
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
