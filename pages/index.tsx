import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { SearchIcon } from "@heroicons/react/solid";
import Navbar from "@/components/layout/navbar";
import CatBox from "@/components/cats/catBox";

const Home: NextPage = () => {
  const [results, setResults] = useState<any>();
  return (
    <>
      <Head>
        <title>CatWiki</title>
      </Head>
      <Navbar>
        <div className="flex flex-col justify-center">
          <div
            className="block p-6 w-full rounded-2xl rounded-b-none"
            style={{
              background: `url(/cat.jpg)`,
              backgroundPosition: "25% 35%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              height: "500px",
            }}
          >
            <div className="w-64 md:w-72">
              <div className="space-y-4">
                <p className="text-white">CatWiki</p>
                <p className="text-white">
                  Get to know more about your cat breed
                </p>
              </div>
              <div className="mt-10">
                <label
                  htmlFor="breed"
                  className="relative text-gray-400 focus-within:text-gray-600 block mb-5"
                >
                  <SearchIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                  <input
                    name="breed"
                    id="breed"
                    placeholder="Search your breed"
                    className="appearance-none border rounded-full h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-200 focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </label>
                <div className="bg-white rounded-2xl max-h-64 overflow-auto invisible md:visible divide-y">
                  <div className="w-full p-3 cursor-pointer hover:bg-gray-200">
                    <span>No results found.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block p-6 w-full bg-indigo-50 rounded-2xl rounded-t-none space-y-10">
            <p className="">Most Searched Breeds</p>
            <div className="flex flex-wrap justify-between">
              <p>66+ Breeds for you to discover</p>
              <a href="#">See More+</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((e, i) => (
                <CatBox key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6">
          <div className="block space-y-10 w-2/5">
            <div>
              <p className="font-extrabold">Why Should You Have A Cat?</p>
            </div>
            <div>
              <p className="font-thin tracking-tight">
                Having a cat around you can trigger the release of calming
                chemicals in your body which lower your stress and anxiety
                levels
              </p>
            </div>
            <div>
              <p className="font-semibold">Read More</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 w-1/2">
            {[...Array(3)].map((e, i) => (
              <CatBox key={i} />
            ))}
          </div>
        </div>
        <footer className="bottom-0 my-3">
          <div className="flex justify-center mb-0">
            <p className="text-center font-mono tracking-tight">
              Designed & Developped by{" "}
              <a
                href="https://carlnolan.lootyclub.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                Carl Nolan.
              </a>
            </p>
          </div>
        </footer>
      </Navbar>
    </>
  );
};

export default Home;
