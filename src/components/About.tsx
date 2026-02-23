import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import aboutProfile from '../assets/about_profile.png';
import Marquee from "react-fast-marquee";

export default function About() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);

    const techSkills = [
        "Dart", "React", "Java", "JavaScript", "TypeScript", "C++", "C", "Python", "Groovy",
        "HTML5", "XML", "JavaScript XML", "CSS", "Tailwind CSS"
    ];
    const othersSkills = [
        "Flutter", "Google Firebase", "MySQL",
        "Oracle", "VS Code", "Android Studio", "Eclipse", "Node.js", "Git", "Burp Suite",
        "Jenkins", "Jira", "Sourcetree", "Microsoft Office", "Figma"
    ];

    return (
        <div id="about" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-white dark:bg-black transition-colors duration-500">
            <h2 className={`text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-5 sm:mb-6 md:mb-7 lg:mb-8 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                About Me
            </h2>
            <div className={`max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 border-2 border-black ${isDarkMode ? 'bg-[#FAE2C5]' : 'bg-[#DDE2E8]'} shadow-2xl overflow-hidden`}>
                <div className={`rounded-2xl px-6 py-8 sm:px-8 sm:py-10 border-2 flex flex-col lg:flex-row items-center gap-10 border-black ${isDarkMode ? 'bg-[#EDC89B]' : 'bg-white'} overflow-hidden`}>
                    <div className="w-48 h-68 sm:w-64 sm:h-84 shrink-0">
                        <img className="w-full h-full object-cover rounded-lg" src={aboutProfile} alt="Profile" />
                    </div>
                    <div className="hidden lg:block w-px border-l-2 border-dotted border-black self-stretch my-4 mx-2"></div>
                    <div className="flex-1 w-full lg:min-w-0 overflow-hidden">
                        <p className={`text-lg sm:text-lg md:text-xl leading-relaxed mb-6 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#3F4E79]'}`}>
                            A dedicated <span className={`font-bold ${isDarkMode ? 'text-[#3F4E79]' : 'text-[#9C562F]'}`}>Software Engineer</span> with a deep passion for the transformative power of code. I am fascinated by the ability to build complex modules and entire digital worlds from a few lines of logic.
                        </p>
                        <div className="space-y-3 overflow-hidden -mx-6 sm:-mx-12">
                            <Marquee pauseOnHover={true} speed={50} direction="right" gradient={false}>
                                {techSkills.map((skill, index) => (
                                    <span key={index} className="mx-1.5 px-4 py-2 rounded-lg text-sm sm:text-base font-medium whitespace-nowrap inline-block bg-[#122448] text-white hover:bg-[#3F4E79] dark:bg-[#9C562F] dark:hover:bg-[#C37448]">
                                        {skill}
                                    </span>
                                ))}
                            </Marquee>
                            <Marquee pauseOnHover={true} speed={50} direction="left" gradient={false}>
                                {othersSkills.map((skill, index) => (
                                    <span key={index} className="mx-1.5 px-4 py-2 rounded-lg text-sm sm:text-base font-medium whitespace-nowrap inline-block bg-[#122448] text-white hover:bg-[#3F4E79] dark:bg-[#9C562F] dark:hover:bg-[#C37448]">
                                        {skill}
                                    </span>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
