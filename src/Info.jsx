import React from 'react';
import { NavLink } from 'react-router-dom';
import grass from '../src/components/assets/Grassy_grass_plant.svg';
import "./info.css";

const Info = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <p>Plants are one of six big groups (kingdoms) of living things. They are autotrophic eukaryotes, which means they have complex cells, and make their own food. Usually they cannot move (not counting growth).</p>

                                <p> Plants include familiar types such as trees, herbs, bushes, grasses, vines, ferns, mosses, and green algae. The scientific study of plants, known as botany, has identified about 350,000 extant (living) species of plants. Fungi and non-green algae are not classified as plants.</p>

                                <p>Most plants grow in the ground, with stems in the air and roots below the surface. Some float on water. The root part absorbs water and some nutrients the plant needs to live and grow. These climb the stem and reach the leaves. The evaporation of water from pores in the leaves pulls water through the plant. This is called transpiration.</p>

                                <p>A plant needs sunlight, carbon dioxide, minerals and water to make food by photosynthesis. A green substance in plants called chlorophyll traps the energy from the Sun needed to make food. Chlorophyll is mostly found in leaves, inside plastids, which are inside the leaf cells. The leaf can be thought of as a food factory. Leaves of plants vary in shape and size, but they are always the plant organ best suited to capture solar energy. Once the food is made in the leaf, it is transported to the other parts of the plant such as stems and roots.</p>


                                <p>The word "plant" can also mean the action of putting something in the ground. For example, farmers plant seeds in the field.</p>
                                

                                <p>Photosynthesis is a process that is taken place by the leaves on the plant. The leaves are the only parts of a plant that can do this process (as they adapted). This is also known as how the plant gets its food.You can make the process quicker by adding more CO2, light and chlorophyll.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={grass} className="img-fluid-animation" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;