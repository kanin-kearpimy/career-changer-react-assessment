import React from "react";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div id="layout">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout