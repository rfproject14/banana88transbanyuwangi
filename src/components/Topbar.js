import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rent Car", href: "/elayanan" },
    // { name: "Pelayanan", href: "/jasa" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    {name: "Contact", href: "/contact"}
  ];

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-2xl px-4 py-2 lg:px-2 lg:py-8 shadow-none"
      color="white"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          className="mr-4 py-2 cursor-pointer w-2/4 h-auto lg:w-2/12"
          alt="logo"
          priority
        />
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navigation.map((item, index) => (
                <Typography
                  as="li"
                  variant="small"
                  className="p-1 font-medium montserrat hover:text-yellow-600 tracking-tight"
                  key={index}
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </ul>
          </div>
          <IconButton
            variant="text"
            className="ml-auto mr-6 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav} className="shadow-none">
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {navigation.map((item, index) => (
            <Typography
              as="li"
              variant="small"
              className="p-1 font-medium montserrat text-blue-gray-900 hover:text-yellow-600"
              key={index}
            >
              <Link href={item.href} className="flex items-center">
                {item.name}
              </Link>
            </Typography>
          ))}
        </ul>
        {/* <ul>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button 
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg 
            className="w-5 h-5 rounded-full me-3" 
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 3900 3900">
              <path 
              fill="#b22234" 
              d="M0 0h7410v3900H0z" />
              <path 
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" 
                stroke="#fff" 
                strokeWidth={300} />
                  <path 
                  fill="#3c3b6e" 
                  d="M0 0h2964v2100H0z" />
                    <g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b">
                      <path 
                      id="a" 
                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                        <use xlinkHref="#a" y={420} /><use xlinkHref="#a" y={840} /><use xlinkHref="#a" y={1260} />
                        </g><use xlinkHref="#a" y={1680} />
                        </g><use xlinkHref="#b" x={247} y={210} />
                        </g><use xlinkHref="#c" x={494} />
                        </g><use xlinkHref="#d" x={988} />
                        <use xlinkHref="#c" x={1976} />
                        <use xlinkHref="#e" x={2470} />
                        </g>
              </svg>
                English (US)
            </button>
          </div>

        </ul> */}
      </Collapse>
    </Navbar>
  );
}
