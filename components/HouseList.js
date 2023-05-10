"use client"; 
import { useState,useEffect } from 'react';
import HouseRow from './HouseRow';
// const housesArray = [
//     {
//         id: 1,
//         town: "Prague 5",
//         city: "Prague",
//         country: "Czechia",
//         price: 12990,
//     },
//     {
        
//             id: 2,
//             town: "Villa",
//             city: "Vienna",
//             country: "Austria",
//             price: 18000,
//         },
//         {
        
//             id: 3,
//             town: "West Minster",
//             city: "London",
//             country: "UK",
//             price: 58888,
//         },
// ];

const HouseList = () => {
    const [houses, setHouses] = useState([]);
    
    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch(`/api/houses`);
            // const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        };

        fetchHouses();
    });
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 8,
                town: "Ukaechi Estate",
                city: "Awka",
                country: "Nigeria",
                price: 7990,
            },
        ]);
    };
    return (
        
            <>
            <div className="row mb-2">
                <h4 className="themeFontColor text-center">
                    Available Houses
                </h4>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Town</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(x => <HouseRow key={x.id} house={x} />)}

                    {/* <tr key={x.id}>
                            <td>{x.town}</td>
                            <td>{x.city}</td>
                            <td>{x.country}</td>
                            <td>{x.price}</td>
                        </tr> */}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add a House
            </button>
            </>
    );
};

export default HouseList;