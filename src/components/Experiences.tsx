import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useState } from 'react';
import closeLight from '../assets/close-black.png';
import closeDark from '../assets/close-white.png';

interface ExperienceCard {
    date: string;
    title: string;
    subtitle: string;
    organization: string;
    badge?: string;
    description?: string;
}

export default function Experiences() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const [selectedExperience, setSelectedExperience] = useState<ExperienceCard | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const experiencesData: ExperienceCard[] = [
        {
            date: "October 2025 - January 2026",
            title: "Intern, IT Partnership",
            subtitle: "",
            organization: "iFAST Global Hub AI Sdn Bhd",
            description: "I completed my internship as an <b>IT Partnership Intern</b> at <i><b>iFAST Global Hub AI Sdn Bhd</b></i>, where I was:<br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>responsible for performing monthly software maintenance and system updates to ensure application stability and performance</li><li style='margin-top: 0.5rem;'>contributed to the modernization of the mobile application user interface by revamping the design from a web-view rendering approach to a fully responsive, mobile-native layout, significantly improving usability and user experience</li><li style='margin-top: 0.5rem;'>worked closely with stakeholders to translate business and user requirements into clear, actionable mobile application designs and system specifications, strengthening my ability to bridge technical development with real-world business needs</li></ul><br>Alongside my internship, I also attended a <b>tutorial course on advanced Flutter fundamentals via <i>Udemy</i></b>, further enhancing my mobile development skills and deepening my understanding of modern application architectures."
        },
        {
            date: "September 2025",
            title: "Auto Count-FICT FYP Competition 2025",
            subtitle: "",
            organization: "Universiti Tunku Abdul Rahman (UTAR)",
            badge: "📌 Top 19/50 Shortlisted",
            description: "<span style='display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d21e69; color: white;'>🎯 Top 19/50 Shortlisted</span><br><br>I participated in the <b>Auto Count–FICT Final Year Project Competition 2025</b> held at <i>Universiti Tunku Abdul Rahman (Kampar Campus)</i>, where my project <span style='font-weight: bold; color: #d21e69; font-style: italic;'>“Tuitionify – Smart Management System for Tuition Centre Operations”</span> was shortlisted among the <b>Top 19 out of 50 projects</b>. <br><br>Developed as my Final Year Project using <i>Dart</i>, <i>Python</i>, and <i>JavaScript</i> with the <i>Flutter</i> framework, <i>Tuitionify</i> is a mobile application: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>designed to streamline and digitalize tuition centre operations</li><li style='margin-top: 0.5rem;'>integrated facial recognition technology to support biometric-based class attendance tracking</li><li style='margin-top: 0.5rem;'>enhanced communication and transparency between parents and tutors, improving operational efficiency and user experience for educational management</li></ul>"
        },
        {
            date: "March 2025",
            title: "Varsity Hackathon 2025",
            subtitle: "",
            organization: "Universiti Sains Malaysia (USM)",
            description: "I participated in <b>Varsity Hackathon 2025</b> hosted by <i>Universiti Sains Malaysia (USM)</i>, where my team developed <span style='font-weight: bold; color: #d21e69;'><i>VCare</i>, an AI-powered healthcare mobile application</span> aimed at supporting social-impact communities. <br><br>Built using <i>Dart</i> and <i>Python</i> with the <i>Flutter</i> framework, <i>VCare</i> was: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>designed to provide real-time medical assistance through the integration of AI chatbots, AI-based recommendations, and AI image-to-text diagnostics</li><li style='margin-top: 0.5rem;'>demonstrated how artificial intelligence can be applied in mobile applications to deliver accessible healthcare support, while strengthening my skills in cross-functional teamwork, rapid prototyping, and AI-driven mobile development</li></ul>"
        },
        {
            date: "March 2025",
            title: "EthUprising Hackathon 2025",
            subtitle: "",
            organization: "Asia Pacific University (APU)",
            description: "As a member of <i>Team Roti Telur</i> during my second hackathon, I played a key role in developing <span style='font-weight: bold; color: #d21e69;'><i>DonorChain</i>, a groundbreaking blockchain application</span> designed to revolutionize fund management and support for social impact organizations. <br><br>By leveraging technologies such as smart contracts and a decentralized indexing and querying protocol, DonorChain enables core functions, including: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>Fund transfer and withdrawal</li><li style='margin-top: 0.5rem;'>Real-time donation tracking</li><li style='margin-top: 0.5rem;'>Wallet integration</li></ul><br>This project aligns with SDG 3 (good health and well-being), SDG 10 (reduced inequalities), SDG 11 (sustainable cities and communities), and SDG 17 (partnerships for the goals), driving transparency and efficiency in social impact initiatives."
        },
        {
            date: "July 2024",
            title: "Bridg3 Hackathon 2024",
            subtitle: "",
            organization: "Growth Charger, Malaysia Blockchain Week 2024",
            badge: "🥉 2nd Runner Up",
            description: "<span style='display: inline-block; margin-bottom: 0.25rem; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d21e69; color: white;'>🥉 2nd Runner Up</span> <span style='display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d21e69; color: white;'>🎯 Top 10 Finalists</span><br><br>During my first hackathon as part of <i>Team Roti Canai</i>, I contributed to the development of <span style='font-weight: bold; color: #d21e69;'><i>CareChain</i>, a groundbreaking blockchain application</span> aimed at: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>revolutionizing fund management</li><li style='margin-top: 0.5rem;'>support for social impact organizations</li></ul><br>Besides, by harnessing technologies such as smart contracts and distributed ledgers, <i>CareChain</i> aligns with SDG 3 (good health and well-being), SDG 10 (reduced inequalities), SDG 11 (sustainable cities and communities), and SDG 17 (partnerships for the goals), delivering innovative solutions to enhance transparency and efficiency in social impact initiatives."
        },
        {
            date: "July 2024",
            title: "Blockchain Club, UTAR",
            subtitle: "Vice Chairperson 2024/2025",
            organization: "Universiti Tunku Abdul Rahman (UTAR)",
            description: "As a <b>Vice Chairperson</b> and <b>active Member</b> of the Blockchain Club at <i>Universiti Tunku Abdul Rahman (UTAR)</i>, I played a key role in: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>leading the club toward achieving its goals while fostering growth and innovation in blockchain technology</li><li style='margin-top: 0.5rem;'>making crucial strategic decisions that shaped the club’s direction</li><li style='margin-top: 0.5rem;'>supported the planning and execution of activities</li><li style='margin-top: 0.5rem;'>encouraged member engagement in emerging blockchain trends</li></ul><br>Through this role, I strengthened my leadership, decision-making, and teamwork skills while contributing to a vibrant technical community."
        },
        {
            date: "October 2023",
            title: "International Science and Technology Innovation Camp",
            subtitle: "",
            organization: "Beijing University of Chemical Technology (BUCT)",
            description: "I participated in the <b>International Science and Technology Innovation Camp</b> hosted by <i>Beijing University of Chemical Technology (BUCT)</i> in Beijing. <br><br>This two-week program brought together students from around the world for a dynamic blend of scientific exploration and cultural exchange, allowing me to: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>collaborate with international peers</li><li style='margin-top: 0.5rem;'>broaden my global perspective</li><li style='margin-top: 0.5rem;'>deepen my appreciation for innovation in science and technology within a multicultural environment</li></ul>"
        },
        {
            date: "July 2023",
            title: "Computer Society, UTAR",
            subtitle: "Secretary 2023/2024",
            organization: "Universiti Tunku Abdul Rahman (UTAR)",
            description: "As a <b>Secretary</b> and <b>active Member</b> of the Computer Society at <i>Universiti Tunku Abdul Rahman (UTAR)</i>, I was: <br><ul style='list-style-type: disc; margin-left: 2.5rem;'><li style='margin-top: 0.5rem;'>responsible for preparing official paperwork and systematically gathering and managing information to support the society’s operations</li><li style='margin-top: 0.5rem;'>played a key role in planning and organizing IT-related events, including hackathons, workshops, and technical talks, contributing to smooth event execution and strong member engagement</li></ul><br>Through this role, I developed solid organizational, communication, and coordination skills while actively promoting a culture of learning and collaboration within the student community."
        }
    ];

    const closeDialog = () => {
        setSelectedExperience(null);
    };

    const handleCardClick = (exp: ExperienceCard) => {
        if (exp.description) {
            setSelectedExperience(exp);
        }
    };

    return (
        <div id="experiences" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-white dark:bg-black transition-colors duration-500">
            <h2 className={`text-4xl sm:text-4xl md:text-5xl font-bold mb-12 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                Experiences
            </h2>
            <div className="max-w-7xl mx-auto relative">
                <div className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'}`}></div>
                <div className="space-y-8 md:space-y-5">
                    {experiencesData.map((exp, index) => {
                        const isLeftSide = index % 2 === 1;
                        return (
                            <div key={index} className={`relative flex items-center flex-row ${isLeftSide ? 'lg:flex-row-reverse' : 'lg:flex-row'}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <div className={`w-full lg:w-[calc(50%-2rem)] pl-8 ${isLeftSide ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                    <div className={`rounded-2xl p-5 shadow-lg transition-all duration-300 ${exp.description ? 'cursor-pointer hover:scale-105 hover:shadow-xl' : ''} ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`} onClick={() => handleCardClick(exp)}>
                                        <p className={`text-xs sm:text-sm md:text-base font-medium ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{exp.date}</p>
                                        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mt-2 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>{exp.title}</h3>
                                        <p className={`text-md sm:text-lg md:text-xl font-semibold mt-0 sm:mt-1 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{exp.subtitle}</p>
                                        {exp.organization && (<p className={`text-base sm:text-md md:text-lg mt-1 sm:mt-2 italic ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{exp.organization}</p>)}
                                        {exp.badge && (
                                            <div className="mt-3 sm:mt-5">
                                                <span className={`text-sm sm:text-base md:text-md font-semibold inline-block px-3 py-1 rounded-full ${isDarkMode ? 'bg-[#9C562F] text-white' : 'bg-[#122448] text-white'}`}>{exp.badge}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute -left-2 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${hoveredIndex === index
                                        ? isDarkMode ? 'bg-[#9C562F] border-[#9C562F]' : 'bg-[#122448] border-[#122448]'
                                        : isDarkMode ? 'bg-black border-[#9C562F]' : 'bg-white border-[#122448]'}`}>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {selectedExperience && (
                <div className="fixed inset-0 bg-black/15 backdrop-blur-sm flex items-center justify-center z-50 p-5" onClick={closeDialog}>
                    <div className={`rounded-3xl shadow-2xl w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200 ${isDarkMode ? 'bg-black' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 pb-4 relative flex-shrink-0">
                            <div className="absolute right-5 top-5 flex items-center justify-center cursor-pointer" onClick={closeDialog}>
                                <img src={closeLight} className="w-5 dark:hidden" alt="close" />
                                <img src={closeDark} className="w-5 hidden dark:block" alt="close" />
                            </div>
                            <h3 className={`text-2xl sm:text-3xl font-bold pr-10 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>{selectedExperience.title}</h3>
                            <p className={`text-lg sm:text-xl font-semibold mt-1 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{selectedExperience.organization}</p>
                            <p className={`text-sm sm:text-base mt-5 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{selectedExperience.date}</p>
                        </div>
                        <div className="px-6 pb-6 overflow-y-auto flex-1">
                            <div className={`rounded-2xl p-5 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                                <div className={`text-sm sm:text-base md:text-md leading-relaxed ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`} dangerouslySetInnerHTML={{ __html: selectedExperience.description || '' }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}