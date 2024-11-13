import Section1 from "@/components/Section1";
import Image from "next/image";
import Navber from '@/app/Navber';
import Footer from "./Footer";

export default function Home() {
  return (
   <div>
     <Navber />
     <Section1 />
     <Footer />
   </div>
  );
}
