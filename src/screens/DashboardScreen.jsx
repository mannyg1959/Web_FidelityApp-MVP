import React from 'react';
import { Link } from 'react-router-dom';

const DashboardScreen = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-slate-900 overflow-x-hidden">
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
                            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full"></div>
                        </div>
                        <div className="relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
                            <div className="text-center mb-10">
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                                    Control total de tu <span className="text-primary italic">crecimiento</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                    Visualiza en tiempo real el comportamiento de tus clientes, la efectividad de tus premios y el retorno de inversión de tu programa.
                                </p>
                            </div>
                            <div className="relative mx-auto max-w-5xl">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden">
                                    <div className="flex flex-col md:flex-row h-[500px] md:h-[600px]">
                                        {/* Sidebar Mockup */}
                                        <div className="hidden md:flex w-64 bg-slate-50 dark:bg-slate-950 border-r dark:border-slate-800 p-6 flex-col gap-8">
                                            <div className="flex items-center gap-2">
                                                <div className="size-8 rounded-lg bg-primary"></div>
                                                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="h-4 w-full bg-primary/20 rounded"></div>
                                                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            </div>
                                        </div>
                                        {/* Main Dashboard Content Mockup */}
                                        <div className="flex-1 p-8 overflow-y-auto">
                                            <div className="flex justify-between items-center mb-10">
                                                <div className="h-8 w-40 bg-slate-100 dark:bg-slate-800 rounded-lg"></div>
                                                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                    <p className="text-xs text-slate-400 font-bold uppercase mb-2">Visitas Hoy</p>
                                                    <p className="text-3xl font-black">124</p>
                                                </div>
                                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                    <p className="text-xs text-slate-400 font-bold uppercase mb-2">Canjes</p>
                                                    <p className="text-3xl font-black text-primary">18</p>
                                                </div>
                                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                    <p className="text-xs text-slate-400 font-bold uppercase mb-2">Nuevos Fans</p>
                                                    <p className="text-3xl font-black text-blue-500">32</p>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="h-6 w-1/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                                <div className="relative h-48 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700 flex items-end p-4 gap-2">
                                                    <div className="flex-1 bg-primary/40 rounded-t-lg h-[40%]"></div>
                                                    <div className="flex-1 bg-primary/60 rounded-t-lg h-[65%]"></div>
                                                    <div className="flex-1 bg-primary/40 rounded-t-lg h-[50%]"></div>
                                                    <div className="flex-1 bg-primary/80 rounded-t-lg h-[85%]"></div>
                                                    <div className="flex-1 bg-primary rounded-t-lg h-[100%]"></div>
                                                    <div className="flex-1 bg-primary/70 rounded-t-lg h-[75%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 hidden lg:block">
                                    <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-xs transform rotate-3">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="size-12 rounded-2xl bg-green-500 flex items-center justify-center text-white">
                                                <span className="material-symbols-outlined">star</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Logro Desbloqueado</p>
                                                <p className="text-xs text-slate-500">1,000 clientes leales</p>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-primary"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-12 px-4 md:px-8">
                        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 text-center text-slate-900 overflow-hidden relative">
                            <div className="absolute top-0 left-0 p-8 opacity-20 pointer-events-none">
                                <span className="material-symbols-outlined text-[200px]">hub</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 italic">Tus datos nunca se vieron tan bien.</h2>
                            <p className="text-xl mb-8 relative z-10 font-medium">Toma decisiones basadas en evidencias, no en suposiciones.</p>
                            <Link to="/pricing" className="inline-flex h-14 px-8 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold text-lg hover:bg-black transition-all relative z-10">
                                Probar gratis por 14 días
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default DashboardScreen;
