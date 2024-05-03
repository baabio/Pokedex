import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Liste = () => {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios.get('https://pokebuildapi.fr/api/v1/types').then(response => {
            console.log(response.data)
            setTypes(response.data)
        })
    }, [])
    return (
        <>
        <div>
            {types.map((type, index) => (
                <button className='babac' key={index}>{type.name}</button>
            ))}
        </div>
        <br />
        </>
    )
}

export default Liste