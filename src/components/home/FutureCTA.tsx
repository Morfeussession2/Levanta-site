import { motion } from 'framer-motion';

export function FutureCTA() {
    return (
        <section id="contact" className="w-full h-screen bg-[#05050A] flex items-center justify-center relative snap-start border-t border-white/5 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-black to-black"></div>

            <div className="relative z-10 text-center px-6">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter"
                >
                    EVOLVE.
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Don't settle for a static existence. Join the platform that moves at the speed of thought.
                </motion.p>

                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all"
                >
                    Start Now
                </motion.button>
            </div>
        </section>
    );
}
