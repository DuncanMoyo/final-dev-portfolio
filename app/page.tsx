import { Navbar, Hero, About } from "./components";

export default function Home() {
  return (
    <main className="my-0 mx-auto py-0 px-36 h-full" >
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}