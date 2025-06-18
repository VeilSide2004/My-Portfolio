import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle"


const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle complete */}
            <ThemeToggle/>

            {/* the star background */}
            <StarBackground/>
             {/* this is the navbar */}
            <Navbar/>

            {/* the main content */}
            <main>
                <Hero/>
            </main>
        </div>
    );
};

export default Home;
