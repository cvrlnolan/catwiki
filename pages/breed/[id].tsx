import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import catPic from "public/cat.jpg";
import GridPhoto from "@/components/layout/gridPhoto";
import Navbar from "@/components/layout/navbar";
import CharacterRating from "@/components/layout/characterRating";

const BreedPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>CatWiki | Breed Page</title>
      </Head>
      <Navbar>
        <div className="flex flex-wrap lg:flex-nowrap w-full space-y-4 lg:space-y-0 justify-between">
          <div className="flex justify-center w-full md:w-1/2 md:mx-auto h-80 relative">
            <Image
              src={catPic}
              alt="cat_pic"
              width="350"
              height="300"
              objectFit="cover"
              placeholder="blur"
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-4 w-full lg:w-3/5">
            <p>Bengal</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              molestias tempore, veritatis impedit ut rem, aut totam culpa
              repellendus ipsam eaque quod laboriosam similique praesentium
              eligendi aliquid sint quas deserunt!
            </p>
            <div className="flex space-x-2">
              <p className="font-bold">Temparament:</p>
              <p>Alert, Agile, Energetic, Demanding, Intelligent</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Origin:</p>
              <p>United States</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Life Span:</p>
              <p>12 - 15 years</p>
            </div>
            <div className="table">
              <div className="table-row-group">
                <CharacterRating name="Adaptability" />
                <CharacterRating name="Affection level" />
                <CharacterRating name="Child Friendly" />
                <CharacterRating name="Grooming" />
                <CharacterRating name="Intelligence" />
                <CharacterRating name="Health Issues" />
                <CharacterRating name="Social Needs" />
                <CharacterRating name="Stranger Friendly" />
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full space-y-4">
          <p className="text-lg">Other Photos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(8)].map((e, i) => (
              <GridPhoto key={i} />
            ))}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default BreedPage;
