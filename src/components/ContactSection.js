import React from "react";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";


export default function ContactSection() {
  const phone = "6281334575487";
  const message = "Halo, Banana88 Trans";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <section
        className="w-10/12 px-5 py-12 mx-auto lg:max-w-7xl md:px-12 lg:px-16 max-w-xl bg-yellow-400 rounded-lg my-12"
        id="contact"
      >
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left text-gray-900">
            <p className="mb-1 text-sm lg:text-xl font-semibold tracking-normal uppercase">
              Ada Pertanyaan?
            </p>
            <h1 className="py-2 text-3xl lg:text-5xl font-bold">
              Hubungi Kami Sekarang!
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleButtonClick}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <IoLogoWhatsapp className="w-7 h-7" />
              <span className="flex items-start ml-3">
                <span className="font-semibold">Contact us Now</span>
              </span>
            </motion.button>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto rounded-lg shadow-md">
        {/* Replace the src attribute with your actual iframe source URL */}
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.0327542398408!2d114.35205951492787!3d-8.23594530127315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15b264313de4d%3A0x740421648504f7e4!2sBANANA%2088%20Event%20organizer%2CTour%2Cand%20Rent%20Car!5e0!3m2!1sen!2sid!4v1701009257420!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
