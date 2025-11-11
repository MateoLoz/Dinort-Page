import { LightArrow } from "@/icons/LightArrow";
import { JoinUsForm } from "../Form/JoinUsForm";

type JoinUsProps = {
    title:string,
    description:string,
    btntitle:string
}

const JoinUs = ({ title, description, btntitle } : JoinUsProps) => {
    return(
        <div className="w-full md:pt-12 pb-36 pt-6 flex flex-col items-center justify-center gap-4">
         <h2 className="font-main font-medium uppercase lg:text-[50px] md:text-[40px] text-[25px]">{title}</h2>
         <span className="font-main font-light text-gray-3">{description}</span>
         <JoinUsForm>
         <button className="bg-contact text-white p-4 rounded-3xl flex flex-row gap-2 hover:scale-[1.02] transition hover:bg-card-3">
            {btntitle}
            <LightArrow width={22} height={22}/>
            </button>
         </JoinUsForm>
        
        </div>
    )
}

export default JoinUs;