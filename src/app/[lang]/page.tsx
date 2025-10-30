import { getDictionary } from "../i18n/dictionary";
import Banner from "@/components/custom/Banner";
import NavBar from "@/components/custom/Navbar";
import TextBanner from "@/components/custom/TextBanner";
import Divider from "@/components/custom/Divider";
import Work from "@/components/custom/Work";
import { Companys } from "@/components/custom/Slider";

export default async function Home({params}: {params: Promise<{ lang: string}>}) {

  const {lang} = await params;
  const t = await (await getDictionary(lang)).homepage;
 
  return (
    <div className="p-m sm:p-xs flex flex-col gap-4">
      <Banner bannerSmall={t.navbar.bannerSmall}/>
      <NavBar navbar={t.navbar}/>
      <TextBanner title={t.section.title} subtitle={t.section.subtitle}/>
      <Divider title={t.dividers.companys} alignment={"start"} rightArrow={true}/>
      <Companys/>
      <Work title={t.dividers.works}/>
    </div>
  );
}
