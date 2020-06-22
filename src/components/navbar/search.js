import React, { useState, Fragment } from 'react';
import Navbar from '../navbar/navbar'
import App from './../../App'


export function Search({ lista }) {
    const [data, setData] = useState('');
    const search = (e) => {
        setData(e.target.value)
    }
    console.log(lista);

    return (
        <div>
            <Navbar />
            <div>


                <input
                    type="text"
                    value={data}
                    onChange={search}
                />

            </div>
            <App str={data} />
        </div>
    )
};





