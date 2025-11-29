type FooterBottomProps = {
  title : string
}

export const FooterBottom = ({title} : FooterBottomProps) => {

  const date = new Date().getFullYear();

  return (
    <aside className=" mt-4 h-auto flex md:flex-row flex-col gap-2 items-center sm:justify-between justify-center">
      <small className="text-gray-1 text-start font-main font-normal text-[10px] md:text-[14px]">
       { `@${date} ${title}`}
      </small>
    </aside>
  );
};
