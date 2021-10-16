import React from "react";
import catPic from "public/cat.jpg";
import Image from "next/image";

const CatBreed = (cat?: any) => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap w-full lg:px-8 space-y-4 lg:space-y-0">
        <div className="flex justify-center w-full lg:w-auto h-56 md:mx-auto relative">
          <Image
            src={catPic}
            alt="cat_pic"
            width="250"
            height="100"
            objectFit="cover"
            placeholder="blur"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-3/5 space-y-5">
          <p className="text-2xl">1. Bengal</p>
          <p className="tracking-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            molestias tempore, veritatis impedit ut rem, aut totam culpa
            repellendus ipsam eaque quod laboriosam similique praesentium
            eligendi aliquid sint quas deserunt! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Impedit eligendi quia, expedita nemo
            et perferendis in ea, atque fugiat repellat placeat laudantium
            distinctio ullam quibusdam at hic, aperiam mollitia tempore.
          </p>
        </div>
      </div>
    </>
  );
};

export default CatBreed;
