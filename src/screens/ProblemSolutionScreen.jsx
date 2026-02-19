import React from 'react';
import { Link } from 'react-router-dom';

const ProblemSolutionScreen = () => {
    return (
        <div className="antialiased">
            <main className="flex flex-col">
                <section className="py-10 px-4 text-center bg-white dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                            Fidelizar clientes no debería ser difícil
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Olvídate de las tarjetas de papel y las apps que nadie descarga. Descubre por qué Kpoint es la evolución de la lealtad.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row min-h-[800px] w-full">
                    <div className="relative w-full lg:w-1/2 bg-[#f3f4f6] dark:bg-surface-dark px-8 py-10 md:px-16 lg:py-16 flex flex-col justify-center border-r border-gray-200/50 dark:border-gray-700">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                        <div className="relative z-10 max-w-lg mx-auto lg:mr-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-6">
                                <span className="material-symbols-outlined text-sm">warning</span>
                                SITUACIÓN ACTUAL
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">El Problema</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Los sistemas tradicionales generan fricción y alejan a tus clientes.</p>
                            <div className="space-y-8">
                                <div className="group flex gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">person_remove</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Los clientes no vuelven</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Sin incentivos claros ni recordatorios, el 70% de los clientes elige a la competencia por precio o conveniencia.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">phonelink_erase</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Apps complicadas</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Nadie quiere descargar otra aplicación que ocupa espacio en tu dispositivo, pide mil permisos y es difícil de usar.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">money_off</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ventas perdidas</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Sin datos de contacto, pierdes la oportunidad de comunicar ofertas y traerlos de vuelta en días lentos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 bg-white dark:bg-background-dark px-8 py-10 md:px-16 lg:py-16 flex flex-col justify-center shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)] z-10">
                        <div className="max-w-lg mx-auto lg:ml-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold mb-6">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                CON KPOINT
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">La Solución <span className="text-primary inline-block relative">Kpoint</span></h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Una plataforma simple que elimina barreras y fideliza al instante.</p>
                            <div className="space-y-8">
                                <div className="group flex gap-5 p-4 rounded-2xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-300 -ml-4">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary text-[#102216] flex items-center justify-center shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl font-bold">check_circle</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Recompensas sin fricción</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Acumula puntos y canjea premios con solo un número de teléfono. Tan rápido como un pago con tarjeta.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5 p-4 rounded-2xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-300 -ml-4">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary text-[#102216] flex items-center justify-center shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl font-bold">no_sim</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sin descargas obligatorias</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Todo funciona desde tu dispositivo móvil o el navegador web. Cero fricción para que tus clientes participen.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5 p-4 rounded-2xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-300 -ml-4">
                                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary text-[#102216] flex items-center justify-center shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl font-bold">sentiment_very_satisfied</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fácil para todos</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Interfaz intuitiva diseñada para que cualquier persona, desde jóvenes hasta mayores, la use al instante.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                                <a href="https://fidelity-app-mvp.vercel.app/" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-gray-900 dark:bg-white dark:text-gray-900 text-white text-base font-bold hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                    Crear cuenta gratis
                                    <span className="material-symbols-outlined text-primary dark:text-primary-dark">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 dark:bg-black py-12 px-4">
                    <div className="max-w-4xl mx-auto bg-[#102216] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Empieza a fidelizar hoy mismo</h2>
                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
                                Únete a cientos de negocios que ya están aumentando sus ventas recurrentes con Kpoint.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <a href="https://fidelity-app-mvp.vercel.app/" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-[#102216] text-base font-bold hover:bg-[#25d360] transition-colors shadow-[0_0_20px_rgba(43,238,108,0.3)]">
                                    Comenzar ahora
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
