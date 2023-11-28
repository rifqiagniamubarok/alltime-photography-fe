import CardPackage from '@/components/molecules/CardPackage';
import PackageLayout from '@/components/templates/PackageLayout';
import React from 'react';

const Package = () => {
  return (
    <PackageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {[...Array(8)].map((_, index) => (
          <CardPackage key={index} />
        ))}
      </div>
    </PackageLayout>
  );
};

export default Package;
