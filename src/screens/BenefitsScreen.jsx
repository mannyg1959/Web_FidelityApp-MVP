import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const BenefitsScreen = () => {
    useReveal();

    return (
        <div className="antialiased bg-background-light">
            <main className="flex-1">
                <section className="px-6 md:px-10 lg:px-40 py-6 max-w-[1440px] mx-auto relative">
                    <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-floating-slow"></div>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="reveal-left active flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold w-fit uppercase tracking-wider">
                                Beneficios Exclusivos
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white leading-none tracking-tighter">
                                Transforma clientes ocasionales en <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent italic">fans para toda la vida</span>
                            </h1>
                            <p className="text-lg text-text-muted dark:text-slate-400 leading-snug max-w-2xl mt-4 font-medium">
                                Kpoint no es solo un monedero de puntos digital. Es el motor de crecimiento que tu negocio necesita para prosperar en la era digital.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-4 group">
                                    <div className="size-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-3xl">trending_up</span>
                                    </div>
                                    <h3 className="text-2xl font-bold dark:text-white">Aumento de Ingresos</h3>
                                    <p className="text-text-muted text-base font-medium leading-snug">Los clientes fidelizados gastan hasta un 33% más por visita que los nuevos.</p>
                                </div>
                                <div className="space-y-4 group">
                                    <div className="size-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 transition-all group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white">
                                        <span className="material-symbols-outlined text-3xl">psychology</span>
                                    </div>
                                    <h3 className="text-2xl font-bold dark:text-white">Conoce a tu Cliente</h3>
                                    <p className="text-text-muted text-base font-medium leading-snug">Recopila datos valiosos y preferencias para personalizar cada interacción.</p>
                                </div>
                            </div>
                        </div>
                        <div className="reveal-right active flex-1 relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-[3.5rem] blur-3xl -rotate-6 animate-pulse"></div>
                            <div className="relative glass-card rounded-[3rem] p-10 shadow-2xl border-white/40">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between border-b border-orange-100 dark:border-slate-800 pb-6">
                                        <span className="font-black text-xl text-text-main dark:text-white uppercase tracking-tight">Impacto Estimado</span>
                                        <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">PROYECTADO</span>
                                    </div>
                                    <div className="space-y-5">
                                        <div className="flex justify-between items-end gap-2">
                                            <span className="text-xs font-black text-text-muted uppercase tracking-wider">Retención de clientes</span>
                                            <span className="text-2xl font-black text-primary leading-none">+45%</span>
                                        </div>
                                        <div className="h-3 w-full bg-orange-50 dark:bg-slate-800 rounded-full overflow-hidden border border-orange-100 shadow-inner group-hover:scale-y-125 transition-transform duration-500">
                                            <div className="h-full w-[85%] bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-[0_0_15px_rgba(255,112,67,0.4)]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-5">
                                        <div className="flex justify-between items-end gap-2">
                                            <span className="text-xs font-black text-text-muted uppercase tracking-wider">Frecuencia de visita</span>
                                            <span className="text-2xl font-black text-primary leading-none">+2.4x</span>
                                        </div>
                                        <div className="h-3 w-full bg-orange-50 dark:bg-slate-800 rounded-full overflow-hidden border border-orange-100 shadow-inner group-hover:scale-y-125 transition-transform duration-500">
                                            <div className="h-full w-[70%] bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-[0_0_15px_rgba(255,112,67,0.4)]"></div>
                                        </div>
                                    </div>
                                    <div className="pt-6 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                        <p className="text-[10px] font-black text-primary mb-3 uppercase tracking-widest">CLIENTE DESTACADO</p>
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-primary shadow-sm font-black italic">E</div>
                                            <div>
                                                <p className="text-base font-black text-text-main dark:text-white">Eco Café Central</p>
                                                <p className="text-xs font-bold text-text-muted">Canjes hoy: <span className="text-primary">24</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="reveal w-full border-t border-orange-50 py-6 bg-white">
                    <div className="px-6 md:px-10 lg:px-40 max-w-[1440px] mx-auto text-center">
                        <div className="flex flex-col items-center mb-16 space-y-4">
                            <h2 className="text-4xl font-black text-text-main sm:text-5xl tracking-tight">Potencial sin límites</h2>
                            <p className="text-text-muted text-lg leading-snug max-w-2xl font-medium">Kpoint se adapta a la naturaleza de tu negocio con herramientas específicas.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: 'restaurant', label: 'Restaurantes', color: 'text-orange-500', bg: 'bg-orange-50' },
                                { icon: 'shopping_bag', label: 'Retail', color: 'text-primary', bg: 'bg-orange-50' },
                                { icon: 'content_cut', label: 'Estética', color: 'text-blue-500', bg: 'bg-blue-50' },
                                { icon: 'storefront', label: 'Kioscos', color: 'text-purple-500', bg: 'bg-purple-50' }
                            ].map((item, i) => (
                                <div key={i} className="reveal-scale group p-4 py-6 rounded-3xl bg-background-light border border-slate-100 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 h-fit">
                                    <div className={`size-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-3 mx-auto transition-all group-hover:scale-110 group-hover:rotate-6`}>
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-text-main">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories Section */}
                <section id="casos-exito" className="py-8 px-6 bg-background-subtle relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    <div className="max-w-[1280px] mx-auto relative z-10">
                        <div className="reveal text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight">Lo que dicen nuestros clientes</h2>
                            <p className="text-lg text-text-muted leading-snug font-medium">Resultados reales de negocios que ya usan Kpoint.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    name: 'Kiosko "Santa Ana"',
                                    quote: 'La verdad es que con Kpoint, nuestros clientes se sienten mas motivados a volver. Con solo escanear su código QR, suman y cajean sus puntos... Lo mejor es que en plena hora pico no nos quita ni 10 segundos.',
                                    metrics: [
                                        { val: '+45%', lab: 'Recurrencia' },
                                        { val: '10s', lab: 'Registro' },
                                        { val: '2.1k', lab: 'Clientes' }
                                    ],
                                    icon: 'storefront'
                                },
                                {
                                    name: 'GalaxyBurguers',
                                    quote: 'Nuestros clientes aman sumar puntos con cada hamburguesa y perro caliente. Pasamos de ser un simple puesto de comida rápida a ser su parada obligatoria de todas las semanas.',
                                    metrics: [
                                        { val: 'x2.8', lab: 'Visitas' },
                                        { val: '+30%', lab: 'Ticket' },
                                        { val: '92%', lab: 'Lealtad' }
                                    ],
                                    icon: 'lunch_dining'
                                }
                            ].map((story, i) => (
                                <div key={i} className="reveal-scale bg-white rounded-[3rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-9xl text-primary">{story.icon}</span>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-1 mb-8 text-primary">
                                            {[...Array(5)].map((_, j) => (
                                                <span key={j} className="material-symbols-outlined text-xl icon-filled">star</span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-black mb-6 text-text-main">{story.name}</h3>
                                        <p className="text-text-muted text-lg mb-8 leading-relaxed italic font-medium">
                                            "{story.quote}"
                                        </p>
                                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-orange-50">
                                            {story.metrics.map((metric, k) => (
                                                <div key={k} className="space-y-1">
                                                    <p className="text-2xl font-black text-primary leading-none">{metric.val}</p>
                                                    <p className="text-[9px] uppercase font-black text-text-muted tracking-[0.1em] mt-1">{metric.lab}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="reveal py-4 px-6">
                    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-[1.5rem] p-8 md:p-10 flex flex-col items-center text-center overflow-hidden relative shadow-xl shadow-blue-900/20">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
                        
                        <div className="absolute top-6 right-6 opacity-10">
                            <span className="material-symbols-outlined text-6xl text-white font-bold">confirmation_number</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10 leading-none">
                            ¿Listo para ver tu negocio crecer?
                        </h2>
                        
                        <div className="relative z-10">
                            <button className="interactive-button h-12 px-8 bg-white text-blue-600 font-black rounded-xl text-base transition-transform hover:scale-105 shadow-lg shadow-black/10">
                                Empieza Ahora
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BenefitsScreen;
