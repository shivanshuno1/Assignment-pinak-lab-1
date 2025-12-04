import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center min-vh-100 py-5 py-lg-0">
            {/* Left Content Column */}
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <div className="hero-content pe-lg-5">
                {/* Badge/Status */}
                <div className="badge-container mb-4">
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center">
                    <span className="p-1 bg-primary rounded-circle me-2"></span>
                    Trusted by 5,000+ companies
                  </span>
                </div>

                {/* Headline */}
                <h1 className="display-2 fw-bold mb-4 lh-sm">
                  Build Your Next{' '}
                  <span className="text-gradient-primary">Digital Experience</span>{' '}
                  With Confidence
                </h1>

                {/* Subtext */}
                <p className="lead fs-4 text-muted mb-5 pe-lg-5">
                  We help startups and enterprises create exceptional digital products 
                  that drive growth and deliver outstanding user experiences. 
                  Join thousands of successful companies using our platform.
                </p>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap gap-3 mb-5">
                  <button 
                    className="btn btn-primary btn-lg px-5 py-3 fw-semibold rounded-pill shadow-lg-primary d-flex align-items-center"
                    aria-label="Get started for free"
                  >
                    <span>Get Started Free</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      className="bi bi-arrow-right ms-2" 
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </button>
                  
                  <button 
                    className="btn btn-outline-primary btn-lg px-5 py-3 fw-semibold rounded-pill border-2"
                    aria-label="Watch demo video"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      className="bi bi-play-circle me-2" 
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg>
                    Watch Demo
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <p className="text-muted mb-3">Trusted by industry leaders:</p>
                  <div className="d-flex flex-wrap align-items-center gap-4">
                    {['TechCorp', 'InnovateCo', 'DigitalStack', 'FutureLabs', 'NexusSoft'].map((company) => (
                      <div 
                        key={company}
                        className="company-logo text-muted fw-bold fs-5 opacity-75 hover-opacity-100 transition-opacity"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-6 col-12 order-lg-2 order-1 mb-5 mb-lg-0">
              <div className="hero-image position-relative">
                {/* Main Image Container */}
                <div className="image-container position-relative rounded-4 overflow-hidden shadow-2xl">
                  <div className="placeholder-image bg-gradient-primary rounded-4 d-flex align-items-center justify-content-center" 
                       style={{ height: '500px' }}>
                    <div className="text-center p-5">
                      <div className="icon-container bg-white rounded-3 p-4 d-inline-block mb-4 shadow">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="48" 
                          height="48" 
                          fill="#0d6efd" 
                          className="bi bi-laptop" 
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                      </div>
                      <h3 className="text-white fw-bold mb-2">Digital Dashboard</h3>
                      <p className="text-white opacity-75">Interactive platform preview</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="floating-card card border-0 shadow-lg position-absolute top-0 start-0 translate-middle bg-white rounded-3 p-3"
                     style={{ width: '160px', zIndex: 2 }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-success bg-opacity-10 rounded-2 p-2 me-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill="#198754" 
                        className="bi bi-graph-up" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 0h1v15h15v1H0V0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="fw-bold fs-5">+245%</div>
                      <div className="text-muted small">Growth</div>
                    </div>
                  </div>
                </div>

                <div className="floating-card card border-0 shadow-lg position-absolute bottom-0 end-0 translate-middle bg-white rounded-3 p-3"
                     style={{ width: '160px', zIndex: 2 }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 rounded-2 p-2 me-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill="#0d6efd" 
                        className="bi bi-people" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="fw-bold fs-5">5,000+</div>
                      <div className="text-muted small">Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
          <div className="bg-gradient position-absolute top-0 end-0 w-50 h-100 opacity-10"></div>
          <div className="circle circle-1 position-absolute rounded-circle bg-primary opacity-05"></div>
          <div className="circle circle-2 position-absolute rounded-circle bg-success opacity-05"></div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          position: relative;
        }

        .text-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
        }

        .shadow-lg-primary {
          box-shadow: 0 10px 40px rgba(13, 110, 253, 0.3) !important;
        }

        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }

        .btn-primary {
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(13, 110, 253, 0.4) !important;
        }

        .btn-outline-primary {
          border-width: 2px;
          transition: all 0.3s ease;
        }

        .btn-outline-primary:hover {
          transform: translateY(-3px);
          background-color: rgba(13, 110, 253, 0.1);
          box-shadow: 0 10px 30px rgba(13, 110, 253, 0.2) !important;
        }

        .btn:active {
          transform: translateY(-1px);
        }

        .btn:focus {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }

        .transition-opacity {
          transition: opacity 0.3s ease;
        }

        .hover-opacity-100:hover {
          opacity: 1 !important;
          color: #0d6efd !important;
        }

        .floating-card {
          animation: float 6s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .floating-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .floating-card:nth-child(2) {
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Circle backgrounds */
        .circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 5%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 10%;
          right: 10%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .bg-gradient {
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(102, 16, 242, 0.1) 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
        }

        /* Responsive adjustments */
        @media (max-width: 991.98px) {
          .display-2 {
            font-size: calc(1.625rem + 4.5vw) !important;
          }
          
          .lead {
            font-size: 1.25rem !important;
          }
          
          .hero-content {
            padding-right: 0 !important;
            text-align: center;
          }
          
          .trust-indicators {
            justify-content: center !important;
          }
          
          .hero-image {
            margin-top: 3rem;
          }
          
          .floating-card {
            position: relative !important;
            transform: none !important;
            margin: 1rem auto !important;
            animation: none;
          }
          
          .floating-card:hover {
            transform: translateY(-5px) !important;
          }
        }

        @media (max-width: 575.98px) {
          .btn-lg {
            padding: 0.75rem 1.5rem !important;
            font-size: 1rem !important;
          }
          
          .display-2 {
            font-size: calc(1.475rem + 2.7vw) !important;
          }
        }

        /* Smooth transitions for all interactive elements */
        .btn, .company-logo, .badge, .floating-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Improve text readability */
        h1 {
          line-height: 1.1 !important;
        }

        .lead {
          line-height: 1.6 !important;
        }
      `}</style>

      {/* Demo spacing for testing */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Scroll down for more content</h2>
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;