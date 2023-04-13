import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home(props) {

  console.log(props)
  const { data } = props;
  
  const [isDark, setIsDark] = useState(false);

  const setDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <>
    <Navbar />
    <div className='search'>
      <input type="text" placeholder='search'></input><button>검색</button>
    </div>
    <div className='container'>
        <ul className="country-list">
          {
            data.length > 0 ?
              data.map((item, i) => {
                return (
                  <li className='item' key={i}>
                    <Link to={`/detail/${i}`}>
                      <img src={item.flags.svg}/>
                    </Link>
                      <h4>{item.name.common} <br/>{item.translations.kor.official}</h4>
                      <b>Popultaion: </b>{item.population} <br/>
                      <b>Region: </b>{item.region}<br/>
                      <b>Capital:  </b>{item.capital}
                 
                  </li>
                )
              }) : null
          }
        </ul>
    </div>
    </>
  )
}

export default Home