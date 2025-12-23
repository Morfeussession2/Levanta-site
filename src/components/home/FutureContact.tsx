import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FireworksBackground } from '../ui/fireworks-background';

export function FutureContact() {
    return (
        <section id="contact" className="w-full h-screen bg-[#05050A] flex items-center justify-center relative snap-start border-t border-white/5 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-[1]" />

            {/* Fireworks Background */}
            <FireworksBackground
                population={3}
                color={['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6']}
                fireworkSpeed={{ min: 3, max: 6 }}
                fireworkSize={{ min: 2, max: 4 }}
                particleSpeed={{ min: 2, max: 5 }}
                particleSize={{ min: 1, max: 3 }}
                className="absolute inset-0 z-0"
            />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20 z-0"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] z-0"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Vamos<br />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                Conversar
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Pronto para transformar sua presença digital? Entre em contato e descubra como a Levanta pode revolucionar seu negócio.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-purple-600/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div className="font-medium">vyctorsilva@levantatec.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/20">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Celular</div>
                                    <div className="font-medium">+55 (21) 99859-1096</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-pink-600/20 rounded-lg backdrop-blur-sm border border-pink-500/20">
                                    <MapPin className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Localização</div>
                                    <div className="font-medium">Rio de Janeiro, Brasil</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2 font-medium">Nome</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2 font-medium">Mensagem</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                                    placeholder="Como podemos ajudar?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Enviar Mensagem
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
