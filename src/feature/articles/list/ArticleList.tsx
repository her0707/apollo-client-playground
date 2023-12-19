import { useSuspenseQuery } from "@apollo/client";

import { graphql } from "@/gql";
import ArticleComponent from "@/feature/articles/list/ArticleItem";
import { containerList } from "@/feature/articles/list/Article.css";

const articlesQueryDocument = graphql(/* GraphQL */ `
  query articles(
    $tag: String
    $author: String
    $favorited: String
    $offset: Int
    $limit: Int
  ) {
    Articles(
      tag: $tag
      author: $author
      favorited: $favorited
      offset: $offset
      limit: $limit
    ) {
      articles {
        ...Article
      }
      articlesCount
    }
  }
`);

export default function ArticleList() {
  const { data } = useSuspenseQuery(articlesQueryDocument);

  return (
    <main className={containerList}>
      {data.Articles?.articles.map((article, i) => (
        <ArticleComponent key={`article-${i}`} article={article} />
      ))}
    </main>
  );
}
