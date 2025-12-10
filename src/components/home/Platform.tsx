import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
    "Unified Dashboard for all your web properties",
    "Seamless E-commerce integration",
    "SEO-optimized Blog engine",
    "Drag-and-drop Site builder",
    "Advanced Analytics built-in",
    "24/7 Priority Support"
];

export function Platform() {
    return (
        <Section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-6 border border-blue-500/20">
                        Why Levanta?
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        One Platform to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Rule Them All
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Stop juggling multiple tools. Levanta brings your content, commerce, and customer data into a single, cohesive ecosystem designed for growth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-10 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                        Explore the Platform
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] opacity-20 rounded-full" />
                    <div className="relative bg-card border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <div className="flex flex-col gap-6">
                            {/* Mock UI Elements */}
                            <div className="h-32 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                            </div>
                            <div className="h-48 bg-white/5 rounded-xl border border-white/5" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
