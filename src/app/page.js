import Banar from "@/component/home/Banar";
import CardSection from "@/component/home/CardSection";
import FeaturesSection from "@/component/home/FeaturesSection";
import MarqueeView from "@/component/home/MarqueeView";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banar/>
      <MarqueeView/>
      <CardSection/>
      <FeaturesSection/>
    
    </div>
  );
}
