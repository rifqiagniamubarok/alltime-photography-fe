import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BasicLayout = ({ children, container = true }) => {
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

  const socmeds = [
    {
      name: 'instagram',
      link: '#',
      icon: 'instagram.svg',
    },
    {
      name: 'tiktok',
      link: '#',
      icon: 'tiktok.svg',
    },
    {
      name: 'x',
      link: '#',
      icon: 'x.svg',
    },
    {
      name: 'whatsapp',
      link: '#',
      icon: 'wa.svg',
    },
  ];
  return (
    <>
      <div className="min-h-screen w-screen bg-beige">
        <div className="w-screen h-[500px] relative">
          <div className="max-w-full container mx-auto px-40 absolute top-0 z-30">
            <div className="w-full  text-sage-soft font-tenor flex justify-between items-center">
              <div className="flex gap-11 py-11">
                {pages.map(({ name, path }, index) => (
                  <Link href={path} key={index}>
                    <p
                      className={classNames(
                        currentPath.includes(path) && path !== '/' ? 'text-sage-dark' : currentPath === '/' && path === '/' ? 'text-sage-dark' : 'text-sage-soft'
                      )}
                    >
                      {name}
                    </p>
                  </Link>
                ))}
              </div>
              <div>
                <p className="font-passions text-7xl text-sage-dark">Alltime Photography</p>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-[200px]  z-30 bottom-0 bg-gradient-to-t from-beige to-transparent"></div>
          <div className="absolute w-full h-full  z-20 bottom-0 bg-beige bg-opacity-40"></div>
          <Image src={'/thumbnail/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg'} fill alt="wedding" className="object-cover" />
        </div>
        <div className={classNames(container && 'container mx-auto px-40')}>{children}</div>
      </div>
      <div className="w-screen bg-beige">
        <div className="max-w-full container mx-auto px-40 py-20">
          <div className="w-full h-0.5 bg-sage-soft"></div>
          <div className="py-4 flex justify-center">
            <div>
              <p className="font-passions text-7xl text-sage-dark">Alltime Photography</p>
              <div className="flex justify-center items-center gap-2 mt-4">
                {socmeds.map(({ name, link, icon }, index) => (
                  <Link key={index} href={link}>
                    <Image src={`/icons/${icon}`} alt={`${name}-icon`} width={24} height={24} />
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-10 text-sage-soft">© 2023 Alltime-Photography</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
