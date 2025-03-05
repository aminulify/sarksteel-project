import Header from "@/Components/Header";
import AboutUs from "@/Components/About";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Appointment from "@/Components/Appointment";
import ExperienceWith from "@/Components/ExperienceWith";
import OurServices from "@/Components/OurServices";

export default function Home() {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <WhyChooseUs/>
      <Appointment/>
      <ExperienceWith/>
      <OurServices/>
    </div>
  );
}
