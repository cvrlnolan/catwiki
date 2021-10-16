import React from "react";
import Image from "next/image";
import catPic from "public/cat.jpg";

const GridPhoto = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={catPic}
          alt="cat_img"
          objectFit="cover"
          width="200"
          height="200"
          className="rounded-2xl"
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default GridPhoto;
