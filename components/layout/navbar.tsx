import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between p-6 space-y-4">
        <div className="flex flex-wrap w-screen">
          <div className="flex w-2/5">
            <span className="font-bold tracking-tight">CatWiki</span>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Navbar;
