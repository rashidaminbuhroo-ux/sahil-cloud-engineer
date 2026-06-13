import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';

export default function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className="bg-[#050505] text-white font-mono overflow-x-hidden min-h-screen">
      
      {/* 1. Interactive Cyber Grid Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 1, color: "#22c55e" } },
            },
          },
          particles: {
            color: { value: ["#a855f7", "#22c55e"] },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 z-0 pointer-events-auto"
      />

      {/* 2. Scrollable Content Overlay */}
      <div className="relative z-10 w-full pointer-events-none">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.15)] pointer-events-auto"
          >
            {/* PROFILE PICTURE */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-pulse"></div>
              <img 
                src="/cutout.png" 
                alt="Sahil Amin" 
                className="w-full h-full object-cover rounded-full relative z-10 bg-gray-900"
              />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 tracking-tighter mb-4">
              SAHIL AMIN
            </h1>
            <h2 className="text-xl md:text-3xl text-purple-400 uppercase tracking-[0.2em] font-bold">
              Senior Cloud Support Engineer [cite: 2]
            </h2>
            <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed mx-auto">
              3 years of experience across cloud infrastructure, networking, security, and technical support. [cite: 4]
            </p>
          </motion.div>
        </section>

        {/* --- ARSENAL (SKILLS) SECTION --- */}
        <section className="min-h-screen flex items-center justify-center p-6 md:p-20">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pointer-events-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-10 border-b-2 border-green-500/30 pb-4 inline-block">
              &gt; SYSTEM_ARSENAL [cite: 8]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="bg-gray-900/60 border-l-4 border-purple-500 p-8 backdrop-blur-md rounded-r-xl hover:bg-gray-800/80 transition-all border-y border-r border-gray-800">
                <h3 className="text-2xl text-purple-400 mb-4 font-bold">Cloud & Infrastructure [cite: 9]</h3>
                <p className="text-gray-300 leading-relaxed">AWS (VPC, EC2, S3, ELB, RDS, DynamoDB, Route53) [cite: 10]</p>
              </div>
              <div className="bg-gray-900/60 border-l-4 border-purple-500 p-8 backdrop-blur-md rounded-r-xl hover:bg-gray-800/80 transition-all border-y border-r border-gray-800">
                <h3 className="text-2xl text-purple-400 mb-4 font-bold">Security & Networking [cite: 11, 13]</h3>
                <p className="text-gray-300 leading-relaxed">Netskope SASE, DLP, Secure Web Gateway, SSL/TLS, IPsec, Azure AD, SAML [cite: 14]</p>
                <p className="text-gray-400 mt-2 text-sm border-t border-gray-700 pt-2">TCP/IP, DNS, DHCP, SSH, FTP, Load Balancing, Citrix Gateway [cite: 12]</p>
              </div>
              <div className="bg-gray-900/60 border-l-4 border-purple-500 p-8 backdrop-blur-md rounded-r-xl hover:bg-gray-800/80 transition-all md:col-span-2 border-y border-r border-gray-800">
                <h3 className="text-2xl text-purple-400 mb-4 font-bold">Diagnostics & Code [cite: 15, 17]</h3>
                <p className="text-gray-300">Wireshark, TCP Dumps, Packet & Log Analysis [cite: 16] | Java, REST APIs, Python, MySQL [cite: 18]</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- QUEST LOG (EXPERIENCE) SECTION --- */}
        <section className="min-h-screen flex items-center justify-center p-6 md:p-20 mb-20">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl pointer-events-auto"
          >
            <div className="flex justify-end w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-12 border-b-2 border-green-500/30 pb-4 inline-block text-right">
                CAREER_LOG &lt; [cite: 34]
              </h2>
            </div>
            
            <div className="space-y-12 bg-black/40 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
              
              {/* Netskope */}
              <div className="relative pl-8 border-l-2 border-green-500">
                <div className="absolute w-5 h-5 bg-green-500 rounded-full -left-[11px] top-1 shadow-[0_0_15px_#22c55e] border-2 border-black"></div>
                <h3 className="text-3xl font-bold text-white flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  Netskope [cite: 2]
                  <span className="text-sm font-normal bg-green-500/20 text-green-400 px-3 py-1 rounded-full w-fit">Nov 2024 - Present [cite: 36]</span>
                </h3>
                <p className="text-purple-400 mt-2 mb-3 font-bold text-lg">Senior Cloud Support Engineer [cite: 35]</p>
                <p className="text-gray-300 leading-relaxed max-w-3xl">Handling and solving high severity cases for Clients on Netskope, NPA, Explicit Proxy, DLP, Effective integration with other AWS services. [cite: 37]</p>
              </div>

              {/* Citrix */}
              <div className="relative pl-8 border-l-2 border-purple-500/50">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 border-2 border-black shadow-[0_0_10px_#a855f7]"></div>
                <h3 className="text-3xl font-bold text-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  Citrix [cite: 46]
                  <span className="text-sm font-normal bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full w-fit">Mar 2024 - Nov 2024 [cite: 47]</span>
                </h3>
                <p className="text-purple-400/80 mt-2 mb-3 font-bold text-lg">Citrix Cloud Support Engineer [cite: 46]</p>
                <p className="text-gray-400 leading-relaxed max-w-3xl">Delivered L2 technical support for Citrix ADC (NetScaler), Gateway, and Virtual Apps & Desktops. [cite: 48] Troubleshot load balancing, SSL offloading, VPN. [cite: 49]</p>
              </div>

              {/* Josh Software */}
              <div className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-2 border-black"></div>
                <h3 className="text-3xl font-bold text-gray-400 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  Josh Software Pvt. Ltd. [cite: 53]
                  <span className="text-sm font-normal bg-gray-800 text-gray-400 px-3 py-1 rounded-full w-fit">June 2022 - Oct 2023 [cite: 52]</span>
                </h3>
                <p className="text-purple-400/50 mt-2 mb-3 font-bold text-lg">Cloud Software Engineer [cite: 53]</p>
                <p className="text-gray-500 leading-relaxed max-w-3xl">Designed and developed enterprise-grade microservices using Java, Spring Boot, and AWS. [cite: 53] Migrated applications from Azure to AWS. [cite: 55]</p>
              </div>

            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
