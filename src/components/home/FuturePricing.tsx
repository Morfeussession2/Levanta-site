import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "R$ 99",
        period: "/mês",
        features: [
            "1 Website",
            "10GB Storage",
            "Basic Analytics",
            "Email Support",
            "SSL Certificate"
        ],
        highlight: false,
        color: "from-blue-600 to-cyan-600"
    },
    {
        name: "Professional",
        price: "R$ 299",
        period: "/mês",
        features: [
            "5 Websites",
            "50GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "SSL Certificate",
            "Custom Domain",
            "SEO Tools"
        ],
        highlight: true,
        color: "from-purple-600 to-pink-600"
    },
    {
        name: "Enterprise",
        price: "R$ 599",
        period: "/mês",
        features: [
            "Unlimited Websites",
            "200GB Storage",
            "Real-time Analytics",
            "24/7 Support",
            "SSL Certificate",
            "Custom Domain",
            "Advanced SEO",
            "API Access",
            "White Label"
        ],
        highlight: false,
        color: "from-indigo-600 to-purple-600"
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
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Planos</h2>
                    <p className="text-gray-400 text-lg">Escolha o plano perfeito para sua evolução digital</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                                    ? 'bg-white/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                }
                            `}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold uppercase">
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
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]'
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
