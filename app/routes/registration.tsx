import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";
import { WolfButton } from "src/components/WolfButton";

export default function Registration() {
  return (
    <>
      <Navbar />
      <div className="relative -mt-20 h-[400px]">
        <img className="absolute w-full h-full object-cover object-top left-0 top-0 z-0" src="/chinguacousy.jpeg" />
        <div className="bg-black absolute w-full h-full top-0 left-0 opacity-60"></div>
      </div>
      <article className="px-[45px] lg:px-[145px] py-20">
        <h2 className="font-[Passion_One] text-3xl mb-3">REGISTRATION</h2>
        <p>
         Registration is closed for this semester, if you would like to join next semester or next year, please pay the fee on schoolcashonline and talk to Mrs. Harris or Mrs. Kirsh. 
        </p>
      </article>
      <Footer />
    </>
  );
}
