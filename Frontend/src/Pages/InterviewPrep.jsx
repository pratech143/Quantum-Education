import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lightbulb, HelpCircle, GraduationCap, DollarSign, MapPin, Target, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import heroImg from '../assets/interview-hero.png';

const InterviewPrep = () => {
    const [openSection, setOpenSection] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tips = [
        "Prepare for the interview questions in advance.",
        "Get a copy of your all documents with you for the interview.",
        "Dress appropriately (formally).",
        "Be on time for the interview.",
        "Be courteous, friendly and polite throughout the interview.",
        "Be confident as you the best about yourself, where and why you have made applications.",
        "Give brief and clear answers. If not sure, then you can ask the question again. Be thoughtful in your answers.",
        "Go through the website and handbook of your university carefully.",
        "Know about your course contents thoroughly including course duration, fee, commencement & end date, credits points etc.",
        "You should be clear about your future plans after completing the course.",
        "Be ready for any strange questions and don’t get nervous when you have them. They are meant to test your intentions, skills or IQ.",
        "Interview may take 20-30 minutes or more, so be comfortable with it.",
        "Enjoy the interview!"
    ];

    const questionSections = [
        {
            title: "1. Introductory questions",
            icon: <HelpCircle className="w-5 h-5" />,
            questions: [
                { q: "How are you doing?", a: "This Question to make you comfortable." },
                { q: "Have you ever been to the respective country before?", a: "This is for the visa officer’s records – If yes then it is advisable to remember the date of last arrival and departure from the country of visa application." }
            ]
        },
        {
            title: "2. Intentions & Motivation",
            icon: <Target className="w-5 h-5" />,
            questions: [
                { q: "Why do you want to study in the respective country?", a: "It is to check your intention to go to the respective country." },
                { q: "Why did you select this particular university?", a: "It is to check you have done your research about your education and serious about it." },
                { q: "Which are the other universities you have applied to?", a: "It is to check whether you are really serious about your education and have planned well." }
            ]
        },
        {
            title: "3. Subject & Course",
            icon: <GraduationCap className="w-5 h-5" />,
            questions: [
                { q: "For which course you are going?", a: "It is to check that you know about what you have applied for." },
                { q: "Why did you choose this course?", a: "It is to check that you have chosen your course by yourself." },
                { q: "Why don’t you do this course here in Nepal?", a: "It is to know whether this course is available here and which differences motivate you to visit the respective country – bring out the difference between the courses offered in Nepal and abroad; State the difference in terms of theoretical and practical education." },
                { q: "What are the course commencement and completion dates?", a: "Remember the exact start and end date of the course." }
            ]
        },
        {
            title: "4. Funding & Finances",
            icon: <DollarSign className="w-5 h-5" />,
            questions: [
                { q: "How are you going to fund your education?", a: "It is to check you are aware of your funds and how you will manage your finances during your course duration." },
                { q: "Who is sponsoring your education?", a: "Mention the name of your sponsors. If they are your parents then mention that your father and/or mother are supporting you as per the financial documents." },
                { q: "What does s/he (mother/father) do?", a: "Visa officer basically wants to verify the financial capability of the sponsors. Go through the tax documents and bank statements." },
                { q: "What savings does your family have?", a: "Show your proofs and be sure that you know your financial documents." },
                { q: "What is your father’s annual income?", a: "To get the idea if your father’s annual income is sufficient enough to meet your expenses." },
                { q: "How many brothers and sisters do you have?", a: "To evaluate the balance of income and expenses of the family." },
                { q: "Do you have enough funds while you are there?", a: "Give a confident answer stating that you meet the educational expenses." }
            ]
        },
        {
            title: "5. Academic Qualifications",
            icon: <Briefcase className="w-5 h-5" />,
            questions: [
                { q: "What is your undergraduate GPA?", a: "Convert your percentage in GPA and remember it exactly." },
                { q: "Can you show me your degree?", a: "Only show the document that has been asked." },
                { q: "Mention some professors’ name?", a: "Give names of professors you know and explain your relation with them." },
                { q: "Show me your GRE and TOEFL Score?", a: "Keep your documents in order and remember them clearly." }
            ]
        },
        {
            title: "6. Achievements & Background",
            icon: <ShieldCheck className="w-5 h-5" />,
            questions: [
                { q: "Tell me something about your past?", a: "Mention what you were doing after your last school till today. Cover your achievements, skills and sincerity." },
                { q: "From where did you do your under graduation?", a: "Mention the name of your university and course. If the university has any high ranking then mention that too." },
                { q: "Are you getting any school waiver?", a: "If you have got any tuition fee waiver or assistantship then mention it." },
                { q: "Why do you think the university is giving scholarship to you?", a: "Scholarships are awarded for good academic records, GRE or TOEFL scores." }
            ]
        },
        {
            title: "7. Awareness & Arrangements",
            icon: <MapPin className="w-5 h-5" />,
            questions: [
                { q: "Where do you plan to stay in the respective country?", a: "Mention the address and arrangements for your education abroad." },
                { q: "Do you have any relative in the respective country?", a: "Be truthful at this instance." },
                { q: "Is your brother/sister enjoying there?", a: "Never answer in a way that makes them believe you plan to settle or overstay." },
                { q: "What do you plan to do during your vacations?", a: "Show your ties up with your family and country. Don’t show intention for work." }
            ]
        },
        {
            title: "8. Future Plans",
            icon: <Target className="w-5 h-5" />,
            questions: [
                { q: "What are your future plans? Do you intend to stay?", a: "Mention your strong ties to the home country and excellent opportunities available in Nepal." },
                { q: "Do you plan to work there?", a: "Convince the officer that your intention is not to stay permanently. You have liabilities at home." },
                { q: "What’s the difference you can make by doing your course?", a: "Mention better job opportunities and future prospects in your home country." }
            ]
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section with Image */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={heroImg} 
                        alt="Visa Interview" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
                </div>
                <div className="container relative mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-primary-container text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Expert Interview Guide
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                            Master Your <br/>
                            <span className="text-primary-container">Visa Interview</span>
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-medium">
                            The final step to your international education. Prepare with confidence using our comprehensive checklist and interview tips.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Card */}
            <section className="-mt-16 container mx-auto px-6 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">Visa Interview Checklist</h2>
                            <div className="space-y-4 text-on-surface-variant leading-relaxed">
                                <p>
                                    A Visa interview is an important step prior to the final confirmation of student visa approval for countries including Australia, Canada, Germany, UK and USA.
                                </p>
                                <p>
                                    The officer is a trained professional seeking to understand your real interests. With the right preparation, you can approach this meeting as the final door to your destination.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary-container/5 rounded-2xl p-8 border border-primary-container/10">
                            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-primary" />
                                Preparation Strategy
                            </h3>
                            <p className="text-sm text-primary/80 italic leading-relaxed">
                                "The key is to align your verbal answers with your documentation. Consistency, clarity, and confidence are your best tools in the interview room."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-24 bg-surface-container-low mt-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                <h2 className="text-3xl font-black text-primary mb-6 leading-tight">Essential <br/><span className="text-primary-container">Interview Tips</span></h2>
                                <p className="text-on-surface-variant mb-8">Professional guidelines to ensure your presentation and behavior align with embassy expectations.</p>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <div className="flex items-center gap-4 text-primary font-bold">
                                        <ShieldCheck className="w-10 h-10" />
                                        <span>Approval Checklist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {tips.map((tip, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                                        <span className="flex-shrink-0 w-6 h-6 bg-primary-container text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                                            {idx + 1}
                                        </span>
                                        <p className="text-sm text-on-surface-variant leading-snug">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accordion Questions Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-6">Preparatory Questions</h2>
                        <p className="text-on-surface-variant">Click on a category to explore common questions asked by embassy officials.</p>
                    </div>

                    <div className="space-y-4">
                        {questionSections.map((section, sIdx) => {
                            const isOpen = openSection === sIdx;
                            return (
                                <div key={sIdx} className={`bg-white rounded-xl overflow-hidden border ${isOpen ? 'border-primary-container ring-1 ring-primary-container/20' : 'border-slate-100'} transition-all shadow-sm`}>
                                    <button 
                                        onClick={() => setOpenSection(isOpen ? -1 : sIdx)}
                                        className={`w-full px-8 py-5 flex items-center justify-between transition-colors ${isOpen ? 'bg-primary/5' : 'hover:bg-slate-50'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-primary'}`}>
                                                {section.icon}
                                            </div>
                                            <h3 className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-on-surface'}`}>{section.title}</h3>
                                        </div>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-on-surface-variant" />}
                                    </button>
                                    
                                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                        <div className="p-8 pt-2 space-y-8 border-t border-slate-50">
                                            {section.questions.map((q, qIdx) => (
                                                <div key={qIdx} className="space-y-3">
                                                    <p className="font-bold text-primary flex items-start gap-3">
                                                        <span className="text-primary-container">Q:</span>
                                                        {q.q}
                                                    </p>
                                                    <div className="pl-7 border-l-2 border-slate-100 italic text-sm text-on-surface-variant leading-relaxed">
                                                        <p>{q.a}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-20 p-10 bg-primary rounded-3xl text-center text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 italic">"Success depends upon previous preparation."</h3>
                            <p className="opacity-80 max-w-lg mx-auto">We wish you the best for your student visa interview. Our experts are ready to conduct mock sessions with you!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InterviewPrep;
