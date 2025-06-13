'use client';

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { siteConfig, navItems } from '@/config/site';
import { Anchor } from '@/components/ui';
import { IconLayoutDashboard } from '@tabler/icons-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("close-menu-mobile");
  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuClass("close-menu-mobile");
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500); // Duration of fade-out animation
    } else {
      setIsMenuOpen(true);
      setMenuClass("open-menu-mobile");
    }
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuClass("close-menu-mobile");
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    }
  };
  
  // Rutas donde se debe aplicar la clase bg-navbar
  const bgNavbar = ['/', '/biografia'];
  const shouldApplyBgNavbar = bgNavbar.includes(pathname);

  return (
    <nav className={`navbar navbar-expand-md px-2 ${shouldApplyBgNavbar ? 'bg-navbar' : ''}`}>
      <div className='container-fluid gx-1'>
        <Link className='navbar-brand' href='/'>
          <span className='logo-nk ms-2'>
            {siteConfig.name}
          </span>
        </Link>
        <button className="btn-menu-mobile" type="button" onClick={toggleMenu}
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <div className={`wrapper-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <div className='d-flex justify-content-md-center align-md-items-center w-100'>
            <ul className='navbar-nav mb-lg-0'>
              {navItems.map(item => (
                <li key={item.href} className='nav-item mx-3'>
                  <Anchor
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <hr className='mx-3 d-md-none'/>
          <button className="btn btn-primary d-flex align-items-center justify-content-center ms-md-auto mt-3 mb-4 mt-md-0 mb-md-0" type="button">
            <span><IconLayoutDashboard size={24} /></span>
            <span className='ms-2'>Panel</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
