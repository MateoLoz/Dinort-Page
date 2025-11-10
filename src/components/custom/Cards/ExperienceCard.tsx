
type ExperienceCardProps = {
    client : string,
    description: string
}

export const ExperienceCard = ({client, description} : ExperienceCardProps) => {
    return(
        <article className='bg-card md:h-50 sm:h-40 h-32 md:w-80 sm:w-50 w-44 rounded-md flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-background md:text-[50px] text-[40px] font-main font-normal'>{client}+</h2>
        <span className='text-background md:text-[16px] text-[12px]'>{description}</span>
    </article>

    )
}