import './Navbar.css'
import PokemonLogo from "../imgs/Pokemon-Logo.png"

export default function Navbar() {

  return (
    <nav>
        <div className='divPhotoUser'>
            <img src={PokemonLogo} alt='Pokemon-logo' />
        </div>
        <div className='divTitle'>
            <h1>Pokedex</h1>
        </div>
        <div className='divLinks'>
            <a href="/Pokedex/">Home</a>       
        </div>
    </nav>
  )
}