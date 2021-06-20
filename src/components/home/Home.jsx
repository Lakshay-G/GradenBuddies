import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../assets/plant1.jpeg';
import plant from '../assets/plant2.jpeg';
import plant2 from '../assets/plant3.jpeg';
import plant4 from '../assets/plant4.jpeg';
import plant5 from '../assets/plant5.jpeg';
import plant6 from '../assets/plant6.jpeg';
import plant7 from '../assets/plant7.jpeg';
import plant8 from '../assets/plant8.jpeg';
import "./Home.css";

const Home = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row pt-4 me">
                            <div class="card" >
                                <img src={web} class="card-img-top" alt="main" />
                                <div class="card-body">
                                    <h5 class="card-title">Abelia</h5>
                                    <p class="card-text">Plant during milder months of spring or fall to avoid heat or cold stress.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={plant} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Abutilon</h5>
                                    <p class="card-text">Soil must be constantly moist. Use warm water. In the winter, watering is limited.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={plant2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Agave</h5>
                                    <p class="card-text">Summer is rare, in winter – limited to a minimum</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>
                            <div class="card" >
                                <img src={plant4} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Browallia</h5>
                                    <p class="card-text">	Frequent, in the summer in the flowering period every 3 days. In winter it is moderate.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                        Info
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-4 me">
                            <div class="card" >
                                <img src={plant5} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Camellia</h5>
                                    <p class="card-text">From spring to autumn every two weeks with liquid fertilizer without lime. You can use fertilizer for orchids. Organic fertilizers are useful.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={plant6} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Colocasia</h5>
                                    <p class="card-text">Slightly acidic light fertile soil. Equal parts of sand, humus, peat and turf. Required drainage.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={plant7} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Eupatorium</h5>
                                    <p class="card-text">During the growing season every 10-15 days with liquid fertilizer. Every 3 weeks it is useful to use organic fertilizer. Fertile soil is required.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={plant8} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Hippeastrum</h5>
                                    <p class="card-text">Fed with liquid fertilizer every 3-4 weeks with the appearance of flower arrows. Top dressing is stopped in autumn with yellowing of the leaves.</p>
                                    <NavLink to="/Timeline" className="btn btn-dark" role="button">
                                    Timeline
                                    </NavLink>
                                    <NavLink to="/Info" className="btn btn-light mx-2" role="button">
                                    Info
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;