import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import tuitionify from '../assets/hand-icon.png';
import vcare from '../assets/hand-icon.png';
import zoomaths from '../assets/hand-icon.png';

interface ProjectCard {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    stack: string;
    route: string;
}

export default function Projects() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const navigate = useNavigate();

    const projectsData: ProjectCard[] = [
        // {
        //     image: yunqiPortfolio,
        //     title: "yunqi., Personal Development Portfolio Website",
        //     subtitle: "",
        //     date: "Jan 2026",
        //     stack: "React",
        //     route: "/projects/yunqi"
        // },
        {
            image: tuitionify,
            title: "<i>Tuitionify</i>, Smart Management System for Tuition Centre Operations",
            subtitle: "Final Year Project | 19/50 Shortlisted in FYP Competition",
            date: "January 2025 - October 2025",
            stack: "Dart, Python, JavaScript, Flutter",
            route: "/projects/tuitionify"
        },
        {
            image: vcare,
            title: "<i>VCare</i>, AI-powered Healthcare Mobile Application",
            subtitle: "Varsity Hackathon Project",
            date: "March 2025",
            stack: "Dart, Flutter, Python",
            route: "/projects/vcare"
        },
        {
            image: zoomaths,
            title: "<i>Zoo! Maths</i>, Mathematics Mobile Application for School-Going Children",
            subtitle: "Mobile Applications Development Assignment",
            date: "January 2025",
            stack: "Java, XML, Android Studio, Android SDK",
            route: "/projects/zoomaths"
        }
    ];

    const handleProjectClick = (route: string) => {
        navigate(route);
        window.scrollTo(0, 0);
    };

    return (
        <div id="projects" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-[#CFD3DC] dark:bg-[#D3B694] transition-colors duration-500">
            <div className="flex items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-9">
                <div className={`flex-1 h-0.5 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} mr-6`}>
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} float-left -mt-1.5`}></div>
                </div>
                <h2 className={`text-4xl sm:text-4xl md:text-5xl font-bold text-center ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'} px-2`}>
                    Projects
                </h2>
                <div className={`flex-1 h-0.5 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} ml-6`}>
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'} float-right -mt-1.5`}></div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {projectsData.map((project, index) => (
                    <div className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col ${isDarkMode ? 'bg-[#FAE2C5]' : 'bg-white'}`} key={index} onClick={() => handleProjectClick(project.route)}>
                        <div className="w-full h-60 sm:h-70 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="px-6 pb-5 pt-3 flex-grow flex flex-col">
                            <div className="flex-grow">
                                <div className={`text-lg sm:text-xl md:text-2xl font-bold leading-snug ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`} dangerouslySetInnerHTML={{ __html: project.title || '' }} />
                                {project.subtitle && (
                                    <p className={`text-md sm:text-lg md:text-xl font-semibold mt-2 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{project.subtitle}</p>
                                )}
                                <p className={`text-sm sm:text-sm md:text-base mt-2 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{project.date}</p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.stack.split(', ').map((tech, i) => (
                                    <span key={i} className={`text-sm sm:text-base md:text-md font-semibold px-3 py-1 rounded-full ${isDarkMode ? 'bg-[#9C562F] text-white' : 'bg-[#122448] text-white'}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}