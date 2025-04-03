import Features from "@/components/Home/Features";
import HeroSection from "../components/Home/HeroSection";
import LastQuote from "@/components/Home/LastQuote";
import ThreeDynamics from "@/components/Home/ThreeDynamics";
import GridRows from "@/components/Home/GridRows";


export default function Home() {

  const curBgColor = "bg-white";

  // console.log(curBgColor)

  return (
    <div className={`${curBgColor} `}>
      <HeroSection curBgColor={curBgColor} />
      <Features curBgColor={curBgColor} />
      <ThreeDynamics curBgColor={curBgColor} />
      <GridRows />
      <LastQuote curBgColor={curBgColor} />
    </div>
  );
}
