import BasicLayout from '@/components/templates/BasicLayout';
import PortofolioLayout from '@/components/templates/PortofolioLayout';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

const Portofolio = () => {
  return (
    <PortofolioLayout>
      <div className={classNames('flex justify-center')}>
        <div className="p-1 md:p-2 bg-sage-soft bg-opacity-40 border-2 border-sage rounded-md text-sage w-fit">
          <p className="text-center text-sm md:text-base">Choose category below</p>
        </div>
      </div>
      <div className={classNames('mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2')}>
        {[...Array(9)].map((_, index) => (
          <div className="w-full aspect-square relative overflow-hidden" key={index}>
            <Image src={'/thumbnail/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg'} alt="image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </PortofolioLayout>
  );
};

export default Portofolio;
