/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment Author on Author {\n      username\n      bio\n      image\n      following\n    }\n  ": types.AuthorFragmentDoc,
    "\n  query article($slug: String!) {\n    Article(slug: $slug) {\n      article {\n        slug\n        title\n        description\n        body\n        tagList\n        createdAt\n        updatedAt\n        favorited\n        favoritesCount\n        author {\n          ...Author\n        }\n        isActive @client\n      }\n    }\n  }\n": types.ArticleDocument,
    "\n    fragment Article on Article {\n      slug\n      title\n      description\n      body\n      tagList\n      createdAt\n      updatedAt\n      favorited\n      favoritesCount\n      author {\n        ...Author\n      }\n    }\n    \n  ": types.ArticleFragmentDoc,
    "\n  query articles(\n    $tag: String\n    $author: String\n    $favorited: String\n    $offset: Int\n    $limit: Int\n  ) {\n    Articles(\n      tag: $tag\n      author: $author\n      favorited: $favorited\n      offset: $offset\n      limit: $limit\n    ) {\n      articles {\n        ...Article\n      }\n      articlesCount\n    }\n  }\n": types.ArticlesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Author on Author {\n      username\n      bio\n      image\n      following\n    }\n  "): (typeof documents)["\n    fragment Author on Author {\n      username\n      bio\n      image\n      following\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query article($slug: String!) {\n    Article(slug: $slug) {\n      article {\n        slug\n        title\n        description\n        body\n        tagList\n        createdAt\n        updatedAt\n        favorited\n        favoritesCount\n        author {\n          ...Author\n        }\n        isActive @client\n      }\n    }\n  }\n"): (typeof documents)["\n  query article($slug: String!) {\n    Article(slug: $slug) {\n      article {\n        slug\n        title\n        description\n        body\n        tagList\n        createdAt\n        updatedAt\n        favorited\n        favoritesCount\n        author {\n          ...Author\n        }\n        isActive @client\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Article on Article {\n      slug\n      title\n      description\n      body\n      tagList\n      createdAt\n      updatedAt\n      favorited\n      favoritesCount\n      author {\n        ...Author\n      }\n    }\n    \n  "): (typeof documents)["\n    fragment Article on Article {\n      slug\n      title\n      description\n      body\n      tagList\n      createdAt\n      updatedAt\n      favorited\n      favoritesCount\n      author {\n        ...Author\n      }\n    }\n    \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query articles(\n    $tag: String\n    $author: String\n    $favorited: String\n    $offset: Int\n    $limit: Int\n  ) {\n    Articles(\n      tag: $tag\n      author: $author\n      favorited: $favorited\n      offset: $offset\n      limit: $limit\n    ) {\n      articles {\n        ...Article\n      }\n      articlesCount\n    }\n  }\n"): (typeof documents)["\n  query articles(\n    $tag: String\n    $author: String\n    $favorited: String\n    $offset: Int\n    $limit: Int\n  ) {\n    Articles(\n      tag: $tag\n      author: $author\n      favorited: $favorited\n      offset: $offset\n      limit: $limit\n    ) {\n      articles {\n        ...Article\n      }\n      articlesCount\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;