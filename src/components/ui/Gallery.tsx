"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <>
      <div className="col-11 mx-auto col-md-12 my-5 galerias">
        <div className='row g-0'>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <Image 
              src='/images/galeria/g-paisajes.jpg' 
              alt='Imagen de ejemplo' 
              width={800} 
              height={400} 
              className='img-fluid' 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal"
              onClick={() => handleImageClick('/images/galeria/g-paisajes.jpg')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      {/* Modal de Bootstrap */}
      <div className="modal fade" id="imageModal" tabIndex={-1} data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body text-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              {selectedImage && (
                <img src={selectedImage} alt="Imagen ampliada" className="img-fluid" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}