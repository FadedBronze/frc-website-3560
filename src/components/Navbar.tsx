export default function Navbar() {
  return (
    <div class="flex gap-4">
      {
        [{
          name: "SUBTITLES",
          link: "https://"
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
          link: "https://"
        },{
          name: "ABOUT US",
          link: "https://"
        },{
          name: "CONTACT US",
          link: "https://"
        },
        ].map((link) => (
          <a href={link.link}>{link.name}</a>
        ))
      }
    </div>
  );
}
