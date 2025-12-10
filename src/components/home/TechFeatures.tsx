import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap } from 'lucide-react';

const features = [
    {
        title: "Hyper-Fast",
        description: "Built on Next-gen edge networks.",
        icon: Zap,
        color: "text-yellow-400",
        border: "hover:border-yellow-400/50"
    },
    {
        title: "Global Scale",
        description: "Deploy instantly to 35+ regions.",
        icon: Globe,
        color: "text-blue-400",
        border: "hover:border-blue-400/50"
    },
    {
        title: "Adaptive Core",
        description: "AI-driven layout adjustments.",
        icon: Cpu,
        color: "text-purple-400",
        border: "hover:border-purple-400/50"
    },
    {
        title: "Ironclad",
        description: "Enterprise-grade security standards.",
        icon: Shield,
        color: "text-green-400",
        border: "hover:border-green-400/50"
    }
];

export function TechFeatures() {
    return (
        <section id="specs" className="w-full h-screen bg-black flex items-center justify-center relative snap-start border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Core Specifications</h2>
                    <p className="text-gray-400">Engineered for the next generation of web experience.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 ${feature.border}`}
                        >
                            <feature.icon className={`w-12 h-12 mb-6 ${feature.color} transition-transform group-hover:scale-110`} />
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-lg">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
