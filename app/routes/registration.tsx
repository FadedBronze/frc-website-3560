import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";

export default function Registration() {
  return (
    <>
      <Navbar/>
      <article className="px-[45px] lg:px-[145px] pt-20 -mb-16">
        <h1 className="font-[Passion_One] text-3xl mb-3">REGISTRATION</h1>
        <p>Exciting news for students in grades 9 through 12: Registration for the Robotics Club is now open! Be part of an innovative and dynamic team where you’ll get hands-on experience with robotics and technology!</p>
        <div className="grid max-w-[900px] md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <Box title="Fee" body="$30 CAD" />
          <Box title="Deadline" body="September 30th" />
          <Box title="Time & Place" body="Room 123 during break and Room 123 after school." />
        </div>
        <p>Don’t miss out on this opportunity to delve into the world of robotics, learn new skills, and collaborate with peers. Fill out the registration form below to secure your spot and start your journey with Team 3560 today!</p>
        <button className="mt-10 rounded-sm px-6 text-2xl py-4 bg-wolf-blue font-[Passion_One] text-wolf-black hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          Register
        </button>
      </article>
      <Footer />
    </>
  )
}
