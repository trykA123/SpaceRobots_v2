import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="container fixed left-0 right-0 top-8 z-50 mx-auto flex w-full transition-all duration-300 ease-in-out lg:hidden">
      <div
        ref={menuRef}
        className="relative mx-auto w-full rounded-2xl bg-background-color shadow-lg"
      >
        <div className="flex h-10 items-center justify-end p-3 px-4">
          <button onClick={toggleDropdown} className="flex flex-col gap-1">
            <div className="h-[2px] w-4 bg-white"></div>
            <div className="h-[2px] w-4 bg-white"></div>
            <div className="h-[2px] w-4 bg-white"></div>
          </button>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-rows-5 gap-4 p-4">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center justify-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#about"
                  onClick={handleLinkClick}
                >
                  About
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center justify-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#collections"
                  onClick={handleLinkClick}
                >
                  Collections
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center justify-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#stories"
                  onClick={handleLinkClick}
                >
                  Stories
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center justify-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#roadmap"
                  onClick={handleLinkClick}
                >
                  Roadmap
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group col-span-1 row-span-1 flex h-16 w-full flex-col items-center justify-center rounded-xl bg-background-color-2 px-8 py-4 font-chakraPetch text-xl uppercase shadow-md"
                  href="#team"
                  onClick={handleLinkClick}
                >
                  Team
                  <span className="h-[1px] w-0 self-start bg-accent-color duration-300 group-hover:w-full"></span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileMenu;
