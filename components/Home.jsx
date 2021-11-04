import Hero from "./Hero";
import Bike from "./Bike";
import BikeSectionTwo from "./BikeSectionTwo";
import Hybrid from "./Hybrid";
import Review from "./Review";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className={"bg-gray-50 scrollbar-hide min-h-screen overflow-y-scroll overflow-x-hidden"}>
            <Hero />
            <Bike />
            <BikeSectionTwo />
            <Hybrid />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;