import React from "react";

type Character = {
  name: string;
  value?: number;
};

const CharacterRating = (char: Character) => {
  return (
    <>
      <div className="table-row h-12">
        <div className="table-cell">
          <p className="font-bold">{char.name}:</p>
        </div>
        <div className="table-cell">
          <div className="flex ml-4 space-x-2 align-middle">
            {[...Array(5)].map((e, i) => (
              <div
                key={i}
                className="w-3.5 md:w-16 h-3.5 bg-gray-200 rounded-full my-auto"
              >
                <div className="w-full h-full rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterRating;
