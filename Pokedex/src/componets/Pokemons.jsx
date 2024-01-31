import { useState,useEffect } from "react";
import "./Pokemons.css"
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

export default function Pokemons() {

    const [apiResults,setApiResults] = useState(null)
    const [apiResultsName,setApiResultsName] = useState([])
    const [searchResults,setSearchResults] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredNames, setFilteredNames] = useState([]);
    const [valueInput,setValueInput] = useState('')

    const getPokemon = async (endpoint)=>{
        const api = `https://pokeapi.co/api/v2/pokemon/${endpoint.toLowerCase()}`//?limit=50
        try{
            const response = await fetch(api);
            const data = await response.json();
            setApiResults(data)
        } catch (error){
        console.error(error)
        }
    }

    const getPokemonName = async () => {
        const endpoint = [];
        for (let i = 1; i <= 710; i++) {
          endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        
        try {
          const promises = endpoint.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data;
          });
          
          const results = await Promise.all(promises);
          setApiResultsName(results);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(()=>{
        getPokemonName()
      },[])

      useEffect(() => {
        if (searchTerm !== "") {
            const filtered = apiResultsName.filter((pokemon) =>
            pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          );
          setFilteredNames(filtered);
        }else if (searchTerm == "") {
          setFilteredNames([])
        }
      }, [apiResultsName, searchTerm, valueInput]);    
      

  return (
    <div className="body-pokemons">
     <Navbar/>
     <main>
        <SearchBar valueInput={searchTerm} searchResultsName={setSearchTerm} pokemonNameSearch={getPokemonName} searchResults={searchResults} setSearchResults={setSearchResults} getPokemon={getPokemon}/> 
     </main>
     <div className="sugestions-names-box">
        {filteredNames.map((pokemon,key)=>{
                return <div key={key} className="sugestions-names">                       
                    <h1 onClick={()=>{setSearchTerm(pokemon.name.toLowerCase())}}>{pokemon.name}</h1>
                </div> 
            })}
     </div>
     <div className="pokemon-box">
            <div className="pokemon-content">
                <section className="imgSection">
                    <img src={apiResults && apiResults.sprites.front_shiny}/>
                </section>
                <section className="typesContent">
                    <h2>{apiResults && apiResults.name}</h2>
                    <h2>Type: {apiResults && apiResults.types[0].type.name}</h2>
                </section>
            </div>
        </div>
    </div>
  )
}