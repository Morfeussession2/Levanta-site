import { motion } from 'framer-motion';
import { Home, Zap, Cpu, Layout, Info, Terminal, Star, Tag, MessageSquare } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Serviços', icon: Zap, href: '#servicos' },
    { name: 'Diferenciais', icon: Cpu, href: '#perks' },
    { name: 'Plataforma', icon: Layout, href: '#platform' },
    { name: 'Sobre', icon: Info, href: '#about' },
    { name: 'Teste', icon: Terminal, href: '#test' },
    { name: 'Cases', icon: Star, href: '#cases' },
    { name: 'Preços', icon: Tag, href: '#pricing' },
    { name: 'Contato', icon: MessageSquare, href: '#contact' },
];

export function FloatingDock() {
    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/20"
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative group p-3 rounded-full hover:bg-white/10 transition-colors"
                        title={item.name}
                    >
                        <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.name}
                        </span>
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
