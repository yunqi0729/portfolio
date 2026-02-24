import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
// import yunqiPortfolio from '../assets/yunqi-portfolio.jpg';
import tuitionify from '../assets/hand-icon.png';
import vcare from '../assets/hand-icon.png';
import zoomaths from '../assets/hand-icon.png';

interface ProjectCard {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    stack: string;
    route: string; // Route path instead of external link
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
        //     stack: "Stack: React",
        //     route: "/projects/yunqi"
        // },
        {
            image: tuitionify,
            title: "Tuitionify, Smart Management System for Tuition Centre Operations",
            subtitle: "Final Year Project | 19/50 Shortlisted in FYP Competition",
            date: "Jan 2025 - Oct 2025",
            stack: "Stack: Dart, Python, JavaScript, Flutter",
            route: "/projects/tuitionify"
        },
        {
            image: vcare,
            title: "VCare, AI-powered Healthcare Mobile Application",
            subtitle: "Varsity Hackathon Project",
            date: "Mar 2025",
            stack: "Stack: Dart, Flutter, Python",
            route: "/projects/vcare"
        },
        {
            image: zoomaths,
            title: "Zoo! Maths, Mathematics Mobile Application for School-Going Children",
            subtitle: "Mobile Applications Development Assignment",
            date: "Jan 2025",
            stack: "Stack: Java, XML, Android Studio, Android SDK",
            route: "/projects/zoomaths"
        }
    ];

    const handleProjectClick = (route: string) => {
        navigate(route);
        window.scrollTo(0, 0); // Scroll to top when navigating
    };

    return (
        <div id="projects" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-[#CFD3DC] dark:bg-[#D3B694] transition-colors duration-500">
            {/* Title with decorative lines */}
            <div className="flex items-center justify-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
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

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => handleProjectClick(project.route)}
                        className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-[#FAE2C5]' : 'bg-white'}`}
                    >
                        {/* Image */}
                        <div className="w-full h-56 sm:h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                                {project.title}
                            </h3>

                            {project.subtitle && (
                                <p className={`text-sm sm:text-base font-semibold mb-3 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>
                                    {project.subtitle}
                                </p>
                            )}

                            <p className={`text-sm sm:text-base mb-3 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>
                                {project.date}
                            </p>

                            <p className={`text-sm sm:text-base font-medium ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                                {project.stack}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}