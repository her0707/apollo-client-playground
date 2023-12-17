import { FragmentType, graphql, useFragment } from "@/gql";
import {
  container,
  contentContainer,
  articleTitle,
  articleContent,
  headerContainer,
  likeButton,
  likeCount,
  articleTagContainer,
} from "./Article.css";
import { ArticleFragmentDoc } from "@/gql/graphql";
import TagList from "./components/TagList";
import ArticleAuthor from "./components/ArticleAuthor";
import { gql } from "@apollo/client";

interface Props {
  article: FragmentType<typeof ArticleFragmentDoc> | null;
}

ArticleItem.fragments = {
  entry: gql`
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
        ...Author
      }
    }
    ${ArticleAuthor.fragments.entry}
  `,
};

export default function ArticleItem({ article }: Props) {
  const data = useFragment(ArticleFragmentDoc, article);

  return (
    <div className={container}>
      <div className={headerContainer}>
        <ArticleAuthor author={data?.author} createDate={data?.createdAt} />
        <button className={`${likeButton} ${data?.favorited ? "active" : ""}`}>
          <span className={likeCount}>{data?.favoritesCount}</span>
        </button>
      </div>

      <a className={contentContainer}>
        <h5 className={articleTitle}>{data?.title}</h5>
        <p className={articleContent}>{data?.description}</p>
      </a>

      <div className={articleTagContainer}>
        <TagList tagList={data?.tagList} />
      </div>
    </div>
  );
}
