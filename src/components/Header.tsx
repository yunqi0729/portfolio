import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function Header() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);

    return (
        <div id="header" className={`h-80 w-full transition-colors duration-500 ${isDarkMode ? 'bg-red-100' : 'bg-green-100'}`}>
            <p className={`${isDarkMode ? 'text-red-800' : 'text-black'}`}>Header Section - Top</p>
            <p className="justify-center items-center flex">Header Section</p>
        </div>
    )
}