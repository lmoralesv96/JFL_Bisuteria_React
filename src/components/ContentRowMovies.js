import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    const [information, setInformation] = useState([]);

    useEffect(() => {

            const endPoints = ['/api/users','/api/products', '/api/products/categories']

            const fetching = async() => {

                const results = await Promise.all(endPoints.map(async endPoints => {
                    const resp = await fetch(endPoints);
                    return resp.json();
                  }));
                  setInformation(results);
            }

            fetching();


	},[])


    return (
    
        <div className="row">
            
            {information.map( (element, i) => {

                return <SmallCard {...element} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;