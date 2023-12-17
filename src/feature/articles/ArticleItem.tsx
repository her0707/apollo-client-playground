import { FragmentType, graphql, useFragment } from "@/gql";
import {
  container,
  contentContainer,
  articleTitle,
  articleContent,
  headerContainer,
  likeButton,
  likeCount,
} from "./Article.css";
import { ArticleFragmentDoc } from "@/gql/graphql";

interface Props {
  article: FragmentType<typeof ArticleFragmentDoc> | null;
}

const articleFragment = graphql(/* GraphQL */ `
  fragment Article on Article {
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
      username
      bio
      image
      following
    }
  }
`);

export default function ArticleItem({ article }: Props) {
  const data = useFragment(articleFragment, article);

  return (
    <div className={container}>
      <div className={headerContainer}>
        <button className={`${likeButton} ${data?.favorited ? "active" : ""}`}>
          <span className={likeCount}>{data?.favoritesCount}</span>
        </button>
      </div>

      <a className={contentContainer}>
        <h5 className={articleTitle}>{data?.title}</h5>
        <p className={articleContent}>{data?.description}</p>
      </a>
    </div>
  );
}
