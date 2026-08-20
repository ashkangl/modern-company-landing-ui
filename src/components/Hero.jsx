import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-12 lg:px-20">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
                <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-[1600px]">

                {/* Small label */}
                <div className="mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />

                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Digital Agency
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-tighter text-gray-900 sm:text-7xl md:text-8xl lg:text-[110px]">
                    We build
                    <br />

                    <span className="text-blue-600">
                        digital experiences
                    </span>

                    <br />

                    that matter.
                </h1>

                {/* Bottom content */}
                <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                    <p className="max-w-xl text-lg leading-relaxed text-gray-500 md:text-xl">
                        We help ambitious companies turn ideas into
                        beautiful, high-performing digital products.
                    </p>

                    <Link
                        to="/contact"
                        className="group inline-flex w-fit items-center gap-4 rounded-full bg-black px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                        Start a project

                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </Link>

                </div>

                {/* Scroll indicator */}
                <div className="mt-20 flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-10 w-px bg-gray-300" />

                    <span className="uppercase tracking-widest">
                        Scroll to explore
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Hero;