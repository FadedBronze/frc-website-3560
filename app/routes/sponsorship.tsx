import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";
import { WolfButton } from "src/components/WolfButton";
import { Instagram, Phone, Mail, Package, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { openSponsorModal } from "src/functions/sponsor";
import Map from "src/components/Map";

export default function SponsorshipPage() {
  return ( 
    <div className="overflow-hidden" >
      <Navbar />
      <div className="relative md:-mt-20 h-[200px] md:h-[400px] px-[45px] lg:px-[125px]">
        <img className="absolute w-full h-full object-cover object-top left-0 top-0 z-0" src="/chinguacousy.jpeg" />
        <div className="bg-black absolute w-full h-full top-0 left-0 opacity-60"></div>
      </div>

      <section className="p-9 xl:px-[20%]">
        <div className="flex gap-8 justify-center">
          
          {[
            { icon: Mail, link: "mailto:3560frc@gmail.com", name:"3560frc@gmail.com" },
            { icon: Phone, link: "tel:+19057912400", name:"+1-905-791-2400" },
            { icon: Instagram, link: "https://www.instagram.com/3560frc/", name:"@3560frc" },
          ].map((box) => {
            return (
              <div className="truncate w-fit flex gap-2 font-[Inter] md:text-lg text-sm items-center text-white">
                <box.icon color="var(--color-white)" className="max-sm:w-6"></box.icon>
                <a className="truncate max-sm:hidden" href={box.link}>{box.name}</a>
              </div>
            ) 
          })}
        </div>
      </section>

      <section className="bg-[#fff9f0] py-18 px-[45px] lg:px-[125px] w-screen">
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
      <div className="max-md:p-0 md:py-18 md:px-[45px] lg:px-[125px] grid-cols-[1fr_max(15%,20rem)] max-lg:grid-cols-1 max-md:p-[45px] grid gap-4 gap-[34px_2rem] h-fit lg:h-[36rem]">
        <Map />
        <div>
          <h2 className="font-[Passion_One] text-3xl mb-4">CHINGUACOUSY SS</h2>
          <div className="flex gap-2 lg:gap-3 flex-col [&>*]:inline-grid [&>*]:grid-cols-[2rem_1fr] max-lg:text-sm">
            <a href="https://www.google.com/maps?ll=43.73672,-79.727968&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=12057085578621343450"><MapPin /> 1370 Williams Pkwy E, Brampton, ON L6S 1V3</a>
            <a href="tel:+19057912400"><Phone /> +1 905 791 2400</a>
            <span><Clock /> Weekdays 8:00am - 2:34pm</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
