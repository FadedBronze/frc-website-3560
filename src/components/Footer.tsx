import { Mails, Phone, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex relative h-[500px] bg-[#5398FF] mt-48 text-[#00041A] px-36 items-center justify-between overflow-hidden">
      <div className="absolute top-0 left-18 -translate-x-1/2 h-full">
        <div className="flex gap-3 absolute left-1/2 top-1/2 -translate-1/2 flex-col z-10">
          {[
            { link: "mailto:3560frc@gmail.com", icon: Mails },
            { link: "tel:+19057912400", icon: Phone },
            { link: "https://x.com/Team3560", icon: Twitter },
            {
              link: "https://www.youtube.com/@chinguacousyrobotics7775",
              icon: Youtube,
            },
            { link: "https://www.instagram.com/3560frc/", icon: Instagram },
          ].map((social) => (
            <a
              target="_blanc"
              className="rounded-full bg-[#00041A] p-3 hover:scale-[110%] transition-transform duration-200"
              href={social.link}
            >
              <social.icon color="white" />
            </a>
          ))}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#00041A]"></div>
      </div>
      <div className="flex flex-col gap-12 translate-x-1/5">
        <h1 className="uppercase font-[Passion_One] text-4xl">Team 3560</h1>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">
              Main Pages
            </h1>
            <ul className="font-semibold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/sponsorship">Sponsorship</a>
              </li>
              <li>
                <a href="/registration">Registration</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/first">FIRST</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">
              Subdivisions
            </h1>
            <ul className="font-semibold">
              <li>
                <a href="/cad">CAD</a>
              </li>
              <li>
                <a href="/mechanical">Mechanical</a>
              </li>
              <li>
                <a href="/electrical">Electrical</a>
              </li>
              <li>
                <a href="/programming">Programming</a>
              </li>
              <li>
                <a href="/business">Business</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">Contact</h1>
            <ul className="font-semibold">
              <li>
                <a
                  href="mailto:3560frc@gmail.com"
                  className="flex gap-2 items-center"
                >
                  <Mails color="#00041A" size={20} />
                  3560frc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+19057912400" className="flex gap-2 items-center">
                  <Phone color="#00041A" size={20} />
                  +1 905-791-2400
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="translate-x-[250px] translate-y-[250px]">
        <div className="rounded-full bg-[#94bbf6] min-w-[800px] min-h-[800px] aspect-square animate-[breathe_7s_ease-in-out_infinite]"></div>
      </div>
    </footer>
  );
}
