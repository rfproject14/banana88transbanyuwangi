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
    { name: "Rent Car", href: "/service" },
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
      </Collapse>
    </Navbar>
  );
}
