import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";
import { WolfButton } from "src/components/WolfButton";
import { Instagram, Phone, Mail, Package, MapPin } from "lucide-react";
import { useState } from "react";
import { openSponsorModal } from "src/functions/sponsor";
import Map from "src/components/Map";

export default function SponsorshipPage() {
  return <>
    <Navbar></Navbar>
    <div className="relative -mt-20 h-[400px]">
      <img className="absolute w-full h-full object-cover object-top left-0 top-0 z-0" src="/chinguacousy.jpeg" />
      <div className="bg-black absolute w-full h-full top-0 left-0 opacity-60"></div>
    </div>
    <div className="px-[45px] lg:px-[145px] relative z-10 -mt-[calc(-7rem)] -mb-10">
      <h2 className="font-[Passion_One] text-3xl mb-3">SPONSORSHIP {"&"} CONTACT</h2>
      <div className="grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-6">
        {[
          { name: "Email", cta: "Get in touch", icon: Mail, link: "mailto:3560frc@gmail.com", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
          { name: "Sponsorship Package", cta: "Explore", icon: Package, link: "", onClick: openSponsorModal, description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
          { name: "Phone", cta: "Get in touch", icon: Phone, link: "tel:+19057912400", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
          { name: "Instagram", cta: "Explore", icon: Instagram, link: "https://www.instagram.com/3560frc/", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
          { name: "Location", cta: "Find us", icon: MapPin, link: "", description: "1370 Williams Pkwy E, Brampton, ON L6S 1V3" },
        ].map((box) => {
          return (
            <div key={box.link + box.onClick} className="p-10 even:bg-wolf-blue/75 bg-wolf-blue/85 first:bg-wolf-blue rounded-md flex flex-col gap-4" >
              <div className="flex font-[Inter] text-xl text-wolf-black justify-between">
                <h2 className="font-bold">{box.name}</h2>
                <box.icon color="var(--color-wolf-black)"></box.icon>
              </div>
              <p className="font-[Inter] text-lg text-wolf-black">{box.description}</p>
              {box.link !== "" ? (
                <a href={box.link} className="max-w-48 w-fit p-4 hover:bg-wolf-black/90 bg-wolf-black rounded-md text-xl font-[Passion_One]">{box.cta.toUpperCase()}</a>
              ) : (
                <button onClick={box.onClick} className="cursor-pointer max-w-48 w-fit p-4 hover:bg-wolf-black/90 bg-wolf-black rounded-md text-xl font-[Passion_One]">{box.cta.toUpperCase()}</button>
              )}
            </div>
          ) 
        })}
      </div>
      <section className="bg-white py-12 px-[45px] lg:px-[125px] w-screen -ml-[45px] lg:-ml-[125px] mt-14">
        <h2 className="font-[Passion_One] max-md:text-lg text-3xl mb-6 text-wolf-black">SPONSORS</h2>
        <div className="flex max-md:gap-6 gap-12 mb-14 flex-wrap">
          <img className="h-30 max-md:h-15" src="/sponsors/B-Tech_Manufacturing.jpg"></img>
          <img className="h-30 max-md:h-15" src="/sponsors/Brannon.jpg"></img>
          <img className="h-30 max-md:h-15 max-md:-mx-4 -my-5 -mx-8" src="/sponsors/Ombrex_Telecom.png"></img>
        </div>
        <div className="flex max-md:gap-6 gap-12">
          <img className="h-15 max-md:h-8" src="/sponsors/CMI_FG.png"></img>
          <img className="h-15 max-md:h-8" src="/sponsors/D4E.png"></img>
        </div>
      </section>
      <h2 className="font-[Passion_One] text-3xl mb-3 mt-14">MAP</h2>
      <Map />
    </div>
    <Footer></Footer>
  </>
}
