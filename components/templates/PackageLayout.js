import React from 'react';
import BasicLayout from './BasicLayout';

const PackageLayout = ({ children }) => {
  return (
    <BasicLayout>
      <section className="mt-10 md:mt-20 space-y-2 md:space-y-4 ">
        <div className="font-passions">
          <p className="text-6xl text-center text-sage-dark">Package</p>
        </div>
        <div className="bg-beige-sage py-5 md:py-14 lg:py-20 px-4 md:px-8 lg:px-10">{children}</div>
      </section>
    </BasicLayout>
  );
};

export default PackageLayout;
