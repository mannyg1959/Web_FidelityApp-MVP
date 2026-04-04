import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const HomeScreen = () => {
    // Initialize reveal animations
    useReveal();

    return (
        <div className="flex w-full flex-col overflow-x-hidden bg-background-light">
            <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-20 lg:py-24">
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
                                    <span className="bg-gradient-to-r from-primary via-orange-500 to-orange-400 bg-clip-text text-transparent italic">fans leales</span>
                                    <div className="h-1 w-full bg-primary/20 absolute -bottom-1 left-0 -rotate-1 rounded-full"></div>
                                </span>
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-text-muted sm:text-xl lg:max-w-[550px]">
                                KPoint es la plataforma de fidelización digital que simplifica las recompensas, digitaliza tu tarjeta de sellos y potencia el crecimiento de tu negocio sin complicaciones técnicas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a href="https://fidelity-app-mvp.vercel.app/" className="interactive-button group flex h-16 min-w-[200px] cursor-pointer items-center justify-center gap-3 rounded-2xl bg-primary px-8 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                                <span>Solicitar Demo</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </a>
                            <Link to="/how-it-works" className="interactive-button group flex h-16 min-w-[200px] cursor-pointer items-center justify-center gap-3 rounded-2xl border border-orange-200 bg-white/50 backdrop-blur-sm px-8 text-lg font-bold text-text-main transition-all hover:border-primary/50 hover:bg-white hover:shadow-md">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">play_circle</span>
                                <span>Cómo funciona</span>
                            </Link>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-8 text-sm text-text-muted font-medium">
                            <div className="flex items-center gap-2 group">
                                <span className="material-symbols-outlined text-primary transition-all group-hover:scale-125">verified</span>
                                <span>Sin registros complicados</span>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <span className="material-symbols-outlined text-primary transition-all group-hover:scale-125">speed</span>
                                <span>Setup en 3 minutos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3D Mockup */}
                    <div className="reveal-right active relative flex items-center justify-center perspective-container lg:justify-start pl-0 lg:pl-8">
                        {/* Decorative background elements behind the phone */}
                        <div className="absolute w-[225px] h-[225px] bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
                        
                        <div className="card-3d relative w-[320px] sm:w-[380px] z-10" style={{zoom: '0.5'}}>
                            <div className="relative overflow-hidden rounded-[3rem] border-[12px] border-text-main bg-white shadow-2xl scale-105 sm:scale-110">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-text-main rounded-b-3xl z-20"></div>
                                <div className="relative flex h-[650px] flex-col bg-[#FAFAFA] p-6 pt-10">
                                    <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-text-main via-[#2d241f] to-[#1a1614] p-6 text-white shadow-xl">
                                        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
                                        <div className="mb-10 flex items-start justify-between relative z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2 shadow-inner">
                                                    <img src="/logo_kpoint.png" alt="Logo" className="h-full w-full object-contain" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold tracking-tight">Kpoint Café</h3>
                                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Gold Member</p>
                                                </div>
                                            </div>
                                            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
                                                <span className="material-symbols-outlined text-white text-xl">qr_code_2</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 flex items-end justify-between relative z-10">
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Tu Progreso</p>
                                                <span className="text-4xl font-black text-primary">8<span className="text-xl text-white/50 font-medium">/10</span></span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full text-primary">2 pts faltantes</span>
                                        </div>
                                        <div className="relative h-4 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
                                            <div className="absolute left-0 top-0 h-full w-[80%] rounded-full bg-gradient-to-r from-primary to-orange-400 shadow-[0_0_20px_rgba(255,112,67,0.6)] animate-pulse"></div>
                                        </div>
                                        <p className="mt-5 text-sm font-medium text-gray-300 leading-snug">
                                            ¡Estás a solo 2 puntos de tu próximo café gratis! ☕
                                        </p>
                                    </div>
                                    <div className="flex-1 space-y-5">
                                        <div className="flex justify-between items-center px-2">
                                            <h4 className="text-sm font-bold text-text-main">Actividad</h4>
                                            <button className="text-[10px] font-bold text-primary uppercase">Ver todo</button>
                                        </div>
                                        <div className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm border border-orange-50 transition-all hover:shadow-md hover:-translate-y-1">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-[24px]">coffee</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-text-main">Chocolate Savoy</p>
                                                <p className="text-[10px] font-medium text-text-muted italic">Ayer, 10:30 AM</p>
                                            </div>
                                            <span className="font-black text-primary">+1 pt</span>
                                        </div>
                                        <div className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm border border-orange-50 transition-all hover:shadow-md hover:-translate-y-1">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-[24px]">local_cafe</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-text-main">Capuccino Grande</p>
                                                <p className="text-[10px] font-medium text-text-muted italic">12 Oct, 09:15 AM</p>
                                            </div>
                                            <span className="font-black text-primary">+1 pt</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-around bg-white rounded-full py-4 shadow-inner border border-gray-50">
                                        <span className="material-symbols-outlined text-primary scale-110">home</span>
                                        <span className="material-symbols-outlined text-gray-300">wallet</span>
                                        <span className="material-symbols-outlined text-gray-300">notifications</span>
                                        <span className="material-symbols-outlined text-gray-300">person</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Recompensa Card */}
                            <div className="absolute -left-12 bottom-32 flex items-center gap-4 rounded-2xl bg-white/90 p-5 shadow-2xl backdrop-blur-xl border border-white sm:-left-20 animate-floating z-30">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                    <span className="material-symbols-outlined">redeem</span>
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-tighter">Recompensa Lista</p>
                                    <p className="text-base font-black text-text-main">¡Café Gratis!</p>
                                </div>
                            </div>

                            {/* Floating Analytics Card */}
                            <div className="absolute -right-8 top-10 flex flex-col items-start gap-1 rounded-2xl bg-text-main p-4 shadow-2xl sm:-right-12 animate-floating-delayed z-30">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">En Vivo</p>
                                </div>
                                <p className="text-xs text-white/70">Usuarios Hoy</p>
                                <p className="text-xl font-black text-white">+12%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="w-full bg-background-subtle py-24 relative overflow-hidden">
                <div className="layout-content-container mx-auto flex max-w-[1280px] flex-col gap-16 px-6 md:px-12 lg:px-20">
                    <div className="reveal flex flex-col items-center text-center gap-4">
                        <h2 className="text-4xl font-black text-text-main sm:text-5xl leading-none">Diseñado para el <span className="text-primary italic">crecimiento</span></h2>
                        <p className="text-text-muted text-lg max-w-2xl font-medium">Herramientas potentes con una interfaz que tus clientes amarán desde el primer día.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="reveal-scale group flex flex-col gap-6 rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                <span className="material-symbols-outlined text-[32px]">sentiment_satisfied</span>
                            </div>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-text-main">Fácil de usar</h3>
                                <p className="text-text-muted leading-relaxed font-medium">Interfaz intuitiva diseñada para que tus clientes amen volver sin frustraciones tecnológicas.</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-primary font-bold text-sm">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>

                        <div className="reveal-scale group flex flex-col gap-6 rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4 md:translate-y-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:-rotate-6">
                                <span className="material-symbols-outlined text-[32px]">palette</span>
                            </div>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-text-main">Personalizable</h3>
                                <p className="text-text-muted leading-relaxed font-medium">Adapta colores, recompensas y <span className="text-primary font-bold underline decoration-primary/30">tu logo</span> para una identidad única.</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-primary font-bold text-sm">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>

                        <div className="reveal-scale group flex flex-col gap-6 rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                <span className="material-symbols-outlined text-[32px]">monitoring</span>
                            </div>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-text-main">Data Real</h3>
                                <p className="text-text-muted leading-relaxed font-medium">Conoce a tus mejores clientes y optimiza tus campañas con análisis detallados en vivo.</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-primary font-bold text-sm">
                                <span>Ver detalles</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="reveal w-full py-12 px-6">
                <div className="mx-auto max-w-2xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-center relative overflow-hidden shadow-[0_30px_70px_-10px_rgba(0,40,200,0.4)]">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-black text-white sm:text-5xl max-w-md leading-none">¿Listo para transformar tu negocio?</h2>
                        <p className="text-blue-100 text-base max-w-sm">Únete a cientos de comercios que ya están digitalizando su lealtad.</p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-1">
                            <button className="interactive-button h-12 px-6 bg-white text-blue-600 font-black rounded-xl text-base transition-transform hover:scale-105 shadow-lg shadow-black/10">
                                Comenzar Gratis
                            </button>
                            <button className="interactive-button h-12 px-6 bg-blue-500/30 text-white font-black rounded-xl text-base backdrop-blur-md border border-white/20 transition-colors hover:bg-blue-500/40">
                                Contactar Ventas
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;
