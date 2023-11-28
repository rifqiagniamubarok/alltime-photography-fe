import DatepickerCustom from '@/components/atoms/DatepickerCustom';
import Input from '@/components/atoms/Input';
import CardPackage from '@/components/molecules/CardPackage';
import PackageLayout from '@/components/templates/PackageLayout';
import React from 'react';

const PackageDetail = () => {
  return (
    <PackageLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <CardPackage withButton={false} />
        </div>

        <div className="md:col-span-3 space-y-4">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-tenor text-sage-dark md:text-left text-center">Form Booking</p>
            <p className="text-sm md:text-base text-tenor text-sage-soft">Submit your booking request. If we accept or refuse, we will contact you via WhatsApp or email.</p>
          </div>
          <div>
            <DatepickerCustom id="date-pick" />
          </div>
          <div>
            <Input placeholder="Enter your name" className="w-full" />
          </div>
          <div>
            <Input placeholder="Enter your phone number" className="w-full" />
          </div>
          <div>
            <Input placeholder="Enter your email" className="w-full" />
          </div>
          <div>
            <textarea
              placeholder="Enter your message"
              className="p-2 border rounded-md focus:outline-none text-sage border-sage bg-transparent w-full h-full outline-none focus:ring-sage"
            />
          </div>
          <div>
            <button className="p-2 w-full bg-sage-soft text-beige rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </PackageLayout>
  );
};

export default PackageDetail;
