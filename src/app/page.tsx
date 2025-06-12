
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
      <div className='container-fluid'>
        <Carousel />
      </div>
      <section className='col-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-5'>
              <GaleriaInicio />
            </div>

            <div className='col-12 col-md-4'>
              <CardPost />
            </div>

            <div className='col-12 col-md-4'>
              <CardPost />
            </div>

            <div className='col-12 col-md-4'>
              <CardPost />
            </div>

            <div className='col-12 mb-5'>
              <div className='d-flex justify-content-center mt-4'>
                <Link href='/galeria' className='btn btn-primary btn-large mt-4 mb-5'>
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
