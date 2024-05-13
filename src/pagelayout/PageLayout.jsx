import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
// import {NodesData} from "../components/nodesData/NodesData"
// import {SavedWorkflows} from "../components/savedWorkflows/SavedWorkflows"
import Styles from "./PageLayout.module.css";

export const PageLayout = ({active, setActive}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", height: "93%" }}>
        <div className={`m-0 p-0 ${Styles.sidebarContainer}`}>
          <Sidebar active={active} setActive={setActive}/>
        </div>
        <div className={active === 1 ? `${Styles.fullWidth} m-0 p-0` : `${Styles.flowComponent} m-0 p-0` }>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

