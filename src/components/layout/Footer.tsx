import { Section } from '../ui/Section';

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-black/20">
            <Section className="py-0">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2 font-bold text-white text-xl">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-black rounded-full" />
                        </div>
                        Levanta
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                    </div>
                    <div>
                        © {new Date().getFullYear()} Levanta. All rights reserved.
                    </div>
                </div>
            </Section>
        </footer>
    );
}
