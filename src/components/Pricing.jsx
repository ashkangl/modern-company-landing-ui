import { useState } from "react";

const plans = [
    {
        name: "Starter",
        description: "For small projects and new ideas.",
        monthly: 499,
        yearly: 4990,
        features: [
            "Landing page",
            "Responsive design",
            "Basic SEO",
            "Email support",
        ],
    },
    {
        name: "Professional",
        description: "For growing businesses and serious projects.",
        monthly: 999,
        yearly: 9990,
        popular: true,
        features: [
            "Multi-page website",
            "Custom UI / UX",
            "Advanced SEO",
            "Performance optimization",
            "Priority support",
        ],
    },
    {
        name: "Enterprise",
        description: "For companies that need a custom solution.",
        monthly: 1999,
        yearly: 19990,
        features: [
            "Custom development",
            "Advanced integrations",
            "Dedicated support",
            "Analytics",
            "Custom strategy",
        ],
    },
];

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState("monthly");

    return (
        <section id="pricing" className="px-6 py-32 md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1600px]">

                {/* Section Header */}
                <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-blue-600" />

                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                Pricing
                            </span>
                        </div>

                        <h2 className="max-w-3xl text-6xl font-black leading-none tracking-tighter text-gray-900 lg:text-7xl">
                            Simple <span className="text-blue-600">pricing.</span>
                            <br />
                        </h2>

                    </div>

                    <p className="max-w-md text-lg leading-relaxed text-gray-500">
                        Choose the plan that fits your business.
                        Upgrade whenever you need more.
                    </p>

                </div>

                {/* Billing toggle */}
                <div className="mb-12 flex justify-center">
                    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 p-1">

                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={`rounded-full px-5 py-2 text-sm cursor-pointer font-semibold transition-all duration-300 ${
                                billingPeriod === "monthly"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setBillingPeriod("yearly")}
                            className={`rounded-full px-5 py-2 text-sm cursor-pointer font-semibold transition-all duration-300 ${
                                billingPeriod === "yearly"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            Yearly
                        </button>

                    </div>
                </div>

                {/* Plans */}
                <div className="grid gap-6 lg:grid-cols-3">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                                plan.popular
                                    ? "border-black bg-black text-white shadow-2xl lg:scale-105"
                                    : "border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-xl"
                            }`}
                        >

                            {/* Popular */}
                            {plan.popular && (
                                <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    Popular
                                </div>
                            )}

                            {/* Plan name */}
                            <h3 className="text-2xl font-bold">
                                {plan.name}
                            </h3>

                            <p
                                className={`mt-3 min-h-['48px'] text-sm leading-relaxed ${
                                    plan.popular
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mt-8 flex items-end gap-2">

                                <span className="text-5xl font-black tracking-tighter">
                                    ${billingPeriod === "monthly"
                                        ? plan.monthly
                                        : plan.yearly}
                                </span>

                                <span
                                    className={`mb-2 text-sm ${
                                        plan.popular
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                >
                                    /{billingPeriod === "monthly"
                                        ? "month"
                                        : "year"}
                                </span>

                            </div>

                            {/* CTA */}
                            <button
                                className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                                    plan.popular
                                        ? "bg-white text-black hover:bg-blue-500 hover:text-white"
                                        : "bg-gray-100 text-gray-900 hover:bg-black hover:text-white"
                                }`}
                            >
                                Get Started
                                <span className="ml-2 transition-transform duration-300">
                                    →
                                </span>
                            </button>

                            {/* Features */}
                            <div className="mt-10 border-t pt-8 border-gray-200/20">

                                <p
                                    className={`mb-5 text-sm font-semibold ${
                                        plan.popular
                                            ? "text-gray-300"
                                            : "text-gray-500"
                                    }`}
                                >
                                    What's included
                                </p>

                                <ul className="space-y-4">

                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm"
                                        >
                                            <span className="text-blue-500">
                                                ✓
                                            </span>

                                            <span
                                                className={
                                                    plan.popular
                                                        ? "text-gray-300"
                                                        : "text-gray-600"
                                                }
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}

                                </ul>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Pricing;