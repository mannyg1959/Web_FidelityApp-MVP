import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingScreen = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Mis clientes tienen que descargar una aplicación pesada para acumular puntos?",
            answer: "¡Para nada! Sabemos que la gente no quiere llenar su teléfono de aplicaciones que consumen memoria. Con KPoint, tus clientes acceden a su monedero de premios digital simplemente escaneando un código QR en tu kiosco. Rápido, sin fricciones y perfecto para mantener la agilidad cuando tienes fila esperando sus productos."
        },
        {
            question: "¿Necesito comprar escáneres, pantallas o equipos costosos?",
            answer: "No. Todo el sistema está diseñado para funcionar directamente desde el teléfono celular que ya tienes en tu negocio. Solo necesitas conexión a internet y la cámara de tu teléfono para escanear a tus clientes y otorgar los puntos por cada perro caliente o combo que vendas."
        },
        {
            question: "¿Me exigen firmar contratos a largo plazo?",
            answer: "Cero ataduras. Creemos en ganar tu confianza mes a mes con resultados reales. Puedes cancelar tu plan en cualquier momento, sin penalizaciones ni letras pequeñas engañosas."
        },
        {
            question: "¿Cuáles son los métodos de pago para mi suscripción mensual?",
            answer: "Pensando en la realidad comercial de tu negocio local, ofrecemos total flexibilidad. Puedes domiciliar tu pago o realizarlo mes a mes de forma sencilla a través de pago móvil, transferencias nacionales o dólares. La idea es facilitarte la administración, no complicarla."
        },
        {
            question: "¿Puedo cambiar de plan si mi negocio crece?",
            answer: "¡Por supuesto! De hecho, ese es el objetivo. Si tus promociones son un éxito y empiezas a recibir más volumen de clientes habituales, puedes saltar del Plan Arranque al Plan Impulso (o superior) en cuestión de clics. Solo pagarás la diferencia proporcional por el resto del mes."
        },
        {
            question: "¿Qué pasa con la información de mis clientes si decido cancelar?",
            answer: "La base de datos de tu clientela es tuya. Si alguna vez decides dejar de usar el programa, puedes exportar fácilmente la lista de tus clientes registrados y sus datos de contacto antes de cerrar tu cuenta."
        }
    ];

    return (
        <div className="flex flex-col">
            <main className="flex-1">
                <section className="py-10 px-4 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Precios simples para <span className="text-primary italic">crecer.</span></h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6">Escoge el plan que mejor se adapte al tamaño de tu negocio.</p>
                    <div className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 animate-bounce">
                        <p className="text-primary font-black text-lg">
                            🚀 ¡DISPONES DE 30 DÍAS GRATIS AL SUSCRIBIRTE!
                        </p>
                    </div>
                </section>
                <section className="px-4 pb-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter -> Arranque */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-2xl transition-all duration-300 relative group">
                            <div className="absolute top-4 right-6 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold animate-pulse">
                                ¡30 DÍAS GRATIS!
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Arranque</h3>
                                <p className="text-slate-500 text-sm">Ideal para pequeños negocios locales.</p>
                            </div>
                            <div className="mb-4">
                                <span className="text-5xl font-black">$12</span>
                                <span className="text-slate-400">/mes</span>
                            </div>
                            <div className="mb-8 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                <p className="text-xs font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">redeem</span>
                                    ¡Pruébalo gratis por 30 días!
                                </p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Hasta 500 clientes activos</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Mensajería tipo Push</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Soporte por email</span>
                                </li>
                            </ul>
                        </div>
                        {/* Impulso */}
                        <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-10 border-4 border-primary flex flex-col h-full shadow-2xl relative transform scale-105 z-10">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-white">Impulso</h3>
                                <p className="text-slate-400 text-sm">Para negocios en expansión.</p>
                            </div>
                            <div className="mb-4 text-white">
                                <span className="text-5xl font-black">$20</span>
                                <span className="text-slate-400">/mes</span>
                            </div>
                            <div className="mb-8 p-3 rounded-xl bg-white/10 border border-white/20">
                                <p className="text-xs font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">redeem</span>
                                    ¡30 DÍAS DE PRUEBA INCLUIDOS!
                                </p>
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
                                    <span>Control de Inventarios</span>
                                </li>
                                <li className="flex gap-3 text-sm items-center">
                                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                    <span>Soporte prioritario 24/7</span>
                                </li>
                            </ul>
                        </div>
                        {/* Expansión */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">Expansión</h3>
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

                {/* FAQ Section */}
                <section className="py-20 bg-slate-50 dark:bg-slate-950 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Preguntas Frecuentes</h2>
                            <p className="text-slate-600 dark:text-slate-400">Todo lo que necesitas saber sobre Kpoint para tu negocio.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                    >
                                        <span className="text-lg font-bold pr-8">{faq.question}</span>
                                        <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-8 -translate-y-8 pointer-events-none">
                                <span className="material-symbols-outlined text-[120px]">help_outline</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-6">¿Aún tienes dudas?</h3>
                                <button className="inline-flex items-center gap-2 bg-primary text-[#102216] px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-glow">
                                    <span className="material-symbols-outlined">support_agent</span>
                                    Habla con un experto de Kpoint
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PricingScreen;
