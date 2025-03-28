import { Menu } from "lucide-react";
import DropdownArrow from "/DropdownArrow.svg";
import DropdownArrowUnfilled from "/DropdownArrowUnfilled.svg";
import { useState, type JSX } from "react";
import windowSizeContext from "src/contexts/windowSizeContext"

interface NavDropdownProps {
  name: string;
  options: { name: string; link: string }[];
}

function NavDropdown(props: NavDropdownProps): JSX.Element {
  const options = props.options;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav
      className="font-[Passion_One] relative"
      {...props}
      onClick={() => {
        setOpen((open) => !open);
      }}
    >
      <span className="cursor-pointer flex gap-1">
        {props.name}{" "}
        <img
          className="-mt-1 ml-1 w-4"
          src={open ? DropdownArrow : DropdownArrowUnfilled}
        />
      </span>
      {open && (
        <div className="absolute bg-black/70 backdrop-blur p-3 w-30 rounded -translate-x-1/2 gap-3 left-1/2 flex flex-col">
          {options.map((option) => (
            <a
              className="hover:bg-white/10 rounded px-1.5 -my-2 py-0.5"
              href={option.link}
            >
              {option.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function Navbar() {
  const { width, height } = windowSizeContext();

  return (
    <div className="flex gap-4 justify-end w-full z-10 sticky lg:px-[145px] px-[45px] pt-10 -mb-10 text-lg">
      {width > 816 ? [
        {
          name: "HOME",
          link: "/",
        },
        {
          name: "ABOUT US",
          link: "https://",
        },
        {
          name: "SUBTEAMS",
          link: "dropdown",
          options: [
            { name: "Mechanical", link: "/mechanical" },
            { name: "CAD", link: "/cad" },
            { name: "Programming", link: "/programming" },
            { name: "Electrical", link: "/electrical" },
            { name: "Buisiness", link: "/business" },
          ],
        },
        {
          name: "FAQ",
          link: "https://",
        },
        {
          name: "SPONSORSHIP",
          link: "https://",
        },
        {
          name: "REGISTRATION",
          link: "https://",
        },
        {
          name: "CONTACT US",
          link: "https://",
        },
      ].map((link) =>
        link.link === "dropdown" ? (
          <NavDropdown name={link.name} options={link.options ?? []} />
        ) : (
          <a href={link.link} className="font-[Passion_One]">
            {link.name}
          </a>
        )
      ) : <Menu/>}
    </div>
  );
}
