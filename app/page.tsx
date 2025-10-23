import About from "@/src/components/About";
import Resume from "@/src/components/Resume";

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <Resume />
        <About />
      </section>
    </>
  );
}
