import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useRef } from "react";

function Hero({ photo, name }) {
  const [text, count] = useTypewriter({
    words: [
      `Witam, witam z tej strony Jakub!`,
      "coffee break - skull rider na BSE (Jaku)",
      `Witam, witam z tej strony Jakub!`,
      "1# gejm dżam majster",
      `Witam, witam z tej strony Jakub!`,
      "gach Madzi",
      `Witam, witam z tej strony Jakub!`,
      "ziomek KrissQa",
      `Witam, witam z tej strony Jakub!`,
      "byłem biskupen machen",
      `Witam, witam z tej strony Jakub!`,
      "założyciel włochów",
      `Witam, witam z tej strony Jakub!`,
      "stary Pawełka",
      `Witam, witam z tej strony Jakub!`,
      "after u adiego",
      `Witam, witam z tej strony Jakub!`,
      "33% ze 100% stream majster",
      `Witam, witam z tej strony Jakub!`,
      "ej madzia chcesz mi pomóc z koszulkami?",
      `Witam, witam z tej strony Jakub!`,
      "33% ze 100% stream majster",
    ],
    loop: true,
    delaySpeed: 500,
  });

  const windowWidth = useRef(window.innerWidth);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={photo}
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        alt=""
      />
      <div className="z-20">
        <h2
          className="
            text-4xl
            font-light
            pb-5
          "
        >
          {name}
        </h2>
        {windowWidth.current > 768 ? (
          <h2 className=" text-sm uppercase pb-2 tracking-[15px]">
            Baby Member
          </h2>
        ) : (
          <h2 className=" text-sm uppercase pb-2 tracking-[15px]">
            Baby Member
          </h2>
        )}

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="text-white z-10">{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">O mnie</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Doświadczenie</button>
          </a>
          <a href="#why">
            <button className="heroButton">Doświadczenie</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
