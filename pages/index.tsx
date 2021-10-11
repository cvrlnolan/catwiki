import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";

const Home: NextPage = () => {
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
            <div className="w-60">
              <p className="text-white">CatWiki</p>
              <p className="text-white">
                Get to know more about your cat breed
              </p>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-200 focus:outline-none focus:bg-white focus:border-blue-500" />
            </div>
          </div>
          <div
            className="flex p-6 w-full bg-yellow-50 rounded-2xl rounded-t-none"
            style={{ height: "500px" }}
          >
            <p className="text-center">Most Searched Breeds</p>
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
