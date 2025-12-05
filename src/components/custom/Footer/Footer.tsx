import { FooterSection } from "./sections/FooterSection";

type FooterProps = {
  lang: string,
  footer: {
    headers: {
      brand: string;
      navegation: string;
      politics: string;
      socials: string;
    };
    brand_section: {
      location: string;
      email: string;
    };
    navegation_section: {
      clients: string;
      products: string;
      companys: string;
      about_us: string;
    };
    politics_section: {
      politics: string;
    };
    socials_section: {
      wpp: string;
      lnk: string;
      ig: string;
    };
    rights_section: {
      rights: string;
    };
  };
};

const Footer = ({ lang, footer }: FooterProps) => {
  return (
    <footer className="w-full rounded-md h-auto bg-footer md:px-8 px-4 py-4 flex flex-col gap-2">
      <aside className="overflow-hidden h-auto md:min-h-[45vh] pb-6 flex md:flex-row flex-col justify-between gap-[15px] ">
        <FooterSection.header
          brand={footer.headers.brand}
          location={footer.brand_section.location}
          email={footer.brand_section.email}
        />
        <section className="flex flex-row gap-4 sm:gap-8 md:gap-12 pt-6 md:pt-0">
          <FooterSection.navegation
           lang={lang}
            title={footer.headers.navegation}
            navegation_section={footer.navegation_section}
          />
          <FooterSection.politics
            lang={lang}
            title={footer.headers.politics}
            politics_section={footer.politics_section}
          />
          <FooterSection.social
            title={footer.headers.socials}
            socials_section={footer.socials_section}
          />
        </section>
      </aside>
      <FooterSection.bottom title={footer.rights_section.rights}/>
    </footer>
  );
};

export default Footer;
