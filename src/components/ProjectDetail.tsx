import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';

interface ProjectDetailProps {
    title: string;
    subtitle?: string;
    date: string;
    stack: string[];
    overview: string;
    features: string[];
    images?: string[];
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
            {/* Back Button */}
            <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8">
                <button
                    onClick={() => navigate('/')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDarkMode
                            ? 'bg-[#D3B694] hover:bg-[#C37448] text-[#122448]'
                            : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'
                        }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                        {title}
                    </h1>

                    {subtitle && (
                        <p className={`text-xl sm:text-2xl font-semibold mb-4 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>
                            {subtitle}
                        </p>
                    )}

                    <p className={`text-base sm:text-lg mb-8 ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>
                        {date}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-2 rounded-lg font-medium ${isDarkMode
                                            ? 'bg-[#9C562F] text-white'
                                            : 'bg-[#122448] text-white'
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {(githubLink || liveLink || videoLink) && (
                        <div className="mb-8 flex flex-wrap gap-4">
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${isDarkMode
                                            ? 'bg-[#D3B694] hover:bg-[#C37448] text-[#122448]'
                                            : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'
                                        }`}
                                >
                                    View on GitHub
                                </a>
                            )}
                            {liveLink && (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${isDarkMode
                                            ? 'bg-[#9C562F] text-white hover:bg-[#C37448]'
                                            : 'bg-[#122448] text-white hover:bg-[#3F4E79]'
                                        }`}
                                >
                                    View Live Demo
                                </a>
                            )}
                            {videoLink && (
                                <a
                                    href={videoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${isDarkMode
                                            ? 'bg-[#D3B694] hover:bg-[#C37448] text-[#122448]'
                                            : 'bg-[#CFD3DC] hover:bg-[#122448] hover:text-white text-[#122448]'
                                        }`}
                                >
                                    Watch Video
                                </a>
                            )}
                        </div>
                    )}

                    {/* Overview */}
                    <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                            Project Overview
                        </h2>
                        <div
                            className={`text-base sm:text-lg leading-relaxed text-[#122448]`}
                            dangerouslySetInnerHTML={{ __html: overview }}
                        />
                    </div>

                    {/* Features */}
                    <div className={`rounded-2xl p-6 mb-8 ${isDarkMode ? 'bg-[#D3B694]' : 'bg-[#CFD3DC]'}`}>
                        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                            Key Features
                        </h2>
                        <ul className={`space-y-3 text-base sm:text-lg text-[#122448]`}>
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${isDarkMode ? 'bg-[#9C562F]' : 'bg-[#122448]'}`}></span>
                                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Images Gallery */}
                    {images.length > 0 && (
                        <div className="mb-8">
                            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                                Screenshots
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {images.map((image, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Screenshot ${index + 1}`}
                                            className="w-full h-auto"
                                        />
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