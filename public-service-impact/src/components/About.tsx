import { CheckCircle2, Link2, MonitorSmartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="reveal-on-scroll">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">Strategic Advantage</span>
            <h2 className="section-title">Driving Excellence in the Public Sector</h2>
            <p className="section-desc">
              Our mission is to architect systems that are transition-ready, secure, and accessible. We bridge the gap between complex legacy systems and future-proof digital infrastructure.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon-box"><CheckCircle2 size={20} /></div>
                <div className="feature-text">
                  <b>Global Standards</b>
                  <p>Adhering to international security and accessibility protocols.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box"><Link2 size={20} /></div>
                <div className="feature-text">
                  <b>Unified Experience</b>
                  <p>Seamless citizen portals that consolidate distributed services.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box"><MonitorSmartphone size={20} /></div>
                <div className="feature-text">
                  <b>Modern Accessibility</b>
                  <p>Advanced interfaces designed for all segments of the population.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image-stack">
            <div className="about-accent"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern corporate office interior" 
              className="about-img" 
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
