import AdminSidebar from '@/components/organisms/AdminSidebar';
import { usePathname } from 'next/navigation';
import { HiChartPie } from 'react-icons/hi';
import { BiSolidPackage } from 'react-icons/bi';
import { MdCalendarMonth } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { SiIconjar } from 'react-icons/si';

const AdminLayout = ({ children }) => {
  const currentPath = usePathname();
  const pages = [
    { name: 'dashboard', path: '/dashboard', icon: HiChartPie },
    { name: 'portofolio', path: '/portofolio', icon: SiIconjar },
    { name: 'package', path: '/package', icon: BiSolidPackage },
    { name: 'schedule', path: '/schedule', icon: MdCalendarMonth },
    { name: 'setting', path: '/setting', icon: IoIosSettings },
  ];

  const currentPage = pages.find(({ path }) => currentPath.includes(path));

  return (
    <div className="flex">
      <AdminSidebar pages={pages} />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
