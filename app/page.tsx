import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Proof from "@/components/Proof";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Proof />
        <Stack />
        <Journey />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
