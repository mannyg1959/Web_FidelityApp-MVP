import React from 'react';
import { useReveal } from '../hooks/useReveal';

const DashboardScreen = () => {
    useReveal();

    return (
        <div className="antialiased bg-background-light">
            <main className="flex-grow">
                <section className="reveal relative pt-6 pb-6 px-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] max-w-7xl">
                        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full"></div>
                        <div className="absolute bottom-0 left-[-5%] w-[60%] h-[60%] bg-blue-400/5 blur-[150px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest">
                                Inteligencia de Negocio
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
                                Control total de tu <br />
                                <span className="text-primary italic">crecimiento</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-text-muted font-medium max-w-3xl mx-auto leading-relaxed">
                                Visualiza lo que importa. Tus datos convertidos en decisiones estratégicas para escalar tu programa de lealtad al siguiente nivel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
                            {/* Main Dashboard Mockup - LARGER */}
                            <div className="reveal-left lg:col-span-9 relative group perspective-1000">
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-orange-400 rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                                <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-700 hover:rotate-y-2">
                                    <div className="flex h-[550px] md:h-[650px]">
                                        {/* Sidebar Mockup */}
                                        <div className="hidden md:flex w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 p-8 flex-col gap-10">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-xl bg-primary shadow-lg shadow-primary/20"></div>
                                                <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                                            </div>
                                            <div className="space-y-6">
                                                {[1,2,3,4].map(i => (
                                                    <div key={i} className={`h-4 w-full rounded-full ${i === 1 ? 'bg-primary/20' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Main Dashboard Content Mockup */}
                                        <div className="flex-1 p-4 md:p-10 space-y-8 md:space-y-10 overflow-hidden">
                                            <div className="flex justify-between items-center">
                                                <div className="h-8 w-48 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                                                <div className="size-12 rounded-[1.2rem] bg-slate-50 dark:bg-slate-800 border border-slate-100"></div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                                {[
                                                    { label: 'Retención', val: '+84%', color: 'text-text-main', bg: 'bg-orange-50/50', border: 'border-orange-100', progress: 'w-[84%]' },
                                                    { label: 'Actividad', val: '1.2k', color: 'text-primary', bg: 'bg-blue-50/50', border: 'border-blue-100', progress: 'w-[65%]' },
                                                    { label: 'Impacto', val: '+24%', color: 'text-green-500', bg: 'bg-green-50/50', border: 'border-green-100', progress: 'w-[40%]' }
                                                ].map((stat, i) => (
                                                    <div key={i} className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] ${stat.bg} border ${stat.border} shadow-sm group/stat transition-all hover:shadow-xl hover:scale-105 hover:bg-white duration-500 relative overflow-hidden`}>
                                                        <div className="relative z-10">
                                                            <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em] mb-3">{stat.label}</p>
                                                            <p className={`text-3xl md:text-4xl font-black ${stat.color} leading-none tracking-tighter mb-4`}>{stat.val}</p>
                                                            <div className="h-1.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
                                                                <div className={`h-full bg-primary ${stat.color.replace('text-', 'bg-')}`} style={{ width: stat.progress.match(/\d+/)[0] + '%' }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="absolute -bottom-4 -right-4 size-20 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="h-6 w-1/4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                                    <div className="flex gap-2">
                                                        <div className="size-2 rounded-full bg-primary/20 animate-pulse"></div>
                                                        <div className="size-2 rounded-full bg-primary/20 animate-pulse delay-150"></div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center bg-slate-100/50 dark:bg-slate-800/50 rounded-[2.5rem] p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                                                    {/* Radial Chart */}
                                                    <div className="relative size-40 md:size-48 mx-auto flex items-center justify-center group">
                                                        <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                                                            <circle cx="50" cy="50" r="40" stroke="#FF7043" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="50.2" strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(255,112,67,0.4)]" />
                                                            <circle cx="50" cy="50" r="30" stroke="#0F172A" strokeWidth="6" fill="none" strokeDasharray="188.4" strokeDashoffset="60" strokeLinecap="round" />
                                                        </svg>
                                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                            <span className="text-3xl font-black text-text-main leading-none">85%</span>
                                                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Retención</span>
                                                        </div>
                                                    </div>

                                                    {/* Legend & Small Data Widgets */}
                                                    <div className="space-y-6">
                                                        <div className="space-y-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="size-3 rounded-full bg-primary shadow-lg shadow-primary/40"></div>
                                                                <p className="text-xs font-bold text-text-muted">Clientes Frecuentes <span className="text-text-main ml-1 font-black">+12%</span></p>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div className="size-3 rounded-full bg-[#0F172A]"></div>
                                                                <p className="text-xs font-bold text-text-muted">Canjes Hoy <span className="text-text-main ml-1 font-black">1.2k</span></p>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Activity Grid */}
                                                        <div className="space-y-3 pt-4 border-t border-slate-100">
                                                            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                                <span>Actividad Live</span>
                                                                <span className="text-primary italic">En tiempo real</span>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-2">
                                                                {[1, 0.5, 0.8, 0.4, 0.9, 0.7, 0.3, 1, 0.6, 0.8].map((o, i) => (
                                                                    <div key={i} className="h-1.5 rounded-full bg-primary/10 overflow-hidden">
                                                                        <div className="h-full bg-primary" style={{ width: `${o * 100}%` }}></div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Insights - SMALLER */}
                            <div className="reveal-right lg:col-span-3 flex flex-col gap-6 md:pt-12">
                                {/* ROI Card */}
                                <div className="bg-text-main rounded-[2.5rem] p-6 md:p-8 text-white shadow-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 pointer-events-none">
                                        <span className="material-symbols-outlined text-[80px] font-bold">trending_up</span>
                                    </div>
                                    <div className="relative z-10 space-y-4">
                                        <div className="inline-flex px-3 py-1 rounded-lg bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 w-fit">RETORNO</div>
                                        <div className="space-y-0.5">
                                            <h3 className="text-4xl font-black text-white">x4.8</h3>
                                            <p className="text-slate-400 text-sm font-medium leading-tight">Frecuencia de compra.</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/10 space-y-3">
                                            <div className="flex justify-between items-end">
                                                <span className="text-[10px] font-bold text-slate-300">Retención</span>
                                                <span className="text-xl font-black text-primary">+85%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-[85%] bg-primary shadow-[0_0_15px_rgba(255,112,67,0.5)] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Community Growth Card */}
                                <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl flex items-center gap-6 group hover:shadow-2xl transition-all">
                                    <div className="size-20 rounded-[2rem] bg-orange-50 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl font-bold">diversity_3</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-text-muted uppercase tracking-[0.2em] mb-1">Fan Base</p>
                                        <p className="text-3xl font-black text-text-main">+2.4k</p>
                                        <p className="text-sm text-text-muted font-bold">Miembros nuevos este mes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="reveal py-4 px-6">
                    <div className="max-w-2xl mx-auto bg-blue-600 rounded-[1.5rem] p-8 md:p-10 text-center text-white overflow-hidden relative shadow-lg shadow-blue-900/20">
                        <div className="absolute top-0 left-0 p-8 opacity-10 pointer-events-none rotate-12">
                            <span className="material-symbols-outlined text-[120px] font-bold">hub</span>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight italic">
                                Tus datos nunca se vieron tan bien.
                            </h2>
                            <p className="text-blue-100 text-base max-w-sm mx-auto">
                                Deja de adivinar. Empieza a medir y escala tu negocio basado en evidencias reales.
                            </p>
                            <a href="https://fidelity-app-mvp.vercel.app/" className="interactive-button group inline-flex h-12 px-8 items-center justify-center rounded-xl bg-white text-blue-600 font-black text-lg hover:bg-blue-50 transition-all shadow-lg">
                                <span>Ver Demo Gratis</span>
                                <span className="material-symbols-outlined ml-2 text-primary group-hover:translate-x-1 transition-transform font-bold">rocket_launch</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DashboardScreen;
