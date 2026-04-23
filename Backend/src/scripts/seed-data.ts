import { prisma, connectDatabase, disconnectDatabase } from '../shared/database/prisma.js';

type CountrySeed = {
  name: string;
  slug: string;
  description: string;
  tuitionFees: number;
  visaInfo: string;
  livingCost: number;
  currency: string;
  heroSubtitle: string;
  heroStats: { label: string; value: string }[];
  overview: { title: string; description: string[] };
  details: { icon: string; title: string; description: string }[];
  popularCourses: { title: string; icon: string; desc: string }[];
  admissionRequirements: string[];
  intakes: { name: string; month: string }[];
  scholarships: { description: string };
};

type InstitutionSeed = {
  name: string;
  slug: string;
  description: string;
  location: string;
  ranking: number;
  qsRanking?: string;
  tagline: string;
  website: string;
  fees: string;
  type: 'UNIVERSITY' | 'COLLEGE';
  courses: { icon: string; title: string; description: string; tag?: string; tagStyle?: string }[];
  whyReasons: { icon: string; title: string; description: string }[];
  requirements: { title: string; description: string }[];
};

type AlumniSeed = {
  name: string;
  university: string;
  degree: string;
  country: string;
  quote: string;
};

function buildDetail(institution: InstitutionSeed) {
  return {
    heroData: {
      title: institution.name,
      subtitle: institution.description,
      image: '',
      primaryCta: 'Explore Programs',
      secondaryCta: 'Talk to an Advisor'
    },
    whySection: {
      title: `Why choose ${institution.name}?`,
      reasons: institution.whyReasons
    },
    coursesData: {
      title: 'Programs',
      description: `Popular study options available at ${institution.name}.`,
      buttonText: 'View Programs',
      courses: institution.courses
    },
    admissionData: {
      requirementsTitle: 'Entry Requirements',
      howToApplyTitle: 'How to Apply',
      requirements: institution.requirements,
      howToApply: [
        'Choose your preferred program and check the intake deadline.',
        'Prepare academic transcripts, English test scores, and supporting documents.',
        'Submit the application and wait for the offer outcome.',
        'Accept the offer and begin the visa process.'
      ]
    }
  };
}

const countrySeeds: CountrySeed[] = [
  {
    name: 'Denmark',
    slug: 'denmark',
    description: 'A student-friendly Nordic destination known for innovation, sustainability, and collaborative learning.',
    tuitionFees: 14000,
    visaInfo: 'Residence permit for higher education after receiving admission from a recognized institution.',
    livingCost: 12000,
    currency: 'DKK',
    heroSubtitle: 'Study in a modern, sustainable, and globally connected Nordic nation',
    heroStats: [
      { label: 'Institutions', value: '35+' },
      { label: 'Avg Tuition', value: 'EUR 8k-16k' },
      { label: 'Language', value: 'English Friendly' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'Denmark offers a practical and research-driven education system with strong links to design, engineering, life sciences, and green technology.',
        'Students benefit from safe cities, efficient transport, and a culture that values innovation, balance, and teamwork.'
      ]
    },
    details: [
      { icon: 'eco', title: 'Lifestyle', description: 'Known for sustainability, work-life balance, and high quality public services.' },
      { icon: 'payments', title: 'Living Cost', description: 'Expect moderate to high living costs, especially in Copenhagen.' },
      { icon: 'badge', title: 'Visa', description: 'Residence permit required for non-EU students enrolled in higher education.' },
      { icon: 'translate', title: 'Language', description: 'Many programs are available in English even though Danish is the national language.' }
    ],
    popularCourses: [
      { title: 'Design', icon: 'design_services', desc: 'Human-centered and global design practice' },
      { title: 'Engineering', icon: 'engineering', desc: 'Strong innovation and renewable energy focus' },
      { title: 'Life Sciences', icon: 'biotech', desc: 'Research-led health and bioscience programs' }
    ],
    admissionRequirements: ['Academic transcripts', 'English proficiency proof', 'Statement of purpose', 'Passport and financial documents'],
    intakes: [{ name: 'Autumn Intake', month: 'August/September' }, { name: 'Spring Intake', month: 'January/February' }],
    scholarships: { description: 'Limited institutional scholarships and selected tuition waivers for strong international applicants.' }
  },
  {
    name: 'Finland',
    slug: 'finland',
    description: 'A progressive Nordic destination known for innovation, research quality, and student-friendly academic culture.',
    tuitionFees: 12000,
    visaInfo: 'Residence permit for studies after receiving admission from a recognized Finnish institution.',
    livingCost: 9600,
    currency: 'EUR',
    heroSubtitle: 'Study in one of Europe’s most innovative and student-friendly education systems',
    heroStats: [
      { label: 'Institutions', value: '35+' },
      { label: 'Avg Tuition', value: 'EUR 6k-18k' },
      { label: 'Focus', value: 'Innovation & Research' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'Finland is widely respected for education quality, applied research, and a student-centered learning approach that emphasizes independence and critical thinking.',
        'Students benefit from safe cities, modern campuses, strong digital infrastructure, and growing opportunities in technology, sustainability, and design.'
      ]
    },
    details: [
      { icon: 'nights_stay', title: 'Lifestyle', description: 'Known for safety, clean cities, strong public systems, and balanced student life.' },
      { icon: 'payments', title: 'Living Cost', description: 'Living costs vary by city, with Helsinki usually being the highest.' },
      { icon: 'badge', title: 'Visa', description: 'Non-EU students generally need a residence permit for degree studies.' },
      { icon: 'translate', title: 'Language', description: 'Many bachelor’s and master’s programs are delivered in English.' }
    ],
    popularCourses: [
      { title: 'Information Technology', icon: 'computer', desc: 'Strong digital economy and innovation culture' },
      { title: 'Engineering', icon: 'engineering', desc: 'Applied and research-driven technical pathways' },
      { title: 'Design', icon: 'design_services', desc: 'Globally respected creative and human-centered programs' }
    ],
    admissionRequirements: ['Academic transcripts', 'English proficiency proof', 'Passport and identity documents', 'Proof of funds'],
    intakes: [{ name: 'Autumn Intake', month: 'August/September' }, { name: 'Spring Intake', month: 'January/February' }],
    scholarships: { description: 'Institution-based tuition waivers and merit scholarships are available for selected international students.' }
  },
  {
    name: 'Australia',
    slug: 'australia',
    description: 'A leading English-speaking destination with strong graduate outcomes and excellent student support.',
    tuitionFees: 32000,
    visaInfo: 'Student Visa (Subclass 500) for full-time international students.',
    livingCost: 24505,
    currency: 'AUD',
    heroSubtitle: 'World-class education and a vibrant student lifestyle',
    heroStats: [
      { label: 'Universities', value: '40+' },
      { label: 'Avg Tuition', value: 'AUD 20k-45k' },
      { label: 'Work Rights', value: '48 hrs/fortnight' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'Australia combines globally ranked institutions with flexible programs, practical learning, and strong post-study opportunities.',
        'Students enjoy multicultural cities, a welcoming environment, and clear support systems across major education hubs.'
      ]
    },
    details: [
      { icon: 'wb_sunny', title: 'Climate', description: 'Mostly warm and temperate with regional variation across the country.' },
      { icon: 'payments', title: 'Living Cost', description: 'Living expenses vary by city, with Sydney and Melbourne on the higher side.' },
      { icon: 'badge', title: 'Visa', description: 'Student Visa (Subclass 500) supports full-time study and limited work rights.' },
      { icon: 'work', title: 'Work Rights', description: 'Students can work part time during study periods and more during scheduled breaks.' }
    ],
    popularCourses: [
      { title: 'Nursing', icon: 'medical_services', desc: 'Strong licensure and workforce pathways' },
      { title: 'IT', icon: 'terminal', desc: 'Demand across software, cloud, and cyber' },
      { title: 'Business', icon: 'business_center', desc: 'Practical programs with global career value' }
    ],
    admissionRequirements: ['Academic transcripts', 'English test scores', 'Statement of purpose', 'Proof of funds'],
    intakes: [{ name: 'Semester 1', month: 'February' }, { name: 'Semester 2', month: 'July' }],
    scholarships: { description: 'Merit scholarships and faculty-based tuition support are available across many institutions.' }
  },
  {
    name: 'United Kingdom',
    slug: 'united-kingdom',
    description: 'A historic study destination offering respected degrees, shorter course durations, and strong global recognition.',
    tuitionFees: 19000,
    visaInfo: 'UK Student visa for approved courses and licensed sponsors.',
    livingCost: 13000,
    currency: 'GBP',
    heroSubtitle: 'Earn globally respected qualifications in a high-impact academic system',
    heroStats: [
      { label: 'Institutions', value: '160+' },
      { label: 'Avg Tuition', value: 'GBP 12k-25k' },
      { label: 'Graduate Route', value: '2 Years' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'The UK is known for high academic standards, internationally recognized degrees, and one-year taught masters programs.',
        'Students benefit from strong research culture, diverse cities, and access to employers across finance, healthcare, technology, and the creative industries.'
      ]
    },
    details: [
      { icon: 'history_edu', title: 'Academics', description: 'Degrees are often shorter and more intensive than in many other countries.' },
      { icon: 'payments', title: 'Living Cost', description: 'London is more expensive, while many regional cities offer lower living costs.' },
      { icon: 'badge', title: 'Visa', description: 'The UK Student visa requires a CAS, proof of funds, and supporting documents.' },
      { icon: 'travel_explore', title: 'Exposure', description: 'Students gain access to a highly international academic and professional environment.' }
    ],
    popularCourses: [
      { title: 'Business', icon: 'business', desc: 'Strong links to finance and management careers' },
      { title: 'Law', icon: 'gavel', desc: 'Globally respected legal education' },
      { title: 'Data Science', icon: 'insights', desc: 'Fast-growing opportunities across sectors' }
    ],
    admissionRequirements: ['Academic transcripts', 'English proficiency proof', 'Personal statement', 'Financial documents'],
    intakes: [{ name: 'Autumn Intake', month: 'September' }, { name: 'Spring Intake', month: 'January' }],
    scholarships: { description: 'Chevening, Commonwealth, GREAT, and university-specific scholarships are widely available.' }
  },
  {
    name: 'Canada',
    slug: 'canada',
    description: 'A popular destination for quality education, inclusive communities, and strong post-study work options.',
    tuitionFees: 26000,
    visaInfo: 'Study Permit with supporting acceptance and financial documents.',
    livingCost: 20635,
    currency: 'CAD',
    heroSubtitle: 'Study in a welcoming country with strong academic and migration pathways',
    heroStats: [
      { label: 'Universities', value: '90+' },
      { label: 'Avg Tuition', value: 'CAD 15k-35k' },
      { label: 'PGWP', value: 'Up to 3 Years' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'Canada offers a strong mix of academic quality, safety, multicultural communities, and practical employment options after graduation.',
        'Students are drawn to its transparent systems, high living standards, and the long-term value of Canadian credentials.'
      ]
    },
    details: [
      { icon: 'ac_unit', title: 'Climate', description: 'Cold winters are common, though conditions vary by province and city.' },
      { icon: 'payments', title: 'Living Cost', description: 'Living costs depend on location, with Toronto and Vancouver typically being the highest.' },
      { icon: 'badge', title: 'Visa', description: 'A Study Permit is required along with institution-specific and financial documentation.' },
      { icon: 'trending_up', title: 'Outcomes', description: 'Graduates often value the work permit route and long-term career flexibility.' }
    ],
    popularCourses: [
      { title: 'Computer Science', icon: 'terminal', desc: 'Strong tech ecosystem and co-op pathways' },
      { title: 'Healthcare', icon: 'medical_information', desc: 'Consistent workforce demand' },
      { title: 'Project Management', icon: 'assignment', desc: 'Popular for practical career transition' }
    ],
    admissionRequirements: ['Letter of acceptance', 'Academic transcripts', 'English proficiency proof', 'Proof of funds'],
    intakes: [{ name: 'Fall Intake', month: 'September' }, { name: 'Winter Intake', month: 'January' }, { name: 'Spring Intake', month: 'May' }],
    scholarships: { description: 'Entrance awards, faculty scholarships, and selected research funding options are available.' }
  },
  {
    name: 'United States',
    slug: 'united-states',
    description: 'A top destination for flexible academics, large campus ecosystems, and world-leading research.',
    tuitionFees: 42000,
    visaInfo: 'F-1 visa for full-time study at SEVP-approved institutions.',
    livingCost: 22000,
    currency: 'USD',
    heroSubtitle: 'Study at the center of global innovation, research, and opportunity',
    heroStats: [
      { label: 'Institutions', value: '4,000+' },
      { label: 'Avg Tuition', value: 'USD 25k-55k' },
      { label: 'STEM OPT', value: 'Up to 3 Years' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'The USA offers unmatched variety in institutions, majors, research opportunities, and campus experiences.',
        'Students benefit from broad elective systems, strong employer networks, and advanced facilities across major disciplines.'
      ]
    },
    details: [
      { icon: 'science', title: 'Research', description: 'Home to many of the world’s highest-ranked research universities and labs.' },
      { icon: 'payments', title: 'Living Cost', description: 'Costs vary widely by region and city, from affordable college towns to high-cost urban centers.' },
      { icon: 'badge', title: 'Visa', description: 'The F-1 visa requires institutional documents, funding proof, and an interview process.' },
      { icon: 'work_history', title: 'Career Pathways', description: 'CPT, OPT, and STEM OPT create strong practical experience opportunities.' }
    ],
    popularCourses: [
      { title: 'Computer Science', icon: 'data_object', desc: 'Strong startup and research ecosystem' },
      { title: 'Business Analytics', icon: 'query_stats', desc: 'Popular across consulting and finance' },
      { title: 'Engineering', icon: 'precision_manufacturing', desc: 'High-value technical specializations' }
    ],
    admissionRequirements: ['Academic transcripts', 'English proficiency proof', 'Statement of purpose', 'Financial certification'],
    intakes: [{ name: 'Fall Intake', month: 'August/September' }, { name: 'Spring Intake', month: 'January' }],
    scholarships: { description: 'Merit scholarships, assistantships, and department funding are available at many institutions.' }
  },
  {
    name: 'New Zealand',
    slug: 'new-zealand',
    description: 'A safe and scenic destination with practical education, smaller class settings, and strong student support.',
    tuitionFees: 28000,
    visaInfo: 'Fee-paying student visa for approved study and sufficient funds.',
    livingCost: 20000,
    currency: 'NZD',
    heroSubtitle: 'Quality education in a peaceful and supportive study environment',
    heroStats: [
      { label: 'Universities', value: '8' },
      { label: 'Avg Tuition', value: 'NZD 22k-38k' },
      { label: 'Lifestyle', value: 'High Quality' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'New Zealand is valued for its student safety, hands-on learning style, and institutions with strong support services.',
        'Students enjoy a relaxed environment, beautiful landscapes, and qualifications recognized across many global markets.'
      ]
    },
    details: [
      { icon: 'landscape', title: 'Lifestyle', description: 'Known for safety, outdoor living, and a balanced pace of life.' },
      { icon: 'payments', title: 'Living Cost', description: 'Costs vary by city, with Auckland and Wellington generally being more expensive.' },
      { icon: 'badge', title: 'Visa', description: 'Students need an approved offer, sufficient funds, and health or travel documentation.' },
      { icon: 'school', title: 'Learning Style', description: 'Programs often emphasize applied learning, critical thinking, and close faculty support.' }
    ],
    popularCourses: [
      { title: 'Hospitality', icon: 'restaurant', desc: 'Strong tourism and service-sector links' },
      { title: 'Agriculture', icon: 'agriculture', desc: 'Applied programs with industry relevance' },
      { title: 'IT', icon: 'computer', desc: 'Growing digital and service economy demand' }
    ],
    admissionRequirements: ['Academic transcripts', 'English proficiency proof', 'Passport and identity documents', 'Proof of funds'],
    intakes: [{ name: 'Semester 1', month: 'February' }, { name: 'Semester 2', month: 'July' }],
    scholarships: { description: 'Government and institutional scholarships are available for selected high-performing applicants.' }
  },
  {
    name: 'Germany',
    slug: 'germany',
    description: 'A major European destination for affordable education, strong engineering programs, and research quality.',
    tuitionFees: 1500,
    visaInfo: 'National visa and residence permit for higher education, usually with proof of funds.',
    livingCost: 12000,
    currency: 'EUR',
    heroSubtitle: 'Affordable, high-quality education at the heart of Europe',
    heroStats: [
      { label: 'Universities', value: '380+' },
      { label: 'Avg Tuition', value: 'Low or None' },
      { label: 'Stay Back', value: '18 Months' }
    ],
    overview: {
      title: 'Country Overview',
      description: [
        'Germany is widely chosen for engineering, technology, business, and research programs delivered with strong academic rigor.',
        'Students benefit from comparatively low tuition, public university access, and location advantages within Europe.'
      ]
    },
    details: [
      { icon: 'engineering', title: 'Strengths', description: 'Particularly strong in engineering, manufacturing, applied science, and research.' },
      { icon: 'payments', title: 'Living Cost', description: 'Students should budget for rent, insurance, transport, and blocked account requirements.' },
      { icon: 'badge', title: 'Visa', description: 'The visa process often includes proof of funds and institution admission documents.' },
      { icon: 'train', title: 'Location', description: 'A strong base for study and travel across Europe with deep industrial connections.' }
    ],
    popularCourses: [
      { title: 'Mechanical Engineering', icon: 'car_repair', desc: 'Industry-led technical strength' },
      { title: 'Computer Science', icon: 'memory', desc: 'Strong research and startup growth' },
      { title: 'Automotive Systems', icon: 'directions_car', desc: 'Popular across engineering applicants' }
    ],
    admissionRequirements: ['Academic transcripts', 'Language proof depending on program', 'Proof of funds', 'Admission letter'],
    intakes: [{ name: 'Winter Semester', month: 'October' }, { name: 'Summer Semester', month: 'April' }],
    scholarships: { description: 'DAAD and institution-based funding options support selected international students.' }
  }
];

type InstitutionBase = {
  name: string;
  location: string;
  website: string;
  qsRanking?: string;
};

type InstitutionCatalog = {
  countryName: string;
  universityFees: string;
  collegeFees: string;
  universities: InstitutionBase[];
  colleges: InstitutionBase[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildInstitutionSeed = (
  countryName: string,
  base: InstitutionBase,
  type: 'UNIVERSITY' | 'COLLEGE',
  fees: string,
  order: number
): InstitutionSeed => {
  const isUniversity = type === 'UNIVERSITY';
  const seed: InstitutionSeed = {
    name: base.name,
    slug: slugify(base.name),
    description: isUniversity
      ? `${base.name} is a recognised university in ${countryName}, offering internationally focused academic pathways and student support in ${base.location}.`
      : `${base.name} is a recognised college or applied-sciences institution in ${countryName}, offering practical programs and career-focused learning in ${base.location}.`,
    location: base.location,
    ranking: isUniversity ? order + 1 : 999,
    tagline: isUniversity ? `Featured university in ${countryName}` : `Career-focused college option in ${countryName}`,
    website: base.website,
    fees,
    type,
    courses: isUniversity
      ? [
          { icon: 'school', title: 'Undergraduate Degrees', description: `Broad academic programs available for international students in ${countryName}.` },
          { icon: 'science', title: 'Graduate Study', description: 'Research, taught masters, and specialist progression opportunities.' }
        ]
      : [
          { icon: 'build', title: 'Applied Programs', description: `Practical, industry-oriented study options with strong skills development in ${countryName}.` },
          { icon: 'work', title: 'Pathways & Diplomas', description: 'Certificates, diplomas, and employment-focused progression routes.' }
        ],
    whyReasons: isUniversity
      ? [
          { icon: 'public', title: 'International Learning', description: `Study in ${base.location} with access to globally recognised higher education opportunities.` },
          { icon: 'workspace_premium', title: 'Academic Depth', description: 'Strong faculty expertise, campus resources, and international student support.' }
        ]
      : [
          { icon: 'engineering', title: 'Hands-on Training', description: 'Programs are designed around applied learning, skills, and employability.' },
          { icon: 'groups', title: 'Supportive Environment', description: 'Smaller cohorts and practical delivery can make the transition easier for international students.' }
        ],
    requirements: isUniversity
      ? [
          { title: 'Academic Qualification', description: 'Relevant secondary or prior tertiary study meeting the institution’s entry standard.' },
          { title: 'English Proficiency', description: 'Accepted English test scores are usually required for international applicants.' }
        ]
      : [
          { title: 'Academic Entry', description: 'Program entry depends on prior study and the level of certificate, diploma, or degree selected.' },
          { title: 'Language Requirement', description: 'English proof or approved pathway preparation may be required.' }
        ]
  };
  if (isUniversity) {
    seed.qsRanking = base.qsRanking ?? 'N/A';
  }

  return seed;
};

const institutionCatalog: Record<string, InstitutionCatalog> = {
  denmark: {
    countryName: 'Denmark',
    universityFees: 'EUR 8,000-18,000/year',
    collegeFees: 'EUR 6,000-14,000/year',
    universities: [
      { name: 'University of Copenhagen', location: 'Copenhagen', website: 'https://www.ku.dk/english', qsRanking: '#107' },
      { name: 'Aarhus University', location: 'Aarhus', website: 'https://international.au.dk', qsRanking: '#144' },
      { name: 'Technical University of Denmark', location: 'Lyngby', website: 'https://www.dtu.dk/english', qsRanking: '#121' },
      { name: 'Aalborg University', location: 'Aalborg', website: 'https://www.en.aau.dk', qsRanking: '#336' },
      { name: 'University of Southern Denmark', location: 'Odense', website: 'https://www.sdu.dk/en', qsRanking: '#326' },
      { name: 'Copenhagen Business School', location: 'Copenhagen', website: 'https://www.cbs.dk/en', qsRanking: '#N/A' },
      { name: 'Roskilde University', location: 'Roskilde', website: 'https://ruc.dk/en', qsRanking: '#N/A' },
      { name: 'IT University of Copenhagen', location: 'Copenhagen', website: 'https://en.itu.dk', qsRanking: '#N/A' }
    ],
    colleges: [
      { name: 'KEA Copenhagen School of Design and Technology', location: 'Copenhagen', website: 'https://kea.dk/en' },
      { name: 'VIA University College', location: 'Aarhus', website: 'https://en.via.dk' },
      { name: 'UCL University College', location: 'Odense', website: 'https://www.ucl.dk/international' },
      { name: 'University College Absalon', location: 'Sorø', website: 'https://en.phabsalon.dk' },
      { name: 'University College Copenhagen', location: 'Copenhagen', website: 'https://www.kp.dk/en/' },
      { name: 'Business Academy Aarhus', location: 'Aarhus', website: 'https://www.baaa.dk/en/' },
      { name: 'Zealand Academy of Technologies and Business', location: 'Køge', website: 'https://zealand.com/' },
      { name: 'Copenhagen Business Academy', location: 'Copenhagen', website: 'https://www.cphbusiness.dk/english' },
      { name: 'Danish School of Media and Journalism', location: 'Aarhus', website: 'https://www.dmjx.dk/en' },
      { name: 'International Business Academy', location: 'Kolding', website: 'https://www.iba.dk/international/' }
    ]
  },
  finland: {
    countryName: 'Finland',
    universityFees: 'EUR 8,000-18,000/year',
    collegeFees: 'EUR 6,000-14,000/year',
    universities: [
      { name: 'University of Helsinki', location: 'Helsinki', website: 'https://www.helsinki.fi/en', qsRanking: '#115' },
      { name: 'Aalto University', location: 'Espoo', website: 'https://www.aalto.fi/en', qsRanking: '#109' },
      { name: 'University of Turku', location: 'Turku', website: 'https://www.utu.fi/en', qsRanking: '#375' },
      { name: 'Tampere University', location: 'Tampere', website: 'https://www.tuni.fi/en', qsRanking: '#462' },
      { name: 'LUT University', location: 'Lappeenranta', website: 'https://www.lut.fi/en', qsRanking: '#336' },
      { name: 'University of Oulu', location: 'Oulu', website: 'https://www.oulu.fi/en', qsRanking: '#344' },
      { name: 'University of Vaasa', location: 'Vaasa', website: 'https://www.uwasa.fi/en', qsRanking: '#N/A' },
      { name: 'University of Jyväskylä', location: 'Jyväskylä', website: 'https://www.jyu.fi/en', qsRanking: '#489' },
      { name: 'University of Eastern Finland', location: 'Joensuu', website: 'https://www.uef.fi/en', qsRanking: '#548' },
      { name: 'Åbo Akademi University', location: 'Turku', website: 'https://www.abo.fi/en/', qsRanking: '#N/A' }
    ],
    colleges: [
      { name: 'Metropolia University of Applied Sciences', location: 'Helsinki', website: 'https://www.metropolia.fi/en' },
      { name: 'Haaga-Helia University of Applied Sciences', location: 'Helsinki', website: 'https://www.haaga-helia.fi/en' },
      { name: 'Laurea University of Applied Sciences', location: 'Vantaa', website: 'https://www.laurea.fi/en/' },
      { name: 'TAMK University of Applied Sciences', location: 'Tampere', website: 'https://www.tuni.fi/en/study-with-us/tamk' },
      { name: 'JAMK University of Applied Sciences', location: 'Jyväskylä', website: 'https://www.jamk.fi/en' },
      { name: 'LAB University of Applied Sciences', location: 'Lahti', website: 'https://lab.fi/en' },
      { name: 'Savonia University of Applied Sciences', location: 'Kuopio', website: 'https://www.savonia.fi/en/' },
      { name: 'Oulu University of Applied Sciences', location: 'Oulu', website: 'https://www.oamk.fi/en/' },
      { name: 'Turku University of Applied Sciences', location: 'Turku', website: 'https://www.turkuamk.fi/en/' },
      { name: 'Vaasa University of Applied Sciences', location: 'Vaasa', website: 'https://www.vamk.fi/en/' }
    ]
  },
  australia: {
    countryName: 'Australia',
    universityFees: 'AUD 28,000-52,000/year',
    collegeFees: 'AUD 14,000-30,000/year',
    universities: [
      { name: 'University of Melbourne', location: 'Melbourne', website: 'https://www.unimelb.edu.au', qsRanking: '#13' },
      { name: 'University of Sydney', location: 'Sydney', website: 'https://www.sydney.edu.au', qsRanking: '#18' },
      { name: 'Australian National University', location: 'Canberra', website: 'https://www.anu.edu.au', qsRanking: '#30' },
      { name: 'UNSW Sydney', location: 'Sydney', website: 'https://www.unsw.edu.au', qsRanking: '#19' },
      { name: 'Monash University', location: 'Melbourne', website: 'https://www.monash.edu', qsRanking: '#37' },
      { name: 'University of Queensland', location: 'Brisbane', website: 'https://www.uq.edu.au', qsRanking: '#40' },
      { name: 'University of Western Australia', location: 'Perth', website: 'https://www.uwa.edu.au', qsRanking: '#77' },
      { name: 'University of Adelaide', location: 'Adelaide', website: 'https://www.adelaide.edu.au', qsRanking: '#82' },
      { name: 'University of Technology Sydney', location: 'Sydney', website: 'https://www.uts.edu.au', qsRanking: '#88' },
      { name: 'Macquarie University', location: 'Sydney', website: 'https://www.mq.edu.au', qsRanking: '#133' }
    ],
    colleges: [
      { name: 'TAFE NSW', location: 'Sydney', website: 'https://www.tafensw.edu.au' },
      { name: 'TAFE Queensland', location: 'Brisbane', website: 'https://tafeqld.edu.au' },
      { name: 'Holmesglen Institute', location: 'Melbourne', website: 'https://www.holmesglen.edu.au' },
      { name: 'Box Hill Institute', location: 'Melbourne', website: 'https://www.boxhill.edu.au' },
      { name: 'Chisholm Institute', location: 'Melbourne', website: 'https://www.chisholm.edu.au' },
      { name: 'Kangan Institute', location: 'Melbourne', website: 'https://www.kangan.edu.au' },
      { name: 'TAFE SA', location: 'Adelaide', website: 'https://www.tafesa.edu.au' },
      { name: 'South Metropolitan TAFE', location: 'Perth', website: 'https://www.southmetrotafe.wa.edu.au' },
      { name: 'North Metropolitan TAFE', location: 'Perth', website: 'https://www.northmetrotafe.wa.edu.au' },
      { name: 'Canberra Institute of Technology', location: 'Canberra', website: 'https://cit.edu.au' }
    ]
  },
  'united-kingdom': {
    countryName: 'United Kingdom',
    universityFees: 'GBP 14,000-38,000/year',
    collegeFees: 'GBP 10,000-24,000/year',
    universities: [
      { name: 'University of Oxford', location: 'Oxford', website: 'https://www.ox.ac.uk', qsRanking: '#3' },
      { name: 'University of Cambridge', location: 'Cambridge', website: 'https://www.cam.ac.uk', qsRanking: '#5' },
      { name: 'Imperial College London', location: 'London', website: 'https://www.imperial.ac.uk', qsRanking: '#2' },
      { name: 'UCL', location: 'London', website: 'https://www.ucl.ac.uk', qsRanking: '#9' },
      { name: 'King\'s College London', location: 'London', website: 'https://www.kcl.ac.uk', qsRanking: '#40' },
      { name: 'University of Edinburgh', location: 'Edinburgh', website: 'https://www.ed.ac.uk', qsRanking: '#27' },
      { name: 'University of Manchester', location: 'Manchester', website: 'https://www.manchester.ac.uk', qsRanking: '#34' },
      { name: 'University of Bristol', location: 'Bristol', website: 'https://www.bristol.ac.uk', qsRanking: '#54' },
      { name: 'University of Glasgow', location: 'Glasgow', website: 'https://www.gla.ac.uk', qsRanking: '#78' },
      { name: 'University of Warwick', location: 'Coventry', website: 'https://warwick.ac.uk', qsRanking: '#69' }
    ],
    colleges: [
      { name: 'University College Birmingham', location: 'Birmingham', website: 'https://www.ucb.ac.uk' },
      { name: 'Cardiff and Vale College', location: 'Cardiff', website: 'https://cavc.ac.uk' },
      { name: 'City of Glasgow College', location: 'Glasgow', website: 'https://www.cityofglasgowcollege.ac.uk' },
      { name: 'Nottingham College', location: 'Nottingham', website: 'https://www.nottinghamcollege.ac.uk' },
      { name: 'Leeds City College', location: 'Leeds', website: 'https://leedscitycollege.ac.uk' },
      { name: 'West London College', location: 'London', website: 'https://www.wlc.ac.uk' },
      { name: 'New College Durham', location: 'Durham', website: 'https://www.newcollegedurham.ac.uk' },
      { name: 'Birmingham Metropolitan College', location: 'Birmingham', website: 'https://www.bmet.ac.uk' },
      { name: 'Coventry College', location: 'Coventry', website: 'https://coventrycollege.ac.uk' },
      { name: 'South Thames College', location: 'London', website: 'https://www.south-thames.ac.uk' }
    ]
  },
  canada: {
    countryName: 'Canada',
    universityFees: 'CAD 20,000-60,000/year',
    collegeFees: 'CAD 14,000-28,000/year',
    universities: [
      { name: 'University of Toronto', location: 'Toronto', website: 'https://www.utoronto.ca', qsRanking: '#25' },
      { name: 'University of British Columbia', location: 'Vancouver', website: 'https://www.ubc.ca', qsRanking: '#38' },
      { name: 'McGill University', location: 'Montreal', website: 'https://www.mcgill.ca', qsRanking: '#29' },
      { name: 'University of Alberta', location: 'Edmonton', website: 'https://www.ualberta.ca', qsRanking: '#96' },
      { name: 'University of Waterloo', location: 'Waterloo', website: 'https://uwaterloo.ca', qsRanking: '#115' },
      { name: 'McMaster University', location: 'Hamilton', website: 'https://www.mcmaster.ca', qsRanking: '#176' },
      { name: 'Université de Montréal', location: 'Montreal', website: 'https://www.umontreal.ca/en/', qsRanking: '#159' },
      { name: 'University of Calgary', location: 'Calgary', website: 'https://www.ucalgary.ca', qsRanking: '#198' },
      { name: 'University of Ottawa', location: 'Ottawa', website: 'https://www.uottawa.ca/en', qsRanking: '#189' },
      { name: 'Queen\'s University', location: 'Kingston', website: 'https://www.queensu.ca', qsRanking: '#193' }
    ],
    colleges: [
      { name: 'George Brown College', location: 'Toronto', website: 'https://www.georgebrown.ca' },
      { name: 'Humber Polytechnic', location: 'Toronto', website: 'https://humber.ca' },
      { name: 'Seneca Polytechnic', location: 'Toronto', website: 'https://www.senecapolytechnic.ca' },
      { name: 'Centennial College', location: 'Toronto', website: 'https://www.centennialcollege.ca' },
      { name: 'Sheridan College', location: 'Oakville', website: 'https://www.sheridancollege.ca' },
      { name: 'Fanshawe College', location: 'London', website: 'https://www.fanshawec.ca' },
      { name: 'Conestoga College', location: 'Kitchener', website: 'https://www.conestogac.on.ca' },
      { name: 'Algonquin College', location: 'Ottawa', website: 'https://www.algonquincollege.com' },
      { name: 'Douglas College', location: 'New Westminster', website: 'https://www.douglascollege.ca' },
      { name: 'British Columbia Institute of Technology', location: 'Burnaby', website: 'https://www.bcit.ca' }
    ]
  },
  'united-states': {
    countryName: 'United States',
    universityFees: 'USD 28,000-65,000/year',
    collegeFees: 'USD 8,000-22,000/year',
    universities: [
      { name: 'Massachusetts Institute of Technology', location: 'Cambridge', website: 'https://www.mit.edu', qsRanking: '#1' },
      { name: 'Stanford University', location: 'Stanford', website: 'https://www.stanford.edu', qsRanking: '#6' },
      { name: 'Harvard University', location: 'Cambridge', website: 'https://www.harvard.edu', qsRanking: '#4' },
      { name: 'University of California, Berkeley', location: 'Berkeley', website: 'https://www.berkeley.edu', qsRanking: '#12' },
      { name: 'University of California, Los Angeles', location: 'Los Angeles', website: 'https://www.ucla.edu', qsRanking: '#42' },
      { name: 'University of Michigan', location: 'Ann Arbor', website: 'https://umich.edu', qsRanking: '#44' },
      { name: 'Columbia University', location: 'New York City', website: 'https://www.columbia.edu', qsRanking: '#34' },
      { name: 'New York University', location: 'New York City', website: 'https://www.nyu.edu', qsRanking: '#43' },
      { name: 'Carnegie Mellon University', location: 'Pittsburgh', website: 'https://www.cmu.edu', qsRanking: '#58' },
      { name: 'University of Washington', location: 'Seattle', website: 'https://www.washington.edu', qsRanking: '#76' }
    ],
    colleges: [
      { name: 'Santa Monica College', location: 'Santa Monica', website: 'https://www.smc.edu' },
      { name: 'De Anza College', location: 'Cupertino', website: 'https://www.deanza.edu' },
      { name: 'Foothill College', location: 'Los Altos Hills', website: 'https://foothill.edu' },
      { name: 'Pasadena City College', location: 'Pasadena', website: 'https://pasadena.edu' },
      { name: 'Orange Coast College', location: 'Costa Mesa', website: 'https://orangecoastcollege.edu' },
      { name: 'Valencia College', location: 'Orlando', website: 'https://valenciacollege.edu' },
      { name: 'Miami Dade College', location: 'Miami', website: 'https://www.mdc.edu' },
      { name: 'Austin Community College', location: 'Austin', website: 'https://www.austincc.edu' },
      { name: 'Borough of Manhattan Community College', location: 'New York City', website: 'https://www.bmcc.cuny.edu' },
      { name: 'Houston Community College', location: 'Houston', website: 'https://www.hccs.edu' }
    ]
  },
  'new-zealand': {
    countryName: 'New Zealand',
    universityFees: 'NZD 24,000-45,000/year',
    collegeFees: 'NZD 16,000-28,000/year',
    universities: [
      { name: 'University of Auckland', location: 'Auckland', website: 'https://www.auckland.ac.nz', qsRanking: '#68' },
      { name: 'Auckland University of Technology', location: 'Auckland', website: 'https://www.aut.ac.nz', qsRanking: '#412' },
      { name: 'Massey University', location: 'Palmerston North', website: 'https://www.massey.ac.nz', qsRanking: '#239' },
      { name: 'University of Waikato', location: 'Hamilton', website: 'https://www.waikato.ac.nz', qsRanking: '#235' },
      { name: 'Victoria University of Wellington', location: 'Wellington', website: 'https://www.wgtn.ac.nz', qsRanking: '#244' },
      { name: 'University of Canterbury', location: 'Christchurch', website: 'https://www.canterbury.ac.nz', qsRanking: '#261' },
      { name: 'Lincoln University', location: 'Lincoln', website: 'https://www.lincoln.ac.nz', qsRanking: '#371' },
      { name: 'University of Otago', location: 'Dunedin', website: 'https://www.otago.ac.nz', qsRanking: '#214' }
    ],
    colleges: [
      { name: 'Ara Institute of Canterbury', location: 'Christchurch', website: 'https://www.ara.ac.nz' },
      { name: 'Unitec Institute of Technology', location: 'Auckland', website: 'https://www.unitec.ac.nz' },
      { name: 'Manukau Institute of Technology', location: 'Auckland', website: 'https://www.manukau.ac.nz' },
      { name: 'Waikato Institute of Technology', location: 'Hamilton', website: 'https://www.wintec.ac.nz' },
      { name: 'Otago Polytechnic', location: 'Dunedin', website: 'https://www.op.ac.nz' },
      { name: 'Southern Institute of Technology', location: 'Invercargill', website: 'https://www.sit.ac.nz' },
      { name: 'Eastern Institute of Technology', location: 'Napier', website: 'https://www.eit.ac.nz' },
      { name: 'Nelson Marlborough Institute of Technology', location: 'Nelson', website: 'https://www.nmit.ac.nz' },
      { name: 'Toi Ohomai Institute of Technology', location: 'Rotorua', website: 'https://www.toiohomai.ac.nz' },
      { name: 'NorthTec', location: 'Whangārei', website: 'https://www.northtec.ac.nz' }
    ]
  },
  germany: {
    countryName: 'Germany',
    universityFees: 'Low tuition or semester contribution',
    collegeFees: 'EUR 0-18,000/year depending on provider',
    universities: [
      { name: 'Technical University of Munich', location: 'Munich', website: 'https://www.tum.de/en', qsRanking: '#28' },
      { name: 'LMU Munich', location: 'Munich', website: 'https://www.lmu.de/en/', qsRanking: '#59' },
      { name: 'Heidelberg University', location: 'Heidelberg', website: 'https://www.uni-heidelberg.de/en/', qsRanking: '#84' },
      { name: 'Humboldt University of Berlin', location: 'Berlin', website: 'https://www.hu-berlin.de/en', qsRanking: '#126' },
      { name: 'RWTH Aachen University', location: 'Aachen', website: 'https://www.rwth-aachen.de/go/id/a/?lidx=1', qsRanking: '#99' },
      { name: 'Freie Universität Berlin', location: 'Berlin', website: 'https://www.fu-berlin.de/en/', qsRanking: '#97' },
      { name: 'University of Freiburg', location: 'Freiburg', website: 'https://www.uni-freiburg.de/en/', qsRanking: '#212' },
      { name: 'Karlsruhe Institute of Technology', location: 'Karlsruhe', website: 'https://www.kit.edu/english/', qsRanking: '#102' },
      { name: 'University of Bonn', location: 'Bonn', website: 'https://www.uni-bonn.de/en', qsRanking: '#227' },
      { name: 'University of Mannheim', location: 'Mannheim', website: 'https://www.uni-mannheim.de/en/', qsRanking: '#487' }
    ],
    colleges: [
      { name: 'Munich University of Applied Sciences', location: 'Munich', website: 'https://www.hm.edu/en/' },
      { name: 'Berlin University of Applied Sciences and Technology', location: 'Berlin', website: 'https://www.berlin-university-of-applied-sciences-and-technology.de/en/' },
      { name: 'Frankfurt University of Applied Sciences', location: 'Frankfurt', website: 'https://www.frankfurt-university.de/en/' },
      { name: 'HTW Berlin', location: 'Berlin', website: 'https://www.htw-berlin.de/en/' },
      { name: 'Bremen City University of Applied Sciences', location: 'Bremen', website: 'https://www.hs-bremen.de/internet/en/' },
      { name: 'Hanover University of Applied Sciences and Arts', location: 'Hanover', website: 'https://www.hs-hannover.de/en/' },
      { name: 'TH Köln - University of Applied Sciences', location: 'Cologne', website: 'https://www.th-koeln.de/en/' },
      { name: 'Darmstadt University of Applied Sciences', location: 'Darmstadt', website: 'https://h-da.de/en/' },
      { name: 'Hochschule Ruhr West', location: 'Mülheim an der Ruhr', website: 'https://www.hochschule-ruhr-west.de/en/' },
      { name: 'GISMA University of Applied Sciences', location: 'Berlin', website: 'https://www.gisma.com/' }
    ]
  }
};

const institutionSeeds: Record<string, InstitutionSeed[]> = Object.fromEntries(
  Object.entries(institutionCatalog).map(([countrySlug, catalog]) => [
    countrySlug,
    [
      ...catalog.universities.map((institution, index) =>
        buildInstitutionSeed(catalog.countryName, institution, 'UNIVERSITY', catalog.universityFees, index)
      ),
      ...catalog.colleges.map((institution, index) =>
        buildInstitutionSeed(catalog.countryName, institution, 'COLLEGE', catalog.collegeFees, index)
      )
    ]
  ])
);

const alumniSeeds: AlumniSeed[] = [
  {
    name: 'Mira J.',
    university: 'University of Copenhagen',
    degree: 'MSc in Global Health',
    country: 'denmark',
    quote: 'The application process felt organized from the beginning, and I had clear guidance on every document I needed.'
  },
  {
    name: 'Elina R.',
    university: 'University of Helsinki',
    degree: 'MSc in Environmental Change and Global Sustainability',
    country: 'finland',
    quote: 'The support made the Finland application process feel manageable, especially when it came to choosing the right program and preparing documents.'
  },
  {
    name: 'Rohan P.',
    university: 'University of Melbourne',
    degree: 'Master of Information Systems',
    country: 'australia',
    quote: 'Everything from course shortlisting to visa preparation was structured well, which made the move to Melbourne much easier.'
  },
  {
    name: 'Aisha K.',
    university: 'University of Manchester',
    degree: 'MSc in Data Science',
    country: 'united-kingdom',
    quote: 'I appreciated having realistic timelines and help with the paperwork. It made the whole UK application journey much less stressful.'
  },
  {
    name: 'Dev S.',
    university: 'University of Toronto',
    degree: 'Master of Management Analytics',
    country: 'canada',
    quote: 'The support around admissions and study permit documents gave me confidence that I was submitting everything correctly.'
  },
  {
    name: 'Nina T.',
    university: 'Northeastern University',
    degree: 'MS in Computer Science',
    country: 'united-states',
    quote: 'The biggest help was narrowing my options and understanding which universities matched my profile and goals.'
  },
  {
    name: 'Kabir R.',
    university: 'University of Auckland',
    degree: 'Master of Business Analytics',
    country: 'new-zealand',
    quote: 'The process stayed simple and transparent, and I always knew what the next step was before deadlines came up.'
  },
  {
    name: 'Sana M.',
    university: 'Technical University of Munich',
    degree: 'MSc in Mechanical Engineering',
    country: 'germany',
    quote: 'Guidance on language requirements, university choices, and visa preparation helped me avoid a lot of confusion.'
  }
];

async function seed() {
  await connectDatabase();
  console.log('Connected to database.');

  await prisma.$transaction([
    prisma.alumni.deleteMany({}),
    prisma.university.deleteMany({}),
    prisma.country.deleteMany({})
  ]);
  console.log('Cleared alumni, universities, and countries.');

  const countryIdBySlug = new Map<string, string>();

  for (const country of countrySeeds) {
    const createdCountry = await prisma.country.create({
      data: {
        ...country,
        heroImage: ''
      } as any
    });

    countryIdBySlug.set(country.slug, createdCountry.id);
  }
  console.log(`Created ${countrySeeds.length} countries.`);

  let institutionCount = 0;
  for (const [countrySlug, institutions] of Object.entries(institutionSeeds)) {
    const countryId = countryIdBySlug.get(countrySlug);
    if (!countryId) {
      throw new Error(`Missing country for slug: ${countrySlug}`);
    }

    for (const institution of institutions) {
      await prisma.university.create({
        data: {
          name: institution.name,
          slug: institution.slug,
          description: institution.description,
          location: institution.location,
          image: '',
          ranking: institution.ranking,
          qsRanking: institution.qsRanking,
          tagline: institution.tagline,
          website: institution.website,
          fees: institution.fees,
          type: institution.type,
          countryId,
          ...buildDetail(institution)
        } as any
      });
      institutionCount += 1;
    }
  }
  console.log(`Created ${institutionCount} universities/colleges.`);

  for (const alumni of alumniSeeds) {
    await prisma.alumni.create({
      data: {
        ...alumni,
        image: ''
      }
    });
  }
  console.log(`Created ${alumniSeeds.length} alumni.`);

  const [countryCount, universityCount, alumniCount] = await Promise.all([
    prisma.country.count(),
    prisma.university.count(),
    prisma.alumni.count()
  ]);

  console.log('\nSeed complete!');
  console.log(`  Countries: ${countryCount}`);
  console.log(`  Universities/Colleges: ${universityCount}`);
  console.log(`  Alumni: ${alumniCount}`);

  await disconnectDatabase();
}

seed().catch(async (error) => {
  console.error('Seed failed:', error);
  await disconnectDatabase();
  process.exit(1);
});
