import Image from "next/image";
import { gql } from "@apollo/client";

import {
  authorDescription,
  authorImg,
  titleContainer,
  authorName,
  articleDate,
} from "../list/Article.css";
import { formatDate } from "@/utils/date-format";
import { AuthorFragmentDoc } from "@/gql/graphql";
import { FragmentType, useFragment } from "@/gql";

interface Props {
  author?: FragmentType<typeof AuthorFragmentDoc> | null;
  createDate?: string | null;
}

ArticleAuthor.fragments = {
  entry: gql`
    fragment Author on Author {
      username
      bio
      image
      following
    }
  `,
};

export default function ArticleAuthor({ author, createDate }: Props) {
  const data = useFragment(AuthorFragmentDoc, author);

  return (
    <div className={titleContainer}>
      {data?.image && (
        <Image
          src={data.image}
          width={32}
          height={32}
          alt={"author-img"}
          className={authorImg}
        />
      )}
      <div className={authorDescription}>
        <a className={authorName}>{data?.username}</a>
        <span className={articleDate}>{formatDate(createDate)}</span>
      </div>
    </div>
  );
}
