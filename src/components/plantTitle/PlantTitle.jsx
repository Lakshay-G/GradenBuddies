import React from 'react';
import Axios from 'axios';

export default function PlantTitle({plantName}) {
    const getPlantName = Axios
        .get('https://api.gbif.org/v1/dataset/search?q=plant&amp;publishingCountry=AR')
        .then((nameOfPlant) => {
        console.log(nameOfPlant.data)
    })

    return(
        <>
            <h3>{getPlantName}</h3>
        </>
    )
}