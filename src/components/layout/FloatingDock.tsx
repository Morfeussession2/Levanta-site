import { motion, AnimatePresence } from 'framer-motion';
import { Home, Zap, Cpu, Layout, Info, Terminal, Star, Tag, MessageSquare, Plus } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { name: 'Home', icon: Home, href: '#home', primary: true },
    { name: 'Serviços', icon: Zap, href: '#servicos', primary: true },
    { name: 'Diferenciais', icon: Cpu, href: '#perks', primary: false },
    { name: 'Plataforma', icon: Layout, href: '#platform', primary: true },
    { name: 'Sobre', icon: Info, href: '#about', primary: false },
    { name: 'Teste', icon: Terminal, href: '#test', primary: false },
    { name: 'Cases', icon: Star, href: '#cases', primary: false },
    { name: 'Preços', icon: Tag, href: '#pricing', primary: false },
    { name: 'Contato', icon: MessageSquare, href: '#contact', primary: true },
];

export function FloatingDock() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="flex items-center gap-1 p-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
                {/* Internal Glow */}
                <div className=" backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/20" />

                <AnimatePresence mode="popLayout" initial={false}>
                    {navItems.map((item) => {
                        // Show if primary OR if the dock is hovered
                        if (item.primary || isHovered) {
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }}
                                    className="relative group p-3 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                                    title={item.name}
                                >
                                    <item.icon className={`w-5 h-5 transition-colors ${item.primary ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />

                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                                        {item.name}
                                    </span>
                                </motion.a>
                            );
                        }
                        return null;
                    })}
                </AnimatePresence>

                {!isHovered && (
                    <motion.div
                        layout
                        className="p-3 text-purple-400/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Plus size={16} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
