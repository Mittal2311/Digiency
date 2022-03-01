import React, { useState } from 'react';
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
import capa from "../../json/capa.json"
const Capabilities = () => {
    const [capaData] = useState(capa);
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                        <p className='about_title'>Our Capabilities <img src="Line 67.png" className='line' /></p>
                        <p className='about_head'>Forward Thinking Team Of Designers & Developers</p>
                        <p className='about_discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>

                        <Row>
                            {
                                capaData.map((item) => (
                                    <>
                                        <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                                            <div className='col_div'>
                                                <h6>{item.per}</h6>
                                                <p>{item.title}</p>
                                            </div>

                                        </Col>
                                    </>))
                            }
                            {/* <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                                <div className='col_div'>
                                    <h6>80%</h6>
                                    <p>Softwer Development</p>
                                </div>

                            </Col>
                            <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                                <div className='col_div'>
                                    <h6>90%</h6>
                                    <p>Graphic Design</p>
                                </div>

                            </Col>
                            <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                                <div className='col_div'>
                                    <h6>85%</h6>
                                    <p>Game Deisgn</p>
                                </div>

                            </Col>
                            <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                                <div className='col_div'>
                                    <h6>100%</h6>
                                    <p>Web Development</p>
                                </div>

                            </Col> */}

                        </Row>

                    </Col>
                    <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <img src="pana.png" className="frame_20"></img></Col>
                </Row>
                <div className='capa_bottom'>
                    <Row>

                        <Col className="capabotoom_col" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <div>
                                <img src="man.png" />
                                <h4>120</h4>
                                <p>Top Experts</p>
                            </div>
                        </Col>
                        <Col className="capabotoom_col" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <div>
                                <img src="target.png" />
                                <h4>500</h4>
                                <p>Strategies</p>
                            </div>
                        </Col>
                        <Col className="capabotoom_col" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div>
                                <img src="analysis.png" />
                                <h4>347</h4>
                                <p>Great Results</p>
                            </div>
                        </Col>
                        <Col className="capabotoom_col" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <div>
                                <img src="data-analytics.png" />
                                <h4>120</h4>
                                <p>Hight Rankings</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Capabilities;

