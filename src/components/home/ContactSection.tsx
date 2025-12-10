export function ContactSection() {
    return (
        <section id="contact" className="bg-zinc-800 py-24 font-['Satoshi'] relative overflow-hidden">
            {/* Background Image / Texture logic if needed, using gradient for now as placeholder or specific bg color */}
            <div className="max-w-screen-2xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="text-white text-2xl leading-7 opacity-70">
                            Simple Easy Quick Steps
                        </div>
                        <h2 className="font-bold text-white text-4xl md:text-5xl leading-tight">
                            Need any help with Our photographer?
                        </h2>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl relative">
                        <h3 className="text-zinc-900 text-3xl font-semibold mb-2">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-zinc-600 text-base mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>

                        <form className="relative w-full">
                            <input
                                type="email"
                                placeholder="Type your E-mail here..."
                                className="w-full h-14 pl-4 pr-32 rounded-full border border-stone-300 text-zinc-800 focus:outline-none focus:border-green-500 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-6 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            {/* Background Texture/Image placeholder from HTML */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/6807a35fa7e61d09e84e302b/_cta%20image.webp')] opacity-20 bg-cover bg-no-repeat pointer-events-none mix-blend-overlay"></div>
        </section>
    );
}
