import { LightArrow } from "@/icons/LightArrow";
import Link from "next/link";

type FooterNavegationProps = {
  title: string;
  navegation_section: {
    clients: string;
    products: string;
    companys: string;
    about_us: string;
  };
};

export const FooterNavegation = ({
  title,
  navegation_section,
}: FooterNavegationProps) => {
  return (
    <aside className="flex flex-col gap-2 text-center md:text-start">
      <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
        {title}
      </h2>
      <ul className="flex flex-col gap-1">
        <li className="text-gray-2 transition-colors hover:text-white ease font-main font-light text-[12px] md:text-[14px]">
          <Link href={'#clients'}>
          {navegation_section.clients}
          </Link>
        </li>
        <li className="text-gray-2 transition-colors hover:text-white ease font-main font-light text-[12px] md:text-[14px]">
        <Link href={'#product'}>
        {navegation_section.products}
          </Link>
        </li>
        <li className="text-gray-2 transition-colors hover:text-white ease font-main font-light text-[12px] md:text-[14px]">
          <Link href={'#about-us'}>
          {navegation_section.about_us}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

type FooterPoliticsProps = {
  title: string;
  politics_section: {
    politics: string;
  };
};

export const FooterPolitics = ({
  title,
  politics_section,
}: FooterPoliticsProps) => {
  return (
    <aside className="flex flex-col gap-2 text-center md:text-start">
      <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
        {title}
      </h2>
      <ul className="flex flex-col gap-1">
        <li className="text-gray-2 font-main transition-colors hover:text-white ease font-normal text-[12px] md:text-[14px]">
          {politics_section.politics}
        </li>
      </ul>
    </aside>
  );
};

type FooterSocialProps = {
  title: string;
  socials_section: {
    wpp: string;
    lnk: string;
    ig: string;
  };
};

export const FooterSocial = ({ title, socials_section }: FooterSocialProps) => {
  return (
    <aside className="flex flex-col gap-2 text-center md:text-start">
      <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
        {title}
      </h2>
      <ul className="flex flex-col gap-1 md:justify-start ">
        <li className="text-gray-2 font-main transition-colors hover:text-white ease font-normal text-[12px] md:text-[14px] flex flex-row items-center gap-1">
          {socials_section.wpp}
          <LightArrow width={12} height={12} transform="rotate(-45)" />
        </li>
        <li className="text-gray-2 font-main transition-colors hover:text-white ease font-normal text-[12px] md:text-[14px] flex flex-row items-center gap-1">
          <Link className="w-full flex flex-row gap-1 items-center" target="_blank" href={'https://www.linkedin.com/company/dinort-mecanizados-s-a-s/about/'}>
          {socials_section.lnk}
          <LightArrow width={12} height={12} transform="rotate(-45)" />
          </Link>
         
        </li>
        <li className="text-gray-2 font-main transition-colors hover:text-white ease font-normal text-[12px] md:text-[14px] flex">
          <Link className="w-full flex flex-row gap-1 items-center" target="_blank" href={'https://www.instagram.com/dinort.mecanizados/'}>
          {socials_section.ig}
          <LightArrow width={12} height={12} transform="rotate(-45)" />
          </Link>
         
        </li>
      </ul>
    </aside>
  );
};
