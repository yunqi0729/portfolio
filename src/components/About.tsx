import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import aboutProfile from '../assets/about_profile.png';

export default function About() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);

    const skills = [
        "Dart", "React", "Java", "Java Script", "TypeScript", "C++", "C", "Python",
        "HTML5", "XML", "CSS", "Tailwind CSS", "Flutter", "Firebase", "MySQL",
        "Oracle", "VS Code", "Node.js", "Git", "Burp Suite",
        "Jenkins", "Sourcetree", "Microsoft Office", "Figma"
    ];

    return (
        <div id="about" className="relative px-4 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-10 bg-white dark:bg-black transition-colors duration-500">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-[#122448]'}`}>
                About Me
            </h2>
            <div className={`max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 border-2 ${isDarkMode ? 'bg-[#2D2927] border-white/20' : 'bg-[#DDE2E8] border-black'} shadow-2xl`}>
                <div className={`rounded-2xl p-6 sm:p-12 border flex flex-col lg:flex-row items-center gap-10 ${isDarkMode ? 'bg-[#1e1c1b] border-white/10' : 'bg-white border-black'}`}>
                    <div className="w-48 h-68 sm:w-64 sm:h-84 shrink-0">
                        <img className="w-full h-full object-cover rounded-lg" src={aboutProfile} alt="Profile" />
                    </div>
                    <div className="hidden lg:block w-px border-l-2 border-dotted border-black self-stretch my-4 mx-2"></div>
                    <div className="flex-1">
                        <p className={`text-lg sm:text-xl leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-[#3F4E79]'}`}>
                            A dedicated <span className="font-bold text-[#9C562F]">Software Engineer</span> with a deep passion for the transformative power of code. I am fascinated by the ability to build complex modules and entire digital worlds from a few lines of logic.
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors bg-[#122448] text-white hover:bg-[#3F4E79] dark:bg-[#9C562F] dark:hover:bg-[#C37448]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div id="about" className={`relative mx-8 my-8 xxl:mx-0.5 xxl:my-0.5 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}>
    //         <div className="flex max-md:flex-col justify-between items-center gap-6">
    //             <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
    //                 <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
    //                     <img className="bg-soft-white h-[120%] object-cover" src={aboutProfile} alt="Profile Photo" />
    //                 </div>
    //             </div>
    //             <div className="max-sm:w-full w-[33rem]">
    //                 <h2 className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}>
    //                     I am Professional User Experience Designer
    //                 </h2>
    //                 <div className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}>
    //                     <p className="mt-3">
    //                         I design and develop services for customers specializing creating
    //                         stylish, modern websites, web services and online stores. My
    //                         passion is to design digital user experiences.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}