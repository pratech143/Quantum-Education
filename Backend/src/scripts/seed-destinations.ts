import { prisma, connectDatabase, disconnectDatabase } from '../shared/database/prisma.js';

const seedData = {
  "destinations": [
    {
      "name": "Australia",
      "slug": "australia",
      "description": "Australia is a world leader in high-quality education and research, consistently ranking as one of the top choices for international students. Its education system, governed by the Australian Qualifications Framework (AQF), ensures that degrees are globally recognized and adhere to rigorous quality standards across all states.",
      "tuitionFees": 35000.0,
      "visaInfo": "International students must apply for the Subclass 500 Student Visa. Applicants need to demonstrate Genuine Student (GS) status and have health insurance (OSHC) for the duration of their stay.",
      "livingCost": 28000.0,
      "currency": "AUD",
      "heroImage": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
      "heroSubtitle": "Achieve Global Excellence in the Land Down Under",
      "heroStats": [
        { "label": "Top Universities", "value": "43" },
        { "label": "Avg. Tuition", "value": "AUD 22k - 50k" },
        { "label": "Post-Study Work", "value": "2 - 6 Years" }
      ],
      "overview": {
        "title": "Why Choose Australia for Your Studies?",
        "description": [
          "Australia offers a unique lifestyle that balances high-intensity academic research with a relaxed, multicultural environment. Students benefit from strong industry connections and high employability rates post-graduation.",
          "The country is home to seven of the world's top 100 universities, providing diverse study options in fields ranging from Engineering to Marine Biology."
        ]
      },
      "details": [
        { "title": "Safety & Diversity", "description": "Australia is known for its safe, welcoming, and culturally diverse cities like Sydney and Melbourne, which are regularly voted among the world's most liveable cities." }
      ],
      "popularCourses": [
        { "title": "Healthcare & Nursing", "desc": "Highly ranked programs with strong practical components in clinical settings." }
      ],
      "admissionRequirements": [
        "IELTS 6.5 or PTE 58 minimum",
        "Year 12 completion or equivalent",
        "Financial capacity evidence",
        "Valid OSHC (Health Cover)"
      ],
      "intakes": [
        { "name": "February Intake", "month": "February" },
        { "name": "July Intake", "month": "July" }
      ],
      "scholarships": {
        "description": "Various merit-based scholarships are available through the Australia Awards and individual university entrance grants."
      },
      "universities": [
        {
          "name": "Western Sydney University (WSU)",
          "slug": "western-sydney-university",
          "description": "WSU is a top-tier institution known for its focus on social impact and innovative research. It offers a modern campus experience with cutting-edge facilities in the heart of Greater Western Sydney.",
          "location": "Sydney, NSW",
          "image": "https://example.com/wsu.jpg",
          "ranking": 1,
          "qsRanking": "375",
          "tagline": "Bringing knowledge to life through real-world experience.",
          "website": "https://www.westernsydney.edu.au",
          "type": "UNIVERSITY",
          "fees": "AUD 30,000 - 38,000",
          "heroData": {
            "title": "Impact Your Future at WSU",
            "subtitle": "Join the world's #1 university for social and environmental impact.",
            "image": "https://example.com/wsu-hero.jpg",
            "primaryCta": "View Courses",
            "secondaryCta": "Visit WSU"
          },
          "whySection": {
            "title": "The WSU Advantage",
            "reasons": [
              { "icon": "globe", "title": "Global Perspective", "description": "Engage with students from over 100 countries in a vibrant learning community.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Undergraduate & Postgrad Programs",
            "description": "Specialized programs designed for the global job market.",
            "courses": [
              { "title": "Master of Data Science", "description": "Focused on big data analytics and machine learning applications.", "fees": "34000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "Includes industry internship projects.", "tag": "Tech" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Admission Criteria",
            "howToApplyTitle": "The WSU Application Path",
            "requirements": [
              { "title": "Academic Record", "description": "Minimum GPA requirements apply based on the specific course of study." }
            ],
            "howToApply": ["Online application via agent or direct portal.", "Upload certified academic transcripts and ELP scores."]
          }
        },
        {
            "name": "University of Wollongong (UOW)",
            "slug": "university-of-wollongong",
            "description": "UOW is an international research-intensive university with a reputation for excellence in teaching and learning. It consistently ranks among the top modern universities globally for its student-centric approach.",
            "location": "Wollongong, NSW",
            "image": "https://example.com/uow.jpg",
            "ranking": 185,
            "qsRanking": "185",
            "tagline": "Stands for purpose and excellence.",
            "website": "https://www.uow.edu.au",
            "type": "UNIVERSITY",
            "fees": "AUD 32,000 - 42,000",
            "heroData": { "title": "Innovation and Excellence", "subtitle": "Study at a university that cares about your career journey.", "image": "https://example.com/uow-hero.jpg", "primaryCta": "Explore Programs", "secondaryCta": "Visit Website" },
            "whySection": { "title": "Why UOW?", "reasons": [{ "icon": "briefcase", "title": "Employability", "description": "Ranked in the top 1% for graduates in the Global Graduate Employability Survey.", "link": "", "linkText": "" }] },
            "coursesData": { "title": "Leading Courses", "description": "Programs shaped by the industry.", "courses": [{ "title": "Bachelor of Nursing", "description": "Accredited program with extensive clinical placement hours.", "fees": "33000", "duration": "3 Years", "semesters": "6", "scope": "National", "details": "Pathway to Registered Nurse status.", "tag": "Health" }] },
            "admissionData": { "requirementsTitle": "Entry Pathways", "howToApplyTitle": "Applying to UOW", "requirements": [{ "title": "English Proficiency", "description": "IELTS score of 6.5 minimum." }], "howToApply": ["Apply online.", "Provide passport and visa documents."] }
        },
        {
            "name": "Charles Darwin University (CDU)",
            "slug": "charles-darwin-university",
            "description": "CDU is a dual-sector university known for its deep connection to Northern Australia and its innovative approach to online and distance education. It offers a unique cultural and academic experience in one of Australia's most diverse regions.",
            "location": "Darwin, NT",
            "image": "https://example.com/cdu.jpg",
            "ranking": 600,
            "qsRanking": "600",
            "tagline": "You make CDU.",
            "website": "https://www.cdu.edu.au",
            "type": "UNIVERSITY",
            "fees": "AUD 26,000 - 34,000",
            "heroData": { "title": "Unique Study Environment", "subtitle": "Small class sizes and personalized support for every student.", "image": "https://example.com/cdu-hero.jpg", "primaryCta": "Course Search", "secondaryCta": "Visit Website" },
            "whySection": { "title": "Small is Powerful", "reasons": [{ "icon": "users", "title": "Personalized Support", "description": "One of the best student-to-teacher ratios in Australia.", "link": "", "linkText": "" }] },
            "coursesData": { "title": "Top Programs", "description": "Focusing on regional and global needs.", "courses": [{ "title": "Master of Engineering", "description": "Professional engineering degree with specialized majors.", "fees": "31000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "Accredited by Engineers Australia.", "tag": "STEM" }] },
            "admissionData": { "requirementsTitle": "Requirements", "howToApplyTitle": "Enrollment", "requirements": [{ "title": "Transcripts", "description": "Evidence of undergraduate degree for PG studies." }], "howToApply": ["Online application.", "Submit via an authorized representative."] }
        },
        { "name": "Central Queensland University (CQU)", "slug": "cquniversity", "description": "CQU is Australia's largest regional university, offering over 300 programs across several campuses. It is highly regarded for its accessibility and focus on distance education.", "location": "Brisbane, QLD", "image": "https://example.com/cqu.jpg", "ranking": 500, "qsRanking": "500", "tagline": "Be what you want to be.", "website": "https://www.cqu.edu.au", "type": "UNIVERSITY", "fees": "AUD 25,000 - 32,000", "heroData": { "title": "Inclusive Learning", "subtitle": "Flexible study options tailored to your schedule.", "image": "https://example.com/cqu-hero.jpg", "primaryCta": "Explore", "secondaryCta": "Visit" }, "whySection": { "title": "The CQU Way", "reasons": [{ "icon": "check", "title": "Flexibility", "description": "Switch between online and on-campus study seamlessly.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Academic Path", "description": "Broad range of diplomas to masters.", "courses": [{ "title": "Master of Business Management", "description": "Leadership and organizational strategy.", "fees": "28000", "duration": "1.5 Years", "semesters": "3", "scope": "Global", "details": "Focused on modern leadership styles.", "tag": "Business" }] }, "admissionData": { "requirementsTitle": "Entry", "howToApplyTitle": "Apply", "requirements": [{ "title": "English", "description": "IELTS 6.0 for many programs." }], "howToApply": ["Apply online through the portal."] } },
        { "name": "Edith Cowan University (ECU)", "slug": "edith-cowan-university", "description": "ECU is recognized for its high-quality teaching and excellence in the arts, particularly through its renowned Western Australian Academy of Performing Arts (WAAPA).", "location": "Perth, WA", "image": "https://example.com/ecu.jpg", "ranking": 400, "qsRanking": "400", "tagline": "World-ready graduates.", "website": "https://www.ecu.edu.au", "type": "UNIVERSITY", "fees": "AUD 28,000 - 36,000", "heroData": { "title": "The Creative Choice", "subtitle": "Join a vibrant community of thinkers and creators.", "image": "https://example.com/ecu-hero.jpg", "primaryCta": "Search", "secondaryCta": "Visit" }, "whySection": { "title": "Why ECU?", "reasons": [{ "icon": "star", "title": "Top Ranking", "description": "Top rated for teaching quality for several consecutive years.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Specialized Degrees", "description": "Expert-led training.", "courses": [{ "title": "Bachelor of Cyber Security", "description": "Industry-leading program in digital safety.", "fees": "32000", "duration": "3 Years", "semesters": "6", "scope": "Global", "details": "Strong links with government intelligence agencies.", "tag": "Tech" }] }, "admissionData": { "requirementsTitle": "Academic", "howToApplyTitle": "Join ECU", "requirements": [{ "title": "GPA", "description": "Satisfactory high school completion." }], "howToApply": ["Direct application or through agent."] } },
        { "name": "James Cook University (JCU)", "slug": "james-cook-university", "description": "JCU is a leader in tropical research and sustainability, offering world-class programs in marine science, environmental studies, and ecology due to its proximity to the Great Barrier Reef.", "location": "Townsville, QLD", "image": "https://example.com/jcu.jpg", "ranking": 415, "qsRanking": "415", "tagline": "Creating a brighter future for the tropics.", "website": "https://www.jcu.edu.au", "type": "UNIVERSITY", "fees": "AUD 30,000 - 45,000", "heroData": { "title": "Research Excellence", "subtitle": "A world-class education focused on global challenges.", "image": "https://example.com/jcu-hero.jpg", "primaryCta": "Programs", "secondaryCta": "Visit" }, "whySection": { "title": "The JCU Experience", "reasons": [{ "icon": "anchor", "title": "Ocean Studies", "description": "The world's best place to study marine biology.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Our Focus", "description": "Sustainability and Environment.", "courses": [{ "title": "Bachelor of Marine Science", "description": "Practical research on the Great Barrier Reef.", "fees": "38000", "duration": "3 Years", "semesters": "6", "scope": "Global", "details": "Field trips and research projects included.", "tag": "Science" }] }, "admissionData": { "requirementsTitle": "Entry", "howToApplyTitle": "Enroll", "requirements": [{ "title": "English", "description": "IELTS 6.5 required." }], "howToApply": ["Apply through International Admissions."] } },
        { "name": "University of Southern Queensland (USQ)", "slug": "usq", "description": "USQ is renowned for its flexible delivery of programs and its strength in space science, agriculture, and online education.", "location": "Toowoomba, QLD", "image": "https://example.com/usq.jpg", "ranking": 450, "qsRanking": "450", "tagline": "Unlock your potential.", "website": "https://www.usq.edu.au", "type": "UNIVERSITY", "fees": "AUD 24,000 - 30,000", "heroData": { "title": "Space and Science", "subtitle": "Leading research in astronomy and environmental science.", "image": "https://example.com/usq-hero.jpg", "primaryCta": "Explore", "secondaryCta": "Visit" }, "whySection": { "title": "USQ Focus", "reasons": [{ "icon": "moon", "title": "Astronomy", "description": "Home to the Mount Kent Observatory.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Programs", "description": "Practical and research-based.", "courses": [{ "title": "Master of Project Management", "description": "Professional leadership for global industries.", "fees": "27000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "Accredited by PMI.", "tag": "Business" }] }, "admissionData": { "requirementsTitle": "Requirements", "howToApplyTitle": "Apply Now", "requirements": [{ "title": "Academic", "description": "Relevant bachelor's degree for PG." }], "howToApply": ["Online application portal."] } },
        { "name": "University of Tasmania (UTAS)", "slug": "university-of-tasmania", "description": "UTAS is Tasmania's only university, offering a close-knit community and exceptional focus on Antarctic and Southern Ocean studies.", "location": "Hobart, TAS", "image": "https://example.com/utas.jpg", "ranking": 300, "qsRanking": "300", "tagline": "Tasmanian by nature, global by design.", "website": "https://www.utas.edu.au", "type": "UNIVERSITY", "fees": "AUD 28,000 - 35,000", "heroData": { "title": "Study in Paradise", "subtitle": "An island university with world-wide impact.", "image": "https://example.com/utas-hero.jpg", "primaryCta": "Find Course", "secondaryCta": "Visit" }, "whySection": { "title": "Why UTAS?", "reasons": [
              { "icon": "map", "title": "Natural Lab", "description": "Tasmania is a living laboratory for environmental science.", "link": "", "linkText": "" }
            ] },
            "coursesData": { "title": "Specializations", "description": "Focus on island and ocean ecology.", "courses": [{ "title": "Master of Information Technology", "description": "Modern software and networking focus.", "fees": "31000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "ACS Accredited program.", "tag": "Tech" }] },
            "admissionData": { "requirementsTitle": "Academic Entry", "howToApplyTitle": "Apply", "requirements": [{ "title": "English", "description": "IELTS 6.0 - 6.5." }], "howToApply": ["Apply online via international office."] } },
        {
          "name": "Medicus College",
          "slug": "medicus-college",
          "description": "Medicus College is a specialized vocational provider focusing on professional health services, nursing support, and leadership management. It provides industry-ready skills through hands-on simulated training.",
          "location": "Sydney, NSW",
          "image": "https://example.com/medicus.jpg",
          "ranking": 0,
          "qsRanking": "N/A",
          "tagline": "Your bridge to a career in healthcare.",
          "website": "https://medicus.edu.au",
          "type": "COLLEGE",
          "fees": "AUD 14,000 - 18,000",
          "heroData": {
            "title": "Practical Healthcare Training",
            "subtitle": "Get certified for the Australian healthcare sector.",
            "image": "https://example.com/medicus-hero.jpg",
            "primaryCta": "View VET Courses",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "Why Medicus?",
            "reasons": [
              { "icon": "activity", "title": "Job Ready", "description": "Training conducted in simulated clinical environments with modern equipment.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Vocational Programs",
            "description": "Fast-track your entry into the workforce.",
            "courses": [
              { "title": "Diploma of Mental Health", "description": "Training to support community mental health services.", "fees": "16000", "duration": "1.5 Years", "semesters": "3", "scope": "National", "details": "Includes 160 hours of practical placement.", "tag": "Health" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Entry Requirements",
            "howToApplyTitle": "Enrollment Process",
            "requirements": [
              { "title": "Language Proficiency", "description": "IELTS 6.0 or equivalent required for enrollment." }
            ],
            "howToApply": ["Submit online expression of interest.", "Attend a pre-enrollment interview."]
          }
        },
        { "name": "Tas College", "slug": "tas-college", "description": "Tas College offers vocational training in business, hospitality, and social services, focusing on providing practical skills for the local Tasmanian economy.", "location": "Hobart, TAS", "image": "https://example.com/tas-college.jpg", "ranking": 0, "qsRanking": "N/A", "tagline": "Practical skills for real life.", "website": "https://tascollege.edu.au", "type": "COLLEGE", "fees": "AUD 12,000 - 15,000", "heroData": { "title": "Vocational Excellence", "subtitle": "Pathway programs designed for student success.", "image": "https://example.com/tas-hero.jpg", "primaryCta": "Courses", "secondaryCta": "Visit" }, "whySection": { "title": "Success Path", "reasons": [{ "icon": "coffee", "title": "Hospitality", "description": "Strong links to the Tasmanian tourism industry.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Diploma Courses", "description": "VET sector focus.", "courses": [{ "title": "Diploma of Hospitality Management", "description": "Leadership roles in culinary and hotel services.", "fees": "14000", "duration": "1 Year", "semesters": "2", "scope": "National", "details": "Includes kitchen practice.", "tag": "Hospitality" }] }, "admissionData": { "requirementsTitle": "VET Entry", "howToApplyTitle": "Enroll", "requirements": [{ "title": "Schooling", "description": "Year 12 completion equivalent." }], "howToApply": ["Apply via college website."] } }
      ]
    },
    {
      "name": "Canada",
      "slug": "canada",
      "description": "Canada is a top-tier destination known for its high-quality public education system and welcoming atmosphere. It offers students unique pathways to transition from their academic studies to professional careers and permanent residency.",
      "tuitionFees": 30000.0,
      "visaInfo": "Students must obtain a Study Permit. Note the 2024 regulations regarding the Provincial Attestation Letter (PAL) and the increased proof-of-funds requirement.",
      "livingCost": 22000.0,
      "currency": "CAD",
      "heroImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      "heroSubtitle": "Innovate and Grow in the Great White North",
      "heroStats": [
        { "label": "Universities", "value": "100+" },
        { "label": "Avg. Tuition", "value": "CAD 18k - 45k" },
        { "label": "PG Work Permit", "value": "Up to 3 Years" }
      ],
      "overview": {
        "title": "The Canadian Advantage",
        "description": [
          "Canadian institutions are globally recognized for excellence in fields like AI, Healthcare, and Sustainable Energy.",
          "The country provides a safe, inclusive, and technologically advanced environment for international students."
        ]
      },
      "details": [
        { "title": "Post-Graduation", "description": "The PGWP program allows students to gain valuable work experience in Canada, often leading to PR opportunities." }
      ],
      "popularCourses": [
        { "title": "IT & Software Engineering", "desc": "Programs aligned with Canada's booming tech hubs in Toronto and Vancouver." }
      ],
      "admissionRequirements": [
        "Letter of Acceptance (LOA)",
        "Provincial Attestation Letter (PAL)",
        "Proof of Funds (CAD 20,635+)",
        "IELTS 6.5 or equivalent"
      ],
      "intakes": [
        { "name": "Fall (Major)", "month": "September" },
        { "name": "Winter", "month": "January" }
      ],
      "scholarships": {
        "description": "Available via Global Affairs Canada and specific university merit entrance awards."
      },
      "universities": [
        {
          "name": "University of Windsor",
          "slug": "university-of-windsor",
          "description": "Located on the busiest border crossing in North America, the University of Windsor is a comprehensive, student-focused institution with strong industry partnerships in engineering and social sciences.",
          "location": "Windsor, Ontario",
          "image": "https://example.com/windsor.jpg",
          "ranking": 700,
          "qsRanking": "700",
          "tagline": "The university at the heart of the region.",
          "website": "https://www.uwindsor.ca",
          "type": "UNIVERSITY",
          "fees": "CAD 28,000 - 38,000",
          "heroData": {
            "title": "Think Globally at Windsor",
            "subtitle": "Cross-border learning opportunities in a vibrant community.",
            "image": "https://example.com/windsor-hero.jpg",
            "primaryCta": "View Programs",
            "secondaryCta": "Visit UWindsor"
          },
          "whySection": {
            "title": "Why Windsor?",
            "reasons": [
              { "icon": "truck", "title": "Auto Hub", "description": "Close ties with the automotive industry provide unique engineering internships.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Major Programs",
            "description": "Research-led and industry-focused.",
            "courses": [
              { "title": "M.Eng in Mechanical Engineering", "description": "Specialized training in automotive and manufacturing systems.", "fees": "32000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "High placement rate in Ontario's industrial sector.", "tag": "STEM" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Entry Paths",
            "howToApplyTitle": "The Process",
            "requirements": [
              { "title": "Academic Background", "description": "Minimum B average for undergraduate entry." }
            ],
            "howToApply": ["Apply through the OUAC or direct portal.", "Submit LOA request once academic criteria met."]
          }
        },
        { "name": "Capilano University", "slug": "capilano-university", "description": "Capilano University is a teaching-focused institution in North Vancouver, famous for its small class sizes and excellent programs in the creative arts and business.", "location": "Vancouver, BC", "image": "https://example.com/capilano.jpg", "ranking": 1000, "qsRanking": "N/A", "tagline": "Teaching-led excellence.", "website": "https://www.capilanou.ca", "type": "UNIVERSITY", "fees": "CAD 22,000 - 28,000", "heroData": { "title": "Creativity Unlocked", "subtitle": "Learn in one of the most beautiful settings in Canada.", "image": "https://example.com/cap-hero.jpg", "primaryCta": "Explore", "secondaryCta": "Visit" }, "whySection": { "title": "Focus on Teaching", "reasons": [{ "icon": "palette", "title": "Arts Excellence", "description": "One of Canada's best film and animation schools.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Degree Programs", "description": "Practical and hands-on.", "courses": [{ "title": "Bachelor of Motion Picture Arts", "description": "Industry-standard training for the film sector.", "fees": "25000", "duration": "4 Years", "semesters": "8", "scope": "Global", "details": "Includes film production studio time.", "tag": "Creative" }] }, "admissionData": { "requirementsTitle": "Academic", "howToApplyTitle": "Apply", "requirements": [{ "title": "Portfolio", "description": "Required for arts and creative courses." }], "howToApply": ["Apply through EducationPlannerBC."] } },
        { "name": "Seneca College", "slug": "seneca-college", "description": "Seneca is a leader in post-secondary education, offering polytechnic programs that combine academic rigor with practical, hands-on training.", "location": "Toronto, ON", "image": "https://example.com/seneca.jpg", "ranking": 0, "qsRanking": "N/A", "tagline": "The future is polytechnic.", "website": "https://www.senecapolytechnic.ca", "type": "COLLEGE", "fees": "CAD 18,000 - 24,000", "heroData": { "title": "Career Focused", "subtitle": "Degrees and diplomas that lead straight to the workforce.", "image": "https://example.com/seneca-hero.jpg", "primaryCta": "Programs", "secondaryCta": "Visit" }, "whySection": { "title": "The Seneca Edge", "reasons": [{ "icon": "briefcase", "title": "Co-op", "description": "Hundreds of programs offer paid work terms.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Applied Arts & Tech", "description": "Professional certifications.", "courses": [{ "title": "Business Administration", "description": "Focused on global trade and management.", "fees": "19000", "duration": "3 Years", "semesters": "6", "scope": "Global", "details": "Includes optional co-op term.", "tag": "Business" }] }, "admissionData": { "requirementsTitle": "Standards", "howToApplyTitle": "Enroll", "requirements": [{ "title": "GPA", "description": "High school graduation with core math/English." }], "howToApply": ["Apply via Seneca International portal."] } }
      ]
    },
    {
      "name": "United States",
      "slug": "usa",
      "description": "The United States is the global leader in higher education, hosting more world-class universities than any other country. Its academic culture emphasizes innovation, critical thinking, and extreme flexibility in course selection.",
      "tuitionFees": 45000.0,
      "visaInfo": "Students typically require an F-1 Student Visa. You will need a Form I-20 issued by your school and must register in the SEVIS database.",
      "livingCost": 20000.0,
      "currency": "USD",
      "heroImage": "https://images.unsplash.com/photo-1550721884-7ab0567f3941",
      "heroSubtitle": "Define Your Future at the World's Best Institutions",
      "heroStats": [
        { "label": "Top 100 Unis", "value": "27" },
        { "label": "Avg. Tuition", "value": "USD 20k - 65k" },
        { "label": "Work (OPT)", "value": "1 - 3 Years" }
      ],
      "overview": {
        "title": "Study in the USA",
        "description": [
          "The U.S. offers a massive range of options, from research-heavy universities to small liberal arts colleges, allowing students to tailor their education to their specific career goals.",
          "International students gain access to world-leading technology and a massive alumni network that spans the globe."
        ]
      },
      "details": [
        { "title": "Research Hub", "description": "Home to the world's most innovative tech companies and research labs, providing unparalleled networking opportunities." }
      ],
      "popularCourses": [
        { "title": "STEM Programs", "desc": "Science, Technology, Engineering, and Math degrees offer extended work rights in the U.S." }
      ],
      "admissionRequirements": [
        "SAT/ACT (Optional for many)",
        "TOEFL 80+ or IELTS 6.5+",
        "High School Transcripts",
        "Financial Certification (Bank Statement)"
      ],
      "intakes": [
        { "name": "Fall (Main)", "month": "August" },
        { "name": "Spring", "month": "January" }
      ],
      "scholarships": {
        "description": "Need-based and merit-based institutional aid is widely available for high-achieving international students."
      },
      "universities": [
        {
          "name": "University of North Texas (UNT)",
          "slug": "university-of-north-texas",
          "description": "UNT is a top-tier public research university located in the Dallas-Fort Worth metroplex. It is highly regarded for its programs in music, engineering, and the arts.",
          "location": "Denton, Texas",
          "image": "https://example.com/unt.jpg",
          "ranking": 250,
          "qsRanking": "N/A",
          "tagline": "A green light to greatness.",
          "website": "https://www.unt.edu",
          "type": "UNIVERSITY",
          "fees": "USD 25,000 - 35,000",
          "heroData": {
            "title": "Discover Your Potential at UNT",
            "subtitle": "Join a creative community of over 44,000 students.",
            "image": "https://example.com/unt-hero.jpg",
            "primaryCta": "Explore Majors",
            "secondaryCta": "Visit UNT"
          },
          "whySection": {
            "title": "The UNT Advantage",
            "reasons": [
              { "icon": "music", "title": "Creative Excellence", "description": "Home to one of the most prestigious jazz and music programs in the world.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Top Degrees",
            "description": "Accredited and research-intensive.",
            "courses": [
              { "title": "MS in Computer Science", "description": "Focused on artificial intelligence and data mining.", "fees": "28000", "duration": "2 Years", "semesters": "4", "scope": "Global", "details": "STEM designated for OPT extension.", "tag": "STEM" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Admissions",
            "howToApplyTitle": "The UNT Path",
            "requirements": [
              { "title": "GPA", "description": "Minimum 3.0 GPA for competitive admission." }
            ],
            "howToApply": ["Apply via ApplyTexas or the Common App.", "Submit official transcripts and test scores."]
          }
        },
        { "name": "Trine University", "slug": "trine-university", "description": "Trine University is a private institution known for its high job placement rate and career-focused engineering and business programs.", "location": "Angola, Indiana", "image": "https://example.com/trine.jpg", "ranking": 100, "qsRanking": "N/A", "tagline": "Engineered for success.", "website": "https://www.trine.edu", "type": "UNIVERSITY", "fees": "USD 32,000 - 38,000", "heroData": { "title": "Success Guaranteed", "subtitle": "99% of our graduates are employed or in grad school within 6 months.", "image": "https://example.com/trine-hero.jpg", "primaryCta": "Search", "secondaryCta": "Visit" }, "whySection": { "title": "Career Impact", "reasons": [{ "icon": "award", "title": "Placement", "description": "Exceptional career services that connect you with top firms.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Engineering & Business", "description": "Hands-on learning.", "courses": [{ "title": "BS in Civil Engineering", "description": "Professional engineering training.", "fees": "34000", "duration": "4 Years", "semesters": "8", "scope": "Global", "details": "ABET accredited program.", "tag": "Engineering" }] }, "admissionData": { "requirementsTitle": "Requirements", "howToApplyTitle": "Apply", "requirements": [{ "title": "English", "description": "TOEFL 71 or IELTS 6.0." }], "howToApply": ["Apply online via Trine portal."] } }
      ]
    },
    {
      "name": "United Kingdom",
      "slug": "uk",
      "description": "The UK offers a world-renowned education system with a focus on deep academic specialization. Degrees are typically shorter than in other countries, providing high value for money and a faster entry into the professional world.",
      "tuitionFees": 25000.0,
      "visaInfo": "Students must apply for a Student Visa. You require a CAS (Confirmation of Acceptance for Studies) and must meet the 70-point requirement of the points-based system.",
      "livingCost": 15000.0,
      "currency": "GBP",
      "heroImage": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      "heroSubtitle": "Study at the Heart of Global Academic Tradition",
      "heroStats": [
        { "label": "Top 10 Unis", "value": "4" },
        { "label": "Avg. Tuition", "value": "GBP 15k - 35k" },
        { "label": "Graduate Route", "value": "2 - 3 Years" }
      ],
      "overview": {
        "title": "Why the UK?",
        "description": [
          "UK universities lead the world in research output and citations. The country's heritage institutions offer a unique academic environment combined with modern, high-tech facilities.",
          "The Graduate Route visa allows students to work in the UK for two years (three for PhD) without sponsorship, making it an excellent career jumpstart."
        ]
      },
      "details": [
        { "title": "Efficiency", "description": "Complete a Master's degree in just 12 months, saving significantly on living costs compared to 2-year programs." }
      ],
      "popularCourses": [
        { "title": "Law & International Relations", "desc": "Rooted in historical precedent and global leadership, these programs are among the world's most prestigious." }
      ],
      "admissionRequirements": [
        "CAS (Confirmation of Acceptance)",
        "IELTS for UKVI (6.0 - 7.0)",
        "Academic References",
        "Personal Statement"
      ],
      "intakes": [
        { "name": "Autumn (Major)", "month": "September" },
        { "name": "Winter", "month": "January" }
      ],
      "scholarships": {
        "description": "Chevening Scholarships and Commonwealth Scholarships offer full funding for exceptional international leaders."
      },
      "universities": [
        {
          "name": "University of Plymouth",
          "slug": "university-of-plymouth",
          "description": "The University of Plymouth is a modern, research-intensive university on England's South Coast. It is world-renowned for its expertise in marine science and environmental research.",
          "location": "Plymouth, Devon",
          "image": "https://example.com/plymouth.jpg",
          "ranking": 401,
          "qsRanking": "601-610",
          "tagline": "Exploring the world, transforming lives.",
          "website": "https://www.plymouth.ac.uk",
          "type": "UNIVERSITY",
          "fees": "GBP 16,000 - 22,000",
          "heroData": {
            "title": "The University by the Sea",
            "subtitle": "Join a top UK university for social and environmental responsibility.",
            "image": "https://example.com/plymouth-hero.jpg",
            "primaryCta": "Find a Course",
            "secondaryCta": "Visit Website"
          },
          "whySection": {
            "title": "Why Plymouth?",
            "reasons": [
              { "icon": "anchor", "title": "Marine Research", "description": "Access to advanced diving facilities and research vessels.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Leading Programs",
            "description": "Built for the global green economy.",
            "courses": [
              { "title": "MSc Marine Biology", "description": "Specialized research into ocean ecosystems and conservation.", "fees": "18000", "duration": "1 Year", "semesters": "3", "scope": "Global", "details": "Field research based in the Plymouth Sound.", "tag": "Science" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Entry Paths",
            "howToApplyTitle": "The UK Application",
            "requirements": [
              { "title": "IELTS", "description": "Overall score of 6.5 with no band less than 6.0." }
            ],
            "howToApply": ["Apply through UCAS (Undergraduate) or directly (Postgraduate).", "Wait for CAS after fulfilling conditions."]
          }
        },
        { "name": "London South Bank University (LSBU)", "slug": "london-south-bank-university", "description": "LSBU is a leading provider of vocational and professional education in the heart of London, with strong ties to industry and a focus on employability.", "location": "London", "image": "https://example.com/lsbu.jpg", "ranking": 800, "qsRanking": "800", "tagline": "Become what you want to be.", "website": "https://www.lsbu.ac.uk", "type": "UNIVERSITY", "fees": "GBP 15,500 - 18,500", "heroData": { "title": "London Centric", "subtitle": "Study at the heart of the world's most dynamic city.", "image": "https://example.com/lsbu-hero.jpg", "primaryCta": "Explore", "secondaryCta": "Visit" }, "whySection": { "title": "The LSBU Edge", "reasons": [{ "icon": "map-pin", "title": "London Location", "description": "Minutes away from the world's top financial and creative hubs.", "link": "", "linkText": "" }] }, "coursesData": { "title": "Core Degrees", "description": "Industry accredited.", "courses": [{ "title": "BSc Data Science", "description": "Practical coding and data analysis.", "fees": "16500", "duration": "3 Years", "semesters": "6", "scope": "Global", "details": "Includes London tech hub internships.", "tag": "Tech" }] }, "admissionData": { "requirementsTitle": "Academic", "howToApplyTitle": "Join LSBU", "requirements": [{ "title": "Secondary Education", "description": "Successful high school completion with good math scores." }], "howToApply": ["Apply via UCAS or agent."] } }
      ]
    },
    {
      "name": "New Zealand",
      "slug": "new-zealand",
      "description": "New Zealand offers a stunning natural environment alongside a high-quality education system. It is known for its practical, hands-on learning and focus on student well-being and innovation.",
      "tuitionFees": 30000.0,
      "visaInfo": "A Fee Paying Student Visa is required. You must prove you have enough funds (NZD 20,000 per year) and have paid your tuition fees for the first year.",
      "livingCost": 22000.0,
      "currency": "NZD",
      "heroImage": "https://images.unsplash.com/photo-1469521669194-b78be4bd242d",
      "heroSubtitle": "Excellence in the Heart of Aotearoa",
      "heroStats": [
        { "label": "Global Rank", "value": "Top 3%" },
        { "label": "Avg. Tuition", "value": "NZD 22k - 45k" },
        { "label": "Post-Study Work", "value": "1 - 3 Years" }
      ],
      "overview": {
        "title": "Study in New Zealand",
        "description": [
          "All eight of New Zealand's universities are ranked in the top 3% worldwide by QS Rankings. The country offers a world-class education focused on critical thinking and independent study.",
          "New Zealand's code of practice for international students is one of the strongest in the world, ensuring high-quality pastoral care and support."
        ]
      },
      "details": [
        { "title": "Work Rights", "description": "Students can work part-time (20 hours/week) during their studies and full-time during breaks." }
      ],
      "popularCourses": [
        { "title": "Agriculture & Agribusiness", "desc": "World-leading research in sustainable farming and food production technologies." }
      ],
      "admissionRequirements": [
        "IELTS 6.0 - 6.5",
        "Academic records (Higher Secondary)",
        "Statement of Purpose",
        "Police and Medical Certificates"
      ],
      "intakes": [
        { "name": "Semester 1", "month": "February" },
        { "name": "Semester 2", "month": "July" }
      ],
      "scholarships": {
        "description": "The New Zealand Excellence Awards (NZEA) are available to exceptional students from various regions."
      },
      "universities": [
        {
          "name": "Massey University",
          "slug": "massey-university",
          "description": "Massey is a research-intensive university with a focus on innovation and applied learning. It has campuses across three major cities and is New Zealand's leader in distance education.",
          "location": "Auckland, NZ",
          "image": "https://example.com/massey.jpg",
          "ranking": 239,
          "qsRanking": "239",
          "tagline": "The university of New Zealand.",
          "website": "https://www.massey.ac.nz",
          "type": "UNIVERSITY",
          "fees": "NZD 32,000 - 46,000",
          "heroData": {
            "title": "Shape Your World at Massey",
            "subtitle": "Join a world-class university with a history of innovation.",
            "image": "https://example.com/massey-hero.jpg",
            "primaryCta": "Explore Programs",
            "secondaryCta": "Visit Massey"
          },
          "whySection": {
            "title": "The Massey Experience",
            "reasons": [
              { "icon": "plane", "title": "Aviation", "description": "Home to the only professional school of aviation in New Zealand.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Academic Offerings",
            "description": "Diverse and highly ranked.",
            "courses": [
              { "title": "Bachelor of Aviation", "description": "Integrated flight training and aviation management.", "fees": "45000", "duration": "3 Years", "semesters": "6", "scope": "Global", "details": "Includes commercial pilot license theory.", "tag": "Specialized" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Entry Paths",
            "howToApplyTitle": "Enroll at Massey",
            "requirements": [
              { "title": "GPA", "description": "University Entrance (UE) standard required for UG programs." }
            ],
            "howToApply": ["Apply online via the international portal.", "Submit certified copies of all academic documents."]
          }
        },
        { "name": "Ara Institute of Canterbury", "slug": "ara-institute", "description": "Ara is a government-funded polytechnic in the South Island, offering vocational training that is deeply integrated with local industry.", "location": "Christchurch, NZ", "image": "https://example.com/ara.jpg", "ranking": 0, "qsRanking": "N/A", "tagline": "Real world learning.", "website": "https://www.ara.ac.nz", "type": "COLLEGE", "fees": "NZD 18,000 - 25,000", "heroData": { "title": "Practical Learning", "subtitle": "Get the skills you need for the workforce.", "image": "https://example.com/ara-hero.jpg", "primaryCta": "Courses", "secondaryCta": "Visit" }, "whySection": { "title": "Why Ara?", "reasons": [{ "icon": "tool", "title": "Industry Focus", "description": "Courses designed with employers to ensure job readiness.", "link": "", "linkText": "" }] }, "coursesData": { "title": "VET Programs", "description": "Practical and industry-aligned.", "courses": [{ "title": "Diploma in Construction", "description": "Project management for the building industry.", "fees": "22000", "duration": "2 Years", "semesters": "4", "scope": "National", "details": "Accredited for quantity surveying.", "tag": "VET" }] }, "admissionData": { "requirementsTitle": "Academic", "howToApplyTitle": "Join Ara", "requirements": [{ "title": "Language", "description": "IELTS 6.0 with no band less than 5.5." }], "howToApply": ["Apply online through the Ara portal."] } }
      ]
    },
    {
      "name": "Denmark",
      "slug": "denmark",
      "description": "Denmark is a global leader in sustainability and innovation. Danish education focuses on collaborative, problem-based learning that prepares students to solve real-world challenges in a professional environment.",
      "tuitionFees": 12000.0,
      "visaInfo": "Non-EU students must apply for an ST1 Residence Permit. You will need proof of tuition payment and sufficient funds for living expenses (approx. EUR 1,000/month).",
      "livingCost": 14000.0,
      "currency": "EUR",
      "heroImage": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
      "heroSubtitle": "Lead the Change in the Green Capital of Europe",
      "heroStats": [
        { "label": "Happiness Rank", "value": "#2 Worldwide" },
        { "label": "Avg. Tuition", "value": "EUR 8k - 16k" },
        { "label": "Work Search", "value": "Up to 3 Years" }
      ],
      "overview": {
        "title": "Why Study in Denmark?",
        "description": [
          "Danish institutions offer a unique teaching style where students work in teams to solve complex problems, fostering critical thinking and communication skills.",
          "Denmark is one of the world's most egalitarian and safe societies, with an exceptionally high standard of living."
        ]
      },
      "details": [
        { "title": "Innovation", "description": "Denmark is at the forefront of green technology, design, and architecture, providing students with cutting-edge insights." }
      ],
      "popularCourses": [
        { "title": "Sustainable Design", "desc": "Programs focusing on renewable energy, urban planning, and eco-friendly product design." }
      ],
      "admissionRequirements": [
        "English B2/C1 level (IELTS 6.5+)",
        "Recognized Secondary Certificate",
        "Motivational Letter",
        "Passport & Proof of Funds"
      ],
      "intakes": [
        { "name": "Autumn Intake", "month": "September" },
        { "name": "Spring Intake", "month": "February" }
      ],
      "scholarships": {
        "description": "Danish Government Scholarships for highly talented non-EU/EEA students are available for specific degree programs."
      },
      "universities": [
        {
          "name": "International Business Academy (IBA)",
          "slug": "international-business-academy",
          "description": "IBA Kolding offers world-class business and technology programs in collaboration with major UK and Danish partners. It is focused on international student success and professional networking.",
          "location": "Kolding, Denmark",
          "image": "https://example.com/iba.jpg",
          "ranking": 0,
          "qsRanking": "N/A",
          "tagline": "A world of opportunities.",
          "website": "https://www.iba.dk",
          "type": "COLLEGE",
          "fees": "EUR 8,000 - 12,000",
          "heroData": {
            "title": "Start Your Business Journey",
            "subtitle": "Join a global academy in the heart of Europe.",
            "image": "https://example.com/iba-hero.jpg",
            "primaryCta": "View Programs",
            "secondaryCta": "Visit IBA"
          },
          "whySection": {
            "title": "The IBA Advantage",
            "reasons": [
              { "icon": "briefcase", "title": "Industry Connection", "description": "Direct access to top European business networks and internships.", "link": "", "linkText": "" }
            ]
          },
          "coursesData": {
            "title": "Core Programs",
            "description": "European-standard professional training.",
            "courses": [
              { "title": "BSc International Business", "description": "Validated by UK partners, focusing on cross-cultural management.", "fees": "10000", "duration": "3 Years", "semesters": "6", "scope": "International", "details": "Includes modules on global trade and ethics.", "tag": "Business" }
            ]
          },
          "admissionData": {
            "requirementsTitle": "Path to Denmark",
            "howToApplyTitle": "The IBA Application",
            "requirements": [
              { "title": "Academic Level", "description": "Successful completion of high school with mathematics focus." }
            ],
            "howToApply": ["Apply via Optagelse.dk (for undergraduate).", "Upload English proficiency and motivation letter."]
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
