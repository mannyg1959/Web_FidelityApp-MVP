import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsScreen = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111813] font-display antialiased">
            <main className="flex-1">
                <section className="px-6 md:px-10 lg:px-40 py-10 md:py-12 max-w-[1440px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                Transforma clientes ocasionales en <span className="text-primary italic">clientes para toda la vida</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mt-4">
                                Kpoint no es solo un monedero de puntos digital. Es el motor de crecimiento que tu negocio necesita para prosperar en la era digital.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                                <div className="space-y-3">
                                    <div className="size-12 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">trending_up</span>
                                    </div>
                                    <h3 className="text-xl font-bold dark:text-white">Aumento de Ingresos</h3>
                                    <p className="text-slate-500 text-sm">Los clientes fidelizados gastan hasta un 33% más por visita que los nuevos.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                        <span className="material-symbols-outlined text-3xl">psychology</span>
                                    </div>
                                    <h3 className="text-xl font-bold dark:text-white">Conoce a tu Cliente</h3>
                                    <p className="text-slate-500 text-sm">Recopila datos valiosos y preferencias para personalizar cada interacción.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -rotate-6"></div>
                            <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4">
                                        <span className="font-bold text-lg dark:text-white">Impacto Estimado</span>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">PROYECTADO</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm text-slate-500">Retención de clientes</span>
                                            <span className="text-2xl font-black text-primary">+45%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[85%] bg-primary"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm text-slate-500">Frecuencia de visita</span>
                                            <span className="text-2xl font-black text-primary">+2.4x</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-primary"></div>
                                        </div>
                                    </div>
                                    <div className="pt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                                        <p className="text-xs text-slate-500 mb-2">CLIENTE DESTACADO</p>
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-full bg-slate-200"></div>
                                            <div>
                                                <p className="text-sm font-bold dark:text-white">Eco Café Central</p>
                                                <p className="text-[10px] text-slate-400">Canjes hoy: 24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white border-t border-[#f0f4f2] py-12 dark:bg-background-dark dark:border-white/10">
                    <div className="px-6 md:px-10 lg:px-40 max-w-[1440px] mx-auto text-center">
                        <h2 className="text-3xl font-black mb-10 dark:text-white">Diseñado para cada sector</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl text-orange-500 mb-4">restaurant</span>
                                <h4 className="font-bold dark:text-white">Restaurantes</h4>
                            </div>
                            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">shopping_bag</span>
                                <h4 className="font-bold dark:text-white">Retail</h4>
                            </div>
                            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl text-blue-500 mb-4">content_cut</span>
                                <h4 className="font-bold dark:text-white">Estética</h4>
                            </div>
                            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl text-purple-500 mb-4">storefront</span>
                                <h4 className="font-bold dark:text-white">Kioscos</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 px-6">
                    <div className="max-w-[1000px] mx-auto bg-slate-900 dark:bg-primary rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="material-symbols-outlined text-9xl text-white dark:text-black">confirmation_number</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white dark:text-[#102216] mb-8 relative z-10">
                            ¿Listo para ver tu negocio crecer?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                            <button className="h-16 px-10 rounded-2xl bg-primary dark:bg-[#102216] text-[#102216] dark:text-white font-black text-lg hover:scale-105 transition-all shadow-2xl">
                                Solicitar Demo
                            </button>
                            <button className="h-16 px-10 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md text-white dark:text-black font-black text-lg hover:bg-white/20 transition-all border border-white/20">
                                Ver casos de éxito
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BenefitsScreen;
