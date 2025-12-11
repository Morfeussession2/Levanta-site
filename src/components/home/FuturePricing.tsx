import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    return (
        <section id="pricing" className="w-full h-screen bg-black flex items-center justify-center relative snap-start border-t border-white/5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-4">
                        Planos
                    </h2>
                    <p className="text-gray-400 text-lg">Escolha o plano perfeito para sua evolução digital</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative group ${plan.highlight ? 'md:scale-105' : ''}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                            <div className={`relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col
                                ${plan.highlight
                                    ? 'bg-white/10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                }
                            `}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-xs font-bold uppercase">
                                        Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-gray-400">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300
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
            </div>
        </section>
    );
}
