import React, { useMemo } from "react";
import { motion } from "framer-motion";
import SpinningBadges from "../ui/SpinningBadges";
import { svg } from "framer-motion/client";


export function LevantaPerks() {
    // Memoize animation variants para evitar recriação
    const textVariants = useMemo(() => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }), []);


    // Badges com ícones e cores para o SpinningBadges
    const badges = useMemo(() => [
        {
            title: "Identidade Única",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>,
            color: "bg-gradient-to-br from-purple-800/40 to-gray-700/40"
        },
        {
            title: "Site Rápido",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>,
            color: "bg-gradient-to-br from-purple-800/40 to-gray-700/40"
        },
        {
            title: "Zero Plugins",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>,
            color: "bg-gradient-to-br from-purple-800/40 to-gray-700/40"
        },
        {
            title: "Zero Modelo",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>,
            color: "bg-gradient-to-br from-purple-800/40 to-gray-700/40"
        },
        {
            title: "Controle Total",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>,
            color: "bg-gradient-to-br from-purple-800/40 to-gray-700/40"
        },
    ], []);


    return (
        <section
            id="perks"
            className="w-full h-screen relative snap-start border-t border-white/5 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />


            {/* Borrão roxo - MAIS PARA CIMA */}
            <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-purple-600/30 blur-3xl rounded-full opacity-50 pointer-events-none z-0" />


            {/* Borrão azul - MAIS PARA BAIXO */}
            <div className="absolute -bottom-48 -left-16 w-[550px] h-[550px] bg-blue-700/20 blur-3xl rounded-full opacity-50 pointer-events-none z-0" />



            {/* Container principal */}
            <div className="relative h-full w-full flex items-center z-[3]">
                <div className="w-full max-w-7xl mx-auto px-8 md:px-20 flex items-center justify-between">


                    {/* Lado Esquerdo: Conteúdo de Texto - OTIMIZADO */}
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight"
                        >
                            O Que Você Ganha
                        </motion.h2>


                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
                        >
                            Soluções web personalizadas que colocam você à frente da concorrência com tecnologia de ponta.
                        </motion.p>


                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-4 text-sm md:text-base text-gray-400 max-w-lg"
                        >
                            Cada projeto é único, desenvolvido do zero para atender suas necessidades específicas,
                            sem templates prontos ou plugins desnecessários.
                        </motion.p>

                        {/* Lista de benefícios com animações */}
                        <motion.div
                            className="mt-8 space-y-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Item 1 - Identidade Única */}
                            <motion.div
                                variants={{
                                    hidden: { x: -50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-purple-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Identidade Única</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Design exclusivo que reflete a personalidade da sua marca</p>
                                </div>
                            </motion.div>

                            {/* Item 2 - Site Rápido */}
                            <motion.div
                                variants={{
                                    hidden: { x: -50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Site Rápido</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Performance otimizada para carregamento instantâneo</p>
                                </div>
                            </motion.div>

                            {/* Item 3 - Zero Plugins */}
                            <motion.div
                                variants={{
                                    hidden: { x: -50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-pink-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Zero Plugins</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Código limpo sem dependências desnecessárias</p>
                                </div>
                            </motion.div>

                            {/* Item 4 - Zero Modelo */}
                            <motion.div
                                variants={{
                                    hidden: { x: -50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-purple-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Zero Modelo</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Cada detalhe desenhado especialmente para você</p>
                                </div>
                            </motion.div>

                            {/* Item 5 - Controle Total */}
                            <motion.div
                                variants={{
                                    hidden: { x: -50, opacity: 0 },
                                    visible: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Controle Total</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Total autonomia sobre funcionalidades e atualizações</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>


                    {/* Lado Direito: Spinning Badges */}
                    <div className="hidden md:flex w-1/2 h-full items-center justify-center">
                        <div className="relative w-[600px] h-[600px]">
                            <SpinningBadges
                                badges={badges}
                                radius={220}
                                speed={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
