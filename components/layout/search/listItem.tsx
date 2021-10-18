import React from "react";
import Link from "next/link";

type Cat = {
  name: string;
};

const ListItem = (cat: Cat) => {
  return (
    <>
      <Link href={`/breed/${cat.name}`} passHref>
        <div className="w-full p-3 cursor-pointer hover:bg-gray-200">
          <span>{cat.name}</span>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
