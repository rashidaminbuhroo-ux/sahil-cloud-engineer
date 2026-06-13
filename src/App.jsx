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
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(16, 185, 129, 0.35)'; // Premium emerald glow matrix
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Highlight head of rain drop for standard terminal look
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none" />;
};

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-300 antialiased p-4 md:p-8">
      {/* Cinematic Ambient Background */}
      <MatrixBackground />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10 my-6">
        
        {/* --- HERO HEADER SECTION --- */}
        <header className="border border-emerald-500/30 bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl shadow-emerald-900/10 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
          
          {/* PROFILE PICTURE FROM PUBLIC DIR */}
          <div className="relative w-28 h-28 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
            <img 
              src={`${import.meta.env.BASE_URL}cutout.png`} 
              alt="Sahil Amin" 
              className="w-full h-full rounded-full object-cover relative z-10 bg-slate-900 border border-slate-800"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-emerald-400 mb-2 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">
            SAHIL AMIN
          </h1>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-purple-400 mb-4">
            Senior Cloud Support Engineer
          </p>
          <div className="w-16 h-[1px] bg-emerald-500/30 mx-auto mb-4" />
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            3 years of architecture experience engineering resilient cloud infrastructure, secure networking pipelines, data integrity, and high-availability enterprise frameworks.
          </p>
        </header>

        {/* --- SYSTEM ARSENAL (SKILLS) --- */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2 pl-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            &gt; SYSTEM_ARSENAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Skill Node 1 */}
            <div className="border border-slate-800 bg-black/50 backdrop-blur-md p-5 rounded-xl hover:border-emerald-500/40 transition-all duration-300 group">
              <h3 className="text-emerald-300 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                <span className="text-purple-400">01//</span> Cloud & Infra
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                AWS VPC, EC2, S3, ELB, RDS, DynamoDB, Route53
              </p>
            </div>

            {/* Skill Node 2 */}
            <div className="border border-slate-800 bg-black/50 backdrop-blur-md p-5 rounded-xl hover:border-emerald-500/40 transition-all duration-300 group">
              <h3 className="text-emerald-300 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                <span className="text-purple-400">02//</span> Security & Networks
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Netskope SASE, DLP, Secure Web Gateway, SSL/TLS, IPsec, Azure AD, SAML, TCP/IP, DNS, DHCP, SSH, Load Balancing, Citrix Gateway
              </p>
            </div>

            {/* Skill Node 3 */}
            <div className="border border-slate-800 bg-black/50 backdrop-blur-md p-5 rounded-xl hover:border-emerald-500/40 transition-all duration-300 group">
              <h3 className="text-emerald-300 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                <span className="text-purple-400">03//</span> Diagnostics
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wireshark, TCP Dumps, Packet Analysis, Log Parsing | Java, REST APIs, Python, MySQL
              </p>
            </div>
          </div>
        </section>

        {/* --- CAREER DEPLOYMENT LOG (TIMELINE) --- */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2 pl-2">
            &gt; CAREER_DEPLOYMENT_LOG
          </h2>

          <div className="border border-slate-800 bg-black/40 backdrop-blur-md rounded-xl p-5 md:p-6 space-y-6 relative">
            <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-gradient-to-b from-emerald-500/40 via-slate-800 to-transparent hidden md:block" />

            {/* Job Entry 1 */}
            <div className="relative md:pl-8 space-y-2">
              <div className="absolute left-[19px] top-[6px] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] hidden md:block" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-emerald-300">Netskope</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded">
                  Nov 2024 - Present
                </span>
              </div>
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Senior Cloud Support Engineer</p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Handling and solving high-severity security architecture logs for Enterprise Clients on Netskope cloud routing, NPA, Explicit Proxy implementations, and structural DLP policies.
              </p>
            </div>

            {/* Job Entry 2 */}
            <div className="relative md:pl-8 space-y-2">
              <div className="absolute left-[19px] top-[6px] w-2 h-2 rounded-full bg-slate-700 hidden md:block" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-emerald-300">Citrix</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800 rounded">
                  Mar 2024 - Nov 2024
                </span>
              </div>
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Citrix Cloud Support Engineer</p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Delivered critical tier support infrastructures for Citrix ADC (NetScaler networks), advanced Gateway access points, and virtualization matrixes. Resolved complex load balancing and SSL decryption incidents.
              </p>
            </div>

            {/* Job Entry 3 */}
            <div className="relative md:pl-8 space-y-2">
              <div className="absolute left-[19px] top-[6px] w-2 h-2 rounded-full bg-slate-700 hidden md:block" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-emerald-300">Josh Software Pvt. Ltd.</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800 rounded">
                  June 2022 - Oct 2023
                </span>
              </div>
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Cloud Software Engineer</p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Engineered backend application systems and cloud environments utilizing Java, Spring Boot paradigms, and AWS service pipelines. Executed complete data migrations between Azure environments and AWS architecture clusters.
              </p>
            </div>

          </div>
        </section>

        {/* --- FOOTER CONSOLE --- */}
        <footer className="text-center text-[11px] font-mono text-slate-600 pt-4">
          SYSTEM_STATUS: ONLINE // AUTH_USER: SAHIL_AMIN_
        </footer>
      </div>
    </div>
  );
}
