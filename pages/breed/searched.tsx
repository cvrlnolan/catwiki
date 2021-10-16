import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import CatBreed from "@/components/cats/catBreed";

const SearchedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CatWiki | Most Searched Breeds</title>
      </Head>
      <Navbar>
        <div className="flex justify-center my-4">
          <p className="text-2xl">Top 10 most searched breeds</p>
        </div>
        <div className="space-y-10">
          <CatBreed />
        </div>
      </Navbar>
    </>
  );
};

export default SearchedPage;
