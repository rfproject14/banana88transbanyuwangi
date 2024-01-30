import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  const loaderVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center h-screen"
    >
      <FaSpinner className="loader-icon animate-spin text-yellow-400 w-14 h-14" />
    </motion.div>
  );
};

export default Loader;