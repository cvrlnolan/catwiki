import React from "react";
import Image from "next/image";

type Breed = {
  name: string;
  description: string;
  index: number;
  img_id?: string;
};
const CatBreed = (cat: Breed) => {
  const imgUrl = "https://cdn2.thecatapi.com/images/" + cat.img_id + ".jpg";
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap w-full lg:px-8 space-y-4 lg:space-y-0">
        <div className="flex justify-center w-full lg:w-auto h-56 md:mx-auto relative">
          <Image
            src={imgUrl}
            alt="cat_pic"
            width="250"
            height="100"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-3/5 space-y-5">
          <p className="text-2xl">
            {cat.index}. {cat.name}
          </p>
          <p className="tracking-tight">{cat.description}</p>
        </div>
      </div>
    </>
  );
};

export default CatBreed;
