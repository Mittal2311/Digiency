import React from "react";
import DeskHeader from "../component/DeskHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskFooter from "../component/DeskFooter";
import DeskBanner from "../component/DeskBanner";


const Desktop = () =>{
    return(
        <>
            {/* Header section start  */}
            <DeskHeader />
            {/* Header section end  */}

             {/* Banner section start  */}
             <DeskBanner />
            {/* Banner section end  */}

            

            {/* Footeer section satrt  */}
                <DeskFooter/>
            {/* Footeer section end  */}

           
        </>
    )

}
export default Desktop;