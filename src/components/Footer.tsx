import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function Footer() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);

    const linkedin = "https://www.linkedin.com/in/yunqi0729/";
    const github = "https://github.com/yunqi0729";

    return (
        <div id="contact" className="bg-white dark:bg-black transition-colors duration-500">
            <div className="font-medium text-center sm:flex items-center justify-between border-t border-gray-500 dark:border-gray-600 mx-[5%] py-3">
                <p className={`${isDarkMode ? 'text-[#9C562F]' : 'text-[#3F4E79]'}`}>© {new Date().getFullYear()} Chang Yun Qi • All rights reserved</p>
                <ul className={`flex items-center gap-8 justify-center mt-3 sm:mt-0`}>
                    <li><a className={`inline-block transition-transform duration-200 hover:scale-105 ${isDarkMode ? 'text-[#9C562F] hover:text-[#C37448]' : 'text-[#3F4E79] hover:text-[#122448]'}`} href={linkedin} target="_blank">LinkedIn</a></li>
                    <li><a className={`inline-block transition-transform duration-200 hover:scale-105 ${isDarkMode ? 'text-[#9C562F] hover:text-[#C37448]' : 'text-[#3F4E79] hover:text-[#122448]'}`} href={github} target="_blank">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}