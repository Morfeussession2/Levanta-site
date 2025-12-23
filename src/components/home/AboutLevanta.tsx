import { motion } from "framer-motion";
import { DeviceMockupCarousel } from "../ui/DeviceMockupCarousel";


export function AboutLevanta() {
    return (
        <section
            id="about"
            className="w-full h-screen bg-[#05050A] relative snap-start border-t border-white/5 overflow-hidden"
        >
            {/* Fundos fixos */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />
            <div className="absolute -top-16 -right-16 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />
            <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />


            {/* Container principal */}
            <div className="relative h-full w-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-8 md:px-20 flex items-center justify-between gap-16 md:gap-20 lg:gap-32">


                    {/* Lado Esquerdo: Conteúdo de Texto */}
                    <div className="w-full md:w-1/2 z-20">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight"
                        >
                            Sobre a Levanta
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
                    <div className="hidden md:flex w-1/2 h-full relative left-20">
                        <DeviceMockupCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
}
