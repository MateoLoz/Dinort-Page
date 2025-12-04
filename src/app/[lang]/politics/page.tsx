import { getDictionary } from "@/app/i18n/dictionary";

import Footer from "@/components/custom/Footer/Footer";
import NavBar from "@/components/custom/NavBar/Navbar";
import { PoliticsArticle } from "@/components/custom/Politics/PoliticsArticle";

const PoliticsPage = async ({params} : {params: Promise<{ lang: string}>}) => {

const {lang} = await params;
const t = await getDictionary(lang);

    return (
       <div className="w-full flex flex-col gap-4 justify-center items-center">
        <header className="md:bg-banner-2 w-full h-20 flex jsutify-center items-center">
        <NavBar navbar={t.homepage.navbar} lang={lang}/>
        </header>
        <h2 className="pt-0 md:pt-8 md:text-4xl font-main font-semibold text-3xl self-center">
        {t.politicspage.pagetitle}
        </h2>
        <aside className="py-8 px-8 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-4">
        
             <PoliticsArticle title={t.politicspage.provider.title} paragraph={t.politicspage.provider.paragraph}/>
             <PoliticsArticle title={t.politicspage.goal.title} paragraph={t.politicspage.goal.paragraph}/>
             <PoliticsArticle title={t.politicspage.users.title} paragraph={t.politicspage.users.paragraph}/>
             <PoliticsArticle title={t.politicspage.rules.title} paragraph={t.politicspage.rules.paragraph}/>
             <PoliticsArticle title={t.politicspage.property.title} paragraph={t.politicspage.property.paragraph}/>
             <PoliticsArticle title={t.politicspage.accounts.title} paragraph={t.politicspage.accounts.paragraph}/>

        </aside>
           <Footer lang={lang} footer={t.homepage.footer}/>
       </div>
    )
}

export default PoliticsPage;