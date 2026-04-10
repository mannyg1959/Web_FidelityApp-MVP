import React from 'react';
import { useReveal } from '../hooks/useReveal';

const HowItWorksScreen = () => {
    useReveal();

    return (
        <div className="antialiased bg-background-light">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="reveal relative overflow-hidden pt-8 pb-4 px-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest">
                                Simplicidad Radical
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
                                Tu programa de lealtad en <br />
                                <span className="text-primary italic">tres simples pasos</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-text-muted font-medium leading-snug">
                                Sin hardware costoso ni integraciones complejas. Kpoint funciona directamente desde cualquier dispositivo, reinventando la conexión con tus clientes.
                            </p>

                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="relative py-8 bg-white border-y border-orange-50">
                    <div className="px-6 mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-3 lg:gap-x-16">
                            {[
                                {
                                    step: '1',
                                    title: 'Crea tu campaña',
                                    desc: 'Configura tus recompensas en segundos. Tú decides el valor de cada punto y qué premios emocionarán a tus clientes.',
                                    extra: '10 puntos = Café gratis',
                                    rotation: '-rotate-6'
                                },
                                {
                                    step: '2',
                                    title: 'Escanea y suma',
                                    desc: 'En el checkout, escanea el QR único del cliente o ingresa su número. Los puntos se acreditan en tiempo real.',
                                    extra: 'Proceso de 3 segundos',
                                    rotation: 'rotate-3',
                                    icon: 'qr_code_scanner'
                                },
                                {
                                    step: '3',
                                    title: 'Fidelización Activa',
                                    desc: 'El sistema automatiza el seguimiento, enviando notificaciones sobre nuevos premios y motivándolos a volver.',
                                    extra: '+500 clientes activos',
                                    rotation: '-rotate-3',
                                    users: true
                                }
                            ].map((item, i) => (
                                <div key={i} className={`reveal-scale group relative p-10 rounded-[3rem] transition-all duration-700 bg-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0_45px_90px_-20px_rgba(0,0,0,0.2)] border border-transparent hover:border-orange-100`}>
                                    <div className="absolute -top-12 left-10">
                                        <div className={`flex items-center justify-center size-24 rounded-3xl bg-primary text-white text-5xl font-black shadow-2xl shadow-primary/30 transform ${item.rotation} group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}>
                                            {item.step}
                                        </div>
                                    </div>
                                    <div className="mt-10 space-y-6">
                                        <h3 className="text-3xl font-black text-text-main mb-6 tracking-tight">{item.title}</h3>
                                        <p className="text-text-muted text-base leading-snug font-medium">
                                            {item.desc}
                                        </p>
                                        
                                        {item.users ? (
                                            <div className="flex items-center gap-4">
                                                <div className="flex -space-x-4">
                                                    {[1,2,3].map(n => (
                                                        <div key={n} className="w-12 h-12 rounded-2xl border-4 border-white bg-orange-200 overflow-hidden shadow-sm"></div>
                                                    ))}
                                                    <div className="w-12 h-12 rounded-2xl border-4 border-white bg-text-main flex items-center justify-center text-xs font-black text-white">+50</div>
                                                </div>
                                                <span className="text-sm font-bold text-text-muted">{item.extra}</span>
                                            </div>
                                        ) : item.icon ? (
                                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-orange-100 text-orange-900 font-black text-sm">
                                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                                <span>{item.extra}</span>
                                            </div>
                                        ) : (
                                            <div className="p-5 bg-white rounded-2xl border-l-[6px] border-primary shadow-sm">
                                                <p className="text-lg italic font-bold text-text-main">"{item.extra}"</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Analytics Section */}
                <section className="reveal relative py-8 bg-slate-50 overflow-hidden">
                    <div className="px-6 mx-auto max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                        Data-Driven Marketing
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight">
                                        Potencia tu negocio con <span className="text-blue-600 italic">datos reales</span>
                                    </h2>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { icon: 'analytics', title: 'Analítica en tiempo real', desc: 'Identifica patrones de compra y segmenta a tus mejores clientes automáticamente.', color: 'text-blue-500', bg: 'bg-blue-50' },
                                        { icon: 'campaign', title: 'Marketing de precisión', desc: 'Envía ofertas personalizadas que traen de vuelta a clientes inactivos en días lentos.', color: 'text-orange-500', bg: 'bg-orange-50' }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-start gap-6 group">
                                            <div className={`mt-1 flex-shrink-0 size-14 rounded-2xl ${feat.bg} flex items-center justify-center ${feat.color} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                                <span className="material-symbols-outlined text-3xl font-bold">{feat.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black text-text-main mb-2 tracking-tight">{feat.title}</h4>
                                                <p className="text-text-muted text-lg leading-snug font-medium">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="relative p-6 md:p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100 dark:border-gray-800 rotate-2 hover:rotate-0 transition-all duration-700">
                                    <div className="space-y-8">
                                        <div className="h-14 w-2/3 rounded-2xl bg-slate-50 dark:bg-gray-800 animate-pulse"></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                            <div className="h-40 md:h-44 rounded-[2rem] md:rounded-[2.5rem] bg-orange-50 border border-orange-100 p-6 md:p-8 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
                                                <span className="text-[10px] md:text-xs font-black text-orange-900 uppercase tracking-widest group-hover:text-white">Retención</span>
                                                <span className="text-3xl md:text-5xl font-black text-text-main group-hover:text-white">+84%</span>
                                                <div className="h-1.5 w-full bg-orange-200 rounded-full group-hover:bg-white/30 overflow-hidden">
                                                    <div className="h-full bg-primary group-hover:bg-white w-[84%]"></div>
                                                </div>
                                            </div>
                                            <div className="h-40 md:h-44 rounded-[2rem] md:rounded-[2.5rem] bg-blue-50 border border-blue-100 p-6 md:p-8 flex flex-col justify-between group hover:bg-blue-600 transition-colors duration-500">
                                                <span className="text-[10px] md:text-xs font-black text-blue-900 uppercase tracking-widest group-hover:text-white">Actividad</span>
                                                <span className="text-3xl md:text-5xl font-black text-text-main group-hover:text-white">1.2k</span>
                                                <span className="text-[10px] md:text-sm font-bold text-blue-400 group-hover:text-blue-100 font-medium">Canjes este mes</span>
                                            </div>
                                        </div>
                                        <div className="h-32 rounded-[2.5rem] bg-slate-50 dark:bg-gray-800 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="reveal py-8 px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-none">Listo para ver la magia?</h2>
                        <a href="https://fidelity-app-mvp.vercel.app/" className="interactive-button group inline-flex items-center gap-4 bg-text-main text-white px-14 py-6 rounded-3xl font-black text-2xl hover:bg-black transition-all shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-2">
                            <span>Empezar Ahora</span>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform text-3xl font-bold">rocket_launch</span>
                        </a>
                        <p className="text-text-muted font-bold text-lg leading-snug">Prueba gratuita de 60 días. Sin tarjeta de crédito.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HowItWorksScreen;
