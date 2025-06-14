'use client';

import Image from 'next/image';
import { Anchor } from '@/components/ui';

interface CardPostProps {
  title?: string;
  content?: string;
  date?: string;
  image?: string;
  slug?: string;
}

// Función para generar slug desde el título
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .trim();
}

export default function CardPost({ 
  title = 'Este es un titulo de post muy largo para probar ellipsin',
  content = 'Durante mi carrera he tenido la oportunidad de colaborar con diversas revistas de naturaleza, pero uno de los proyectos más especiales fue cuando fui invitado a capturar la vida silvestre en una reserva ecológica en el norte del país. El desafío era no solo tomar fotografías espectaculares, sino también transmitir la magia de la naturaleza sin alterar su curso. Fue un trabajo de muchas horas, a veces bajo condiciones extremas, pero el resultado fue increíble. Las fotos se publicaron en la edición de invierno de la revista, y el reconocimiento fue un impulso para seguir explorando el mundo natural a través de mi cámara. Este proyecto me permitió descubrir una faceta más profunda de mi pasión, ya que pude conectar con los animales y paisajes de una manera muy íntima.',
  date = '15/12/2024',
  image = '/images/examples/robot-1.jpg',
  slug
}: CardPostProps) {
  // Generar slug automáticamente si no se proporciona
  const postSlug = slug || generateSlug(title);
  const postUrl = `/blog/${postSlug}`;

  return (
    <div className='card mb-4'>
      <Image src={image} alt={title} width={800} height={400} className='img-fluid'/>
      <div className='card-body'>
        <small className='card-date'>{date}</small>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          {content}
        </p>
        <Anchor href={postUrl} className="btn btn-secondary align-items-center justify-content-center justify-content-md-start">
          Leer más
        </Anchor>
      </div>
    </div>
  );
}