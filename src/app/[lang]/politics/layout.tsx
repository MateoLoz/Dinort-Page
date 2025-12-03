import PoliticsPage from "./page"

type layoutProps = {
    params: Promise<{lang: string}>
  }
  
 async function PoliticsLayout({params} : layoutProps) {
    return(
        <div className="p-0 w-full h-auto">
          <PoliticsPage params={params} />
        </div>
    )
}

export default PoliticsLayout