import Image from 'next/image';
import { motion } from 'framer-motion';
const AboutSection = () => {
  const variantsTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const variantsBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="overflow-hidden p-12 bg-white" id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <motion.div
            variants={variantsTop}
            initial="hidden"
            animate="visible"
            className="w-full px-4 lg:w-6/12"
          >
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    href="/jasa"
                    src="/rentcar.jpg"
                    alt="Travel"
                    className="w-full rounded-2xl"
                    width={300}
                    height={600}
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <Image
                    href="/jasa"
                    src="/paket wisata.jpg"
                    alt="Travel"
                    className="w-full rounded-2xl"
                    width={300}
                    height={600}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="my-4">
                  <Image
                    href="/jasa"
                    src="/oxygen.jpg"
                    alt="Travel"
                    className="w-full rounded-2xl"
                    width={300}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={variantsBottom}
            initial="hidden"
            animate="visible"
            className="w-full px-4 lg:w-1/2 xl:w-5/12"
          >
            <div className="mt-10 lg:mt-0">
              <span className="block mb-2 text-lg font-bold text-gray-900">
                About Us
              </span>
              <h2 className="mb-5 text-3xl font-extrabold text-dark text-gray-900 sm:text-[40px]/[48px]">
                BANANA88 TRANS
              </h2>
              <p className="mb-5 text-base font-medium text-gray-800">
                Assalamualaikum wr.wb. Dengan mengucapkan rasa syukur kepada
                Allah SWT yang tak terhingga, sejak September 2016, Banana88
                Trans tetap konsisten bergerak memberikan pelayanan transportasi
                terbaik dan juga penyediaan barang. Dikenalnya Banyuwangi
                sebagai tujuan destinasi wisata kala itu, disitulah kami
                berkomitmen untuk menopang kebutuhan transportasi bagi wisatawan
                yg datang ke Banyuwangi.
              </p>
              <p className="mb-8 text-base font-medium text-gray-800">
                Alhamdulillah, kami bisa bertahan dan eksis sampai saat ini
                memberikan pelayanan terbaik untuk pelanggan. Mulai dari
                Penyewaan Transportasi, Event Organizer, Penyediaan Oxygen,
                layanan paket wisata, perjalanan dinas, study tour, wisata
                religi, droping in-out bandara, dan lain sebagainya. Dan apa
                yang kami capai saat ini tidak luput dari dukungan dan doa
                keluarga, sahabat, rekanan, agen tour and travel yang ada di
                Banyuwangi dan seluruh Indonesia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
