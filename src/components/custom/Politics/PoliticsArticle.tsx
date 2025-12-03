type PoliticsProps = {
title: string,
paragraph: string,
}

export const PoliticsArticle = ({...props} : PoliticsProps) => {
    return (
        <article className="flex flex-col gap-2 sm:py-4 sm:px-16 py-2 px-4 ">
        <h3 className="md:text-lg text-xl font-main font-medium">{props.title}</h3>
            <p style={{whiteSpace: "pre-line"}} className="text-md md:text-lg font-main font-light w-full">
            {props.paragraph}
            </p>
            </article>
    )
}