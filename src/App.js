import './App.css';
import axios from 'axios';
import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import Result from './components/Results/Result';

function App() {

  const [input, setInput] = useState('')
  const [pokemon, setPokemon] = useState({})

  function handleClick() {
    if(input === '') {
      alert('Preencha o campo obrigatório.')
      return
    }

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
          setPokemon(response.data)
          setInput('')
        }).catch(err => {
          err = 'Pokemon inexistente'
          alert(err)
        })
  }

  return (
    <div className="App">
      <h1>PokéSearch</h1>
      <div className="inputSearch">
        <input 
        type="text"
        placeholder="Pokemon's name or id"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        />
        <button onClick={handleClick}>
          <FiSearch size={20} color="black"/>
        </button>
      </div>

      {
        Object.keys(pokemon).length > 0 && (
          <Result pokemons={pokemon}/>
        )
      }

    </div>
  )
}

export default App;