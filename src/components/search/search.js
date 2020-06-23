import React, { useState, Fragment } from 'react';
import './style.css';
import App from '../../App'




export function Search() {
    const [data, setData] = useState('');
    const search = (e) => {
        setData(e.target.value)
        console.log(e.target.value);
    }


    return (
        <div>
            <div className="Navbar">

                <div>Serch your pokemon  <input
                    type="text"
                    value={data}
                    onChange={search}
                /></div>
            </div>

            <App str={data} />
        </div>




    )
};





