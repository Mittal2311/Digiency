/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
    Container, Row
} from "react-bootstrap";
import Card from './Card';
import servicesCard from "../../json/servicesCard.json"
const Services = () => {
    const [serviceData] = useState(servicesCard);
    return (
        <>
            <Container className='servic_contain'>
                <div className='Services_header'>
                    <p className='servic_headerone'><img src="Line 67.png"/>  Our Services  <img src="Line 67.png" /></p>
                    <p className='servic_headertwo'>What We Do</p>
                </div>       
                <Row>
                    {
                        serviceData.map((item) => (<Card data={item} />))
                    }
                </Row>
                </Container>

        </>
    );
}

export default Services;