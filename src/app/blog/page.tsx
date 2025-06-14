import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CardPost from '@/components/layout/CardPost';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Blog`,
};

// Datos de los posts (en una app real vendría de una API o base de datos)
const posts = [
  {
    title: 'Este es un titulo de post muy largo para probar ellipsin',
    content: 'Durante mi carrera he tenido la oportunidad de colaborar con diversas revistas de naturaleza, pero uno de los proyectos más especiales fue cuando fui invitado a capturar la vida silvestre en una reserva ecológica en el norte del país. El desafío era no solo tomar fotografías espectaculares, sino también transmitir la magia de la naturaleza sin alterar su curso.',
    date: '15/12/2024',
    image: '/images/examples/robot-1.jpg',
    slug: 'este-es-un-titulo-de-post-muy-largo-para-probar-ellipsin'
  },
  {
    title: 'Aventuras fotográficas en la montaña',
    content: 'Las montañas siempre han sido mi refugio creativo. En cada expedición descubro nuevas perspectivas y desafíos que me permiten crecer como fotógrafo profesional. La altura, el clima y las condiciones extremas se convierten en parte del proceso creativo.',
    date: '10/12/2024',
    image: '/images/examples/robot-2.jpg',
    slug: 'aventuras-fotograficas-en-la-montana'
  },
  {
    title: 'Técnicas avanzadas de fotografía nocturna',
    content: 'La fotografía nocturna requiere técnicas especiales y mucha práctica. En este post comparto mis secretos para capturar imágenes espectaculares en la oscuridad, desde el equipo necesario hasta los ajustes de cámara más efectivos.',
    date: '05/12/2024',
    image: '/images/examples/robot-3.jpg',
    slug: 'tecnicas-avanzadas-de-fotografia-nocturna'
  },
  {
    title: 'Retratos en luz natural: consejos profesionales',
    content: 'La luz natural es una de las herramientas más poderosas en la fotografía de retratos. Aprende a aprovechar las diferentes horas del día y las condiciones climáticas para crear imágenes emotivas y profesionales.',
    date: '28/11/2024',
    image: '/images/examples/robot-4.jpg',
    slug: 'retratos-en-luz-natural-consejos-profesionales'
  },
  {
    title: 'Fotografía de fauna: paciencia y respeto',
    content: 'Capturar la vida silvestre requiere más que técnica fotográfica. Es fundamental el respeto por los animales y su hábitat. Comparto mi experiencia fotografiando especies en su entorno natural.',
    date: '20/11/2024',
    image: '/images/examples/robot-5.jpg',
    slug: 'fotografia-de-fauna-paciencia-y-respeto'
  },
  {
    title: 'El arte de la composición en paisajes',
    content: 'Un paisaje puede ser hermoso, pero una buena composición lo convierte en arte. Exploro las reglas y técnicas que transforman una vista común en una fotografía extraordinaria que cuenta una historia.',
    date: '15/11/2024',
    image: '/images/examples/robot-0.jpg',
    slug: 'el-arte-de-la-composicion-en-paisajes'
  }
];

export default function Blog() {
  return (
    <>
      <section className='col-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 py-5'>
              <h1>Blog</h1>
            </div>
            {posts.map((post, index) => (
              <div key={index} className='col-11 mx-auto col-md-4'>
                <CardPost 
                  title={post.title}
                  content={post.content}
                  date={post.date}
                  image={post.image}
                  slug={post.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
