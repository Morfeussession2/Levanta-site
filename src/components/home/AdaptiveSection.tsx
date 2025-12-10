import { motion } from 'framer-motion';

export function AdaptiveSection() {
    return (
        <section id="adapt" className="w-full h-screen bg-[#05050A] flex flex-col md:flex-row items-center relative overflow-hidden snap-start border-t border-white/5">

            {/* Visual Side */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-black">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                {/* Floating UI Cards implying change */}
                <motion.div
                    initial={{ rotateX: 20, rotateY: -20, rotateZ: 10, opacity: 0 }}
                    whileInView={{ opacity: 1, rotateX: 20, rotateY: -20, rotateZ: 10, y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-64 h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl absolute z-10 shadow-2xl skew-y-6"
                />
                <motion.div
                    initial={{ rotateX: 20, rotateY: -20, rotateZ: -5, opacity: 0 }}
                    whileInView={{ opacity: 1, rotateX: 20, rotateY: -20, rotateZ: -5, y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-64 h-80 bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl absolute z-0 -translate-x-10 translate-y-10 skew-y-6"
                />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center p-8 md:p-20 z-20">
                <div>
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
                    >
                        SHAPE<br />SHIFT
                    </motion.h2>

                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-md leading-relaxed"
                    >
                        <span className="text-white font-semibold">Tired of static?</span> The Levanta platform allows you to completely overhaul your digital presence in seconds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex gap-4"
                    >
                        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-sm hover:bg-gray-200 transition-colors">
                            Live Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
