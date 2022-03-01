/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
    Navbar, Container, Row, NavbarBrand, Nav, Button
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import CaseCard from './caseCard';
import "../../js/custome";
import caseStudydata from "../../json/caseStudydata.json"
const CaseStudy = () => {
    const [caseData, setCaseData] = useState(caseStudydata);
    const [isActive, setIsActive] = useState(true);
    const [extra, setExtra] = useState(0);

    const filterItem = (cateItem) => {
        const updatedItem = caseStudydata.filter((curElem) => {
            return curElem.cardType === cateItem;
        });
        setCaseData(updatedItem);
    }
    return (
        <div>
            <Container>
                <div className='casestudy_title'>
                    <p><img src="Line 67.png" /> Our Case Study <img src="Line 67.png" /></p>
                    <h2>Our Recent Project</h2>
                </div>
                <Navbar>

                        <Nav className='casestudy_header' Nav variant="pills" defaultActiveKey="#home">
                            
                                <Nav.Link href="#home" onClick={() => { setCaseData(caseStudydata) }}>All</Nav.Link>
                                <Nav.Link href="#UX_Design" onClick={() => { filterItem("ux_design") }}>UX Design</Nav.Link>
                                <Nav.Link href="#Web_Design" onClick={() => filterItem("Web_Design")}>Web Design</Nav.Link>
                                <Nav.Link href="#App_Development" onClick={() => filterItem("App_Development")}>App Development</Nav.Link>
                                <Nav.Link href="#Game_Design" onClick={() => filterItem("Game_Design")}>Game Design</Nav.Link>
                                <Nav.Link href="#Graphic_Design" onClick={() => filterItem("Graphic_Design")}>Graphic Design</Nav.Link>
                         
                        </Nav>


            
                </Navbar>


                <Row className="row no-gutter">
                    {
                        caseData.map((item) => (<CaseCard data={item} />))
                    }
                </Row>



            </Container>
        </div>
    );
}

export default CaseStudy;