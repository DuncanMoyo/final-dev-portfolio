import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  ProjectCard,
  ContactMe,
} from "./components";

export default function Home() {
  return (
    <main className="my-0 mx-auto py-0 px-5 md:px-36 h-full">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ProjectCard />
      <ContactMe
        message={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        }}
      />
    </main>
  );
}
