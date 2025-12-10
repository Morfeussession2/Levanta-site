import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const hourlyPlans = [
    {
        name: "Basic",
        price: "$50",
        period: "Forever",
        features: [
            { text: "Up to 50 high resolution photos.", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: false },
            { text: "No prints included.", available: true }
        ],
        highlight: false
    },
    {
        name: "Standard",
        price: "$200",
        period: "Per user",
        features: [
            { text: "Up to 50 high resolution photos", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: true },
            { text: "No prints included.", available: true }
        ],
        highlight: true
    },
    {
        name: "Premium",
        price: "$500",
        period: "Per user",
        features: [
            { text: "Up to 50 high resolution photos.", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: true },
            { text: "No prints included.", available: true }
        ],
        highlight: false
    }
];

const projectPlans = [
    {
        name: "Basic",
        price: "$100",
        period: "Forever",
        features: [
            { text: "Up to 50 high resolution photos.", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: false },
            { text: "No prints included.", available: true }
        ],
        highlight: false
    },
    {
        name: "Standard",
        price: "$400",
        period: "Per user",
        features: [
            { text: "Up to 50 high resolution photos", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: true },
            { text: "No prints included.", available: true }
        ],
        highlight: true
    },
    {
        name: "Premium",
        price: "$1000",
        period: "Per user",
        features: [
            { text: "Up to 50 high resolution photos.", available: true },
            { text: "Online gallery access.", available: true },
            { text: "High-resolution digital files.", available: true },
            { text: "2-week delivery time.", available: true },
            { text: "No prints included.", available: true }
        ],
        highlight: false
    }
];

export function PricingSection() {
    const [billingType, setBillingType] = useState<'hourly' | 'project'>('hourly');
    const plans = billingType === 'hourly' ? hourlyPlans : projectPlans;

    return (
        <section id="pricing" className="bg-zinc-800 py-24 font-['Satoshi']">
            <div className="w-full max-w-screen-2xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-white text-5xl md:text-8xl font-medium mb-8">Pricing</h2>
                    <p className="text-gray-300 text-lg max-w-lg mx-auto">
                        All good things starts with a homepage. Get inspired without breaking your wallet with premium templates.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1 rounded-full flex relative">
                        <button
                            onClick={() => setBillingType('hourly')}
                            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${billingType === 'hourly' ? 'bg-zinc-800 text-white' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Hourly
                        </button>
                        <button
                            onClick={() => setBillingType('project')}
                            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${billingType === 'project' ? 'bg-zinc-800 text-white' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Project Based
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl border transition-transform duration-300 hover:scale-[1.02]
                                ${plan.highlight ? 'bg-green-900 border-green-800' : 'bg-white border-white'}
                            `}
                        >
                            <h3 className={`text-lg font-semibold ${plan.highlight ? 'text-gray-50' : 'text-zinc-900'}`}>{plan.name}</h3>
                            <h4 className={`text-4xl font-semibold mt-3 ${plan.highlight ? 'text-white' : 'text-zinc-900'}`}>{plan.price}</h4>
                            <div className={`mt-2 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.period}</div>

                            <div className="mt-8 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        {feature.available ? (
                                            <div className={`rounded-full p-0.5 ${plan.highlight ? 'bg-white/20' : 'bg-green-100'}`}>
                                                <Check className={`w-4 h-4 ${plan.highlight ? 'text-white' : 'text-green-600'}`} />
                                            </div>
                                        ) : (
                                            <div className="rounded-full p-0.5 bg-gray-100">
                                                <X className="w-4 h-4 text-gray-400" />
                                            </div>
                                        )}
                                        <span className={`text-sm ${plan.highlight ? 'text-gray-200' : (feature.available ? 'text-zinc-800' : 'text-neutral-400')}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full mt-10 py-3 rounded-full font-semibold border transition-all
                                ${plan.highlight
                                    ? 'bg-blue-50 text-stone-900 hover:bg-green-500 border-none'
                                    : 'border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white'
                                }
                            `}>
                                Start for free
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
