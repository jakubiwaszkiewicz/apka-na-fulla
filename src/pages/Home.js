import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import { AiOutlineArrowUp } from "react-icons/ai";
import Why from "../components/Why";
import Poczatek from "../components/Poczatek";
import Motywacja from "../components/Motywacja";
import { expData, aboutData } from "../data";
function Home() {
  return (
    <div>
      <section id="hero" className="snap-start">
        <Hero photo={aboutData.photo1} name={aboutData.name} />
      </section>
      {/* {O Mnie} */}
      <section id="poczatek" className="snap-center">
        <Poczatek photo={aboutData.photo2} desc={aboutData.jaksiezaczelo} />
      </section>
      <section id="motywacja" className="snap-center">
        <Motywacja photo={aboutData.photo3} desc={aboutData.motywacja} />
      </section>
      {/* {Doświadczenie} */}

      {/* {Dlaczego} */}
      <section id="why" className="snap-center">
        <Why photo={aboutData.photo4} desc={aboutData.why} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience expData={expData} />
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
