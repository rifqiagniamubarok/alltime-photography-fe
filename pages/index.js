import Image from 'next/image';
import { Inter } from 'next/font/google';
import BasicLayout from '@/components/templates/BasicLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <BasicLayout></BasicLayout>;
}
