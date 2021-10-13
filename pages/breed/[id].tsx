import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/layout/navbar";

const BreedPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>CatWiki | Breed Page</title>
      </Head>
      <Navbar>
        <div></div>
      </Navbar>
    </>
  );
};

export default BreedPage;
