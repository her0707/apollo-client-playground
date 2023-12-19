import Head from "next/head";
import { Suspense } from "react";

import style from "@/styles/Home.module.css";
import Article, { articleQuery } from "@/feature/articles/detail/ArticleDetail";
import { initializeApollo } from "@/lib/apollo-client";
import { GetServerSidePropsContext } from "next";

export default function ArticleDetail() {
  return (
    <>
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<div className={style.main}>Loading...</div>}>
        <Article />
      </Suspense>
    </>
  );
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  if (!req.url) {
    return { props: {} };
  }

  const client = initializeApollo();

  await client.query({
    query: articleQuery,
    variables: {
      slug: req.url.replace("/", ""),
    },
  });

  return { props: { initialApolloState: client.cache.extract() } };
}
