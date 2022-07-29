import React from "react";
import "./Example.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuLink from "./MenuLink";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../features/userSlice";

function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
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
            />
            <MenuLink
              name="Home"
              path="/"
              onClick={() => setSideBar((sideBar) => !sideBar)}
            />
            {!isLoggedIn && (
              <MenuLink
                name="Sign Up"
                path="/signup"
                onClick={() => setSideBar((sideBar) => !sideBar)}
              />
            )}
            {!isLoggedIn && (
              <MenuLink
                name="Log in"
                path="/signin"
                onClick={() => setSideBar((sideBar) => !sideBar)}
              />
            )}

            {isLoggedIn && (
              <MenuLink
                path="all-products"
                name="All Products"
                onClick={() => setSideBar((sideBar) => !sideBar)}
              />
            )}
            {isLoggedIn && (
              <MenuLink
                path="orders"
                name="Previous Orders"
                onClick={() => setSideBar((sideBar) => !sideBar)}
              />
            )}
            {isLoggedIn && (
              <MenuLink
                path="favorite"
                name="Favorite Products"
                onClick={() => setSideBar((sideBar) => !sideBar)}
              />
            )}
            {isLoggedIn && (
              <MenuLink
                path=""
                name="Log Out"
                onClick={() => dispatch(userActions.logout())}
              />
            )}

            <MenuLink
              name="Find a store"
              path="/findstore"
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

function Content({ sideBar, setSideBar }) {
  return (
    <motion.div
      animate={{
        scale: sideBar ? 0.8 : 1,
        opacity: sideBar ? 0.5 : 1,
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
  //const [modal, setModal] = React.useState(false);
  return (
    <div className="example">
      <Content {...{ sideBar, setSideBar }} />
      <Sidebar {...{ sideBar, setSideBar }} />
    </div>
  );
}
