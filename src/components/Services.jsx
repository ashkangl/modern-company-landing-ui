const services = [
    {
        number: "1",
        title: "Web Development",
        description:
            "Fast, responsive and scalable websites built with modern technologies.",
    },
    {
        number: "2",
        title: "UI / UX Design",
        description:
            "Clean and intuitive interfaces designed to turn visitors into customers.",
    },
    {
        number: "3",
        title: "Digital Strategy",
        description:
            "Smart digital strategies that help your business grow and stand out.",
    },
];

const Services = () => {
    return (
        <section id="services" className="px-6 py-32 md:px-12 lg:px-20">
            <div className="mx-auto max-w-[1600px]">

                {/* Section header */}
                <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div>
                        {/* Small label */}
                        <div className="mb-8 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                What we do
                            </span>
                        </div>

                        <h2 className="max-w-3xl text-6xl font-black leading-none tracking-tighter text-gray-900 lg:text-7xl">
                            <span className="text-blue-600">Services</span> that
                            <br />
                            
                            move <span className="text-blue-600">businesses</span> forward.
                        </h2>
                    </div>

                    <p className="max-w-md text-lg leading-relaxed text-gray-500">
                        From strategy to development, we create digital
                        experiences designed to make an impact.
                    </p>

                </div>

                {/* Services */}
                <div className="border-t border-gray-200">

                    {services.map((service) => (
                        <div key={service.number} className="group grid grid-cols-[60px_1fr] gap-6 border-b border-gray-200 py-10 transition-all duration-500 hover:px-4 md:grid-cols-[100px_1.2fr_1fr] md:items-center md:gap-10 cursor-context-menu">

                            {/* Number */}
                            <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-blue-600">
                                {service.number}
                            </span>

                            {/* Title */}
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <div className="col-start-2 mt-2 flex items-center justify-between md:col-start-auto md:mt-0">
                                <p className="max-w-md text-gray-500">
                                    {service.description}
                                </p>  
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Services;