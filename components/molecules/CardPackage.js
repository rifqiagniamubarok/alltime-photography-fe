import React from 'react';

const CardPackage = () => {
  return (
    <div className="w-full bg-beige p-3">
      <div className="w-full flex">
        <div className="w-5 aspect-square rounded-full bg-beige-sage border-2 border-sage"></div>
      </div>
      <div className="p-4 flex-col justify-between font-tenor">
        <div className="">
          <p className="text-6xl text-center text-sage-dark font-passions">Premium</p>
          <p className="text-center text-sage text-xl">Rp. 4,000,000</p>
        </div>
        <div className="p-8">
          <ul class="list-disc">
            {[...Array(5)].map((_, index) => (
              <li key={index}>Lorem ipsum sage ol the best</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-sage-soft text-white px-10 py-2 rounded-md hover:bg-opacity-90">Book</button>
        </div>
      </div>
    </div>
  );
};

export default CardPackage;
