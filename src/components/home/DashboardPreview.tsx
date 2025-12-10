import { motion } from 'framer-motion';

export function DashboardPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto mt-20 max-w-6xl w-full perspective-1000"
        >
            <div
                className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-card/50 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Placeholder for the dashboard image. In a real scenario we'd use an <img> tag with the copied asset. */}
                <img
                    src="/dashboard-preview.png"
                    alt="Levanta Dashboard Preview"
                    className="w-full h-auto object-cover opacity-90"
                />

                {/* Glow effect behind */}
                <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none" />
            </div>
        </motion.div>
    );
}
