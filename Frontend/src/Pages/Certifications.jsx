import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "QEAC Certified",
            org: "Qualified Education Agent Counselor",
            id: "QEAC L123",
            icon: Award,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "ICEF Trained",
            org: "ICEF Agent Training Course",
            id: "IATC 456",
            icon: ShieldCheck,
            color: "text-teal-600",
            bg: "bg-teal-50"
        },
        {
            title: "ECAN Member",
            org: "Educational Consultancy Association of Nepal",
            id: "Reg No. 789",
            icon: CheckCircle,
            color: "text-primary",
            bg: "bg-primary/10"
        }
    ];

    return (
        <main className="min-h-screen pt-0 pb-20 bg-background font-body">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-headline font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        Quality Assurance
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-primary font-headline tracking-tighter mb-6"
                    >
                        Our <span className="text-secondary">Certifications</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-on-surface-variant leading-relaxed"
                    >
                        We take pride in our professional standards and industry recognition. Quantum Education is fully certified and recognized by international education bodies and local regulatory authorities.
                    </motion.p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface-container-lowest p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className={`w-14 h-14 ${cert.bg} ${cert.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                                <cert.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-primary font-headline mb-2">{cert.title}</h3>
                            <p className="text-on-surface-variant font-medium mb-1">{cert.org}</p>
                            <p className="text-primary/60 font-mono text-sm mb-8">{cert.id}</p>
                            
                            <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                                Verify Content <ExternalLink size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Legal Info */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 rounded-[2rem] bg-surface-container-low border border-black/5"
                >
                    <h2 className="text-3xl font-black text-primary font-headline mb-6 tracking-tight">Regulatory Compliance</h2>
                    <div className="grid md:grid-cols-2 gap-12 font-body text-on-surface-variant leading-relaxed">
                        <p>
                            Quantum Education is a registered educational consultancy under the Ministry of Education, Science and Technology (MoEST) and the Office of the Company Registrar, Government of Nepal.
                        </p>
                        <p>
                            All our counselors are trained and certified to provide accurate, ethical, and up-to-date information regarding international admissions and visa processes.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Certifications;
