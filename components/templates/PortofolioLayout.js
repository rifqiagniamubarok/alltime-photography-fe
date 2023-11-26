import React from 'react';
import BasicLayout from './BasicLayout';

const PortofolioLayout = ({ children }) => {
  return (
    <BasicLayout>
      <section className="mt-20 space-y-20 pb-40">
        <div className="font-passions">
          <p className="text-6xl text-center text-sage-dark">Portofolio</p>
        </div>
      </section>
      <section>{children}</section>
    </BasicLayout>
  );
};

export default PortofolioLayout;
