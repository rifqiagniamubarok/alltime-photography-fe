import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const BasicLayout = ({ children, container = true }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const router = useRouter();
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

  const handleToggleMenu = () => {
    let { current } = menuRef;
    let { classList } = current;
    if (!isOpenMenu) {
      classList.remove('hidden');
      setIsOpenMenu(!isOpenMenu);
    } else {
      classList.add('hidden');
      setIsOpenMenu(!isOpenMenu);
    }
  };

  const handleClickMenu = (link) => {
    router.push(link);
    handleToggleMenu();
  };

  // useEffect(() => {
  //   let { current } = menuRef;
  //   let { classList } = current;
  //   if (!isOpenMenu) {
  //     classList.remove('hidden');
  //   } else {
  //     classList.add('hidden');
  //   }
  // }, [isOpenMenu]);

  return (
    <>
      <div className="fixed z-50 bg-black bg-opacity-80 inset-0 hidden md:hidden" ref={menuRef}>
        <div className="fixed flex justify-between w-screen text-beige items-center p-4">
          <div>
            <p className="font-passions text-3xl md:text-7xl  ">Alltime Photography</p>
          </div>
          <div className="inline-block md:hidden cursor-pointer">
            <button onClick={handleToggleMenu}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className="w-full h-screen  p-4 flex items-center text-beige font-tenor">
          <div>
            {pages.map(({ name, path }) => (
              <div onClick={() => handleClickMenu(path)} key={name}>
                <p className={classNames(currentPath.includes(path) && path !== '/' ? 'text-beige' : currentPath === '/' && path === '/' ? 'text-biege' : 'opacity-50')}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen w-screen bg-beige">
        <div className="w-screen h-[300px] md:h-[500px] relative">
          <div className="w-full md:container md:mx-auto md:px-20 lg:px-40 absolute top-0 z-30 px-4 py-3">
            <div className="w-full text-sage-soft font-tenor flex justify-between items-center ">
              <div className="md:flex hidden md:gap-4 lg:gap-11 py-5 lg:py-11">
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
                <p className="font-passions text-3xl lg:text-7xl text-sage-dark ">Alltime Photography</p>
              </div>
              <div className="inline-block md:hidden cursor-pointer">
                <button onClick={handleToggleMenu}>
                  <AiOutlineMenu />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-[200px]  z-30 bottom-0 bg-gradient-to-t from-beige to-transparent"></div>
          <div className="absolute w-full h-full  z-20 bottom-0 bg-beige bg-opacity-40"></div>
          <Image src={'/thumbnail/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg'} fill alt="wedding" className="object-cover" />
        </div>
        <div className={classNames(container && 'md:container md:mx-auto md:px-20 lg:px-40 px-4 py-3')}>{children}</div>
      </div>
      <div className="w-screen bg-beige">
        <div className="max-w-full md:container md:mx-auto md:px-20 lg:px-40 md:py-20 py-3 px-4">
          <div className="w-full h-0.5 bg-sage-soft"></div>
          <div className="py-4 flex justify-center">
            <div>
              <p className="font-passions text-4xl md:text-7xl text-sage-dark">Alltime Photography</p>
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
