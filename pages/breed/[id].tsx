import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import CharacterRating from "@/components/layout/characterRating";

const BreedPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: cat, error } = useSWR<any>(() => "/api/cats/" + id, fetcher);

  if (error) {
    return (
      <>
        <div>{error.message}</div>
      </>
    );
  }

  if (!cat) {
    return (
      <>
        <div className="text-center">Loading...</div>
      </>
    );
  }

  const imgUrl =
    "https://cdn2.thecatapi.com/images/" + cat.reference_image_id + ".jpg";

  return (
    <>
      <Head>
        <title>CatWiki | {cat.name}</title>
      </Head>
      <Navbar>
        <div className="breed_page_container">
          <div className="breed_page_img">
            <Image
              src={imgUrl}
              alt="cat_pic"
              width="350"
              height="300"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-4 w-full lg:w-3/5">
            <p>{cat.name}</p>
            <p>{cat.description}</p>
            <div className="flex space-x-2">
              <p className="font-bold">Temparament:</p>
              <p>{cat.temperament}</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Origin:</p>
              <p>{cat.origin}</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Life Span:</p>
              <p>{cat.life_span} years</p>
            </div>
            <div className="table">
              <div className="table-row-group">
                <CharacterRating name="Adaptability" value={cat.adaptability} />
                <CharacterRating
                  name="Affection level"
                  value={cat.affection_level}
                />
                <CharacterRating
                  name="Child Friendly"
                  value={cat.child_friendly}
                />
                <CharacterRating name="Grooming" value={cat.grooming} />
                <CharacterRating name="Intelligence" value={cat.intelligence} />
                <CharacterRating
                  name="Health Issues"
                  value={cat.health_issues}
                />
                <CharacterRating name="Social Needs" value={cat.social_needs} />
                <CharacterRating
                  name="Stranger Friendly"
                  value={cat.stranger_friendly}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="block w-full space-y-4">
          <p className="text-lg">Other Photos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(8)].map((e, i) => (
              <GridPhoto key={i} />
            ))}
          </div>
        </div> */}
      </Navbar>
    </>
  );
};

export default BreedPage;
