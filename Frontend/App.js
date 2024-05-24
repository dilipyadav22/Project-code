import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import "./style.css"
import Nav from"./src/Nav";
import Body from "./src/Body";
const AppLayout =()=>{
    return(
        <div className="applayout" >
            <Header/>
            <Nav/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)