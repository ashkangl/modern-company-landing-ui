import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-gray-950 px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="mx-auto max-w-[1600px]">

                {/* Small label */}
                <div className="mb-12 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />

                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Let's work together
                    </span>
                </div>

                {/* Main heading */}
                <h2 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl">
                    Have a <span className="text-blue-600">project</span>
                    <br />
                    in <span className="text-blue-600">mind?</span>
                </h2>

                {/* Bottom */}
                <div className="mt-20 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">

                    <div>
                        <p className="max-w-xl text-xl leading-relaxed text-gray-500">
                            Tell us about your idea and let's create
                            something meaningful together.
                        </p>

                        <a
                            href="mailto:hello@yourcompany.com"
                            className="mt-6 inline-block text-lg font-semibold underline decoration-gray-600 underline-offset-8 transition-colors hover:text-blue-600 hover:decoration-blue-600"
                        >
                            hello@yourcompany.com
                        </a>
                    </div>

                    <Link
                        to="/contact"
                        className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
                    >
                        Start a conversation

                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Contact;