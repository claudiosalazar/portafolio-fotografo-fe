import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CardPost from '@/components/layout/CardPost';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Blog`,
};

export default function Blog() {
  return (
    <>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-12 py-5'>
              <h1 className='pt-5'>Blog</h1>
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
        </div>
      </section>
    </>
  );
}
