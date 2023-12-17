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

export default function ArticleItem({ article }: Props) {
  const data = useFragment(ArticleFragmentDoc, article);

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
