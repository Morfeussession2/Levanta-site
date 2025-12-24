import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const plans = [
    {
        name: "Básico",
        price: "R$ 29,90",
        period: "/mês",
        features: [
            "Edição de Conteúdo",
            "Por 29,90 R$ + Análise de Dados"
        ],
        highlight: false,
        color: "from-blue-600 to-cyan-600"
    },
    {
        name: "Ecommerce",
        price: "R$ 59,90",
        period: "/mês",
        features: [
            "Edição de Conteúdo",
            "Criação de Produtos",
            "Por 29,90 R$ + Análise de Dados"
        ],
        highlight: false,
        color: "from-orange-600 to-orange-500"
    },
    {
        name: "Blog",
        price: "R$ 49,90",
        period: "/mês",
        features: [
            "Edição de Conteúdo",
            "Criação de Conteúdo",
            "Por 29,90 R$ + Análise de Dados"
        ],
        highlight: true,
        color: "from-green-600 to-green-500"
    },
    {
        name: "Full",
        price: "R$ 89,90",
        period: "/mês",
        features: [
            "Todos os Recursos",
            "Suporte Premium"
        ],
        highlight: false,
        color: "from-purple-600 to-purple-500"
    }
];

export function FuturePricing() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play carousel on mobile
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % plans.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % plans.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
    };

    return (
        <section id="pricing" className="w-full min-h-screen bg-[#05050A] flex items-center justify-center relative snap-start border-t border-white/5 py-20 md:py-0 md:h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />

            {/* Borrão roxo */}
            <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full opacity-40 pointer-events-none z-0" />

            {/* Borrão azul */}
            <div className="absolute -bottom-48 -right-16 w-[550px] h-[550px] bg-blue-700/10 blur-3xl rounded-full opacity-30 pointer-events-none z-0" />

            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-black opacity-50 z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-3 md:mb-4">
                        Planos
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg">Escolha o plano perfeito para sua evolução digital</p>
                </motion.div>


                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative group ${plan.highlight ? 'md:scale-105' : ''}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                            <div className={`relative p-4 md:p-8 rounded-xl md:rounded-2xl border transition-all duration-300 h-full flex flex-col
                                ${plan.highlight
                                    ? 'bg-white/10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                }
                            `}>
                                {plan.highlight && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-xs font-bold uppercase">
                                        Popular
                                    </div>
                                )}

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="mb-4 md:mb-6">
                                    <span className="text-3xl md:text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-gray-400 text-sm md:text-base">{plan.period}</span>
                                </div>

                                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 md:py-4 rounded-lg text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300
                                    ${plan.highlight
                                        ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]'
                                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                    }
                                `}>
                                    Começar Agora
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative w-full px-12">
                    <div className="relative overflow-visible">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                {(() => {
                                    const plan = plans[currentIndex];
                                    return (
                                        <div className="relative group max-w-sm mx-auto">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                                            <div className={`relative p-6 rounded-xl border transition-all duration-300 flex flex-col
                                                ${plan.highlight
                                                    ? 'bg-white/10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                                                    : 'bg-white/5 border-white/10'
                                                }
                                            `}>
                                                {plan.highlight && (
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-xs font-bold uppercase">
                                                        Popular
                                                    </div>
                                                )}

                                                <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                                                <div className="mb-6 text-center">
                                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                                    <span className="text-gray-400 text-sm">{plan.period}</span>
                                                </div>

                                                <ul className="space-y-3 mb-6 flex-grow">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                                                            <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button className={`w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300
                                                    ${plan.highlight
                                                        ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]'
                                                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                                    }
                                                `}>
                                                    Começar Agora
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all duration-300 z-10"
                        aria-label="Previous plan"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all duration-300 z-10"
                        aria-label="Next plan"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {plans.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-purple-500' : 'w-2 bg-white/30'
                                    }`}
                                aria-label={`Go to plan ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
