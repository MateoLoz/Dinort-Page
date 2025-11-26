import { getDictionary } from "@/app/i18n/dictionary";
import Footer from "@/components/custom/Footer/Footer";
import Sections from "@/components/custom/Sections/Section";
import ContactBanner from "@/components/custom/Banner/ContactBanner";
import { ContactUsForm } from "@/components/custom/Form/ContactUsForm";

const ContactPage = async ({params} : {params: Promise<{ lang: string}>}) => {

const {lang} = await params;
const t = await getDictionary(lang);

    return(
        <div className="w-full h-auto flex flex-col gap-2">
        <ContactBanner title={t.contactpage.banner.title} subtitle={t.contactpage.banner.subtitle}/>
        <ContactUsForm/>
        <Sections.navbar lang={t.homepage.lang} navbar={t.homepage.navbar}/>
        <Footer footer={t.homepage.footer}/>
        </div>
    )
}

export default ContactPage