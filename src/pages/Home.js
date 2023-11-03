import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import { AiOutlineArrowUp } from "react-icons/ai";
import Why from "../components/Why";
import { expData, aboutData } from "../data";
function Home() {
  return (
    <div>
      <section id="hero" className="snap-start">
        <Hero photo={aboutData.photo} name={aboutData.name} />
      </section>

      {/* {About} */}
      <section id="about" className="snap-center">
        <About photo={aboutData.photo} desc={aboutData.description} />
      </section>

      {/* {Experience} */}
      <section id="experience" className="snap-center">
        <WorkExperience expData={expData} />
      </section>

      <section id="about" className="snap-center">
        <Why photo={aboutData.photo} desc={aboutData.desc} />
      </section>

      <div className="sticky bottom-5 w-full">
        <div className="flex items-center justify-end mr-10">
          <a href="#hero" className="cursor-pointer">
            <AiOutlineArrowUp className="w-10 h-10 filter hover:text-[#D71E75] transtion-hover duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
