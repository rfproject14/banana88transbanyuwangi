import Image from 'next/image';
import React from 'react';

export default function Gallery() {
  return (
    <div className="flex justify-center items-center px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/asset2.png"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/asset1.png"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/asset4.png"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/foto4.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/tl.jpg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/bromo.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/ijen2.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/ijen.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/tabuhan.JPG"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/pm.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/asset3.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/foto5.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/camp.jpg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/foto1.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/picnik.jpeg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/pm2.jpg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/bali.jpg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
