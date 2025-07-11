import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { IconChevronLeft } from '@tabler/icons-react';
import Gallery from '@/components/ui/Gallery';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Galeria | Personas`,
};

export default function Personas() {
  return (
    <>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-11 mx-auto col-md-12 pt-5 pb-4'>
              <h1 className='pt-5 d-flex align-items-center'>
                <Link href="/galeria" className='link-volver'>
                  <span className='me-2 me-md-2 d-md-none'>
                    <IconChevronLeft size={24} className='mb-1' />Galería
                  </span>
                  <span className='me-2 me-md-4 d-none d-md-inline'>
                    <IconChevronLeft size={40} className='mb-1' />Galería
                  </span>
                </Link>
                <span>/ Personas</span>
              </h1>
            </div>

            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}