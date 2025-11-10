
type AboutProps = {
    paragraph:string,
}

export const AboutParagraph = ({paragraph} : AboutProps) => {
    return(
        <p className='text-background font-main font-normal lg:text-[25px] md:text-[20px] text-[14px] lg:leading-14 text-md md:leading-7 leading-6'>
        {paragraph}
       </p>
    )
}