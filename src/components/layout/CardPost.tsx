import Image from 'next/image';
import Link from 'next/link';

export default function CardPost() {
  return (
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
  );
}