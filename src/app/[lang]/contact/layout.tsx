import ContactPage from "./page";

type layoutProps = {
    params: Promise<{lang: string}>
  }
  
 async function contactLayout({params} : layoutProps) {
    return(
        <div className="p-0 w-full h-auto">
          <ContactPage params={params}/>
        </div>
    )
}

export default contactLayout