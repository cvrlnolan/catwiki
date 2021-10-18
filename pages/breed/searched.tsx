import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import CatBreed from "@/components/cats/catBreed";

const SearchedPage: NextPage = () => {
  const [breeds, setBreeds] = useState<any>();

  useEffect(() => {
    const most_searched = localStorage.getItem("most_searched");
    const selectedCats = JSON.parse(most_searched as string).slice(0, 10);
    setBreeds(selectedCats);
  }, []);

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
          {breeds &&
            breeds.map((breed: any, i: number) => (
              <CatBreed
                key={i}
                name={breed.name}
                description={breed.description}
                img_id={breed.reference_image_id}
                index={i + 1}
              />
            ))}
          {/* <CatBreed /> */}
        </div>
      </Navbar>
    </>
  );
};

export default SearchedPage;
