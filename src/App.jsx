import React, { useEffect, useRef } from 'react';

// --- Matrix Digital Rain Background Component ---
const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = katakana.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: Math.floor(columns) }).map(() => 1);

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (Math.random() > 0.98) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        opacity: 0.35,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default function App() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#e2e8f0',
      fontFamily: 'monospace',
      minHeight: '100vh',
      position: 'relative',
      margin: 0,
      padding: isMobile ? '20px 12px' : '40px 20px',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Cinematic Matrix Rain */}
      <MatrixBackground />

      <div style={{
        maxWidth: '850px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* --- PREMIUM HERO DASHBOARD --- */}
        <header style={{
          border: '1px solid rgba(16, 185, 129, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: isMobile ? '30px 20px' : '40px',
          borderRadius: '16px',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.1)',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Glowing Top Line Accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #10b981, transparent)'
          }} />
          
          {/* PROFILE PICTURE FROM PUBLIC DIR */}
          <div style={{
            position: 'relative',
            width: '110px',
            height: '110px',
            margin: '0 auto 20px auto'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
            }} />
            <img 
              src={`${import.meta.env.BASE_URL}cutout.png`} 
              alt="Sahil Amin" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectCover: 'cover',
                position: 'relative',
                zIndex: 2,
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b'
              }}
            />
          </div>
          
          <h1 style={{ 
            color: '#10b981', 
            fontSize: isMobile ? '2.2rem' : '3.2rem', 
            margin: '0 0 5px 0', 
            fontWeight: 'bold',
            letterSpacing: '1px',
            textShadow: '0 0 10px rgba(16, 185, 129, 0.2)'
          }}>
            SAHIL AMIN
          </h1>
          <p style={{ 
            color: '#c084fc', 
            fontSize: '0.9rem', 
            margin: '0 0 20px 0', 
            textTransform: 'uppercase', 
            letterSpacing: '4px',
            fontWeight: '600'
          }}>
            Senior Cloud Support Engineer
          </p>
          <div style={{ width: '50px', height: '1px', backgroundColor: 'rgba(16, 185, 129, 0.3)', margin: '0 auto 20px auto' }} />
          <p style={{ color: '#9ca3af', fontSize: isMobile ? '0.95rem' : '1.05rem', margin: '0', leadingHeight: '1.6', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            3 years of architecture experience engineering resilient cloud infrastructure, secure networking pipelines, data integrity, and high-availability enterprise frameworks.
          </p>
        </header>

        {/* --- SYSTEM ARSENAL (SKILLS GRID) --- */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h2 style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold', trackingSpacing: '2px', textTransform: 'uppercase', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            &gt; SYSTEM_ARSENAL
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', 
            gap: '16px' 
          }}>
            <div style={{ border: '1px solid #1e293b', backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ color: '#34d399', margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 'bold' }}>
                <span style={{ color: '#c084fc' }}>01//</span> Cloud & Infra
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                AWS VPC, EC2, S3, ELB, RDS, DynamoDB, Route53
              </p>
            </div>

            <div style={{ border: '1px solid #1e293b', backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ color: '#34d399', margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 'bold' }}>
                <span style={{ color: '#c084fc' }}>02//</span> Security & Networks
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                Netskope SASE, DLP, Secure Web Gateway, SSL/TLS, IPsec, Azure AD, SAML, TCP/IP, DNS, DHCP, SSH, Load Balancing, Citrix Gateway
              </p>
            </div>

            <div style={{ border: '1px solid #1e293b', backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ color: '#34d399', margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 'bold' }}>
                <span style={{ color: '#c084fc' }}>03//</span> Diagnostics
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                Wireshark, TCP Dumps, Packet Analysis, Log Parsing | Java, REST APIs, Python, MySQL
              </p>
            </div>
          </div>
        </section>

        {/* --- CAREER DEPLOYMENT LOG (TIMELINE) --- */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h2 style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', margin: '0' }}>
            &gt; CAREER_DEPLOYMENT_LOG
          </h2>

          <div style={{ 
            border: '1px solid #1e293b', 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            borderRadius: '12px', 
            padding: isMobile ? '20px' : '30px', 
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            
            {/* Job Entry 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ color: '#34d399', margin: 0, fontSize: '1.15rem', fontWeight: 'bold' }}>Netskope</h3>
                <span style={{ padding: '2px 8px', fontSize: '0.7rem', backgroundColor: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '4px', marginLeft: 'auto' }}>
                  Nov 2024 - Present
                </span>
              </div>
              <p style={{ color: '#c084fc', margin: 0, fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Senior Cloud Support Engineer</p>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                Handling and solving high-severity security architecture logs for Enterprise Clients on Netskope cloud routing, NPA, Explicit Proxy implementations, and structural DLP policies.
              </p>
            </div>

            {/* Job Entry 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ color: '#34d399', margin: 0, fontSize: '1.15rem', fontWeight: 'bold' }}>Citrix</h3>
                <span style={{ padding: '2px 8px', fontSize: '0.7rem', backgroundColor: '#1e293b', color: '#9ca3af', borderRadius: '4px', marginLeft: 'auto' }}>
                  Mar 2024 - Nov 2024
                </span>
              </div>
              <p style={{ color: '#c084fc', margin: 0, fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Citrix Cloud Support Engineer</p>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                Delivered critical tier support infrastructures for Citrix ADC (NetScaler networks), advanced Gateway access points, and virtualization matrixes. Resolved complex load balancing and SSL decryption incidents.
              </p>
            </div>

            {/* Job Entry 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ color: '#34d399', margin: 0, fontSize: '1.15rem', fontWeight: 'bold' }}>Josh Software Pvt. Ltd.</h3>
                <span style={{ padding: '2px 8px', fontSize: '0.7rem', backgroundColor: '#1e293b', color: '#9ca3af', borderRadius: '4px', marginLeft: 'auto' }}>
                  June 2022 - Oct 2023
                </span>
              </div>
              <p style={{ color: '#c084fc', margin: 0, fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Cloud Software Engineer</p>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                Engineered backend application systems and cloud environments utilizing Java, Spring Boot paradigms, and AWS service pipelines. Executed complete data migrations between Azure environments and AWS architecture clusters.
              </p>
            </div>

          </div>
        </section>

        {/* --- FOOTER CONSOLE --- */}
        <footer style={{ textAlign: 'center', fontSize: '11px', color: '#475569', paddingTop: '10px' }}>
          SYSTEM_STATUS: ONLINE // AUTH_USER: SAHIL_AMIN_
        </footer>
      </div>
    </div>
  );
}
