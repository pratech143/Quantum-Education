import { prisma, connectDatabase, disconnectDatabase } from '../shared/database/prisma.js';

const seedData = {
  "destinations": [
    {
      "name": "Australia",
      "slug": "australia",
      "description": "Australia is a global leader in education, hosting several of the world's top-ranked universities. It is renowned for its high standard of living, vibrant multicultural cities, and extensive research opportunities for international students.",
      "tuitionFees": 34000.0,
      "visaInfo": "International students require a Subclass 500 Student Visa. Applicants must demonstrate Genuine Student (GS) status and meet financial requirements of approximately AUD 29,710 per year.",
      "livingCost": 26000.0,
      "currency": "AUD",
      "heroImage": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
      "heroSubtitle": "World-Class Education in the Southern Hemisphere",
      "heroStats": [
        { "label": "Top Universities", "value": "38" },
        { "label": "Avg. Tuition", "value": "AUD 25k - 48k" },
        { "label": "Post-Study Work", "value": "2 - 6 Years" }
      ],
      "overview": {
        "title": "Why Study in Australia?",
        "description": [
          "Australia offers a unique combination of high-quality academic programs and a relaxed, outdoor-oriented lifestyle.",
          "The Australian Qualifications Framework (AQF) ensures that degrees are globally recognized and adhere to rigorous quality standards."
        ]
      },
      "details": [
        { "title": "Career Support", "description": "Australian institutions provide extensive career counseling and networking events to help students transition into the global workforce." }
      ],
      "popularCourses": [
        { "title": "Healthcare & Nursing", "desc": "Highly sought-after programs due to Australia's world-class medical infrastructure and aging population." }
      ],
      "admissionRequirements": [
        "IELTS 6.5 or PTE 58 minimum",
        "Successful completion of Year 12 or equivalent",
        "Evidence of Financial Capacity",
        "Health Insurance (OSHC)"
      ],
      "intakes": [
        { "name": "February Intake", "month": "February" },
        { "name": "July Intake", "month": "July" }
      ],
      "scholarships": {
        "description": "The Australia Awards and Destination Australia program provide significant merit-based support for high-achieving applicants."
      },
      "universities": [
        {
          "name": "Western Sydney University (WSU)",
          "slug": "western-sydney-university",
          "description": "WSU is a world-class institution known for its high-impact research and commitment to sustainability and social equity.",
          "location": "Sydney, NSW",
          "image": "https://example.com/wsu-main.jpg",
          "ranking": 1,
          "qsRanking": "375",
          "tagline": "Bringing knowledge to life through innovation.",
          "website": "https://www.westernsydney.edu.au",
          "type": "UNIVERSITY",
          "fees": "AUD 28,000 - 36,000",
          "heroData": {
            "title": "Start Your Journey at WSU",
            "subtitle": "Ranked #1 for Social Impact worldwide.",
            "image": "https://example.com/wsu-hero.jpg",
            "primaryCta": "Explore Courses",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "The WSU Advantage",
            "reasons": [
              { "icon": "globe", "title": "Global Impact", "description": "Engagement with industry partners ensures curricula are relevant to the modern job market.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Undergraduate & Graduate Programs",
            "description": "Focused on developing leadership and technical skills.",
            "courses": [
              { "title": "Master of Engineering", "description": "Professional accreditation and industry placement included.", "fees": "34000", "duration": "2 Years", "semesters": "4", "scope": "International", "details": "Engineers Australia Accredited.", "tag": "STEM" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Academic Entry",
            "howToApplyTitle": "Online Application",
            "requirements": [
              { "title": "Transcripts", "description": "Final academic certificates from secondary or tertiary study." }
            ],
            "howToApply": ["Apply via the WSU international portal.", "Provide English proficiency scores."]
          }
        },
        {
          "name": "Medicus College",
          "slug": "medicus-college",
          "description": "A leading vocational provider specializing in professional health services, nursing support, and leadership management training.",
          "location": "Sydney, NSW",
          "image": "https://example.com/medicus-college.jpg",
          "ranking": 0,
          "qsRanking": "N/A",
          "tagline": "Quality Vocational Education.",
          "website": "https://medicus.edu.au",
          "type": "COLLEGE",
          "fees": "AUD 14,000 - 18,000",
          "heroData": {
            "title": "Practical Skills for Real Jobs",
            "subtitle": "Get certified in healthcare and community services.",
            "image": "https://example.com/medicus-hero.jpg",
            "primaryCta": "View VET Courses",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "Why Medicus?",
            "reasons": [
              { "icon": "check-circle", "title": "Job Ready", "description": "Hands-on training in simulated medical environments.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Health & Leadership",
            "description": "VET sector training programs.",
            "courses": [
              { "title": "Diploma of Community Services", "description": "Training for social work and community support roles.", "fees": "16000", "duration": "1.5 Years", "semesters": "3", "scope": "National", "details": "Includes practical placement hours.", "tag": "Healthcare" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "VET Entry",
            "howToApplyTitle": "Enrollment",
            "requirements": [
              { "title": "Language", "description": "IELTS 6.0 with no band less than 5.5." }
            ],
            "howToApply": ["Online registration form.", "Interview with admissions officer."]
          }
        }
      ]
    },
    {
      "name": "Canada",
      "slug": "canada",
      "description": "Canada is renowned for its inclusive culture and world-class academic institutions. It offers a streamlined pathway for international students to transition from study to a professional career and permanent residency.",
      "tuitionFees": 32000.0,
      "visaInfo": "Students require a Study Permit. New 2024 regulations require a Provincial Attestation Letter (PAL) from most provinces before applying.",
      "livingCost": 21000.0,
      "currency": "CAD",
      "heroImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      "heroSubtitle": "Academic Excellence in a Diverse Society",
      "heroStats": [
        { "label": "Top Universities", "value": "30" },
        { "label": "Avg. Tuition", "value": "CAD 22k - 45k" },
        { "label": "Post-Study Work", "value": "Up to 3 Years" }
      ],
      "overview": {
        "title": "The Canadian Journey",
        "description": [
          "Canadian degrees are highly respected worldwide, with strong emphasis on collaborative learning and research.",
          "Post-Graduation Work Permit (PGWP) allows students to gain valuable Canadian work experience after completing their studies."
        ]
      },
      "details": [
        { "title": "Diversity", "description": "Canada celebrates multiculturalism, ensuring international students feel at home in safe, urban environments." }
      ],
      "popularCourses": [
        { "title": "Business & Finance", "desc": "Focused on global trade, logistics, and entrepreneurial management in a North American context." }
      ],
      "admissionRequirements": [
        "Letter of Acceptance (LOA)",
        "PAL (Provincial Attestation Letter)",
        "Proof of Funds (CAD 20,635 + tuition)",
        "English Proficiency (IELTS/PTE/Duolingo)"
      ],
      "intakes": [
        { "name": "Fall Intake", "month": "September" },
        { "name": "Winter Intake", "month": "January" }
      ],
      "scholarships": {
        "description": "The Vanier Canada Graduate Scholarships and university-specific entrance awards provide significant tuition relief."
      },
      "universities": [
        {
          "name": "Seneca College",
          "slug": "seneca-college",
          "description": "A leader in polytechnic education, Seneca offers a range of career-focused diplomas, degrees, and graduate certificates.",
          "location": "Toronto, Ontario",
          "image": "https://example.com/seneca.jpg",
          "ranking": 10,
          "qsRanking": "N/A",
          "tagline": "The future is polytechnic.",
          "website": "https://www.senecapolytechnic.ca",
          "type": "COLLEGE",
          "fees": "CAD 17,000 - 24,000",
          "heroData": {
            "title": "Advance Your Career at Seneca",
            "subtitle": "Hands-on learning in Canada's business hub.",
            "image": "https://example.com/seneca-hero.jpg",
            "primaryCta": "Search Programs",
            "secondaryCta": "Apply Now"
          },
          "whySection": {
            "title": "Why Choose Seneca?",
            "reasons": [
              { "icon": "briefcase", "title": "Co-op Opportunities", "description": "Gain real-world experience while you study through integrated co-op terms.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Technology & Business",
            "description": "Diploma and degree pathways.",
            "courses": [
              { "title": "Computer Programming", "description": "Intensive training in modern software languages and web technologies.", "fees": "18500", "duration": "2 Years", "semesters": "4", "scope": "National", "details": "High placement rates in Toronto tech sector.", "tag": "Coding" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Academic Standards",
            "howToApplyTitle": "The Application Journey",
            "requirements": [
              { "title": "Secondary Education", "description": "High school diploma with strong grades in Mathematics." }
            ],
            "howToApply": ["Apply through the Seneca International portal.", "Submit transcripts and IELTS scores."]
          }
        }
      ]
    },
    {
      "name": "United States",
      "slug": "usa",
      "description": "The United States remains the premier destination for higher education, boasting more top-ranked institutions than any other country and offering unparalleled flexibility in academic paths.",
      "tuitionFees": 40000.0,
      "visaInfo": "Students must obtain an F-1 Student Visa. You will need an I-20 form from your chosen institution and must pay the SEVIS I-901 fee.",
      "livingCost": 18000.0,
      "currency": "USD",
      "heroImage": "https://images.unsplash.com/photo-1550721884-7ab0567f3941",
      "heroSubtitle": "The Gold Standard of Higher Education",
      "heroStats": [
        { "label": "Top Universities", "value": "150+" },
        { "label": "Avg. Tuition", "value": "USD 25k - 60k" },
        { "label": "Post-Study Work", "value": "1 - 3 Years (OPT)" }
      ],
      "overview": {
        "title": "Study in the USA",
        "description": [
          "The U.S. offers a diverse range of institutions, from Ivy League universities to large state research schools and small liberal arts colleges.",
          "Academic flexibility allows students to explore multiple subjects before declaring a major, fostering a well-rounded education."
        ]
      },
      "details": [
        { "title": "Innovation", "description": "Access to cutting-edge technology and research facilities that lead global industrial trends." }
      ],
      "popularCourses": [
        { "title": "STEM Programs", "desc": "Science, Technology, Engineering, and Math programs often qualify for extended OPT work rights." }
      ],
      "admissionRequirements": [
        "SAT/ACT (Optional for many)",
        "TOEFL 80+ or IELTS 6.5+",
        "Statement of Purpose",
        "Proof of Financial Stability (Bank Statement)"
      ],
      "intakes": [
        { "name": "Fall Intake", "month": "August" },
        { "name": "Spring Intake", "month": "January" }
      ],
      "scholarships": {
        "description": "Institutional merit-based and need-blind scholarships are available for exceptional international applicants."
      },
      "universities": [
        {
          "name": "University of North Texas",
          "slug": "university-of-north-texas",
          "description": "UNT is a tier-one research university offering a wide range of degrees in arts, sciences, and engineering.",
          "location": "Denton, Texas",
          "image": "https://example.com/unt.jpg",
          "ranking": 250,
          "qsRanking": "N/A",
          "tagline": "Discover the power of ideas.",
          "website": "https://www.unt.edu",
          "type": "UNIVERSITY",
          "fees": "USD 24,000 - 32,000",
          "heroData": {
            "title": "A Green Light to Greatness",
            "subtitle": "Join a creative and collaborative campus community.",
            "image": "https://example.com/unt-hero.jpg",
            "primaryCta": "Explore Majors",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "Why UNT?",
            "reasons": [
              { "icon": "award", "title": "Tier One Research", "description": "Participate in high-level research as early as undergraduate level.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Top Degrees",
            "description": "Nationally recognized programs.",
            "courses": [
              { "title": "M.S. in Computer Science", "description": "Research-heavy program focusing on AI and Algorithms.", "fees": "28000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "STEM designated for OPT extension.", "tag": "STEM" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Admissions Criteria",
            "howToApplyTitle": "Apply to UNT",
            "requirements": [
              { "title": "GPA", "description": "Minimum 3.0 on a 4.0 scale for graduate programs." }
            ],
            "howToApply": ["Apply via ApplyTexas or Common App.", "Submit transcripts and official test scores."]
          }
        }
      ]
    },
    {
      "name": "United Kingdom",
      "slug": "uk",
      "description": "The UK is home to centuries-old academic traditions combined with modern, innovative teaching methods. Degrees are shorter and more focused, offering high ROI for international students.",
      "tuitionFees": 22000.0,
      "visaInfo": "Students must apply for a Student Visa. You need a Confirmation of Acceptance for Studies (CAS) and must meet the 70-point criteria under the UK's immigration system.",
      "livingCost": 15000.0,
      "currency": "GBP",
      "heroImage": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      "heroSubtitle": "Academic Tradition Meets Innovation",
      "heroStats": [
        { "label": "Top Universities", "value": "90" },
        { "label": "Avg. Tuition", "value": "GBP 15k - 35k" },
        { "label": "Post-Study Work", "value": "2 - 3 Years" }
      ],
      "overview": {
        "title": "Study in the UK",
        "description": [
          "The Graduate Route visa allows international students to work in the UK for two years after completing their degree.",
          "UK universities are world-renowned for research excellence, with four of the global top 10 located in the UK."
        ]
      },
      "details": [
        { "title": "Efficiency", "description": "Master’s degrees are usually one year, saving time and living expenses compared to other countries." }
      ],
      "popularCourses": [
        { "title": "Law & Humanities", "description": "Prestigious programs rooted in common law traditions and critical philosophical inquiry." }
      ],
      "admissionRequirements": [
        "CAS Letter",
        "IELTS for UKVI (6.0 - 7.0)",
        "Academic References",
        "ATAS certificate (for specific STEM courses)"
      ],
      "intakes": [
        { "name": "Autumn Intake", "month": "September" },
        { "name": "Winter Intake", "month": "January" }
      ],
      "scholarships": {
        "description": "Chevening Scholarships and Commonwealth Scholarships offer fully-funded opportunities for global leaders."
      },
      "universities": [
        {
          "name": "University of Plymouth",
          "slug": "university-of-plymouth",
          "description": "A top modern university known for its excellence in marine science, health, and sustainability research.",
          "location": "Plymouth, Devon",
          "image": "https://example.com/plymouth.jpg",
          "ranking": 50,
          "qsRanking": "601-610",
          "tagline": "With Plymouth University, your future is bright.",
          "website": "https://www.plymouth.ac.uk",
          "type": "UNIVERSITY",
          "fees": "GBP 16,000 - 22,000",
          "heroData": {
            "title": "Explore Your Potential",
            "subtitle": "Study at a leading institution on the beautiful South Coast.",
            "image": "https://example.com/plymouth-hero.jpg",
            "primaryCta": "Find a Course",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "Why Plymouth?",
            "reasons": [
              { "icon": "anchor", "title": "Marine Excellence", "description": "World-leading research and facilities in ocean sciences.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Featured Courses",
            "description": "Industry-accredited programs.",
            "courses": [
              { "title": "MSc Business Management", "description": "Focused on global enterprise and leadership.", "fees": "17500", "duration": "1 Year", "semesters": "3", "scope": "International", "details": "Includes professional development modules.", "tag": "Business" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Entry Requirements",
            "howToApplyTitle": "The CAS Process",
            "requirements": [
              { "title": "IELTS", "description": "Minimum 6.5 with no band less than 6.0." }
            ],
            "howToApply": ["Apply through UCAS for UG or directly for PG.", "Secure CAS by paying the deposit."]
          }
        }
      ]
    },
    {
      "name": "New Zealand",
      "slug": "new-zealand",
      "description": "New Zealand offers a stunning natural environment combined with high-quality education and a focus on student well-being and practical skills.",
      "tuitionFees": 28000.0,
      "visaInfo": "Students must apply for a Fee Paying Student Visa. You must provide evidence of tuition payment and living costs (NZD 20,000 per year).",
      "livingCost": 22000.0,
      "currency": "NZD",
      "heroImage": "https://images.unsplash.com/photo-1469521669194-b78be4bd242d",
      "heroSubtitle": "Adventure and Excellence Await",
      "heroStats": [
        { "label": "Top Universities", "value": "8" },
        { "label": "Avg. Tuition", "value": "NZD 20k - 40k" },
        { "label": "Post-Study Work", "value": "1 - 3 Years" }
      ],
      "overview": {
        "title": "Life in Aotearoa",
        "description": [
          "All eight of New Zealand's universities are ranked in the top 3% globally by QS Rankings.",
          "The 'Code of Practice' ensures international students are supported and well-treated throughout their journey."
        ]
      },
      "details": [
        { "title": "Work Rights", "description": "Most students can work up to 20 hours per week and full-time during holidays." }
      ],
      "popularCourses": [
        { "title": "Creative Media", "description": "Fueled by the local 'Wellywood' industry, these programs focus on animation, VFX, and game design." }
      ],
      "admissionRequirements": [
        "IELTS 6.0 - 6.5",
        "Academic records from home country",
        "Statement of Purpose",
        "Medical and Police certificates"
      ],
      "intakes": [
        { "name": "Semester 1", "month": "February" },
        { "name": "Semester 2", "month": "July" }
      ],
      "scholarships": {
        "description": "New Zealand Excellence Awards (NZEA) provide specific funding for high-achieving Indian and South Asian students."
      },
      "universities": [
        {
          "name": "Massey University",
          "slug": "massey-university",
          "description": "A leading research university with campuses in three cities, known for innovation in agriculture, aviation, and design.",
          "location": "Auckland, Wellington, Palmerston North",
          "image": "https://example.com/massey.jpg",
          "ranking": 3,
          "qsRanking": "239",
          "tagline": "The university of New Zealand.",
          "website": "https://www.massey.ac.nz",
          "type": "UNIVERSITY",
          "fees": "NZD 30,000 - 45,000",
          "heroData": {
            "title": "Study at Massey",
            "subtitle": "Join a world-class university with a focus on real-world impact.",
            "image": "https://example.com/massey-hero.jpg",
            "primaryCta": "Explore Programs",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "The Massey Experience",
            "reasons": [
              { "icon": "plane", "title": "Aviation Excellence", "description": "Home to New Zealand's only professional aviation school.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Programs",
            "description": "Diverse and industry-linked.",
            "courses": [
              { "title": "Bachelor of Design", "description": "Highly acclaimed program with pathways into the global creative industry.", "fees": "35000", "duration": "4 Years", "semesters": "8", "scope": "Global", "details": "Focuses on visual communication.", "tag": "Creative" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Academic Entry",
            "howToApplyTitle": "The Path to NZ",
            "requirements": [
              { "title": "Year 13 equivalent", "description": "Successful completion of high school with university entrance level marks." }
            ],
            "howToApply": ["Apply via the Massey website.", "Submit portfolio (for design courses only)."]
          }
        }
      ]
    },
    {
      "name": "Denmark",
      "slug": "denmark",
      "description": "Denmark is a pioneer in sustainable education, offering high-quality living and a pedagogy that encourages independence and critical thinking.",
      "tuitionFees": 12000.0,
      "visaInfo": "Non-EU students require an ST1 Residence Permit. Applicants must pay the tuition fee for the first semester before the permit is issued.",
      "livingCost": 14000.0,
      "currency": "EUR",
      "heroImage": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
      "heroSubtitle": "Innovation in a Sustainable World",
      "heroStats": [
        { "label": "Top Universities", "value": "8" },
        { "label": "Avg. Tuition", "value": "EUR 8k - 16k" },
        { "label": "Post-Study Work", "value": "Up to 3 Years" }
      ],
      "overview": {
        "title": "Why Denmark?",
        "description": [
          "Denmark offers an egalitarian society with a high level of safety and an emphasis on work-life balance.",
          "Danish institutions focus on 'PBL' (Problem Based Learning), preparing students for real-world industry challenges."
        ]
      },
      "details": [
        { "title": "Sustainability", "description": "Denmark leads the world in green technology and wind energy research." }
      ],
      "popularCourses": [
        { "title": "Sustainable Engineering", "description": "Innovative programs focusing on renewable energy systems and urban planning." }
      ],
      "admissionRequirements": [
        "Language Proficiency (B2/C1 English)",
        "Recognized Secondary Education",
        "Motivation Letter",
        "Valid Passport"
      ],
      "intakes": [
        { "name": "Autumn Intake", "month": "September" },
        { "name": "Spring Intake", "month": "February" }
      ],
      "scholarships": {
        "description": "The Danish Government Scholarship is available to high-performing non-EU students."
      },
      "universities": [
        {
          "name": "International Business Academy (IBA)",
          "slug": "international-business-academy",
          "description": "IBA Kolding offers a range of business and technology programs in collaboration with leading UK universities.",
          "location": "Kolding",
          "image": "https://example.com/iba-kolding.jpg",
          "ranking": 15,
          "qsRanking": "N/A",
          "tagline": "A world of opportunities.",
          "website": "https://www.iba.dk",
          "type": "COLLEGE",
          "fees": "EUR 8,000 - 12,000",
          "heroData": {
            "title": "Study Business in Denmark",
            "subtitle": "Get a global perspective on management and marketing.",
            "image": "https://example.com/iba-hero.jpg",
            "primaryCta": "Explore Programs",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "The IBA Advantage",
            "reasons": [
              { "icon": "briefcase", "title": "Industry Connection", "description": "Direct networking with Danish and international companies.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Business Programs",
            "description": "Applied and practical.",
            "courses": [
              { "title": "BSc International Business", "description": "Degree awarded in partnership with Coventry University.", "fees": "10000", "duration": "3 Years", "semesters": "6", "scope": "European", "details": "Focuses on cross-cultural management.", "tag": "Business" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Academic Path",
            "howToApplyTitle": "Join IBA",
            "requirements": [
              { "title": "English Proficiency", "description": "IELTS 6.5 or equivalent Danish B-level English." }
            ],
            "howToApply": ["Apply via Optagelse.dk.", "Upload supporting academic documents."]
          }
        }
      ]
    }
  ]
};

async function seed() {
  console.log('🚀 Starting Destination Seeding...');
  await connectDatabase();

  try {
    for (const destination of seedData.destinations) {
      console.log(`🌍 Seeding Country: ${destination.name}`);
      
      const { universities, ...countryData } = destination;

      // Upsert the Country
      const country = await prisma.country.upsert({
        where: { slug: countryData.slug },
        update: countryData as any,
        create: countryData as any,
      });

      // Upsert the Universities linked to this country
      if (universities && universities.length > 0) {
        for (const uni of universities) {
          console.log(`   🎓 Seeding Institution: ${uni.name}`);
          await prisma.university.upsert({
            where: { slug: uni.slug },
            update: {
              ...uni,
              countryId: country.id,
            } as any,
            create: {
              ...uni,
              countryId: country.id,
            } as any,
          });
        }
      }
    }

    console.log('\n✅ Seeding Completed Successfully!');
  } catch (error) {
    console.error('\n❌ Seeding Failed:', error);
  } finally {
    await disconnectDatabase();
  }
}

seed();
