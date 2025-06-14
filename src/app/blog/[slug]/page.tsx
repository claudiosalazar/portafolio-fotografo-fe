import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { IconChevronLeft } from '@tabler/icons-react';
import { notFound } from 'next/navigation';

// Datos simulados de posts (en una app real vendría de una API o base de datos)
const posts = [
  {
    slug: 'este-es-un-titulo-de-post-muy-largo-para-probar-ellipsin',
    title: 'Este es un titulo de post muy largo para probar ellipsin',
    date: '15/12/2024',
    image: '/images/examples/robot-1.jpg',
    content: `Durante mi carrera he tenido la oportunidad de colaborar con diversas revistas de naturaleza, pero uno de los proyectos más especiales fue cuando fui invitado a capturar la vida silvestre en una reserva ecológica en el norte del país. 

El desafío era no solo tomar fotografías espectaculares, sino también transmitir la magia de la naturaleza sin alterar su curso. Fue un trabajo de muchas horas, a veces bajo condiciones extremas, pero el resultado fue increíble.

Las fotos se publicaron en la edición de invierno de la revista, y el reconocimiento fue un impulso para seguir explorando el mundo natural a través de mi cámara. Este proyecto me permitió descubrir una faceta más profunda de mi pasión, ya que pude conectar con los animales y paisajes de una manera muy íntima.

La experiencia me enseñó que la paciencia es fundamental en la fotografía de naturaleza. Muchas veces esperé horas para capturar el momento perfecto, pero cuando llegaba, la satisfacción era inmensa. Cada fotografía cuenta una historia, y mi objetivo siempre es que esa historia trascienda más allá de la imagen.`
  },
  {
    slug: 'aventuras-fotograficas-en-la-montana',
    title: 'Aventuras fotográficas en la montaña',
    date: '10/12/2024',
    image: '/images/examples/robot-2.jpg',
    content: `Las montañas siempre han sido mi refugio creativo. En cada expedición descubro nuevas perspectivas y desafíos que me permiten crecer como fotógrafo profesional.

La altura, el clima y las condiciones extremas se convierten en parte del proceso creativo. Cada amanecer en la cumbre es una oportunidad única para capturar la luz dorada que baña los picos nevados.

He aprendido que el equipo debe ser ligero pero resistente. Después de varios viajes, he perfeccionado mi kit de montaña: una cámara resistente al frío, lentes versátiles y siempre un trípode de carbono que no añada peso innecesario.

La planificación es crucial, pero también hay que estar preparado para lo inesperado. Algunas de mis mejores fotografías han surgido cuando las condiciones no eran las ideales según el plan original.`
  },
  {
    slug: 'tecnicas-avanzadas-de-fotografia-nocturna',
    title: 'Técnicas avanzadas de fotografía nocturna',
    date: '05/12/2024',
    image: '/images/examples/robot-3.jpg',
    content: `La fotografía nocturna requiere técnicas especiales y mucha práctica. En este post comparto mis secretos para capturar imágenes espectaculares en la oscuridad.

El primer paso es dominar el triángulo de exposición: apertura, velocidad de obturación e ISO. En condiciones de poca luz, necesitamos encontrar el equilibrio perfecto entre estos tres elementos.

Para astrofotografía, uso la regla del 500: divido 500 entre la distancia focal de mi lente para obtener el tiempo máximo de exposición sin que las estrellas se vean como líneas. Con un 24mm, serían aproximadamente 20 segundos.

El equipo es fundamental: un trípodo sólido, disparador remoto y una linterna con filtro rojo para no perder la visión nocturna. También recomiendo hacer múltiples tomas para después apilarlas en post-procesamiento.`
  },
  {
    slug: 'retratos-en-luz-natural-consejos-profesionales',
    title: 'Retratos en luz natural: consejos profesionales',
    date: '28/11/2024',
    image: '/images/examples/robot-4.jpg',
    content: `La luz natural es una de las herramientas más poderosas en la fotografía de retratos. Aprende a aprovechar las diferentes horas del día y las condiciones climáticas para crear imágenes emotivas y profesionales.

La hora dorada, esos momentos justo después del amanecer o antes del atardecer, proporciona una luz cálida y suave que favorece cualquier tipo de piel. La luz es direccional pero no dura, creando sombras suaves que definen los rasgos sin ser agresivas.

La hora azul, cuando el sol ya se ha puesto pero el cielo aún conserva algo de luz, es perfecta para retratos más dramáticos. Uso reflectores o flash de relleno para iluminar el rostro mientras mantengo ese fondo azul característico.

Los días nublados son ideales para retratos íntimos. Las nubes actúan como un softbox gigante, difuminando la luz del sol y eliminando sombras duras. Es el momento perfecto para trabajar expresiones y emociones sin preocuparse por la dirección de la luz.`
  },
  {
    slug: 'fotografia-de-fauna-paciencia-y-respeto',
    title: 'Fotografía de fauna: paciencia y respeto',
    date: '20/11/2024',
    image: '/images/examples/robot-5.jpg',
    content: `Capturar la vida silvestre requiere más que técnica fotográfica. Es fundamental el respeto por los animales y su hábitat. Comparto mi experiencia fotografiando especies en su entorno natural.

La paciencia es la virtud más importante en este tipo de fotografía. He pasado días enteros esperando el momento perfecto, observando los patrones de comportamiento de los animales. Cada especie tiene sus horarios y rutinas.

El camuflaje y el silencio son esenciales. Uso ropa de colores neutros y evito movimientos bruscos. Los teleobjetivos largos me permiten mantener distancia segura sin interferir en su comportamiento natural.

La ética es prioritaria: nunca persigo a los animales para conseguir una foto. Si muestran signos de estrés, me retiro inmediatamente. Una fotografía nunca vale más que el bienestar del animal.

El conocimiento del comportamiento animal es crucial. Estudio las especies antes de fotografiarlas: sus hábitos alimenticios, migraciones, épocas de cría. Esta información me ayuda a anticipar sus movimientos y conseguir mejores composiciones.`
  },
  {
    slug: 'el-arte-de-la-composicion-en-paisajes',
    title: 'El arte de la composición en paisajes',
    date: '15/11/2024',
    image: '/images/examples/robot-0.jpg',
    content: `Un paisaje puede ser hermoso, pero una buena composición lo convierte en arte. Exploro las reglas y técnicas que transforman una vista común en una fotografía extraordinaria que cuenta una historia.

La regla de los tercios es fundamental, pero no es la única herramienta. Divido mentalmente la imagen en nueve partes iguales y coloco los elementos principales en las intersecciones o líneas. Sin embargo, a veces romper esta regla crea composiciones más impactantes.

Las líneas guía dirigen la mirada del espectador hacia el punto focal. Pueden ser ríos, senderos, nubes o formaciones rocosas. Una línea bien utilizada puede llevar al observador en un viaje visual a través de la imagen.

La profundidad se crea usando elementos en primer plano, plano medio y fondo. Una roca interesante en primer plano, una montaña en el medio y el cielo como fondo crean esa sensación tridimensional que hace que el espectador sienta que puede caminar dentro de la fotografía.

Los elementos repetitivos como dunas, olas o árboles crean ritmo visual. La interrupción de este patrón con un elemento diferente genera tensión y atrae la atención hacia ese punto específico.`
  }
];

// Función para generar slug desde el título
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .trim();
}

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${siteConfig.name} | Blog | ${post.title}`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-11 mx-auto col-md-10 col-lg-8 pt-5 pb-4'>
              <h1 className='pt-5 d-flex align-items-center mb-4'>
                <Link href="/blog" className='link-volver'>
                  <span className='me-2 me-md-4'>
                    <IconChevronLeft size={40} className='mb-1' />
                    Blog
                  </span>
                </Link>
              </h1>
              
              <article>
                <div className='mb-4'>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={800} 
                    height={400} 
                    className='img-fluid rounded'
                  />
                </div>
                
                <div className='mb-3'>
                  <small className='text-muted'>{post.date}</small>
                </div>
                
                <h2 className='mb-4'>{post.title}</h2>
                
                <div className='post-content'>
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className='mb-3'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
