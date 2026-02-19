import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div className="flex w-full flex-col overflow-x-hidden">
            <main className="flex flex-1 flex-col items-center justify-center px-6 py-6 md:px-12 lg:px-20 lg:py-12">
                <div className="layout-content-container flex w-full max-w-[1280px] flex-col gap-16 lg:flex-row lg:items-center">
                    {/* Left Column: Copy & CTAs */}
                    <div className="flex flex-1 flex-col gap-6 lg:max-w-[600px]">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-text-main sm:text-6xl lg:text-[4rem]">
                                Convierte visitas ocasionales en <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">fans leales.</span>
                            </h1>
                            <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
                                KPoint es la plataforma de fidelización digital que simplifica las recompensas, digitaliza tu tarjeta de sellos y potencia el crecimiento de tu negocio sin complicaciones técnicas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link to="/pricing" className="group flex h-14 min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-text-main shadow-glow transition-all hover:-translate-y-1 hover:bg-[#1fe260]">
                                <span>Solicitar Demo</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </Link>
                            <Link to="/how-it-works" className="group flex h-14 min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#dbe6df] bg-white px-8 text-base font-bold text-text-main transition-all hover:border-primary/50 hover:bg-background-subtle hover:text-green-800">
                                <span className="material-symbols-outlined text-green-600">play_circle</span>
                                <span>Cómo funciona</span>
                            </Link>
                        </div>
                        <div className="mt-4 flex items-center gap-6 text-sm text-text-muted">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-600">check_circle</span>
                                <span>Sin registros complicados de afiliación</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-600">check_circle</span>
                                <span>Setup en 3 minutos</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: 3D Mockup */}
                    <div className="relative flex flex-1 items-center justify-center perspective-container lg:justify-end">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl"></div>
                        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
                        <div className="card-3d relative w-[320px] sm:w-[380px]">
                            <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-soft-xl">
                                <div className="relative flex h-[600px] flex-col bg-background-subtle p-6">
                                    <div className="mb-6 flex justify-between px-2">
                                        <span className="text-xs font-semibold text-gray-400">9:41</span>
                                        <div className="flex gap-1">
                                            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                                            <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                                        </div>
                                    </div>
                                    <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-text-main to-[#2d3a31] p-6 text-white shadow-lg">
                                        <div className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full bg-white/5 blur-2xl"></div>
                                        <div className="mb-8 flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-sm">
                                                    <img src="/logo_kpoint.png" alt="Logo" className="h-full w-full object-contain" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold">Kpoint Café</h3>
                                                    <p className="text-xs text-gray-300">Miembro desde 2023</p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-white/50">qr_code_2</span>
                                        </div>
                                        <div className="mb-2 flex items-end justify-between">
                                            <span className="text-3xl font-bold text-primary">8<span className="text-lg text-white/60">/10</span></span>
                                            <span className="text-xs font-medium uppercase tracking-wider text-primary">Puntos</span>
                                        </div>
                                        <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                                            <div className="absolute left-0 top-0 h-full w-[80%] rounded-full bg-primary shadow-[0_0_10px_rgba(43,238,108,0.5)]"></div>
                                        </div>
                                        <p className="mt-3 text-sm font-medium text-gray-300">
                                            ¡Estás a 2 puntos de tu próximo café gratis!
                                        </p>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <h4 className="px-2 text-sm font-semibold text-text-muted">Actividad Reciente</h4>
                                        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                                                <span className="material-symbols-outlined text-[20px]">add</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-text-main">Chocolate Savoy Grande</p>
                                                <p className="text-xs text-text-muted">Ayer, 10:30 AM</p>
                                            </div>
                                            <span className="font-bold text-primary">+1 pt</span>
                                        </div>
                                        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                                                <span className="material-symbols-outlined text-[20px]">add</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-text-main">CocaCola 1 Litro</p>
                                                <p className="text-xs text-text-muted">12 Oct, 09:15 AM</p>
                                            </div>
                                            <span className="font-bold text-primary">+1 pt</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-around border-t border-gray-100 pt-4 text-gray-400">
                                        <span className="material-symbols-outlined text-text-main">home</span>
                                        <span className="material-symbols-outlined">wallet</span>
                                        <span className="material-symbols-outlined">notifications</span>
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -left-12 bottom-32 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl backdrop-blur-lg sm:-left-16">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-text-main">
                                    <span className="material-symbols-outlined">redeem</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-text-muted">Recompensa</p>
                                    <p className="text-sm font-bold text-text-main">Café Gratis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-full bg-white py-10">
                <div className="layout-content-container mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                        <div className="flex flex-col gap-4 rounded-2xl border border-[#e5ebe7] p-8 transition-colors hover:border-primary/50 hover:bg-background-subtle">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                                <span className="material-symbols-outlined text-[28px]">sentiment_satisfied</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-main">Fácil de usar</h3>
                                <p className="text-text-muted">Interfaz intuitiva diseñada para que tus clientes amen volver sin frustraciones tecnológicas.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-2xl border border-[#e5ebe7] p-8 transition-colors hover:border-primary/50 hover:bg-background-subtle">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                                <span className="material-symbols-outlined text-[28px]">palette</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-main text-primary">100% Personalizable</h3>
                                <p className="text-text-muted">Adapta los colores, recompensas y <span className="font-bold underline decoration-primary/40 text-primary">tu logo</span> para que tu programa de lealtad sea único.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-2xl border border-[#e5ebe7] p-8 transition-colors hover:border-primary/50 hover:bg-background-subtle">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                                <span className="material-symbols-outlined text-[28px]">monitoring</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-main">Datos en tiempo real</h3>
                                <p className="text-text-muted">Conoce quiénes son tus mejores clientes y optimiza tus campañas con análisis detallados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default HomeScreen;
