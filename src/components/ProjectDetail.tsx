import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';

interface ProjectImage {
    url: string;
    caption: string;
}

interface ProjectDetailProps {
    title: string;
    subtitle?: string;
    date: string;
    stack: string[];
    overview: string;
    features: string[];
    images?: ProjectImage[];
    githubLink?: string;
    liveLink?: string;
    videoLink?: string;
}

export default function ProjectDetail({
    title,
    subtitle,
    date,
    stack,
    overview,
    features,
    images = [],
    githubLink,
    liveLink,
    videoLink
}: ProjectDetailProps) {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
            <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8">
                <button className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-lg transition-colors ${isDarkMode ? 'bg-[#D3B694] hover:bg-[#C37448] hover:text-white text-[#9C562F]' : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'}`} onClick={() => navigate('/', { state: { fromProject: true } })}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Back to Home
                </button>
            </div>
            <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-10">
                <div className="max-w-6xl mx-auto">
                    <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? '' : 'bg-[linear-gradient(to_top,#FAE2C5_40%,transparent_40%)]'} bg-no-repeat bg-[length:100%_100%] px-[2px] leading-tight ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`} dangerouslySetInnerHTML={{ __html: title }}></span>
                    {subtitle && (<p className={`text-xl sm:text-2xl md:text-3xl font-semibold mt-3 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{subtitle}</p>)}
                    <p className={`text-base sm:text-md md:text-lg mt-2 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{date}</p>
                    <div className="mt-8 mb-5">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {stack.map((tech, index) => (
                                <span key={index} className={`text-base sm:text-md md:text-lg px-4 py-2 rounded-full font-medium ${isDarkMode ? 'bg-[#9C562F] text-white' : 'bg-[#122448] text-white'}`}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    {(githubLink || liveLink || videoLink) && (
                        <div className="text-sm sm:text-md md:text-lg mt-10 flex flex-wrap gap-4">
                            {githubLink && (
                                <a className={`px-4 py-3 rounded-lg font-medium transition-colors shadow-lg transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#D3B694] hover:bg-[#C37448] hover:text-white text-[#9C562F]' : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'}`} href={githubLink} target="_blank" rel="noopener noreferrer">📂 View on GitHub</a>
                            )}
                            {liveLink && (
                                <a className={`px-4 py-3 rounded-lg font-medium transition-colors shadow-lg transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#D3B694] hover:bg-[#C37448] hover:text-white text-[#9C562F]' : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'}`} href={liveLink} target="_blank" rel="noopener noreferrer">🔗 View Live Demo</a>
                            )}
                            {videoLink && (
                                <a className={`px-4 py-3 rounded-lg font-medium transition-colors shadow-lg transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#D3B694] hover:bg-[#C37448] hover:text-white text-[#9C562F]' : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'}`} href={videoLink} target="_blank" rel="noopener noreferrer">🎞️ Watch Video</a>
                            )}
                        </div>
                    )}
                    <div className="flex items-center justify-center my-9 sm:my-10 md:my-11 lg:my-12">
                        <div className={`flex-1 h-0.5 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'}`}></div>
                    </div>
                    <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                        <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>Project Overview</h2>
                        <div className={`text-base sm:text-md md:text-lg leading-relaxed ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`} dangerouslySetInnerHTML={{ __html: overview }} />
                    </div>
                    <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                        <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>Key Features</h2>
                        <ul className={`space-y-3`}>
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`mt-2.5 w-2 h-2 rounded-full flex-shrink-0 ${isDarkMode ? 'bg-[#C37448]' : 'bg-[#3F4E79]'}`}></span>
                                    <span className={`text-base sm:text-md md:text-lg leading-snug ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`} dangerouslySetInnerHTML={{ __html: feature }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {images.length > 0 && (
                        <div className="mb-8">
                            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>Screenshots</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {images.map((image, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black" style={{ paddingBottom: '56.25%' }}>
                                            <img className="absolute top-0 left-0 w-full h-full object-contain" src={image.url} alt={`Screenshot ${index + 1}`} />
                                        </div>
                                        <p className={`text-sm sm:text-base md:text-md mt-1.5 text-center font-normal italic ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>{image.caption}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}