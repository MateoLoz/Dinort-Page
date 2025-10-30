"use client"

import '../../app/globals.css';

type WorkProps = {
    title: string
}

export default function Work ({title} : WorkProps) {
    return(
        <div className="w-full  flex flex-col gap-2 pt-12">
         <header className='h-24 flex items-center'>
            <h2 className="text-5xl font-s font-normal">{title}</h2>
         </header>
         <aside className="work-layout">
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-1'}}>1</div>
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-2'}}>2</div>
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-3'}}>3</div>
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-4'}}>4</div>
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-5'}}>5</div>
           <div className='bg-blue-200 rounded-lg' style={{gridArea:'box-6'}}>6</div>
         </aside>
        </div>
    )
}