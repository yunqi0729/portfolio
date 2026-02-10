import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import headerProfile from '../assets/header_profile.png';
import mountainBackground from '../assets/mountain_background.jpg';
import handWaveIcon from '../assets/hand-icon.png';

export default function Header() {
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);

    return (
        <div id="header" className={`relative w-full h-[91vh] min-h-[300px] flex items-end justify-center overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <img className="absolute inset-0 w-full h-full object-cover z-0" src={mountainBackground} alt="mountain background" />
            <div className="relative z-10 container mx-auto px-6 gap-5 flex flex-col sm:flex-row items-center sm:items-end justify-center ">
                <div className="relative w-82 h-82 sm:w-106 sm:h-106 lg:w-[490px] lg:h-[490px]">
                    <img className="w-full h-full object-contain drop-shadow-xl" src={headerProfile} alt="header profile" />
                </div>
                <div className="flex flex-col text-left pb-6 sm:pb-8 lg:pb-10">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-2 drop-shadow-md flex items-center gap-2">
                        <img src={handWaveIcon} alt="hand wave" className="w-8 h-8 md:w-10 md:h-10" />
                        Hi! I'm
                    </h2>
                    <div className="bg-[#CFD3DC]/85 dark:bg-[#FAE2C5]/85 px-6 pb-2 shadow-lg mb-4  self-start">
                        <h1 className={`text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold ${isDarkMode ? 'text-[#C37448]' : 'text-[#3F4E79]'}`}>
                            Chang Yun Qi
                        </h1>
                    </div>
                    <div className="bg-[#CFD3DC]/85 dark:bg-[#FAE2C5]/85 px-4 pb-1 shadow-lg mb-4 self-start">
                        <p className={`text-xl sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide ${isDarkMode ? 'text-[#9C562F]' : 'text-[#122448]'}`}>
                            Computer Science Undergraduate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}