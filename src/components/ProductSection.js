import React from 'react';
import ProductCard from '@/components/ProductCard';
import ListItem from '@/components/ListItem';
import { motion } from 'framer-motion';

export default function ProductSection() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="py-12"
      id="services"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[1010px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-900 sm:text-4xl md:text-[40px]">
                Rent Car
              </h2>
              <p className="text-lg font-medium text-gray-900">
                Menyediakan kendaraan untuk disewa dengan layanan terbaik. Kami
                memastikan kesediaan armada kendaraan yang prima dengan kondisi
                bersih dan terawat.
              </p>
              <br/>
              <p className="text-lg font-medium text-gray-900">
                Banana88 Trans Banyuwangi didukung oleh supir yang sarat
                pengalaman serta ramah bagi pelanggan dengan biaya Rental Mobil
                yang relatif Murah, sehingga dapat menjadi partner yang baik
                untuk memenuhi kebutuhan transportasi Anda. Kami juga
                menyediakan kendaraan pengganti dalam kondisi tertentu untuk
                menjamin perjalanan Anda tetap aman dan nyaman.
              </p>
              <hr className="w-48 my-8 h-1 mx-auto border-0 rounded bg-gray-700" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <ProductCard
            href="/service"
            image="/avanza.png"
            title="Avanza / Xenia"
            price="Rp. 700.000,00"
            details={
              <div className="w-full">
                <ul className="space-y-3">
                  <ListItem text="Supir" />
                  <ListItem text="BBM" />
                  <ListItem text="Tiket Wisata" />
                  <ListItem text="Parkir" />
                </ul>
              </div>
            }
          />
          <ProductCard
            href="/service"
            image="/fortuner.png"
            title="Fortuner"
            price="Rp. 2.000.000,00"
            details={
              <div className="w-full">
                <ul className="space-y-3">
                  <ListItem text="Supir" />
                  <ListItem text="BBM" />
                  <ListItem text="Tiket Wisata" />
                  <ListItem text="Parkir" />
                </ul>
              </div>
            }
          />
          <ProductCard
            href="/service"
            image="/innova.png"
            title="Innova Reborn"
            price="Rp. 900.000,00"
            details={
              <div className="w-full">
                <ul className="space-y-3">
                  <ListItem text="Supir" />
                  <ListItem text="BBM" />
                  <ListItem text="Tiket Wisata" />
                  <ListItem text="Parkir" />
                </ul>
              </div>
            }
          />
          <ProductCard
            href="/service"
            image="/hiace.png"
            title="HiAce"
            price="Rp. 1.500.000,00"
            details={
              <div className="w-full">
                <ul className="space-y-3">
                  <ListItem text="Supir" />
                  <ListItem text="BBM" />
                  <ListItem text="Tiket Wisata" />
                  <ListItem text="Parkir" />
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
