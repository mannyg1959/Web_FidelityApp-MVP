import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const ProblemSolutionScreen = () => {
    useReveal();

    return (
        <div className="antialiased bg-background-light">
            <main className="flex flex-col">
                <section className="reveal py-8 px-6 text-center bg-white">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                            La Realidad del Mercado
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
                            Fidelizar <span className="text-primary italic">no debería</span> ser difícil
                        </h1>
                        <p className="text-lg text-text-muted leading-snug font-medium max-w-2xl mx-auto">
                            Olvídate de las tarjetas de papel y las apps que nadie descarga. Descubre por qué Kpoint es la evolución de la lealtad digital.
                        </p>
                    </div>
                </section>

                <section className="relative py-8 bg-white dark:bg-background-dark border-y border-orange-50 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch relative z-10">
                        {/* Card: Problem */}
                        <div className="reveal-left active flex flex-col bg-slate-50 dark:bg-surface-dark/50 rounded-[2.5rem] p-6 md:p-10 border border-red-100 dark:border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:shadow-[0_30px_70px_rgba(239,68,68,0.1)] transition-all duration-700">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black mb-4 border border-red-200">
                                <span className="material-symbols-outlined text-sm">warning</span>
                                EL STATUS QUO
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-3 tracking-tight">El Problema</h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg leading-snug font-medium mb-6">Los sistemas tradicionales generan fricción y alejan a tus clientes potenciales.</p>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: 'person_remove', title: 'Los clientes no vuelven', desc: 'Sin incentivos claros ni recordatorios, el 70% de los clientes elige a la competencia por precio o conveniencia.' },
                                    { icon: 'phonelink_erase', title: 'Apps complicadas', desc: 'Nadie quiere descargar otra aplicación que ocupa espacio, pide mil permisos y es difícil de entender.' },
                                    { icon: 'money_off', title: 'Ventas perdidas', desc: 'Sin datos de contacto, pierdes la oportunidad de comunicar ofertas y traerlos de vuelta en días lentos.' }
                                ].map((item, i) => (
                                    <div key={i} className="group flex gap-5">
                                        <div className="flex-shrink-0 size-12 rounded-xl bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-red-500 group-hover:scale-110 transition-all duration-500 group-hover:bg-red-50 group-hover:rotate-3">
                                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-text-main dark:text-white mb-1 tracking-tight">{item.title}</h3>
                                            <p className="text-base text-text-muted dark:text-gray-400 leading-snug font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>

                        {/* Card: Solution */}
                        <div className="reveal-right active flex flex-col bg-white dark:bg-background-dark rounded-[2.5rem] p-6 md:p-10 border border-orange-100 dark:border-gray-700 shadow-[0_20px_50px_rgba(255,112,67,0.15)] relative overflow-hidden group hover:shadow-[0_30px_70px_rgba(255,112,67,0.2)] transition-all duration-700">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]"></div>
                            <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-black mb-4 border border-orange-200">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                LA EVOLUCIÓN
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-3 tracking-tight">La Solución <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent italic">Kpoint</span></h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg leading-snug font-medium mb-6">Una plataforma simple que elimina barreras y fideliza al instante.</p>
                            
                            <div className="space-y-4">
                                {[
                                    { icon: 'check_circle', title: 'Recompensas sin fricción', desc: 'Acumula puntos y canjea premios con solo un código QR o número de teléfono. Tan rápido como un respiro.' },
                                    { icon: 'no_sim', title: 'Sin descargas', desc: 'Todo funciona desde el navegador web o PWA. Cero fricción para que tus clientes participen hoy mismo.' },
                                    { icon: 'sentiment_very_satisfied', title: 'Fácil para todos', desc: 'Interfaz ultra-intuitiva diseñada para que cualquier persona la use al instante, sin tutoriales.' }
                                ].map((item, i) => (
                                    <div key={i} className="group flex gap-5 p-4 rounded-[1.5rem] hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-all duration-500 -ml-4 border border-transparent hover:border-orange-100">
                                        <div className="flex-shrink-0 size-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500 group-hover:scale-110">
                                            <span className="material-symbols-outlined text-2xl font-bold">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-text-main dark:text-white mb-1 tracking-tight">{item.title}</h3>
                                            <p className="text-base text-text-muted dark:text-gray-400 leading-snug font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </section>

                <section className="reveal py-4 px-6 relative overflow-hidden">
                    <div className="max-w-2xl mx-auto bg-blue-600 rounded-[1.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-xl shadow-blue-900/20">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-none">No dejes que se escapen</h2>
                            <p className="text-blue-100 text-lg leading-snug max-w-md mb-6 font-medium">
                                Los clientes que amarán tu negocio están ahí fuera. Dales una razón poderosa para volver con Kpoint.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                                <a href="https://app.kpointve.com" className="interactive-button flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white text-blue-600 text-base font-black transition-all shadow-lg shadow-black/10">
                                    Pruébalo Gratis
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProblemSolutionScreen;
