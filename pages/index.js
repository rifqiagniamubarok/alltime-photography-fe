import Image from 'next/image';
import { Inter } from 'next/font/google';
import BasicLayout from '@/components/templates/BasicLayout';
import { Datepicker } from 'flowbite-react';
import DatepickerCustom from '@/components/atoms/DatepickerCustom';
import CardPackage from '@/components/molecules/CardPackage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <BasicLayout>
      <section className="mt-0 md:mt-20 space-y-10 md:space-y-20 pb-40">
        <div className="font-tenor">
          <p className="text-lg md:text-2xl text-center text-sage-dark">About us</p>
          <p className="text-sm md:text-base text-center text-sage-soft mt-4">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
          </p>
        </div>
        <div className="font-tenor">
          <p className="text-lg md:text-2xl text-center text-sage-dark">Why choose us</p>
          <p className="text-sm md:text-base text-center text-sage-soft mt-4">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
          </p>
        </div>
        <div className="">
          <p className="text-lg md:text-2xl text-center text-sage-dark">Check your scheduel in our availibility</p>
          <div className="flex  justify-center mt-4">
            <div className="w-80">
              <DatepickerCustom className="text-beige" />
            </div>
          </div>
        </div>
        <div className="bg-beige-sage  p-4 lg:p-10 ">
          <p className="text-lg md:text-2xl text-center text-sage-dark mb-10">Our best offer</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4">
            {[...Array(3)].map((_, index) => (
              <CardPackage key={index} />
            ))}
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}
