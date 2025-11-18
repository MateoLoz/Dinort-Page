import { Companys } from "./Slider";
import Banner from "./Banner";
import TextBanner from "../TextBanner";
import AboutUs from "./About-Us";
import Mision from "./Mision";
import Work from "../Work";
import Help from "./Help";
import Machines from "./Machines";
import MachineTagSection from "./TagSection";
import NavBar from "../NavBar/Navbar";
import ContactUs from "./ContacUs";
import JoinUs from "./JoinUs";

const Sections = {
  navbar: NavBar,
  Hero: Banner,
  banner: TextBanner,
  slider: Companys,
  work: Work,
  about: AboutUs,
  mision: Mision,
  help: Help,
  machines: Machines,
  tag: MachineTagSection,
  contact: ContactUs,
  join: JoinUs,
};

export default Sections;
