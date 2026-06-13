import React, { useEffect, useRef } from 'react';

export default function App() {
  const canvasRef = useRef(null);

  // Native Digital Stream Background matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrixChars = "010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>@$#%";
    const charsArr = matrixChars.split("");
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const dropY = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981'; // Cyber emerald green
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < dropY.length; i++) {
        const text = charsArr[Math.floor(Math.random() * charsArr.length)];
        const x = i * fontSize;
        const y = dropY[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          dropY[i] = 0;
        }
        dropY[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#ffffff',
      fontFamily: 'monospace',
      minHeight: '100vh',
      position: 'relative',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      
      {/* NATIVE HIGH PERFORMANCE BACKGROUND */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          opacity: 0.25,
          pointerEvents: 'none'
        }}
      />

      {/* CONTENT SYSTEM OVERLAY */}
      <div style={{ position: 'relative', zIndex: 1, padding: '60px 20px' }}>
        
        {/* HERO INTERFACE MODULE */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto 50px auto',
          padding: '40px 30px',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '16px',
          backgroundColor: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 30px rgba(16,185,129,0.15)',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            color: '#10b981', 
            fontSize: '3rem', 
            margin: '0 0 10px 0', 
            fontWeight: '900', 
            letterSpacing: '-1px' 
          }}>
            SAHIL AMIN
          </h1>
          <h2 style={{ 
            color: '#c084fc', 
            fontSize: '1.3rem', 
            margin: '0 0 20px 0', 
            textTransform: 'uppercase', 
            letterSpacing: '3px' 
          }}>
            Senior Cloud Support Engineer
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem', margin: '0', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            3 years of architecture experience across cloud infrastructure, networking pipelines, data security, and enterprise support frameworks.
          </p>
        </div>

        {/* SYSTEM ARSENAL MODULE */}
        <div style={{ maxWidth: '850px', margin: '0 auto 50px auto' }}>
          <h2 style={{ color: '#10b981', fontSize: '1.6rem', borderBottom: '2px solid rgba(16,185,129,0.3)', paddingBottom: '10px', margin: '0 0 20px 0' }}>
            &gt; SYSTEM_ARSENAL
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'window.innerWidth > 768 ? "1fr 1fr" : "1fr"', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(17,24,39,0.7)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #c084fc', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: '#c084fc', margin: '0 0 12px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>Cloud & Infrastructure</h3>
              <p style={{ color: '#e5e7eb', margin: '0' }}>AWS (VPC, EC2, S3, ELB, RDS, DynamoDB, Route53)</p>
            </div>
            <div style={{ backgroundColor: 'rgba(17,24,39,0.7)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #c084fc', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: '#c084fc', margin: '0 0 12px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>Security & Networking</h3>
              <p style={{ color: '#e5e7eb', margin: '0' }}>Netskope SASE, DLP, Secure Web Gateway, SSL/TLS, IPsec, Azure AD, SAML</p>
              <p style={{ color: '#9ca3af', margin: '12px 0 0 0', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>TCP/IP, DNS, DHCP, SSH, Load Balancing, Citrix Gateway</p>
            </div>
            <div style={{ backgroundColor: 'rgba(17,24,39,0.7)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #c084fc', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: '#c084fc', margin: '0 0 12px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>Diagnostics & Development</h3>
              <p style={{ color: '#e5e7eb', margin: '0' }}>Wireshark, TCP Dumps, Packet Analysis, Log Parsing | Java, REST APIs, Python, MySQL</p>
            </div>
          </div>
        </div>

        {/* CAREER DEPLOYMENT LOG */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ color: '#10b981', fontSize: '1.6rem', borderBottom: '2px solid rgba(16,185,129,0.3)', paddingBottom: '10px', margin: '0 0 25px 0' }}>
            &gt; CAREER_DEPLOYMENT_LOG
          </h2>
          <div style={{ paddingLeft: '20px', borderLeft: '2px solid #10b981' }}>
            
            {/* NETSKOPE */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#ffffff', margin: '0', fontSize: '1.3rem', fontWeight: 'bold' }}>
                Netskope <span style={{ color: '#10b981', fontSize: '0.9rem', marginLeft: '10px', backgroundColor: 'rgba(16,185,129,0.15)', padding: '3px 10px', borderRadius: '12px' }}>Nov 2024 - Present</span>
              </h3>
              <p style={{ color: '#c084fc', margin: '6px 0', fontWeight: '600' }}>Senior Cloud Support Engineer</p>
              <p style={{ color: '#d1d5db', margin: '0', fontSize: '0.95rem' }}>Handling and solving high-severity security architecture logs for Enterprise Clients on Netskope cloud routing, NPA, Explicit Proxy implementations, and structural DLP policies.</p>
            </div>

            {/* CITRIX */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#ffffff', margin: '0', fontSize: '1.3rem', fontWeight: 'bold' }}>
                Citrix <span style={{ color: '#9ca3af', fontSize: '0.9rem', marginLeft: '10px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: '12px' }}>Mar 2024 - Nov 2024</span>
              </h3>
              <p style={{ color: '#c084fc', margin: '6px 0', fontWeight: '600' }}>Citrix Cloud Support Engineer</p>
              <p style={{ color: '#d1d5db', margin: '0', fontSize: '0.95rem' }}>Delivered critical tier support infrastructures for Citrix ADC (NetScaler networks), advanced Gateway access points, and virtualization matrixes. Resolved complex load balancing and SSL decryption incidents.</p>
            </div>

            {/* JOSH SOFTWARE */}
            <div>
              <h3 style={{ color: '#ffffff', margin: '0', fontSize: '1.3rem', fontWeight: 'bold' }}>
                Josh Software Pvt. Ltd. <span style={{ color: '#9ca3af', fontSize: '0.9rem', marginLeft: '10px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: '12px' }}>June 2022 - Oct 2023</span>
              </h3>
              <p style={{ color: '#c084fc', margin: '6px 0', fontWeight: '600' }}>Cloud Software Engineer</p>
              <p style={{ color: '#d1d5db', margin: '0', fontSize: '0.95rem' }}>Engineered backend application systems and cloud environments utilizing Java, Spring Boot paradigms, and AWS service pipelines. Executed complete data migrations between Azure environments and AWS architecture clusters.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
