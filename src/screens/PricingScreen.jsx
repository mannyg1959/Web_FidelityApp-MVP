import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const PricingScreen = () => {
    const [openIndex, setOpenIndex] = useState(null);
    useReveal();

    const faqs = [
        {
            question: "¿Mis clientes tienen que descargar una aplicación pesada?",
            answer: "¡Para nada! Sabemos que la gente no quiere llenar su teléfono de aplicaciones. Con KPoint, tus clientes acceden a su monedero digital simplemente escaneando un código QR. Rápido y sin fricciones."
        },
        {
            question: "¿Necesito comprar hardware costoso?",
            answer: "No. Todo el sistema funciona directamente desde el teléfono o tablet que ya tienes. Solo necesitas conexión a internet y la cámara de tu dispositivo para empezar a fidelizar."
        },
        {
            question: "¿Existen contratos de permanencia?",
            answer: "Cero ataduras. Creemos en ganar tu confianza mes a mes. Puedes cancelar tu plan en cualquier momento, sin penalizaciones ni letras pequeñas."
        },
        {
            question: "¿Cuáles son los métodos de pago?",
            answer: "Ofrecemos total flexibilidad: pago móvil, transferencias nacionales, Zelle o dólares en efectivo. La idea es facilitarte la administración."
        }
    ];

    return (
        <div className="antialiased bg-background-light">
            <main className="flex-grow overflow-x-hidden">
                {/* Hero section */}
                <section className="reveal py-20 px-6 text-center max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-text-main text-xs font-black uppercase tracking-[0.2em]">
                        Planes Flexibles
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
                        Precios simples para <br />
                        <span className="text-primary italic">negocios reales.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted font-medium max-w-3xl mx-auto leading-relaxed">
                        Escoge el plan que mejor se adapte al tamaño de tu operación. <br className="hidden md:block" />
                        Sin sorpresas, sin costos ocultos.
                    </p>
                    
                    <div className="relative inline-block mt-8">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl animate-pulse"></div>
                        <div className="relative bg-white border-2 border-primary rounded-2xl px-10 py-5 shadow-2xl">
                            <p className="text-text-main font-black text-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary scale-125 font-bold">celebration</span>
                                🚀 ¡DISPONES DE 30 DÍAS GRATIS AL SUSCRIBIRTE!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                        {/* Plan Arranque */}
                        <div className="reveal-left bg-white rounded-[3.5rem] p-12 border border-slate-100 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_45px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 relative group">
                            <div className="space-y-6 mb-12">
                                <h3 className="text-3xl font-black text-text-main tracking-tight">Arranque</h3>
                                <p className="text-text-muted text-lg font-medium leading-relaxed">Ideal para pequeños negocios locales que empiezan a digitalizarse.</p>
                                <div className="pt-4">
                                    <span className="text-6xl font-black text-text-main">$12</span>
                                    <span className="text-text-muted font-bold ml-2">/mes</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-6 mb-12 flex-1">
                                {[
                                    'Hasta 500 clientes activos',
                                    'Mensajería tipo Push ilimitada',
                                    'Soporte por email 24/7',
                                    'QR Personalizado',
                                    'Analítica Básica'
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-4 text-lg font-medium text-text-muted items-center">
                                        <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="interactive-button w-full py-6 rounded-3xl bg-slate-50 text-text-main font-black text-xl hover:bg-orange-50 transition-colors border border-slate-100 group-hover:border-primary">
                                Seleccionar Plan
                            </button>
                        </div>

                        {/* Plan Impulso (Featured) */}
                        <div className="reveal-scale bg-text-main rounded-[3.5rem] p-12 border-[6px] border-primary flex flex-col h-full shadow-[0_50px_100px_-20px_rgba(255,112,67,0.3)] relative transform md:scale-110 z-20 overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="bg-primary text-white px-6 py-2 rounded-2xl text-xs font-black tracking-widest uppercase shadow-xl animate-bounce inline-block">MÁS POPULAR</span>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                            
                            <div className="relative space-y-6 mb-12">
                                <h3 className="text-3xl font-black text-white tracking-tight">Impulso</h3>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed">Para negocios en expansión que buscan automatización total.</p>
                                <div className="pt-4">
                                    <span className="text-7xl font-black text-white">$20</span>
                                    <span className="text-slate-400 font-bold ml-2">/mes</span>
                                </div>
                            </div>

                            <ul className="relative space-y-6 mb-12 flex-1">
                                {[
                                    'Clientes ilimitados',
                                    'Analítica avanzada y KPIs',
                                    'Campañas automáticas de retención',
                                    'Control de Inventarios',
                                    'Soporte prioritario 24/7 Whatsapp'
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-4 text-lg font-medium text-slate-300 items-center">
                                        <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="interactive-button relative w-full py-6 rounded-3xl bg-primary text-white font-black text-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                                Empezar 30 días gratis
                            </button>
                        </div>

                        {/* Plan Expansión */}
                        <div className="reveal-right bg-white rounded-[3.5rem] p-12 border border-slate-100 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_45px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 relative group">
                            <div className="space-y-6 mb-12">
                                <h3 className="text-3xl font-black text-text-main tracking-tight">Expansión</h3>
                                <p className="text-text-muted text-lg font-medium leading-relaxed">Soluciones personalizadas para franquicias y múltiples puntos de venta.</p>
                                <div className="pt-4">
                                    <span className="text-4xl font-black text-text-main">Custom</span>
                                </div>
                            </div>

                            <ul className="space-y-6 mb-12 flex-1">
                                {[
                                    'Múltiples sucursales unificadas',
                                    'API de integración completa',
                                    'Account Manager dedicado',
                                    'Reportes ejecutivos semanales',
                                    'Instalación asistida on-site'
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-4 text-lg font-medium text-text-muted items-center">
                                        <span className="material-symbols-outlined text-primary font-black">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="interactive-button w-full py-6 rounded-3xl bg-slate-900 text-white font-black text-xl hover:bg-black transition-all">
                                Contactar Ventas
                            </button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="reveal py-32 bg-slate-50 border-t border-slate-100 px-6">
                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-none">Preguntas Frecuentes</h2>
                            <p className="text-xl text-text-muted font-medium max-w-2xl mx-auto">Resolvemos tus dudas para que empieces a crecer hoy mismo.</p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-10 py-8 flex items-center justify-between text-left transition-colors"
                                    >
                                        <span className="text-xl md:text-2xl font-black text-text-main pr-8">{faq.question}</span>
                                        <span className={`material-symbols-outlined transition-all duration-500 size-12 flex items-center justify-center rounded-2xl bg-orange-50 text-primary ${openIndex === index ? 'rotate-180 bg-primary text-white scale-110' : ''}`}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-10 pb-10 text-text-muted text-lg font-medium leading-relaxed pt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Help Box */}
                        <div className="reveal relative p-8 md:p-10 bg-blue-600 rounded-[1.5rem] text-center text-white overflow-hidden shadow-lg shadow-blue-900/20">
                            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 pointer-events-none">
                                <span className="material-symbols-outlined text-[100px] font-bold">chat_bubble</span>
                            </div>
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none">¿Tienes un caso especial?</h3>
                                <p className="text-blue-100 text-base max-w-md mx-auto leading-relaxed">
                                    Si tu negocio tiene necesidades únicas o quieres una cotización personalizada por volumen, estamos listos para escucharte.
                                </p>
                                <button className="interactive-button inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-3 rounded-xl font-black text-base hover:bg-blue-50 transition-all shadow-lg">
                                    <span className="material-symbols-outlined text-xl font-bold">support_agent</span>
                                    Hablar con un experto
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
