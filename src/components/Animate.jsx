import { motion, useInView } from 'framer-motion';
import React from 'react'

const Animate = ({ children, className }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default Animate