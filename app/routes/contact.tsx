import Navbar from "src/components/Navbar.tsx";
import Footer from "src/components/Footer.tsx";
import Box from "src/components/Box.tsx";
import { Instagram, Phone, Mail, Package } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div className="px-[45px] lg:px-[145px] mt-20">
        <h2 className="font-[Passion_One] text-3xl mb-3">Contact Us</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Email", cta: "Get in touch", icon: Mail, link: "", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
            { name: "Sponsorship Package", cta: "Explore", icon: Package, link: "", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
            { name: "Phone", cta: "Get in touch", icon: Phone, link: "", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
            { name: "Instagram", cta: "Explore", icon: Instagram, link: "", description: "Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua." },
          ].map((box) => {
            return (
              <div className="p-10 last:bg-wolf-blue/75 bg-wolf-blue/85 first:bg-wolf-blue rounded-md flex flex-col gap-4" >
                <div className="flex font-[Inter] text-xl text-wolf-black justify-between">
                  <box.icon color="var(--color-wolf-black)"></box.icon>
                  <h2 className="font-bold">{box.name}</h2>
                </div>
                <p className="font-[Inter] text-lg text-wolf-black">{box.description}</p>
                <button className="max-w-48 p-4 hover:bg-wolf-black/90 bg-wolf-black rounded-md text-xl font-[Passion_One]">{box.cta.toUpperCase()}</button>
              </div>
            ) 
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
