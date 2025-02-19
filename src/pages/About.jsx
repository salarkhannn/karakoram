import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about max-w-fit mx-auto mt-[100px] mb-[100px] font-[Neue]">
                <p className="about-title2 text-center text-[48px] font-medium mb-10">About Karakoram</p>
                <div className="about-content max-w-3xl mx-auto text-lg leading-relaxed">
                    <p className="mb-6">
                        Welcome to <strong>Karakoram</strong>, a conceptual brand that blends adventure, style, and innovation. 
                        Every element of this brand—from the clothing designs to the logo and branding—was meticulously crafted 
                        to capture the essence of exploration and resilience.
                    </p>
                    <p className="mb-6">
                        <span className="about-title3 text-[36px] font-medium block mb-3">Designed & Developed by Me</span>
                        Karakoram is entirely my vision, from the ground up. The brand identity, apparel designs, and aesthetics 
                        were first conceptualized and refined in <strong>Figma</strong>, ensuring a modern and cohesive look. 
                        The website itself was developed using <strong>React</strong> and <strong>Tailwind CSS</strong>, providing 
                        a fast, responsive, and seamless user experience.
                    </p>
                    <p className="mb-6">
                        <span className="about-title3 text-[36px] font-medium block mb-3">A Concept Rooted in Adventure</span>
                        Inspired by the rugged peaks of the Karakoram range, this brand embodies the spirit of those who seek 
                        to push limits, conquer new heights, and embrace the outdoors. Whether it’s graphic tees, essential wear, 
                        or mountaineering gear, every collection reflects this core philosophy.
                    </p>
                    <p>
                        <span className="about-title3 text-[36px] font-medium block mb-3">More Than Just a Brand</span>
                        Karakoram is more than just apparel—it’s a statement. Every design tells a story of adventure, pushing 
                        boundaries, and embracing the unknown. While this is a conceptual project, it represents my passion 
                        for design, branding, and web development.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
