import About from "../about/About";
import HomeSlider from "./home-slider/HomeSlider";

export default function Hero() {
    return (
        <div className="hero_area">
            <HomeSlider />

            <About />
        </div>
    );
}
