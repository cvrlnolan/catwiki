import React from "react";

type Cat = {
  name: string;
};

const ListItem = (cat: Cat) => {
  return (
    <>
      <div className="w-full p-3 cursor-pointer hover:bg-gray-200">
        <span>{cat.name}</span>
      </div>
    </>
  );
};

export default ListItem;
