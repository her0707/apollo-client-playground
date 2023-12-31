import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import style from "@/styles/Home.module.css";
const ArticleList = dynamic(
  () => import("@/feature/articles/list/ArticleList"),
  { loading: () => <div className={style.main}>Loading...</div> }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<div className={style.main}>Loading...</div>}>
        <ArticleList />
      </Suspense>
    </>
  );
}
