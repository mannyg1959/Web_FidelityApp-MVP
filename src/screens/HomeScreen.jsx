import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const HomeScreen = () => {
    // Initialize reveal animations
    useReveal();

    return (
        <div className="flex w-full flex-col bg-background-light">
            <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-6 md:px-12 lg:px-20 lg:py-8">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-floating-slow"></div>
                    <div className="absolute top-1/2 -right-24 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-floating-delayed"></div>
                </div>

                <div className="layout-content-container flex w-full max-w-[1280px] flex-col gap-16 lg:flex-row lg:items-center">
                    {/* Left Column: Copy & CTAs */}
                    <div className="reveal-left active flex flex-1 flex-col gap-8">
                        <div className="flex flex-col gap-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold w-fit uppercase tracking-wider mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Nueva Generación de Fidelización
                            </div>
                            <h1 className="text-5xl font-black leading-none tracking-tighter text-text-main sm:text-6xl">
                                Convierte visitas en <span className="relative inline-block mt-2">
                                    <span className="bg-gradient-to-r from-primary via-orange-500 to-orange-400 bg-clip-text text-transparent italic pr-2">fans leales</span>
                                    <div className="h-1 w-full bg-primary/20 absolute -bottom-1 left-0 -rotate-1 rounded-full"></div>
                                </span>
                            </h1>
                            <p className="mt-4 text-lg leading-snug text-text-muted lg:max-w-[550px]">
                                KPoint es la plataforma de fidelización digital diseñada para el mercado Venezolano que genera confianza en tus clientes y conseguirás que aumenten la frecuencia con la que te visitan, sin complicaciones técnicas.
                            </p>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-1 text-base md:text-lg text-text-muted font-semibold">
                            <div className="flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-2xl text-primary md:text-3xl transition-all group-hover:scale-125">verified</span>
                                <span className="whitespace-nowrap">Sin registros complicados</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-2xl text-primary md:text-3xl transition-all group-hover:scale-125">speed</span>
                                <span className="whitespace-nowrap">Setup en 3 minutos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Static Hero Image */}
                    <div className="relative flex flex-1 items-center justify-center lg:justify-end">
                        <img 
                            src="/hero-image.png" 
                            alt="KPoint Platform" 
                            className="w-full max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </div>
            </main>

            <section className="w-full bg-background-subtle py-8 relative overflow-hidden">
                <div className="layout-content-container mx-auto flex max-w-[1280px] flex-col gap-16 px-6 md:px-12 lg:px-20">
                    <div className="reveal flex flex-col items-center text-center gap-4">
                        <h2 className="text-4xl font-black text-text-main sm:text-5xl leading-none">Diseñado para el <span className="text-primary italic">crecimiento</span></h2>
                        <p className="text-text-muted text-lg leading-snug max-w-2xl font-medium">Herramientas potentes con una interfaz que tus clientes amarán desde el primer día.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="reveal-scale group flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4 h-fit">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-text-main">Fácil de usar</h3>
                                <p className="text-base text-text-muted leading-snug font-medium">Interfaz intuitiva diseñada para que tus clientes amen volver sin frustraciones tecnológicas.</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </div>
                        </div>

                        <div className="reveal-scale group flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4 md:translate-y-2 h-fit">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:-rotate-6">
                                <span className="material-symbols-outlined text-[24px]">palette</span>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-text-main">Personalizable</h3>
                                <p className="text-base text-text-muted leading-snug font-medium">Adapta colores, recompensas y <span className="text-primary font-bold underline decoration-primary/30">tu logo</span> para una identidad única.</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </div>
                        </div>

                        <div className="reveal-scale group flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4 h-fit">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                <span className="material-symbols-outlined text-[24px]">monitoring</span>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-text-main">Data Real</h3>
                                <p className="text-base text-text-muted leading-snug font-medium">Conoce a tus mejores clientes y optimiza tus campañas con análisis detallados en vivo.</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="reveal w-full py-4 px-6">
                <div className="mx-auto max-w-2xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 p-6 md:p-8 text-center relative overflow-hidden shadow-[0_30px_70px_-10px_rgba(0,40,200,0.4)]">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-black text-white sm:text-5xl max-w-md leading-none">¿Listo para transformar tu negocio?</h2>
                        <p className="text-blue-100 text-lg leading-snug max-w-sm">Únete a cientos de comercios que ya están digitalizando su lealtad.</p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-1">
                            <button className="interactive-button h-12 px-8 bg-white text-blue-600 font-black rounded-xl text-base transition-transform hover:scale-105 shadow-lg shadow-black/10">
                                Comenzar Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;
