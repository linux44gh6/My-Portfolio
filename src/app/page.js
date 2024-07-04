import Image from "next/image";
import NavBarPage from "./components/NavBar/page";
import BannerPage from "./components/Banner/page";
import SkilPage from "./components/skills/page";
import ProjectPage from "./components/projects/page";
import ResumePage from "./components/resume/page";
import ContactPage from "./components/Contact/page";
import FooterPage from "./components/Footer/page";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-gradient-to-r from-color3 to-color4">
     <NavBarPage></NavBarPage>
     <BannerPage></BannerPage>
     <SkilPage></SkilPage>
     <ProjectPage></ProjectPage>
     <ResumePage></ResumePage>
     <ContactPage></ContactPage>
     <FooterPage></FooterPage>
    </main>
  );
}
