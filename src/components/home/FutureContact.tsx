import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function FutureContact() {
    return (
        <section id="contact" className="w-full h-screen bg-[#05050A] flex items-center justify-center relative snap-start border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]"></div>

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
                                <div className="p-3 bg-purple-600/20 rounded-lg">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div className="font-medium">contato@levanta.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-blue-600/20 rounded-lg">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Telefone</div>
                                    <div className="font-medium">+55 (11) 9999-9999</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-pink-600/20 rounded-lg">
                                    <MapPin className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Localização</div>
                                    <div className="font-medium">São Paulo, Brasil</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Nome</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Mensagem</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Como podemos ajudar?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
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
