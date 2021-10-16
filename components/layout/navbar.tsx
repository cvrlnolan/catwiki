import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full p-6 justify-between space-y-4">
        <nav className="flex flex-wrap w-full p-2 order-first">
          <Link href="/" passHref>
            <div onClick={() => {}} className="flex w-2/5 cursor-pointer">
              <span className="font-bold tracking-tight">CatWiki</span>
            </div>
          </Link>
        </nav>
        <main className="flex-grow items-center justify-center">
          {children}
        </main>
        <footer className="bottom-0 my-3 order-last">
          <div className="flex justify-center mb-0">
            <p className="text-center font-mono tracking-tight">
              Designed & Developped by{" "}
              <a
                href="https://carlnolan.lootyclub.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                Carl Nolan.
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
