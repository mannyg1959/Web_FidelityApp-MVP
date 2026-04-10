import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
                relative px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 
                hover:bg-white/20 hover:scale-105 hover:shadow-lg
                ${isActive ? 'bg-white text-[#FF7043] shadow-md scale-105' : 'text-white/90 hover:text-white'}
            `}
        >
            {children}
        </Link>
    );
};

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-[100] flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20">
            <Link to="/" className="flex items-center gap-2 transform transition-transform hover:scale-105 active:scale-95">
                <img
                    src="/logo_kpoint.png"
                    alt="Kpoint Logo"
                    className="h-14 w-auto object-contain"
                />
            </Link>

            {/* Navigation Menus have been removed to convert the app into a pure Landing Page */}

            <div className="flex items-center gap-3">
                <button className="hidden cursor-pointer rounded-lg px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 transition-colors hover:text-primary md:block">
                    Iniciar sesión
                </button>
                <a href="https://fidelity-app-mvp.vercel.app/" className="hidden md:flex cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-black text-white shadow-[0_10px_20px_-5px_rgba(255,112,67,0.4)] transition-all hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(255,112,67,0.5)] active:scale-95">
                    Empezar gratis
                </a>
                

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-subtle text-text-main md:hidden"
                >
                    <span className="material-symbols-outlined">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-x-0 top-[73px] z-[90] flex h-[calc(100vh-73px)] flex-col bg-white dark:bg-slate-900 p-6 md:hidden">
                    {/* Mobile Navigation hidden */}
                    <div className="mt-auto flex flex-col gap-4">
                        <button className="w-full rounded-2xl bg-slate-100 dark:bg-slate-800 py-4 font-black text-slate-700 dark:text-white">
                            Iniciar sesión
                        </button>
                        <a href="https://fidelity-app-mvp.vercel.app/" onClick={() => setIsMenuOpen(false)} className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 font-black text-white shadow-xl">
                            Empezar gratis
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export const Footer = () => (
    <footer className="border-t border-[#e5ebe7] bg-white dark:bg-background-dark dark:border-white/10 py-12">
        <div className="layout-content-container mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:px-12 lg:px-20">
            <div className="flex items-center">
                <img
                    src="/logo_kpoint.png"
                    alt="Kpoint"
                    className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400">© 2024 Kpoint Inc. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a className="text-text-muted hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">mail</span>
                </a>
                <a className="text-text-muted hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">public</span>
                </a>
            </div>
        </div>
    </footer>
);

export const MainLayout = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Handle initial load with hash or hash changes
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [pathname, hash]);

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const link = e.target.closest('a');
            if (link && link.hash && (link.pathname === pathname || link.pathname === '/')) {
                const targetId = link.hash.replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                    e.preventDefault();
                    window.history.pushState(null, '', link.hash);
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, [pathname]);

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

