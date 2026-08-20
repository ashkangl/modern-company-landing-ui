import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Services from "../components/Services"

const Home = () => {
    return(
        <>
            <Header />

            <main className="md:mt-24 mt-8">
                <Hero />
                <Services />
                <About />
                <Pricing />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default Home