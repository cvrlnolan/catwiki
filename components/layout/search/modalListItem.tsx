import React from "react";

type Cat = {
  name: string;
};

const ModalListItem = (cat: Cat) => {
  return (
    <>
      <div
        className="w-full p-3 cursor-pointer rounded-lg hover:bg-gray-100"
        onClick={() => {}}
      >
        <span className="text-thin tracking-tight">{cat.name}</span>
      </div>
    </>
  );
};

export default ModalListItem;
