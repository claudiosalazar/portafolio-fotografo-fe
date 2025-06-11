
import Carousel from '@/components/home/Carousel';
import GaleriaInicio from '@/components/home/GaleriaInicio';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CardPost from '@/components/layout/CardPost';

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
            <div className='col-12'>
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
          </div>
        </div>
      </section>
    </>
  );
}
