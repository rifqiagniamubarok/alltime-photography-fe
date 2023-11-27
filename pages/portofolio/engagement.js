import PortofolioLayout from '@/components/templates/PortofolioLayout';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

const Engagement = () => {
  return (
    <PortofolioLayout>
      <section>
        <div className={classNames('mt-20 grid grid-cols-3 gap-4')}>
          {[...Array(9)].map((_, index) => (
            <div className="w-full aspect-square relative overflow-hidden cursor-pointer" key={index}>
              <div className="w-full h-full bottom-0 absolute z-20 bg-gradient-to-t from-sage to-transparent">
                <div className="flex w-full h-full items-end justify-center p-8 hover:pb-12 text-3xl hover:text-3xl transition-all delay-100 ease-in-out">
                  <p className=" text-white">Rena & Albert</p>
                </div>
              </div>
              <Image src={'/thumbnail/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg'} alt="image" fill className="object-cover hover:scale-125" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="p-2 hover:bg-sage-soft cursor-pointer text-lg text-sage hover:text-white hover:bg-opacity-25">
            <p className="">Load more</p>
          </div>
        </div>
      </section>
    </PortofolioLayout>
  );
};

export default Engagement;
