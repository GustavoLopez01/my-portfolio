import useChangeTab from "../hooks/useChangeTab"
import NavigationButton from "./NavigationButton";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

export default function RenderTab() {
  return (
    <>
      <section className="h-[92vh] bg-gray-50/10 overflow-auto flex flex-col items-center justify-center font-montserrat">
        <div className="w-full h-full relative">
          <NavigationButton />
          <CurrentTab />
        </div>
      </section>
      <Footer />
    </>
  )
}

const CurrentTab = () => {
  const {
    currentSection
  } = useChangeTab();

  switch (currentSection.value) {
    case "presentation":
      return <Resume />
    case "about":
      return <About />
    case "projects":
      return <Projects />
    default:
      return <></>
  }
}
