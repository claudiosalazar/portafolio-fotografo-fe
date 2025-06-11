import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/home/Carousel';
import GaleriaInicio from '@/components/home/GaleriaInicio';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

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
              <div className='card mb-4'>
                  <Image src='/images/examples/robot-1.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid'/>
                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and make
                      up the bulk of the card’s content.
                    </p>
                    <a href='#' className='btn btn-secondary'>
                      Más información
                    </a>
                  </div>
                </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card mb-4'>
                  <Image src='/images/examples/robot-1.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid'/>
                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and make
                      up the bulk of the card’s content.
                    </p>
                    <a href='#' className='btn btn-secondary'>
                      Más información
                    </a>
                  </div>
                </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card mb-4'>
                  <Image src='/images/examples/robot-1.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid'/>
                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and make
                      up the bulk of the card’s content.
                    </p>
                    <a href='#' className='btn btn-secondary'>
                      Más información
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
