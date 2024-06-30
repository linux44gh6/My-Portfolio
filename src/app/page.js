import Image from "next/image";
import NavBarPage from "./components/NavBar/page";
import BannerPage from "./components/Banner/page";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-gradient-to-r from-color2  to-color1">
     <NavBarPage></NavBarPage>
     <BannerPage></BannerPage>
    </main>
  );
}
