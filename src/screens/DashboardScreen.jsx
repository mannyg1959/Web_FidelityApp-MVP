import React from 'react';
import { Link } from 'react-router-dom';

const DashboardScreen = () => {
    return (
        <div className="antialiased selection:bg-primary selection:text-slate-900 overflow-x-hidden">
            <div className="flex flex-col">
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
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
                                {/* Main Dashboard Mockup - Now spans 8/12 on LG */}
                                <div className="lg:col-span-8 relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-[2.5rem] blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>
                                    <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden">
                                        <div className="flex h-[350px] md:h-[400px]">
                                            {/* Sidebar Mockup */}
                                            <div className="hidden md:flex w-48 bg-slate-50 dark:bg-slate-950 border-r dark:border-slate-800 p-5 flex-col gap-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-lg bg-primary"></div>
                                                    <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="h-3 w-full bg-primary/20 rounded"></div>
                                                    <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                    <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                </div>
                                            </div>
                                            {/* Main Dashboard Content Mockup */}
                                            <div className="flex-1 p-6 overflow-hidden">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div className="h-6 w-32 bg-slate-100 dark:bg-slate-800 rounded-lg"></div>
                                                    <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4 mb-6">
                                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Visitas</p>
                                                        <p className="text-xl font-black">124</p>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Canjes</p>
                                                        <p className="text-xl font-black text-primary">18</p>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700">
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Impacto</p>
                                                        <p className="text-xl font-black text-blue-500">+12%</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="h-4 w-1/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                                    <div className="relative h-32 w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-700 flex items-end p-3 gap-2">
                                                        <div className="flex-1 bg-primary/40 rounded-t h-[40%]"></div>
                                                        <div className="flex-1 bg-primary/60 rounded-t h-[65%]"></div>
                                                        <div className="flex-1 bg-primary/40 rounded-t h-[50%]"></div>
                                                        <div className="flex-1 bg-primary/80 rounded-t h-[85%]"></div>
                                                        <div className="flex-1 bg-primary rounded-t h-[100%]"></div>
                                                        <div className="flex-1 bg-primary/70 rounded-t h-[75%]"></div>
                                                        <div className="flex-1 bg-primary/50 rounded-t h-[60%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Persuasive ROI/Retention Graphic - Spans 4/12 on LG */}
                                <div className="lg:col-span-4 flex flex-col gap-6">
                                    {/* Retention ROI Card */}
                                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                                            <span className="material-symbols-outlined text-8xl">trending_up</span>
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">ROI Estimado</div>
                                            </div>
                                            <h3 className="text-3xl font-black mb-2 text-primary">x4.5</h3>
                                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Retorno de inversión promedio por cada sol invertido en premios.</p>

                                            <div className="space-y-3">
                                                <div className="flex justify-between text-xs">
                                                    <span>Retención de Clientes</span>
                                                    <span className="text-primary">+85%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full w-[85%] bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Growth Signal Card */}
                                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-700 shadow-xl flex items-center gap-5">
                                        <div className="size-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                            <span className="material-symbols-outlined text-3xl">diversity_3</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Comunidad</p>
                                            <p className="text-xl font-black dark:text-white">+2,400</p>
                                            <p className="text-xs text-slate-500">Nuevos fans mensuales</p>
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
