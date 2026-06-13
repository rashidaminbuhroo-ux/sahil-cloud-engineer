import React from 'react';

export default function App() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#ffffff',
      fontFamily: 'monospace',
      minHeight: 'screen',
      padding: '40px 20px',
      lineHeight: '1.6'
    }}>
      {/* HEADER SECTION */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 60px auto',
        padding: '30px',
        border: '1px solid #22c55e',
        borderRadius: '12px',
        backgroundColor: '#000000',
        boxShadow: '0 0 20px rgba(34,197,94,0.2)'
      }}>
        <h1 style={{ color: '#22c55e', fontSize: '2.5rem', margin: '0 0 10px 0', letterSpacing: '-1px' }}>
          SAHIL AMIN
        </h1>
        <h2 style={{ color: '#a855f7', fontSize: '1.2rem', margin: '0 0 15px 0', textTransform: 'uppercase' }}>
          Senior Cloud Support Engineer
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '1rem', margin: '0' }}>
          3 years of experience across cloud infrastructure, networking, security, and technical support.
        </p>
      </div>

      {/* ARSENAL SECTION */}
      <div style={{ maxWidth: '800px', margin: '0 auto 60px auto' }}>
        <h2 style={{ color: '#22c55e', fontSize: '1.8rem', borderBottom: '2px solid #22c55e', paddingBottom: '10px' }}>
          &gt; SYSTEM_ARSENAL
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
          <div style={{ backgroundColor: '#111827', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
            <h3 style={{ color: '#a855f7', margin: '0 0 10px 0' }}>Cloud & Infrastructure</h3>
            <p style={{ color: '#d1d5db', margin: '0' }}>AWS (VPC, EC2, S3, ELB, RDS, DynamoDB, Route53)</p>
          </div>
          <div style={{ backgroundColor: '#111827', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
            <h3 style={{ color: '#a855f7', margin: '0 0 10px 0' }}>Security & Networking</h3>
            <p style={{ color: '#d1d5db', margin: '0' }}>Netskope SASE, DLP, Secure Web Gateway, SSL/TLS, IPsec, Azure AD, SAML</p>
            <p style={{ color: '#9ca3af', margin: '10px 0 0 0', fontSize: '0.9rem' }}>TCP/IP, DNS, DHCP, SSH, FTP, Load Balancing, Citrix Gateway</p>
          </div>
        </div>
      </div>

      {/* CAREER LOG */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#22c55e', fontSize: '1.8rem', borderBottom: '2px solid #22c55e', paddingBottom: '10px' }}>
          &gt; CAREER_LOG
        </h2>
        <div style={{ marginTop: '20px', paddingLeft: '20px', borderLeft: '2px solid #22c55e' }}>
          
          <div style={{ marginBottom: '30px', position: 'relative' }}>
            <h3 style={{ color: '#ffffff', margin: '0' }}>Netskope <span style={{ color: '#22c55e', fontSize: '0.9rem', marginLeft: '10px' }}>(Nov 2024 - Present)</span></h3>
            <p style={{ color: '#a855f7', margin: '5px 0' }}>Senior Cloud Support Engineer</p>
            <p style={{ color: '#d1d5db', margin: '0' }}>Handling and solving high severity cases for Clients on Netskope, NPA, Explicit Proxy, DLP, Effective integration with other AWS services.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#ffffff', margin: '0' }}>Citrix <span style={{ color: '#9ca3af', fontSize: '0.9rem', marginLeft: '10px' }}>(Mar 2024 - Nov 2024)</span></h3>
            <p style={{ color: '#a855f7', margin: '5px 0' }}>Citrix Cloud Support Engineer</p>
            <p style={{ color: '#d1d5db', margin: '0' }}>Delivered L2 technical support for Citrix ADC (NetScaler), Gateway, and Virtual Apps & Desktops. Troubleshot load balancing, SSL offloading, VPN.</p>
          </div>

          <div>
            <h3 style={{ color: '#ffffff', margin: '0' }}>Josh Software Pvt. Ltd. <span style={{ color: '#9ca3af', fontSize: '0.9rem', marginLeft: '10px' }}>(June 2022 - Oct 2023)</span></h3>
            <p style={{ color: '#a855f7', margin: '5px 0' }}>Cloud Software Engineer</p>
            <p style={{ color: '#d1d5db', margin: '0' }}>Designed and developed enterprise-grade microservices using Java, Spring Boot, and AWS. Migrated applications from Azure to AWS.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
