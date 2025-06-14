import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Galeria`,
};

export default function GaleriaInicio() {
  return (
    <>
      <section className='col-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-11 mx-auto col-md-12 pt-5 pb-4'>
              <h1>Galería</h1>
            </div>

            <div className="col-11 mx-auto col-md-12 galeria-inicio my-5">
              <div className='paisajes'>
                <Link href="/galeria/paisajes" className="link-galeria-inicio">
                  <span>Paisajes</span>
                  <Image src='/images/galeria/g-paisajes.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid' />
                </Link>
              </div>
              <div className='personas'>
                <Link href="/galeria/personas" className="link-galeria-inicio">
                  <span>Personas</span>
                  <Image src='/images/galeria/g-personas.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid' />
                </Link>
              </div>
              <div className='animales'>
                <Link href="/galeria/fauna" className="link-galeria-inicio">
                  <span>Fauna</span>
                  <Image src='/images/galeria/g-animales.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid' />
                </Link>
              </div>
              <div className='deporte'>
                <Link href="/galeria/deporte" className="link-galeria-inicio">
                  <span>Deporte</span>
                  <Image src='/images/galeria/g-paisajes.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
