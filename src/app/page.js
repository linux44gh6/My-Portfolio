import Image from "next/image";
import NavBarPage from "./components/NavBar/page";
import BannerPage from "./components/Banner/page";
import SkilPage from "./components/skills/page";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-gradient-to-r from-color3 to-color4">
     <NavBarPage></NavBarPage>
     <BannerPage></BannerPage>
     <SkilPage></SkilPage>
    </main>
  );
}
