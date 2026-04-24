import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { api } from '../../api';

const TeamSection = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const result = await api.getTeam();
        if (result.success) {
          setTeam(result.data);
        }
      } catch (err) {
        console.error('Failed to load team:', err);
      } finally {
        setLoading(false);
      }
    };
    loadTeam();
  }, []);

  if (loading) return null;
  if (team.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-headline font-extrabold text-primary"
            >
              The Minds Behind Your Future
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant max-w-xl font-body"
            >
              Meet the experts who have spent decades perfecting the art of international educational placement.
            </motion.p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-12">
          {team.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] max-w-[380px] space-y-6 group"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4] relative shadow-lg">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={member.image || 'https://via.placeholder.com/400x533?text=Team+Member'} 
                />
                <div className="absolute bottom-4 left-4 right-4 glass-effect p-6 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-primary font-headline">{member.name}</h4>
                      <p className="text-[10px] text-primary/60 font-black uppercase tracking-widest mt-1">{member.role}</p>
                    </div>
                    <div className="flex gap-2">
                      {member.socials?.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary/40 hover:text-primary transition-colors">
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.socials?.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-primary/40 hover:text-primary transition-colors">
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.socials?.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-primary/40 hover:text-primary transition-colors">
                          <Facebook size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant px-2 font-body text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
