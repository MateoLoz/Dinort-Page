import Banner from "@/components/custom/Banner";
import { getDictionary } from "../i18n/dictionary";
import NavBar from "@/components/custom/Navbar";
import TextBanner from "@/components/custom/TextBanner";
import Divider from "@/components/custom/Divider";

export default async function Home({params}: {params: { lang: "es" | "en" | "br"}}) {

  const { lang } = params;
  const t =  (await getDictionary(lang)).homepage;
 
  return (
    <div className="p-m sm:p-xs">
        <Banner bannerSmall={t.navbar.bannerSmall}/>
      <NavBar navbar={t.navbar}/>
      <TextBanner title={t.section.title}/>
      <Divider title={t.dividers.companys} alignment={"start"}/>
    </div>
  );
}
