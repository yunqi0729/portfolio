import { useRef, useEffect } from 'react'
import logoLight from '../assets/yunqi_logo_light.png';
import logoDark from '../assets/yunqi_logo_dark.png';
import closeLight from '../assets/close-black.png';
import closeDark from '../assets/close-white.png';
import menuLight from '../assets/menu-black.png';
import menuDark from '../assets/menu-white.png';
import sun from '../assets/sun_icon.png';
import moon from '../assets/moon_icon.png';
import { Link } from 'react-scroll';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateDarkMode } from '../modeSlice';

export default function NavBar() {
    const constantsColour = useSelector((state: RootState) => state.constants);
    const sideMenuRef = useRef<HTMLUListElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const navLinkRef = useRef<HTMLUListElement>(null);
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const dispatch = useDispatch();

    const navItems = [
        { id: 1, name: "Home", url: "header" },
        { id: 2, name: "About", url: "about" },
        { id: 3, name: "Education", url: "education" },
        { id: 4, name: "Experiences", url: "experiences" },
        { id: 5, name: "Projects", url: "projects" },
        { id: 6, name: "Contact", url: "contact" },
    ];

    const handleMenuClick = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }

    const toggleTheme = () => {
        dispatch(updateDarkMode());

        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.theme = isDark ? 'dark' : 'light';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current?.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current?.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current?.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current?.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        })

        const savedTheme = localStorage.theme;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dispatch])

    const menu = (shouldCloseMenu: boolean = false) => {
        return navItems.map((item) => (
            <li key={item.id}>
                <Link
                    onClick={() => {
                        handleMenuClick();
                        if (shouldCloseMenu) closeMenu();
                    }}
                    to={item.url.toLowerCase()}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-56}
                    activeStyle={{
                        backgroundColor: isDarkMode
                            ? constantsColour.primaryColourDark
                            : constantsColour.primaryColourLight,
                        color: "white",
                        borderRadius: "10px",
                    }}
                    className={`px-5 py-3 mx-1 cursor-pointer text-[16px] font-medium text-[#122448] hover:text-[#7B93C0] dark:text-[#9C562F] dark:hover:text-[#D3B694]`}
                >
                    {item.name}
                </Link>
            </li>
        ));
    };

    return (
        <div ref={navRef} className="sticky top-0 z-50 transition-all duration-1000 bg-white border-white dark:bg-black dark:border-black">
            <div className="navbar flex justify-between mx-auto content h-14 items-center px-4">
                <div className="flex items-center">
                    <Link href="#header" to={`header`} smooth={true} duration={1000} offset={-56}
                        className="flex items-center border-0 sm:max-xxl:ps-5 mx-5">
                        <img src={logoLight} className="h-14 sm:h-14 w-auto dark:hidden" alt="logo" />
                        <img src={logoDark} className="h-14 sm:h-14 w-auto hidden dark:block" alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center h-full">
                        <button onClick={toggleTheme}>
                            <img src={moon} className="w-5 cursor-pointer h-auto mr-2 dark:hidden" alt="colorTheme" />
                            <img src={sun} className="w-5 cursor-pointer h-auto mr-2 hidden dark:block" alt="colorTheme" />
                        </button>
                    </div>
                    <ul className="hidden lg:flex menu menu-horizontal md:shrink-0">
                        {menu(false)}
                    </ul>
                    <div className="flex items-center h-full">
                        <button className="block lg:hidden ml-3 focus:outline-none flex items-center justify-center" onClick={openMenu}>
                            <img src={menuLight} className="w-6 cursor-pointer h-auto dark:hidden" alt="menu" />
                            <img src={menuDark} className="w-6 cursor-pointer h-auto hidden dark:block" alt="menu" />
                        </button>
                    </div>
                    <ul ref={sideMenuRef} className="flex lg:hidden flex-col gap-4 py-15 px-5 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-[#ECEFF7] dark:bg-[#2D2927]">
                        <div className="absolute right-5 top-5 flex items-center justify-center" onClick={closeMenu}>
                            <img src={closeLight} className="w-5 cursor-pointer dark:hidden" alt="close" />
                            <img src={closeDark} className="w-5 cursor-pointer hidden dark:block" alt="close" />
                        </div>
                        {menu(true)}
                    </ul>
                </div>

            </div>
        </div>
    )
}