'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig, navItems } from '@/config/site';
import { Anchor } from '@/components/ui';
import { IconLayoutDashboard } from '@tabler/icons-react';

export default function Navbar() {
  const pathname = usePathname();
  
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
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <div className='d-flex justify-content-center align-items-center w-100'>
              <ul className='navbar-nav mb-2 mb-lg-0'>
                {navItems.map(item => (
                  <li key={item.href} className='nav-item mx-3'>
                    <Anchor
                      href={item.href}
                      className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                    >
                      {item.title}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-primary d-flex align-items-center gap-2 ms-auto" type="button">
              <span><IconLayoutDashboard size={24} /></span>
              <span>Panel</span>
            </button>
          </div>
        </div>
      </nav>
  );
}
