import {
  Navbar,
  Hero,
  About,
  Work,
  Experience,
  ProjectCard,
  ContactMe,
} from "./components";

export default function Home() {
  return (
    <main className="my-0 mx-auto py-0 px-36 h-full">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
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
