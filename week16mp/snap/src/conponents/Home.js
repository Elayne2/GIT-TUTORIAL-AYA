import React from 'react';
import Images from "./components/Images";
import Home from "./components/Home";
import Search from "./components/Search";
import { useState } from 'react';

const Home = () => {
    const [searchResults,setSearchResults] = useState([]);
    const apiKey="8Pe9gFTl5JkS2qvfSC5CdmEV2s2VTNXAPatQlquFdAdkPKpgMFMBdU1Q"
    const performSearch = () => {
        const url = ""
        fetch(url , {
            headers: {
                Authorization:apiKey,
            },
        })
        .then((response) => response.json ())
        .then((data =>{
            setSearchResults(data)
        }))
        .catch ((error) =>{
            console.error('Error fetching search results:',error)
        });

};
    


 const [images, setImages] = useState([]);

    return (
        <div>
            <h1>Home page</h1>
           <Menu  />
           <Images images={images}/>

        </div>

    )
        
    };

export default Home;
