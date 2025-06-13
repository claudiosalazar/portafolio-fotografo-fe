// import { BrandLinkedin, BrandInstagram, BrandTwitter, BrandFacebook } from 'tabler-icons-react';
import { IconBrandLinkedin, IconBrandInstagram, IconBrandX, IconBrandFacebook } from '@tabler/icons-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <small className='d-flex justify-content-center align-items-center flex-column flex-md-row'>
        <span className='d-block pe-0'>
          Nikonlas Canons © {currentYear} - V.1 
        </span>
        <span className='d-block ms-0 ms-md-2'>
          Desarrollo por <Link href='https://www.claudiosalazar.cl' className="link-footer" target='_blank' rel='noopener noreferrer'>Claudio Salazar</Link>
        </span>
      </small>
      <ul>
        <li>
          <Link href="#">
            <IconBrandFacebook size={24} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconBrandInstagram size={24} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconBrandLinkedin size={24} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconBrandX size={24} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
