import React from "react";
import "./Example.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuLink from "./MenuLink";

function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="sidebar"
          >
            <CloseIcon
              onClick={() => setSideBar((sideBar) => !sideBar)}
              className="sidebar__button"
            >
              &times;
            </CloseIcon>
            <MenuLink
              name="Home"
              path="/"
              onClick={() => setSideBar((sideBar) => !sideBar)}
            />
            <MenuLink
              name="Menus"
              path="/home"
              onClick={() => setSideBar((sideBar) => !sideBar)}
            />
            <MenuLink
              name="Gallery"
              path="/home"
              onClick={() => setSideBar((sideBar) => !sideBar)}
            />
            <MenuLink
              name="Contact"
              path="/home"
              onClick={() => setSideBar((sideBar) => !sideBar)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className="sidebar__data"
          />
        </>
      )}
    </AnimatePresence>
  );
}

function Content({ sideBar, setSideBar, modal }) {
  return (
    <motion.div
      animate={{
        scale: sideBar || modal ? 0.8 : 1,
        opacity: sideBar || modal ? 0.5 : 1,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <div className="content">
        <MenuIcon onClick={() => setSideBar((sideBar) => !sideBar)}></MenuIcon>
      </div>
    </motion.div>
  );
}

export default function Example() {
  const [sideBar, setSideBar] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  return (
    <div className="example">
      <Content {...{ sideBar, setSideBar, modal, setModal }} />
      <Sidebar {...{ sideBar, setSideBar }} />
    </div>
  );
}
