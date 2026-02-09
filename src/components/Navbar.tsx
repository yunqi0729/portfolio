import { useRef } from 'react'
import logoLight from '../assets/yunqi_logo_light.png';
import closeLight from '../assets/close-black.png';
import menuLight from '../assets/menu-black.png';
import { Link } from 'react-scroll';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const constantsColour = useSelector((state: RootState) => state.constants);
    const sideMenuRef = useRef<HTMLUListElement>(null);

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

    const menu = (shouldCloseMenu: boolean = false) => navItems.map((item) => (
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
                    backgroundColor: constantsColour.primaryColourLight,
                    color: "white",
                    borderRadius: "10px",
                }}
                className={`px-5 py-3 mx-1 cursor-pointer`}
            >
                {item.name}
            </Link>
        </li>
    ));

    return (
        <div className="sticky top-0 bg-white border-white z-50 transition-all duration-1000">
            <div className="navbar flex justify-between mx-auto content h-14 items-center px-4">
                <div className="flex items-center">
                    <Link href="#header" to={`header`} smooth={true} duration={1000} offset={-56}
                        className="flex items-center border-0 sm:max-xxl:ps-5 mx-5">
                        <img src={logoLight}
                            className="h-14 sm:h-14 w-auto"
                            alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
                        {menu(false)}
                    </ul>
                    <div className="flex items-center h-full">
                        <button className="block lg:hidden ml-3 focus:outline-none flex items-center justify-center" onClick={openMenu}>
                            {/* <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                            <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" /> */}
                            <img src={menuLight} className="w-6 h-auto" alt="menu" />
                        </button>
                    </div>
                    <ul ref={sideMenuRef} className="flex lg:hidden flex-col gap-4 py-15 px-5 fixed -right-64 top-0 bottom-0 w-50 z-50 h-screen bg-[#CFD3DC] transition duration-500 font-Ovo dark:bg-darkHover dark:text-black">
                        <div className="absolute right-5 top-5 flex items-center justify-center" onClick={closeMenu}>
                            {/* <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                            <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" /> */}
                            <img src={closeLight} className="w-5 cursor-pointer" alt="close" />
                        </div>
                        {menu(true)}
                    </ul>
                </div>

            </div>
        </div>
    )
}