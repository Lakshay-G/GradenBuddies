import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css";
import PlantTitle from "../plantTitle/PlantTitle";

const Home = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row pt-4 me">
                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                    <PlantTitle />
                                </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>

                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>

                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>
                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>
                      </div>

                      <div className="row pt-4 me">
                      <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>

                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>

                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
                                </NavLink>
                            </div>
                        </div>

                        <div class="card" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                    Read
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