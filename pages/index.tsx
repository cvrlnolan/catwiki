import React, { useState, useEffect, Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { SearchIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import Navbar from "@/components/layout/navbar";
import CatBox from "@/components/cats/catBox";
import ListItem from "@/components/layout/search/listItem";
import ModalListItem from "@/components/layout/search/modalListItem";
import GridDisplay from "@/components/layout/gridDisplay";

const Home: NextPage = () => {
  const [results, setResults] = useState<any>();

  const [searched, setSearched] = useState<any>([]);

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const search = async (value: string) => {
    try {
      const response = await axios.post<any>("/api/cats/search", { value });
      const data = await response.data;
      setResults(data);
      if (data.length > 0) {
        localStorage.setItem("most_searched", JSON.stringify(data));
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const most_searched = localStorage.getItem("most_searched");
    const selectedCats = JSON.parse(most_searched as string).slice(0, 4);
    // setSearched(JSON.parse(searched as string));
    setSearched(selectedCats);
    // console.log(selectedCats);
  }, []);

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
                  className="mobile_search_button"
                  onClick={() => openModal()}
                >
                  Search <SearchIcon className="w-4 h-4 my-auto ml-2" />
                </button>
                <label htmlFor="breed" className="input_label">
                  <SearchIcon className="search_icon" />
                  <input
                    name="breed"
                    id="breed"
                    placeholder="Search your breed"
                    className="search_input"
                    onChange={(e) => {
                      search(e.target.value);
                    }}
                  />
                </label>
                <div className="search_results_container">
                  {results &&
                    results.length > 0 &&
                    results.map((cat: any, i: number) => (
                      <ListItem key={i} name={cat.name} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_div_container">
            <p className="">Most Searched Breeds</p>
            <div className="flex flex-wrap justify-between">
              <p>66+ Breeds for you to discover</p>
              <Link href="/breed/searched" passHref>
                <a className="cursor-pointer">See More+</a>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {searched &&
                searched.length > 0 &&
                searched.map((cat: any, i: number) => (
                  <CatBox key={i} cat={cat} />
                ))}
            </div>
          </div>
        </div>
        <div className="block md:flex justify-between p-6">
          <div className="block space-y-10 w-full md:w-2/5">
            <div>
              <p className="font-extrabold">Why Should You Have A Cat?</p>
            </div>
            <div>
              <p className="tracking-tight">
                Having a cat around you can trigger the release of calming
                chemicals in your body which lower your stress and anxiety
                levels
              </p>
            </div>
            <div>
              <p className="font-semibold">Read More</p>
            </div>
          </div>
          <GridDisplay />
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
                <div className="modal_container">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Search Breed
                  </Dialog.Title>
                  <div className="mt-2">
                    <label htmlFor="breed" className="modal_input_label">
                      <SearchIcon className="search_icon" />
                      <input
                        name="breed"
                        id="breed"
                        placeholder="Search your breed"
                        className="search_input"
                        onChange={(e) => {
                          search(e.target.value);
                        }}
                      />
                    </label>
                  </div>

                  <div className="my-2">
                    {results &&
                      results.length > 0 &&
                      results.map((cat: any, i: number) => (
                        <ModalListItem key={i} name={cat.name} />
                      ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="modal_close_button"
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
