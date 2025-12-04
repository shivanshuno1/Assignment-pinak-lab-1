import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const FullWidthFooter = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="main-footer py-5">
        <div className="container-fluid px-4 px-md-5">
          <div className="row">
            {/* Left Column - Contact Info */}
            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="mb-4">
                <h2 className="h3 fw-bold mb-3 text-white">BrandName</h2>
                {/* Navigation Links */}
                <div className="d-flex flex-wrap gap-3 gap-md-4 mb-4">
                  {["Home", "About", "Services", "Contact", "Get Started"].map((link) => (
                    <a 
                      key={link} 
                      href="#" 
                      className="footer-nav-link text-decoration-none"
                    >
                      {link}
                    </a>
                  ))}
                </div>
                <p className="text-light opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
                  Creating exceptional digital experiences for forward-thinking businesses.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="mb-4">
                <div className="mb-3">
                  <div className="d-flex align-items-start mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2 mt-1" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <div>
                      <div className="text-light opacity-75 mb-1">Email us at</div>
                      <div className="fw-semibold text-white">hello@brandname.com</div>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2 mt-1" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <div>
                      <div className="text-light opacity-75 mb-1">Call us</div>
                      <div className="fw-semibold text-white">+1 (353) 123-4567</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-light opacity-75">Response time</span>
                  <div className="fw-semibold text-white">Within 24 hours</div>
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="d-flex gap-3">
                {[
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaLinkedin, label: "LinkedIn" },
                  { icon: FaGithub, label: "GitHub" },
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaYoutube, label: "YouTube" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="social-icon d-flex align-items-center justify-content-center rounded-circle border border-secondary text-white"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="col-12 col-md-6 col-lg-8">
              <div className="row">
                {/* Company Column */}
                <div className="col-6 col-md-4 mb-4 mb-md-0">
                  <h4 className="h5 fw-semibold mb-3 text-white">Company</h4>
                  <ul className="list-unstyled">
                    {["About", "Blog", "Careers", "Press", "Partners"].map((link) => (
                      <li key={link} className="mb-2">
                        <a href="#" className="footer-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Column */}
                <div className="col-6 col-md-4 mb-4 mb-md-0">
                  <h4 className="h5 fw-semibold mb-3 text-white">Support</h4>
                  <ul className="list-unstyled">
                    {["Help Center", "Contact", "Privacy", "Terms", "Security"].map((link) => (
                      <li key={link} className="mb-2">
                        <a href="#" className="footer-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter/CTA Column */}
                <div className="col-12 col-md-4 mt-4 mt-md-0">
                  <h4 className="h5 fw-semibold mb-3 text-white">Stay Updated</h4>
                  <p className="text-light opacity-75 mb-3 small">
                    Subscribe to our newsletter for the latest updates.
                  </p>
                  <div className="input-group mb-3">
                    <input 
                      type="email" 
                      className="form-control bg-dark border-secondary text-white" 
                      placeholder="Your email" 
                      aria-label="Email"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input bg-dark border-secondary" 
                      type="checkbox" 
                      id="newsletterConsent" 
                    />
                    <label className="form-check-label text-light opacity-75 small" htmlFor="newsletterConsent">
                      I agree to receive marketing emails
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-top border-secondary opacity-25"></div>

      {/* Bottom Bar */}
      <div className="bottom-bar py-4">
        <div className="container-fluid px-4 px-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-light opacity-75 mb-3 mb-md-0 order-2 order-md-1">
              © {new Date().getFullYear()} BrandName. All rights reserved.
            </p>
            
            <div className="d-flex flex-wrap gap-3 gap-md-4 order-1 order-md-2 mb-3 mb-md-0">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Updated CSS */}
      <style jsx>{`
        /* FULL WIDTH FIXES */
        footer {
          width: 100vw !important;
          
          margin-left: calc(-45vw + 50%) !important;
          margin-right: calc(-50vw + 50%) !important;
          left: 0 !important;
          right: 0 !important;
          position: relative;
          overflow: hidden;
        }
        
        /* Navigation Links */
        .footer-nav-link {
          color: #E5E7EB;
          opacity: 0.85;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .footer-nav-link:hover {
          color: #60A5FA !important;
          opacity: 1;
        }
        
        /* Colors */
        .main-footer {
          background-color: #111827;
        }
        
        .bottom-bar {
          background-color: #0F172A;
        }
        
        .border-secondary {
          border-color: #374151 !important;
        }
        
        .text-light {
          color: #E5E7EB !important;
        }
        
        /* Social Icons */
        .social-icon {
          width: 40px;
          height: 40px;
          background-color: #1F2937;
          border: 1px solid #6B7280;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: #2563EB !important;
          border-color: #2563EB !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        /* Footer Links */
        .footer-link {
          color: #E5E7EB;
          text-decoration: none;
          opacity: 0.75;
          transition: all 0.2s ease;
          display: inline-block;
        }
        
        .footer-link:hover {
          color: #60A5FA !important;
          opacity: 1;
          transform: translateX(5px);
        }
        
        /* Bottom Links */
        .footer-bottom-link {
          color: #E5E7EB;
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.2s ease;
          font-size: 0.9rem;
        }
        
        .footer-bottom-link:hover {
          opacity: 1;
          color: #60A5FA !important;
        }
        
        /* Form Styling */
        .form-control:focus {
          background-color: #1F2937 !important;
          border-color: #60A5FA !important;
          box-shadow: 0 0 0 0.25rem rgba(96, 165, 250, 0.25) !important;
          color: white !important;
        }
        
        .btn-primary {
          background-color: #2563EB !important;
          border-color: #2563EB !important;
        }
        
        .btn-primary:hover {
          background-color: #1D4ED8 !important;
          border-color: #1D4ED8 !important;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .container-fluid {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          
          .footer-nav-link {
            font-size: 0.9rem;
          }
          
          .social-icon {
            width: 36px;
            height: 36px;
          }
          
          .col-6 {
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .footer-nav-link {
            font-size: 0.85rem;
          }
          
          .d-flex.flex-wrap.gap-3.gap-md-4 {
            gap: 1rem !important;
          }
        }
        
        /* Accessibility */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid #3B82F6 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </footer>
  );
};

export default FullWidthFooter;