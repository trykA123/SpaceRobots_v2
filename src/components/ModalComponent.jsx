import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex min-h-screen items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="absolute inset-0 bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </motion.div>
            <motion.div
              className="relative rounded-lg bg-background-color-2 p-8 shadow-xl lg:max-w-[1024px]"
              initial={{ opacity: 0, scale: 0.8, y: 500 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 500 }}
              key="modal"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
