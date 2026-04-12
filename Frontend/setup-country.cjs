const fs = require('fs');
const https = require('https');
const path = require('path');

const imgUrls = {
  "australia-hero.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuB-D5xKSj7ItITSRMnkIsIyjK5TmGHXDp0_bXiuxb5rIiqbFmwtrOuAHNQPAif2fL159MGd0i2M86T9KWyelLAADtZe_okeDDcVg43MXXpD1aXuTDNCXvmbN_qzPoCnamFzVurpOjItzIUshfYguBK1n1EFiAKpF5FjwnOh0uc6b-E-BO5D5ZjkM5LB9pHGAIrFvJ7mRoACRciDjEKTda7I94ijiCGNgXwsKiXq4rMx9LM-3OExZpOGNmwl8-YJBBuLQEk1bw2jLSw",
  "university-melbourne.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeV1H3I49Np-7354hZnorH4PZKllIgLjeqVs3JXI2A1b3HSZAQuxewjCbbgiue6N4ZnwZzabqCzAsUN34dXOIfgUEjiYqFH0P4gtbL3d0VZSMNGcAPaFNEZ85lwGwCxLlDfaqIKX9b8qbdnMxaWyhWzi2C-3wblefthyY7W6IQq6h3alP_SMOv97xaPCKk8zgtRTdX9bGYeYvhP-7MvTPHXeswuvdrLvK6TprXyIhAhWNH_nTacEUEXVNY1pHCoUwvSSQC77hvJ8",
  "university-sydney.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuDhPFuwQ5Al1JLgIvXEcwx4e6c1vig5lhlbkhl1kBwzxwPp6H7yRyZILre-CTtGtkVBHxhX1W1vxIDeaKuX6rQzuMVEcMk0xwVjAkRXadz7QQfw49ziR8PEeK9D-8TFtZpjFpgLOG3Qdib_klo6Hgw_c-nFdPdfQ_F4sfdZTTssWBLEBSs2TuO-GE1P7b3HMZT2UENlfmJdHLDiJocqkLYNHVNgSn8Imq05fkbJBAmQjd75JWlt73JqkocT8E-QAD9L9Lse_thyd-Y",
  "university-anu.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAtPwEi0MAVFnH2KFyAhTa_F6zAbdY7IE4poAWxM6t5JOnBqGpGyXq1myQmhf8UZN-WclMybkEzHv1qpN_zCEGsaOuCB8_gqrV0SxqKoHAYFGVelrkJJeq8B21c-NrmCum1ldbKdNK3MXCyHk6VQfd8qs3IOFC-_Vfb2HST6SkZ7miaNLubL-3Y8IJpgYDHmDtag_D7o6BD2d15Yl4-4s9Pooj3mHB7J_3WfpnAmUqDRrrewY4PaaFDVEiBOOQMljPKzwB7mnTdXnA"
};

const dir = path.join(__dirname, 'public', 'assets', 'countries', 'australia');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

Object.entries(imgUrls).forEach(([filename, url]) => {
  const file = fs.createWriteStream(path.join(dir, filename));
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(path.join(dir, filename), () => {});
    console.error("Error downloading " + url, err.message);
  });
});

console.log("Images downloading...");

const countryData = {
  australia: {
    hero: {
      title: "Study in Australia",
      subtitle: "World-class education in the Land Down Under",
      image: "/assets/countries/australia/australia-hero.jpg",
      stats: [
        { label: "Universities", value: "43" },
        { label: "Avg Tuition", value: "$20k-$45k" },
        { label: "Visa Success", value: "95%" }
      ]
    },
    overview: {
      title: "Country Overview",
      description: [
        "Australia stands as a global beacon of academic excellence, offering a unique blend of world-class research facilities and an unparalleled outdoor lifestyle. With a history of pioneering innovations—from the black box flight recorder to Wi-Fi—Australian institutions focus heavily on practical application and industry relevance.",
        "Whether you're drawn to the vibrant urban centers of Melbourne and Sydney or the stunning natural landscapes of Western Australia, you'll find an inclusive society that celebrates international perspectives."
      ]
    },
    details: [
      {
        icon: "wb_sunny",
        title: "Climate",
        description: "Temperate in the south, tropical in the north. Sunny, warm summers and mild winters."
      },
      {
        icon: "payments",
        title: "Living Cost",
        description: "Approx. $21,041/yr (AUD) for basic requirements as per migration standards."
      },
      {
        icon: "badge",
        title: "Visa Type",
        description: "Student Visa (Subclass 500) allows stay for up to 5 years in line with enrollment."
      },
      {
        icon: "work",
        title: "Work Rights",
        description: "48 hours per fortnight during sessions; unlimited during scheduled breaks."
      },
      {
        icon: "translate",
        title: "Language",
        description: "IELTS 6.0+ minimum for most degrees. PTE and TOEFL also widely accepted."
      }
    ],
    courses: [
      {
        title: "Nursing",
        icon: "medical_services",
        desc: "High demand & PR pathways"
      },
      {
        title: "Information Tech",
        icon: "terminal",
        desc: "AI, Cybersecurity & Data"
      },
      {
        title: "Engineering",
        icon: "engineering",
        desc: "Civil, Mech & Sustainable"
      }
    ],
    admission: [
      "Academic transcripts (Bachelor/High School)",
      "English proficiency scores (IELTS/PTE)",
      "Statement of Purpose (GTE requirement)",
      "Financial capacity evidence"
    ],
    intakes: [
      { name: "Semester 1", month: "February" },
      { name: "Semester 2", month: "July" },
      { name: "Summer Intake", month: "November" }
    ],
    scholarships: {
      description: "Up to 25% Destination Australia scholarships and numerous university-specific merit awards (10-50%)."
    },
    universities: [
      {
        name: "University of Melbourne",
        tagline: "#1 in Australia • Research Focused",
        image: "/assets/countries/australia/university-melbourne.jpg",
        id: "university-of-melbourne"
      },
      {
        name: "University of Sydney",
        tagline: "Traditional Excellence • Global Network",
        image: "/assets/countries/australia/university-sydney.jpg",
        id: "university-of-sydney"
      },
      {
        name: "ANU Canberra",
        tagline: "National Prestige • Policy & Law",
        image: "/assets/countries/australia/university-anu.jpg",
        id: "australian-national-university"
      }
    ]
  },
  unitedstates: {
    hero: {
      title: "Study in the USA",
      subtitle: "The Land of Opportunity and Cutting-Edge Innovation",
      image: "",
      stats: [
        { label: "Colleges", value: "4,000+" },
        { label: "Avg Tuition", value: "$25k-$55k" },
        { label: "STEM OPT", value: "3 Years" }
      ]
    },
    overview: {
      title: "A Hub for Innovation and Diversity",
      description: [
        "The United States is the premier destination for international students, offering unmatched flexibility in academic programs and access to some of the world's leading technology and research facilities.",
        "You'll become part of a vibrant campus culture that fosters networking, leadership, and hands-on experience, bridging the gap between academia and industry."
      ]
    },
    details: [
      {
        icon: "wb_twilight",
        title: "Climate",
        description: "Varies from tropical in Hawaii/Florida to arctic in Alaska. Diverse regional weather."
      },
      {
        icon: "payments",
        title: "Living Cost",
        description: "Approx. $15,000 - $25,000 USD/yr depending on location and lifestyle."
      },
      {
        icon: "badge",
        title: "Visa Type",
        description: "F-1 Student Visa for full-time learners at an accredited institution."
      },
      {
        icon: "work_history",
        title: "Work Rights",
        description: "Up to 20 hrs/week on-campus. CPT and OPT opportunities available."
      },
      {
        icon: "translate",
        title: "Language",
        description: "IELTS 6.5+ or TOEFL 80+ typically required by standard universities."
      }
    ],
    courses: [
      {
        title: "Computer Science",
        icon: "data_object",
        desc: "Silicon Valley pathways"
      },
      {
        title: "Business Admin",
        icon: "business_center",
        desc: "Global fortune 500 networking"
      },
      {
        title: "Engineering",
        icon: "precision_manufacturing",
        desc: "Advanced R&D projects"
      }
    ],
    admission: [
      "Academic transcripts & GPA",
      "Standardized test scores (SAT/GRE/GMAT)",
      "Letters of recommendation & Statement of Purpose",
      "I-20 financial declaration"
    ],
    intakes: [
      { name: "Fall Semester", month: "August/September" },
      { name: "Spring Semester", month: "January" }
    ],
    scholarships: {
      description: "Extensive merit-based scholarships and assistantships offered directly by academic departments."
    },
    universities: [
      {
        name: "MIT",
        tagline: "#1 Engineering",
        image: "",
        id: "mit"
      },
      {
        name: "Stanford University",
        tagline: "Silicon Valley Innovation",
        image: "",
        id: "stanford"
      },
      {
        name: "Harvard University",
        tagline: "Academic Heritage",
        image: "",
        id: "harvard"
      }
    ]
  },
  unitedkingdom: {
    hero: {
      title: "Study in the UK",
      subtitle: "Academic Heritage and Innovation in Europe",
      image: "",
      stats: [
        { label: "Institutions", value: "160+" },
        { label: "Avg Tuition", value: "£12k-£25k" },
        { label: "Graduate Visa", value: "2 Years" }
      ]
    },
    overview: {
      title: "A Global Leader in Research & Excellence",
      description: [
        "The UK offers a world-renowned education system with a rich history of academic prestige. Degrees here are shorter, intensive, and highly respected globally.",
        "With shorter course durations and the re-introduced Graduate Route visa, it's a top choice for efficiency, cultural immersion, and career growth."
      ]
    },
    details: [
      {
        icon: "cloud",
        title: "Climate",
        description: "Temperate maritime; cool winters, mild summers, and frequent rainfall."
      },
      {
        icon: "payments",
        title: "Living Cost",
        description: "£1,334/month in London, £1,023/month outside London."
      },
      {
        icon: "badge",
        title: "Visa Type",
        description: "Student Visa (formerly Tier 4). Requires CAS and financial proof."
      },
      {
        icon: "history_edu",
        title: "Duration",
        description: "Fast-track: 3-year Bachelors and 1-year Masters."
      },
      {
        icon: "euro",
        title: "Healthcare",
        description: "IHS surcharge allows full access to the NHS as a student."
      }
    ],
    courses: [
      {
        title: "Business & Management",
        icon: "business",
        desc: "Financial hub connections"
      },
      {
        title: "Law",
        icon: "gavel",
        desc: "Foundational legal systems"
      },
      {
        title: "Medicine",
        icon: "health_and_safety",
        desc: "Prestigious NHS integration"
      }
    ],
    admission: [
      "UCAS Application (Undergrad)",
      "Academic References",
      "Personal Statement",
      "CAS Letter"
    ],
    intakes: [
      { name: "Autumn Intake", month: "September/October" },
      { name: "Spring Intake", month: "January/February" }
    ],
    scholarships: {
      description: "Chevening, Commonwealth, and GREAT scholarships alongside university-specific funds."
    },
    universities: [
      {
        name: "University of Oxford",
        tagline: "World Leader",
        image: "",
        id: "oxford"
      },
      {
        name: "Imperial College",
        tagline: "Science & Engineering focus",
        image: "",
        id: "imperial-college"
      },
      {
        name: "University of Manchester",
        tagline: "Red Brick Prestige",
        image: "",
        id: "manchester"
      }
    ]
  },
  canada: {
    hero: {
      title: "Study in Canada",
      subtitle: "Your Pathway to Innovation and Permanent Residency",
      image: "",
      stats: [
        { label: "Universities", value: "90+" },
        { label: "Avg Tuition", value: "$15k-$35k CAD" },
        { label: "Visa Success", value: "88%" }
      ]
    },
    overview: {
      title: "A Welcoming Nation of Opportunity",
      description: [
        "Canada consistently ranks as one of the best countries in the world for quality of life and high-standard education. Its post-graduation work permit (PGWP) program is among the most generous globally.",
        "Experiencing Canada means enjoying a diverse, inclusive society that welcomes international talent and prioritizes student well-being."
      ]
    },
    details: [
      {
        icon: "ac_unit",
        title: "Climate",
        description: "Cold and snowy winters, warm and pleasant summers depending on the province."
      },
      {
        icon: "payments",
        title: "Living Cost",
        description: "Approx. $20,635 CAD GIC requirement + living expenses."
      },
      {
        icon: "badge",
        title: "Visa Type",
        description: "Study Permit. Paired with a TRV or eTA for entry."
      },
      {
        icon: "trending_up",
        title: "Work/PR",
        description: "Up to 3-year PGWP and clear pathways to Permanent Residency."
      },
      {
        icon: "electric_bolt",
        title: "SDS Stream",
        description: "Expedited visa stream available for specific regions."
      }
    ],
    courses: [
      {
        title: "Information Tech",
        icon: "terminal",
        desc: "Rapid PR points"
      },
      {
        title: "Healthcare",
        icon: "medical_information",
        desc: "Severe local shortages"
      },
      {
        title: "Hospitality",
        icon: "restaurant",
        desc: "Booming tourism sector"
      }
    ],
    admission: [
      "LOA (Letter of Acceptance) from a DLI",
      "Proof of Funds (GIC)",
      "Provincial Attestation Letter (if applicable)",
      "Biometrics & Medical Exam"
    ],
    intakes: [
      { name: "Fall", month: "September" },
      { name: "Winter", month: "January" },
      { name: "Spring", month: "May" }
    ],
    scholarships: {
      description: "Vanier Graduate Scholarships, Lester B. Pearson International, and university-based entrance awards."
    },
    universities: [
      {
        name: "University of Toronto",
        tagline: "#1 in Canada",
        image: "",
        id: "utoronto"
      },
      {
        name: "UBC",
        tagline: "West Coast Excellence",
        image: "",
        id: "ubc"
      },
      {
        name: "McGill University",
        tagline: "Prestigious Research",
        image: "",
        id: "mcgill"
      }
    ]
  },
  germany: {
    hero: {
      title: "Study in Germany",
      subtitle: "High-Quality Education with Low-to-No Tuition",
      image: "",
      stats: [
        { label: "Universities", value: "380+" },
        { label: "Avg Tuition", value: "€0-€1.5k" },
        { label: "Stay-back", value: "18 Months" }
      ]
    },
    overview: {
      title: "The Land of Ideas and Engineering",
      description: [
        "Germany is the most popular non-English speaking destination for international students. It offers world-class degrees, especially in engineering and technology, often with zero tuition fees at public universities.",
        "From vibrant tech hubs in Berlin to legacy engineering in Munich, Germany grounds academic theory in robust industrial partnerships."
      ]
    },
    details: [
      {
        icon: "thermostat",
        title: "Climate",
        description: "Moderate climate; warm summers and chilly, snowy winters."
      },
      {
        icon: "payments",
        title: "Living Cost",
        description: "€11,208/yr (Blocked Account requirement) covering rent & basics."
      },
      {
        icon: "badge",
        title: "Visa Type",
        description: "National Visa for Studies. Requires Blocked Account proof."
      },
      {
        icon: "euro_symbol",
        title: "Tuition",
        description: "Mostly free at public universities (except state of Baden-Württemberg)."
      },
      {
        icon: "directions_railway",
        title: "Location",
        description: "Heart of Europe; easily travel the EU on your student visa."
      }
    ],
    courses: [
      {
        title: "Mechanical Eng.",
        icon: "car_repair",
        desc: "Automotive epicenter"
      },
      {
        title: "Computer Science",
        icon: "data_array",
        desc: "Berlin tech startups"
      },
      {
        title: "Renewable Energy",
        icon: "solar_power",
        desc: "Eco-innovation leader"
      }
    ],
    admission: [
      "Hochschulzugangsberechtigung (HZB) assessment",
      "Language proof (IELTS or TestDaF)",
      "Proof of Blocked Account",
      "Letter of Admission from Uni-Assist"
    ],
    intakes: [
      { name: "Winter Semester", month: "October" },
      { name: "Summer Semester", month: "April" }
    ],
    scholarships: {
      description: "DAAD Scholarships cover living stipends for top international students, along with Erasmus+ programs."
    },
    universities: [
      {
        name: "TU Munich",
        tagline: "Elite Engineering",
        image: "",
        id: "tu-munich"
      },
      {
        name: "Heidelberg University",
        tagline: "Oldest in Germany",
        image: "",
        id: "heidelberg"
      },
      {
        name: "Humboldt University",
        tagline: "Berlin Innovation",
        image: "",
        id: "humboldt"
      }
    ]
  }
};

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'countryData.json'), JSON.stringify(countryData, null, 2));
console.log("JSON written.");
