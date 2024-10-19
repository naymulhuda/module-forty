import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    // 2nd step to use useState
    const [countries, setCountries] = useState([]);

    // 2nd step to use useEffect and fetch data

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data) => setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Send data to country */}
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;