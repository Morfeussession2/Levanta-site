import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function Section({ children, className, id, delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={twMerge(clsx('py-20 px-6 md:px-12 max-w-7xl mx-auto', className))}
        >
            {children}
        </motion.section>
    );
}
