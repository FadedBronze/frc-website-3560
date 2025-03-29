import { Menu, X } from "lucide-react";
import DropdownArrow from "/DropdownArrow.svg";
import DropdownArrowUnfilled from "/DropdownArrowUnfilled.svg";
import { useState, type JSX } from "react";
import windowSizeContext from "src/contexts/windowSizeContext"
import { Fragment } from "react";

interface NavDropdownProps {
  name: string;
  options: { name: string; link: string }[];
  open: boolean,
  toggleOpenDropdown: () => void;
}

function NavDropdown(props: NavDropdownProps): JSX.Element {
  const options = props.options;

  return (
    <nav
      className="font-[Passion_One] relative"
      onClick={() => {
        props.toggleOpenDropdown();
      }}
    >
      <span className="cursor-pointer flex gap-1">
        {props.name.toUpperCase()}{" "}
        <img
          className="-mt-1 ml-1 w-4"
          src={props.open ? DropdownArrow : DropdownArrowUnfilled}
        />
      </span>
      {props.open && (
        <div className="absolute bg-black/70 backdrop-blur py-2 rounded -translate-x-1/2 gap-3 left-1/2 flex flex-col">
          {options.map((option) => (
            <a
              key={option.name}
              className="hover:bg-white/10 rounded px-2 -my-2 py-0.5 w-full"
              href={option.link}
            >
              {option.name.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

const links = [
  {
    name: "Info",
    break: true,
    options: [
      { name: "Home", link: "/", }, 
      { name: "About us", link: "https://", },
      { name: "FAQ", link: "https://", },
    ],
  },
  {
    name: "Subdivisions",
    break: false,
    options: [
      { name: "Mechanical", link: "/mechanical" },
      { name: "CAD", link: "/cad" },
      { name: "Programming", link: "/programming" },
      { name: "Electrical", link: "/electrical" },
      { name: "Buisiness", link: "/business" },
    ],
  },
  {
    name: "Outreach",
    break: true,
    options: [
      { name: "Sponsorship", link: "https://", },
      { name: "Registration", link: "https://", },
      { name: "Contact us", link: "https://", },
    ],
  },
]

export default function Navbar() {
  const { width } = windowSizeContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(-1);

  return (
    <div className="flex gap-4 justify-end w-full z-10 sticky lg:px-[145px] px-[45px] pt-10 -mb-10 text-lg">
      {width > 816 ? links.map((link, i) =>
        link.break === false ? (
          <NavDropdown key={link.name} open={i == openDropdown} toggleOpenDropdown={() => setOpenDropdown(openDropdown == i ? -1 : i)} name={link.name} options={link.options ?? []} />
        ) : (
          <Fragment key={link.name}>{link.options.map((link) => (
            <a key={link.name} href={link.link} className="font-[Passion_One]">
              {link.name.toUpperCase()}
            </a>
          ))}</Fragment>
        )
      ) : (
        <button className="">
          <>{menuOpen ? (
            <X className="relative z-10" onClick={() => setMenuOpen(false)}/>
          ) : (
            <Menu className="relative z-10" onClick={() => setMenuOpen(true)}/>
          )}</>
          <nav style={{
            transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
            transition: "transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
          }} className="absolute top-0 left-0 w-full bg-blue-400 h-fit text-left font-[Passion_One] rounded p-10 text-white">
            {links.map((link) => (
              <div key={link.name} className="[&:not(:last-child)]:mb-4">
                <h3 className="text-3xl">{link.name}</h3>
                <div>{link.options.map((link) => (
                  <a href={link.link} key={link.name} className="transition-transform duration-100 hover:scale-[1.1] origin-left text-xl block font-[Inter]">
                    {link.name}
                  </a>
                ))}</div>
              </div>
            ))}
          </nav>
        </button>
      )}
    </div>
  );
}
