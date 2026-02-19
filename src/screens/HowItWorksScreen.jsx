import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksScreen = () => {
    return (
        <div className="antialiased">
            <main className="flex-grow">
                <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 px-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                Tu programa de lealtad en <span className="text-primary italic">tres simples pasos</span>
                            </h1>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                                Sin hardware costoso ni integraciones complejas. Kpoint funciona directamente desde tu móvil o tablet, así de fácil.
                            </p>
                            {/* Premium Logo Presentation */}
                            <div className="mt-8 flex justify-center">
                                <div className="relative group">
                                    {/* Soft Ambient Glow */}
                                    <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    {/* Glassmorphism Container */}
                                    <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-md p-10 md:p-14 rounded-[3rem] border border-white/30 dark:border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        <img
                                            src="/logo_kpoint.png"
                                            alt="Kpoint Logo"
                                            className="h-32 md:h-48 w-auto object-contain"
                                        />

                                        {/* Decorative Badge */}
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-[#102216] px-5 py-1.5 rounded-full text-[11px] font-black tracking-[0.25em] uppercase shadow-lg border-2 border-white dark:border-slate-900">
                                            SOLUCIÓN PROBADA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative pt-10 pb-10 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
                            {/* Step 1 */}
                            <div className="relative group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <div className="absolute -top-10 left-8">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-[#102216] text-4xl font-black shadow-lg transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
                                        1
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Crea tu campaña</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                        Configura tus recompensas en minutos. Tú decides cuántos puntos cuesta cada premio y qué mensaje enviar a tus clientes.
                                    </p>
                                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border-l-4 border-primary">
                                        <p className="text-sm italic font-medium">"10 puntos = Café gratis"</p>
                                    </div>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <div className="absolute -top-10 left-8">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-[#102216] text-4xl font-black shadow-lg transform rotate-[5deg] group-hover:rotate-0 transition-transform duration-300">
                                        2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Escanea y suma</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                        En el momento de la compra, tu staff escanea el QR del cliente o ingresa su número. Los puntos se suman al instante.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <span className="material-symbols-outlined">qr_code_scanner</span>
                                        <span>Proceso de 3 segundos</span>
                                    </div>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <div className="absolute -top-10 left-8">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-[#102216] text-4xl font-black shadow-lg transform rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
                                        3
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Lealtad automatizada</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                        El sistema envía notificaciones a sus clientes informando sobre nuevos premios y ofertas, motivándolo a volver más seguido.
                                    </p>
                                    <div className="flex -space-x-4">
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 overflow-hidden"></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-green-500 overflow-hidden"></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-500 overflow-hidden"></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold">+500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative pt-10 pb-20 bg-gray-50 dark:bg-black">
                    <div className="px-4 mx-auto max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl font-black mb-8 dark:text-white">Potencia tu marketing con datos reales</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-sm">analytics</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold dark:text-white">Analítica inteligente</h4>
                                            <p className="text-gray-500 text-sm">Mira cuántos clientes nuevos tienes vs. recurrentes.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-500">
                                            <span className="material-symbols-outlined text-sm">campaign</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold dark:text-white">Mensajes automáticos</h4>
                                            <p className="text-gray-500 text-sm">Recupera clientes que no han vuelto en los últimos 30 días.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="relative p-6 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="h-2 w-20 rounded-full bg-gray-100 dark:bg-gray-800"></div>
                                    </div>
                                    <div className="pt-8 space-y-4">
                                        <div className="h-12 w-3/4 rounded-xl bg-gray-50 dark:bg-gray-800"></div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 rounded-2xl bg-primary/10 border border-primary/20 p-4 flex flex-col justify-between">
                                                <span className="text-xs font-bold text-primary uppercase">Mensual</span>
                                                <span className="text-2xl font-black dark:text-white">+84%</span>
                                                <span className="text-[10px] text-gray-400">Retención de clientes</span>
                                            </div>
                                            <div className="h-32 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 p-4 flex flex-col justify-between">
                                                <span className="text-xs font-bold text-blue-500 uppercase">Actividad</span>
                                                <span className="text-2xl font-black dark:text-white">1.2k</span>
                                                <span className="text-[10px] text-gray-400">Canjes realizados</span>
                                            </div>
                                        </div>
                                        <div className="h-24 rounded-2xl bg-gray-50 dark:bg-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="py-10 text-center">
                    <Link to="/pricing" className="inline-flex items-center gap-3 bg-gray-900 dark:bg-primary text-white dark:text-[#102216] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                        Empezar ahora gratis
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default HowItWorksScreen;
