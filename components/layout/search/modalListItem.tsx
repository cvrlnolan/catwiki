import React from "react";
import Link from "next/link";

type Cat = {
  name: string;
};

const ModalListItem = (cat: Cat) => {
  return (
    <>
      <Link href={`/breed/${cat.name}`} passHref>
        <div
          className="w-full p-3 cursor-pointer rounded-lg hover:bg-gray-100"
          onClick={() => {}}
        >
          <span className="text-thin tracking-tight">{cat.name}</span>
        </div>
      </Link>
    </>
  );
};

export default ModalListItem;
