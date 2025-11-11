"use client";

import { motion } from "framer-motion";

type ContactButtonProps = {
  children: string;
};

const ContactButton = ({ children }: ContactButtonProps) => {
  return (
    <motion.div className="inline-bock overflow-hidden">
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-btn-primary p-2 rounded-xl font-main font-medium text-md"
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

export default ContactButton;
