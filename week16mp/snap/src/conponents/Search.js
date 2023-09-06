import React, {useState} from 'react';
import Images from "./components/Images";

const Search = () => {
    const [searchTerm, setSearchTerm] = userState('');
   
    const handleSearch =(e) =>{
        e.preventDefault();
        performSearch();
    };
    return(
        <div className = 'app'>
            <h2>Rechercher des images</h2>
            <form onSubmit={handleSearch}>
                <input
                type= "text"
                vale={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Entrez un type d'image...."
                />
                <button type="submit">Rechercher</button>
            </form>
            <Images images={searchResults}/>
        </div>
    );
};
export default Search;
