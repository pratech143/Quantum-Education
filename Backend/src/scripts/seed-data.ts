import { prisma, connectDatabase, disconnectDatabase } from '../shared/database/prisma.js';

// ─── Helper: build rich detail fields per university ─────
function buildDetail(u: {
  name: string; slug: string; desc: string; website: string; img: string;
  courses: { icon: string; title: string; description: string; tag?: string; tagStyle?: string }[];
  whyReasons: { icon: string; title: string; description: string }[];
  requirements: { title: string; description: string }[];
  howToApply: string[];
}) {
  return {
    heroData: {
      title: u.name,
      subtitle: u.desc,
      image: u.img,
      primaryCta: 'Explore Programs',
      secondaryCta: 'Virtual Tour'
    },
    whySection: {
      title: `Why ${u.name}?`,
      reasons: u.whyReasons
    },
    coursesData: {
      title: 'Courses Offered',
      description: `Explore our diverse range of programs at ${u.name} designed for the modern global workforce.`,
      buttonText: 'View All Courses',
      courses: u.courses
    },
    admissionData: {
      requirementsTitle: 'Entry Requirements',
      howToApplyTitle: 'How to Apply',
      requirements: u.requirements,
      howToApply: u.howToApply
    },
    ctaData: {
      title: 'Ready to begin your journey?',
      description: `Take the first step toward a global career with ${u.name}. Scholarships, intake dates, and application details are just a click away.`,
      buttonText: 'Visit Official Website',
      link: u.website
    }
  };
}

async function seed() {
  await connectDatabase();
  console.log('Connected to database.');

  await prisma.university.deleteMany({});
  await prisma.country.deleteMany({});
  await prisma.alumni.deleteMany({});
  console.log('Cleared existing data.');

  // ═══════════════════════════════════════════════════════
  //  COUNTRIES
  // ═══════════════════════════════════════════════════════

  const australia = await prisma.country.create({
    data: {
      name: 'Australia', slug: 'australia',
      description: 'Dynamic cities, high quality of life, and exceptional work rights for international students.',
      tuitionFees: 30000, visaInfo: 'Student Visa (Subclass 500) allows stay for up to 5 years in line with enrollment.',
      livingCost: 21041, currency: 'AUD',
      heroImage: '/assets/countries/australia/australia-hero.jpg',
      heroSubtitle: 'World-class education in the Land Down Under',
      heroStats: [{ label: 'Universities', value: '43' }, { label: 'Avg Tuition', value: '$20k-$45k' }, { label: 'Visa Success', value: '95%' }],
      overview: { title: 'Country Overview', description: [
        "Australia stands as a global beacon of academic excellence, offering a unique blend of world-class research facilities and an unparalleled outdoor lifestyle. With a history of pioneering innovations—from the black box flight recorder to Wi-Fi—Australian institutions focus heavily on practical application and industry relevance.",
        "Whether you're drawn to the vibrant urban centers of Melbourne and Sydney or the stunning natural landscapes of Western Australia, you'll find an inclusive society that celebrates international perspectives."
      ]},
      details: [
        { icon: 'wb_sunny', title: 'Climate', description: 'Temperate in the south, tropical in the north. Sunny, warm summers and mild winters.' },
        { icon: 'payments', title: 'Living Cost', description: 'Approx. $21,041/yr (AUD) for basic requirements as per migration standards.' },
        { icon: 'badge', title: 'Visa Type', description: 'Student Visa (Subclass 500) allows stay for up to 5 years in line with enrollment.' },
        { icon: 'work', title: 'Work Rights', description: '48 hours per fortnight during sessions; unlimited during scheduled breaks.' },
        { icon: 'translate', title: 'Language', description: 'IELTS 6.0+ minimum for most degrees. PTE and TOEFL also widely accepted.' }
      ],
      popularCourses: [
        { title: 'Nursing', icon: 'medical_services', desc: 'High demand & PR pathways' },
        { title: 'Information Tech', icon: 'terminal', desc: 'AI, Cybersecurity & Data' },
        { title: 'Engineering', icon: 'engineering', desc: 'Civil, Mech & Sustainable' }
      ],
      admissionRequirements: ['Academic transcripts (Bachelor/High School)', 'English proficiency scores (IELTS/PTE)', 'Statement of Purpose (GTE requirement)', 'Financial capacity evidence'],
      intakes: [{ name: 'Semester 1', month: 'February' }, { name: 'Semester 2', month: 'July' }, { name: 'Summer Intake', month: 'November' }],
      scholarships: { description: 'Up to 25% Destination Australia scholarships and numerous university-specific merit awards (10-50%).' }
    }
  });

  const usa = await prisma.country.create({
    data: {
      name: 'United States', slug: 'unitedstates',
      description: 'The global hub for innovation, research, and high-impact career opportunities in STEM.',
      tuitionFees: 40000, visaInfo: 'F-1 Student Visa for full-time learners at an accredited institution.',
      livingCost: 20000, currency: 'USD',
      heroImage: '', heroSubtitle: 'The Land of Opportunity and Cutting-Edge Innovation',
      heroStats: [{ label: 'Colleges', value: '4,000+' }, { label: 'Avg Tuition', value: '$25k-$55k' }, { label: 'STEM OPT', value: '3 Years' }],
      overview: { title: 'A Hub for Innovation and Diversity', description: [
        "The United States is the premier destination for international students, offering unmatched flexibility in academic programs and access to some of the world's leading technology and research facilities.",
        "You'll become part of a vibrant campus culture that fosters networking, leadership, and hands-on experience, bridging the gap between academia and industry."
      ]},
      details: [
        { icon: 'wb_twilight', title: 'Climate', description: 'Varies from tropical in Hawaii/Florida to arctic in Alaska. Diverse regional weather.' },
        { icon: 'payments', title: 'Living Cost', description: 'Approx. $15,000 - $25,000 USD/yr depending on location and lifestyle.' },
        { icon: 'badge', title: 'Visa Type', description: 'F-1 Student Visa for full-time learners at an accredited institution.' },
        { icon: 'work_history', title: 'Work Rights', description: 'Up to 20 hrs/week on-campus. CPT and OPT opportunities available.' },
        { icon: 'translate', title: 'Language', description: 'IELTS 6.5+ or TOEFL 80+ typically required by standard universities.' }
      ],
      popularCourses: [
        { title: 'Computer Science', icon: 'data_object', desc: 'Silicon Valley pathways' },
        { title: 'Business Admin', icon: 'business_center', desc: 'Global fortune 500 networking' },
        { title: 'Engineering', icon: 'precision_manufacturing', desc: 'Advanced R&D projects' }
      ],
      admissionRequirements: ['Academic transcripts & GPA', 'Standardized test scores (SAT/GRE/GMAT)', 'Letters of recommendation & Statement of Purpose', 'I-20 financial declaration'],
      intakes: [{ name: 'Fall Semester', month: 'August/September' }, { name: 'Spring Semester', month: 'January' }],
      scholarships: { description: 'Extensive merit-based scholarships and assistantships offered directly by academic departments.' }
    }
  });

  const uk = await prisma.country.create({
    data: {
      name: 'United Kingdom', slug: 'unitedkingdom',
      description: 'Centuries of academic excellence paired with a fast-tracked 2-year post-study work visa.',
      tuitionFees: 18000, visaInfo: 'Student Visa (formerly Tier 4). Requires CAS and financial proof.',
      livingCost: 12000, currency: 'GBP',
      heroImage: '', heroSubtitle: 'Academic Heritage and Innovation in Europe',
      heroStats: [{ label: 'Institutions', value: '160+' }, { label: 'Avg Tuition', value: '£12k-£25k' }, { label: 'Graduate Visa', value: '2 Years' }],
      overview: { title: 'A Global Leader in Research & Excellence', description: [
        "The UK offers a world-renowned education system with a rich history of academic prestige. Degrees here are shorter, intensive, and highly respected globally.",
        "With shorter course durations and the re-introduced Graduate Route visa, it's a top choice for efficiency, cultural immersion, and career growth."
      ]},
      details: [
        { icon: 'cloud', title: 'Climate', description: 'Temperate maritime; cool winters, mild summers, and frequent rainfall.' },
        { icon: 'payments', title: 'Living Cost', description: '£1,334/month in London, £1,023/month outside London.' },
        { icon: 'badge', title: 'Visa Type', description: 'Student Visa (formerly Tier 4). Requires CAS and financial proof.' },
        { icon: 'history_edu', title: 'Duration', description: 'Fast-track: 3-year Bachelors and 1-year Masters.' },
        { icon: 'euro', title: 'Healthcare', description: 'IHS surcharge allows full access to the NHS as a student.' }
      ],
      popularCourses: [
        { title: 'Business & Management', icon: 'business', desc: 'Financial hub connections' },
        { title: 'Law', icon: 'gavel', desc: 'Foundational legal systems' },
        { title: 'Medicine', icon: 'health_and_safety', desc: 'Prestigious NHS integration' }
      ],
      admissionRequirements: ['UCAS Application (Undergrad)', 'Academic References', 'Personal Statement', 'CAS Letter'],
      intakes: [{ name: 'Autumn Intake', month: 'September/October' }, { name: 'Spring Intake', month: 'January/February' }],
      scholarships: { description: 'Chevening, Commonwealth, and GREAT scholarships alongside university-specific funds.' }
    }
  });

  const canada = await prisma.country.create({
    data: {
      name: 'Canada', slug: 'canada',
      description: 'Welcoming communities with clear pathways to permanent residency after graduation and excellent academic standards.',
      tuitionFees: 25000, visaInfo: 'Study Permit. Paired with a TRV or eTA for entry.',
      livingCost: 20635, currency: 'CAD',
      heroImage: '', heroSubtitle: 'Your Pathway to Innovation and Permanent Residency',
      heroStats: [{ label: 'Universities', value: '90+' }, { label: 'Avg Tuition', value: '$15k-$35k CAD' }, { label: 'Visa Success', value: '88%' }],
      overview: { title: 'A Welcoming Nation of Opportunity', description: [
        "Canada consistently ranks as one of the best countries in the world for quality of life and high-standard education. Its post-graduation work permit (PGWP) program is among the most generous globally.",
        "Experiencing Canada means enjoying a diverse, inclusive society that welcomes international talent and prioritizes student well-being."
      ]},
      details: [
        { icon: 'ac_unit', title: 'Climate', description: 'Cold and snowy winters, warm and pleasant summers depending on the province.' },
        { icon: 'payments', title: 'Living Cost', description: 'Approx. $20,635 CAD GIC requirement + living expenses.' },
        { icon: 'badge', title: 'Visa Type', description: 'Study Permit. Paired with a TRV or eTA for entry.' },
        { icon: 'trending_up', title: 'Work/PR', description: 'Up to 3-year PGWP and clear pathways to Permanent Residency.' },
        { icon: 'electric_bolt', title: 'SDS Stream', description: 'Expedited visa stream available for specific regions.' }
      ],
      popularCourses: [
        { title: 'Information Tech', icon: 'terminal', desc: 'Rapid PR points' },
        { title: 'Healthcare', icon: 'medical_information', desc: 'Severe local shortages' },
        { title: 'Hospitality', icon: 'restaurant', desc: 'Booming tourism sector' }
      ],
      admissionRequirements: ['LOA (Letter of Acceptance) from a DLI', 'Proof of Funds (GIC)', 'Provincial Attestation Letter (if applicable)', 'Biometrics & Medical Exam'],
      intakes: [{ name: 'Fall', month: 'September' }, { name: 'Winter', month: 'January' }, { name: 'Spring', month: 'May' }],
      scholarships: { description: 'Vanier Graduate Scholarships, Lester B. Pearson International, and university-based entrance awards.' }
    }
  });

  const germany = await prisma.country.create({
    data: {
      name: 'Germany', slug: 'germany',
      description: 'Access to top schools across the EU, offering affordable tuition and rich cultural experiences across borders.',
      tuitionFees: 500, visaInfo: 'National Visa for Studies. Requires Blocked Account proof.',
      livingCost: 11208, currency: 'EUR',
      heroImage: '', heroSubtitle: 'High-Quality Education with Low-to-No Tuition',
      heroStats: [{ label: 'Universities', value: '380+' }, { label: 'Avg Tuition', value: '€0-€1.5k' }, { label: 'Stay-back', value: '18 Months' }],
      overview: { title: 'The Land of Ideas and Engineering', description: [
        "Germany is the most popular non-English speaking destination for international students. It offers world-class degrees, especially in engineering and technology, often with zero tuition fees at public universities.",
        "From vibrant tech hubs in Berlin to legacy engineering in Munich, Germany grounds academic theory in robust industrial partnerships."
      ]},
      details: [
        { icon: 'thermostat', title: 'Climate', description: 'Moderate climate; warm summers and chilly, snowy winters.' },
        { icon: 'payments', title: 'Living Cost', description: '€11,208/yr (Blocked Account requirement) covering rent & basics.' },
        { icon: 'badge', title: 'Visa Type', description: 'National Visa for Studies. Requires Blocked Account proof.' },
        { icon: 'euro_symbol', title: 'Tuition', description: 'Mostly free at public universities (except state of Baden-Württemberg).' },
        { icon: 'directions_railway', title: 'Location', description: 'Heart of Europe; easily travel the EU on your student visa.' }
      ],
      popularCourses: [
        { title: 'Mechanical Eng.', icon: 'car_repair', desc: 'Automotive epicenter' },
        { title: 'Computer Science', icon: 'data_array', desc: 'Berlin tech startups' },
        { title: 'Renewable Energy', icon: 'solar_power', desc: 'Eco-innovation leader' }
      ],
      admissionRequirements: ['Hochschulzugangsberechtigung (HZB) assessment', 'Language proof (IELTS or TestDaF)', 'Proof of Blocked Account', 'Letter of Admission from Uni-Assist'],
      intakes: [{ name: 'Winter Semester', month: 'October' }, { name: 'Summer Semester', month: 'April' }],
      scholarships: { description: 'DAAD Scholarships cover living stipends for top international students, along with Erasmus+ programs.' }
    }
  });
  console.log('Created 5 countries');

  // ═══════════════════════════════════════════════════════
  //  UNIVERSITIES — each with FULL detail page content
  // ═══════════════════════════════════════════════════════

  const defaultApplySteps = [
    'Select your course and check the entry dates.',
    'Prepare your academic transcripts and documents.',
    'Submit your application via the online portal.',
    'Accept your offer and start your visa process.'
  ];

  // ── AUSTRALIA UNIVERSITIES ─────────────────────────────
  const ausUniData = [
    { name: 'University of Melbourne', slug: 'university-of-melbourne', location: 'Victoria', qs: '#14', ranking: 14,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBONdyWp98dja6bdquwGL6OOBcfaNTS1YfO47JDmkNYZ47QSV1wbiKNjI08XnXbPVb9QSldMnx-i8_cCUt55vgzQuIV9BXiOy1w6bXCEoM8sZM1R0W5JR_C7bbxM0VZQ7ux2ROAhe6mwV9Eq1jgCxGaUY-HP02u8VLsbs95emvPdck8YWPPHh06LIAdFO74Kh6yXpgwecTVdI-PZCXZ-40L2ncolkIH1kAxjZ2vRHMhafsgXdQyqKaIm4YhxhrsUTesNT62kJXS6ZY',
      tagline: '#1 in Australia • Research Focused', website: 'https://www.unimelb.edu.au',
      desc: 'A global leader in research and teaching, consistently ranked as the number one university in Australia with groundbreaking contributions to medicine, arts, and science.',
      courses: [
        { icon: 'biotech', title: 'Biomedicine', description: 'World-leading biomedical research with clinical pathways and lab access.', tag: 'Top Ranked', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'terminal', title: 'Computer Science', description: 'AI, machine learning, and software engineering in a research-intensive environment.', tag: 'High Demand', tagStyle: 'bg-secondary-container text-on-secondary-container' },
        { icon: 'gavel', title: 'Law', description: 'Melbourne Law School is ranked #1 in Australia for legal studies.' },
        { icon: 'business_center', title: 'Commerce', description: 'Global business strategy with industry partnerships and internships.' },
        { icon: 'architecture', title: 'Architecture', description: 'Design-led thinking in sustainable urban environments.' }
      ],
      whyReasons: [
        { icon: 'workspace_premium', title: '#1 in Australia', description: 'Consistently the top-ranked university across all major global rankings including QS, THE, and ARWU.' },
        { icon: 'biotech', title: 'Research Powerhouse', description: 'Over $960M in annual research income with breakthroughs in cancer therapy, quantum computing, and sustainability.' },
        { icon: 'public', title: 'Global Connections', description: 'Exchange partnerships with 180+ institutions across 40 countries, giving you a truly global education.' },
        { icon: 'location_city', title: 'Melbourne Lifestyle', description: 'Study in the world\'s most liveable city — a thriving cultural, culinary, and creative capital.' }
      ],
      requirements: [
        { title: 'Academic Excellence', description: 'Completion of Year 12 or equivalent with competitive ATAR/GPA scores.' },
        { title: 'English Proficiency', description: 'IELTS 6.5 overall (no band below 6.0) or equivalent TOEFL/PTE scores.' },
        { title: 'Prerequisites', description: 'Specific subject prerequisites vary by course — check the handbook for details.' }
      ]
    },
    { name: 'University of Sydney', slug: 'university-of-sydney', location: 'NSW', qs: '#19', ranking: 19,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmjPSO7wLYt7F91hOzL3adI1OJUm7XT1-vPlIlGsEiuDacRBi0TyUQEEJxpRCT6_pjBBy6DjDtk8c8ga3RDr4spczrEyixtd9GOGeMvD1TNUzw0JNQiW7MdTHYq7tX1DpLq3EXVjjzZO1siGMAGSKb7lntMuP5oFdfKV7_99u3GSK-p-wCG0_vJ3W1xtCWrj7IbF99pRv8mze-Anu7qBVrCb5KH1UpWWUiRlD1k2-CTb7_rePr9w1ObeyChbQiMhBiecP9VDtx83Y',
      tagline: 'Traditional Excellence • Global Network', website: 'https://www.sydney.edu.au',
      desc: "Australia's first university, established in 1850, known for its iconic heritage campus, world-class research, and commitment to challenging the status quo.",
      courses: [
        { icon: 'medical_services', title: 'Medicine & Health', description: 'Australia\'s most comprehensive health faculty with clinical placements across Sydney hospitals.', tag: 'Flagship', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'engineering', title: 'Engineering', description: 'Cutting-edge civil, mechanical, and aerospace engineering with industry capstone projects.' },
        { icon: 'psychology', title: 'Psychology', description: 'Accredited clinical and research psychology programs with world-class faculty.' },
        { icon: 'palette', title: 'Arts & Social Sciences', description: 'Interdisciplinary programs in humanities, languages, and social research.' }
      ],
      whyReasons: [
        { icon: 'history_edu', title: 'Heritage & Prestige', description: 'Founded in 1850, Australia\'s first university carries a legacy of academic excellence recognized worldwide.' },
        { icon: 'diversity_3', title: 'Diverse Community', description: 'Over 70,000 students from 170+ countries creating a vibrant multicultural campus experience.' },
        { icon: 'work', title: 'Career Outcomes', description: 'Graduates are among the most employable in Australia with extensive industry partnership programs.' },
        { icon: 'park', title: 'Stunning Campus', description: 'A heritage-listed campus blending Gothic architecture with modern facilities in the heart of Sydney.' }
      ],
      requirements: [
        { title: 'Academic Standards', description: 'Strong academic record with competitive ATAR or equivalent international qualification.' },
        { title: 'English Proficiency', description: 'IELTS 6.5-7.0 depending on course, or equivalent PTE/TOEFL scores.' },
        { title: 'Portfolio/Interview', description: 'Select courses in arts, architecture, and music may require additional submissions.' }
      ]
    },
    { name: 'Australian National University', slug: 'australian-national-university', location: 'ACT', qs: '#34', ranking: 34,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsOfmbxtLJcfinsdSn4BRm2IAn6V7clz5Ujlyi8n8Q4yBX46JMMLh9-lxEtdXhy5uV8HP-en5vOE03EXlkQNO_Au568GXFw26PKJpimMr6Gfeq3F3SOLWjXMuB4EadStGRTlQ-cGH-oyLkh6_VlPX6SvEUVssGIjtFHONTx0FO8Y7bZMbgecU-iMInl9-VpS4LDBNa_HQgWVg3FjLSQtsWlNeT2cIzsp_THCWtXWPRFsQXwhSxsh7ZlqK-AwKGHO5ESDQNDYxiHNA',
      tagline: 'National Prestige • Policy & Law', website: 'https://www.anu.edu.au',
      desc: "A world-leading center for research and education located in the heart of Australia's capital, with unmatched access to government and policy institutions.",
      courses: [
        { icon: 'account_balance', title: 'International Relations', description: 'Study diplomacy and global policy in the national capital with direct access to embassies and parliament.', tag: '#1 in Australia', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'science', title: 'Physics & Astronomy', description: 'Home to the Mt Stromlo Observatory and leading research in astrophysics and quantum science.' },
        { icon: 'gavel', title: 'Law', description: 'ANU College of Law shapes national legal policy and produces leaders in public and international law.' },
        { icon: 'data_object', title: 'Computing', description: 'Advanced computing and cybersecurity programs with government research partnerships.' }
      ],
      whyReasons: [
        { icon: 'account_balance', title: 'National Capital Advantage', description: 'Located in Canberra with unrivaled access to government, embassies, and national institutions for research and internships.' },
        { icon: 'science', title: 'Research Intensity', description: 'The highest research income per academic staff of any Australian university — a powerhouse of discovery.' },
        { icon: 'school', title: 'Small Class Sizes', description: 'Intimate learning environment with one of the best student-to-staff ratios in the country.' },
        { icon: 'military_tech', title: 'Nobel Laureates', description: 'Affiliated with 6 Nobel Prize winners across physics, medicine, and economics.' }
      ],
      requirements: [
        { title: 'Academic Record', description: 'High ATAR or equivalent with strong performance in prerequisite subjects.' },
        { title: 'English Proficiency', description: 'IELTS 6.5 overall (no band below 6.0) or equivalent.' },
        { title: 'Research Proposal', description: 'Postgraduate research applicants must submit a research proposal and secure a supervisor.' }
      ]
    },
    { name: 'La Trobe University', slug: 'la-trobe-university', location: 'Victoria', qs: '#242', ranking: 242,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKH8Ix09G3hgIiace3ANuIL7eurWmSS8A34WjNViRPoBzM-anHlh3BVz7mstrEibD602TSsJSqa9DyhWb_7P1Ci13wQVrb9vr4p5dmyLHs-f69BQBzodrtEosQ0vIbuxcAp9j5UkpcViLZG6YGTkTpysvS8a_YFAApCScd6rfCtc7PzGlBZ2Mbby8A9zPqNzZ-0UsmlcHNBl6_6-CwweRL5P2LeWJfo_2zdKZ_6deW6WW8O-d_NR9FokoF8TaMZN-_xq-vkNdxaT4',
      tagline: 'Health & Science Leader', website: 'https://www.latrobe.edu.au',
      desc: 'Combining accessibility and excellence with a proud history of shaping the future. Step into a world-class environment designed for global impact.',
      courses: [
        { icon: 'medical_services', title: 'Nursing', description: 'Clinical practice with high employability and hands-on training.', tag: 'Postgrad Available', tagStyle: 'bg-secondary-container text-on-secondary-container' },
        { icon: 'payments', title: 'Business', description: 'Global business strategy, management, and entrepreneurial leadership.', tag: 'Industry Accredited', tagStyle: 'bg-secondary-container text-on-secondary-container' },
        { icon: 'terminal', title: 'Information Technology', description: 'Software development, cloud systems, and data analytics.', tag: 'Fast Track Ready', tagStyle: 'bg-secondary-container text-on-secondary-container' },
        { icon: 'lock', title: 'Cybersecurity', description: 'Protecting digital infrastructure and mitigating global security threats.', tag: 'New Specialization', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'psychology', title: 'Psychology', description: 'Understanding human behavior and clinical health perspectives.' },
        { icon: 'gavel', title: 'Law', description: 'Social justice frameworks and corporate legal advocacy.' }
      ],
      whyReasons: [
        { icon: 'workspace_premium', title: 'Top 1% Worldwide', description: 'Consistently ranked among the top universities globally, we pride ourselves on research excellence and teaching quality that prepares you for international success.' },
        { icon: 'biotech', title: 'World-Class Facilities', description: 'Access state-of-the-art laboratories and digital innovation hubs designed to foster breakthroughs in science and technology.' },
        { icon: 'public', title: 'Global Exposure', description: 'Partnerships with over 200 universities across the globe for exchange programs, ensuring our graduates are truly global citizens.' },
        { icon: 'groups', title: 'Vibrant Student Life', description: 'Join a community of over 90 student-run clubs and societies ranging from performing arts to competitive university sports.' }
      ],
      requirements: [
        { title: 'Academic Excellence', description: 'Completion of Year 12 or equivalent with competitive GPA scores.' },
        { title: 'English Proficiency', description: 'IELTS 6.5 (min 6.0 in all bands) or equivalent TOEFL/PTE scores.' },
        { title: 'Course Specifics', description: 'Some courses may require portfolios, interviews, or relevant work experience.' }
      ]
    },
    { name: 'UNSW Sydney', slug: 'unsw-sydney', location: 'NSW', qs: '#19', ranking: 19,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJiLZY_YWbjJbyqHEliA3Z0z78R9p-_1HhYZNPc0PhZK_Go8sYBxVyh2vNRQuPgxWeAZS6p4GyTURGvNpwdoiw6EfWGG-882Oj2jeIHW8DW2XGoIge1wbi3QrweKfisJDGijA_R-X6b6ci4a_ZjwqjR-8zkPRA4NickIWxEKJuCKX_hBgPJfw0vwyvVAX32R0FlNMh2kJfWIoCXmzeaKtEnST0kuYUKSNzJcAmMBFFhIBoWN75QgLG-QZKnhVHizFFmySvJXSFW4',
      tagline: 'Innovation & Tech', website: 'https://www.unsw.edu.au',
      desc: 'A powerhouse of innovation and entrepreneurship, focusing on high-impact research and producing career-ready graduates who lead industries worldwide.',
      courses: [
        { icon: 'engineering', title: 'Engineering', description: 'Australia\'s largest engineering faculty with specializations in solar, biomedical, and software engineering.', tag: '#1 Engineering', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'terminal', title: 'Computer Science & AI', description: 'Cutting-edge programs in artificial intelligence, data science, and quantum computing.' },
        { icon: 'solar_power', title: 'Renewable Energy', description: 'Home to world-record-breaking solar cell research and clean energy innovation.' },
        { icon: 'business_center', title: 'Business School', description: 'AGSM ranked as Australia\'s #1 MBA program with global industry connections.' }
      ],
      whyReasons: [
        { icon: 'rocket_launch', title: 'Startup Culture', description: 'UNSW Founders program has launched 100+ startups. The campus is a launchpad for entrepreneurial minds.' },
        { icon: 'engineering', title: '#1 for Engineering', description: 'Australia\'s top-ranked engineering faculty with world-leading research in solar, quantum computing, and biomedical devices.' },
        { icon: 'business_center', title: 'Industry Partnerships', description: 'Direct partnerships with Google, Microsoft, Atlassian, and leading Australian firms for internships and research.' },
        { icon: 'beach_access', title: 'Beachside Campus', description: 'Located minutes from Coogee and Maroubra beaches — the perfect blend of academic rigour and coastal lifestyle.' }
      ],
      requirements: [
        { title: 'Academic Standards', description: 'Competitive ATAR or equivalent international qualifications with strong prerequisite scores.' },
        { title: 'English Proficiency', description: 'IELTS 6.5-7.0 overall depending on faculty, or equivalent TOEFL/PTE.' },
        { title: 'Portfolio', description: 'Design and architecture programs may require a portfolio submission.' }
      ]
    },
    { name: 'Monash University', slug: 'monash-university', location: 'Victoria', qs: '#42', ranking: 42,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnOscsQKUcY_4-ytUnQqn1SXPVnrG0jl7Ghv_vRPIvu0hNXOpq9b-wSgr_gLabMTQU3khZUum71VVQWmQPRrrMHJPgRke4AjEOC4A_u_TDC--orrl0epT_FTZYR85lBfuS1rEdArpgkbiaCjEMIV6nYgVCVEtjiblBKZrkeKcjhvM9yvtdOiLa_ubfbh62beeZlNMt4OEO8Pz1PoKnRyPUfuzcfQVGHvqSJNQyE4THb6Au3t5PgLdR4IrAqK-UvT_s2JePJ5cxSRo',
      tagline: 'Pioneering Research', website: 'https://www.monash.edu',
      desc: 'The largest university in Australia with a global presence across four continents, offering a truly international perspective and pioneering research facilities.',
      courses: [
        { icon: 'local_pharmacy', title: 'Pharmacy', description: 'Australia\'s #1 pharmacy school with integrated clinical placements across hospitals and community pharmacies.', tag: '#1 in Australia', tagStyle: 'bg-primary text-on-primary' },
        { icon: 'medical_services', title: 'Medicine & Nursing', description: 'Comprehensive health programs with access to Monash Health, one of Australia\'s largest hospital networks.' },
        { icon: 'terminal', title: 'Information Technology', description: 'Data science, cybersecurity, and software development with industry capstone projects.' },
        { icon: 'engineering', title: 'Engineering', description: 'Multidisciplinary engineering programs with state-of-the-art maker spaces and research labs.' }
      ],
      whyReasons: [
        { icon: 'public', title: 'Global Presence', description: 'Campuses in Australia, Malaysia, South Africa, and India — a truly global university with international mobility options.' },
        { icon: 'local_pharmacy', title: '#1 for Pharmacy', description: 'Monash\'s pharmacy program is ranked #1 in Australia and among the top 5 globally.' },
        { icon: 'science', title: 'Research Impact', description: 'Over $800M in annual research funding with breakthroughs in IVF, influenza treatment, and sustainable materials.' },
        { icon: 'groups', title: 'Massive Community', description: 'Over 86,000 students across all campuses creating one of the world\'s most diverse university communities.' }
      ],
      requirements: [
        { title: 'Academic Excellence', description: 'Competitive ATAR or equivalent with specific prerequisite subjects for your chosen course.' },
        { title: 'English Proficiency', description: 'IELTS 6.5 overall (no band below 6.0) or equivalent TOEFL/PTE.' },
        { title: 'Additional Requirements', description: 'Some health science courses require police checks, immunization records, and Working With Children checks.' }
      ]
    },
  ];

  for (const u of ausUniData) {
    const detail = buildDetail({ ...u, howToApply: defaultApplySteps });
    await prisma.university.create({
      data: { name: u.name, slug: u.slug, description: u.desc, location: u.location, image: u.img, ranking: u.ranking, qsRanking: u.qs, tagline: u.tagline, website: u.website, type: 'UNIVERSITY', countryId: australia.id, ...detail } as any
    });
  }
  console.log(`Created ${ausUniData.length} Australian universities with full detail`);

  // ── AUSTRALIA COLLEGES ─────────────────────────────────
  const ausColleges = [
    { name: 'Technical Institute of Victoria', slug: 'technical-institute-of-victoria', location: 'Melbourne', desc: 'Providing industry-relevant vocational training in engineering, construction, and sustainable technologies.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr_epQ0Vfc9VApb72ZHZLxNvghSVwAcPu3q7w_T8vcjZr5iwbiTcDqF_sz4lIGby7I56TWVAAIUIDiE7G8n7iAVfndj3AYFFzeNr6IqhwG-gJv-66FRD6kpBWCoSkQr5jc1BG2iyPWf_ScsaZ5w62rdzVASqzlwKepQhGtog2ZCe-NUdrYvD8Lw2I5kY76jS5ZVW8mC1sz0UMn8UVi4xXatEXC9kU_ZiOmr3NUMvmXGUuMtZIFxTV_rg4X6qc14s3Fwp-WT7mHtn0' },
    { name: 'Pacific College of Technology', slug: 'pacific-college-of-technology', location: 'Sydney', desc: 'A premier destination for information technology, business management, and digital innovation programs.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEyqB2GzQAyToU6cH2zN4fJ1A5NOlOmRP7bEmAw61TMIGe3a6dmlybyZNuYn8R87ecKPzYQDtBqNRPUhR1wl68bWxDGBgZTl91pEIEQdvdAicDGgaPQpbURTTQDQ64VqriS3bfewlY0zOeQIy0H6fhdvRoNhH_15C_C7C-yDb4B53TEUIhhtf-CT7oxXBuC2yX_QrIqZ1evLIyb2Axl5c6Vuz6hVqvFVOm9GsRDW-1ngyZBdHoVfnNXmDf6RLYC46bEJiCaWYyDlw' },
    { name: 'Academy of Culinary Arts', slug: 'academy-of-culinary-arts', location: 'Brisbane', desc: 'Excellence in hospitality and culinary arts, focusing on professional skill development and global placements.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgWbkQbYb9wV3Ugf2v5tMVLIF3dHdCUEuUtO08kveOagDbA179phtvEc9B7tNv63lJ1HzuF-7y73Tn_GsCw8W5hjur14PuMFBzq34JZGQ3SQQ6vau1IrhFmgNh0--oEx9_JF2byZp72HFZqzQvVxcxwz-PYrJzHlMMPMS0HsmEs2FT_P-MPUTfDJ_dslOE99TvEFb-K8H1HT4wHFPU1gxvsN3-s56Nd8AHN3F3OMaNQDnl0vvo8SCB7YzFY_y2bqRdWofJ7lLamp4' },
    { name: 'Health Careers Australia', slug: 'health-careers-australia', location: 'Adelaide', desc: 'Specialized vocational training for nursing, aged care, and community health services with clinical placements.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7gEnBeEwa68Gc14yE7N4LGOjjkJbi8Em4OfBO8iU6YyK9GrHMsvt_8DeI_mNEyUjTwG-zx68TGC9Ycdf4FF7uNTR1TTxIbcIxZN6GbUIbG5yd49HJ6ETAxTvII9ALV0d8dhBR0owaI8I-3CmKp5eXNaZiivRLiYez3VNi2vi_YX1ivJjP_aWcQEezn1gJz6baW7A1Xq5WrRFbgARmfnV2Zw5OqH3SnMo9dOGXuVxcX7x6vUDlwx-Y1QWMz-hYzKSdkkiSsSPjTWY' },
    { name: 'Creative Design College', slug: 'creative-design-college', location: 'Perth', desc: 'Nurturing creative talent through industry-led programs in graphic design, animation, and visual arts.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW1JAwD7Yn2veii_WFI1YLXWBbhPyJ1Ks53V7cISy22u4KseiMFgt4XdWDqGGhEge7c5GljYwXqTIq55EeN-ju2VpmDd9jArBVcLL07VzurRnIOjIZs4SHyrOJRj2EfGO_25sRQYqOGzemDrDrL6qkMhNfyQ1Xe7PdDW1TwR51TAZdTeNGUZgoQ0Ycn9N21pEEde--3J9EY_5mWuMMULJzBbHH_qvaIle8bUPBkihAhvHVSxd_igLVe6Z73X_7GItdwS9SRk0Cx80' },
    { name: 'Global Business Academy', slug: 'global-business-academy', location: 'Gold Coast', desc: 'Empowering future leaders with practical business management and leadership qualifications.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkH-EX6RT7dtGJUNFO_MopSyO6McD-4epN30KxdNYv5-ezk7c3ILKYp2xvLWcRFoI-RMcgSI4cvnHkoBG34PKKmfbGOAdSxodvPY88ZMCtdqSdgfk0dVfunHvWIW4-TSDLa5vNC50J5z4dRhKtvExee7DzcDvP6HvDIbWrI1XYMofd83XGrs2j-iQ25i6LjKGPexk6gwZjFQXnUvVKN7nLvtAa4UQfX8qYBReKf333AyxEC7L7ngADRlZjGpyCRwdISXTcBceYeGw' },
  ];
  for (const c of ausColleges) {
    const detail = buildDetail({
      ...c, website: 'https://example.com',
      courses: [
        { icon: 'school', title: 'Vocational Diploma', description: 'Industry-accredited diploma programs with practical training and work placements.' },
        { icon: 'work', title: 'Certificate Programs', description: 'Fast-track certificate courses designed for rapid career entry and skill development.' }
      ],
      whyReasons: [
        { icon: 'handshake', title: 'Industry Partnerships', description: 'Direct relationships with employers ensure job-ready skills and placement opportunities upon graduation.' },
        { icon: 'schedule', title: 'Flexible Study', description: 'Part-time, evening, and online options designed for working students and international learners.' }
      ],
      requirements: [
        { title: 'Academic Record', description: 'Completion of high school or equivalent. Mature-age entry available.' },
        { title: 'English Proficiency', description: 'IELTS 5.5+ or equivalent for international students.' }
      ],
      howToApply: ['Choose your program and check entry requirements.', 'Submit your application with supporting documents.', 'Receive your offer letter and confirm enrollment.', 'Apply for your student visa and arrange accommodation.']
    });
    await prisma.university.create({
      data: { name: c.name, slug: c.slug, description: c.desc, location: c.location, image: c.img, ranking: 999, website: 'https://example.com', type: 'COLLEGE', countryId: australia.id, ...detail } as any
    });
  }
  console.log(`Created ${ausColleges.length} Australian colleges with full detail`);

  // ── OTHER COUNTRY UNIVERSITIES ─────────────────────────
  const otherUnis = [
    { countryId: usa.id, unis: [
      { name: 'MIT', slug: 'mit', desc: 'The Massachusetts Institute of Technology is the world\'s #1 university for engineering and technology, driving innovation from quantum computing to clean energy.', qs: '#1', ranking: 1, tagline: '#1 Engineering', website: 'https://web.mit.edu', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'engineering', title: 'Engineering', description: 'World-leading programs in mechanical, electrical, and aerospace engineering.', tag: '#1 Global', tagStyle: 'bg-primary text-on-primary' }, { icon: 'terminal', title: 'Computer Science', description: 'Pioneering AI, robotics, and machine learning research with industry partnerships.' }, { icon: 'science', title: 'Physics', description: 'Breakthrough research in quantum mechanics, particle physics, and materials science.' }, { icon: 'biotech', title: 'Biological Engineering', description: 'Interdisciplinary programs merging biology with engineering for medical innovation.' }],
        whyReasons: [{ icon: 'workspace_premium', title: '#1 Worldwide', description: 'Consistently ranked the world\'s top university for STEM fields across all major rankings.' }, { icon: 'rocket_launch', title: 'Innovation Hub', description: 'Over 30,000 companies founded by MIT alumni, generating annual revenues of $1.9 trillion.' }, { icon: 'science', title: 'Nobel Laureates', description: '98 Nobel laureates affiliated with MIT across physics, chemistry, economics, and medicine.' }, { icon: 'paid', title: 'Need-Blind Admissions', description: 'MIT meets 100% of demonstrated financial need for all admitted students regardless of nationality.' }],
        requirements: [{ title: 'Academic Excellence', description: 'Exceptional grades in mathematics and sciences with SAT/ACT scores.' }, { title: 'Standardized Tests', description: 'SAT or ACT required. Subject tests recommended for STEM applicants.' }, { title: 'Extracurriculars', description: 'Evidence of leadership, research experience, or significant projects in your field.' }] },
      { name: 'Stanford University', slug: 'stanford-university', desc: 'Located in the heart of Silicon Valley, Stanford is a world leader in entrepreneurship, technology, and interdisciplinary research.', qs: '#2', ranking: 2, tagline: 'Silicon Valley Innovation', website: 'https://www.stanford.edu', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'terminal', title: 'Computer Science', description: 'The birthplace of Google, Yahoo, and countless tech startups. World-class AI and systems research.', tag: 'Top 3 Global', tagStyle: 'bg-primary text-on-primary' }, { icon: 'business_center', title: 'Business (GSB)', description: 'Stanford Graduate School of Business — among the most selective and prestigious MBA programs globally.' }, { icon: 'biotech', title: 'Bioengineering', description: 'Pioneering research at the intersection of biology, medicine, and engineering.' }],
        whyReasons: [{ icon: 'rocket_launch', title: 'Startup Ecosystem', description: 'Stanford alumni have founded companies worth $2.7 trillion including Google, Netflix, and LinkedIn.' }, { icon: 'wb_sunny', title: 'California Lifestyle', description: 'Stunning 8,180-acre campus with year-round sunshine in the heart of the San Francisco Bay Area.' }, { icon: 'diversity_3', title: 'Interdisciplinary Focus', description: 'Unique d.school and Bio-X programs encourage cross-faculty collaboration and creative problem-solving.' }],
        requirements: [{ title: 'Academic Record', description: 'Outstanding GPA with rigorous course load. No minimum SAT/ACT score.' }, { title: 'Essays & Recommendations', description: 'Compelling personal essays and 2-3 strong letters of recommendation.' }] },
      { name: 'Harvard University', slug: 'harvard-university', desc: 'The oldest institution of higher learning in the United States, Harvard is synonymous with academic prestige, producing world leaders across every field.', qs: '#4', ranking: 4, tagline: 'Academic Heritage', website: 'https://www.harvard.edu', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'gavel', title: 'Law', description: 'Harvard Law School is the most prestigious legal institution in the world, shaping policy and justice globally.', tag: '#1 Law School', tagStyle: 'bg-primary text-on-primary' }, { icon: 'medical_services', title: 'Medicine', description: 'Harvard Medical School is at the forefront of biomedical research and clinical innovation.' }, { icon: 'business_center', title: 'Business (HBS)', description: 'The case-method pioneer — Harvard Business School produces Fortune 500 CEOs and global leaders.' }],
        whyReasons: [{ icon: 'history_edu', title: 'Founded in 1636', description: 'Nearly 400 years of academic excellence. The oldest and most recognized university brand in the world.' }, { icon: 'military_tech', title: '161 Nobel Laureates', description: 'More Nobel Prize winners than any other university — a testament to unparalleled research impact.' }, { icon: 'account_balance', title: '$50B Endowment', description: 'The world\'s largest university endowment funds extensive financial aid, research, and facilities.' }],
        requirements: [{ title: 'Academic Excellence', description: 'Near-perfect GPA and standardized test scores. Acceptance rate under 4%.' }, { title: 'Holistic Review', description: 'Essays, interviews, recommendations, and extracurricular leadership are all critical factors.' }] },
    ]},
    { countryId: uk.id, unis: [
      { name: 'University of Oxford', slug: 'university-of-oxford', desc: 'The oldest university in the English-speaking world, Oxford combines centuries of tradition with cutting-edge research across every discipline.', qs: '#3', ranking: 3, tagline: 'World Leader', website: 'https://www.ox.ac.uk', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'science', title: 'Natural Sciences', description: 'World-leading research in physics, chemistry, and biology with the Clarendon Laboratory and Radcliffe Science Library.' }, { icon: 'menu_book', title: 'PPE', description: 'Philosophy, Politics, and Economics — the degree that shaped British prime ministers and global leaders.', tag: 'Signature', tagStyle: 'bg-primary text-on-primary' }, { icon: 'gavel', title: 'Law', description: 'One of the world\'s most respected law faculties producing leaders in international and human rights law.' }],
        whyReasons: [{ icon: 'history_edu', title: '900+ Years of History', description: 'Founded circa 1096, Oxford is the oldest university in the English-speaking world with an unbroken tradition of excellence.' }, { icon: 'school', title: 'Tutorial System', description: 'Unique one-on-one teaching through the college tutorial system — an Oxford hallmark for personalized learning.' }, { icon: 'military_tech', title: '72 Nobel Laureates', description: 'Oxford graduates include 72 Nobel Prize winners, 28 British Prime Ministers, and countless world leaders.' }],
        requirements: [{ title: 'Academic Excellence', description: 'A-levels at A*A*A or equivalent international qualifications.' }, { title: 'Admissions Test', description: 'Most courses require a subject-specific admissions test (e.g., MAT, TSA, LNAT).' }, { title: 'Interview', description: 'Shortlisted candidates are interviewed by college tutors — a unique and rigorous selection process.' }] },
      { name: 'Imperial College London', slug: 'imperial-college-london', desc: 'A world top-10 university focused exclusively on science, engineering, medicine, and business, located in the heart of London.', qs: '#6', ranking: 6, tagline: 'Science & Engineering focus', website: 'https://www.imperial.ac.uk', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'engineering', title: 'Engineering', description: 'World-class mechanical, civil, electrical, and aeronautical engineering programs.', tag: 'Top 10 Global', tagStyle: 'bg-primary text-on-primary' }, { icon: 'medical_services', title: 'Medicine', description: 'Integrated clinical and research training at one of London\'s leading teaching hospitals.' }, { icon: 'terminal', title: 'Computing', description: 'Cutting-edge AI, machine learning, and software engineering research.' }],
        whyReasons: [{ icon: 'science', title: 'STEM Focused', description: 'One of the only major universities worldwide dedicated exclusively to science, engineering, medicine, and business.' }, { icon: 'location_city', title: 'London Location', description: 'Based in South Kensington — surrounded by museums, culture, and London\'s thriving tech and finance sectors.' }, { icon: 'work', title: 'Graduate Outcomes', description: 'Imperial graduates earn among the highest starting salaries in the UK with 93% employment within 6 months.' }],
        requirements: [{ title: 'Academic Standards', description: 'A-levels at A*A*A to AAA or equivalent. Maths/science prerequisites for most courses.' }, { title: 'English Proficiency', description: 'IELTS 6.5-7.0 depending on faculty.' }] },
      { name: 'University of Manchester', slug: 'university-of-manchester', desc: 'A prestigious Russell Group university known for groundbreaking discoveries including graphene, and a proud Red Brick heritage.', qs: '#32', ranking: 32, tagline: 'Red Brick Prestige', website: 'https://www.manchester.ac.uk', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'science', title: 'Materials Science', description: 'Home to the National Graphene Institute — world leader in advanced materials research.', tag: 'Graphene Pioneer', tagStyle: 'bg-primary text-on-primary' }, { icon: 'business_center', title: 'Business & Management', description: 'Alliance Manchester Business School — triple-accredited and ranked among Europe\'s best.' }, { icon: 'terminal', title: 'Computer Science', description: 'Where modern computing was born — Alan Turing\'s legacy lives on in cutting-edge AI research.' }],
        whyReasons: [{ icon: 'science', title: 'Graphene Discovery', description: 'The birthplace of graphene — a Nobel Prize-winning discovery that is revolutionizing materials science and technology.' }, { icon: 'history_edu', title: '25 Nobel Laureates', description: 'A rich history of world-changing discoveries from nuclear physics to modern computing.' }, { icon: 'groups', title: 'Largest UK Campus', description: 'The UK\'s largest single-site university with over 45,000 students from 160+ countries.' }],
        requirements: [{ title: 'Academic Standards', description: 'A-levels at AAA-ABB or equivalent international qualifications.' }, { title: 'English Proficiency', description: 'IELTS 6.0-7.0 depending on course requirements.' }] },
    ]},
    { countryId: canada.id, unis: [
      { name: 'University of Toronto', slug: 'university-of-toronto', desc: 'Canada\'s #1 university and a global top-25 institution, leading in research across AI, medicine, engineering, and the humanities.', qs: '#21', ranking: 21, tagline: '#1 in Canada', website: 'https://www.utoronto.ca', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'terminal', title: 'Computer Science', description: 'Home to the Vector Institute — Canada\'s AI research powerhouse producing global leaders in machine learning.', tag: 'AI Hub', tagStyle: 'bg-primary text-on-primary' }, { icon: 'medical_services', title: 'Medicine', description: 'Canada\'s largest and most research-intensive medical school with 10 fully affiliated hospitals.' }, { icon: 'engineering', title: 'Engineering', description: 'Comprehensive engineering programs in a city that serves as Canada\'s tech and innovation capital.' }],
        whyReasons: [{ icon: 'workspace_premium', title: '#1 in Canada', description: 'Consistently ranked #1 in Canada and top-25 globally across QS, THE, and ARWU rankings.' }, { icon: 'terminal', title: 'AI Capital', description: 'Toronto is the global epicenter of AI research — home to Geoffrey Hinton and the Vector Institute.' }, { icon: 'location_city', title: 'Toronto Advantage', description: 'Study in Canada\'s largest and most diverse city — a global hub for tech, finance, and culture.' }],
        requirements: [{ title: 'Academic Excellence', description: 'Top 10% of graduating class with strong performance in prerequisite subjects.' }, { title: 'English Proficiency', description: 'IELTS 6.5 overall (no band below 6.0) or equivalent TOEFL.' }] },
      { name: 'UBC', slug: 'ubc', desc: 'The University of British Columbia is a global research powerhouse on Canada\'s stunning Pacific coast, ranked among the world\'s top 40 universities.', qs: '#34', ranking: 34, tagline: 'West Coast Excellence', website: 'https://www.ubc.ca', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'forest', title: 'Environmental Science', description: 'World-class programs in sustainability, forestry, and climate science on a campus surrounded by natural beauty.' }, { icon: 'terminal', title: 'Computer Science', description: 'Top-tier CS programs with connections to Vancouver\'s booming tech industry.' }, { icon: 'business_center', title: 'Sauder School of Business', description: 'Internationally recognized business programs with co-op and exchange opportunities.' }],
        whyReasons: [{ icon: 'landscape', title: 'Stunning Location', description: 'A breathtaking campus between mountains and ocean — consistently rated one of the world\'s most beautiful universities.' }, { icon: 'eco', title: 'Sustainability Leader', description: 'UBC is a global leader in sustainability research and campus operations with net-zero commitments.' }, { icon: 'diversity_3', title: 'Diverse Community', description: 'Over 17,000 international students from 166 countries creating a vibrant global campus.' }],
        requirements: [{ title: 'Academic Record', description: 'Strong academic standing with competitive grades in prerequisite courses.' }, { title: 'English Proficiency', description: 'IELTS 6.5 overall (no band below 6.0) or TOEFL 90+.' }] },
      { name: 'McGill University', slug: 'mcgill-university', desc: 'One of Canada\'s most prestigious research universities, located in vibrant Montreal, known for excellence in medicine, law, and the sciences.', qs: '#30', ranking: 30, tagline: 'Prestigious Research', website: 'https://www.mcgill.ca', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'medical_services', title: 'Medicine', description: 'McGill\'s Faculty of Medicine has produced 5 Nobel laureates and leads in clinical and neuroscience research.', tag: 'Nobel Legacy', tagStyle: 'bg-primary text-on-primary' }, { icon: 'gavel', title: 'Law', description: 'Unique bijural program teaching both civil law and common law traditions.' }, { icon: 'music_note', title: 'Schulich School of Music', description: 'One of North America\'s premier music schools with world-class performance and research facilities.' }],
        whyReasons: [{ icon: 'military_tech', title: '12 Nobel Laureates', description: 'The most Nobel Prize winners of any Canadian university, with groundbreaking work in medicine and physics.' }, { icon: 'translate', title: 'Bilingual City', description: 'Study in Montreal — a bilingual, multicultural city with the lowest tuition and living costs among Canada\'s top universities.' }, { icon: 'history_edu', title: 'Founded 1821', description: 'Over 200 years of academic excellence with a global reputation rivaling the Ivy League.' }],
        requirements: [{ title: 'Academic Standards', description: 'Top academic standing with strong prerequisite courses. Competitive admission averages of 90%+.' }, { title: 'English/French', description: 'IELTS 6.5+ for English programs. French proficiency not required but advantageous for Montreal life.' }] },
    ]},
    { countryId: germany.id, unis: [
      { name: 'TU Munich', slug: 'tu-munich', desc: 'Germany\'s #1 technical university and a European leader in engineering, technology, and natural sciences with strong industry ties to BMW, Siemens, and SAP.', qs: '#37', ranking: 37, tagline: 'Elite Engineering', website: 'https://www.tum.de', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'engineering', title: 'Mechanical Engineering', description: 'Germany\'s top-ranked engineering program with direct industry partnerships with BMW, Siemens, and Bosch.', tag: '#1 in Germany', tagStyle: 'bg-primary text-on-primary' }, { icon: 'terminal', title: 'Informatics', description: 'Leading computer science faculty with strong AI, robotics, and cybersecurity research groups.' }, { icon: 'architecture', title: 'Architecture', description: 'Innovative design programs blending German precision engineering with creative architectural vision.' }],
        whyReasons: [{ icon: 'workspace_premium', title: '#1 in Germany', description: 'Consistently ranked as Germany\'s best technical university and among Europe\'s top 10 overall.' }, { icon: 'euro_symbol', title: 'No Tuition Fees', description: 'As a public Bavarian university, TUM charges no tuition — only a €150/semester student union fee.' }, { icon: 'factory', title: 'Industry Gateway', description: 'Munich is home to BMW, Siemens, Allianz, and 300+ tech startups — unmatched career opportunities for graduates.' }],
        requirements: [{ title: 'Academic Record', description: 'Strong school-leaving certificate equivalent to German Abitur. APS certificate for some nationalities.' }, { title: 'Language Requirements', description: 'German B2/C1 for German-taught programs. IELTS 6.5+ for English-taught masters.' }] },
      { name: 'Heidelberg University', slug: 'heidelberg-university', desc: 'Germany\'s oldest university, founded in 1386, Heidelberg is a research powerhouse in natural sciences, medicine, and the humanities.', qs: '#47', ranking: 47, tagline: 'Oldest in Germany', website: 'https://www.uni-heidelberg.de', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'science', title: 'Physics', description: 'Home to multiple Max Planck Institutes and a legacy of Nobel Prize-winning physics research.' }, { icon: 'medical_services', title: 'Medicine', description: 'Heidelberg University Hospital is one of Europe\'s leading medical centers with cutting-edge research.' }, { icon: 'psychology', title: 'Psychology', description: 'Germany\'s top-ranked psychology program with strong clinical and research tracks.' }],
        whyReasons: [{ icon: 'history_edu', title: 'Founded 1386', description: 'The oldest university in Germany with over 600 years of unbroken academic tradition and intellectual excellence.' }, { icon: 'science', title: 'Research Excellence', description: 'An Excellence University with 56 Nobel laureates — one of Europe\'s most research-intensive institutions.' }, { icon: 'castle', title: 'Historic City', description: 'Study in one of Germany\'s most beautiful and romantic cities, nestled along the Neckar River.' }],
        requirements: [{ title: 'Academic Record', description: 'German Abitur equivalent with strong grades. International students may need a Studienkolleg year.' }, { title: 'Language', description: 'DSH-2 or TestDaF 4x4 for German programs. IELTS 6.5+ for English-taught programs.' }] },
      { name: 'Humboldt University', slug: 'humboldt-university', desc: 'Located in the heart of Berlin, Humboldt University pioneered the modern research university concept and continues to shape global academia.', qs: '#120', ranking: 120, tagline: 'Berlin Innovation', website: 'https://www.hu-berlin.de', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
        courses: [{ icon: 'menu_book', title: 'Arts & Humanities', description: 'One of Europe\'s most prestigious humanities faculties with programs in philosophy, history, and cultural studies.' }, { icon: 'science', title: 'Natural Sciences', description: 'Physics department where Einstein and Planck once taught — continuing a legacy of scientific excellence.' }, { icon: 'account_balance', title: 'Social Sciences', description: 'Leading programs in political science, sociology, and economics shaped by Berlin\'s unique history.' }],
        whyReasons: [{ icon: 'lightbulb', title: 'Birthplace of Modern University', description: 'Founded by Wilhelm von Humboldt in 1810, HU created the model of the research university adopted worldwide.' }, { icon: 'military_tech', title: '29 Nobel Laureates', description: 'Including Albert Einstein and Max Planck — a legacy of transformative scientific discoveries.' }, { icon: 'location_city', title: 'Berlin Lifestyle', description: 'Study in Europe\'s most dynamic and affordable capital — a global hub for tech, arts, and culture.' }],
        requirements: [{ title: 'Academic Record', description: 'German Abitur equivalent. Uni-Assist application required for international students.' }, { title: 'Language', description: 'DSH-2 for German programs. English-taught masters require IELTS 6.5+ or equivalent.' }] },
    ]},
  ];

  for (const group of otherUnis) {
    for (const u of group.unis) {
      const detail = buildDetail({ ...u, howToApply: defaultApplySteps });
      await prisma.university.create({
        data: { name: u.name, slug: u.slug, description: u.desc, location: 'National', image: u.img, ranking: u.ranking, qsRanking: u.qs, tagline: u.tagline, website: u.website, type: 'UNIVERSITY', countryId: group.countryId, ...detail } as any
      });
    }
  }
  console.log('Created universities for USA, UK, Canada, Germany with full detail');

  // ═══════════════════════════════════════════════════════
  //  ALUMNI
  // ═══════════════════════════════════════════════════════
  const alumniList = [
    { name: 'Anjali S.', university: 'University of Sydney, Australia', degree: 'Masters in Biotech', country: 'australia', quote: 'Global Scholar gave me the confidence and roadmap to pursue my dream degree. The support was exceptional at every step.', image: '/assets/alumni/anjali-s.jpg' },
    { name: 'Sandeep K.', university: 'University of Toronto, Canada', degree: 'MBA Finance', country: 'canada', quote: 'From visa application to settling in Toronto — the team handled everything. I could focus entirely on my studies.', image: '/assets/alumni/sandeep-k.jpg' },
    { name: 'Ritika P.', university: 'Monash University, Australia', degree: 'Nursing', country: 'australia', quote: 'They matched me with the perfect nursing program. Within a year I already had clinical placement offers across Melbourne.', image: '/assets/alumni/ritika-p.jpg' },
    { name: 'Deepak B.', university: 'Technical University of Munich, Germany', degree: 'MEng Automotive', country: 'germany', quote: "Studying at TU Munich felt impossible until Global Scholar walked me through every requirement. Now I'm living my dream.", image: '/assets/alumni/deepak-b.jpg' },
    { name: 'Aaryav M.', university: 'University of Oxford, UK', degree: 'Global Policy', country: 'uk', quote: "The Global Scholar didn't just help with my visa; they helped me find a community. Oxford has been truly transformative.", image: '/assets/alumni/aaryav-m.jpg' },
    { name: 'Priya R.', university: 'MIT, USA', degree: 'AI Research', country: 'usa', quote: "From the first consultation to landing in Boston, the support was seamless. I'm now pursuing my dream in AI research.", image: '/assets/alumni/priya-r.jpg' },
  ];
  for (const a of alumniList) {
    await prisma.alumni.create({ data: a as any });
  }
  console.log(`Created ${alumniList.length} alumni`);

  // ═══════════════════════════════════════════════════════
  const counts = { countries: await prisma.country.count(), universities: await prisma.university.count(), alumni: await prisma.alumni.count() };
  console.log('\nSeed complete!');
  console.log(`  Countries:      ${counts.countries}`);
  console.log(`  Universities:   ${counts.universities}`);
  console.log(`  Alumni:         ${counts.alumni}`);
  await disconnectDatabase();
}

seed().catch((e) => { console.error('Seed failed:', e); process.exit(1); });
