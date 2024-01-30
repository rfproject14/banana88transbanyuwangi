import React from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

export default function ListItem({ text }) {
  return (
    <li className="flex flex-row items-center font-medium text-base text-gray-900 ml-3">
      {text === "Tiket Wisata" || text === "Parkir" ? (
        // If text is "Tiket Wisata" or "Parkir", render the X circle icon in green
        <>
          <HiXCircle className="mr-2.5 w-6 h-6 text-gray-900" />
          {text}
        </>
      ) : (
        // If text is not "Tiket Wisata" or "Parkir", render the check circle icon in red
        <>
          <HiCheckCircle className="mr-2.5 w-6 h-6 text-gray-900" />
          {text}
        </>
      )}
    </li>
  );
}
