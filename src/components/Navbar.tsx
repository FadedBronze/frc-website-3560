import DropdownArrow from "../../public/DropdownArrow.svg"
import DropdownArrowUnfilled from "../../public/DropdownArrowUnfilled.svg"
import { useState } from "react"

function NavDropdown(props) {
  const options = props.options;
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-[Passion_One] relative" {...props} onClick={() => {
      setOpen((open) => !open)
    }}>
      <span className="cursor-pointer flex gap-1">
        {props.name} <img className="-mt-1" src={open ? DropdownArrow : DropdownArrowUnfilled} />
      </span>
      {open && <div className="absolute bg-black/40 py-2 w-30 rounded -translate-x-1/2 gap-3 left-1/2 flex flex-col">
        {
        options.map((option) => (
          <a className="hover:bg-white/10 rounded px-1.5 -my-2 py-0.5" href={option.link}>{option.name}</a>
        ))
        }
      </div>}
    </nav>
  )
}

export default function Navbar() {
  return (
    <div className="flex gap-4 justify-end w-full z-10 relative sticky lg:px-[145px] px-[45px] pt-10 -mb-10">
      {
        [{
          name: "SUBTEAMS",
          link: "dropdown",
          options: [
            { name: "Mechanical", link: "/mechanical" },
            { name: "CAD", link: "/cad" },
            { name: "Programming", link: "/programming" },
            { name: "Electrical", link: "/electrical" },
            { name: "Buisiness", link: "/business" },
            { name: "Graphic Design", link: "/graphicdesign" },
          ]
        },{
          name: "REGISTRATION",
          link: "https://"
        },{
          name: "SPONSORSHIP PACKAGE",
          link: "https://"
        },{
          name: "FAQ",
          link: "https://"
        },{
          name: "HOME",
          link: "/"
        },{
          name: "ABOUT US",
          link: "https://"
        },{
          name: "CONTACT US",
          link: "https://"
        },
        ].map((link) => link.link === "dropdown" ? (<NavDropdown name={link.name} options={link.options}/>) : (
          <a href={link.link} className="font-[Passion_One]">{link.name}</a>
        ))
      }
    </div>
  );
}
