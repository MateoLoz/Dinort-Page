import { motion } from "motion/react";
import Link from "next/link";

type ContactButtonProps = {
  children: string;
  lang:string;

};

const NavBarButton = ({ children,lang }: ContactButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="font-s p-[8px] md:p-[12px] rounded-[40px] bg-btn-secondary"
    >
      <Link href={`${lang}/contact`}>
      {children}
      </Link>
    </motion.button>
  );
};

export default NavBarButton;
