import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Feather Icons as React components
const FeatherIcon = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const icons = {
    Code: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    Smartphone: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
    Palette: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="13.5" cy="6.5" r=".5"></circle>
        <circle cx="17.5" cy="10.5" r=".5"></circle>
        <circle cx="8.5" cy="7.5" r=".5"></circle>
        <circle cx="6.5" cy="12.5" r=".5"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
      </svg>
    ),
    Cpu: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    Cloud: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    BarChart: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
    Zap: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    Shield: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    Users: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    Globe: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  };

  const IconComponent = icons[name];
  return IconComponent ? <IconComponent /> : null;
};

const ServicesFeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: 'Code',
      title: 'Web Development',
      description: 'Build high-performance websites and web applications with modern frameworks like React, Vue, and Next.js.',
      color: 'primary',
      gradient: 'linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      color: 'success',
      gradient: 'linear-gradient(135deg, #198754 0%, #157347 100%)'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'User-centered design that delights users, drives conversions, and creates memorable experiences.',
      color: 'warning',
      gradient: 'linear-gradient(135deg, #ffc107 0%, #ffca2c 100%)'
    },
    {
      icon: 'Cpu',
      title: 'API Integration',
      description: 'Seamless integration with third-party services, payment gateways, and internal systems.',
      color: 'info',
      gradient: 'linear-gradient(135deg, #0dcaf0 0%, #0ba5c9 100%)'
    },
    {
      icon: 'Cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, deployment strategies, and serverless architecture on AWS, Azure, and GCP.',
      color: 'purple',
      gradient: 'linear-gradient(135deg, #6f42c1 0%, #59359e 100%)'
    },
    {
      icon: 'BarChart',
      title: 'Digital Strategy',
      description: 'Data-driven strategies for digital transformation, growth hacking, and business optimization.',
      color: 'danger',
      gradient: 'linear-gradient(135deg, #dc3545 0%, #bb2d3b 100%)'
    }
  ];

  const colorClasses = {
    primary: 'bg-primary bg-opacity-10 text-primary',
    success: 'bg-success bg-opacity-10 text-success',
    warning: 'bg-warning bg-opacity-10 text-warning',
    info: 'bg-info bg-opacity-10 text-info',
    purple: 'bg-purple bg-opacity-10 text-purple',
    danger: 'bg-danger bg-opacity-10 text-danger'
  };

  return (
    <>
      <section className="py-5 py-lg-6 position-relative overflow-hidden" aria-label="Services Section">
        {/* Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-0 start-0 w-50 h-50 bg-primary bg-opacity-5 rounded-circle blur-xl"></div>
          <div className="position-absolute bottom-0 end-0 w-50 h-50 bg-purple bg-opacity-5 rounded-circle blur-xl"></div>
        </div>

        <div className="container position-relative">
          {/* Section Header */}
          <div className="row justify-content-center mb-5 mb-lg-6">
            <div className="col-lg-8 text-center">
              <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill fw-semibold mb-3">
                Our Services
              </span>
              <h2 className="display-5 fw-bold mb-3">
                Everything you need to{' '}
                <span className="text-gradient">
                  succeed
                </span>
              </h2>
              <p className="lead text-muted mb-0">
                Comprehensive digital solutions tailored to transform your business and accelerate growth.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="col-md-6 col-lg-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
              >
                <div 
                  className={`service-card h-100 p-4 rounded-4 border transition-all ${
                    hoveredIndex === index 
                      ? 'shadow-lg border-primary border-opacity-25' 
                      : 'shadow-sm border-light'
                  }`}
                  style={{
                    backgroundColor: 'white',
                    transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                  tabIndex={0}
                  role="article"
                  aria-label={`Service: ${service.title}`}
                >
                  {/* Icon Container */}
                  <div 
                    className={`icon-container mb-4 rounded-3 p-3 ${colorClasses[service.color]}`}
                    style={{
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: hoveredIndex === index ? service.gradient : '',
                      color: hoveredIndex === index ? 'white' : '',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FeatherIcon 
                      name={service.icon} 
                      size={28}
                      color={hoveredIndex === index ? 'white' : `var(--bs-${service.color})`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="h4 fw-bold mb-3" style={{
                    color: hoveredIndex === index ? '#0d6efd' : '#212529'
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a 
                    href="#"
                    className="d-inline-flex align-items-center text-decoration-none fw-semibold"
                    style={{
                      color: hoveredIndex === index ? '#0d6efd' : '#6c757d',
                      transition: 'color 0.3s ease'
                    }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="ms-2"
                      style={{
                        transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row justify-content-center mt-6">
            <div className="col-lg-8 text-center">
              <div className="bg-light rounded-4 p-5 border border-light">
                <h3 className="h2 fw-bold mb-3">Ready to transform your business?</h3>
                <p className="text-muted mb-4">
                  Join 10,000+ companies that trust us with their digital transformation.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <button
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold"
                    aria-label="Get started with our services"
                  >
                    Get Started Free
                  </button>
                  <button
                    className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill fw-semibold"
                    aria-label="Schedule a demo"
                  >
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles - Fixed */}
      <style jsx global>{`
        /* Custom CSS Variables */
        :root {
          --bs-purple: #6f42c1;
        }
        
        .bg-purple {
          background-color: var(--bs-purple) !important;
        }
        
        .text-purple {
          color: var(--bs-purple) !important;
        }
        
        /* Service Card Styles */
        .service-card {
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0d6efd 0%, #6f42c1 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover::before,
        .service-card:focus::before {
          transform: scaleX(1);
        }
        
        /* Icon hover animation */
        .icon-container svg {
          transition: all 0.3s ease;
        }
        
        .service-card:hover .icon-container svg {
          transform: scale(1.1);
        }
        
        /* Text gradient */
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd 0%, #6f42c1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Accessibility */
        .service-card:focus {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-card {
            padding: 1.5rem !important;
          }
          
          .icon-container {
            width: 56px !important;
            height: 56px !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-5 {
            font-size: 2rem;
          }
          
          .lead {
            font-size: 1.1rem;
          }
          
          .btn-lg {
            padding: 0.75rem 1.5rem !important;
            font-size: 1rem !important;
          }
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        
        /* Blur effect for backgrounds */
        .blur-xl {
          filter: blur(80px);
        }
      `}</style>
    </>
  );
};

export default ServicesFeaturesSection;