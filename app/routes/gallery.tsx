import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { useRef, useEffect } from "react";

const images = import.meta.glob("../../public/gallery/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
  import: 'default'
});

export default function Gallery() {
  return <>
    <Navbar></Navbar>
    <div className="px-[45px] lg:px-[145px] mt-20">
      <h2 className="font-[Passion_One] text-3xl mb-3">GALLERY</h2>
      <div style={{
        listStyle: "none",
        columnGap: "0.25rem",
        columnCount: 4,
      }}>
        {Object.keys(images).map((image, i) => {
          return (
            <img className="hover:scale-110 outline-[0.25rem] outline-wolf-black transition-transform w-full not-first:mt-[0.25rem]" rel="preload" src={image} />
          )
        })}
      </div>
    </div>
    <Footer></Footer>
  </>
}
