import React from 'react';

export default function Contact({ 
  email, 
  setEmail, 
  handleSubscribe, 
  submitStatus 
}: { 
  email: string, 
  setEmail: (val: string) => void, 
  handleSubscribe: (e: React.FormEvent) => void, 
  submitStatus: string 
}) {
  return (
    <section id="contact" className="reveal-on-scroll">
      <div className="container">
        <div className="contact-card">
          <span className="section-tag">Consultation</span>
          <h2 className="contact-title">Interested in Partnering?</h2>
          <p className="section-desc" style={{marginInline:'auto'}}>
            Speak with our specialist consultants to explore how our digital solutions can be tailored to your institutional needs.
          </p>
          
          <form className="contact-form-wrap" onSubmit={handleSubscribe}>
            <div className="input-box">
              <input 
                type="email" 
                placeholder="Official Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
              />
              <button 
                type="submit" 
                className="btn btn-p"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
              >
                {submitStatus === 'loading' ? 'Processing...' : submitStatus === 'success' ? 'Request Sent' : 'Request Consultation'}
              </button>
            </div>
            {submitStatus === 'error' && <p className="status-msg msg-error">Transmission error. Please try again later.</p>}
            {submitStatus === 'success' && <p className="status-msg msg-success">Thank you. A consultant will review your request shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
