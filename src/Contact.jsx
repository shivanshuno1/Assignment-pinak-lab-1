import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true;
    return /^[\d\s\-\(\)\+]{10,}$/.test(phone.replace(/[\s\-\(\)\+]/g, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#F8FAFC', width: '100%' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Heading & Subtext */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3 text-dark">Get In Touch</h1>
              <p className="lead text-muted mb-0">
                Have questions or want to work together? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Form Card */}
            <div className="card border-0 shadow-md rounded-xl p-4 p-md-5 bg-white">
              {isSubmitted ? (
                <div className="text-center py-5">
                  <div className="mb-4">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '80px', height: '80px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#10B981" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="fw-bold text-dark mb-3">Message Sent Successfully!</h3>
                  <p className="text-muted mb-4">Thank you for contacting us. We'll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary px-4"
                    style={{ backgroundColor: '#2563EB', borderColor: '#2563EB' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-4">
                    {/* Full Name */}
                    <div className="col-12">
                      <label htmlFor="name" className="form-label fw-semibold text-dark mb-2">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control form-control-lg rounded-lg border-slate-300 ${errors.name ? 'border-danger' : ''}`}
                        placeholder="John Doe"
                        style={{
                          borderRadius: '0.5rem',
                          borderColor: errors.name ? '#DC2626' : '#CBD5E1',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2563EB';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.name ? '#DC2626' : '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.name && (
                        <div className="text-danger small mt-2 d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                          </svg>
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold text-dark mb-2">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control form-control-lg rounded-lg border-slate-300 ${errors.email ? 'border-danger' : ''}`}
                        placeholder="john@example.com"
                        style={{
                          borderRadius: '0.5rem',
                          borderColor: errors.email ? '#DC2626' : '#CBD5E1',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2563EB';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.email ? '#DC2626' : '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.email && (
                        <div className="text-danger small mt-2 d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                          </svg>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold text-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-control form-control-lg rounded-lg border-slate-300 ${errors.phone ? 'border-danger' : ''}`}
                        placeholder="+1 (555) 123-4567"
                        style={{
                          borderRadius: '0.5rem',
                          borderColor: errors.phone ? '#DC2626' : '#CBD5E1',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2563EB';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.phone ? '#DC2626' : '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.phone && (
                        <div className="text-danger small mt-2 d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                          </svg>
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold text-dark mb-2">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`form-control form-control-lg rounded-lg border-slate-300 ${errors.message ? 'border-danger' : ''}`}
                        placeholder="Tell us about your project or inquiry..."
                        style={{
                          borderRadius: '0.5rem',
                          borderColor: errors.message ? '#DC2626' : '#CBD5E1',
                          resize: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2563EB';
                          e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.message ? '#DC2626' : '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.message && (
                        <div className="text-danger small mt-2 d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                          </svg>
                          {errors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-lg w-100 py-3 fw-semibold rounded-lg border-0"
                        style={{
                          backgroundColor: '#2563EB',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          fontSize: '1.1rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#1D4ED8';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#2563EB';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                        onFocus={(e) => {
                          e.target.style.outline = '2px solid #2563EB';
                          e.target.style.outlineOffset = '2px';
                        }}
                        onBlur={(e) => {
                          e.target.style.outline = 'none';
                        }}
                      >
                        {isSubmitting ? (
                          <span className="d-flex align-items-center justify-content-center">
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending Message...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>

                    {/* Required fields note */}
                    <div className="col-12 text-center">
                      <p className="text-muted small mb-0">
                        <span className="text-danger">*</span> Required fields
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="row mt-4 text-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="text-muted small">Email us at</div>
                <div className="fw-semibold">hello@brandname.com</div>
              </div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="text-muted small">Call us</div>
                <div className="fw-semibold">+1 (353) 123-4567</div>
              </div>
              <div className="col-12 col-md-4">
                <div className="text-muted small">Response time</div>
                <div className="fw-semibold">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rounded-xl {
          border-radius: 1rem !important;
        }
        
        .rounded-lg {
          border-radius: 0.5rem !important;
        }
        
        .border-slate-300 {
          border-color: #CBD5E1 !important;
        }
        
        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }
        
        .form-control:focus {
          border-color: #2563EB !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
        }
        
        .form-control::placeholder {
          color: #94A3B8;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card {
            padding: 1.5rem !important;
          }
          
          .display-5 {
            font-size: calc(1.425rem + 2.1vw) !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
        
        /* Smooth transitions */
        .form-control, .btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Accessibility focus styles */
        *:focus-visible {
          outline: 2px solid #2563EB !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default ContactFormSection;