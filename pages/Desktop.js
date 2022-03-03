import React from "react";
import DeskHeader from "../component/DeskHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import DeskFooter from "../component/DeskFooter";
import DeskBanner from "../component/DeskBanner";
import DeskOurservice from "../component/DeskOurservice";
import DeskAbout from "../component/DeskAbout";
import DeskCasestudy from "../component/DeskCasestudy";

const Desktop = () =>{
    return(
        <>
            {/* Header section start  */}
            <DeskHeader />
            {/* Header section end  */}

             {/* Banner section start  */}
             <DeskBanner />
            {/* Banner section end  */}

            {/* Service section start  */}
                <DeskOurservice/>
             {/* Service section end  */}

            {/* About section start  */}
             <DeskAbout/>
             {/* About section end  */}
             
               {/* Casestudy section start  */}
               <DeskCasestudy/>
             {/* Casestudy section end  */}

            {/* Footeer section satrt  */}
                <DeskFooter/>
            {/* Footeer section end  */}

           
        </>
    )

}
export default Desktop;