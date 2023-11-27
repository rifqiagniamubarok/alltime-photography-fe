import React from 'react';
import BasicLayout from './BasicLayout';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const PortofolioLayout = ({ children }) => {
  const currentPath = usePathname();
  const tabs = [
    {
      name: 'Wedding',
      path: '/wedding',
    },
    {
      name: 'Engagement',
      path: '/engagement',
    },
    {
      name: 'Couple Session',
      path: '/couple-session',
    },
  ];
  return (
    <BasicLayout>
      <section className="mt-20 space-y-4 mb-20">
        <div className="font-passions">
          <p className="text-6xl text-center text-sage-dark">Portofolio</p>
        </div>
        <div className="flex justify-center gap-4 text-xl font-tenor">
          {tabs.map(({ name, path }, index) => (
            <Link href={`/portofolio${path}`} key={index}>
              <p className={classNames(currentPath === `/portofolio${path}` ? 'text-sage-dark' : 'text-sage-soft', 'hover:text-sage')}>{name}</p>
            </Link>
          ))}
        </div>
      </section>
      <section>{children}</section>
    </BasicLayout>
  );
};

export default PortofolioLayout;
