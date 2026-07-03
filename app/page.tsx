import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import Projects from "@/components/projects/Projects";
import Services from "@/components/Services/Services";
import Container from "@/components/ui/Container";

function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <Info />
        <Services />
        <Projects />
      </Container>
    </>
  );
}

export default HomePage;
