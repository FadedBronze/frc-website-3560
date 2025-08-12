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
        <p>
          Exciting news for students in grades 9 through 12: Registration for
          the Robotics Club is now open! Be part of an innovative and dynamic
          team where you’ll get hands-on experience with robotics and
          technology!
        </p>
        <div className="grid max-w-[900px] md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <Box title="Fee" body="$230 CAD" />
          <Box title="Deadline" body="September 30th" />
          <Box
            title="Time & Place"
            body="Room 123 during break and after school."
          />
        </div>
        <p className="mb-8">
          Don’t miss out on this opportunity to delve into the world of
          robotics, learn new skills, and collaborate with peers. Fill out the
          registration form below to secure your spot and start your journey
          with Team 3560 today!
        </p>
        <WolfButton
          title="Register"
          href="https://forms.gle/TJJUcq6VW8N8g7cE7"
        />
      </article>
      <Footer />
    </>
  );
}
