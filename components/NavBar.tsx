"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="container m-auto mb-5 flex max-w-6xl flex-col justify-between px-10 py-5 md:flex-row md:items-center">
        <div className="mb-10 flex items-center justify-between md:mb-0">
          <Link href="/" className=" flex items-baseline text-xl font-bold">
            <Image
              src="/inteminer-icon.png"
              alt="Inteminer Brand Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Inteminer Cards
          </Link>
          <Bars2Icon
            className="w-10 md:hidden"
            onClick={() => setMenu(!menu)}
          />
        </div>
        <ul
          className={`smd:text-sm flex-col space-y-3 rounded-lg bg-gray-100 p-10 text-right text-lg md:flex md:flex-row md:items-center md:space-x-6 md:space-y-0 md:bg-transparent md:p-0 md:text-left lg:text-base ${
            menu ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link className="py-5 opacity-70 md:py-0" href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="py-5 opacity-70 md:py-0" href="#beneficios">
              Beneficios
            </Link>
          </li>
          <li>
            <Link className="py-5 opacity-70 md:py-0" href="#componentes">
              Componentes
            </Link>
          </li>
          <li>
            <Link className="py-5 opacity-70 md:py-0" href="/signup">
              Registrarse
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="inline-block w-full rounded-md bg-blue-600 px-10 py-3 text-center text-white md:w-fit"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
