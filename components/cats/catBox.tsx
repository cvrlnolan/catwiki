import React from "react";
import Image from "next/image";
import Link from "next/link";
import catPic from "public/cat.jpg";

const CatBox = ({ cat }: any) => {
  return (
    <>
      <Link href="/breed/test" passHref>
        <div
          onClick={() => {}}
          className="w-full h-full relative overflow-hidden space-y-2 cursor-pointer"
        >
          <Image
            src={catPic}
            alt="cat_img"
            objectFit="cover"
            width="200"
            height="200"
            className="rounded-2xl"
            placeholder="blur"
          />
          <p className="tracking-tight">Cat Breed Name</p>
        </div>
      </Link>
    </>
  );
};

export default CatBox;
