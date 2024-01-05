import React from "react";
import { motion, useScroll } from "framer-motion";
import "./scroll.css";
import Search from "./Search";
import Logo from "./Logo";
import Container from "../Container";
import Avatar from "./Avatar";
const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className=" progress-bar   "
      />

      <div className=" fixed w-full z-10 shadow-sm  ">
        <div className="py-4  border-b-[1px]">
          <Container>
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <Avatar />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
