import React from 'react';
import BasicLayout from './BasicLayout';

const PackageLayout = ({ children }) => {
  return (
    <BasicLayout>
      <section className="mt-20 space-y-4 ">
        <div className="font-passions">
          <p className="text-6xl text-center text-sage-dark">Package</p>
        </div>
        <div className="bg-beige-sage  py-20 px-10">{children}</div>
      </section>
    </BasicLayout>
  );
};

export default PackageLayout;
