import { useEffect } from "react";
import { Mails, Phone, Twitter, Youtube, Instagram } from "lucide-react";
import windowSizeContext from "src/contexts/windowSizeContext";
import Logo from "public/Logo.svg";

export default function Footer() {
  const { width } = windowSizeContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mechawolf = document.querySelector(".mechawolf") as HTMLElement;

      if (!mechawolf) return;

      const rect = mechawolf.getBoundingClientRect();

      const sensitivity = 0.03;
      const offsetX = rect.width * 0.3;
      const offsetY = 1;

      const wolfX = rect.left + rect.width / 2 + offsetX;
      const wolfY = rect.top + rect.height / 2 + offsetY;
      const mouseOffsetX = e.clientX - wolfX;
      const mouseOffsetY = Math.min(e.clientY - wolfY, -15);

      const angle =
        Math.atan2(mouseOffsetY, mouseOffsetX) * sensitivity * (360 / Math.PI);

      mechawolf.style.transform = `translateY(50%) translateY(80px) translateX(80px) rotate(${
        angle + 360 * sensitivity
      }deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="py-10 flex relative sm:h-[500px] bg-[#5398FF] mt-24 md:mt-48 text-[#00041A] lg:px-8 max-sm:ml-0 max-lg:-ml-18 px-0 items-center justify-left overflow-hidden">
      {width > 1024 && (
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
                key={social.link}
                target="_blank"
                className="rounded-full bg-[#00041A] p-3 hover:scale-[110%] transition-transform duration-200"
                href={social.link}
              >
                <social.icon color="white" />
              </a>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#00041A]"></div>
        </div>
      )}
      <div className="flex flex-col gap-12 translate-x-1/3">
        <h1 className="uppercase font-[Passion_One] text-4xl">Team 3560</h1>
        <div className="flex sm:flex-row flex-col gap-10 sm:gap-20">
          <div className="flex flex-col max-xl:flex-col gap-4">
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
          <div className="flex flex-col max-xl:flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">Divisions</h1>
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
          <div className="flex flex-col max-xl:flex-col gap-4">
            <h1 className="uppercase font-[Passion_One] text-3xl">
              Contact info
            </h1>
            <ul className="font-semibold">
              <li>
                <a
                  href="mailto:3560frc@gmail.com"
                  className="flex gap-2 items-center"
                >
                  <Mails color="#00041A" size={20} /> 3560frc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+19057912400" className="flex gap-2 items-center">
                  <Phone color="#00041A" size={20} /> +1 905-791-2400
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {width > 900 && (
        <div className="absolute origin-bottom-right bottom-1/2 right-0 mechawolf">
          <img
            className="animate-[breathe_7s_ease-in-out_infinite]"
            src={Logo}
          />
        </div>
      )}
    </footer>
  );
}
