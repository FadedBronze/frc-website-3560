import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";
import { WolfButton } from "src/components/WolfButton";
import { Instagram, Phone, Mail, Package, MapPin } from "lucide-react";
import { useState } from "react";
import { openSponsorModal } from "src/functions/sponsor";
import Map from "src/components/Map";

export default function SponsorshipPage() {
  return <div className="overflow-hidden" >
    <Navbar />
    <div className="relative -mt-20 h-[400px]">
      <img className="absolute w-full h-full object-cover object-top left-0 top-0 z-0" src="/chinguacousy.jpeg" />
      <div className="bg-black absolute w-full h-full top-0 left-0 opacity-60"></div>
    </div>
    <div className="px-[45px] lg:px-[145px] relative z-10 mt-19 -mb-20">
      <h2 className="font-[Passion_One] text-3xl mb-12 text-center">CONTACTS</h2>
      <div className="grid mb-18 xl:grid-cols-3 gap-[3rem_0rem]">
        
        {[
          { name: "Email", cta: "Get In Touch", icon: Mail, link: "mailto:3560frc@gmail.com", description: "Get in contact with us via email" },
          { name: "Phone", cta: "Get In Touch", icon: Phone, link: "tel:+19057912400", description: "Get in contact with us by phone" },
          { name: "Instagram", cta: "Explore", icon: Instagram, link: "https://www.instagram.com/3560frc/", description: "Come explore our Instagram page and find more on what we do!" },
        ].map((box) => {
          return (
            <div key={box.link + box.onClick} className="max-w-86 justify-self-center last:max-xl:md:col-span-2 items-center grid max-md:gap-2 gap-4" >
              <div className="flex flex-col items-center gap-4">
                <div className="w-fit flex gap-2 font-[Inter] text-2xl items-center text-white">
                  <box.icon color="var(--color-white)"></box.icon>
                  <h2 className="font-bold">{box.name}</h2>
                </div>
                <p className="font-[Inter] text-lg text-center text-white">{box.description}</p>
              </div>
              <a href={box.link} className="text-center w-fit h-fit px-3 py-1 md:px-4 md:py-3 hover:bg-white/30 bg-white/20 text-white rounded-md text-lg md:text-xl font-[Passion_One] justify-self-center">{box.cta}</a>
            </div>
          ) 
        })}
      </div>
      <section className="bg-[#fff9f0] py-18 px-[45px] lg:px-[125px] w-screen -ml-[45px] lg:-ml-[125px] mt-14">
        <div className="text-center text-lg">
          <h2 className="font-[Passion_One] text-3xl text-wolf-black">SPONSORS</h2>
          <p className="text-black mb-5">Our sponsors make everything we do possible, from parts to competitions. <br/> <b>Please reach out</b> if you can sponsor us!</p>
          <span className="inline-flex flex-wrap justify-center gap-3 mb-12">
            <a href="tel:+19057912400" className="text-white hover:bg-black/80 bg-black px-3 py-3 md:px-4 md:py-3 text-xl rounded-md cursor-pointer font-[Passion_One] inline-flex gap-2">Reach Out <Phone className="scale-90" /></a>
            <button onClick={openSponsorModal} className="px-3 py-3 md:px-4 text-xl rounded-md cursor-pointer hover:bg-white text-black outline-1 font-[Passion_One] inline-flex gap-2">View Package <Package className="scale-90" /></button>
          </span>
        </div>

        <div className="grid grid-cols-5 max-xl:grid-cols-4 [&>*]:justify-self-center [&>*]:self-center max-md:grid-cols-2 gap-[2rem_4%]">
          <img src="/sponsors/B-Tech_Manufacturing.jpg"></img>
          <img src="/sponsors/Brannon.jpg"></img>
          <img src="/sponsors/Ombrex_Telecom.png"></img>
          <img src="/sponsors/CMI_FG.png"></img>
          <img src="/sponsors/D4E.png"></img>
        </div>
      </section>
      <div className="font-[Passion_One] text-3xl mt-26 text-center" />
      <Map />
    </div>
    <Footer />
  </div>
}
