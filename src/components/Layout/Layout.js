
import React from "react";
import "./Layout.css"
 const Layout = (props) =>  {

        return(
            <div>
               <div>Toolbar, SideDrewer, Backdrop</div>
               <main className="content">{props.children}</main>
            </div>
        )

}
export default Layout