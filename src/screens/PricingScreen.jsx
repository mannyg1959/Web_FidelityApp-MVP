import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const PlanCard = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const features = [
        {
            title: "Gestión de Fidelización Automatizada",
            desc: "Olvídate de procesos manuales y errores de cálculo. KPoint implementa un sistema inteligente que convierte cada consumo de tus clientes en puntos de forma instantánea, basándose en la tasa de conversión que tú definas. Con un historial de transacciones en tiempo real y una billetera digital siempre disponible para el usuario, garantizas una experiencia de compra fluida y moderna que incentiva la recurrencia."
        },
        {
            title: "Catálogo de Premios y Canjes Inteligentes",
            desc: "Toma el control total de tus incentivos con un catálogo de recompensas dinámico. Podrás cargar imágenes, descripciones y asignar costos en puntos a cada producto o servicio, permitiendo que tus clientes visualicen sus metas de ahorro de forma atractiva. El sistema incluye gestión de inventario para premios limitados y un flujo de validación seguro para asegurar que cada canje sea registrado correctamente por tu staff."
        },
        {
            title: "Central de Marketing y Sistema de Referidos",
            desc: "Potencia el crecimiento de tu negocio convirtiendo a tus clientes en embajadores de marca. KPoint incluye un potente sistema de referidos donde cada usuario puede invitar a nuevos clientes mediante códigos únicos, además de permitirte lanzar promociones especiales con multiplicadores de puntos (como bonos de bienvenida o días de puntos dobles) para dinamizar las ventas en fechas clave."
        },
        {
            title: "Segmentación Avanzada por Niveles (Tiers)",
            desc: "Trata a tus mejores clientes como se merecen mediante la clasificación automática por niveles. El sistema segmenta a tu audiencia en categorías como Bronce, Oro y VIP basándose en su fidelidad y consumo histórico, dándote la información necesaria para crear beneficios exclusivos y tratos preferenciales que refuercen la lealtad de tus consumidores de mayor valor."
        },
        {
            title: "Control Operativo y Roles de Staff",
            desc: "Optimiza la operación de tu local delegando tareas con seguridad. El dashboard administrativo te permite crear perfiles específicos para Cajeros, Gerentes y Dueños, cada uno con permisos limitados a sus funciones. Podrás auditar quién procesó cada venta o canje, supervisar el rendimiento de tus empleados y visualizar métricas críticas de tu negocio desde cualquier lugar."
        },
        {
            title: "Seguridad y Aislamiento de Datos Corporativos",
            desc: "Tu información es tu activo más valioso. KPoint utiliza arquitectura de seguridad de nivel bancario (RLS) para garantizar que tus bases de datos de clientes, ventas y estrategias de marketing sean privadas y totalmente invisibles para otros comercios en la plataforma. Disfruta de la potencia de una plataforma SaaS con la exclusividad y reserva de un desarrollo a medida."
        },
        {
            title: "Comunicación Directa y Notificaciones Push",
            desc: "Mantén tu negocio siempre en la mente de tus clientes mediante notificaciones directas a sus dispositivos móviles. Podrás enviar alertas automáticas sobre actualizaciones de saldo, nuevos premios disponibles o promociones exclusivas. Además, el sistema incorpora un canal de mensajería privada que te permite brindar atención personalizada, resolver dudas sobre canjes o recibir feedback directo de tus consumidores, fortaleciendo el vínculo de confianza entre el comercio y el cliente."
        }
    ];

    return (
        <div className="reveal-scale bg-text-main rounded-3xl p-6 md:p-8 border-[4px] border-primary flex flex-col h-fit shadow-[0_30px_60px_-15px_rgba(255,112,67,0.2)] relative z-20 overflow-hidden w-full max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
            
            <div className="relative space-y-4 mb-8 text-center">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Un único Plan</h3>
                <div className="pt-2">
                    <span className="text-6xl font-black text-white">$15</span>
                    <span className="text-slate-400 font-bold ml-2">/mes</span>
                </div>
            </div>

            <div className="relative space-y-3 mb-8 flex-1">
                {features.map((item, i) => (
                    <div key={i} className="border-b border-white/5 last:border-0">
                        <button 
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="w-full py-4 flex items-start gap-3 text-left group transition-all"
                        >
                            <span className={`material-symbols-outlined text-primary font-black text-xl transition-transform duration-300 ${activeIndex === i ? 'rotate-90' : ''}`}>
                                chevron_right
                            </span>
                            <span className={`text-base font-bold transition-colors ${activeIndex === i ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                {item.title}
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === i ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                            <p className="text-sm font-medium text-slate-400 leading-snug pl-8">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <a href="https://app.kpointve.com" className="interactive-button relative w-full py-4 flex items-center justify-center rounded-2xl bg-primary text-white font-black text-xl hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                Empezar 60 días gratis
            </a>
        </div>
    );
};

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
            <main className="flex-grow">
                {/* Hero section */}
                <section className="reveal py-8 px-6 text-center max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-text-main text-xs font-black uppercase tracking-[0.2em]">
                        Plan Emprendedor
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main leading-none">
                        Precio simple sin <br />
                        <span className="text-primary italic">comprometer el presupuesto</span>
                    </h1>
                    <p className="text-lg text-text-muted font-medium max-w-3xl mx-auto leading-snug">
                        Diseñamos un solo plan que se adaptará al tamaño de tu operación. <br className="hidden md:block" />
                        Sin sorpresas, sin costos ocultos.
                    </p>
                    
                    <div className="relative inline-block mt-8">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl animate-pulse"></div>
                        <div className="relative bg-white border-2 border-primary rounded-2xl px-10 py-5 shadow-2xl">
                            <p className="text-text-main font-black text-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary scale-125 font-bold">celebration</span>
                                🚀 ¡DISPONES DE 60 DÍAS GRATIS AL SUSCRIBIRTE!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="px-6 pb-32">
                    <div className="max-w-4xl mx-auto flex justify-center">
                        <PlanCard />
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="reveal py-8 bg-slate-50 border-t border-slate-100 px-6">
                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-none">Preguntas Frecuentes</h2>
                            <p className="text-lg text-text-muted font-medium leading-snug max-w-2xl mx-auto">Resolvemos tus dudas para que empieces a crecer hoy mismo.</p>
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
                                        <div className="px-10 pb-10 text-text-muted text-base font-medium leading-snug pt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Help Box with Zoom In Effect */}
                        <div className="reveal relative p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] text-center overflow-hidden shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] group hover:shadow-[0_45px_100px_-15px_rgba(37,99,235,0.6)] transition-all duration-700 hover:scale-[1.03]">
                            {/* Animated background patterns */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400 rounded-full blur-[100px] animate-pulse"></div>
                                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                            </div>

                            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700 group-hover:rotate-12 group-hover:scale-110">
                                <span className="material-symbols-outlined text-[100px] text-white font-bold">trending_up</span>
                            </div>
                            
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                                    Haz crecer su negocio <br />
                                    <span className="text-blue-100 italic font-bold">con KPoint</span>
                                </h3>
                                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-snug font-medium">
                                    Crea una experiencia gratificante para sus clientes y <br className="hidden md:block" />
                                    establezca relaciones más sólidas.
                                </p>
                                
                                <a href="https://app.kpointve.com" className="interactive-button group/btn relative inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20">
                                    <span>Comenzar</span>
                                    <span className="material-symbols-outlined font-bold transition-transform group-hover/btn:translate-x-1 text-2xl">rocket_launch</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PricingScreen;
