import Image from 'next/image';
import React from 'react';

export default function ProductCard({ image, title, price, details, href }) {
  const phone = '6281334575487';
  const message =
    `Halo Banana88 Trans,\nSaya ingin Reservasi Mobil\nDi Banana 88 Trans\nJenis Mobil : ${title} \nPeriode pemakaian : ` +
    '\nMulai DD/MM/YYYY Jam : \nSampai DD/MM/YYYY Jam : \nRute Perjalanan : Dalam Kota/ Luar kota ' +
    '\nNama Pemesan : \nAlamat :  \nTitik jemput : \nAlamat Tujuan : ';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <a
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80"
        href={href}
      >
        <Image
          className="h-auto w-full object-cover object-center rounded-md"
          src={image}
          alt="product"
          width={300}
          height={300}
          priority
        />
      </a>
      <div className="mt-4 lg:mt-0 flex flex-col">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <h4 className="text-gray-900 font-semibold mb-8 text-lg">{price}</h4>
          <div className="text-gray-900">{details}</div>
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-8 inline-block rounded-lg bg-yellow-400 py-3 px-8 text-center font-semibold text-gray-900 hover:bg-opacity-90"
        >
          Booking
        </button>
      </div>
    </div>
    <button type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Base</button>

  );
}
