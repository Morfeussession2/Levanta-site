import { BarChart3, Globe, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

const features = [
    {
        icon: <BarChart3 className="w-6 h-6 text-primary" />,
        title: "Real-time Analytics",
        description: "Track your startup's growth in real-time with comprehensive dashboards and reports."
    },
    {
        icon: <Globe className="w-6 h-6 text-pink-500" />,
        title: "Global Reach",
        description: "Manage your content and sales across borders with built-in multi-language and currency support."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Lightning Fast",
        description: "Optimized for speed. Your sites load instantly, improving SEO and user retention."
    },
    {
        icon: <Layers className="w-6 h-6 text-green-500" />,
        title: "All-in-One Platform",
        description: "Blog, E-commerce, and Landing Pages all managed from a single, intuitive interface."
    }
];

export function Features() {
    return (
        <Section id="features" className="py-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Everything you need to launch and grow your digital presence, right out of the box.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
