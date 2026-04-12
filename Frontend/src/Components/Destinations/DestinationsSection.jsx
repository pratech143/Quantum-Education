import React, { useState } from 'react';
import DestinationCard from './DestinationCard';

const destinationsData = [
  {
    id: 1,
    name: "USA",
    title: "United States",
    description: "The global hub for innovation, research, and high-impact career opportunities in STEM.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgk8jtxfec8wdY5FRTYk_tZ6WdcE6MUevsn3rzQDhWWb0V7qg1WRFnJlDQfJ794FWK8GzH5rFXQekCFu_iCbr7tCNPR8jXEAU-T80PTZbevYgBrJ9_UCX4yPFpP0UpO2yV5EfTTUBfqeNVe0VPTox4-diDF_5NlpjFLvglQd4_e58NGjBtsNYu2ETLUi_sXW66S0u9M1NkBPwqG8s01C6iS7GlUy5jyE8Uq-D8qT7P69WliqQs8Qx9IO82wcIsSEwn6_bXcHFHqqk",
    labels: ["Top Universities", "STEM OPT"]
  },
  {
    id: 2,
    name: "UK",
    title: "United Kingdom",
    description: "Centuries of academic excellence paired with a fast-tracked 2-year post-study work visa.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfR3N1kTvpcDYYD97nAeMDp6niL97PG_JLA_l8-rfuE300QIx_aG4ShJVAaaNqPiIv-erWyncQNjYxrxfBuFUKh2VMb3mDBzPR8DtKyIfRERB_qaYLaO90goe7g1XFSg2q7UcjqQmHQk_vOuZUStNpsXGsOpYgszmo0jn6KE1olE_3Ddr4OdrBBFEpDOcpI7EGl2rFL_axa1gwZsd-mh70S_NgKp7g_GM74UvPBe0sJFthTPfy3gq0nZb8-0Ihxo-NWHZR3qJJwO4",
    labels: ["Academic Heritage", "Graduate Route"]
  },
  {
    id: 3,
    name: "AUSTRALIA",
    title: "Australia",
    description: "Dynamic cities, high quality of life, and exceptional work rights for international students.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYeS6A81EJPhL8TvP89v-ehgb13M6sTARrnY3Cd1TO_0ia1zmAql2OUgS5MPC63PAyhKXoQjf1IFGhtSw8g4RIPnpbs8hX1XZid9VJW3DODykSgeAqgnQyN6kqmZR8HcgiO9qLlSkuhw3WFouxad_vmd8n2ZEjYxEw3RHwL8wEpkA68C6KaO6g71gdtouMhky_1xVkWD7snPJRWIS-Gzc1Jdr6r0EhJ7KONZP741XWagcv33MhBOxOHiM6P9GjC7MZXeOYiIj0Fz4",
    labels: ["Lifestyle", "Post-Study Work"]
  },
  {
    id: 4,
    name: "CANADA",
    title: "Canada",
    description: "Welcoming communities with clear pathways to permanent residency after graduation and excellent academic standards.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1000",
    labels: ["Immigration Friendly", "High Standard"]
  },
  {
    id: 5,
    name: "NEW ZEALAND",
    title: "New Zealand",
    description: "Stunning landscapes, safe environments, and world-class educational institutions prioritizing student well-being.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=1000",
    labels: ["Safe", "Scenic"]
  },
  {
    id: 6,
    name: "EUROPE",
    title: "Europe (Schengen)",
    description: "Access to top schools across the EU, offering affordable tuition and rich cultural experiences across borders.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
    labels: ["Culture", "Affordable"]
  }
];

const DestinationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter based on search query
  const filteredDestinations = destinationsData.filter(dest =>
    dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which to show
  const visibleDestinations = showAll ? filteredDestinations : filteredDestinations.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-6">Choose Your Path</h2>
            <p className="text-on-surface-variant max-w-md">Discover the distinct advantages of each major international study hub tailored to your career goals.</p>
          </div>
          
          {/* Search Bar */}
          <div className="w-full md:w-1/3 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-outline-variant bg-white focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all shadow-sm outline-none" 
              placeholder="Search countries..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleDestinations.map(dest => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
        
        {/* View All Destinations Toggle Button */}
        {filteredDestinations.length > 3 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-4 rounded-xl border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              {showAll ? 'Show Less' : 'View All Destinations'}
            </button>
          </div>
        )}
        
        {filteredDestinations.length === 0 && (
           <div className="text-center py-12 text-on-surface-variant">
             No destinations found matching your search.
           </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;
