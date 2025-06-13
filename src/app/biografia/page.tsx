import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail, IconDeviceMobile } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Quienes Somos`,
};

export default function About() {
  return (
    <>
      <div className='vitrina-biografia mb-5'>
        <div className='texto-vitrina'>
          <h1 className="pb-10 md:pb-0">Biografía</h1>
          <div className="d-flex flex-column flex-md-row">
            <div className="logo-bio d-none d-md-inline"></div>
            <div className="nombre-bio flex flex-col">
              <div className="presentacion">Mi nombre es</div>
              <div className="nombre">Nikonlas Canons</div>
            </div>
          </div>
        </div>
        <Image
          src='/images/examples/robot-0.jpg'
          alt='Imagen de ejemplo'
          width={1920}
          height={1080}
          className='img-fluid'
        />
      </div>
    
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-12 mx-auto biografia'>
            <div className='container'>
              <div className='col-12 col-lg-9 my-3'>
                <h2>Sobre mi</h2>
                <p className='lead'>Con una pasión innata por capturar la esencia del mundo natural y humano, se ha especializado en fotografía de paisajes, animales y retratos. A lo largo de los años, su trabajo ha trascendido fronteras, llevándolo a colaborar con diversas agencias, revistas y marcas que aprecian su visión única. Cada proyecto es una oportunidad para mostrar la belleza en lo cotidiano y lo extraordinario, fusionando técnica y creatividad de manera excepcional. A lo largo de su carrera ha recorrido diversos lugares, desde vastos desiertos hasta frondosos bosques, siempre en busca del momento perfecto. Su estilo se caracteriza por una atención meticulosa a la luz, el color y la composición, buscando transmitir historias visuales que conecten profundamente con el espectador.</p>
              </div>

              <hr className='logo'/>

              <div className='row'>
                <div className='col-lg-6 d-none d-lg-flex my-3'>
                  <Image
                    src='/images/biografia/camera-1.png'
                    alt='Camara'
                    width={1920}
                    height={1080}
                    className='img-fluid camera'
                  />
                </div>

                <div className='col-12 col-lg-6 my-3'>
                  <h2 className='pb-4'>Proyectos</h2>
                  <ul className='lista-proyectos'>
                    <li>
                      <span>2024</span>
                      <h5>Proyecto</h5>
                      <p className='txt-proyecto'>Proyecto para NatureCorp, donde se documentaron paisajes y elementos naturales que representan la esencia y misión de la empresa, combinando técnica, creatividad y pasión por la naturaleza.</p>
                    </li>
                    <li>
                      <span>2024</span>
                      <h5>Proyecto</h5>
                      <p className='txt-proyecto'>Proyecto para NatureCorp, donde se documentaron paisajes y elementos naturales que representan la esencia y misión de la empresa, combinando técnica, creatividad y pasión por la naturaleza.</p>
                    </li>
                    <li>
                      <span>2024</span>
                      <h5>Proyecto</h5>
                      <p className='txt-proyecto'>Proyecto para NatureCorp, donde se documentaron paisajes y elementos naturales que representan la esencia y misión de la empresa, combinando técnica, creatividad y pasión por la naturaleza.</p>
                    </li>
                    <li>
                      <span>2024</span>
                      <h5>Proyecto</h5>
                      <p className='txt-proyecto'>Proyecto para NatureCorp, donde se documentaron paisajes y elementos naturales que representan la esencia y misión de la empresa, combinando técnica, creatividad y pasión por la naturaleza.</p>
                    </li>
                  </ul>

                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary mt-3' type='button'>
                      Ver más proyectos
                    </button>
                  </div>
                </div>
              </div>

              <hr className='logo'/>

              <div className='row'>

                <div className='col-11 col-md-6 col-lg-4 mx-auto me-lg-0'>
                  <ul className='rrss mb-md-5'>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconBrandFacebook />
                        <span className='mx-3 separador'>|</span>
                        <span>facebook/nikolascanons</span>
                      </Link>
                    </li>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconBrandInstagram />
                        <span className='mx-3 separador'>|</span>
                        <span>@nikolascanons</span>
                      </Link>
                    </li>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconBrandLinkedin />
                        <span className='mx-3 separador'>|</span>
                        <span>linkedin.com/in/nikolascanons</span>
                      </Link>
                    </li>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconBrandX />
                        <span className='mx-3 separador'>|</span>
                        <span>@nikolascanons</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='col-11 col-md-6 col-lg-4 mx-auto ms-lg-0'>
                  <ul className='rrss'>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconMail />
                        <span className='mx-3 separador'>|</span>
                        <span>hablemos@nikolascanons.com</span>
                      </Link>
                    </li>
                    <li className='d-flex align-items-center'>
                      <Link href="#">
                        <IconDeviceMobile />
                        <span className='mx-3 separador'>|</span>
                        <span>+569 5555 5555</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
