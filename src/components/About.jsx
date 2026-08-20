import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";

const stats = [
    {
        number: 50,
        label: "Projects completed",
    },
    {
        number: 20,
        label: "Happy clients",
    },
    {
        number: 5,
        label: "Years of experience",
    },
];

const About = () => {
    const statsRef = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="bg-gray-950 px-6 py-32 text-white md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1600px]">

                {/* Section Header */}
                <div className="mb-24">

                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />

                        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                            About us
                        </span>
                    </div>

                    <h2 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tighter lg:text-7xl">
                        We believe great
                        <span className="text-blue-600"> digital work </span>
                        should make people
                        <span className="text-gray-500"> feel something.</span>
                    </h2>

                </div>

                {/* Content */}
                <div className="grid gap-16 border-t border-white/10 pt-16 md:grid-cols-2">

                    <div>
                        <p className="max-w-xl text-2xl leading-relaxed text-gray-300 md:text-3xl">
                            We are a digital team focused on building
                            meaningful experiences for ambitious brands.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                        <p className="max-w-lg leading-relaxed text-gray-400">
                            From the first idea to the final pixel, we combine
                            strategy, design and technology to create digital
                            products that are simple, useful and memorable.
                        </p>

                        <p className="max-w-lg leading-relaxed text-gray-400">
                            We don't believe in unnecessary complexity.
                            We believe in clear ideas, thoughtful design and
                            technology that works.
                        </p>
                    </div>

                </div>

                {/* Stats */}
                <div
                    ref={statsRef}
                    className="mt-24 grid border-t border-white/10 md:grid-cols-3"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                        >
                            <div className="text-6xl font-black tracking-tighter transition-transform duration-500 group-hover:-translate-y-2 md:text-7xl">

                                <NumberFlow
                                    value={started ? stat.number : 0}
                                    transformTiming={{
                                        duration: 1200,
                                        easing: "ease-out",
                                    }}
                                    spinTiming={{
                                        duration: 1200,
                                        easing: "ease-out",
                                    }}
                                />

                                <span>+</span>

                            </div>

                            <div className="mt-3 text-sm uppercase tracking-widest text-gray-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;