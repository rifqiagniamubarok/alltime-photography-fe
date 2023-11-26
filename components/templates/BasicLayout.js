import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BasicLayout = ({ children }) => {
  const currentPath = usePathname();
  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Portofolio',
      path: '/portofolio',
    },
    {
      name: 'Package',
      path: '/package',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <div className="min-h-screen w-screen bg-beige">
      <div className="w-screen h-[500px] relative">
        <div className="container mx-auto ">
          <div className="absolute top-1 z-30 text-sage-soft font-tenor">
            <div className="flex gap-11 py-11">
              {pages.map(({ name, path }, index) => (
                <Link href={path} key={index}>
                  <p className={classNames(currentPath.includes(path) ? 'text-sage-dark' : 'text-sage-soft')}>{name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[200px]  z-30 bottom-0 bg-gradient-to-t from-beige to-transparent"></div>
        <div className="absolute w-full h-full  z-20 bottom-0 bg-beige bg-opacity-40"></div>
        <Image src={'/thumbnail/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg'} fill alt="wedding" className="object-cover" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BasicLayout;
