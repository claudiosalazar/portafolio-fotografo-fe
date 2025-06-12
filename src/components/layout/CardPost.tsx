'use client';

import Image from 'next/image';
import { Anchor } from '@/components/ui';
import { IconPlus } from '@tabler/icons-react';

export default function CardPost() {
  return (
    <div className='card mb-4'>
      <Image src='/images/examples/robot-1.jpg' alt='Imagen de ejemplo' width={800} height={400} className='img-fluid'/>
      <div className='card-body'>
        <small className='card-date'>00 / 00 / 0000</small>
        <h5 className='card-title'>Este es un titulo de post muy largo para probar ellipsin</h5>
        <p className='card-text'>
          Durante mi carrera he tenido la oportunidad de colaborar con diversas revistas de naturaleza, pero uno de los proyectos más especiales fue cuando fui invitado a capturar la vida silvestre en una reserva ecológica en el norte del país. El desafío era no solo tomar fotografías espectaculares, sino también transmitir la magia de la naturaleza sin alterar su curso. Fue un trabajo de muchas horas, a veces bajo condiciones extremas, pero el resultado fue increíble. Las fotos se publicaron en la edición de invierno de la revista, y el reconocimiento fue un impulso para seguir explorando el mundo natural a través de mi cámara. Este proyecto me permitió descubrir una faceta más profunda de mi pasión, ya que pude conectar con los animales y paisajes de una manera muy íntima.
        </p>
        <Anchor href="#" className="btn btn-secondary">
          Leer más
        </Anchor>
      </div>
    </div>
  );
}