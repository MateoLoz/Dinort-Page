import { LightArrow } from "@/icons/LightArrow";

type ContactProps = {
  title: string;
  href?: string;
  btntitle: string;
};

const ContactUs = ({ title, href, btntitle }: ContactProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:pt-12 pt-6 pb-36">
      <h2 className="inline-block overflow-hidden font-main font-medium uppercase lg:text-[70px] md:text-[45px] text-[25px] no-wrap">
        {title}
      </h2>
      <button className="bg-contact p-4 rounded-3xl flex flex-wor gap-2 items-center text-white hover:scale-[1.02] transition hover:bg-card-3">
        {btntitle}
        <LightArrow width={24} height={24} />
      </button>
    </div>
  );
};

export default ContactUs;
