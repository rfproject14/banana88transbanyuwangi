import React from 'react';
import ProductCard from '@/components/ProductCard';
import ListItem from '@/components/ListItem';
import { products } from '@/data';

export default function Service() {
  return (
    <>
      <div className="py-12" id="services">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[1010px] text-center">
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-900 sm:text-4xl md:text-[40px]">
                  Rent Car
                </h2>
                <p className="text-lg font-medium text-gray-900">
                Menyediakan kendaraan untuk disewa dengan layanan terbaik. Kami memastikan kesediaan armada kendaraan yang prima dengan kondisi bersih dan terawat.
                </p>
                <br/>
                <p>
                Banana88 Trans Banyuwangi didukung oleh supir yang sarat pengalaman serta ramah bagi pelanggan dengan biaya Rental Mobil yang relatif Murah,
                sehingga dapat menjadi partner yang baik untuk memenuhi kebutuhan transportasi Anda.
                Kami juga menyediakan kendaraan pengganti dalam kondisi tertentu untuk menjamin perjalanan Anda tetap aman dan nyaman.  
                </p>
                <hr className="w-48 my-8 h-1 mx-auto border-0 rounded bg-gray-700" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {products.map((item) => (
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
