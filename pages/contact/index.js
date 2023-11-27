import BasicLayout from '@/components/templates/BasicLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  const socmeds = [
    {
      name: 'instagram',
      link: '#',
      icon: 'instagram.svg',
      id: '@alltime-curcool',
    },
    {
      name: 'tiktok',
      link: '#',
      icon: 'tiktok.svg',
      id: '@alltime-curcool',
    },
    {
      name: 'x',
      link: '#',
      icon: 'x.svg',
      id: '@alltime-curcool',
    },
    {
      name: 'whatsapp',
      link: '#',
      icon: 'wa.svg',
      id: '@alltime-curcool',
    },
  ];
  return (
    <BasicLayout>
      <section className="mt-20 space-y-4 ">
        <div className="font-passions">
          <p className="text-6xl text-center text-sage-dark">Contact</p>
        </div>
        <div className=" justify-center">
          <div className="flex justify-center">
            <p className="text-center text-sage-soft w-1/2">Chat with us via WhatsApp for fast response to start a consultation</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4 mt-4">
              {socmeds.map(({ name, link, icon, id }, index) => (
                <Link href={link} key={index}>
                  <div className="flex items-center gap-2">
                    <Image src={`/icons/${icon}`} alt={`icon-${name}`} width={30} height={30} />
                    <p className="font-tenor text-sage">{id}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
};

export default Contact;
