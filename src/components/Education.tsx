import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useState } from 'react';
import fictUtar from '../assets/fict_utar.jpg';
import cfsUtar from '../assets/cfs_utar.jpg';
import pgs from '../assets/pgs.jpg';
import closeLight from '../assets/close-black.png';
import closeDark from '../assets/close-white.png';

interface EducationCard {
    image: string;
    title: string;
    subtitle: string; //optional
    institution: string; //optional
    period: string;
    description: string;
}

export default function Education() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const [selectedEducation, setSelectedEducation] = useState<EducationCard | null>(null);

    const educationData: EducationCard[] = [
        {
            image: fictUtar,
            title: "Bachelor of Computer Science (Honours)",
            subtitle: "",
            institution: "Universiti Tunku Abdul Rahman, UTAR",
            period: "January 2023 - January 2026",
            description: "<span style='display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d14127; color: white;'><b>CGPA</b>: 3.6863</span><br><br><b>Institution</b>: Faculty of Information and Communication Technology (FICT), UTAR<br><br>I graduated with a Bachelor of Computer Science (Honours) from <i>Universiti Tunku Abdul Rahman (UTAR)</i> with a CGPA of 3.6863, achieving First-Class Honours and being awarded the UTAR Top Achiever Scholarship (100%) for my degree studies. <br><br>My academic training covered key areas such as <b>Object-Oriented Programming (OOP)</b>, <b>Data Structures</b>, <b>Front-End Web Development</b>, <b>Mobile Application Development</b>, <b>Algorithm Analysis</b>, <b>Database Development</b>, <b>Artificial Intelligence Techniques</b>, and <b>Deep Learning for Data Science</b>, providing me with a strong technical foundation. I was consistently recognized for academic excellence through multiple placements on the President’s List (January 2023, June 2023, June 2025) and the Dean’s List (October 2024). <br><br>Beyond academics, I actively contributed to student organizations as the former Secretary of the <i>UTAR Computer Society</i> and former Vice President of the <i>UTAR Blockchain Club</i>, while participating in various hackathons, workshops, and events to enhance my teamwork, communication, and problem-solving skills.<br><br>In addition, I obtained a professional certificate in <b>\"Developing Front-End Apps with React\" from <i>International Business Machines Corporation (IBM)</i></b> via <i>Coursera</i> through self-directed online learning. Through this program, I explored and applied modern front-end technologies including <i>React</i>, <i>TypeScript</i>, <i>Tailwind CSS</i>, <i>JSX (JavaScript XML)</i>, and <i>Vite</i>, further strengthening my practical web development skills."
        },
        {
            image: cfsUtar,
            title: "Foundation In Science",
            subtitle: "(P Stream - Physical Science)",
            institution: "Universiti Tunku Abdul Rahman, UTAR",
            period: "January 2022 - December 2022",
            description: "<span style='display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d14127; color: white;'><b>CGPA</b>: 3.9600</span><br><br><b>Institution</b>: Centre for Foundation Studies (CFS), UTAR<br><br>I completed my Foundation in Science (P Stream – Physical Science) at <i>Universiti Tunku Abdul Rahman (UTAR)</i> with an outstanding CGPA of 3.9600, supported by the UTAR Top Achiever Scholarship (100%) for my foundation studies. <br><br>My coursework in <b>Programming</b>, <b>Computing Technology</b>, <b>Data Analytics</b>, and <b>Mathematics</b> built a strong analytical and computational foundation that prepared me for advanced studies in computer science. I was consistently recognized for my academic excellence by being placed on the President’s List (January 2022, June 2022, and October 2022), reflecting my strong commitment to learning and high academic performance."
        },
        {
            image: pgs,
            title: "Sijil Pelajaran Malaysia (SPM)",
            subtitle: "",
            institution: "SMJK Perempuan Perak",
            period: "January 2016 - December 2020",
            description: "<span style='display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background-color: #d14127; color: white;'><b>Grade</b>: 11 As</span><br><br>I completed my secondary education at <i>SMJK Perempuan Perak (PGS)</i>, where I sat for the Sijil Pelajaran Malaysia (SPM) 2020 under the Pure Science stream and achieved 11 As (2A+, 6A, 3A−). <br><br>My academic focus included <b>Additional Mathematics</b>, <b>Mathematics</b>, and <b>Physics</b>, which strengthened my logical thinking and problem-solving skills. <br><br>I was awarded <b>The Best Subject in Mathematics for SPM 2020</b> in my school, reflecting my strong performance in analytical subjects, and I also obtained the <b>LCCI Level 2 Certificate</b>, reflecting my strong academic performance and initiative in expanding my knowledge. <br><br>In addition to academics, I was actively involved in co-curricular activities, serving as the Vice President of the <i>Library Prefect Team</i> and the Secretary of the PGS unit of <i>St. John Ambulance Malaysia (SJAM)</i>, where I developed leadership, teamwork, and organizational skills through active participation and responsibility in school activities."
        }
    ];

    const closeDialog = () => {
        setSelectedEducation(null);
    };

    return (
        <div id="education" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-[#CFD3DC] dark:bg-[#D3B694] transition-colors duration-500">
            <div className="flex items-center justify-center mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                <div className={`flex-1 h-0.5 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} mr-6`}>
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} float-left -mt-1.5`}></div>
                </div>
                <h2 className={`text-4xl sm:text-4xl md:text-5xl font-bold text-center ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'} px-2`}>
                    Education
                </h2>
                <div className={`flex-1 h-0.5 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} ml-6`}>
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} float-right -mt-1.5`}></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationData.map((edu, index) => (
                    <div key={index} onClick={() => setSelectedEducation(edu)} className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col cursor-pointer ${isDarkMode ? 'bg-[#FAE2C5]' : 'bg-white'}`}>
                        <div className="p-6">
                            <div className="w-full h-52 sm:h-56 overflow-hidden rounded-xl shadow-md">
                                <img src={edu.image} alt={edu.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="px-6 pb-4 flex-grow flex flex-col">
                            <div className="flex-grow">
                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>{edu.title}</h3>
                                {edu.subtitle && (<p className={`text-md sm:text-lg md:text-xl font-semibold mt-1 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{edu.subtitle}</p>)}
                                {edu.institution && (<p className={`text-base sm:text-md md:text-lg mt-3 italic ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{edu.institution}</p>)}
                            </div>
                            <p className={`text-base sm:text-md md:text-lg mt-6 font-medium ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{edu.period}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedEducation && (
                <div className="fixed inset-0 bg-black/15 backdrop-blur-sm flex items-center justify-center z-50 p-5" onClick={closeDialog}>
                    <div className={`rounded-3xl shadow-2xl w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200 ${isDarkMode ? 'bg-black' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 pb-4 relative flex-shrink-0">
                            <div className="absolute right-5 top-5 flex items-center justify-center cursor-pointer" onClick={closeDialog}>
                                <img src={closeLight} className="w-5 dark:hidden" alt="close" />
                                <img src={closeDark} className="w-5 hidden dark:block" alt="close" />
                            </div>
                            <h3 className={`text-2xl sm:text-3xl font-bold pr-10 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>{selectedEducation.title}</h3>
                            {selectedEducation.subtitle && (<p className={`text-xl sm:text-2xl font-semibold mt-1 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{selectedEducation.subtitle}</p>)}
                            {selectedEducation.institution && (<p className={`text-base sm:text-md mt-5 italic ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{selectedEducation.institution}</p>)}
                        </div>
                        <div className="px-6 pb-6 overflow-y-auto flex-1">
                            <div className={`rounded-2xl p-5 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                                <div className={`text-sm sm:text-base md:text-md leading-relaxed ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`} dangerouslySetInnerHTML={{ __html: selectedEducation.description }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}