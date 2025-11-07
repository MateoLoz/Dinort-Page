import { motion } from "motion/react";

import '../app/globals.css';

const Hamburger = () => {
    return(
        <motion.div className="p-2">
           <div className="hamburger-menu">
             <input type="checkbox" />
           </div>
        </motion.div>
    )
}

export default Hamburger;