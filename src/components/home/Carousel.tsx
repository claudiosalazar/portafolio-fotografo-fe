'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';

export default function Carousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [carouselInstance, setCarouselInstance] = useState<any>(null);

  useEffect(() => {
    let carousel: any = null;
    
    const initializeCarousel = () => {
      // Verificar que estemos en el cliente y que Bootstrap esté disponible
      if (typeof window !== 'undefined' && window.bootstrap) {
        const carouselElement = document.getElementById('carouselInicio');
        if (carouselElement) {
          try {
            // Inicializar el carousel con configuración personalizada
            carousel = new window.bootstrap.Carousel(carouselElement, {
              interval: 5000, // 5 segundos
              ride: 'carousel',
              wrap: true, // Repetir infinitamente
              keyboard: true, // Permitir navegación con teclado
              pause: false // No pausar automáticamente al hacer hover
            });
            setCarouselInstance(carousel);
          } catch (error) {
            console.warn('Error al inicializar el carousel:', error);
          }
        }
      } else {
        // Si Bootstrap no está disponible aún, intentar de nuevo después de un breve delay
        setTimeout(initializeCarousel, 100);
      }
    };

    // Inicializar después de que el componente se monte
    const timer = setTimeout(initializeCarousel, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (carousel && carousel.dispose) {
        carousel.dispose();
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (carouselInstance) {
      if (isPlaying) {
        carouselInstance.pause();
        setIsPlaying(false);
      } else {
        carouselInstance.cycle();
        setIsPlaying(true);
      }
    }
  };
  return (
    <div id='carouselInicio' className='carousel slide carousel-fade position-relative'>
      <div className='texto-bienvenida'>
        <h1>Bienvenido a mi portafolio</h1>
        <p>La fotografía es una forma de conectar con el mundo y expresar emociones sin palabras. Cada imagen tiene su propia historia y, a través del lente, se puede ver una realidad llena de matice. Mi objetivo es reflejar la esencia de lo que me rodea y transmitirla a quienes contemplan mi trabajo. Mi pasión me ha llevado a desarrollar un estilo único que se adapta a cada proyecto, buscando siempre la autenticidad y belleza. Si buscas capturar momentos especiales o dar vida a tu proyecto con imágenes de calidad, puedo ofrecerte mi experiencia y profesionalismo.</p>
      </div>
      <div className='carousel-inner h-100'>
        <div className='carousel-item active position-relative h-100'>
          <Image
            src='/images/examples/robot-1.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 1'
          />
        </div>
        <div className='carousel-item position-relative h-100'>
          <Image
            src='/images/examples/robot-2.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 2'
          />
        </div>
        <div className='carousel-item position-relative h-100'>
          <Image
            src='/images/examples/robot-3.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 3'
          />
        </div>
      </div>

      {/* Botón de pausa/reproducción para accesibilidad */}
      <button
        className='control-carousel btn btn-outline-light position-absolute bottom-0 end-0 m-3 d-flex align-items-center justify-content-center'
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pausar carousel automático' : 'Reproducir carousel automático'}
        title={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? (
          <IconPlayerPauseFilled size={24} color="white" />
        ) : (
          <IconPlayerPlayFilled size={24} color="white" />
        )}
      </button>
    </div>
  );
}
