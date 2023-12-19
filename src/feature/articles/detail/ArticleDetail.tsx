import { useSuspenseQuery, skipToken } from "@apollo/client";
import { useRouter } from "next/router";

import { graphql } from "@/gql";
import ArticleAuthor from "../components/ArticleAuthor";
import Divider from "@/components/divider/Divider";
import { articleDetailContainer } from "../list/Article.css";

export const articleQuery = graphql(/* GraphQL */ `
  query article($slug: String!) {
    Article(slug: $slug) {
      article {
        slug
        title
        description
        body
        tagList
        createdAt
        updatedAt
        favorited
        favoritesCount
        author {
          ...Author
        }
        isActive @client
      }
    }
  }
`);

export default function ArticleDetail() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { data } = useSuspenseQuery(
    articleQuery,
    slug
      ? {
          variables: {
            slug,
          },
        }
      : skipToken
  );

  return (
    <div className={articleDetailContainer}>
      <ArticleAuthor author={data?.Article?.article.author} />
      <Divider />
    </div>
  );
}
