import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatBox = ({ cat }: any) => {
  const imgUrl =
    "https://cdn2.thecatapi.com/images/" + cat?.reference_image_id + ".jpg";
  return (
    <>
      <Link href={`/breed/${cat?.name}`} passHref>
        <div
          onClick={() => {}}
          className="w-full h-full relative overflow-hidden space-y-2 cursor-pointer"
        >
          <Image
            src={imgUrl}
            alt="cat_img"
            objectFit="cover"
            width="200"
            height="200"
            className="rounded-2xl"
          />
          <p className="tracking-tight">{cat?.name}</p>
        </div>
      </Link>
    </>
  );
};

export default CatBox;
