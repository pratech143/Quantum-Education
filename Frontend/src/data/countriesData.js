import usaImg from '../assets/destinations/usa.jpg';
import ukImg from '../assets/destinations/uk.jpg';
import ausImg from '../assets/destinations/australia.jpg';
import canImg from '../assets/destinations/canada.jpg';
import gerImg from '../assets/destinations/germany.jpg';
import jpnImg from '../assets/destinations/japan.jpg';

export const countriesData = {
  australia: {
    hero: {
      title: "Study in Australia",
      tagline: "World-class education in the Land Down Under",
      image: ausImg,
      stats: [
        { label: "Universities", value: "43" },
        { label: "Avg Tuition", value: "$20k-$45k" },
        { label: "Visa Success", value: "95%" }
      ]
    },
    overview: {
      title: "Educational Excellence & Lifestyle",
      description: "Australia is more than just a beautiful continent; it's a global hub for academic brilliance. Ranked 3rd in the world for international students, it offers an unparalleled lifestyle balanced with rigorous innovation in STEM, Medicine, and Arts.",
      highlights: [
        { icon: "language", title: "English Medium", text: "Globally recognized curriculum and language environment." },
        { icon: "payments", title: "AUD $21k/yr", text: "Estimated average cost of living for a comfortable student life." },
        { icon: "work", title: "Post-Study Rights", text: "2 to 4 years of work permits after completing your degree." }
      ]
    },
    universities: [
      { name: "University of Melbourne", location: "Melbourne, VIC", image: ausImg, icon: "school", slug: "university-of-melbourne" },
      { name: "Australian National Univ.", location: "Canberra, ACT", image: ausImg, icon: "account_balance", slug: "australian-national-university" },
      { name: "University of Sydney", location: "Sydney, NSW", image: ausImg, icon: "architecture", slug: "university-of-sydney" }
    ],
    financials: {
      costs: [
        { level: "Undergraduate", price: "$20k - $35k AUD" },
        { level: "Postgraduate", price: "$25k - $45k AUD" },
        { level: "Living Expenses", price: "$21,041 AUD/yr" }
      ],
      scholarships: [
        "Australia Awards (Government Funded)",
        "Destination Australia Program",
        "University Merit-Based (Up to 50%)"
      ]
    },
    admission: {
      checklist: [
        "Valid Passport",
        "Academic Transcripts",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation"
      ],
      language: {
        ielts: "6.0 - 7.0",
        toefl: "60 - 90"
      }
    },
    visa: {
      title: "Student Visa (Subclass 500)",
      description: "Required for all international students. Valid for the duration of your course plus up to two months.",
      workRights: [
        { icon: "timer", title: "Part-Time Work", text: "48 hours per fortnight during sessions." },
        { icon: "flight_takeoff", title: "Holiday Work", text: "Unlimited hours during scheduled breaks." }
      ]
    },
    studentLife: [
      { icon: "shield_with_heart", label: "Safety First" },
      { icon: "festival", label: "Rich Culture" },
      { icon: "train", label: "Easy Transport" },
      { icon: "apartment", label: "Housing Options" }
    ],
    faqs: [
      { q: "When is the intake?", a: "Main intakes are in February and July. However, some universities offer rolling intakes in October/November." },
      { q: "Can I work while studying?", a: "Yes, student visa holders can work up to 48 hours per fortnight while classes are in session and unlimited hours during holidays." }
    ]
  },
  canada: {
    hero: {
      title: "Study in Canada",
      tagline: "Your Pathway to Innovation and Permanent Residency",
      image: canImg,
      stats: [
        { label: "Universities", value: "90+" },
        { label: "Avg Tuition", value: "$15k-$35k CAD" },
        { label: "Visa Success", value: "88%" }
      ]
    },
    overview: {
      title: "A Welcoming Nation of Opportunity",
      description: "Canada consistently ranks as one of the best countries in the world for quality of life and high-standard education. Its post-graduation work permit (PGWP) program is among the most generous globally.",
      highlights: [
        { icon: "public", title: "Multiculturalism", text: "A diverse, inclusive society that welcomes international talent." },
        { icon: "verified_user", title: "Safe & Stable", text: "Regularly voted as one of the safest nations for students." },
        { icon: "trending_up", title: "PR Pathways", text: "Clear immigration pathways for high-skilled graduates." }
      ]
    },
    universities: [
      { name: "University of Toronto", location: "Toronto, ON", image: canImg, icon: "school" },
      { name: "UBC", location: "Vancouver, BC", image: canImg, icon: "account_balance" },
      { name: "McGill University", location: "Montreal, QC", image: canImg, icon: "architecture" }
    ],
    financials: {
      costs: [
        { level: "Undergraduate", price: "$15k - $30k CAD" },
        { level: "Postgraduate", price: "$18k - $35k CAD" },
        { level: "Living Expenses", price: "$15,000 CAD/yr" }
      ],
      scholarships: [
        "Vanier Graduate Scholarships",
        "Lester B. Pearson International",
        "University Entrance Awards"
      ]
    },
    admission: {
      checklist: [
        "LOA (Letter of Acceptance)",
        "Proof of Funds (GIC)",
        "CAQ (for Quebec universities)",
        "Biometrics & Medical Exam"
      ],
      language: {
        ielts: "6.5+ (SDS)",
        toefl: "80 - 100"
      }
    },
    visa: {
      title: "Study Permit",
      description: "The primary document allowing you to study. Must be paired with a TRV or eTA for entry.",
      workRights: [
        { icon: "work_outline", title: "PGWP Rights", text: "Up to 3 years work permit after graduation." },
        { icon: "group", title: "Spousal Open Work", text: "Spouses may be eligible to work full-time." }
      ]
    },
    studentLife: [
      { icon: "ac_unit", label: "Winter Sports" },
      { icon: "landscape", label: "Nature Beauty" },
      { icon: "city_guide", label: "Urban Centers" },
      { icon: "support", label: "Student Support" }
    ],
    faqs: [
      { q: "What is SDS?", a: "Student Direct Stream (SDS) is an expedited study permit process for residents of certain countries including Nepal." },
      { q: "What is PGWP?", a: "The Post-Graduation Work Permit allows you to stay and work in Canada after completing your studies." }
    ]
  },
  unitedkingdom: {
    hero: {
      title: "Study in the UK",
      tagline: "Academic Heritage and Innovation in the Heart of Europe",
      image: ukImg,
      stats: [
        { label: "Institutions", value: "160+" },
        { label: "Avg Tuition", value: "£12k-£25k" },
        { label: "Graduate Visa", value: "2 Years" }
      ]
    },
    overview: {
      title: "A Global Leader in Research & Excellence",
      description: "The UK offers a world-renowned education system with a rich history of academic prestige. With shorter course durations and the re-introduced Graduate Route visa, it's a top choice for efficiency and career growth.",
      highlights: [
        { icon: "school", title: "Fast-Track", text: "3-year Bachelors and 1-year Masters programs." },
        { icon: "history_edu", title: "Global Prestige", text: "Home to 4 of the world's top 10 universities." },
        { icon: "euro", title: "NHS Access", text: "Access to the National Health Service as a student." }
      ]
    },
    universities: [
      { name: "University of Oxford", location: "Oxford, UK", image: ukImg, icon: "school" },
      { name: "Imperial College London", location: "London, UK", image: ukImg, icon: "account_balance" },
      { name: "University of Manchester", location: "Manchester, UK", image: ukImg, icon: "architecture" }
    ],
    financials: {
      costs: [
        { level: "Undergraduate", price: "£12,000 - £20,000" },
        { level: "Postgraduate", price: "£14,000 - £25,000" },
        { level: "Living cost", price: "£12,000 /yr" }
      ],
      scholarships: [
        "Chevening Scholarships",
        "Commonwealth Scholarships",
        "GREAT Scholarships"
      ]
    },
    admission: {
      checklist: [
        "UCAS Application",
        "Academic References",
        "Personal Statement",
        "CAS Letter"
      ],
      language: {
        ielts: "6.5 (min 6.0 in all)",
        toefl: "90 - 110"
      }
    },
    visa: {
      title: "Student Visa (formerly Tier 4)",
      description: "Points-based system for international students. Requires financial evidence and CAS.",
      workRights: [
        { icon: "timer", title: "During Term", text: "Up to 20 hours per week." },
        { icon: "school", title: "Graduate Route", text: "2 years stay back (3 for PhD)." }
      ]
    },
    studentLife: [
      { icon: "coffee", label: "Cafe Culture" },
      { icon: "museum", label: "History & Art" },
      { icon: "train", label: "Europe Travel" },
      { icon: "sports_soccer", label: "Premier League" }
    ],
    faqs: [
      { q: "What is CAS?", a: "Confirmation of Acceptance for Studies is a unique reference number issued by your sponsor university." },
      { q: "How long can I stay after study?", a: "Most graduates can stay for 2 years under the Graduate Route." }
    ]
  },
  unitedstates: {
    hero: {
      title: "Study in the USA",
      tagline: "The Land of Opportunity and Cutting-Edge Innovation",
      image: usaImg,
      stats: [
        { label: "Colleges", value: "4,000+" },
        { label: "Avg Tuition", value: "$25k-$55k" },
        { label: "STEM OPT", value: "3 Years" }
      ]
    },
    overview: {
      title: "A Hub for Innovation and Diversity",
      description: "The United States is the premier destination for international students, offering unmatched flexibility in academic programs and access to some of the world's leading technology and research facilities.",
      highlights: [
        { icon: "rocket_launch", title: "STEM Focus", text: "World leader in technical and scientific research." },
        { icon: "diversity_3", title: "Campus Culture", text: "Vibrant and diverse student life with global networking." },
        { icon: "work_history", title: "OPT Opportunities", text: "Up to 3 years of work experience for STEM grads." }
      ]
    },
    universities: [
      { name: "MIT", location: "Cambridge, MA", image: usaImg, icon: "school" },
      { name: "Stanford University", location: "Stanford, CA", image: usaImg, icon: "account_balance" },
      { name: "Harvard University", location: "Cambridge, MA", image: usaImg, icon: "architecture" }
    ],
    financials: {
      costs: [
        { level: "Public Univ.", price: "$25,000 - $40,000" },
        { level: "Private Univ.", price: "$40,000 - $60,000" },
        { level: "Living cost", price: "$15,000 /yr" }
      ],
      scholarships: [
        "Fulbright Foreign Student Program",
        "Hubert Humphrey Fellowship",
        "University Merit Aid"
      ]
    },
    admission: {
      checklist: [
        "SAT/ACT (Undergraduate)",
        "GRE/GMAT (Graduate)",
        "Financial Support Form",
        "I-20 Form"
      ],
      language: {
        ielts: "6.5 - 7.5",
        toefl: "80 - 110"
      }
    },
    visa: {
      title: "F-1 Student Visa",
      description: "Non-immigrant visa for full-time students. Requires 1-20 from a SEVP-certified school.",
      workRights: [
        { icon: "work", title: "CPT", text: "Curricular Practical Training during study." },
        { icon: "trending_up", title: "OPT", text: "1-3 years Optional Practical Training." }
      ]
    },
    studentLife: [
      { icon: "sports_basketball", label: "College Sports" },
      { icon: "fastfood", label: "Global Cuisine" },
      { icon: "groups", label: "Student Orgs" },
      { icon: "diversity_1", label: "Networking" }
    ],
    faqs: [
      { q: "What is an I-20?", a: "General document issued by the university certifying your enrollment and financial ability." },
      { q: "Difference between CPT and OPT?", a: "CPT is for internships during your course; OPT is for work after graduation." }
    ]
  },
  germany: {
    hero: {
      title: "Study in Germany",
      tagline: "High-Quality Education with Low-to-No Tuition",
      image: gerImg,
      stats: [
        { label: "Universities", value: "380+" },
        { label: "Avg Tuition", value: "€0 - €1.5k" },
        { label: "Stay-back", value: "18 Months" }
      ]
    },
    overview: {
      title: "The Land of Ideas and Engineering",
      description: "Germany is the most popular non-English speaking destination for international students. It offers world-class degrees, especially in engineering and technology, often with zero tuition fees at public universities.",
      highlights: [
        { icon: "euro_symbol", title: "Free Education", text: "No tuition fees at public universities for most programs." },
        { icon: "precision_manufacturing", title: "Tech Leader", text: "Global powerhouse for innovation and manufacturing." },
        { icon: "directions_railway", title: "Central Europe", text: "Perfect base for exploring the entire European Union." }
      ]
    },
    universities: [
      { name: "Technical University of Munich", location: "Munich, DE", image: gerImg, icon: "school" },
      { name: "Heidelberg University", location: "Heidelberg, DE", image: gerImg, icon: "account_balance" },
      { name: "Humboldt University", location: "Berlin, DE", image: gerImg, icon: "architecture" }
    ],
    financials: {
      costs: [
        { level: "Public Univ.", price: "€0 (Semester Fee €300)" },
        { level: "Private Univ.", price: "€10,000 - €20,000" },
        { level: "Living cost", price: "€11,208 (Blocked Account)" }
      ],
      scholarships: [
        "DAAD Scholarships",
        "Erasmus+ Program",
        "Heinrich Böll Scholarships"
      ]
    },
    admission: {
      checklist: [
        "Hochschulzugangsberechtigung (HZB)",
        "Proof of Blocked Account",
        "Health Insurance",
        "Letter of Admission"
      ],
      language: {
        ielts: "6.0 - 7.0 (English programs)",
        toefl: "80 - 100"
      }
    },
    visa: {
      title: "National Visa for Studies",
      description: "Standard student visa for long-term study. Requires proof of financial resources (€11,208/yr).",
      workRights: [
        { icon: "calendar_today", title: "Work Allowance", text: "140 full days or 280 half days per year." },
        { icon: "home_work", title: "Job Search Visa", text: "18 months stay-back to find a job." }
      ]
    },
    studentLife: [
      { icon: "sports_soccer", label: "Bundesliga" },
      { icon: "restaurant", label: "Beer Gardens" },
      { icon: "bike_scooter", label: "Eco-Friendly" },
      { icon: "music_note", label: "Techno Scenes" }
    ],
    faqs: [
      { q: "Do I need to know German?", a: "Many Masters are in English, but basic German is highly recommended for daily life." },
      { q: "What is a Blocked Account?", a: "A special account (Sperrkonto) containing proof of your living funds for one year." }
    ]
  },
  japan: {
    hero: {
      title: "Study in Japan",
      tagline: "Where Tradition Meets Tomorrow",
      image: jpnImg,
      stats: [
        { label: "Universities", value: "700+" },
        { label: "MEXT", value: "Fully Funded" },
        { label: "Safety", value: "Top 5 Global" }
      ]
    },
    overview: {
      title: "Innovation, Culture, and Safety",
      description: "Japan offers a unique blend of ancient traditions and futuristic technology. With top-tier research facilities and a focus on Asian regional cooperation, it's an increasingly popular choice for ambitious students.",
      highlights: [
        { icon: "emoji_objects", title: "Innovation", text: "Leader in robotics, electronics, and automotive tech." },
        { icon: "shield", title: "Extreme Safety", text: "One of the most peaceful and low-crime nations." },
        { icon: "savings", title: "Scholarships", text: "Generous government (MEXT) and private funding." }
      ]
    },
    universities: [
      { name: "University of Tokyo", location: "Tokyo, JP", image: jpnImg, icon: "school" },
      { name: "Kyoto University", location: "Kyoto, JP", image: jpnImg, icon: "account_balance" },
      { name: "Osaka University", location: "Osaka, JP", image: jpnImg, icon: "architecture" }
    ],
    financials: {
      costs: [
        { level: "National Univ.", price: "¥820,000/yr" },
        { level: "Private Univ.", price: "¥1,200,000 - ¥2,000,000" },
        { level: "Living cost", price: "¥1,500,000 /yr" }
      ],
      scholarships: [
        "MEXT Scholarship (Full Ride)",
        "JASSO Honors Scholarship",
        "Local Gov. Awards"
      ]
    },
    admission: {
      checklist: [
        "EJU Exam (often required)",
        "Academic Records",
        "Financial Certification",
        "COE (Certificate of Eligibility)"
      ],
      language: {
        ielts: "6.0 (English programs)",
        jlpt: "N2 or N1 (Japanese programs)"
      }
    },
    visa: {
      title: "Student Visa",
      description: "Requires a COE issued by the immigration bureau. Allows for stay for the duration of study.",
      workRights: [
        { icon: "schedule", title: "Part-time", text: "28 hours per week with special permit." },
        { icon: "work_history", title: "Work Transition", text: "Easy conversion to work visa after job hunt." }
      ]
    },
    studentLife: [
      { icon: "train", label: "Shinkansen" },
      { icon: "ramen_dining", label: "Authentic Food" },
      { icon: "temple_noto", label: "Temples & Shrines" },
      { icon: "animation", label: "Pop Culture" }
    ],
    faqs: [
      { q: "What is EJU?", a: "Examination for Japanese University Admission used to evaluate academic ability and language skills." },
      { q: "Can I stay after graduation?", a: "Yes, you can stay for up to 12 months for job hunting with the correct visa." }
    ]
  }
};
