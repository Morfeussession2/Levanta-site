export function AboutSection() {
    return (
        <section id="About" className="bg-stone-900 py-24 md:py-40 font-['Satoshi']">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-white text-6xl md:text-8xl font-medium leading-none mb-6">About</h2>
                    <p className="text-white text-base md:text-lg max-w-lg mx-auto">
                        It is a long established fact that a reader will be distr by the readabll content of a page when looking at its layout.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img
                            src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/685c4467a5f0b72ef65c98b3_camera-.webp"
                            alt="Camera"
                            className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-10 -right-5 md:-right-10 bg-green-900 p-8 rounded-lg shadow-xl">
                            <h3 className="text-4xl font-bold text-blue-50 text-center">25</h3>
                            <div className="text-blue-50 font-light text-center">Years of Experience</div>
                        </div>
                    </div>

                    <div className="text-white">
                        <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                            Design studio With Digital <span className="text-green-500">Focus</span>
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            It is a long established fact that a reader will be distr by the readabll content of a page when looking at its layout.
                            The point of using Lorel Ipsum is that it has a more-or-less normal distribution of letters.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <a href="#contact" className="px-9 py-4 rounded-full bg-green-500 text-zinc-800 uppercase font-semibold hover:bg-white transition-colors">
                                Hire Me
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-full">
                                    {/* Icon placeholder */}
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest">Need Help?</div>
                                    <a href="tel:+00123456789" className="text-xl font-medium">+00 123 456 789</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
