import Link from 'next/link';
import React from 'react';

const CardPackage = ({ withButton = true }) => {
  return (
    <div className="w-full bg-beige p-2 md:p-3">
      <div className="w-full flex">
        <div className="w-3 md:w-5 aspect-square rounded-full bg-beige-sage border-2 border-sage"></div>
      </div>
      <div className="p-2 lg:p-4 flex-col justify-between font-tenor">
        <div className="">
          <p className="text-4xl lg:text-6xl text-center text-sage-dark font-passions">Premium</p>
          <p className="text-center text-sage text-base lg:text-xl">Rp. 4,000,000</p>
        </div>
        <div className="p-6 md:p-2 lg:p-8 text-sm lg:text-base">
          <ul class="list-disc">
            {[...Array(5)].map((_, index) => (
              <li key={index}>Lorem ipsum sage ol the best</li>
            ))}
          </ul>
        </div>
        {withButton && (
          <div className="flex justify-center">
            <Link href={`/package/coba`}>
              <button className="bg-sage-soft text-white px-5 lg:px-10 py-1 lg:py-2 rounded-md hover:bg-opacity-90 text-sm lg:text-base">Book</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPackage;
