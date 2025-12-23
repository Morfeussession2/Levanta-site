import { motion } from 'framer-motion';
import TiltedCard from '../ui/TiltedCard';

export function PlatformIntro() {
    return (
        <section className="snap-start snap-proximity scroll-smooth w-full h-screen bg-[#05050A] flex flex-col items-center justify-center relative snap-start border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col items-center justify-start pt-10 md:pt-10">
                {/* Main Visual Element: TiltedCard (Background Layer) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
                    <div style={{ marginTop: '42%' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 0.3, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full h-full"
                        >

                            <TiltedCard
                                imageSrc="/apresentaLev.mp4"
                                altText="Plataforma Levanta"
                                captionText="Levanta Platform View"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="69vh"
                                imageWidth="1200px"
                                rotateAmplitude={8}
                                scaleOnHover={1.1}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                            />

                        </motion.div>
                    </div>
                </div>

                {/* Text Content (Foreground Layer) */}
                <div className="relative z-10 text-center pointer-events-none mb-0 flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8"
                    >

                        <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
                            Apresentamos nossa <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500">
                                Plataforma
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
                            Onde a criação encontra a potência da gestão avançada.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-4 flex flex-col items-center"
                    >
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500/5 blur-[100px] pointer-events-none"
            />
        </section >
    );
}
