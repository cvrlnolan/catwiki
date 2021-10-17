import React, { useState, Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import Navbar from "@/components/layout/navbar";
import GridPhoto from "@/components/layout/gridPhoto";
import CatBox from "@/components/cats/catBox";

const Home: NextPage = () => {
  const [results, setResults] = useState<any>();

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
              height: isMobile ? "250px" : "500px",
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
                <button
                  className="flex p-4 bg-white rounded-full hover:bg-gray-100 md:invisible"
                  onClick={() => openModal()}
                >
                  Search <SearchIcon className="w-4 h-4 my-auto ml-2" />
                </button>
                <label
                  htmlFor="breed"
                  className="relative text-gray-400 focus-within:text-gray-600 block mb-5 invisible md:visible"
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
              <Link href="/breed/searched" passHref>
                <a className="cursor-pointer">See More+</a>
              </Link>
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
              <GridPhoto key={i} />
            ))}
          </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full h-64 max-w-md p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Search Breed
                  </Dialog.Title>
                  <div className="mt-2">
                    <label
                      htmlFor="breed"
                      className="relative text-gray-400 focus-within:text-gray-600 block mb-5"
                    >
                      <SearchIcon className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                      <input
                        name="breed"
                        id="breed"
                        placeholder="Search your breed"
                        className="appearance-none border rounded-full h-10 w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-200 focus:outline-none focus:bg-white focus:border-blue-500"
                      />
                    </label>
                  </div>

                  <div className="my-2">
                    <div
                      className="w-full p-3 cursor-pointer rounded-lg hover:bg-gray-100"
                      onClick={() => {}}
                    >
                      <span className="text-thin tracking-tight">
                        American Prush
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </Navbar>
    </>
  );
};

export default Home;
