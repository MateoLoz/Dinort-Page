const Footer = () => {
    return(
        <footer className="w-full h-auto bg-footer md:px-8 px-4 py-4 flex flex-col gap-2">
           <aside className="h-[85%] flex flex-row  justify-between gap-[15px]">
              <section className="flex flex-col gap-2">
                <h2 className="lg:text-[26px] text-[22px] text-white font-main font-medium">Dinort Mecanizados S.A.S</h2>
                <span className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1">San Miguel de Tucuman, Tucuman -- Argentina</span>
                <span className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1">mecanizados@dinort.com.ar</span>
              </section>
              <section className="flex flex-row gap-12">
                <aside className="flex flex-col gap-2">
                  
                <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
                    Navegar
                </h2>
                <ul className="flex flex-col gap-1">
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">clientes</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Productos</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Empresas</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Sobre nosotros</li>
                </ul>

                </aside>

                <aside className="flex flex-col gap-2">
                  
                <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
                    Politicas
                </h2>
                <ul className="flex flex-col gap-1">
                    <li className="text-gray-2 font-main font-light font-normal text-[14px]">Clientes</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[14px]">Productos</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[14px]">Empresas</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[14px]">Sobre nosotros</li>
                </ul>

                </aside>

                <aside className="flex flex-col gap-2">
                  
                <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
                    Social
                </h2>
                <ul className="flex flex-col gap-1">
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">clientes</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Productos</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Empresas</li>
                    <li className="text-gray-2 font-main font-light font-normal text-[12px]">Sobre nosotros</li>
                </ul>

                </aside>
        
              </section>
           </aside>
           <aside className=" mt-4 h-auto flex flex-row items-center justify-between">
              <small className="text-gray-1 text-start font-main font-normal text-[10px] md:text-[14px]">@2025  Dinort Mecanizados. Todos los derechos reservados.</small>
              <span className="text-gray-1 font-main font-normal text-[10px] md:text-[14px]">Volver al principio</span>
           </aside>
        </footer>
    )
}

export default Footer;