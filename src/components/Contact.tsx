import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function Contact() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const [copied, setCopied] = useState(false);

    const email = "yunqi0729@gmail.com";
    const linkedin = "https://www.linkedin.com/in/yunqi0729/";
    const portfolio = "https://yunqi0729.github.io/portfolio/";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div id="contact" className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-15 pb-25 bg-white dark:bg-black transition-colors duration-500">
            <h2 className={`text-4xl sm:text-4xl md:text-5xl font-bold text-left mb-5 sm:mb-6 md:mb-7 lg:mb-8 ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                Get in Touch &amp; Connect with Me ☎️
            </h2>
            <div className={`max-w-3xl mx-auto rounded-3xl p-3 sm:p-6 border-2 border-black shadow-2xl overflow-hidden ${isDarkMode ? 'bg-[#FAE2C5]' : 'bg-[#DDE2E8]'}`}>
                <div className={`rounded-2xl px-4 py-6 sm:px-5 sm:py-7 border-2 flex flex-col gap-4 border-black ${isDarkMode ? 'bg-[#EDC89B]' : 'bg-white'}`}>
                    <div className="relative">
                        <button className={`w-full flex items-center gap-3 rounded-xl cursor-pointer group text-left`} onClick={handleCopyEmail}>
                            <span className={`text-base sm:text-md md:text-lg font-semibold`}>📮</span>
                            <span className={`text-base sm:text-md md:text-lg font-semibold transition-transform duration-200 hover:scale-105 ${isDarkMode ? 'text-[#C37448] hover:text-[#9C562F]' : 'text-[#3F4E79] hover:text-[#122448]'}`}>{email}</span>
                        </button>
                        {copied && (
                            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap ${isDarkMode ? 'bg-[#9C562F] text-white' : 'bg-[#122448] text-white'}`}>✓ Email copied to clipboard!</div>
                        )}
                    </div>
                    <div className={`border-t-2 border-dotted mx-2 ${isDarkMode ? 'border-[#9C562F]' : 'border-[#122448]'} opacity-30`} />
                    <a className={`flex items-center gap-3 rounded-xl group`} href={linkedin} target="_blank" rel="noopener noreferrer">
                        <span className={`text-base sm:text-md md:text-lg font-semibold ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>🔗</span>
                        <span className={`text-base sm:text-md md:text-lg font-semibold underline underline-offset-2 transition-transform duration-200 hover:scale-105 ${isDarkMode ? 'text-[#C37448] hover:text-[#9C562F]' : 'text-[#3F4E79] hover:text-[#122448]'}`}>{linkedin}</span>
                    </a>
                    <div className={`border-t-2 border-dotted mx-2 ${isDarkMode ? 'border-[#9C562F]' : 'border-[#122448]'} opacity-30`} />
                    <a className={`flex items-center gap-3 rounded-xl group`} href={portfolio} target="_blank" rel="noopener noreferrer">
                        <span className={`text-base sm:text-md md:text-lg font-semibold ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>💻</span>
                        <span className={`text-base sm:text-md md:text-lg font-semibold underline underline-offset-2 transition-transform duration-200 hover:scale-105 ${isDarkMode ? 'text-[#C37448] hover:text-[#9C562F]' : 'text-[#3F4E79] hover:text-[#122448]'}`}>{portfolio}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}