import { getDictionary } from "../i18n/dictionary";

import Divider from "@/components/custom/Divider/Divider";
import Footer from "@/components/custom/Footer/Footer";
import Sections from "@/components/custom/Sections/Section";

export default async function Home({params}: {params: Promise<{ lang: string}>}) {

  const {lang} = await params;
  const t = await (await getDictionary(lang)).homepage;
 
  return (
    <div className="p-m sm:p-xs flex flex-col gap-4 ">
      <Sections.Hero bannerSmall={t.navbar.bannerSmall}/>
      <Sections.navbar navbar={t.navbar}/>
       <Sections.banner title={t.section.title} subtitle={t.section.subtitle}/>
      <Divider.right title={t.dividers.companys} alignment={"start"}/>
      <Sections.slider/>
      <Sections.work title={t.dividers.works}/>
      <Sections.about languague={lang} aboutus={t.dividers["about-us"]} whatwedo={t.dividers["whatwedo"]} we={t.dividers["we"]}/>
      <Sections.mision lang={lang} misionheader={t.dividers["mision"]}/>
      <Sections.help title={t.dividers["help"]} accordion={t.accordion}/>
      <Sections.machines machineTitle={t.dividers["machines"]} lang={lang}/>
       <Divider.primary title={t.dividers["other-machines"]} alignment={"start"}/>
       <Sections.tag lang={lang}/>
       <Footer footer={t.footer} />
    </div>
  );
}
