interface ImpactStat {
  id: number;
  number_text: string;
  label: string;
}

export default function Impact({ impactStats, loading }: { impactStats: ImpactStat[], loading: boolean }) {
  return (
    <section id="impact" className="reveal-on-scroll" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="impact-wrap">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <div key={i} className="skeleton skel-stat"></div>)
          ) : impactStats.length > 0 ? (
            impactStats.map(stat => (
              <div key={stat.id}>
                <div className="stat-val">{stat.number_text}</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))
          ) : (
            <div style={{gridColumn:'1/-1'}}>Operational performance data pending synchronization.</div>
          )}
        </div>
      </div>
    </section>
  );
}
