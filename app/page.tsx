import Image from "next/image";
import "./globals.css";
import Header from "./components/header";
import Header2 from "./components/Header2";
import Banner from "./components/Banner";
import CategoryBanner from "./components/CategoryBanner";
import LevelBanner from "./components/LevelBanner";
import CollectionBanner from "./components/CollectionBanner";
import SimpleProductBanner from "./components/SimpleProductBanner";
import Footer from "./components/Footer";

export default function Home() {

  console.log("hoovering in index");
  return (
    <div className="flex flex-col md:overflow-hidden max-sm:overflow-hidden">
      <Header />
      <Header2 />
      <Banner />
      <CategoryBanner />
      <LevelBanner />
      <CollectionBanner />
      <SimpleProductBanner />
      <Footer />
    </div>
  );
}
