import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`text-sm font-medium transition-colors hover:text-primary-dark ${isActive ? 'text-primary font-bold' : 'text-text-main dark:text-gray-300'}`}
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
        <header className="sticky top-0 z-[100] flex items-center justify-between border-b border-[#e5ebe7]/50 bg-white/80 dark:bg-background-dark/80 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20">
            <Link to="/" className="flex items-center gap-2 transform transition-transform hover:scale-105 active:scale-95">
                <img
                    src="/logo_kpoint.png"
                    alt="Kpoint Logo"
                    className="h-9 w-auto object-contain"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
                <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Inicio</a>
                <a href="#solucion" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Solución</a>
                <a href="#como-funciona" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Cómo funciona</a>
                <a href="#beneficios" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Beneficios</a>
                <a href="#dashboard" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Dashboard</a>
                <a href="#precios" className="text-sm font-medium transition-colors hover:text-primary-dark text-text-main dark:text-gray-300 hover:text-primary">Precios</a>
            </nav>

            <div className="flex items-center gap-3">
                <button className="hidden cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-text-main dark:text-white transition-colors hover:bg-background-subtle md:block">
                    Iniciar sesión
                </button>
                <Link to="/pricing" className="hidden md:flex cursor-pointer items-center justify-center rounded-lg bg-text-main px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-black hover:shadow-xl dark:bg-primary dark:text-background-dark">
                    Empezar gratis
                </Link>

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
                <div className="fixed inset-x-0 top-[73px] z-[90] flex h-[calc(100vh-73px)] flex-col bg-white p-6 dark:bg-background-dark md:hidden">
                    <nav className="flex flex-col gap-6 text-lg">
                        <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Inicio</a>
                        <a href="#solucion" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Solución</a>
                        <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Cómo funciona</a>
                        <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Beneficios</a>
                        <a href="#dashboard" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Dashboard</a>
                        <a href="#precios" onClick={() => setIsMenuOpen(false)} className="text-text-main dark:text-white hover:text-primary transition-colors">Precios</a>
                    </nav>
                    <div className="mt-auto flex flex-col gap-4">
                        <button className="w-full rounded-xl bg-background-subtle py-4 font-bold text-text-main dark:text-white">
                            Iniciar sesión
                        </button>
                        <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="flex w-full items-center justify-center rounded-xl bg-primary py-4 font-bold text-background-dark">
                            Empezar gratis
                        </Link>
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
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

