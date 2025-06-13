import Image from 'next/image';
import Link from 'next/link';

export default function GaleriaInicio() {
  return (
    <>
      <h2 className='mb-4 mt-5'>Últimas fotografías</h2>
      <div className='galeria'>
        <Image
          src='/images/examples/robot-0.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen1'
        />
        <Image
          src='/images/examples/robot-1.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen2'
        />
        <Image
          src='/images/examples/robot-2.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen3'
        />
        <Image
          src='/images/examples/robot-3.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen4'
        />
        <Image
          src='/images/examples/robot-4.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen5'
        />
        <Image
          src='/images/examples/robot-5.jpg'
          alt='Imagen de ejemplo'
          width={1200}
          height={1200}
          className='img-fluid imagen6'
        />
      </div>

      <div className='d-flex justify-content-center mt-4 '>
        <Link href='/galeria' className='btn btn-primary btn-large mt-4 mb-5'>
          Ver galería completa
        </Link>
      </div>
    </>
  );
}