import React from "react";
import Image from "next/image";
import catPic1 from "public/cat-1.jpg";
import catPic2 from "public/cat-2.jpg";
import catPic3 from "public/cat-3.jpg";

const GridDisplay = () => {
  return (
    <>
      <div className="grid_container">
        <div className="row-span-3 w-full h-full relative overflow-hidden">
          <Image
            src={catPic1}
            alt="cat_img"
            objectFit="cover"
            width="250"
            height="400"
            className="rounded-2xl"
            placeholder="blur"
          />
        </div>
        <div className="col-span-2 w-full h-full relative overflow-hidden">
          <Image
            src={catPic2}
            alt="cat_img"
            objectFit="cover"
            width="275"
            height="180"
            className="rounded-2xl"
            placeholder="blur"
          />
        </div>
        <div className="row-span-2 col-span-2 w-full h-full relative overflow-hidden">
          <Image
            src={catPic3}
            alt="cat_img"
            objectFit="cover"
            width="275"
            height="180"
            className="rounded-2xl"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default GridDisplay;
