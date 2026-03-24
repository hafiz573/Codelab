import { ChevronRight, Folder } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface Solution {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const DynamicIcon = ({ name }: { name: string }) => {
  const pascalName = name.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const IconComponent = (LucideIcons as any)[pascalName] || Folder;
  return <IconComponent size={24} />;
};

export default function Solutions({ solutions, loading }: { solutions: Solution[], loading: boolean }) {
  return (
    <section id="solutions" className="reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">Our Digital Solutions</h2>
          <p className="section-desc">Modular, scalable systems designed to address specific administrative challenges while ensuring ease of use.</p>
        </div>

        <div className="solutions-grid">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="sol-card skeleton skel-card"></div>
            ))
          ) : solutions.length > 0 ? (
            solutions.map((sol) => (
              <div key={sol.id} className="sol-card">
                <div className="sol-icon"><DynamicIcon name={sol.icon} /></div>
                <h3>{sol.title}</h3>
                <p>{sol.description}</p>
                <a href="#" style={{display:'flex', alignItems:'center', gap:'0.25rem', color:'var(--primary-light)', fontWeight:600, fontSize:'0.875rem', textDecoration:'none' }}>
                  View Case Study <ChevronRight size={16} />
                </a>
              </div>
            ))
          ) : (
            <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem', border:'2px dashed var(--border)', borderRadius:'1rem', color:'var(--text-dim)'}}>
              Consultancy services available upon request. Data schema initialization required.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
