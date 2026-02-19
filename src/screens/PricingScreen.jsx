import React from 'react';
import { Link } from 'react-router-dom';

const PricingScreen = () => {
    return (
        <div className="flex flex-col">
            <main className="flex-1">
                <section className="py-10 px-4 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Precios simples para <span className="text-primary italic">crecer.</span></h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">Escoge el plan que mejor se adapte al tamaño de tu negocio.</p>
                </section>
                <section className="px-4 pb-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Starter</h3>
                                <p className="text-slate-500 text-sm">Ideal para pequeños negocios locales.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-black">$29</span>
                                <span className="text-slate-400">/mes</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Hasta 500 clientes activos</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Tarjetas de sellos digitales</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center text-slate-400">
                                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                                    <span>Soporte por email</span>
                                </li>
                            </ul>
                        </div>
                        {/* Growth */}
                        <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-10 border-4 border-primary flex flex-col h-full shadow-2xl relative transform scale-105 z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-[#102216] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                MÁS POPULAR
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                                <p className="text-slate-400 text-sm">Para negocios en expansión.</p>
                            </div>
                            <div className="mb-8 text-white">
                                <span className="text-5xl font-black">$59</span>
                                <span className="text-slate-400">/mes</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-white">
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                    <span>Clientes ilimitados</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                    <span>Analítica avanzada</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                    <span>Campañas automáticas</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                    <span>Soporte prioritario 24/7</span>
                                </li>
                            </ul>
                        </div>
                        {/* Enterprise */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                                <p className="text-slate-500 text-sm">Para franquicias y múltiples puntos.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-4xl font-black">Consúltanos</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1 text-sm">
                                <li className="flex gap-3 items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Multi-tienda unificado</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>API de integración</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Account Manager dedicado</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-slate-50 dark:bg-slate-950">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-black mb-8">¿Tienes más preguntas?</h2>
                        <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all">
                            Habla con un experto de Kpoint
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PricingScreen;
