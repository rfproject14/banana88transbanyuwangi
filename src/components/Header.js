import Image from "next/image";


const Header = () => {
  return (
    <>
      <div className="my-24 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left text-[#24252a]">
          <h1 className="mt-4 mb-8 text-3xl font-extrabold leading-tight lg:text-3xl">
            Buat perjalananmu jadi lebih mudah dengan Banana88 Trans Banyuwangi
          </h1>
          <p className="mb-8 mx-3 lg:mx-0 text-sm font-medium lg:text-base">
            Rencanakan dan Nikmati Setiap Perjalanan dengan Kemudahan, Kepuasan,
            dan Layanan Terbaik Bersama Banana88 Trans, &amp; Mitra Terpercaya
            Anda dalam Menjelajahi Dunia.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <button className="flex items-center rounded-xl bg-yellow-400 px-5 py-4 tracking-tight uppercase text-sm font-bold text-[#24252a] transition hover:bg-yellow-500 focus:bg-yellow-600">
              Get started now
            </button>
          </div>
        </div>
        <div className="col-span-1 hidden items-center justify-end lg:flex">
          <Image
            className="w-4/5 rounded-2xl"
            src="/asset4.png"
            alt="header image"
            width={600}
            height={300}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;
