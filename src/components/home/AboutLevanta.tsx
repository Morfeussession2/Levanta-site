import { motion } from "framer-motion";
import { DeviceMockupCarousel } from "../ui/DeviceMockupCarousel";


export function AboutLevanta() {
    return (
        <section
            id="about"
            className="w-full min-h-screen bg-[#05050A] relative snap-start border-t border-white/5 py-20 md:py-0 md:h-screen"
        >
            {/* Fundos fixos */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />
            <div className="absolute -top-16 -right-16 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />
            <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />

            {/* Mobile Layout */}
            <div className="md:hidden relative h-full w-full flex flex-col items-center justify-start px-4 pt-8">
                {/* Text Content (Mobile) */}
                <div className="w-full z-20 mb-8">
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-4 leading-tight"
                    >
                        Sobre a
                        <div className="relative">
                            <img
                                className="w-28"
                                src="/Eleva1_Prancheta 1.png"
                                alt="Eleva Logo"
                            />
                        </div>
                    </motion.h2>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 leading-relaxed mb-3"
                    >
                        Uma plataforma completa que simplifica a gestão do seu negócio digital com ferramentas intuitivas e poderosas.
                    </motion.p>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xs text-gray-400"
                    >
                        Nossa interface foi desenvolvida para tornar o complexo, simples.
                        Gerencie conteúdo, acompanhe métricas e tome decisões estratégicas
                        tudo em um só lugar, sem complicação.
                    </motion.p>
                </div>

                {/* Video Carousel Below (Mobile) */}
                <div className="w-full flex items-center justify-center">
                    <DeviceMockupCarousel />
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block relative h-full w-full">
                <div className="h-full w-full flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 md:px-0 md:pr-40 flex items-center">
                        {/* Lado Esquerdo: Conteúdo de Texto */}
                        <div className="w-full md:w-1/2 z-20">
                            <motion.h2
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight"
                            >
                                Sobre a
                                <div className="relative">
                                    <img
                                        className="w-40 md:w-40"
                                        src="/Eleva1_Prancheta 1.png"
                                        alt="Eleva Logo"
                                    />
                                </div>
                            </motion.h2>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
                            >
                                Uma plataforma completa que simplifica a gestão do seu negócio digital com ferramentas intuitivas e poderosas.
                            </motion.p>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mt-4 text-sm md:text-base text-gray-400 max-w-lg"
                            >
                                Nossa interface foi desenvolvida para tornar o complexo, simples.
                                Gerencie conteúdo, acompanhe métricas e tome decisões estratégicas
                                tudo em um só lugar, sem complicação.
                            </motion.p>
                        </div>

                        {/* Lado Direito: CardSwap com controle de posição */}
                        <div className="flex w-1/2 h-full relative">
                            <DeviceMockupCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
