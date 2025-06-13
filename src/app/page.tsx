
import Carousel from '@/components/home/Carousel';
import GaleriaInicio from '@/components/home/GaleriaInicio';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CardPost from '@/components/layout/CardPost';
import Link from 'next/link';

export const metadata: Metadata = {
  title: siteConfig.name,
};

export default function Home() {
  return (
    <>
      <div className='contenedor-carousel'>
        <Carousel />
      </div>

      <section className='container'>
        <div className='row'>
          <div className='col-11 mx-auto col-md-12'>
            <GaleriaInicio />
          </div>

          <div className='col-11 mx-auto col-md-4'>
            <CardPost />
          </div>
          <div className='col-11 mx-auto col-md-4'>
            <CardPost />
          </div>
          <div className='col-11 mx-auto col-md-4'>
            <CardPost />
          </div>
        </div>
      </section>
    </>
  );
}
