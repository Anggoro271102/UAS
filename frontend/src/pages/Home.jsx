import AboutSection from "../component/AboutSection";
import Footer from "../component/Footer";
import HobbySection from "../component/HobbySection";
import HomeSection from "../component/HomeSection";
import SkillSection from "../component/SkillSection";


const Home = () => {
    return(
        <div>
            <HomeSection/>
            <AboutSection/>
            <HobbySection/>
            <SkillSection/>
        </div>
       
    );
};

export default Home