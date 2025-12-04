import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.navbar') && !e.target.closest('.navbar-toggler')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav 
        className={`navbar navbar-expand-lg fixed-top navbar-light transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}
        style={{
          transition: 'all 0.3s ease',
          paddingTop: isScrolled ? '0.5rem' : '1rem',
          paddingBottom: isScrolled ? '0.5rem' : '1rem'
        }}
      >
        <div className="container">
          {/* Brand Logo */}
          <a 
            className="navbar-brand fw-bold text-primary d-flex align-items-center" 
            href="#"
            aria-label="Brand Name - Home"
          >
            <div className="me-2 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                 style={{ width: '40px', height: '40px' }}>
              <span className="fw-bold">BN</span>
            </div>
            <span>BrandName</span>
          </a>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div 
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <a
                    className={`nav-link px-3 mx-1 ${link.active ? 'active fw-semibold' : ''}`}
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    onClick={() => {
                      setIsMenuOpen(false);
                      // In a real app, you'd set active state here
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsMenuOpen(false);
                      }
                    }}
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {link.name}
                    {link.active && (
                      <span 
                        className="position-absolute bottom-0 start-50 translate-middle-x"
                        style={{
                          width: '20px',
                          height: '3px',
                          backgroundColor: '#0d6efd',
                          borderRadius: '2px'
                        }}
                      ></span>
                    )}
                  </a>
                </li>
              ))}
              
              {/* CTA Button */}
              <li className="nav-item d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                <button
                  className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
                  aria-label="Get Started"
                  style={{
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(13, 110, 253, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(13, 110, 253, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 14px rgba(13, 110, 253, 0.25)';
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = '2px solid #0d6efd';
                    e.target.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = 'none';
                  }}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Global Styles */}
      <style jsx global>{`
        /* Custom styles for better UX */
        .navbar {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link {
          position: relative;
          color: #495057 !important;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        
        .nav-link:hover,
        .nav-link:focus {
          color: #0d6efd !important;
          background-color: rgba(13, 110, 253, 0.1);
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          color: #0d6efd !important;
          font-weight: 600;
        }
        
        .navbar-toggler {
          border: none;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .navbar-toggler:focus {
          box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
          outline: none;
        }
        
        .navbar-toggler:hover {
          background-color: rgba(13, 110, 253, 0.1);
        }
        
        .navbar-collapse {
          transition: all 0.3s ease;
        }
        
        /* Mobile menu backdrop */
        @media (max-width: 991.98px) {
          .navbar-collapse.show {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            margin-top: 1rem;
          }
          
          .nav-item {
            margin: 0.25rem 0;
          }
          
          .nav-link {
            padding: 0.75rem 1rem !important;
          }
        }
        
        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        *:focus:not(:focus-visible) {
          outline: none;
        }
        
        *:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Add padding to body to account for fixed navbar */
        body {
          padding-top: 76px;
        }
        
        /* Custom button hover effect */
        .btn-primary {
          transition: all 0.2s ease;
        }
        
        .btn-primary:hover,
        .btn-primary:focus {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.3) !important;
        }
        
        .btn-primary:active {
          transform: translateY(0);
        }
      `}</style>

      {/* Demo content to test sticky navbar */}
      <div style={{ minHeight: '150vh', paddingTop: '2rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Demo Content</h1>
              <p className="lead mb-5">Scroll down to see the sticky navbar in action!</p>
              
              <div className="row g-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h5 className="card-title">Section {i + 1}</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 pt-5" id="home">
                <h2>Home Section</h2>
                <p>Content for home section...</p>
              </div>
              
              <div className="mt-5 pt-5" id="about">
                <h2>About Section</h2>
                <p>Content for about section...</p>
              </div>
              
              <div className="mt-5 pt-5" id="services">
                <h2>Services Section</h2>
                <p>Content for services section...</p>
              </div>
              
              <div className="mt-5 pt-5" id="contact">
                <h2>Contact Section</h2>
                <p>Content for contact section...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;